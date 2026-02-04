import { useCallback, useMemo } from 'react';
import { X, Search, Filter, Download, Package } from 'lucide-react';
import { usePedalStore, useCircuitStore } from '../store';
import { PedalCard } from './PedalCard';
import { ModCard } from './ModCard';
import { applyMods, calculatePartsNeeded } from '../utils/modApplicator';
import type { PedalCategory } from '../types';

const CATEGORIES: { value: PedalCategory; label: string }[] = [
  { value: 'overdrive', label: 'Overdrive' },
  { value: 'distortion', label: 'Distortion' },
  { value: 'fuzz', label: 'Fuzz' },
  { value: 'delay', label: 'Delay' },
  { value: 'reverb', label: 'Reverb' },
  { value: 'modulation', label: 'Modulation' },
  { value: 'filter', label: 'Filter' },
  { value: 'compressor', label: 'Compressor' },
  { value: 'boost', label: 'Boost' },
];

export function PedalBrowser() {
  const {
    isOpen,
    closeBrowser,
    filters,
    setSearchFilter,
    toggleCategoryFilter,
    clearFilters,
    filteredPedals,
    selectedPedalId,
    selectPedal,
    selectedModIds,
    toggleMod,
    selectAllMods,
    clearModSelection,
    selectedPedal,
  } = usePedalStore();

  const { loadCircuit, clearCircuit } = useCircuitStore();

  const pedals = filteredPedals();
  const pedal = selectedPedal();

  const partsNeeded = useMemo(() => {
    if (!pedal) return [];
    return calculatePartsNeeded(pedal, selectedModIds);
  }, [pedal, selectedModIds]);

  const handleLoadCircuit = useCallback(() => {
    if (!pedal) return;

    const { components, wires } = applyMods(pedal, selectedModIds);
    clearCircuit();
    loadCircuit(components, wires);
    closeBrowser();
  }, [pedal, selectedModIds, clearCircuit, loadCircuit, closeBrowser]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeBrowser}
      />

      {/* Modal */}
      <div className="relative ml-auto w-[800px] h-full bg-[#0a0a12] border-l border-[#2a2a3a] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#2a2a3a]">
          <div className="flex items-center gap-3">
            <Package className="text-[#4ecca3]" size={24} />
            <div>
              <h2 className="text-lg font-semibold text-white">Pedal Library</h2>
              <p className="text-xs text-gray-500">Browse classic circuits and apply mods</p>
            </div>
          </div>
          <button
            onClick={closeBrowser}
            className="p-2 rounded-lg hover:bg-[#1a1a2e] transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left side - Search and list */}
          <div className="w-[320px] border-r border-[#2a2a3a] flex flex-col">
            {/* Search */}
            <div className="p-3 border-b border-[#2a2a3a]">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search pedals..."
                  value={filters.search}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-[#1a1a2e] border border-[#2a2a3a] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#4ecca3]"
                />
              </div>
            </div>

            {/* Category filters */}
            <div className="p-3 border-b border-[#2a2a3a]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Categories</span>
                {filters.categories.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-[#4ecca3] hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => toggleCategoryFilter(cat.value)}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      filters.categories.includes(cat.value)
                        ? 'bg-[#4ecca3] text-black'
                        : 'bg-[#1a1a2e] text-gray-400 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Pedal list */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {pedals.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <Filter size={32} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No pedals match your filters</p>
                </div>
              ) : (
                pedals.map((p) => (
                  <PedalCard
                    key={p.id}
                    pedal={p}
                    isSelected={selectedPedalId === p.id}
                    onSelect={() => selectPedal(p.id)}
                  />
                ))
              )}
            </div>
          </div>

          {/* Right side - Details and mods */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {pedal ? (
              <>
                {/* Pedal details */}
                <div className="p-4 border-b border-[#2a2a3a]">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{pedal.name}</h3>
                      <p className="text-sm text-gray-400">
                        {pedal.manufacturer} • {pedal.category}
                        {pedal.yearIntroduced && ` • ${pedal.yearIntroduced}`}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">{pedal.description}</p>
                </div>

                {/* Mods section */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                        Available Mods
                      </h4>
                      <div className="flex gap-2">
                        <button
                          onClick={selectAllMods}
                          className="text-xs text-[#4ecca3] hover:underline"
                        >
                          Select All
                        </button>
                        {selectedModIds.length > 0 && (
                          <button
                            onClick={clearModSelection}
                            className="text-xs text-gray-400 hover:underline"
                          >
                            Clear
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {pedal.mods.map((mod) => (
                        <ModCard
                          key={mod.id}
                          mod={mod}
                          pedal={pedal}
                          isSelected={selectedModIds.includes(mod.id)}
                          onToggle={() => toggleMod(mod.id)}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Parts summary and load button */}
                <div className="p-4 border-t border-[#2a2a3a] bg-[#12121a]">
                  {partsNeeded.length > 0 && (
                    <div className="mb-3">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Parts Needed for Selected Mods
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {partsNeeded.map((part, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-[#252538] text-gray-400 rounded"
                          >
                            {part.quantity}× {part.name} ({part.value})
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <button
                    onClick={handleLoadCircuit}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#4ecca3] text-black font-semibold rounded-lg hover:bg-[#3db892] transition-colors"
                  >
                    <Download size={18} />
                    Load Circuit
                    {selectedModIds.length > 0 && (
                      <span className="text-sm opacity-75">
                        with {selectedModIds.length} mod{selectedModIds.length !== 1 ? 's' : ''}
                      </span>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Package size={48} className="mx-auto mb-3 opacity-50" />
                  <p className="text-sm">Select a pedal to view details and mods</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
