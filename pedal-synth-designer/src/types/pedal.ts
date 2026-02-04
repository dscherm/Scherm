import type { CircuitComponent, Wire, ComponentType } from './circuit';

export type PedalCategory =
  | 'overdrive'
  | 'distortion'
  | 'fuzz'
  | 'delay'
  | 'reverb'
  | 'modulation'
  | 'filter'
  | 'compressor'
  | 'boost';

export type ModDifficulty = 'easy' | 'moderate' | 'advanced';

export interface PartRequirement {
  name: string;
  value: string;
  type: ComponentType;
  quantity: number;
  notes?: string;
}

export interface ComponentChange {
  type?: ComponentType;
  value?: number | string;
  unit?: string;
}

export interface PedalMod {
  id: string;
  name: string;
  description: string;
  difficulty: ModDifficulty;
  sonicChange: string;
  partsNeeded: PartRequirement[];
  componentChanges: Record<string, ComponentChange>;
  addComponents?: Omit<CircuitComponent, 'id' | 'selected'>[];
  removeComponents?: string[];
  addWires?: Omit<Wire, 'id' | 'selected'>[];
  removeWires?: string[];
}

export interface CircuitSection {
  id: string;
  name: string;
  description: string;
  componentRefs: string[];
  order: number;
  signalRole: 'input' | 'buffer' | 'gain' | 'clipping' | 'tone' | 'volume' | 'output' | 'power' | 'bias';
}

export interface BaseCircuit {
  components: Omit<CircuitComponent, 'selected'>[];
  wires: Omit<Wire, 'selected'>[];
}

export interface PedalCircuit {
  id: string;
  name: string;
  manufacturer: string;
  category: PedalCategory;
  description: string;
  tags: string[];
  yearIntroduced?: number;
  baseCircuit: BaseCircuit;
  componentRefs: Record<string, string>;
  mods: PedalMod[];
  sections: CircuitSection[];
}

export interface PedalBrowserFilters {
  search: string;
  categories: PedalCategory[];
  tags: string[];
}

export interface PedalBrowserState {
  isOpen: boolean;
  filters: PedalBrowserFilters;
  selectedPedalId: string | null;
  selectedModIds: string[];
}
