# main.py - Main GUI application for ComfyUI Prompter

import tkinter as tk
from tkinter import ttk, scrolledtext, messagebox
import threading
from pathlib import Path

from ollama_recommender import OllamaRecommender
from workflow_manager import WorkflowManager
from comfyui_api import ComfyUIAPI
from config import WORKFLOWS, CHECKPOINTS, COMFYUI_WORKFLOWS_PATH


class ComfyUIPrompterGUI:
    """Main GUI application"""
    
    def __init__(self, root):
        self.root = root
        self.root.title("ComfyUI Prompter - AI-Powered Workflow Selector")
        self.root.geometry("900x700")
        
        # Initialize components
        self.recommender = OllamaRecommender()
        self.workflow_manager = WorkflowManager()
        self.comfyui_api = ComfyUIAPI()
        
        # Current recommendation
        self.current_recommendation = None
        
        # Setup GUI
        self.setup_gui()
        
        # Check systems on startup
        self.check_systems()
    
    def setup_gui(self):
        """Setup the GUI layout"""
        
        # Main container
        main_frame = ttk.Frame(self.root, padding="10")
        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Configure grid weights
        self.root.columnconfigure(0, weight=1)
        self.root.rowconfigure(0, weight=1)
        main_frame.columnconfigure(0, weight=1)
        
        # Title
        title_label = ttk.Label(main_frame, text="ComfyUI AI Prompter", 
                                font=('Arial', 16, 'bold'))
        title_label.grid(row=0, column=0, pady=10)
        
        # Status frame
        status_frame = ttk.LabelFrame(main_frame, text="System Status", padding="5")
        status_frame.grid(row=1, column=0, sticky=(tk.W, tk.E), pady=5)
        status_frame.columnconfigure(1, weight=1)
        
        self.ollama_status_label = ttk.Label(status_frame, text="Ollama: Checking...")
        self.ollama_status_label.grid(row=0, column=0, sticky=tk.W, padx=5)
        
        self.comfyui_status_label = ttk.Label(status_frame, text="ComfyUI: Checking...")
        self.comfyui_status_label.grid(row=0, column=1, sticky=tk.W, padx=5)
        
        # Prompt input section
        prompt_frame = ttk.LabelFrame(main_frame, text="Your Prompt", padding="10")
        prompt_frame.grid(row=2, column=0, sticky=(tk.W, tk.E, tk.N, tk.S), pady=5)
        prompt_frame.columnconfigure(0, weight=1)
        prompt_frame.rowconfigure(0, weight=1)
        
        self.prompt_text = scrolledtext.ScrolledText(prompt_frame, height=4, wrap=tk.WORD)
        self.prompt_text.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S), pady=5)
        
        # Analyze button
        self.analyze_button = ttk.Button(prompt_frame, text="🔍 Analyze Prompt", 
                                        command=self.analyze_prompt)
        self.analyze_button.grid(row=1, column=0, pady=5)
        
        # Recommendations section
        rec_frame = ttk.LabelFrame(main_frame, text="AI Recommendations", padding="10")
        rec_frame.grid(row=3, column=0, sticky=(tk.W, tk.E), pady=5)
        rec_frame.columnconfigure(1, weight=1)
        
        # Workflow selection
        ttk.Label(rec_frame, text="Workflow:").grid(row=0, column=0, sticky=tk.W, pady=5)
        self.workflow_var = tk.StringVar()
        self.workflow_combo = ttk.Combobox(rec_frame, textvariable=self.workflow_var, 
                                          state='readonly', width=50)
        self.workflow_combo.grid(row=0, column=1, sticky=(tk.W, tk.E), padx=5, pady=5)
        self.workflow_combo['values'] = list(WORKFLOWS.keys())
        self.workflow_combo.bind('<<ComboboxSelected>>', self.on_workflow_changed)
        
        # Checkpoint selection
        ttk.Label(rec_frame, text="Checkpoint:").grid(row=1, column=0, sticky=tk.W, pady=5)
        self.checkpoint_var = tk.StringVar()
        self.checkpoint_combo = ttk.Combobox(rec_frame, textvariable=self.checkpoint_var,
                                            state='readonly', width=50)
        self.checkpoint_combo.grid(row=1, column=1, sticky=(tk.W, tk.E), padx=5, pady=5)
        self.checkpoint_combo['values'] = list(CHECKPOINTS.keys())
        
        # Reasoning display
        ttk.Label(rec_frame, text="AI Reasoning:").grid(row=2, column=0, sticky=tk.W, pady=5)
        self.reasoning_label = ttk.Label(rec_frame, text="", wraplength=600, justify=tk.LEFT)
        self.reasoning_label.grid(row=2, column=1, sticky=tk.W, padx=5, pady=5)
        
        # Model check status
        self.model_check_label = ttk.Label(rec_frame, text="", foreground="green")
        self.model_check_label.grid(row=3, column=0, columnspan=2, pady=5)
        
        # Action buttons
        button_frame = ttk.Frame(main_frame)
        button_frame.grid(row=4, column=0, pady=10)
        
        self.generate_button = ttk.Button(button_frame, text="🎨 Generate", 
                                         command=self.generate_content, state='disabled')
        self.generate_button.pack(side=tk.LEFT, padx=5)
        
        ttk.Button(button_frame, text="📁 Open Workflows Folder", 
                  command=self.open_workflows_folder).pack(side=tk.LEFT, padx=5)
        
        # Log/output section
        log_frame = ttk.LabelFrame(main_frame, text="Log", padding="10")
        log_frame.grid(row=5, column=0, sticky=(tk.W, tk.E, tk.N, tk.S), pady=5)
        log_frame.columnconfigure(0, weight=1)
        log_frame.rowconfigure(0, weight=1)
        
        self.log_text = scrolledtext.ScrolledText(log_frame, height=10, wrap=tk.WORD, 
                                                  state='disabled')
        self.log_text.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Configure grid weights for resizing
        main_frame.rowconfigure(2, weight=1)
        main_frame.rowconfigure(5, weight=2)
    
    def log(self, message: str):
        """Add message to log"""
        self.log_text.config(state='normal')
        self.log_text.insert(tk.END, f"{message}\n")
        self.log_text.see(tk.END)
        self.log_text.config(state='disabled')
        print(message)  # Also print to console
    
    def check_systems(self):
        """Check if Ollama and ComfyUI are available"""
        self.log("Checking system availability...")
        
        # Check Ollama
        if self.recommender.check_ollama_available():
            self.ollama_status_label.config(text="Ollama: ✅ Running", foreground="green")
            self.log("✅ Ollama is running")
        else:
            self.ollama_status_label.config(text="Ollama: ❌ Not available", foreground="red")
            self.log("❌ Ollama is not running. Please start Ollama.")
        
        # Check ComfyUI
        if self.comfyui_api.check_connection():
            self.comfyui_status_label.config(text="ComfyUI: ✅ Running", foreground="green")
            self.log("✅ ComfyUI is running")
        else:
            self.comfyui_status_label.config(text="ComfyUI: ❌ Not available", foreground="red")
            self.log("❌ ComfyUI is not running. Please start ComfyUI.")
        
        self.log(f"Workflows folder: {COMFYUI_WORKFLOWS_PATH}")
    
    def analyze_prompt(self):
        """Analyze the user's prompt and get recommendations"""
        user_prompt = self.prompt_text.get("1.0", tk.END).strip()
        
        if not user_prompt:
            messagebox.showwarning("Empty Prompt", "Please enter a prompt first!")
            return
        
        self.log(f"\n🔍 Analyzing prompt: {user_prompt[:100]}...")
        self.analyze_button.config(state='disabled')
        
        # Run analysis in background thread
        def analyze_thread():
            recommendation = self.recommender.analyze_prompt(user_prompt)
            
            # Update GUI from main thread
            self.root.after(0, lambda: self.display_recommendation(recommendation))
        
        thread = threading.Thread(target=analyze_thread, daemon=True)
        thread.start()
    
    def display_recommendation(self, recommendation: dict):
        """Display the AI recommendation"""
        self.current_recommendation = recommendation
        
        workflow = recommendation.get('recommended_workflow', '')
        checkpoint = recommendation.get('recommended_checkpoint', '')
        reasoning = recommendation.get('reasoning', '')
        
        self.log(f"✨ Recommended workflow: {workflow}")
        self.log(f"✨ Recommended checkpoint: {checkpoint}")
        self.log(f"💡 Reasoning: {reasoning}")
        
        # Update dropdowns
        if workflow in self.workflow_combo['values']:
            self.workflow_combo.set(workflow)
        
        if checkpoint and checkpoint != "None":
            # Add checkpoint if not in list
            current_checkpoints = list(self.checkpoint_combo['values'])
            if checkpoint not in current_checkpoints:
                current_checkpoints.append(checkpoint)
                self.checkpoint_combo['values'] = current_checkpoints
            self.checkpoint_combo.set(checkpoint)
        else:
            self.checkpoint_combo.set('')
        
        self.reasoning_label.config(text=reasoning)
        
        # Check if required models are available
        self.check_required_models()
        
        self.analyze_button.config(state='normal')
        self.generate_button.config(state='normal')
    
    def on_workflow_changed(self, event):
        """Handle workflow selection change"""
        workflow = self.workflow_var.get()
        workflow_info = WORKFLOWS.get(workflow)
        
        if workflow_info:
            # Auto-select the appropriate checkpoint
            checkpoint = workflow_info.get('checkpoint')
            if checkpoint:
                self.checkpoint_combo.set(checkpoint)
            else:
                self.checkpoint_combo.set('')
            
            self.check_required_models()
    
    def check_required_models(self):
        """Check if required models are present"""
        workflow = self.workflow_var.get()
        
        if not workflow:
            return
        
        result = self.workflow_manager.check_required_models(workflow)
        
        if result['has_checkpoint']:
            if result['checkpoint_path']:
                self.model_check_label.config(
                    text=f"✅ Required model found: {result['checkpoint_path'].name}",
                    foreground="green"
                )
            else:
                self.model_check_label.config(
                    text="✅ No checkpoint required for this workflow",
                    foreground="green"
                )
        else:
            missing = ', '.join(result['missing_models'])
            self.model_check_label.config(
                text=f"⚠️ Missing models: {missing}",
                foreground="red"
            )
            self.log(f"⚠️ WARNING: Missing required models: {missing}")
    
    def generate_content(self):
        """Generate content using ComfyUI"""
        workflow_name = self.workflow_var.get()
        checkpoint_name = self.checkpoint_var.get()
        user_prompt = self.prompt_text.get("1.0", tk.END).strip()
        
        if not workflow_name:
            messagebox.showwarning("No Workflow", "Please select a workflow first!")
            return
        
        self.log(f"\n🎨 Starting generation...")
        self.log(f"Workflow: {workflow_name}")
        self.log(f"Checkpoint: {checkpoint_name if checkpoint_name else 'None'}")
        
        self.generate_button.config(state='disabled')
        
        # Run generation in background thread
        def generate_thread():
            try:
                # Load workflow
                workflow_data = self.workflow_manager.load_workflow(workflow_name)
                if not workflow_data:
                    self.log("❌ Failed to load workflow")
                    return
                
                # Modify checkpoint if needed
                if checkpoint_name:
                    workflow_data = self.workflow_manager.modify_checkpoint(
                        workflow_data, checkpoint_name
                    )
                
                # Modify prompts
                workflow_data = self.workflow_manager.modify_prompt(
                    workflow_data, user_prompt
                )
                
                # Queue in ComfyUI
                result = self.comfyui_api.queue_prompt(workflow_data)
                
                if result:
                    prompt_id = result.get('prompt_id')
                    self.log(f"✅ Queued in ComfyUI! Prompt ID: {prompt_id}")
                    self.log("Check ComfyUI interface to see the generation progress")
                else:
                    self.log("❌ Failed to queue prompt in ComfyUI")
                
            except Exception as e:
                self.log(f"❌ Error: {e}")
            finally:
                self.root.after(0, lambda: self.generate_button.config(state='normal'))
        
        thread = threading.Thread(target=generate_thread, daemon=True)
        thread.start()
    
    def open_workflows_folder(self):
        """Open the workflows folder in file explorer"""
        import os
        import platform
        
        path = str(COMFYUI_WORKFLOWS_PATH)
        
        if platform.system() == "Windows":
            os.startfile(path)
        elif platform.system() == "Darwin":  # macOS
            os.system(f'open "{path}"')
        else:  # Linux
            os.system(f'xdg-open "{path}"')


def main():
    root = tk.Tk()
    app = ComfyUIPrompterGUI(root)
    root.mainloop()


if __name__ == "__main__":
    main()
