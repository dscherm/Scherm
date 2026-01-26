# properties.py - Scene properties for ComfyUI Prompter addon

import bpy
from bpy.props import (
    StringProperty, EnumProperty, BoolProperty,
    FloatProperty, IntProperty, PointerProperty,
    CollectionProperty
)
from bpy.types import PropertyGroup


# Global cache for workflows fetched from API
_workflow_cache = []
_workflow_cache_valid = False


def get_workflow_cache():
    """Get the cached workflows"""
    global _workflow_cache
    return _workflow_cache


def set_workflow_cache(workflows):
    """Set the workflow cache from API response"""
    global _workflow_cache, _workflow_cache_valid
    _workflow_cache = workflows
    _workflow_cache_valid = True


def is_workflow_cache_valid():
    """Check if workflow cache is valid"""
    global _workflow_cache_valid
    return _workflow_cache_valid


def invalidate_workflow_cache():
    """Invalidate the workflow cache"""
    global _workflow_cache_valid
    _workflow_cache_valid = False


def get_workflow_items(self, context):
    """Get available workflows as enum items - uses cache or defaults"""
    global _workflow_cache

    if _workflow_cache:
        items = []
        for i, (filename, info) in enumerate(_workflow_cache):
            # Format: (identifier, name, description)
            workflow_type = info.get('type', 'unknown')
            desc = info.get('description', filename)

            # Filter to show mainly 3D workflows for this addon
            if '3d' in workflow_type.lower() or '3d' in filename.lower():
                name = desc if len(desc) < 40 else desc[:37] + '...'
                items.append((filename, name, desc))

        # If we have 3D workflows, return them
        if items:
            return items

    # Default fallback workflows
    return [
        ('triposg_image_to_3d.json', 'TripoSG (Fast)', 'Fast 3D generation (~2 min)'),
        ('hy3d_example_01 (1) - Copy.json', 'Hunyuan3D (Quality)', 'High quality with textures'),
    ]


def get_input_mode_items(self, context):
    """Get input mode options"""
    return [
        ('VIEWPORT', 'Viewport Capture', 'Capture current 3D viewport'),
        ('RENDER', 'Render Result', 'Use last render result'),
        ('FILE', 'Image File', 'Load external image file'),
        ('TEXT', 'Text Prompt', 'Generate from text description (text-to-image-to-3D)'),
    ]


class ComfyUIPrompterProperties(PropertyGroup):
    """Properties for the ComfyUI Prompter panel"""

    # Input mode
    input_mode: EnumProperty(
        name="Input Mode",
        description="How to provide input for 3D generation",
        items=get_input_mode_items,
        default=0
    )

    # Text prompt
    text_prompt: StringProperty(
        name="Prompt",
        description="Text description for generation",
        default=""
    )

    # Image file path
    image_path: StringProperty(
        name="Image",
        description="Path to input image file",
        default="",
        subtype='FILE_PATH'
    )

    # Workflow selection
    workflow: EnumProperty(
        name="Workflow",
        description="3D generation workflow to use",
        items=get_workflow_items,
        default=0
    )

    # Recommended workflow from AI
    recommended_workflow: StringProperty(
        name="Recommended Workflow",
        description="AI-recommended workflow",
        default=""
    )

    # Job status
    job_id: StringProperty(
        name="Job ID",
        description="Current generation job ID",
        default=""
    )

    job_status: StringProperty(
        name="Status",
        description="Current job status",
        default="Ready"
    )

    job_progress: FloatProperty(
        name="Progress",
        description="Job progress percentage",
        default=0.0,
        min=0.0,
        max=100.0,
        subtype='PERCENTAGE'
    )

    output_path: StringProperty(
        name="Output",
        description="Path to generated GLB file",
        default=""
    )

    # Settings
    auto_import: BoolProperty(
        name="Auto Import",
        description="Automatically import GLB when generation completes",
        default=True
    )

    # AI recommendation
    ai_reasoning: StringProperty(
        name="AI Reasoning",
        description="AI recommendation reasoning",
        default=""
    )

    # Connection status
    api_connected: BoolProperty(
        name="API Connected",
        description="Whether the API server is connected",
        default=False
    )

    comfyui_connected: BoolProperty(
        name="ComfyUI Connected",
        description="Whether ComfyUI is connected",
        default=False
    )

    # Workflows loaded flag
    workflows_loaded: BoolProperty(
        name="Workflows Loaded",
        description="Whether workflows have been loaded from server",
        default=False
    )


def register():
    bpy.utils.register_class(ComfyUIPrompterProperties)
    bpy.types.Scene.comfyui_prompter = PointerProperty(type=ComfyUIPrompterProperties)


def unregister():
    del bpy.types.Scene.comfyui_prompter
    bpy.utils.unregister_class(ComfyUIPrompterProperties)
