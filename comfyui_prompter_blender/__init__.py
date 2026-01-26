# ComfyUI Prompter - Blender Addon
# Generates 3D models using ComfyUI and imports them for animation

bl_info = {
    "name": "ComfyUI Prompter",
    "author": "ComfyUI Prompter Team",
    "version": (1, 0, 0),
    "blender": (3, 0, 0),
    "location": "View3D > Sidebar > ComfyUI",
    "description": "Generate 3D models using ComfyUI and import them for animation",
    "warning": "",
    "doc_url": "",
    "category": "3D View",
}

import bpy

# Import submodules
from . import preferences
from . import properties
from . import operators
from . import panels
from . import modal_monitor


def register():
    """Register all addon components"""
    preferences.register()
    properties.register()
    operators.register()
    modal_monitor.register()
    panels.register()

    print("ComfyUI Prompter addon registered")


def unregister():
    """Unregister all addon components"""
    panels.unregister()
    modal_monitor.unregister()
    operators.unregister()
    properties.unregister()
    preferences.unregister()

    print("ComfyUI Prompter addon unregistered")


if __name__ == "__main__":
    register()
