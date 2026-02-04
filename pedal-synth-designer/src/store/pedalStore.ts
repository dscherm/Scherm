import { create } from 'zustand';
import type { PedalCategory, PedalBrowserFilters, PedalCircuit } from '../types';
import { allPedals } from '../data/pedals';

interface PedalStore {
  // Browser state
  isOpen: boolean;
  filters: PedalBrowserFilters;
  selectedPedalId: string | null;
  selectedModIds: string[];

  // Data
  pedals: PedalCircuit[];

  // Computed
  filteredPedals: () => PedalCircuit[];
  selectedPedal: () => PedalCircuit | null;

  // Actions - Browser
  openBrowser: () => void;
  closeBrowser: () => void;
  toggleBrowser: () => void;

  // Actions - Filters
  setSearchFilter: (search: string) => void;
  toggleCategoryFilter: (category: PedalCategory) => void;
  clearCategoryFilters: () => void;
  addTagFilter: (tag: string) => void;
  removeTagFilter: (tag: string) => void;
  clearFilters: () => void;

  // Actions - Selection
  selectPedal: (pedalId: string | null) => void;
  toggleMod: (modId: string) => void;
  selectAllMods: () => void;
  clearModSelection: () => void;
}

export const usePedalStore = create<PedalStore>((set, get) => ({
  // Initial state
  isOpen: false,
  filters: {
    search: '',
    categories: [],
    tags: [],
  },
  selectedPedalId: null,
  selectedModIds: [],
  pedals: allPedals,

  // Computed
  filteredPedals: () => {
    const { pedals, filters } = get();

    return pedals.filter((pedal) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          pedal.name.toLowerCase().includes(searchLower) ||
          pedal.manufacturer.toLowerCase().includes(searchLower) ||
          pedal.description.toLowerCase().includes(searchLower) ||
          pedal.tags.some(tag => tag.toLowerCase().includes(searchLower));

        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(pedal.category)) return false;
      }

      // Tag filter
      if (filters.tags.length > 0) {
        const hasAllTags = filters.tags.every(tag =>
          pedal.tags.includes(tag)
        );
        if (!hasAllTags) return false;
      }

      return true;
    });
  },

  selectedPedal: () => {
    const { pedals, selectedPedalId } = get();
    if (!selectedPedalId) return null;
    return pedals.find(p => p.id === selectedPedalId) || null;
  },

  // Browser actions
  openBrowser: () => set({ isOpen: true }),
  closeBrowser: () => set({ isOpen: false }),
  toggleBrowser: () => set((state) => ({ isOpen: !state.isOpen })),

  // Filter actions
  setSearchFilter: (search) => set((state) => ({
    filters: { ...state.filters, search }
  })),

  toggleCategoryFilter: (category) => set((state) => {
    const categories = state.filters.categories.includes(category)
      ? state.filters.categories.filter(c => c !== category)
      : [...state.filters.categories, category];
    return { filters: { ...state.filters, categories } };
  }),

  clearCategoryFilters: () => set((state) => ({
    filters: { ...state.filters, categories: [] }
  })),

  addTagFilter: (tag) => set((state) => ({
    filters: {
      ...state.filters,
      tags: state.filters.tags.includes(tag)
        ? state.filters.tags
        : [...state.filters.tags, tag]
    }
  })),

  removeTagFilter: (tag) => set((state) => ({
    filters: {
      ...state.filters,
      tags: state.filters.tags.filter(t => t !== tag)
    }
  })),

  clearFilters: () => set({
    filters: { search: '', categories: [], tags: [] }
  }),

  // Selection actions
  selectPedal: (pedalId) => set({
    selectedPedalId: pedalId,
    selectedModIds: []
  }),

  toggleMod: (modId) => set((state) => ({
    selectedModIds: state.selectedModIds.includes(modId)
      ? state.selectedModIds.filter(id => id !== modId)
      : [...state.selectedModIds, modId]
  })),

  selectAllMods: () => {
    const pedal = get().selectedPedal();
    if (!pedal) return;
    set({ selectedModIds: pedal.mods.map(m => m.id) });
  },

  clearModSelection: () => set({ selectedModIds: [] }),
}));
