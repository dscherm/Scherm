import { useCircuitStore, useAudioStore } from '../store';
import {
  Trash2,
  RotateCw,
  Grid,
  ZoomIn,
  ZoomOut,
  Play,
  Square,
  Save,
  FolderOpen,
  Undo,
  Redo,
  Copy,
  Clipboard,
} from 'lucide-react';

export function Toolbar() {
  const {
    zoom,
    showGrid,
    selectionState,
    setZoom,
    toggleGrid,
    deleteSelected,
    rotateComponent,
    clearCircuit,
  } = useCircuitStore();

  const { isPlaying, togglePlayback } = useAudioStore();

  const hasSelection = selectionState.selectedComponentIds.length > 0;

  const handleRotate = () => {
    selectionState.selectedComponentIds.forEach((id) => {
      rotateComponent(id);
    });
  };

  return (
    <div className="flex items-center gap-1 px-4 py-2 bg-[#0f0f17] border-b border-[#2a2a3a]">
      {/* File operations */}
      <ToolbarGroup>
        <ToolbarButton icon={FolderOpen} label="Open" onClick={() => {}} />
        <ToolbarButton icon={Save} label="Save" onClick={() => {}} />
      </ToolbarGroup>

      <ToolbarDivider />

      {/* Edit operations */}
      <ToolbarGroup>
        <ToolbarButton icon={Undo} label="Undo" onClick={() => {}} disabled />
        <ToolbarButton icon={Redo} label="Redo" onClick={() => {}} disabled />
      </ToolbarGroup>

      <ToolbarDivider />

      {/* Selection operations */}
      <ToolbarGroup>
        <ToolbarButton
          icon={Copy}
          label="Copy"
          onClick={() => {}}
          disabled={!hasSelection}
        />
        <ToolbarButton icon={Clipboard} label="Paste" onClick={() => {}} />
        <ToolbarButton
          icon={Trash2}
          label="Delete"
          onClick={deleteSelected}
          disabled={!hasSelection}
        />
        <ToolbarButton
          icon={RotateCw}
          label="Rotate"
          onClick={handleRotate}
          disabled={!hasSelection}
        />
      </ToolbarGroup>

      <ToolbarDivider />

      {/* View operations */}
      <ToolbarGroup>
        <ToolbarButton
          icon={ZoomOut}
          label="Zoom Out"
          onClick={() => setZoom(zoom / 1.2)}
          disabled={zoom <= 0.25}
        />
        <span className="px-2 text-sm text-gray-400 min-w-[50px] text-center">
          {Math.round(zoom * 100)}%
        </span>
        <ToolbarButton
          icon={ZoomIn}
          label="Zoom In"
          onClick={() => setZoom(zoom * 1.2)}
          disabled={zoom >= 4}
        />
        <ToolbarButton
          icon={Grid}
          label="Toggle Grid"
          onClick={toggleGrid}
          active={showGrid}
        />
      </ToolbarGroup>

      <ToolbarDivider />

      {/* Playback */}
      <ToolbarGroup>
        <ToolbarButton
          icon={isPlaying ? Square : Play}
          label={isPlaying ? 'Stop' : 'Play'}
          onClick={togglePlayback}
          variant={isPlaying ? 'danger' : 'success'}
        />
      </ToolbarGroup>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Clear circuit */}
      <ToolbarButton
        icon={Trash2}
        label="Clear All"
        onClick={() => {
          if (confirm('Clear the entire circuit?')) {
            clearCircuit();
          }
        }}
        variant="danger"
      />
    </div>
  );
}

function ToolbarGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-1">{children}</div>;
}

function ToolbarDivider() {
  return <div className="w-px h-6 bg-[#2a2a3a] mx-2" />;
}

interface ToolbarButtonProps {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  variant?: 'default' | 'success' | 'danger';
}

function ToolbarButton({
  icon: Icon,
  label,
  onClick,
  disabled = false,
  active = false,
  variant = 'default',
}: ToolbarButtonProps) {
  const baseClasses =
    'p-1.5 rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed';

  const variantClasses = {
    default: active
      ? 'bg-[#2a2a4a] text-white'
      : 'text-gray-400 hover:text-white hover:bg-[#1a1a2e]',
    success: 'text-[#4ecca3] hover:bg-[#4ecca3]/20',
    danger: 'text-[#e94560] hover:bg-[#e94560]/20',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={label}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      <Icon size={18} />
    </button>
  );
}
