import { Guitar, Cpu } from 'lucide-react';
import { useDesignModeStore, type DesignMode } from '../store';

export function DesignModeSelector() {
  const { mode, setMode } = useDesignModeStore();

  return (
    <div className="flex items-center gap-1 p-1 bg-[#0a0a12] rounded-lg border border-[#2a2a3a]">
      <ModeButton
        mode="pedal"
        currentMode={mode}
        onClick={() => setMode('pedal')}
        icon={<Guitar size={16} />}
        label="Guitar Pedal"
        activeColor="bg-[#4ecca3]"
      />
      <ModeButton
        mode="synth"
        currentMode={mode}
        onClick={() => setMode('synth')}
        icon={<Cpu size={16} />}
        label="DIY Synth"
        activeColor="bg-[#f39c12]"
      />
    </div>
  );
}

function ModeButton({
  mode,
  currentMode,
  onClick,
  icon,
  label,
  activeColor,
}: {
  mode: DesignMode;
  currentMode: DesignMode;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  activeColor: string;
}) {
  const isActive = mode === currentMode;

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
        isActive
          ? `${activeColor} text-black`
          : 'text-gray-400 hover:text-white hover:bg-[#1a1a2e]'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
