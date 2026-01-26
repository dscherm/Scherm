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

        Handles multiple workflow formats:
        1. Nodes with 'positive'/'negative' in title
        2. Nodes with placeholder strings like %prompt%, %negative_prompt%
        3. First CLIPTextEncode as positive, second as negative (fallback)
        """
        if workflow_data is None:
            return None

        import copy
        modified_workflow = copy.deepcopy(workflow_data)

        nodes = modified_workflow.get('nodes', [])

        # Track which nodes we've updated
        positive_updated = False
        negative_updated = False
        clip_encode_nodes = []

        for node in nodes:
            node_type = node.get('type', '')

            # Look for CLIP text encode nodes
            if node_type == 'CLIPTextEncode':
                clip_encode_nodes.append(node)
                title = node.get('title', '').lower()

                # Method 1: Check title for positive/negative
                if 'positive' in title:
                    if 'widgets_values' in node and len(node['widgets_values']) > 0:
                        print(f"Updating positive prompt (by title)")
                        node['widgets_values'][0] = positive_prompt
                        positive_updated = True

                elif 'negative' in title:
                    if 'widgets_values' in node and len(node['widgets_values']) > 0:
                        print(f"Updating negative prompt (by title)")
                        node['widgets_values'][0] = negative_prompt if negative_prompt else "ugly, blurry, low quality"
                        negative_updated = True

                # Method 2: Check for placeholder strings
                elif 'widgets_values' in node and len(node['widgets_values']) > 0:
                    current_value = str(node['widgets_values'][0])

                    if '%prompt%' in current_value or current_value == '%prompt%':
                        print(f"Updating positive prompt (placeholder)")
                        node['widgets_values'][0] = positive_prompt
                        positive_updated = True

                    elif '%negative_prompt%' in current_value or '%negative%' in current_value:
                        print(f"Updating negative prompt (placeholder)")
                        node['widgets_values'][0] = negative_prompt if negative_prompt else "ugly, blurry, low quality"
                        negative_updated = True

        # Method 3: Fallback - use node order (first = positive, second = negative)
        if not positive_updated and len(clip_encode_nodes) >= 1:
            node = clip_encode_nodes[0]
            if 'widgets_values' in node and len(node['widgets_values']) > 0:
                print(f"Updating positive prompt (by order - first CLIPTextEncode)")
                node['widgets_values'][0] = positive_prompt
                positive_updated = True

        if not negative_updated and len(clip_encode_nodes) >= 2:
            node = clip_encode_nodes[1]
            if 'widgets_values' in node and len(node['widgets_values']) > 0:
                print(f"Updating negative prompt (by order - second CLIPTextEncode)")
                node['widgets_values'][0] = negative_prompt if negative_prompt else "ugly, blurry, low quality"
                negative_updated = True

        return modified_workflow
    
    def set_generation_defaults(self, workflow_data: Dict,
                                  checkpoint: str = "flux1-dev-fp8.safetensors",
                                  width: int = 1024,
                                  height: int = 1024,
                                  steps: int = 20,
                                  cfg: float = 7.0,
                                  seed: int = None,
                                  sampler: str = "euler",
                                  scheduler: str = "normal",
                                  denoise: float = 1.0) -> Dict:
        """
        Set default generation parameters for placeholder-based workflows.

        Handles workflows that use placeholders like %model%, %sampler%, etc.
        and fills in null values with sensible defaults.
        """
        if workflow_data is None:
            return None

        import copy
        import random
        modified_workflow = copy.deepcopy(workflow_data)

        # Generate random seed if not provided
        if seed is None:
            seed = random.randint(0, 2**32 - 1)

        nodes = modified_workflow.get('nodes', [])

        for node in nodes:
            node_type = node.get('type', '')
            widgets = node.get('widgets_values', [])

            # CheckpointLoaderSimple - set checkpoint name
            if node_type in ['CheckpointLoaderSimple', 'CheckpointLoader']:
                if widgets and len(widgets) > 0:
                    if widgets[0] == '%model%' or widgets[0] is None:
                        print(f"Setting checkpoint to {checkpoint}")
                        node['widgets_values'][0] = checkpoint

            # EmptyLatentImage - set width, height, batch_size
            elif node_type == 'EmptyLatentImage':
                if widgets:
                    # widgets_values: [width, height, batch_size]
                    if len(widgets) >= 1 and (widgets[0] is None or widgets[0] == '%width%'):
                        node['widgets_values'][0] = width
                    if len(widgets) >= 2 and (widgets[1] is None or widgets[1] == '%height%'):
                        node['widgets_values'][1] = height
                    if len(widgets) >= 3 and widgets[2] is None:
                        node['widgets_values'][2] = 1  # batch_size
                    print(f"Setting image size to {width}x{height}")

            # KSampler - set seed, steps, cfg, sampler, scheduler, denoise
            elif node_type == 'KSampler':
                if widgets and len(widgets) >= 7:
                    # widgets_values: [seed, control_after_generate, steps, cfg, sampler_name, scheduler, denoise]
                    new_widgets = list(widgets)

                    # Position 0: seed
                    if new_widgets[0] is None or new_widgets[0] == '%seed%':
                        new_widgets[0] = seed

                    # Position 1: control_after_generate - keep as is ("randomize" or "fixed")

                    # Position 2: steps
                    if new_widgets[2] is None or new_widgets[2] == '%steps%':
                        new_widgets[2] = steps

                    # Position 3: cfg
                    if new_widgets[3] is None or new_widgets[3] == '%cfg%':
                        new_widgets[3] = cfg

                    # Position 4: sampler_name
                    if new_widgets[4] is None or (isinstance(new_widgets[4], str) and '%' in new_widgets[4]):
                        new_widgets[4] = sampler

                    # Position 5: scheduler
                    if new_widgets[5] is None or (isinstance(new_widgets[5], str) and '%' in new_widgets[5]):
                        new_widgets[5] = scheduler

                    # Position 6: denoise (usually 1.0 for text-to-image)
                    if new_widgets[6] is None or new_widgets[6] == '%denoise%':
                        new_widgets[6] = denoise

                    node['widgets_values'] = new_widgets
                    print(f"Setting KSampler: seed={seed}, steps={steps}, cfg={cfg}, sampler={sampler}, scheduler={scheduler}")

        return modified_workflow

    def modify_image_input(self, workflow_data: Dict, image_filename: str) -> Dict:
        """
        Modify the workflow to use a specific input image

        Args:
            workflow_data: The workflow dictionary
            image_filename: The filename of the image to use (must be in ComfyUI input folder)

        Returns:
            Modified workflow dictionary
        """
        if workflow_data is None:
            return None

        import copy
        modified_workflow = copy.deepcopy(workflow_data)

        nodes = modified_workflow.get('nodes', [])

        for node in nodes:
            node_type = node.get('type', '')

            # Look for LoadImage nodes
            if node_type == 'LoadImage':
                if 'widgets_values' in node and len(node['widgets_values']) > 0:
                    print(f"Found LoadImage node, updating image to {image_filename}")
                    node['widgets_values'][0] = image_filename
                    # Keep the second value as "image" if it exists
                    if len(node['widgets_values']) < 2:
                        node['widgets_values'].append("image")

        return modified_workflow

    def get_3d_workflows(self) -> Dict:
        """
        Get all 3D generation workflows

        Returns:
            Dictionary of workflow_filename -> workflow_info for 3D workflows
        """
        return {
            name: info for name, info in WORKFLOWS.items()
            if info.get('type') == '3d_generation'
        }

    def get_image_generation_workflows(self) -> Dict:
        """
        Get all 2D image generation workflows

        Returns:
            Dictionary of workflow_filename -> workflow_info for 2D workflows
        """
        return {
            name: info for name, info in WORKFLOWS.items()
            if info.get('type') == '2d_image'
        }

    def convert_to_api_format(self, workflow_data: Dict) -> Dict:
        """
        Convert workflow from UI format (nodes array) to API format (dict with class_type/inputs)

        ComfyUI UI saves workflows with a 'nodes' array, but the API expects:
        {
            "node_id": {
                "class_type": "NodeType",
                "inputs": {...}
            }
        }
        """
        if workflow_data is None:
            return None

        # If already in API format (no 'nodes' key, has string keys with 'class_type')
        if 'nodes' not in workflow_data:
            # Check if it's already API format
            for key, value in workflow_data.items():
                if isinstance(value, dict) and 'class_type' in value:
                    return workflow_data
            return workflow_data

        nodes = workflow_data.get('nodes', [])
        links = workflow_data.get('links', [])

        # Build a link lookup: link_id -> (source_node_id, source_slot)
        link_lookup = {}
        for link in links:
            # link format: [link_id, source_node_id, source_slot, target_node_id, target_slot, type]
            if len(link) >= 5:
                link_id = link[0]
                source_node_id = link[1]
                source_slot = link[2]
                link_lookup[link_id] = (source_node_id, source_slot)

        api_workflow = {}

        for node in nodes:
            node_id = str(node.get('id'))
            class_type = node.get('type', '')

            # Skip certain UI-only nodes
            if class_type in ['Note', 'Reroute', 'PrimitiveNode', 'MarkdownNote', 'SetNode', 'GetNode']:
                # Handle Reroute nodes - they pass through connections
                continue

            inputs = {}

            # Get widget values and map them to input names
            widgets_values = node.get('widgets_values', [])

            # Get the node's input definitions
            node_inputs = node.get('inputs', [])

            # Process connected inputs
            for inp in node_inputs:
                inp_name = inp.get('name')
                link_id = inp.get('link')

                if link_id is not None and link_id in link_lookup:
                    source_node_id, source_slot = link_lookup[link_id]
                    # Reference format: [node_id_string, slot_index]
                    inputs[inp_name] = [str(source_node_id), source_slot]

            # Process widget values - this is tricky as we need to know the widget names
            # For common node types, map widget_values to input names
            widget_inputs = self._get_widget_inputs(class_type, widgets_values, node)

            # Merge widget inputs (don't overwrite connected inputs)
            for key, value in widget_inputs.items():
                if key not in inputs:
                    inputs[key] = value

            api_workflow[node_id] = {
                "class_type": class_type,
                "inputs": inputs
            }

        return api_workflow

    def _get_widget_inputs(self, class_type: str, widgets_values: list, node: dict) -> Dict:
        """
        Map widget_values to input names based on node type

        This is node-type specific since ComfyUI doesn't store widget names in the workflow
        """
        inputs = {}

        if not widgets_values:
            return inputs

        # Try to get widget names from cached object_info
        if hasattr(self, '_object_info') and self._object_info:
            node_info = self._object_info.get(class_type, {})
            if node_info:
                required = node_info.get('input', {}).get('required', {})
                optional = node_info.get('input', {}).get('optional', {})

                # Get all input names in order (required first, then optional)
                # Filter to only widget inputs (not connection inputs)
                widget_names = []
                for name, spec in required.items():
                    # Skip inputs that are connections (have a type like "IMAGE", "MODEL", etc.)
                    if isinstance(spec, list) and len(spec) > 0:
                        if isinstance(spec[0], list):
                            # This is an enum/dropdown widget
                            widget_names.append(name)
                        elif spec[0] in ['INT', 'FLOAT', 'STRING', 'BOOLEAN']:
                            widget_names.append(name)
                        # Skip connection types like "IMAGE", "MODEL", etc.

                for name, spec in optional.items():
                    if isinstance(spec, list) and len(spec) > 0:
                        if isinstance(spec[0], list):
                            widget_names.append(name)
                        elif spec[0] in ['INT', 'FLOAT', 'STRING', 'BOOLEAN']:
                            widget_names.append(name)

                for i, value in enumerate(widgets_values):
                    if i < len(widget_names):
                        inputs[widget_names[i]] = value

                return inputs

        # Fallback: Common node type mappings (may be outdated)
        widget_mappings = {
            'LoadImage': ['image', 'upload'],
            'CheckpointLoaderSimple': ['ckpt_name'],
            'CLIPTextEncode': ['text'],
            'KSampler': ['seed', 'control_after_generate', 'steps', 'cfg', 'sampler_name', 'scheduler', 'denoise'],
            'EmptyLatentImage': ['width', 'height', 'batch_size'],
            'VAEDecode': [],
            'SaveImage': ['filename_prefix'],
            'PreviewImage': [],
        }

        widget_names = widget_mappings.get(class_type, [])

        for i, value in enumerate(widgets_values):
            if i < len(widget_names):
                name = widget_names[i]
                if name:
                    inputs[name] = value

        return inputs

    def set_object_info(self, object_info: Dict):
        """Set the object_info cache from ComfyUI"""
        self._object_info = object_info

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
