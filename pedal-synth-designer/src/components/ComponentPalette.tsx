import { useState } from 'react';
import { useCircuitStore, usePedalStore, useSynthStore, useDesignModeStore } from '../store';
import { COMPONENT_DEFINITIONS, formatValue } from '../utils/componentFactory';
import type { ComponentType } from '../types';
import {
  Circle,
  Zap,
  Speaker,
  Mic,
  ToggleLeft,
  ChevronDown,
  ChevronRight,
  Package,
  Cpu,
} from 'lucide-react';

const CATEGORIES = {
  passive: { name: 'Passive', icon: Circle },
  semiconductor: { name: 'Semiconductors', icon: Zap },
  active: { name: 'Active', icon: Zap },
  io: { name: 'Input/Output', icon: Speaker },
  power: { name: 'Power', icon: Zap },
};

type Category = keyof typeof CATEGORIES;

export function ComponentPalette() {
  const { startDrag } = useCircuitStore();
  const { openBrowser: openPedalBrowser } = usePedalStore();
  const { openBrowser: openSynthBrowser } = useSynthStore();
  const { mode } = useDesignModeStore();
  const [expandedCategories, setExpandedCategories] = useState<Set<Category>>(
    new Set(['passive', 'semiconductor', 'active', 'io', 'power'])
  );

  const toggleCategory = (category: Category) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const handleDragStart = (
    e: React.DragEvent,
    type: ComponentType
  ) => {
    e.dataTransfer.setData('componentType', type);
    e.dataTransfer.effectAllowed = 'copy';
    startDrag(type, { x: e.clientX, y: e.clientY });
  };

  const componentsByCategory = Object.entries(COMPONENT_DEFINITIONS).reduce(
    (acc, [type, def]) => {
      const category = def.category as Category;
      if (!acc[category]) acc[category] = [];
      acc[category].push({ type: type as ComponentType, ...def });
      return acc;
    },
    {} as Record<Category, (typeof COMPONENT_DEFINITIONS[ComponentType] & { type: ComponentType })[]>
  );

  return (
    <div className="w-64 bg-[#12121a] border-r border-[#2a2a3a] overflow-y-auto">
      <div className="p-3 border-b border-[#2a2a3a]">
        <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
          Components
        </h2>
      </div>

      <div className="p-2">
        {(Object.entries(CATEGORIES) as [Category, typeof CATEGORIES[Category]][]).map(
          ([categoryKey, categoryInfo]) => {
            const components = componentsByCategory[categoryKey] || [];
            const isExpanded = expandedCategories.has(categoryKey);
            const Icon = categoryInfo.icon;

            return (
              <div key={categoryKey} className="mb-2">
                <button
                  onClick={() => toggleCategory(categoryKey)}
                  className="w-full flex items-center gap-2 px-2 py-1.5 text-sm text-gray-400 hover:text-white hover:bg-[#1a1a2e] rounded transition-colors"
                >
                  {isExpanded ? (
                    <ChevronDown size={14} />
                  ) : (
                    <ChevronRight size={14} />
                  )}
                  <Icon size={14} />
                  <span>{categoryInfo.name}</span>
                  <span className="ml-auto text-xs text-gray-600">
                    {components.length}
                  </span>
                </button>

                {isExpanded && (
                  <div className="ml-4 mt-1 space-y-1">
                    {components.map((component) => (
                      <div
                        key={component.type}
                        draggable
                        onDragStart={(e) => handleDragStart(e, component.type)}
                        className="flex items-center gap-2 px-2 py-1.5 bg-[#1a1a2e] rounded cursor-grab hover:bg-[#252538] transition-colors group"
                      >
                        <ComponentIcon type={component.type} />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-gray-300 truncate">
                            {component.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {formatValue(component.defaultValue, component.defaultUnit)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>

      {/* Quick add section */}
      <div className="p-3 border-t border-[#2a2a3a]">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          {mode === 'pedal' ? 'Pedal Circuits' : 'Synth Modules'}
        </h3>
        <div className="space-y-1">
          {mode === 'pedal' ? (
            <>
              <button
                onClick={openPedalBrowser}
                className="w-full flex items-center gap-2 px-2 py-2 text-sm text-left bg-[#4ecca3]/10 text-[#4ecca3] hover:bg-[#4ecca3]/20 rounded transition-colors"
              >
                <Package size={16} />
                Browse Pedal Library
              </button>
              <button className="w-full px-2 py-1.5 text-sm text-left text-gray-400 hover:text-white hover:bg-[#1a1a2e] rounded transition-colors">
                + Basic Fuzz
              </button>
              <button className="w-full px-2 py-1.5 text-sm text-left text-gray-400 hover:text-white hover:bg-[#1a1a2e] rounded transition-colors">
                + Op-Amp Boost
              </button>
            </>
          ) : (
            <>
              <button
                onClick={openSynthBrowser}
                className="w-full flex items-center gap-2 px-2 py-2 text-sm text-left bg-[#f39c12]/10 text-[#f39c12] hover:bg-[#f39c12]/20 rounded transition-colors"
              >
                <Cpu size={16} />
                Browse DIY Synth Library
              </button>
              <button className="w-full px-2 py-1.5 text-sm text-left text-gray-400 hover:text-white hover:bg-[#1a1a2e] rounded transition-colors">
                + 40106 VCO
              </button>
              <button className="w-full px-2 py-1.5 text-sm text-left text-gray-400 hover:text-white hover:bg-[#1a1a2e] rounded transition-colors">
                + Simple LFO
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ComponentIcon({ type }: { type: ComponentType }) {
  const iconClass = "w-6 h-6 text-gray-500 group-hover:text-gray-400";

  switch (type) {
    case 'resistor':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 12h4l1-4 2 8 2-8 2 8 2-8 2 8 1-4h4" />
        </svg>
      );
    case 'capacitor':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 12h8M14 12h8M10 6v12M14 6v12" />
        </svg>
      );
    case 'inductor':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 12h2c0 0 0-3 2-3s2 3 2 3c0 0 0-3 2-3s2 3 2 3c0 0 0-3 2-3s2 3 2 3h2" />
        </svg>
      );
    case 'diode':
    case 'led':
    case 'zener':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 12h6l6-6v12l-6-6h8" />
          <path d="M14 6v12" />
        </svg>
      );
    case 'transistor_npn':
    case 'transistor_pnp':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h4M12 8v-4M12 16v4" />
          <path d="M8 12l4-4M8 12l4 4" />
        </svg>
      );
    case 'opamp':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4l16 8-16 8V4z" />
          <path d="M6 8h2M6 16h2M20 12h2" />
        </svg>
      );
    case 'potentiometer':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 12h4l1-4 2 8 2-8 2 8 2-8 2 8 1-4h4" />
          <path d="M12 6v-2M12 6l-2 2M12 6l2 2" />
        </svg>
      );
    case 'switch':
      return <ToggleLeft className={iconClass} />;
    case 'input_jack':
      return <Mic className={iconClass} />;
    case 'output_jack':
      return <Speaker className={iconClass} />;
    case 'speaker':
      return <Speaker className={iconClass} />;
    case 'ground':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4v8M6 12h12M8 16h8M10 20h4" />
        </svg>
      );
    case 'vcc':
      return <Zap className={iconClass} />;
    case 'oscillator':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0" />
        </svg>
      );
    case 'mosfet_n':
    case 'mosfet_p':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 12h4M12 4v6M12 14v6" />
          <path d="M8 8v8M12 8h6M12 16h6" />
          <path d="M12 12l4-3M12 12l4 3" />
        </svg>
      );
    case 'jfet_n':
    case 'jfet_p':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 12h4M12 4v6M12 14v6" />
          <path d="M8 6v12M12 8h6M12 16h6" />
          <path d="M8 12l-3 2M8 12l-3-2" />
        </svg>
      );
    case 'timer_555':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <text x="12" y="14" fontSize="6" textAnchor="middle" fill="currentColor">555</text>
        </svg>
      );
    case 'cd40106':
    case 'cd4049':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M8 12l4-3v6z" />
          <circle cx="14" cy="12" r="1" />
        </svg>
      );
    case 'cd4017':
    case 'cd4040':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M8 8h8M8 12h8M8 16h8" />
        </svg>
      );
    case 'cd4066':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M8 12h3M13 12h3" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'pt2399':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M7 12c1-2 2-2 3 0s2 2 3 0 2-2 3 0" />
        </svg>
      );
    case 'optocoupler':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M7 10l3-3v6z" />
          <path d="M12 9l2 3M12 15l2-3" />
          <circle cx="17" cy="12" r="2" />
        </svg>
      );
    case 'ldr':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 12h4l1-4 2 8 2-8 2 8 2-8 2 8 1-4h4" />
          <path d="M8 6l2 2M10 4l2 2" />
        </svg>
      );
    case 'regulator':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="6" width="12" height="12" rx="1" />
          <path d="M2 12h4M18 12h4M12 18v4" />
        </svg>
      );
    default:
      return <Circle className={iconClass} />;
  }
}
