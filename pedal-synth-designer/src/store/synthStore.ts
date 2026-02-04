import { create } from 'zustand';
import type { SynthModule, SynthProject, SynthCategory, SynthRoute, SkillLevel } from '../types/synth';
import { allArduinoModules, allPcbSynths } from '../data/synths';

interface SynthFilters {
  search: string;
  categories: SynthCategory[];
  routes: SynthRoute[];
  skillLevels: SkillLevel[];
}

interface SynthStore {
  // Browser state
  isOpen: boolean;
  activeTab: 'arduino' | 'pcb';
  filters: SynthFilters;
  selectedModuleId: string | null;
  selectedProjectId: string | null;

  // Actions - Browser
  openBrowser: () => void;
  closeBrowser: () => void;
  setActiveTab: (tab: 'arduino' | 'pcb') => void;

  // Actions - Filters
  setSearchFilter: (search: string) => void;
  toggleCategoryFilter: (category: SynthCategory) => void;
  toggleRouteFilter: (route: SynthRoute) => void;
  toggleSkillFilter: (level: SkillLevel) => void;
  clearFilters: () => void;

  // Actions - Selection
  selectModule: (id: string | null) => void;
  selectProject: (id: string | null) => void;

  // Getters
  filteredModules: () => SynthModule[];
  filteredProjects: () => SynthProject[];
  selectedModule: () => SynthModule | null;
  selectedProject: () => SynthProject | null;
}

export const useSynthStore = create<SynthStore>((set, get) => ({
  // Initial state
  isOpen: false,
  activeTab: 'arduino',
  filters: {
    search: '',
    categories: [],
    routes: [],
    skillLevels: [],
  },
  selectedModuleId: null,
  selectedProjectId: null,

  // Browser actions
  openBrowser: () => set({ isOpen: true }),
  closeBrowser: () => set({
    isOpen: false,
    selectedModuleId: null,
    selectedProjectId: null
  }),
  setActiveTab: (tab) => set({
    activeTab: tab,
    selectedModuleId: null,
    selectedProjectId: null,
  }),

  // Filter actions
  setSearchFilter: (search) =>
    set((state) => ({
      filters: { ...state.filters, search },
    })),

  toggleCategoryFilter: (category) =>
    set((state) => {
      const categories = state.filters.categories.includes(category)
        ? state.filters.categories.filter((c) => c !== category)
        : [...state.filters.categories, category];
      return { filters: { ...state.filters, categories } };
    }),

  toggleRouteFilter: (route) =>
    set((state) => {
      const routes = state.filters.routes.includes(route)
        ? state.filters.routes.filter((r) => r !== route)
        : [...state.filters.routes, route];
      return { filters: { ...state.filters, routes } };
    }),

  toggleSkillFilter: (level) =>
    set((state) => {
      const skillLevels = state.filters.skillLevels.includes(level)
        ? state.filters.skillLevels.filter((l) => l !== level)
        : [...state.filters.skillLevels, level];
      return { filters: { ...state.filters, skillLevels } };
    }),

  clearFilters: () =>
    set({
      filters: {
        search: '',
        categories: [],
        routes: [],
        skillLevels: [],
      },
    }),

  // Selection actions
  selectModule: (id) => set({ selectedModuleId: id }),
  selectProject: (id) => set({ selectedProjectId: id }),

  // Getters
  filteredModules: () => {
    const { filters } = get();
    return allArduinoModules.filter((module) => {
      // Search filter
      if (filters.search) {
        const search = filters.search.toLowerCase();
        const matchesSearch =
          module.name.toLowerCase().includes(search) ||
          module.description.toLowerCase().includes(search) ||
          module.tags.some((t) => t.toLowerCase().includes(search));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(module.category)) return false;
      }

      // Skill level filter
      if (filters.skillLevels.length > 0) {
        if (!filters.skillLevels.includes(module.skillLevel)) return false;
      }

      return true;
    });
  },

  filteredProjects: () => {
    const { filters } = get();
    return allPcbSynths.filter((project) => {
      // Search filter
      if (filters.search) {
        const search = filters.search.toLowerCase();
        const matchesSearch =
          project.name.toLowerCase().includes(search) ||
          project.description.toLowerCase().includes(search) ||
          project.tags.some((t) => t.toLowerCase().includes(search));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(project.category)) return false;
      }

      // Route filter
      if (filters.routes.length > 0) {
        if (!filters.routes.includes(project.route)) return false;
      }

      // Skill level filter
      if (filters.skillLevels.length > 0) {
        if (!filters.skillLevels.includes(project.skillLevel)) return false;
      }

      return true;
    });
  },

  selectedModule: () => {
    const { selectedModuleId } = get();
    if (!selectedModuleId) return null;
    return allArduinoModules.find((m) => m.id === selectedModuleId) || null;
  },

  selectedProject: () => {
    const { selectedProjectId } = get();
    if (!selectedProjectId) return null;
    return allPcbSynths.find((p) => p.id === selectedProjectId) || null;
  },
}));
