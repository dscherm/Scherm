import { create } from 'zustand';
import type {
  ExplanationMode,
  ExplanationState,
  ComponentExplanation,
  SectionExplanation,
} from '../types/explanation';
import type { CircuitComponent, Wire } from '../types/circuit';
import {
  traceSignalPath,
  getContextualExplanation,
  getValueExplanation,
} from '../utils/circuitAnalyzer';
import { getComponentKnowledge, getQuickExplanation } from '../data/explanations/componentKnowledge';

interface ExplanationStore extends ExplanationState {
  // Actions - Mode
  setMode: (mode: ExplanationMode) => void;
  toggleEnabled: () => void;
  setEnabled: (enabled: boolean) => void;
  toggleSignalFlow: () => void;

  // Actions - Highlight
  setHighlightedSection: (sectionId: string | null) => void;
  setHoveredComponent: (componentId: string | null) => void;

  // Actions - Explanation generation
  generateComponentExplanation: (
    component: CircuitComponent,
    components: CircuitComponent[],
    wires: Wire[],
    componentRef?: string
  ) => void;
  generateSignalPath: (components: CircuitComponent[], wires: Wire[]) => void;
  setSectionExplanations: (sections: SectionExplanation[]) => void;

  // Actions - Clear
  clearExplanation: () => void;
  clearSignalPath: () => void;
}

export const useExplanationStore = create<ExplanationStore>((set) => ({
  // Initial state
  mode: 'component',
  isEnabled: false,
  showSignalFlow: false,
  highlightedSectionId: null,
  hoveredComponentId: null,
  currentExplanation: null,
  signalPath: null,
  sectionExplanations: [],

  // Mode actions
  setMode: (mode) => set({ mode }),

  toggleEnabled: () => set((state) => ({ isEnabled: !state.isEnabled })),

  setEnabled: (enabled) => set({ isEnabled: enabled }),

  toggleSignalFlow: () => set((state) => ({ showSignalFlow: !state.showSignalFlow })),

  // Highlight actions
  setHighlightedSection: (sectionId) => set({ highlightedSectionId: sectionId }),

  setHoveredComponent: (componentId) => set({ hoveredComponentId: componentId }),

  // Explanation generation
  generateComponentExplanation: (component, components, wires, componentRef) => {
    const knowledge = getComponentKnowledge(component.type);

    if (!knowledge) {
      set({ currentExplanation: null });
      return;
    }

    const contextExplanation = getContextualExplanation(component, components, wires);
    const valueExplanation = getValueExplanation(component);

    const explanation: ComponentExplanation = {
      componentId: component.id,
      componentRef,
      type: component.type,
      role: getQuickExplanation(component.type),
      valueExplanation,
      contextExplanation,
      modificationSuggestions: generateModificationSuggestions(component, knowledge),
    };

    set({ currentExplanation: explanation });
  },

  generateSignalPath: (components, wires) => {
    const path = traceSignalPath(components, wires);
    set({ signalPath: path });
  },

  setSectionExplanations: (sections) => set({ sectionExplanations: sections }),

  // Clear actions
  clearExplanation: () => set({ currentExplanation: null }),

  clearSignalPath: () => set({ signalPath: null }),
}));

function generateModificationSuggestions(
  component: CircuitComponent,
  knowledge: ReturnType<typeof getComponentKnowledge>
): string[] {
  if (!knowledge) return [];

  const suggestions: string[] = [];
  const value = typeof component.value === 'number' ? component.value : 0;

  switch (component.type) {
    case 'resistor':
      if (value > 0) {
        suggestions.push(`Increase to ${value * 2}Ω for less gain/current`);
        suggestions.push(`Decrease to ${value / 2}Ω for more gain/current`);
      }
      break;

    case 'capacitor':
      if (value > 0) {
        suggestions.push(`Increase for more bass response`);
        suggestions.push(`Decrease for brighter tone`);
      }
      break;

    case 'diode':
      suggestions.push('Try LED for higher headroom clipping');
      suggestions.push('Try germanium for softer, warmer clipping');
      suggestions.push('Add parallel diode for asymmetric clipping');
      break;

    case 'led':
      suggestions.push('Try silicon diode for tighter, compressed sound');
      suggestions.push('Try different color LED for different threshold');
      break;

    case 'potentiometer':
      if (value > 0) {
        suggestions.push(`Higher value (${value * 2}) for wider range`);
        suggestions.push('Try audio taper for better perceived sweep');
      }
      break;

    case 'opamp':
      suggestions.push('JRC4558 for warm midrange');
      suggestions.push('TL072 for cleaner, hi-fi sound');
      suggestions.push('LM308 for RAT-style compression');
      break;
  }

  return suggestions.slice(0, 3);
}
