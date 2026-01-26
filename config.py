# config.py - Configuration for ComfyUI Prompter

import os
from pathlib import Path

# ComfyUI Configuration
COMFYUI_URL = "http://127.0.0.1:8188"  # Default ComfyUI address
COMFYUI_PATH = Path("C:/ComfyUI")  # ComfyUI installation directory

# API Server Configuration
API_SERVER_HOST = "127.0.0.1"
API_SERVER_PORT = 5050

# Output paths
OUTPUT_3D_PATH = Path("C:/ComfyUI/output/3D")

# Ollama Configuration
OLLAMA_MODEL = "llama3.2"
OLLAMA_URL = "http://localhost:11434"

# Paths - UPDATED WITH YOUR PATHS (using forward slashes)
COMFYUI_WORKFLOWS_PATH = Path("D:/workflows")
COMFYUI_CHECKPOINTS_PATH = Path("C:/ComfyUI/models/checkpoints")
COMFYUI_DIFFUSION_MODELS_PATH = Path("C:/ComfyUI/models/diffusion_models")

# Model folders mapping for model_downloader.py
MODEL_FOLDERS = {
    "checkpoints": Path("C:/ComfyUI/models/checkpoints"),
    "diffusion_models": Path("C:/ComfyUI/models/diffusion_models"),
    "vae": Path("C:/ComfyUI/models/vae"),
    "clip": Path("C:/ComfyUI/models/clip"),
    "text_encoders": Path("C:/ComfyUI/models/text_encoders"),
    "controlnet": Path("C:/ComfyUI/models/controlnet"),
    "upscale_models": Path("C:/ComfyUI/models/upscale_models"),
    "loras": Path("C:/ComfyUI/models/loras"),
    "diffusers": Path("C:/ComfyUI/models/diffusers"),
    "tts": Path("C:/ComfyUI/models/tts"),
}

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
        "description": "Image to 3D Model (Hunyuan3D v2.0) - Generate 3D models from images",
        "checkpoint": "hunyuan3d-dit-v2-0-fp16.safetensors",
        "type": "3d_generation",
        "use_case": "creating 3D models from photos, generating GLB/STL files"
    },
    "hy3d_example_01 (1) - Copy.json": {
        "description": "Hunyuan3D v2.0 Full Pipeline - Image to textured 3D with delighting",
        "checkpoint": "hunyuan3d-dit-v2-0-fp16.safetensors",
        "type": "3d_generation",
        "use_case": "high-quality 3D models with textures from single images"
    },
    "triposg_image_to_3d.json": {
        "description": "TripoSG Image to 3D - Fast 3D generation by Stability AI + Tripo",
        "checkpoint": "VAST-AI/TripoSG",
        "type": "3d_generation",
        "use_case": "fast 3D drafts, quick prototyping (<2 min on RTX 3070)"
    },
    "text_to_video_wan.json": {
        "description": "Text to Video - Generate videos from text descriptions using Wan 2.1",
        "checkpoint": "wan2.1_t2v_1.3B_fp16.safetensors",
        "type": "video_generation",
        "use_case": "creating videos from text prompts, animation generation"
    },
    "Wan+2.1+Image+to+Video+14B+480p+Q4_K_S+GGUF.json": {
        "description": "Image to Video - Animate images using Wan 2.1 VACE 14B (GGUF quantized)",
        "checkpoint": "Wan2.1_14B_VACE-Q4_K_M.gguf",
        "type": "video_generation",
        "use_case": "animating still images, image-to-video conversion, creating motion from photos"
    },
    "混元1.5+文生视频720P.json": {
        "description": "Hunyuan 1.5 Text to Video 720P - Chinese text-to-video model",
        "checkpoint": "hunyuan_video_720_cfgdistill_fp8_e4m3fn.safetensors",
        "type": "video_generation",
        "use_case": "high resolution 720p video generation from text"
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
    "hunyuan3d-dit-v2-0-fp16.safetensors": {
        "type": "3d",
        "description": "Hunyuan3D v2.0 - Original 3D generation model",
        "best_for": "image to 3D model conversion"
    },
    "hunyuan3d-dit-v2-5-fp16.safetensors": {
        "type": "3d",
        "description": "Hunyuan3D v2.5 - Improved geometry (1024 res) and PBR textures",
        "best_for": "high-quality 3D with better geometry and textures"
    },
    "hunyuan3d-dit-v2-turbo-fp16.safetensors": {
        "type": "3d",
        "description": "Hunyuan3D Turbo - Faster generation with minimal quality loss",
        "best_for": "quick 3D prototyping, faster iteration"
    },
    "hunyuan3d-dit-v2-mini-fp16.safetensors": {
        "type": "3d",
        "description": "Hunyuan3D Mini 0.6B - Lightweight, lower VRAM requirement (~6GB)",
        "best_for": "3D generation on lower-end GPUs"
    },
    "VAST-AI/TripoSG": {
        "type": "3d",
        "description": "TripoSG by Tripo AI + Stability AI - Fast image-to-3D",
        "best_for": "fast 3D drafts, quick previews (<2 min generation)"
    },
    "wan2.1_t2v_1.3B_fp16.safetensors": {
        "type": "video",
        "description": "Wan 2.1 text-to-video model",
        "best_for": "text to video generation"
    }
}

# Diffusion Models
DIFFUSION_MODELS = {
    # Hunyuan3D Models
    "hunyuan3d-dit-v2-0-fp16.safetensors": {
        "type": "3d_diffusion",
        "description": "Hunyuan3D v2.0 diffusion model",
        "best_for": "3D generation - balanced quality/speed"
    },
    "hunyuan3d-dit-v2-5-fp16.safetensors": {
        "type": "3d_diffusion",
        "description": "Hunyuan3D v2.5 - improved geometry and PBR",
        "best_for": "highest quality 3D generation"
    },
    "hunyuan3d-dit-v2-turbo-fp16.safetensors": {
        "type": "3d_diffusion",
        "description": "Hunyuan3D Turbo - fast generation",
        "best_for": "quick 3D iteration"
    },
    "hunyuan3d-dit-v2-mini-fp16.safetensors": {
        "type": "3d_diffusion",
        "description": "Hunyuan3D Mini - low VRAM",
        "best_for": "3D on limited hardware"
    },
    # TripoSG
    "VAST-AI/TripoSG": {
        "type": "3d_diffusion",
        "description": "TripoSG by Stability AI + Tripo",
        "best_for": "fast 3D drafts"
    },
    # Other
    "omnigen2_fp16": {
        "type": "general_diffusion",
        "description": "OmniGen general purpose diffusion",
        "best_for": "general image generation"
    }
}