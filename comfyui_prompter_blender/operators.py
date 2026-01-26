# operators.py - Operators for ComfyUI Prompter addon

import bpy
import os
import tempfile
from bpy.types import Operator
from bpy.props import StringProperty
from . import api_client
from .preferences import get_preferences
from .properties import set_workflow_cache, get_workflow_cache, invalidate_workflow_cache


class COMFYUI_OT_check_connection(Operator):
    """Check connection to API server and ComfyUI"""
    bl_idname = "comfyui.check_connection"
    bl_label = "Check Connection"
    bl_description = "Check connection to API server and ComfyUI"

    def execute(self, context):
        prefs = get_preferences()
        client = api_client.get_client(prefs.api_url if prefs else None)

        success, result = client.check_status()

        props = context.scene.comfyui_prompter

        if success:
            props.api_connected = True
            comfyui_status = result.get('comfyui', {})
            props.comfyui_connected = comfyui_status.get('connected', False)

            if props.comfyui_connected:
                self.report({'INFO'}, "Connected to API and ComfyUI")

                # Auto-refresh workflows if enabled
                if prefs and prefs.auto_refresh_workflows and not props.workflows_loaded:
                    bpy.ops.comfyui.refresh_workflows()
            else:
                self.report({'WARNING'}, "API connected, but ComfyUI not running")
        else:
            props.api_connected = False
            props.comfyui_connected = False
            error = result.get('error', 'Unknown error')
            self.report({'ERROR'}, f"Connection failed: {error}")

        return {'FINISHED'}


class COMFYUI_OT_refresh_workflows(Operator):
    """Refresh available workflows from API server"""
    bl_idname = "comfyui.refresh_workflows"
    bl_label = "Refresh Workflows"
    bl_description = "Fetch available workflows from the API server"

    def execute(self, context):
        prefs = get_preferences()
        client = api_client.get_client(prefs.api_url if prefs else None)

        success, result = client.get_workflows()

        if success:
            workflows = result.get('workflows', {})
            # Convert to list of tuples for cache
            workflow_list = [(filename, info) for filename, info in workflows.items()]
            set_workflow_cache(workflow_list)

            props = context.scene.comfyui_prompter
            props.workflows_loaded = True

            # Count 3D workflows
            count_3d = sum(1 for f, i in workflow_list
                          if '3d' in i.get('type', '').lower() or '3d' in f.lower())

            self.report({'INFO'}, f"Loaded {len(workflow_list)} workflows ({count_3d} 3D)")
        else:
            error = result.get('error', 'Failed to fetch workflows')
            self.report({'ERROR'}, error)

        return {'FINISHED'}


class COMFYUI_OT_analyze_prompt(Operator):
    """Get AI recommendation for the prompt"""
    bl_idname = "comfyui.analyze_prompt"
    bl_label = "Analyze Prompt"
    bl_description = "Get AI workflow recommendation for the text prompt"

    def execute(self, context):
        props = context.scene.comfyui_prompter

        if not props.text_prompt:
            self.report({'ERROR'}, "Enter a text prompt first")
            return {'CANCELLED'}

        prefs = get_preferences()
        client = api_client.get_client(prefs.api_url if prefs else None)

        success, result = client.analyze_prompt(props.text_prompt)

        if success:
            recommendation = result.get('recommendation', {})
            workflow = recommendation.get('recommended_workflow', '')
            reasoning = recommendation.get('reasoning', '')

            props.ai_reasoning = reasoning
            props.recommended_workflow = workflow

            # Try to set the workflow if it exists in enum
            if workflow:
                # Check if workflow is in our cache
                workflow_cache = get_workflow_cache()
                workflow_names = [f for f, _ in workflow_cache] if workflow_cache else []

                # Also check default workflows
                default_workflows = [
                    'triposg_image_to_3d.json',
                    'hy3d_example_01 (1) - Copy.json'
                ]

                available = workflow_names + default_workflows

                if workflow in available:
                    try:
                        props.workflow = workflow
                        self.report({'INFO'}, f"Set workflow to: {workflow}")
                    except TypeError:
                        # Workflow not in current enum items
                        self.report({'INFO'}, f"Recommended: {workflow} (select manually)")
                else:
                    self.report({'INFO'}, f"Recommended: {workflow} - {reasoning}")
        else:
            error = result.get('error', 'Analysis failed')
            self.report({'ERROR'}, error)

        return {'FINISHED'}


class COMFYUI_OT_capture_viewport(Operator):
    """Capture the current 3D viewport as input image"""
    bl_idname = "comfyui.capture_viewport"
    bl_label = "Capture Viewport"
    bl_description = "Capture the current 3D viewport as input for generation"

    def execute(self, context):
        prefs = get_preferences()

        # Get capture resolution
        width = prefs.capture_resolution_x if prefs else 512
        height = prefs.capture_resolution_y if prefs else 512

        # Find a 3D viewport
        area = None
        for a in context.screen.areas:
            if a.type == 'VIEW_3D':
                area = a
                break

        if not area:
            self.report({'ERROR'}, "No 3D viewport found")
            return {'CANCELLED'}

        # Create temp file path
        temp_path = os.path.join(tempfile.gettempdir(), "comfyui_viewport_capture.png")

        # Store original settings
        old_res_x = context.scene.render.resolution_x
        old_res_y = context.scene.render.resolution_y
        old_filepath = context.scene.render.filepath
        old_file_format = context.scene.render.image_settings.file_format

        try:
            # Set render settings for viewport capture
            context.scene.render.resolution_x = width
            context.scene.render.resolution_y = height
            context.scene.render.filepath = temp_path
            context.scene.render.image_settings.file_format = 'PNG'

            # Capture viewport
            bpy.ops.render.opengl(write_still=True)

            # Store the path
            props = context.scene.comfyui_prompter
            props.image_path = temp_path

            self.report({'INFO'}, f"Viewport captured: {temp_path}")

        finally:
            # Restore settings
            context.scene.render.resolution_x = old_res_x
            context.scene.render.resolution_y = old_res_y
            context.scene.render.filepath = old_filepath
            context.scene.render.image_settings.file_format = old_file_format

        return {'FINISHED'}


class COMFYUI_OT_use_render_result(Operator):
    """Use the last render result as input image"""
    bl_idname = "comfyui.use_render_result"
    bl_label = "Use Render Result"
    bl_description = "Use the last render result as input for generation"

    def execute(self, context):
        # Check if there's a render result
        if not bpy.data.images.get('Render Result'):
            self.report({'ERROR'}, "No render result available. Render an image first.")
            return {'CANCELLED'}

        render_result = bpy.data.images['Render Result']

        # Save render result to temp file
        temp_path = os.path.join(tempfile.gettempdir(), "comfyui_render_result.png")

        try:
            render_result.save_render(temp_path)

            props = context.scene.comfyui_prompter
            props.image_path = temp_path

            self.report({'INFO'}, f"Render result saved: {temp_path}")
        except Exception as e:
            self.report({'ERROR'}, f"Failed to save render result: {e}")
            return {'CANCELLED'}

        return {'FINISHED'}


class COMFYUI_OT_generate(Operator):
    """Start 3D generation"""
    bl_idname = "comfyui.generate"
    bl_label = "Generate 3D Model"
    bl_description = "Start 3D model generation using ComfyUI"

    def execute(self, context):
        props = context.scene.comfyui_prompter
        prefs = get_preferences()
        client = api_client.get_client(prefs.api_url if prefs else None)

        # Check connection first
        success, status = client.check_status()
        if not success:
            self.report({'ERROR'}, "API server not connected")
            return {'CANCELLED'}

        if not status.get('comfyui', {}).get('connected'):
            self.report({'ERROR'}, "ComfyUI not connected")
            return {'CANCELLED'}

        # Determine input mode
        input_mode = props.input_mode

        if input_mode == 'TEXT':
            # Text to 3D
            if not props.text_prompt:
                self.report({'ERROR'}, "Enter a text prompt")
                return {'CANCELLED'}

            success, result = client.generate_from_text(
                props.workflow,
                props.text_prompt
            )

        else:
            # Image to 3D
            # First, ensure we have an image
            if input_mode == 'VIEWPORT':
                bpy.ops.comfyui.capture_viewport()
            elif input_mode == 'RENDER':
                bpy.ops.comfyui.use_render_result()

            if not props.image_path or not os.path.exists(props.image_path):
                self.report({'ERROR'}, "No valid input image")
                return {'CANCELLED'}

            success, result = client.generate_from_image(
                props.workflow,
                props.image_path
            )

        if success:
            # Use prompt_id for polling (more reliable than job_id if server restarts)
            prompt_id = result.get('prompt_id', result.get('job_id'))
            props.job_id = prompt_id
            props.job_status = "Queued"
            props.job_progress = 0
            props.output_path = ""

            # Start monitoring
            bpy.ops.comfyui.monitor_job()

            self.report({'INFO'}, f"Generation started: {prompt_id}")
        else:
            error = result.get('error', 'Generation failed')
            self.report({'ERROR'}, error)
            return {'CANCELLED'}

        return {'FINISHED'}


class COMFYUI_OT_import_glb(Operator):
    """Import the generated GLB file"""
    bl_idname = "comfyui.import_glb"
    bl_label = "Import GLB"
    bl_description = "Import the generated GLB model"

    filepath: StringProperty(
        name="File Path",
        description="Path to GLB file",
        default=""
    )

    def execute(self, context):
        props = context.scene.comfyui_prompter

        filepath = self.filepath or props.output_path

        if not filepath:
            self.report({'ERROR'}, "No GLB file path specified")
            return {'CANCELLED'}

        if not os.path.exists(filepath):
            self.report({'ERROR'}, f"File not found: {filepath}")
            return {'CANCELLED'}

        try:
            bpy.ops.import_scene.gltf(filepath=filepath)
            self.report({'INFO'}, f"Imported: {filepath}")
        except Exception as e:
            self.report({'ERROR'}, f"Import failed: {e}")
            return {'CANCELLED'}

        return {'FINISHED'}


class COMFYUI_OT_open_output_folder(Operator):
    """Open the output folder in file explorer"""
    bl_idname = "comfyui.open_output_folder"
    bl_label = "Open Output Folder"
    bl_description = "Open the 3D output folder in file explorer"

    def execute(self, context):
        import subprocess
        import platform

        prefs = get_preferences()
        output_path = prefs.output_folder if prefs else "C:/ComfyUI/output/3D"

        # Normalize path for the OS
        output_path = os.path.normpath(output_path)

        if not os.path.exists(output_path):
            try:
                os.makedirs(output_path, exist_ok=True)
            except Exception as e:
                self.report({'ERROR'}, f"Could not create folder: {e}")
                return {'CANCELLED'}

        try:
            if platform.system() == "Windows":
                os.startfile(output_path)
            elif platform.system() == "Darwin":
                subprocess.call(["open", output_path])
            else:
                subprocess.call(["xdg-open", output_path])
        except Exception as e:
            self.report({'ERROR'}, f"Could not open folder: {e}")
            return {'CANCELLED'}

        return {'FINISHED'}


class COMFYUI_OT_use_recommended(Operator):
    """Apply the AI-recommended workflow"""
    bl_idname = "comfyui.use_recommended"
    bl_label = "Use Recommended"
    bl_description = "Apply the AI-recommended workflow"

    def execute(self, context):
        props = context.scene.comfyui_prompter

        if not props.recommended_workflow:
            self.report({'WARNING'}, "No recommendation available. Analyze a prompt first.")
            return {'CANCELLED'}

        try:
            props.workflow = props.recommended_workflow
            self.report({'INFO'}, f"Set workflow to: {props.recommended_workflow}")
        except TypeError:
            self.report({'ERROR'}, f"Workflow not available: {props.recommended_workflow}")
            return {'CANCELLED'}

        return {'FINISHED'}


def register():
    bpy.utils.register_class(COMFYUI_OT_check_connection)
    bpy.utils.register_class(COMFYUI_OT_refresh_workflows)
    bpy.utils.register_class(COMFYUI_OT_analyze_prompt)
    bpy.utils.register_class(COMFYUI_OT_capture_viewport)
    bpy.utils.register_class(COMFYUI_OT_use_render_result)
    bpy.utils.register_class(COMFYUI_OT_generate)
    bpy.utils.register_class(COMFYUI_OT_import_glb)
    bpy.utils.register_class(COMFYUI_OT_open_output_folder)
    bpy.utils.register_class(COMFYUI_OT_use_recommended)


def unregister():
    bpy.utils.unregister_class(COMFYUI_OT_use_recommended)
    bpy.utils.unregister_class(COMFYUI_OT_open_output_folder)
    bpy.utils.unregister_class(COMFYUI_OT_import_glb)
    bpy.utils.unregister_class(COMFYUI_OT_generate)
    bpy.utils.unregister_class(COMFYUI_OT_use_render_result)
    bpy.utils.unregister_class(COMFYUI_OT_capture_viewport)
    bpy.utils.unregister_class(COMFYUI_OT_analyze_prompt)
    bpy.utils.unregister_class(COMFYUI_OT_refresh_workflows)
    bpy.utils.unregister_class(COMFYUI_OT_check_connection)
