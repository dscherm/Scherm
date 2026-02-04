import { create } from 'zustand';

export type DesignMode = 'pedal' | 'synth';

interface DesignModeStore {
  mode: DesignMode;
  setMode: (mode: DesignMode) => void;
}

export const useDesignModeStore = create<DesignModeStore>((set) => ({
  mode: 'pedal',
  setMode: (mode) => set({ mode }),
}));
