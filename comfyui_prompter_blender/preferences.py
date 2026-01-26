# preferences.py - Addon preferences for ComfyUI Prompter

import bpy
from bpy.props import StringProperty, BoolProperty, IntProperty
from bpy.types import AddonPreferences


class ComfyUIPrompterPreferences(AddonPreferences):
    """Addon preferences for ComfyUI Prompter"""

    bl_idname = "comfyui_prompter_blender"

    # API Server settings
    api_url: StringProperty(
        name="API Server URL",
        description="URL of the ComfyUI Prompter API server",
        default="http://127.0.0.1:5050"
    )

    # Output folder path
    output_folder: StringProperty(
        name="Output Folder",
        description="Path to ComfyUI 3D output folder",
        default="C:/ComfyUI/output/3D",
        subtype='DIR_PATH'
    )

    # Auto-import settings
    auto_import: BoolProperty(
        name="Auto Import GLB",
        description="Automatically import generated GLB files",
        default=True
    )

    # Auto-refresh workflows on connect
    auto_refresh_workflows: BoolProperty(
        name="Auto Refresh Workflows",
        description="Automatically fetch workflows when connecting",
        default=True
    )

    # Viewport capture settings
    capture_resolution_x: IntProperty(
        name="Capture Width",
        description="Width of viewport capture",
        default=512,
        min=256,
        max=2048
    )

    capture_resolution_y: IntProperty(
        name="Capture Height",
        description="Height of viewport capture",
        default=512,
        min=256,
        max=2048
    )

    # Polling interval
    poll_interval: IntProperty(
        name="Poll Interval (ms)",
        description="How often to check job status",
        default=2000,
        min=500,
        max=10000
    )

    def draw(self, context):
        layout = self.layout

        # API Settings
        box = layout.box()
        box.label(text="API Server", icon='URL')
        box.prop(self, "api_url")

        # Output settings
        box = layout.box()
        box.label(text="Output Settings", icon='FILE_FOLDER')
        box.prop(self, "output_folder")

        # Import settings
        box = layout.box()
        box.label(text="Import Settings", icon='IMPORT')
        box.prop(self, "auto_import")
        box.prop(self, "auto_refresh_workflows")

        # Capture settings
        box = layout.box()
        box.label(text="Viewport Capture", icon='RENDER_STILL')
        row = box.row()
        row.prop(self, "capture_resolution_x", text="Width")
        row.prop(self, "capture_resolution_y", text="Height")

        # Advanced
        box = layout.box()
        box.label(text="Advanced", icon='PREFERENCES')
        box.prop(self, "poll_interval")


def get_preferences():
    """Get addon preferences"""
    addon = bpy.context.preferences.addons.get("comfyui_prompter_blender")
    if addon:
        return addon.preferences
    return None


def register():
    bpy.utils.register_class(ComfyUIPrompterPreferences)


def unregister():
    bpy.utils.unregister_class(ComfyUIPrompterPreferences)
