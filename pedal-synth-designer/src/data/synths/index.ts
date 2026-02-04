export { arduinoModules } from './arduinoModules';
export { pcbSynths } from './pcbSynths';

import { arduinoModules } from './arduinoModules';
import { pcbSynths } from './pcbSynths';
import type { SynthModule, SynthProject } from '../../types/synth';

export const allArduinoModules: SynthModule[] = arduinoModules;
export const allPcbSynths: SynthProject[] = pcbSynths;

export function getArduinoModuleById(id: string): SynthModule | undefined {
  return arduinoModules.find(m => m.id === id);
}

export function getPcbSynthById(id: string): SynthProject | undefined {
  return pcbSynths.find(s => s.id === id);
}
