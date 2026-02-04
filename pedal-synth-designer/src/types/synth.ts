import type { CircuitComponent, Wire } from './circuit';

export type SynthCategory =
  | 'oscillator'
  | 'filter'
  | 'amplifier'
  | 'modulation'
  | 'envelope'
  | 'mixer'
  | 'sequencer'
  | 'effect'
  | 'utility'
  | 'drum'
  | 'modular'
  | 'complete';

export type SynthRoute = 'arduino' | 'pcb' | 'breadboard';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export interface SynthModule {
  id: string;
  name: string;
  category: SynthCategory;
  route: SynthRoute;
  skillLevel: SkillLevel;
  description: string;
  features: string[];
  components: string[]; // Key components like "40106", "Arduino Nano", etc.
  sourceUrl?: string;
  baseCircuit: {
    components: CircuitComponent[];
    wires: Wire[];
  };
  componentRefs: Record<string, string>;
  tags: string[];
}

export interface SynthProject {
  id: string;
  name: string;
  author?: string;
  category: SynthCategory;
  route: SynthRoute;
  skillLevel: SkillLevel;
  description: string;
  features: string[];
  sourceUrl?: string;
  modules?: string[]; // IDs of modules if it's a complete synth
  tags: string[];
}

// Arduino-based module categories from chrisbeckstrom's repo
export const ARDUINO_MODULES = {
  oscillators: [
    '40106 Saw/Pulse VCO',
    '40106 Square LFO',
    '40106 Six Oscillators',
    'Single Op-Amp Saw VCO',
    'Single Op-Amp VCO with Sub',
    '555 Pulse LFO',
  ],
  filters: [
    '4069 LP/HP Filters',
    '4069 Voltage-Controlled HPF',
    '4069 Voltage-Controlled LPF',
    'VCF with Resonance',
    'Vactrol Low-Pass Gate',
  ],
  modulation: [
    'Sample and Hold',
    'Sequential Switch',
    'VC Slope Generator',
    'Wavefolder',
  ],
  amplifiers: [
    'Vactrol VCA',
    'Transistor VCA',
    '5x Gain Booster',
  ],
  utilities: [
    'Clock Divider',
    '3-Input Passive Mixer',
    '4-Input Summing Mixer',
    'Gate-to-Trigger Converter',
    'CMOS Noise Generator',
  ],
  effects: [
    'PT2399 Delay',
    'Spring Reverb Driver',
  ],
};

// PCB-based synth projects from diy-synths
export const PCB_SYNTHS = {
  monosynths: [
    'Sound Lab Mini-Synth',
    'Noise Toaster',
    'ArduTouch',
    'Kelpie',
  ],
  digital: [
    'Mini Dexed',
    'NTH Synth',
    'DrumKid',
  ],
  modular: [
    'Kastle',
    'Bread Modular',
    'MiniMO',
    'Paper Bits',
  ],
  drumMachines: [
    'Polaron',
    'Fasma Festival',
    'Nano Minipops',
  ],
  experimental: [
    'Beam Catcher',
    'Hidden Sound Explorer',
    'Quantum DJ',
  ],
};
