import type { PedalMod, PedalCircuit } from '../types';
import { Check, Wrench, Info } from 'lucide-react';
import { getModChangeSummary } from '../utils/modApplicator';

interface ModCardProps {
  mod: PedalMod;
  pedal: PedalCircuit;
  isSelected: boolean;
  onToggle: () => void;
}

const DIFFICULTY_COLORS: Record<string, string> = {
  easy: 'text-[#4ecca3] bg-[#4ecca3]/10',
  moderate: 'text-[#f39c12] bg-[#f39c12]/10',
  advanced: 'text-[#e94560] bg-[#e94560]/10',
};

export function ModCard({ mod, pedal, isSelected, onToggle }: ModCardProps) {
  const changes = getModChangeSummary(pedal, mod);

  return (
    <div
      className={`p-3 rounded-lg border transition-all cursor-pointer ${
        isSelected
          ? 'bg-[#1a1a2e] border-[#4ecca3]'
          : 'bg-[#12121a] border-[#2a2a3a] hover:border-[#3a3a4a]'
      }`}
      onClick={onToggle}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <div
          className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
            isSelected
              ? 'bg-[#4ecca3] border-[#4ecca3]'
              : 'border-[#3a3a4a] hover:border-[#4a4a5a]'
          }`}
        >
          {isSelected && <Check size={14} className="text-black" />}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`font-medium ${isSelected ? 'text-white' : 'text-gray-300'}`}>
              {mod.name}
            </span>
            <span className={`px-1.5 py-0.5 text-xs rounded ${DIFFICULTY_COLORS[mod.difficulty]}`}>
              {mod.difficulty}
            </span>
          </div>

          <p className="text-xs text-gray-400 mb-2">{mod.description}</p>

          {/* Sonic change */}
          <div className="flex items-start gap-1.5 mb-2">
            <Info size={12} className="text-[#4ecca3] mt-0.5 flex-shrink-0" />
            <p className="text-xs text-[#4ecca3]/80">{mod.sonicChange}</p>
          </div>

          {/* Changes preview */}
          {changes.length > 0 && (
            <div className="mb-2">
              <div className="text-xs text-gray-500 mb-1">Changes:</div>
              <div className="flex flex-wrap gap-1">
                {changes.map((change, i) => (
                  <span
                    key={i}
                    className="px-1.5 py-0.5 text-xs bg-[#252538] text-gray-400 rounded font-mono"
                  >
                    {change}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Parts needed */}
          {mod.partsNeeded.length > 0 && (
            <div>
              <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                <Wrench size={12} />
                Parts needed:
              </div>
              <div className="space-y-1">
                {mod.partsNeeded.map((part, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <span className="text-gray-400">
                      {part.quantity}× {part.name}
                    </span>
                    <span className="text-gray-500">({part.value})</span>
                    {part.notes && (
                      <span className="text-gray-600 italic">{part.notes}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
