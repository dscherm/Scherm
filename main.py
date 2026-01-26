# main.py - Main GUI application for ComfyUI Prompter

import sys
import io

# Fix Windows console encoding for emoji support
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

import tkinter as tk
from tkinter import ttk, scrolledtext, messagebox
import threading
from pathlib import Path

from ollama_recommender import OllamaRecommender
from workflow_manager import WorkflowManager
from comfyui_api import ComfyUIAPI
from config import WORKFLOWS, CHECKPOINTS, COMFYUI_WORKFLOWS_PATH, COMFYUI_PATH
from model_downloader import ModelDownloader
from model_registry import get_model_info, MODEL_REGISTRY
import subprocess
import time

# Video models required for video generation
VIDEO_MODELS = {
    "wan2.1_t2v_1.3B_fp16.safetensors": {
        "description": "Wan 2.1 Text-to-Video diffusion model (2.6 GB)",
        "required_for": "Text-to-Video generation"
    },
    "umt5_xxl_fp8_e4m3fn_scaled.safetensors": {
        "description": "UMT5-XXL text encoder for Wan (4.9 GB)",
        "required_for": "All Wan video workflows"
    },
    "wan_2.1_vae.safetensors": {
        "description": "Wan 2.1 VAE decoder (0.2 GB)",
        "required_for": "All Wan video workflows"
    },
    "Wan2.1_14B_VACE-Q4_K_M.gguf": {
        "description": "Wan 2.1 VACE 14B quantized for Image-to-Video (8.5 GB)",
        "required_for": "Image-to-Video generation"
    },
}


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
        self.model_downloader = ModelDownloader()

        # Current recommendation
        self.current_recommendation = None
        self.current_missing_model = None  # Track which model needs downloading
        self.download_in_progress = False
        
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

        # Download button (hidden by default)
        self.download_button = ttk.Button(rec_frame, text="Download Model",
                                          command=self.download_missing_model)
        self.download_button.grid(row=4, column=0, columnspan=2, pady=5)
        self.download_button.grid_remove()  # Hidden by default

        # Progress bar for downloads (hidden by default)
        self.download_progress = ttk.Progressbar(rec_frame, orient="horizontal",
                                                  length=400, mode="determinate")
        self.download_progress.grid(row=5, column=0, columnspan=2, pady=2)
        self.download_progress.grid_remove()  # Hidden by default

        # Progress label for download status (hidden by default)
        self.download_progress_label = ttk.Label(rec_frame, text="", foreground="blue")
        self.download_progress_label.grid(row=6, column=0, columnspan=2, pady=2)
        self.download_progress_label.grid_remove()  # Hidden by default

        # Action buttons
        button_frame = ttk.Frame(main_frame)
        button_frame.grid(row=4, column=0, pady=10)
        
        self.generate_button = ttk.Button(button_frame, text="🎨 Generate", 
                                         command=self.generate_content, state='disabled')
        self.generate_button.pack(side=tk.LEFT, padx=5)
        
        ttk.Button(button_frame, text="📁 Open Workflows Folder",
                  command=self.open_workflows_folder).pack(side=tk.LEFT, padx=5)

        ttk.Button(button_frame, text="🎥 Video Models Setup",
                  command=self.open_video_models_setup).pack(side=tk.LEFT, padx=5)
        
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
    
    def launch_comfyui(self):
        """Launch ComfyUI in the background"""
        try:
            venv_python = COMFYUI_PATH / "venv" / "Scripts" / "python.exe"
            main_script = COMFYUI_PATH / "main.py"

            if not venv_python.exists():
                self.log(f"❌ ComfyUI venv not found at {venv_python}")
                return False

            if not main_script.exists():
                self.log(f"❌ ComfyUI main.py not found at {main_script}")
                return False

            self.log("🚀 Starting ComfyUI...")
            self.comfyui_status_label.config(text="ComfyUI: 🔄 Starting...", foreground="orange")
            self.root.update()

            # Launch ComfyUI in background
            subprocess.Popen(
                [str(venv_python), str(main_script)],
                cwd=str(COMFYUI_PATH),
                creationflags=subprocess.CREATE_NEW_CONSOLE
            )

            # Wait for ComfyUI to start (up to 30 seconds)
            for i in range(30):
                time.sleep(1)
                if self.comfyui_api.check_connection():
                    self.log("✅ ComfyUI started successfully!")
                    return True
                if i % 5 == 0:
                    self.log(f"⏳ Waiting for ComfyUI to start... ({i}s)")
                    self.root.update()

            self.log("❌ ComfyUI failed to start within 30 seconds")
            return False

        except Exception as e:
            self.log(f"❌ Error launching ComfyUI: {e}")
            return False

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

        # Check ComfyUI - auto-launch if not running
        if self.comfyui_api.check_connection():
            self.comfyui_status_label.config(text="ComfyUI: ✅ Running", foreground="green")
            self.log("✅ ComfyUI is running")
        else:
            self.log("ComfyUI not running - attempting to start...")
            if self.launch_comfyui():
                self.comfyui_status_label.config(text="ComfyUI: ✅ Running", foreground="green")
            else:
                self.comfyui_status_label.config(text="ComfyUI: ❌ Not available", foreground="red")
                self.log("❌ Could not start ComfyUI automatically.")

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

        # Hide download UI by default
        self.download_button.grid_remove()
        self.download_progress.grid_remove()
        self.download_progress_label.grid_remove()
        self.current_missing_model = None

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
            missing_models = result['missing_models']
            missing = ', '.join(missing_models)

            # Check if the first missing model is in the registry
            if missing_models:
                first_missing = missing_models[0]
                model_info = get_model_info(first_missing)

                if model_info:
                    # Model is downloadable
                    self.current_missing_model = {'filename': first_missing, **model_info}
                    size_gb = model_info.get('size_gb', '?')
                    requires_auth = model_info.get('requires_auth', False)

                    auth_note = " (requires login)" if requires_auth else ""
                    self.model_check_label.config(
                        text=f"⚠️ Missing: {first_missing} ({size_gb} GB){auth_note}",
                        foreground="orange"
                    )

                    # Show download button
                    self.download_button.config(text=f"Download {first_missing}")
                    self.download_button.grid()
                    self.log(f"⚠️ Missing model '{first_missing}' is available for download ({size_gb} GB)")
                else:
                    # Model not in registry
                    self.model_check_label.config(
                        text=f"⚠️ Missing models: {missing}",
                        foreground="red"
                    )
                    self.log(f"⚠️ WARNING: Missing required models: {missing}")
            else:
                self.model_check_label.config(
                    text=f"⚠️ Missing models: {missing}",
                    foreground="red"
                )
                self.log(f"⚠️ WARNING: Missing required models: {missing}")

    def download_missing_model(self):
        """Download the currently missing model"""
        if not self.current_missing_model or self.download_in_progress:
            return

        model_info = self.current_missing_model
        filename = model_info.get('filename', 'model')

        # Check for auth requirements
        requires_auth = model_info.get('requires_auth', False)
        source = model_info.get('source', '').lower()

        if requires_auth:
            if source == 'huggingface':
                from credentials_manager import get_huggingface_token
                if not get_huggingface_token():
                    self.log("❌ This model requires HuggingFace authentication.")
                    self.log("   Please configure your HuggingFace token in credentials.")
                    messagebox.showwarning(
                        "Authentication Required",
                        "This model requires HuggingFace authentication.\n\n"
                        "Please configure your HuggingFace token first."
                    )
                    return
            elif source == 'civitai':
                from credentials_manager import get_civitai_api_key
                if not get_civitai_api_key():
                    self.log("❌ This model requires CivitAI authentication.")
                    self.log("   Please configure your CivitAI API key in credentials.")
                    messagebox.showwarning(
                        "Authentication Required",
                        "This model requires CivitAI authentication.\n\n"
                        "Please configure your CivitAI API key first."
                    )
                    return

        # Disable button and show progress UI
        self.download_in_progress = True
        self.download_button.config(state='disabled')
        self.download_progress['value'] = 0
        self.download_progress.grid()
        self.download_progress_label.config(text="Starting download...")
        self.download_progress_label.grid()

        self.log(f"📥 Starting download of {filename}...")

        def download_thread():
            try:
                result = self.model_downloader.download_model(
                    model_info,
                    progress_callback=self.update_download_progress
                )

                if result:
                    self.root.after(0, lambda: self.on_download_complete(True, filename))
                else:
                    self.root.after(0, lambda: self.on_download_complete(False, filename))

            except Exception as e:
                self.root.after(0, lambda: self.on_download_error(str(e)))

        thread = threading.Thread(target=download_thread, daemon=True)
        thread.start()

    def update_download_progress(self, percent: float, message: str):
        """Callback for download progress updates - schedules GUI update on main thread"""
        def update_gui():
            self.download_progress['value'] = percent
            self.download_progress_label.config(text=message)
        self.root.after(0, update_gui)

    def on_download_complete(self, success: bool, filename: str):
        """Handle download completion"""
        self.download_in_progress = False
        self.download_button.config(state='normal')

        if success:
            self.log(f"✅ Successfully downloaded {filename}")
            # Hide progress UI
            self.download_progress.grid_remove()
            self.download_progress_label.grid_remove()
            self.download_button.grid_remove()
            # Re-check models to update the status
            self.check_required_models()
        else:
            self.log(f"❌ Failed to download {filename}")
            self.download_progress_label.config(text="Download failed", foreground="red")

    def on_download_error(self, error_msg: str):
        """Handle download error"""
        self.download_in_progress = False
        self.download_button.config(state='normal')
        self.log(f"❌ Download error: {error_msg}")
        self.download_progress_label.config(text=f"Error: {error_msg}", foreground="red")

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

    def open_video_models_setup(self):
        """Open the Video Models Setup dialog"""
        VideoModelsDialog(self.root, self.model_downloader, self.log)


class VideoModelsDialog:
    """Dialog for managing video model downloads"""

    def __init__(self, parent, downloader: ModelDownloader, log_callback):
        self.downloader = downloader
        self.log_callback = log_callback
        self.download_in_progress = False
        self.current_download = None

        # Create dialog window
        self.dialog = tk.Toplevel(parent)
        self.dialog.title("Video Models Setup")
        self.dialog.geometry("700x500")
        self.dialog.transient(parent)
        self.dialog.grab_set()

        self.setup_gui()
        self.check_installed_models()

    def setup_gui(self):
        """Setup the dialog GUI"""
        main_frame = ttk.Frame(self.dialog, padding="10")
        main_frame.pack(fill=tk.BOTH, expand=True)

        # Title
        title_label = ttk.Label(main_frame, text="🎥 Video Generation Models",
                                font=('Arial', 14, 'bold'))
        title_label.pack(pady=10)

        # Info label
        info_label = ttk.Label(main_frame,
                               text="Download the required models for video generation.\n"
                                    "Text-to-Video requires the first 3 models. Image-to-Video also needs VACE.",
                               justify=tk.CENTER)
        info_label.pack(pady=5)

        # Models list frame
        list_frame = ttk.LabelFrame(main_frame, text="Required Models", padding="10")
        list_frame.pack(fill=tk.BOTH, expand=True, pady=10)

        # Create scrollable canvas for models
        canvas = tk.Canvas(list_frame)
        scrollbar = ttk.Scrollbar(list_frame, orient="vertical", command=canvas.yview)
        self.models_frame = ttk.Frame(canvas)

        self.models_frame.bind(
            "<Configure>",
            lambda e: canvas.configure(scrollregion=canvas.bbox("all"))
        )

        canvas.create_window((0, 0), window=self.models_frame, anchor="nw")
        canvas.configure(yscrollcommand=scrollbar.set)

        canvas.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

        # Store model widgets for updating
        self.model_widgets = {}

        # Create row for each video model
        for i, (model_name, model_meta) in enumerate(VIDEO_MODELS.items()):
            self.create_model_row(i, model_name, model_meta)

        # Progress section
        progress_frame = ttk.Frame(main_frame)
        progress_frame.pack(fill=tk.X, pady=10)

        self.progress_bar = ttk.Progressbar(progress_frame, orient="horizontal",
                                            length=500, mode="determinate")
        self.progress_bar.pack(pady=5)

        self.progress_label = ttk.Label(progress_frame, text="")
        self.progress_label.pack()

        # Buttons
        button_frame = ttk.Frame(main_frame)
        button_frame.pack(pady=10)

        self.download_all_btn = ttk.Button(button_frame, text="Download All Missing",
                                           command=self.download_all_missing)
        self.download_all_btn.pack(side=tk.LEFT, padx=5)

        ttk.Button(button_frame, text="Refresh Status",
                  command=self.check_installed_models).pack(side=tk.LEFT, padx=5)

        ttk.Button(button_frame, text="Close",
                  command=self.dialog.destroy).pack(side=tk.LEFT, padx=5)

    def create_model_row(self, index: int, model_name: str, model_meta: dict):
        """Create a row for a single model"""
        row_frame = ttk.Frame(self.models_frame)
        row_frame.pack(fill=tk.X, pady=5, padx=5)

        # Model info
        info_frame = ttk.Frame(row_frame)
        info_frame.pack(side=tk.LEFT, fill=tk.X, expand=True)

        name_label = ttk.Label(info_frame, text=model_name, font=('Arial', 10, 'bold'))
        name_label.pack(anchor=tk.W)

        desc_label = ttk.Label(info_frame, text=model_meta['description'],
                               foreground="gray")
        desc_label.pack(anchor=tk.W)

        # Status and download button
        status_frame = ttk.Frame(row_frame)
        status_frame.pack(side=tk.RIGHT)

        status_label = ttk.Label(status_frame, text="Checking...", width=15)
        status_label.pack(side=tk.LEFT, padx=5)

        download_btn = ttk.Button(status_frame, text="Download", width=10,
                                  command=lambda m=model_name: self.download_model(m))
        download_btn.pack(side=tk.LEFT, padx=5)

        self.model_widgets[model_name] = {
            'status_label': status_label,
            'download_btn': download_btn
        }

    def check_installed_models(self):
        """Check which models are installed"""
        from config import MODEL_FOLDERS

        for model_name in VIDEO_MODELS.keys():
            model_info = get_model_info(model_name)
            if not model_info:
                self.update_model_status(model_name, "❓ Unknown", "disabled")
                continue

            model_type = model_info.get('type', 'diffusion_models')
            folder = MODEL_FOLDERS.get(model_type)

            if not folder:
                self.update_model_status(model_name, "❓ No folder", "disabled")
                continue

            # Check if model exists
            model_path = folder / model_name
            # Also check in subfolder if specified
            subfolder = model_info.get('subfolder')
            if subfolder:
                model_path_sub = folder / subfolder / model_name
                if model_path_sub.exists():
                    model_path = model_path_sub

            if model_path.exists():
                self.update_model_status(model_name, "✅ Installed", "disabled")
            else:
                size_gb = model_info.get('size_gb', '?')
                self.update_model_status(model_name, f"❌ Missing ({size_gb}GB)", "normal")

    def update_model_status(self, model_name: str, status: str, btn_state: str):
        """Update the status display for a model"""
        widgets = self.model_widgets.get(model_name)
        if widgets:
            widgets['status_label'].config(text=status)
            widgets['download_btn'].config(state=btn_state)

            # Color based on status
            if "✅" in status:
                widgets['status_label'].config(foreground="green")
            elif "❌" in status:
                widgets['status_label'].config(foreground="red")
            else:
                widgets['status_label'].config(foreground="orange")

    def download_model(self, model_name: str):
        """Download a single model"""
        if self.download_in_progress:
            return

        model_info = get_model_info(model_name)
        if not model_info:
            self.progress_label.config(text=f"Model {model_name} not found in registry")
            return

        self.download_in_progress = True
        self.current_download = model_name

        # Disable all download buttons
        for widgets in self.model_widgets.values():
            widgets['download_btn'].config(state='disabled')
        self.download_all_btn.config(state='disabled')

        self.progress_label.config(text=f"Downloading {model_name}...")
        self.progress_bar['value'] = 0

        def download_thread():
            try:
                result = self.downloader.download_model(
                    {'filename': model_name, **model_info},
                    progress_callback=self.update_progress
                )

                self.dialog.after(0, lambda: self.on_download_complete(model_name, result is not None))

            except Exception as e:
                self.dialog.after(0, lambda: self.on_download_error(str(e)))

        thread = threading.Thread(target=download_thread, daemon=True)
        thread.start()

    def download_all_missing(self):
        """Download all missing models sequentially"""
        if self.download_in_progress:
            return

        # Find all missing models
        from config import MODEL_FOLDERS
        missing = []

        for model_name in VIDEO_MODELS.keys():
            model_info = get_model_info(model_name)
            if not model_info:
                continue

            model_type = model_info.get('type', 'diffusion_models')
            folder = MODEL_FOLDERS.get(model_type)
            if not folder:
                continue

            model_path = folder / model_name
            subfolder = model_info.get('subfolder')
            if subfolder:
                model_path_sub = folder / subfolder / model_name
                if model_path_sub.exists():
                    continue
            if not model_path.exists():
                missing.append(model_name)

        if not missing:
            self.progress_label.config(text="All models are already installed!")
            return

        self.progress_label.config(text=f"Downloading {len(missing)} missing models...")

        # Start downloading the first one
        self.pending_downloads = missing[1:]  # Queue the rest
        self.download_model(missing[0])

    def update_progress(self, percent: float, message: str):
        """Update download progress"""
        def update():
            self.progress_bar['value'] = percent
            self.progress_label.config(text=message)
        self.dialog.after(0, update)

    def on_download_complete(self, model_name: str, success: bool):
        """Handle download completion"""
        self.download_in_progress = False

        if success:
            self.log_callback(f"✅ Downloaded {model_name}")
            self.update_model_status(model_name, "✅ Installed", "disabled")

            # Check if there are more pending downloads
            if hasattr(self, 'pending_downloads') and self.pending_downloads:
                next_model = self.pending_downloads.pop(0)
                self.download_model(next_model)
                return
        else:
            self.log_callback(f"❌ Failed to download {model_name}")

        # Re-enable buttons
        self.check_installed_models()
        self.download_all_btn.config(state='normal')
        self.progress_label.config(text="Download complete!" if success else "Download failed")

    def on_download_error(self, error_msg: str):
        """Handle download error"""
        self.download_in_progress = False
        self.progress_label.config(text=f"Error: {error_msg}")
        self.log_callback(f"❌ Download error: {error_msg}")

        # Re-enable buttons
        self.check_installed_models()
        self.download_all_btn.config(state='normal')


def main():
    root = tk.Tk()
    app = ComfyUIPrompterGUI(root)
    root.mainloop()


if __name__ == "__main__":
    main()
