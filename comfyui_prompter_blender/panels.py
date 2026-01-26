# panels.py - UI panels for ComfyUI Prompter addon

import bpy
from bpy.types import Panel


class COMFYUI_PT_main_panel(Panel):
    """Main panel for ComfyUI Prompter in 3D View sidebar"""
    bl_label = "ComfyUI Prompter"
    bl_idname = "COMFYUI_PT_main_panel"
    bl_space_type = 'VIEW_3D'
    bl_region_type = 'UI'
    bl_category = "ComfyUI"

    def draw(self, context):
        layout = self.layout
        props = context.scene.comfyui_prompter

        # Connection status
        box = layout.box()
        row = box.row()
        row.label(text="Status:", icon='LINKED' if props.api_connected else 'UNLINKED')

        status_row = box.row()
        api_icon = 'CHECKMARK' if props.api_connected else 'X'
        comfy_icon = 'CHECKMARK' if props.comfyui_connected else 'X'
        status_row.label(text=f"API: {'OK' if props.api_connected else 'No'}", icon=api_icon)
        status_row.label(text=f"ComfyUI: {'OK' if props.comfyui_connected else 'No'}", icon=comfy_icon)

        box.operator("comfyui.check_connection", icon='FILE_REFRESH')


class COMFYUI_PT_input_panel(Panel):
    """Input settings panel"""
    bl_label = "Input"
    bl_idname = "COMFYUI_PT_input_panel"
    bl_space_type = 'VIEW_3D'
    bl_region_type = 'UI'
    bl_category = "ComfyUI"
    bl_parent_id = "COMFYUI_PT_main_panel"

    def draw(self, context):
        layout = self.layout
        props = context.scene.comfyui_prompter

        # Input mode selection
        layout.prop(props, "input_mode", text="Mode")

        # Mode-specific options
        if props.input_mode == 'VIEWPORT':
            layout.operator("comfyui.capture_viewport", icon='RESTRICT_VIEW_OFF')
            if props.image_path:
                layout.label(text=f"Captured: {props.image_path.split('/')[-1]}")

        elif props.input_mode == 'RENDER':
            layout.operator("comfyui.use_render_result", icon='RENDER_RESULT')
            if props.image_path:
                layout.label(text=f"Using: {props.image_path.split('/')[-1]}")

        elif props.input_mode == 'FILE':
            layout.prop(props, "image_path", text="")

        elif props.input_mode == 'TEXT':
            layout.prop(props, "text_prompt", text="")
            row = layout.row(align=True)
            row.operator("comfyui.analyze_prompt", text="Analyze", icon='INFO')

            # Show AI recommendation
            if props.ai_reasoning:
                box = layout.box()
                box.label(text="AI Suggestion:", icon='LIGHT')
                # Wrap long text
                for line in _wrap_text(props.ai_reasoning, 35):
                    box.label(text=line)

                # Show recommended workflow if different from selected
                if props.recommended_workflow and props.recommended_workflow != props.workflow:
                    row = box.row()
                    row.operator("comfyui.use_recommended", text="Use Recommended", icon='FORWARD')


class COMFYUI_PT_workflow_panel(Panel):
    """Workflow settings panel"""
    bl_label = "Workflow"
    bl_idname = "COMFYUI_PT_workflow_panel"
    bl_space_type = 'VIEW_3D'
    bl_region_type = 'UI'
    bl_category = "ComfyUI"
    bl_parent_id = "COMFYUI_PT_main_panel"

    def draw(self, context):
        layout = self.layout
        props = context.scene.comfyui_prompter

        # Workflow selection with refresh button
        row = layout.row(align=True)
        row.prop(props, "workflow", text="")
        row.operator("comfyui.refresh_workflows", text="", icon='FILE_REFRESH')

        # Show workflow status
        if props.workflows_loaded:
            layout.label(text="Workflows loaded from server", icon='CHECKMARK')
        else:
            layout.label(text="Using default workflows", icon='INFO')

        # Auto-import toggle
        layout.prop(props, "auto_import")


class COMFYUI_PT_generate_panel(Panel):
    """Generation panel"""
    bl_label = "Generate"
    bl_idname = "COMFYUI_PT_generate_panel"
    bl_space_type = 'VIEW_3D'
    bl_region_type = 'UI'
    bl_category = "ComfyUI"
    bl_parent_id = "COMFYUI_PT_main_panel"

    def draw(self, context):
        layout = self.layout
        props = context.scene.comfyui_prompter

        # Generate button
        row = layout.row(align=True)
        row.scale_y = 1.5

        is_running = props.job_status in ["Queued", "Pending...", "Monitoring..."] or \
                     props.job_status.startswith("Running")

        if is_running:
            row.operator("comfyui.cancel_job", text="Cancel", icon='CANCEL')
        else:
            # Show appropriate button text based on mode
            if props.input_mode == 'TEXT':
                btn_text = "Generate 3D from Text"
            else:
                btn_text = "Generate 3D"
            row.operator("comfyui.generate", text=btn_text, icon='MESH_MONKEY')

        # Job status
        if props.job_id:
            box = layout.box()
            box.label(text=f"Job: {props.job_id[:8]}...")
            box.label(text=f"Status: {props.job_status}")

            if props.job_progress > 0:
                box.prop(props, "job_progress", text="Progress", slider=True)


class COMFYUI_PT_output_panel(Panel):
    """Output panel"""
    bl_label = "Output"
    bl_idname = "COMFYUI_PT_output_panel"
    bl_space_type = 'VIEW_3D'
    bl_region_type = 'UI'
    bl_category = "ComfyUI"
    bl_parent_id = "COMFYUI_PT_main_panel"

    def draw(self, context):
        layout = self.layout
        props = context.scene.comfyui_prompter

        if props.output_path:
            layout.label(text="Output:", icon='CHECKMARK')
            box = layout.box()
            # Show just the filename
            filename = props.output_path.split('\\')[-1].split('/')[-1]
            box.label(text=filename)

            row = layout.row(align=True)
            row.operator("comfyui.import_glb", text="Import", icon='IMPORT')
            row.operator("comfyui.open_output_folder", text="", icon='FILE_FOLDER')
        else:
            layout.label(text="No output yet", icon='INFO')
            layout.operator("comfyui.open_output_folder", text="Open Output Folder", icon='FILE_FOLDER')


def _wrap_text(text, max_width):
    """Wrap text to multiple lines"""
    words = text.split()
    lines = []
    current_line = []
    current_length = 0

    for word in words:
        if current_length + len(word) + 1 <= max_width:
            current_line.append(word)
            current_length += len(word) + 1
        else:
            if current_line:
                lines.append(' '.join(current_line))
            current_line = [word]
            current_length = len(word)

    if current_line:
        lines.append(' '.join(current_line))

    return lines if lines else ['']


def register():
    bpy.utils.register_class(COMFYUI_PT_main_panel)
    bpy.utils.register_class(COMFYUI_PT_input_panel)
    bpy.utils.register_class(COMFYUI_PT_workflow_panel)
    bpy.utils.register_class(COMFYUI_PT_generate_panel)
    bpy.utils.register_class(COMFYUI_PT_output_panel)


def unregister():
    bpy.utils.unregister_class(COMFYUI_PT_output_panel)
    bpy.utils.unregister_class(COMFYUI_PT_generate_panel)
    bpy.utils.unregister_class(COMFYUI_PT_workflow_panel)
    bpy.utils.unregister_class(COMFYUI_PT_input_panel)
    bpy.utils.unregister_class(COMFYUI_PT_main_panel)
