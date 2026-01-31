import { useState } from 'react';
import { useCircuitStore } from '../store';
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
          Common Circuits
        </h3>
        <div className="space-y-1">
          <button className="w-full px-2 py-1.5 text-sm text-left text-gray-400 hover:text-white hover:bg-[#1a1a2e] rounded transition-colors">
            + Basic Fuzz
          </button>
          <button className="w-full px-2 py-1.5 text-sm text-left text-gray-400 hover:text-white hover:bg-[#1a1a2e] rounded transition-colors">
            + Op-Amp Boost
          </button>
          <button className="w-full px-2 py-1.5 text-sm text-left text-gray-400 hover:text-white hover:bg-[#1a1a2e] rounded transition-colors">
            + RC Oscillator
          </button>
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
    default:
      return <Circle className={iconClass} />;
  }
}
