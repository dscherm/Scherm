# ComfyUI Prompter - AI-Powered Workflow Selector

An intelligent desktop application that uses AI to recommend the best ComfyUI workflows and checkpoints for your image/video generation tasks.

![Python](https://img.shields.io/badge/python-3.8+-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Features

- 🤖 **AI-Powered Recommendations**: Uses local Ollama LLM to analyze your prompts and suggest optimal workflows
- 🎨 **Multiple Generation Types**: Supports 2D images, 3D models, videos, and vector graphics
- 🔄 **Automatic Workflow Modification**: Automatically updates checkpoints and prompts in your workflows
- ✅ **Model Validation**: Checks if required models are installed before generation
- 🖥️ **User-Friendly GUI**: Simple, intuitive interface built with Tkinter
- 📊 **Real-time Status**: Shows system status for Ollama and ComfyUI
- 📝 **Detailed Logging**: Track all operations and recommendations

## Screenshots

*(Add screenshots here after running the app)*

## Prerequisites

Before installing, make sure you have:

1. **Python 3.8 or higher**
2. **[ComfyUI](https://github.com/comfyanonymous/ComfyUI)** installed and configured
3. **[Ollama](https://ollama.ai/)** installed with the `llama3.2` model

### Installing Ollama

1. Download Ollama from [https://ollama.ai/download](https://ollama.ai/download)
2. Install and run Ollama
3. Pull the llama3.2 model:
   ```bash
   ollama pull llama3.2
   ```

### Verifying Prerequisites

```bash
# Check Python version
python --version

# Check if Ollama is running
ollama list

# Check if ComfyUI is accessible
# Open http://127.0.0.1:8188 in your browser
```

## Installation

### Option 1: Clone from GitHub (Recommended)

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/comfyui-prompter.git
cd comfyui-prompter

# Install dependencies
pip install -r requirements.txt
```

### Option 2: Download ZIP

1. Download the ZIP file from GitHub
2. Extract it to a folder
3. Open Command Prompt in that folder
4. Run: `pip install -r requirements.txt`

## Configuration

Before running the app, you **must** configure your paths in `config.py`:

```python
# Open config.py and update these paths:

COMFYUI_WORKFLOWS_PATH = Path("C:/YourPath/ComfyUI/workflows")
COMFYUI_CHECKPOINTS_PATH = Path("C:/YourPath/ComfyUI/models/checkpoints")
COMFYUI_DIFFUSION_MODELS_PATH = Path("C:/YourPath/ComfyUI/models/diffusion_models")
```

### Finding Your Paths

**Windows:**
- Right-click on your ComfyUI folder → Properties → Copy the Location path
- Your workflows are typically in: `ComfyUI/user/default/workflows`
- Your models are typically in: `ComfyUI/models/checkpoints`

**Example paths:**
```python
COMFYUI_WORKFLOWS_PATH = Path("C:/ComfyUI_windows_portable/ComfyUI/user/default/workflows")
COMFYUI_CHECKPOINTS_PATH = Path("C:/ComfyUI_windows_portable/ComfyUI/models/checkpoints")
```

### Adding Your Workflows

Update the `WORKFLOWS` dictionary in `config.py` to include your own workflow files:

```python
WORKFLOWS = {
    "your_workflow_name.json": {
        "description": "What this workflow does",
        "checkpoint": "checkpoint_filename.safetensors",
        "type": "2d_image",  # or 3d_generation, video_generation, conversion
        "use_case": "when to use this workflow"
    },
    # Add more workflows...
}
```

## Usage

### Starting the Application

1. **Start ComfyUI** (make sure it's running on http://127.0.0.1:8188)
2. **Start Ollama** (should be running in the background)
3. **Run the app:**
   ```bash
   python main.py
   ```

### Using the Application

1. **Check System Status**: Verify that both Ollama and ComfyUI show ✅ green checkmarks
2. **Enter Your Prompt**: Type what you want to generate (e.g., "a realistic photo of a cat")
3. **Click "Analyze Prompt"**: AI will recommend the best workflow and checkpoint
4. **Review Recommendations**: Check if the suggested workflow and checkpoint are correct
5. **Modify if Needed**: Use the dropdowns to change workflow or checkpoint
6. **Click "Generate"**: The workflow will be queued in ComfyUI
7. **Check ComfyUI**: Open ComfyUI in your browser to see the generation progress

### Example Prompts

- **2D Image**: "Create a realistic photo of a sunset over mountains"
- **Sketch to Image**: "Convert this pencil sketch into a photorealistic image"
- **3D Model**: "Generate a 3D model of a coffee mug"
- **Video**: "Create a video of a fox running through a snowy forest"
- **Vector Graphics**: "Convert this image to an SVG vector"

## Supported Workflow Types

Currently supports:
- ✅ 2D Image Generation (FLUX, SDXL)
- ✅ Inpainting
- ✅ Sketch to Image
- ✅ 3D Model Generation (Hunyuan3D)
- ✅ Text to Video (Wan 2.1)
- ✅ Image to SVG Conversion

## Troubleshooting

### "Ollama: ❌ Not available"
- Make sure Ollama is running
- Check if you can access http://localhost:11434
- Verify llama3.2 is installed: `ollama list`

### "ComfyUI: ❌ Not available"
- Start ComfyUI
- Check if you can access http://127.0.0.1:8188 in your browser
- Make sure no firewall is blocking the connection

### "Workflow not found"
- Check your `COMFYUI_WORKFLOWS_PATH` in `config.py`
- Make sure your `.json` workflow files are in that folder
- The path should use forward slashes `/` even on Windows

### "Missing models: [model_name]"
- Download the required checkpoint/model
- Place it in your ComfyUI models folder
- Update `config.py` to point to the correct path

### "Failed to queue prompt in ComfyUI"
- Check the log in the application for error details
- Verify your workflow JSON is valid
- Make sure all required nodes/extensions are installed in ComfyUI

## How It Works

### Architecture

```
[User Prompt]
    ↓
[Ollama LLM Analysis] → Recommends workflow + checkpoint
    ↓
[Workflow Manager] → Loads and modifies JSON
    ↓
[ComfyUI API] → Queues the workflow
    ↓
[ComfyUI] → Generates the content
```

### Components

- **`main.py`**: GUI application (Tkinter)
- **`ollama_recommender.py`**: AI prompt analysis using Ollama
- **`workflow_manager.py`**: Loads/modifies ComfyUI workflow JSON files
- **`comfyui_api.py`**: Communicates with ComfyUI's REST API
- **`config.py`**: Configuration and workflow database

## Advanced Configuration

### Adding Custom Checkpoints

Edit `CHECKPOINTS` in `config.py`:

```python
CHECKPOINTS = {
    "your_model.safetensors": {
        "type": "sdxl",
        "description": "Your model description",
        "best_for": "what it's good at"
    }
}
```

### Changing Ollama Model

In `config.py`, you can use a different Ollama model:

```python
OLLAMA_MODEL = "llama3.1"  # or any other model you have
```

### Custom ComfyUI URL

If ComfyUI is running on a different port:

```python
COMFYUI_URL = "http://127.0.0.1:8189"  # change port
```

## Roadmap / Future Features

- [ ] Model download suggestions with direct links
- [ ] Custom workflow generation from scratch
- [ ] Support for more workflow types
- [ ] Workflow parameter tuning (steps, CFG, etc.)
- [ ] Batch generation support
- [ ] Progress tracking from ComfyUI
- [ ] Output preview in the app
- [ ] Workflow sharing/import
- [ ] Pre-built workflow templates

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [ComfyUI](https://github.com/comfyanonymous/ComfyUI) - The amazing node-based UI for Stable Diffusion
- [Ollama](https://ollama.ai/) - Local LLM inference
- All the workflow creators and the ComfyUI community

## Support

If you encounter any issues or have questions:
1. Check the [Troubleshooting](#troubleshooting) section
2. Search existing [GitHub Issues](https://github.com/YOUR_USERNAME/comfyui-prompter/issues)
3. Create a new issue with:
   - Your Python version
   - Your OS (Windows/Mac/Linux)
   - Error messages from the log
   - Steps to reproduce

## Author

Created by [Your Name]

## Changelog

### v1.0.0 (2025-01-21)
- Initial release
- AI-powered workflow recommendations
- Support for 2D, 3D, video generation
- Basic GUI with system status checks
