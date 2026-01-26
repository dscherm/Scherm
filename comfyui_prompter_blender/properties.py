# properties.py - Scene properties for ComfyUI Prompter addon

import bpy
from bpy.props import (
    StringProperty, EnumProperty, BoolProperty,
    FloatProperty, IntProperty, PointerProperty
)
from bpy.types import PropertyGroup


def get_workflow_items(self, context):
    """Get available workflows as enum items"""
    items = [
        ('triposg_image_to_3d.json', 'TripoSG (Fast)', 'Fast 3D generation (~2 min)'),
        ('hy3d_example_01 (1) - Copy.json', 'Hunyuan3D (Quality)', 'High quality with textures'),
    ]
    return items


def get_input_mode_items(self, context):
    """Get input mode options"""
    return [
        ('VIEWPORT', 'Viewport Capture', 'Capture current 3D viewport'),
        ('RENDER', 'Render Result', 'Use last render result'),
        ('FILE', 'Image File', 'Load external image file'),
        ('TEXT', 'Text Prompt', 'Generate from text description'),
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


def register():
    bpy.utils.register_class(ComfyUIPrompterProperties)
    bpy.types.Scene.comfyui_prompter = PointerProperty(type=ComfyUIPrompterProperties)


def unregister():
    del bpy.types.Scene.comfyui_prompter
    bpy.utils.unregister_class(ComfyUIPrompterProperties)
