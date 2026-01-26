# comfyui_api.py - Handles communication with ComfyUI API

import requests
import json
import uuid
import time
from pathlib import Path
from typing import Dict, Optional, List
from config import COMFYUI_URL, OUTPUT_3D_PATH


class ComfyUIAPI:
    """Handles communication with ComfyUI's API"""
    
    def __init__(self, base_url: str = COMFYUI_URL):
        self.base_url = base_url
        self.client_id = str(uuid.uuid4())
    
    def check_connection(self) -> bool:
        """Check if ComfyUI is running and accessible"""
        try:
            response = requests.get(f"{self.base_url}/system_stats", timeout=2)
            return response.status_code == 200
        except:
            return False
    
    def queue_prompt(self, workflow_data: Dict) -> Optional[Dict]:
        """
        Queue a prompt (workflow) for execution in ComfyUI
        
        Returns:
            {
                "prompt_id": "uuid",
                "number": queue_number,
                "node_errors": {}
            }
        """
        try:
            # Prepare the payload
            payload = {
                "prompt": workflow_data,
                "client_id": self.client_id
            }
            
            # Send to ComfyUI
            response = requests.post(
                f"{self.base_url}/prompt",
                json=payload,
                timeout=10
            )
            
            if response.status_code == 200:
                result = response.json()
                print(f"Prompt queued successfully: {result}")
                return result
            else:
                print(f"Failed to queue prompt: {response.status_code}")
                print(f"Response: {response.text}")
                return None
                
        except Exception as e:
            print(f"Error queueing prompt: {e}")
            return None
    
    def get_queue_status(self) -> Dict:
        """Get the current queue status"""
        try:
            response = requests.get(f"{self.base_url}/queue", timeout=5)
            if response.status_code == 200:
                return response.json()
            return {}
        except:
            return {}
    
    def get_history(self, prompt_id: str) -> Optional[Dict]:
        """Get the history/results for a specific prompt"""
        try:
            response = requests.get(f"{self.base_url}/history/{prompt_id}", timeout=5)
            if response.status_code == 200:
                return response.json()
            return None
        except:
            return None
    
    def interrupt_execution(self) -> bool:
        """Interrupt the current execution"""
        try:
            response = requests.post(f"{self.base_url}/interrupt", timeout=2)
            return response.status_code == 200
        except:
            return False
    
    def get_system_stats(self) -> Optional[Dict]:
        """Get ComfyUI system statistics"""
        try:
            response = requests.get(f"{self.base_url}/system_stats", timeout=5)
            if response.status_code == 200:
                return response.json()
            return None
        except:
            return None

    def get_object_info(self, node_type: str = None) -> Optional[Dict]:
        """
        Get node definitions from ComfyUI

        Args:
            node_type: Specific node type to get info for, or None for all

        Returns:
            Dictionary of node definitions with input/output specs
        """
        try:
            if node_type:
                response = requests.get(f"{self.base_url}/object_info/{node_type}", timeout=10)
            else:
                response = requests.get(f"{self.base_url}/object_info", timeout=30)

            if response.status_code == 200:
                return response.json()
            return None
        except:
            return None
    
    def wait_for_completion(self, prompt_id: str, timeout: int = 300) -> bool:
        """
        Wait for a prompt to complete execution
        
        Args:
            prompt_id: The ID of the prompt to wait for
            timeout: Maximum time to wait in seconds
            
        Returns:
            True if completed successfully, False if timeout or error
        """
        start_time = time.time()
        
        while True:
            # Check if we've exceeded timeout
            if time.time() - start_time > timeout:
                print(f"Timeout waiting for prompt {prompt_id}")
                return False
            
            # Check history for this prompt
            history = self.get_history(prompt_id)
            
            if history and prompt_id in history:
                # Prompt has completed
                print(f"Prompt {prompt_id} completed!")
                return True
            
            # Check queue status
            queue_status = self.get_queue_status()
            queue_running = queue_status.get('queue_running', [])
            
            # Check if our prompt is in the running queue
            is_running = any(item[1] == prompt_id for item in queue_running)
            
            if not is_running:
                # Not in running queue, check pending
                queue_pending = queue_status.get('queue_pending', [])
                is_pending = any(item[1] == prompt_id for item in queue_pending)
                
                if not is_pending:
                    # Not in pending either - might have completed or errored
                    time.sleep(1)
                    continue
            
            # Still processing, wait a bit
            time.sleep(2)

    def get_job_status(self, prompt_id: str) -> Dict:
        """
        Get detailed job status including output paths

        Returns:
            {
                "status": "pending" | "running" | "completed" | "error",
                "progress": float (0-100),
                "outputs": [list of output file paths],
                "error": str or None
            }
        """
        result = {
            "status": "pending",
            "progress": 0.0,
            "outputs": [],
            "error": None
        }

        # Check if in history (completed)
        history = self.get_history(prompt_id)
        if history and prompt_id in history:
            result["status"] = "completed"
            result["progress"] = 100.0

            # Extract output paths from history
            outputs = history[prompt_id].get("outputs", {})
            result["outputs"] = self._extract_output_paths(outputs)
            return result

        # Check queue status
        queue_status = self.get_queue_status()
        queue_running = queue_status.get('queue_running', [])
        queue_pending = queue_status.get('queue_pending', [])

        # Check if running
        for item in queue_running:
            if len(item) > 1 and item[1] == prompt_id:
                result["status"] = "running"
                result["progress"] = 50.0  # Approximate
                return result

        # Check if pending
        for item in queue_pending:
            if len(item) > 1 and item[1] == prompt_id:
                result["status"] = "pending"
                return result

        # Not found anywhere - might have errored
        result["status"] = "error"
        result["error"] = "Job not found in queue or history"
        return result

    def _extract_output_paths(self, outputs: Dict) -> List[str]:
        """
        Extract file paths from ComfyUI output structure

        Looks for GLB files, images, and other outputs
        """
        paths = []

        for node_id, node_outputs in outputs.items():
            # Check for 3D mesh exports (glb_path, file_path)
            if isinstance(node_outputs, dict):
                for key in ['glb_path', 'file_path', 'mesh_path']:
                    if key in node_outputs:
                        value = node_outputs[key]
                        if isinstance(value, list):
                            paths.extend(value)
                        elif isinstance(value, str):
                            paths.append(value)

            # Check for images array
            if isinstance(node_outputs, dict) and 'images' in node_outputs:
                for img in node_outputs['images']:
                    if isinstance(img, dict) and 'filename' in img:
                        subfolder = img.get('subfolder', '')
                        filename = img['filename']
                        if subfolder:
                            paths.append(f"{subfolder}/{filename}")
                        else:
                            paths.append(filename)

            # Check for gltf/glb files in various formats
            if isinstance(node_outputs, dict):
                for key, value in node_outputs.items():
                    if isinstance(value, str) and (value.endswith('.glb') or value.endswith('.gltf')):
                        paths.append(value)
                    elif isinstance(value, list):
                        for item in value:
                            if isinstance(item, str) and (item.endswith('.glb') or item.endswith('.gltf')):
                                paths.append(item)

        return paths

    def get_output_glb_path(self, prompt_id: str) -> Optional[str]:
        """
        Get the GLB output path for a completed job

        Returns the full path to the GLB file or None if not found
        """
        status = self.get_job_status(prompt_id)

        if status["status"] != "completed":
            return None

        # Look for GLB files in outputs
        for output in status["outputs"]:
            if output.endswith('.glb') or output.endswith('.gltf'):
                # Convert relative path to absolute
                if not Path(output).is_absolute():
                    full_path = OUTPUT_3D_PATH / output
                    if full_path.exists():
                        return str(full_path)
                    # Try ComfyUI output folder
                    full_path = Path("C:/ComfyUI/output") / output
                    if full_path.exists():
                        return str(full_path)
                return output

        # If no outputs found, try to find the file from the workflow
        # Some export nodes save directly without returning output
        history = self.get_history(prompt_id)
        if history and prompt_id in history:
            prompt_data = history[prompt_id].get('prompt', [])
            if len(prompt_data) >= 3:
                workflow = prompt_data[2]
                glb_path = self._find_glb_from_workflow(workflow)
                if glb_path:
                    return glb_path

        return None

    def _find_glb_from_workflow(self, workflow: Dict) -> Optional[str]:
        """
        Find the most recent GLB file based on export node settings in workflow
        """
        for node_id, node_data in workflow.items():
            class_type = node_data.get('class_type', '')
            inputs = node_data.get('inputs', {})

            # Check for various 3D export node types
            if class_type in ['TripoSGExportMesh', 'Hy3DExportMesh', 'SaveGLB', 'ExportMesh']:
                filename_prefix = inputs.get('filename_prefix', '3D/output')
                file_format = inputs.get('file_format', inputs.get('format', 'glb'))

                # Build the search pattern
                search_dir = Path("C:/ComfyUI/output")
                if '/' in filename_prefix:
                    subdir = filename_prefix.rsplit('/', 1)[0]
                    search_dir = search_dir / subdir
                    prefix = filename_prefix.rsplit('/', 1)[1]
                else:
                    prefix = filename_prefix

                # Find the most recent matching file
                if search_dir.exists():
                    pattern = f"{prefix}_*.{file_format}"
                    matching_files = list(search_dir.glob(pattern))
                    if matching_files:
                        # Return the most recently modified file
                        newest = max(matching_files, key=lambda p: p.stat().st_mtime)
                        return str(newest)

        return None
