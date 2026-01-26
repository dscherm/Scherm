# api_server.py - Flask REST API server for ComfyUI Prompter
# Provides endpoints for Blender addon integration

import os
import sys
import io
import base64
import uuid
import shutil
from pathlib import Path
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS

# Fix Windows console encoding
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

from config import (
    API_SERVER_HOST, API_SERVER_PORT, COMFYUI_URL, OLLAMA_URL,
    COMFYUI_PATH, OUTPUT_3D_PATH, WORKFLOWS
)
from comfyui_api import ComfyUIAPI
from workflow_manager import WorkflowManager
from ollama_recommender import OllamaRecommender

app = Flask(__name__)
CORS(app)  # Enable CORS for Blender addon requests

# Initialize components
comfyui = ComfyUIAPI()
workflow_manager = WorkflowManager()
recommender = OllamaRecommender()

# Store active jobs
active_jobs = {}


@app.route('/api/status', methods=['GET'])
def get_status():
    """Check ComfyUI and Ollama connectivity"""
    return jsonify({
        "comfyui": {
            "connected": comfyui.check_connection(),
            "url": COMFYUI_URL
        },
        "ollama": {
            "connected": recommender.check_ollama_available(),
            "url": OLLAMA_URL
        },
        "api_version": "1.0.0"
    })


@app.route('/api/analyze', methods=['POST'])
def analyze_prompt():
    """Get AI workflow recommendation from prompt"""
    data = request.get_json()

    if not data or 'prompt' not in data:
        return jsonify({"error": "Missing 'prompt' in request body"}), 400

    prompt = data['prompt']
    recommendation = recommender.analyze_prompt(prompt)

    return jsonify({
        "success": True,
        "recommendation": recommendation
    })


@app.route('/api/workflows', methods=['GET'])
def get_workflows():
    """List available workflows"""
    workflow_type = request.args.get('type', None)

    if workflow_type == '3d':
        workflows = workflow_manager.get_3d_workflows()
    elif workflow_type == 'image':
        workflows = workflow_manager.get_image_generation_workflows()
    else:
        workflows = WORKFLOWS

    return jsonify({
        "workflows": workflows,
        "count": len(workflows)
    })


@app.route('/api/generate', methods=['POST'])
def generate():
    """
    Queue a 3D generation job

    Request body:
    {
        "workflow": "workflow_filename.json",
        "image_data": "base64_encoded_image" (optional),
        "image_path": "/path/to/image.png" (optional),
        "prompt": "text prompt for text-to-3D" (optional),
        "mode": "image_to_3d" | "text_to_3d"
    }
    """
    data = request.get_json()

    if not data:
        return jsonify({"error": "Missing request body"}), 400

    workflow_name = data.get('workflow')
    mode = data.get('mode', 'image_to_3d')
    image_data = data.get('image_data')
    image_path = data.get('image_path')
    text_prompt = data.get('prompt', '')

    if not workflow_name:
        return jsonify({"error": "Missing 'workflow' in request"}), 400

    # Load the workflow
    workflow_data = workflow_manager.load_workflow(workflow_name)
    if not workflow_data:
        return jsonify({"error": f"Failed to load workflow: {workflow_name}"}), 400

    # Handle image input
    input_image_name = None
    if mode == 'image_to_3d':
        if image_data:
            # Save base64 image to ComfyUI input folder
            input_image_name = _save_base64_image(image_data)
            if not input_image_name:
                return jsonify({"error": "Failed to save input image"}), 500
        elif image_path:
            # Copy image to ComfyUI input folder
            input_image_name = _copy_image_to_input(image_path)
            if not input_image_name:
                return jsonify({"error": "Failed to copy input image"}), 500
        else:
            return jsonify({"error": "image_to_3d mode requires image_data or image_path"}), 400

        # Modify workflow to use the input image
        workflow_data = workflow_manager.modify_image_input(workflow_data, input_image_name)

    elif mode == 'text_to_3d':
        # For text-to-3D, we need a two-step process
        # Step 1: Generate image from text using Flux
        # Step 2: Feed image to 3D workflow
        # For now, require a prompt
        if not text_prompt:
            return jsonify({"error": "text_to_3d mode requires 'prompt'"}), 400

        # TODO: Implement text-to-image-to-3D pipeline
        # For now, modify prompt if the workflow supports it
        workflow_data = workflow_manager.modify_prompt(workflow_data, text_prompt)

    # Fetch object_info from ComfyUI for accurate widget mapping
    object_info = comfyui.get_object_info()
    if object_info:
        workflow_manager.set_object_info(object_info)
        print(f"Loaded {len(object_info)} node definitions from ComfyUI")
    else:
        print("Warning: Could not fetch object_info from ComfyUI, using fallback mappings")

    # Convert workflow from UI format to API format
    api_workflow = workflow_manager.convert_to_api_format(workflow_data)
    if not api_workflow:
        return jsonify({"error": "Failed to convert workflow to API format"}), 500

    print(f"Converted workflow has {len(api_workflow)} nodes")

    # Queue the workflow
    result = comfyui.queue_prompt(api_workflow)

    if not result:
        return jsonify({"error": "Failed to queue workflow in ComfyUI"}), 500

    prompt_id = result.get('prompt_id')

    # Store job info
    job_id = str(uuid.uuid4())
    active_jobs[job_id] = {
        "prompt_id": prompt_id,
        "workflow": workflow_name,
        "mode": mode,
        "status": "queued",
        "created_at": datetime.now().isoformat(),
        "input_image": input_image_name,
        "output_path": None
    }

    return jsonify({
        "success": True,
        "job_id": job_id,
        "prompt_id": prompt_id,
        "message": f"Job queued successfully"
    })


@app.route('/api/job/<job_id>', methods=['GET'])
def get_job_status(job_id):
    """Poll job status and get output path"""

    # First check our local job store
    if job_id in active_jobs:
        job = active_jobs[job_id]
        prompt_id = job['prompt_id']
    else:
        # Try treating job_id as a prompt_id directly
        prompt_id = job_id
        job = None

    # Get status from ComfyUI
    status = comfyui.get_job_status(prompt_id)

    # Get output path if completed
    output_path = None
    if status['status'] == 'completed':
        output_path = comfyui.get_output_glb_path(prompt_id)

        # Update job record
        if job:
            job['status'] = 'completed'
            job['output_path'] = output_path

    return jsonify({
        "job_id": job_id,
        "prompt_id": prompt_id,
        "status": status['status'],
        "progress": status.get('progress', 0),
        "output_path": output_path,
        "outputs": status.get('outputs', []),
        "error": status.get('error')
    })


@app.route('/api/jobs', methods=['GET'])
def list_jobs():
    """List all tracked jobs"""
    return jsonify({
        "jobs": active_jobs,
        "count": len(active_jobs)
    })


@app.route('/api/upload', methods=['POST'])
def upload_image():
    """
    Upload an image to ComfyUI input folder

    Accepts:
    - multipart/form-data with 'image' file
    - JSON with 'image_data' (base64)
    """
    if request.content_type and 'multipart/form-data' in request.content_type:
        # File upload
        if 'image' not in request.files:
            return jsonify({"error": "No image file provided"}), 400

        file = request.files['image']
        if file.filename == '':
            return jsonify({"error": "No file selected"}), 400

        # Save to ComfyUI input folder
        filename = _generate_unique_filename(file.filename)
        input_path = COMFYUI_PATH / "input" / filename

        try:
            file.save(str(input_path))
            return jsonify({
                "success": True,
                "filename": filename,
                "path": str(input_path)
            })
        except Exception as e:
            return jsonify({"error": f"Failed to save file: {e}"}), 500

    else:
        # JSON with base64
        data = request.get_json()
        if not data or 'image_data' not in data:
            return jsonify({"error": "Missing 'image_data' in request"}), 400

        filename = _save_base64_image(data['image_data'])
        if filename:
            return jsonify({
                "success": True,
                "filename": filename
            })
        else:
            return jsonify({"error": "Failed to save image"}), 500


def _save_base64_image(base64_data: str) -> str:
    """Save base64 encoded image to ComfyUI input folder"""
    try:
        # Remove data URL prefix if present
        if ',' in base64_data:
            base64_data = base64_data.split(',')[1]

        # Decode
        image_data = base64.b64decode(base64_data)

        # Generate filename
        filename = f"blender_input_{datetime.now().strftime('%Y%m%d_%H%M%S')}.png"
        input_path = COMFYUI_PATH / "input" / filename

        # Ensure input folder exists
        input_path.parent.mkdir(parents=True, exist_ok=True)

        # Save
        with open(input_path, 'wb') as f:
            f.write(image_data)

        print(f"Saved input image: {input_path}")
        return filename

    except Exception as e:
        print(f"Error saving base64 image: {e}")
        return None


def _copy_image_to_input(source_path: str) -> str:
    """Copy an image file to ComfyUI input folder"""
    try:
        source = Path(source_path)
        if not source.exists():
            print(f"Source image not found: {source_path}")
            return None

        # Generate filename
        filename = f"blender_input_{datetime.now().strftime('%Y%m%d_%H%M%S')}{source.suffix}"
        input_path = COMFYUI_PATH / "input" / filename

        # Ensure input folder exists
        input_path.parent.mkdir(parents=True, exist_ok=True)

        # Copy
        shutil.copy2(source, input_path)

        print(f"Copied input image to: {input_path}")
        return filename

    except Exception as e:
        print(f"Error copying image: {e}")
        return None


def _generate_unique_filename(original_filename: str) -> str:
    """Generate a unique filename"""
    ext = Path(original_filename).suffix
    return f"upload_{datetime.now().strftime('%Y%m%d_%H%M%S')}_{uuid.uuid4().hex[:8]}{ext}"


if __name__ == '__main__':
    print(f"Starting ComfyUI Prompter API Server on {API_SERVER_HOST}:{API_SERVER_PORT}")
    print(f"ComfyUI URL: {COMFYUI_URL}")
    print(f"Output 3D Path: {OUTPUT_3D_PATH}")

    # Check connections on startup
    if comfyui.check_connection():
        print("ComfyUI: Connected")
    else:
        print("ComfyUI: NOT CONNECTED - Please start ComfyUI first")

    if recommender.check_ollama_available():
        print("Ollama: Connected")
    else:
        print("Ollama: NOT CONNECTED - AI recommendations will use fallback mode")

    print("\nAPI Endpoints:")
    print("  GET  /api/status     - Check connectivity")
    print("  POST /api/analyze    - Get AI recommendation")
    print("  GET  /api/workflows  - List workflows")
    print("  POST /api/generate   - Start generation")
    print("  GET  /api/job/<id>   - Get job status")
    print("  POST /api/upload     - Upload image")

    app.run(host=API_SERVER_HOST, port=API_SERVER_PORT, debug=True)
