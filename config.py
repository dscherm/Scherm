# config.py - Configuration for ComfyUI Prompter

import os
from pathlib import Path

# ComfyUI Configuration
COMFYUI_URL = "http://127.0.0.1:8188"  # Default ComfyUI address

# Ollama Configuration
OLLAMA_MODEL = "llama3.2"
OLLAMA_URL = "http://localhost:11434"

# Paths - UPDATE THESE TO YOUR ACTUAL PATHS
# Example Windows paths:
# COMFYUI_WORKFLOWS_PATH = Path("C:/ComfyUI_windows_portable/ComfyUI/user/default/workflows")
# COMFYUI_CHECKPOINTS_PATH = Path("C:/ComfyUI_windows_portable/ComfyUI/models/checkpoints")
# COMFYUI_DIFFUSION_MODELS_PATH = Path("C:/ComfyUI_windows_portable/ComfyUI/models/diffusion_models")

COMFYUI_WORKFLOWS_PATH = Path.home() / "ComfyUI" / "workflows"  # UPDATE THIS
COMFYUI_CHECKPOINTS_PATH = Path.home() / "ComfyUI" / "models" / "checkpoints"  # UPDATE THIS
COMFYUI_DIFFUSION_MODELS_PATH = Path.home() / "ComfyUI" / "models" / "diffusion_models"  # UPDATE THIS

# Workflow Database
# Format: "workflow_filename": {"description": "", "checkpoint": "", "type": "", "use_case": ""}
WORKFLOWS = {
    "EP19_SDXL_INPAINT.json": {
        "description": "Inpainting - Fill in masked areas of images",
        "checkpoint": "Juggernaut_X_RunDiffusion",
        "type": "2d_image",
        "use_case": "fixing images, removing objects, filling in missing parts"
    },
    "EP20_Flux_Dev_Q8_Sketch_2_Image.json": {
        "description": "Sketch to Image - Convert sketches to realistic images",
        "checkpoint": "flux1-dev-fp8.safetensors",
        "type": "2d_image",
        "use_case": "converting sketches, drawings, or wireframes into photorealistic images"
    },
    "EP20_Flux_Dev_Q8_Sketch_2_Image_and_Poses.json": {
        "description": "Sketch to Image with Poses - Convert sketches with pose control",
        "checkpoint": "flux1-dev-fp8.safetensors",
        "type": "2d_image",
        "use_case": "converting sketches with specific poses or body positions"
    },
    "Image_To_Vector_SVG.json": {
        "description": "Image to SVG - Convert raster images to vector SVG",
        "checkpoint": None,  # Doesn't use a checkpoint
        "type": "conversion",
        "use_case": "converting photos or images to scalable vector graphics"
    },
    "3d_hunyuan3d_image_to_model.json": {
        "description": "Image to 3D Model - Generate 3D models from images",
        "checkpoint": "hunyuan3d-dit-v2_fp16.safetensors",
        "type": "3d_generation",
        "use_case": "creating 3D models from photos, generating GLB/STL files"
    },
    "text_to_video_wan.json": {
        "description": "Text to Video - Generate videos from text descriptions",
        "checkpoint": "wan2.1_t2v_1.3B_fp16.safetensors",
        "type": "video_generation",
        "use_case": "creating videos from text prompts, animation generation"
    }
}

# Available Checkpoints - UPDATE WITH YOUR ACTUAL MODELS
CHECKPOINTS = {
    "flux1-dev-fp8.safetensors": {
        "type": "flux",
        "description": "FLUX model for high-quality image generation",
        "best_for": "realistic images, sketch-to-image"
    },
    "Juggernaut_X_RunDiffusion": {
        "type": "sdxl",
        "description": "SDXL-based model for photorealistic generation",
        "best_for": "inpainting, realistic photos"
    },
    "sdXL_v10VAEFix": {
        "type": "sdxl",
        "description": "Stable Diffusion XL with VAE fix",
        "best_for": "general image generation"
    },
    "hunyuan3d-dit-v2_fp16.safetensors": {
        "type": "3d",
        "description": "Hunyuan 3D model for 3D generation",
        "best_for": "image to 3D model conversion"
    },
    "wan2.1_t2v_1.3B_fp16.safetensors": {
        "type": "video",
        "description": "Wan 2.1 text-to-video model",
        "best_for": "text to video generation"
    }
}

# Diffusion Models
DIFFUSION_MODELS = {
    "hunyuan3d-dit-v2-0-fp16": {
        "type": "3d_diffusion",
        "description": "Hunyuan 3D diffusion model",
        "best_for": "3D generation"
    },
    "omnigen2_fp16": {
        "type": "general_diffusion",
        "description": "OmniGen general purpose diffusion",
        "best_for": "general image generation"
    }
}
