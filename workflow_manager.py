# workflow_manager.py - Handles loading and modifying ComfyUI workflow JSON files

import json
from pathlib import Path
from typing import Dict, Optional, List
from config import COMFYUI_WORKFLOWS_PATH, WORKFLOWS


class WorkflowManager:
    """Manages ComfyUI workflow JSON files"""
    
    def __init__(self, workflows_path: Path = COMFYUI_WORKFLOWS_PATH):
        self.workflows_path = Path(workflows_path)
        
    def load_workflow(self, workflow_filename: str) -> Optional[Dict]:
        """Load a workflow JSON file"""
        workflow_path = self.workflows_path / workflow_filename
        
        if not workflow_path.exists():
            print(f"Workflow not found: {workflow_path}")
            return None
        
        try:
            with open(workflow_path, 'r', encoding='utf-8') as f:
                workflow_data = json.load(f)
            return workflow_data
        except Exception as e:
            print(f"Error loading workflow {workflow_filename}: {e}")
            return None
    
    def modify_checkpoint(self, workflow_data: Dict, checkpoint_name: str) -> Dict:
        """
        Modify the workflow to use a different checkpoint
        
        This is the tricky part - we need to find where checkpoints are referenced
        in the workflow and update them. Different workflows have different structures.
        """
        if workflow_data is None:
            return None
        
        # Make a deep copy to avoid modifying the original
        import copy
        modified_workflow = copy.deepcopy(workflow_data)
        
        # Look for checkpoint loaders in the nodes
        nodes = modified_workflow.get('nodes', [])
        
        for node in nodes:
            node_type = node.get('type', '')
            
            # Common checkpoint loader node types
            if node_type in ['CheckpointLoaderSimple', 'CheckpointLoader']:
                # Update the checkpoint in widgets_values
                if 'widgets_values' in node and len(node['widgets_values']) > 0:
                    print(f"Found checkpoint loader: {node_type}, updating checkpoint to {checkpoint_name}")
                    node['widgets_values'][0] = checkpoint_name
            
            # For image-only checkpoint loaders (used in 3D workflows)
            elif node_type == 'ImageOnlyCheckpointLoader':
                if 'widgets_values' in node and len(node['widgets_values']) > 0:
                    print(f"Found ImageOnlyCheckpointLoader, updating to {checkpoint_name}")
                    node['widgets_values'][0] = checkpoint_name
            
            # For UNET loaders (used in some video workflows)
            elif node_type == 'UNETLoader':
                if 'widgets_values' in node and len(node['widgets_values']) > 0:
                    print(f"Found UNETLoader, updating to {checkpoint_name}")
                    node['widgets_values'][0] = checkpoint_name
        
        return modified_workflow
    
    def modify_prompt(self, workflow_data: Dict, positive_prompt: str, negative_prompt: str = "") -> Dict:
        """
        Modify the positive and negative prompts in the workflow
        """
        if workflow_data is None:
            return None
        
        import copy
        modified_workflow = copy.deepcopy(workflow_data)
        
        nodes = modified_workflow.get('nodes', [])
        
        for node in nodes:
            node_type = node.get('type', '')
            
            # Look for CLIP text encode nodes
            if node_type == 'CLIPTextEncode':
                # Check the title to determine if it's positive or negative
                title = node.get('title', '').lower()
                
                if 'positive' in title:
                    if 'widgets_values' in node and len(node['widgets_values']) > 0:
                        print(f"Updating positive prompt")
                        node['widgets_values'][0] = positive_prompt
                
                elif 'negative' in title:
                    if 'widgets_values' in node and len(node['widgets_values']) > 0:
                        print(f"Updating negative prompt")
                        node['widgets_values'][0] = negative_prompt if negative_prompt else "ugly, blurry, low quality"
        
        return modified_workflow
    
    def save_workflow(self, workflow_data: Dict, output_filename: str) -> bool:
        """Save modified workflow to a new file"""
        output_path = self.workflows_path / output_filename
        
        try:
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(workflow_data, f, indent=2)
            print(f"Workflow saved to: {output_path}")
            return True
        except Exception as e:
            print(f"Error saving workflow: {e}")
            return False
    
    def get_available_workflows(self) -> List[str]:
        """Get list of all available workflow JSON files"""
        if not self.workflows_path.exists():
            print(f"Workflows path does not exist: {self.workflows_path}")
            return []
        
        workflow_files = []
        for file in self.workflows_path.glob("*.json"):
            workflow_files.append(file.name)
        
        return sorted(workflow_files)
    
    def get_workflow_info(self, workflow_filename: str) -> Optional[Dict]:
        """Get information about a workflow from the config"""
        return WORKFLOWS.get(workflow_filename)
    
    def check_required_models(self, workflow_filename: str) -> Dict:
        """
        Check if the required models for a workflow are available
        
        Returns:
            {
                "has_checkpoint": bool,
                "checkpoint_path": Path or None,
                "missing_models": [list of missing model names]
            }
        """
        workflow_info = self.get_workflow_info(workflow_filename)
        
        if not workflow_info:
            return {
                "has_checkpoint": False,
                "checkpoint_path": None,
                "missing_models": ["Workflow not found in config"]
            }
        
        required_checkpoint = workflow_info.get('checkpoint')
        
        # If no checkpoint is required (like SVG conversion), return success
        if required_checkpoint is None:
            return {
                "has_checkpoint": True,
                "checkpoint_path": None,
                "missing_models": []
            }
        
        # Check if checkpoint exists
        from config import COMFYUI_CHECKPOINTS_PATH, COMFYUI_DIFFUSION_MODELS_PATH
        
        checkpoint_locations = [
            COMFYUI_CHECKPOINTS_PATH / required_checkpoint,
            COMFYUI_DIFFUSION_MODELS_PATH / required_checkpoint,
        ]
        
        for checkpoint_path in checkpoint_locations:
            if checkpoint_path.exists():
                return {
                    "has_checkpoint": True,
                    "checkpoint_path": checkpoint_path,
                    "missing_models": []
                }
        
        # Checkpoint not found
        return {
            "has_checkpoint": False,
            "checkpoint_path": None,
            "missing_models": [required_checkpoint]
        }
