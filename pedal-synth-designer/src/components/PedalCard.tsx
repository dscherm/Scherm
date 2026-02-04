import type { PedalCircuit } from '../types';
import { Music, Zap } from 'lucide-react';

interface PedalCardProps {
  pedal: PedalCircuit;
  isSelected: boolean;
  onSelect: () => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  overdrive: <Zap size={14} className="text-[#4ecca3]" />,
  distortion: <Zap size={14} className="text-[#e94560]" />,
  fuzz: <Zap size={14} className="text-[#f39c12]" />,
  delay: <Music size={14} className="text-[#3498db]" />,
  reverb: <Music size={14} className="text-[#9b59b6]" />,
  modulation: <Music size={14} className="text-[#1abc9c]" />,
  filter: <Music size={14} className="text-[#e74c3c]" />,
  compressor: <Music size={14} className="text-[#2ecc71]" />,
  boost: <Zap size={14} className="text-[#f1c40f]" />,
};

const CATEGORY_COLORS: Record<string, string> = {
  overdrive: 'border-[#4ecca3]/30 hover:border-[#4ecca3]/60',
  distortion: 'border-[#e94560]/30 hover:border-[#e94560]/60',
  fuzz: 'border-[#f39c12]/30 hover:border-[#f39c12]/60',
  delay: 'border-[#3498db]/30 hover:border-[#3498db]/60',
  reverb: 'border-[#9b59b6]/30 hover:border-[#9b59b6]/60',
  modulation: 'border-[#1abc9c]/30 hover:border-[#1abc9c]/60',
  filter: 'border-[#e74c3c]/30 hover:border-[#e74c3c]/60',
  compressor: 'border-[#2ecc71]/30 hover:border-[#2ecc71]/60',
  boost: 'border-[#f1c40f]/30 hover:border-[#f1c40f]/60',
};

export function PedalCard({ pedal, isSelected, onSelect }: PedalCardProps) {
  const categoryColor = CATEGORY_COLORS[pedal.category] || 'border-gray-600/30';
  const categoryIcon = CATEGORY_ICONS[pedal.category] || <Music size={14} />;

  return (
    <button
      onClick={onSelect}
      className={`w-full text-left p-3 rounded-lg border transition-all ${
        isSelected
          ? 'bg-[#1a1a2e] border-[#4ecca3] ring-1 ring-[#4ecca3]/50'
          : `bg-[#12121a] ${categoryColor}`
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-md ${isSelected ? 'bg-[#4ecca3]/20' : 'bg-[#252538]'}`}>
          {categoryIcon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={`font-medium truncate ${isSelected ? 'text-white' : 'text-gray-300'}`}>
              {pedal.name}
            </span>
            {pedal.yearIntroduced && (
              <span className="text-xs text-gray-500">
                {pedal.yearIntroduced}
              </span>
            )}
          </div>
          <div className="text-xs text-gray-500 mb-1">{pedal.manufacturer}</div>
          <div className="text-xs text-gray-500 capitalize">{pedal.category}</div>
        </div>
        <div className="text-xs text-gray-600">
          {pedal.mods.length} mod{pedal.mods.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mt-2">
        {pedal.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-1.5 py-0.5 text-xs bg-[#252538] text-gray-400 rounded"
          >
            {tag}
          </span>
        ))}
        {pedal.tags.length > 3 && (
          <span className="text-xs text-gray-500">+{pedal.tags.length - 3}</span>
        )}
      </div>
    </button>
  );
}
