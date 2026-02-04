import { useCircuitStore } from '../store';
import { getComponentDefinition, formatValue } from '../utils/componentFactory';
import { Sliders, Hash, RotateCw, Trash2 } from 'lucide-react';
import { ExplanationPanel } from './ExplanationPanel';

export function PropertiesPanel() {
  const {
    components,
    selectionState,
    updateComponent,
    rotateComponent,
    removeComponent,
  } = useCircuitStore();

  const selectedComponents = components.filter((c) =>
    selectionState.selectedComponentIds.includes(c.id)
  );

  if (selectedComponents.length === 0) {
    return (
      <div className="w-64 bg-[#12121a] border-l border-[#2a2a3a] flex flex-col">
        <div className="p-4 flex-1">
          <div className="text-center text-gray-500 mt-8">
            <Sliders className="mx-auto mb-2 opacity-50" size={32} />
            <p className="text-sm">Select a component to edit its properties</p>
          </div>
        </div>
        <ExplanationPanel />
      </div>
    );
  }

  if (selectedComponents.length > 1) {
    return (
      <div className="w-64 bg-[#12121a] border-l border-[#2a2a3a] flex flex-col">
        <div className="p-4 flex-1">
          <div className="text-center text-gray-400 mt-8">
            <Hash className="mx-auto mb-2" size={32} />
            <p className="text-sm">{selectedComponents.length} components selected</p>
            <button
              onClick={() => {
                selectedComponents.forEach((c) => removeComponent(c.id));
              }}
              className="mt-4 px-3 py-1.5 bg-[#e94560]/20 text-[#e94560] rounded text-sm hover:bg-[#e94560]/30 transition-colors"
            >
              Delete All
            </button>
          </div>
        </div>
        <ExplanationPanel />
      </div>
    );
  }

  const component = selectedComponents[0];
  const definition = getComponentDefinition(component.type);

  const handleValueChange = (newValue: number | string) => {
    updateComponent(component.id, { value: newValue });
  };

  return (
    <div className="w-64 bg-[#12121a] border-l border-[#2a2a3a] flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <div className="p-3 border-b border-[#2a2a3a]">
          <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
            Properties
          </h2>
        </div>

        <div className="p-4 space-y-4">
          {/* Component type */}
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
              Type
            </label>
            <div className="text-white font-medium">{definition.name}</div>
          </div>

          {/* Value input */}
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
              Value
            </label>
            {typeof definition.defaultValue === 'number' ? (
              <div className="flex gap-2">
                <input
                  type="number"
                  value={component.value as number}
                  onChange={(e) => handleValueChange(parseFloat(e.target.value) || 0)}
                  className="flex-1 px-2 py-1.5 bg-[#1a1a2e] border border-[#2a2a3a] rounded text-white text-sm focus:outline-none focus:border-[#4ecca3]"
                />
                <span className="px-2 py-1.5 bg-[#1a1a2e] border border-[#2a2a3a] rounded text-gray-400 text-sm">
                  {component.unit}
                </span>
              </div>
            ) : (
              <input
                type="text"
                value={component.value as string}
                onChange={(e) => handleValueChange(e.target.value)}
                className="w-full px-2 py-1.5 bg-[#1a1a2e] border border-[#2a2a3a] rounded text-white text-sm focus:outline-none focus:border-[#4ecca3]"
              />
            )}
          </div>

          {/* Quick value presets for resistors/capacitors */}
          {(component.type === 'resistor' || component.type === 'potentiometer') && (
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
                Common Values
              </label>
              <div className="grid grid-cols-3 gap-1">
                {[1000, 4700, 10000, 47000, 100000, 1000000].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleValueChange(val)}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      component.value === val
                        ? 'bg-[#4ecca3] text-black'
                        : 'bg-[#1a1a2e] text-gray-400 hover:text-white hover:bg-[#252538]'
                    }`}
                  >
                    {formatValue(val, 'Ω')}
                  </button>
                ))}
              </div>
            </div>
          )}

          {component.type === 'capacitor' && (
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
                Common Values
              </label>
              <div className="grid grid-cols-3 gap-1">
                {[0.001, 0.01, 0.022, 0.047, 0.1, 1].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleValueChange(val)}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      component.value === val
                        ? 'bg-[#4ecca3] text-black'
                        : 'bg-[#1a1a2e] text-gray-400 hover:text-white hover:bg-[#252538]'
                    }`}
                  >
                    {formatValue(val, 'µF')}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Rotation */}
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
              Rotation
            </label>
            <div className="flex items-center gap-2">
              <span className="text-white">{component.rotation}°</span>
              <button
                onClick={() => rotateComponent(component.id)}
                className="p-1.5 bg-[#1a1a2e] rounded hover:bg-[#252538] transition-colors"
              >
                <RotateCw size={16} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Position */}
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
              Position
            </label>
            <div className="text-sm text-gray-400">
              X: {Math.round(component.position.x)}, Y: {Math.round(component.position.y)}
            </div>
          </div>

          {/* Pins */}
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1">
              Pins
            </label>
            <div className="space-y-1">
              {component.pins.map((pin) => (
                <div
                  key={pin.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-400">{pin.name}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded ${
                      pin.connected
                        ? 'bg-[#4ecca3]/20 text-[#4ecca3]'
                        : 'bg-[#2a2a3a] text-gray-500'
                    }`}
                  >
                    {pin.connected ? 'Connected' : 'Open'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Delete button */}
          <button
            onClick={() => removeComponent(component.id)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#e94560]/20 text-[#e94560] rounded hover:bg-[#e94560]/30 transition-colors"
          >
            <Trash2 size={16} />
            Delete Component
          </button>
        </div>
      </div>

      {/* Explanation Panel */}
      <ExplanationPanel />
    </div>
  );
}
