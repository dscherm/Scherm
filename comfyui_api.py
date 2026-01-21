# comfyui_api.py - Handles communication with ComfyUI API

import requests
import json
import uuid
import time
from typing import Dict, Optional
from config import COMFYUI_URL


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
