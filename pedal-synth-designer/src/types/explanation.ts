import type { ComponentType } from './circuit';

export type ExplanationMode = 'component' | 'signal-flow' | 'section';

export interface ValueEffect {
  range: string;
  effect: string;
}

export interface ContextRule {
  condition: string;
  explanation: string;
}

export interface ComponentKnowledge {
  type: ComponentType;
  generalPurpose: string;
  sonicRole: string;
  valueEffects: ValueEffect[];
  contextRules: ContextRule[];
  commonUses: string[];
  interactsWith: ComponentType[];
}

export interface SignalFlowStage {
  stageNumber: number;
  componentId: string;
  componentRef?: string;
  description: string;
  signalEffect: string;
}

export interface SignalPath {
  stages: SignalFlowStage[];
  totalStages: number;
}

export interface SectionExplanation {
  sectionId: string;
  name: string;
  role: string;
  howItWorks: string;
  keyComponents: string[];
  sonicContribution: string;
}

export interface ComponentExplanation {
  componentId: string;
  componentRef?: string;
  type: ComponentType;
  role: string;
  valueExplanation: string;
  contextExplanation: string;
  modificationSuggestions: string[];
}

export interface ExplanationState {
  mode: ExplanationMode;
  isEnabled: boolean;
  showSignalFlow: boolean;
  highlightedSectionId: string | null;
  hoveredComponentId: string | null;
  currentExplanation: ComponentExplanation | null;
  signalPath: SignalPath | null;
  sectionExplanations: SectionExplanation[];
}

export interface TooltipPosition {
  x: number;
  y: number;
  anchor: 'top' | 'bottom' | 'left' | 'right';
}

export interface TooltipContent {
  title: string;
  shortDescription: string;
  value?: string;
  role?: string;
}
