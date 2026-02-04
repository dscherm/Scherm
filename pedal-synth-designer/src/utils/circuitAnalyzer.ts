import type { CircuitComponent, Wire, ComponentType } from '../types/circuit';
import type { SignalPath, SignalFlowStage, SectionExplanation } from '../types/explanation';
import type { PedalCircuit, CircuitSection } from '../types/pedal';
import { getComponentKnowledge, getQuickExplanation } from '../data/explanations/componentKnowledge';

interface ComponentGraph {
  adjacency: Map<string, Set<string>>;
  components: Map<string, CircuitComponent>;
}

function buildGraph(components: CircuitComponent[], wires: Wire[]): ComponentGraph {
  const adjacency = new Map<string, Set<string>>();
  const componentMap = new Map<string, CircuitComponent>();

  for (const comp of components) {
    adjacency.set(comp.id, new Set());
    componentMap.set(comp.id, comp);
  }

  for (const wire of wires) {
    adjacency.get(wire.startComponentId)?.add(wire.endComponentId);
    adjacency.get(wire.endComponentId)?.add(wire.startComponentId);
  }

  return { adjacency, components: componentMap };
}

function findInputComponent(components: CircuitComponent[]): CircuitComponent | null {
  return components.find(c => c.type === 'input_jack') || null;
}

function findOutputComponent(components: CircuitComponent[]): CircuitComponent | null {
  return components.find(c => c.type === 'output_jack') || null;
}

function isSignalComponent(type: ComponentType): boolean {
  const nonSignalTypes: ComponentType[] = ['ground', 'vcc'];
  return !nonSignalTypes.includes(type);
}

function getSignalEffect(component: CircuitComponent): string {
  const knowledge = getComponentKnowledge(component.type);
  if (!knowledge) return 'Processes signal';

  switch (component.type) {
    case 'input_jack':
      return 'Signal enters circuit';
    case 'output_jack':
      return 'Signal exits circuit';
    case 'capacitor':
      return 'Couples/filters signal';
    case 'resistor':
      return 'Sets impedance/gain';
    case 'diode':
    case 'led':
    case 'zener':
      return 'Clips signal (distortion)';
    case 'transistor_npn':
    case 'transistor_pnp':
    case 'jfet_n':
    case 'jfet_p':
      return 'Amplifies signal';
    case 'opamp':
      return 'Amplifies/buffers signal';
    case 'potentiometer':
      return 'User control';
    default:
      return knowledge.sonicRole.split('.')[0];
  }
}

export function traceSignalPath(
  components: CircuitComponent[],
  wires: Wire[]
): SignalPath | null {
  const input = findInputComponent(components);
  const output = findOutputComponent(components);

  if (!input || !output) {
    return null;
  }

  const graph = buildGraph(components, wires);
  const visited = new Set<string>();
  const path: string[] = [];

  function dfs(current: string, target: string): boolean {
    if (current === target) {
      path.push(current);
      return true;
    }

    if (visited.has(current)) {
      return false;
    }

    visited.add(current);
    const neighbors = graph.adjacency.get(current);

    if (!neighbors) return false;

    for (const neighbor of neighbors) {
      const neighborComp = graph.components.get(neighbor);
      if (!neighborComp || !isSignalComponent(neighborComp.type)) continue;

      if (dfs(neighbor, target)) {
        path.unshift(current);
        return true;
      }
    }

    return false;
  }

  if (!dfs(input.id, output.id)) {
    return null;
  }

  const stages: SignalFlowStage[] = path.map((compId, index) => {
    const comp = graph.components.get(compId)!;
    return {
      stageNumber: index + 1,
      componentId: compId,
      description: getQuickExplanation(comp.type),
      signalEffect: getSignalEffect(comp),
    };
  });

  return {
    stages,
    totalStages: stages.length,
  };
}

export function traceSignalPathWithRefs(
  pedal: PedalCircuit
): SignalPath | null {
  const components = pedal.baseCircuit.components.map(c => ({ ...c, selected: false }));
  const wires = pedal.baseCircuit.wires.map(w => ({ ...w, selected: false }));
  const path = traceSignalPath(components, wires);

  if (!path) return null;

  const refMap = new Map<string, string>();
  for (const [ref, id] of Object.entries(pedal.componentRefs)) {
    refMap.set(id, ref);
  }

  return {
    ...path,
    stages: path.stages.map(stage => ({
      ...stage,
      componentRef: refMap.get(stage.componentId),
    })),
  };
}

export function getSectionExplanations(
  pedal: PedalCircuit
): SectionExplanation[] {
  return pedal.sections
    .sort((a, b) => a.order - b.order)
    .map(section => ({
      sectionId: section.id,
      name: section.name,
      role: section.signalRole,
      howItWorks: section.description,
      keyComponents: section.componentRefs,
      sonicContribution: getSectionSonicContribution(section),
    }));
}

function getSectionSonicContribution(section: CircuitSection): string {
  switch (section.signalRole) {
    case 'input':
      return 'Preserves signal integrity and prevents loading of source';
    case 'buffer':
      return 'Provides low output impedance, drives cable without tone loss';
    case 'gain':
      return 'Increases signal level, adds harmonics as gain increases';
    case 'clipping':
      return 'Creates the distortion/overdrive character by limiting signal peaks';
    case 'tone':
      return 'Shapes frequency response, controls brightness/darkness';
    case 'volume':
      return 'Controls final output level sent to amplifier';
    case 'output':
      return 'Sends processed signal to next device in chain';
    case 'power':
      return 'Supplies clean, stable power for consistent tone';
    case 'bias':
      return 'Sets operating points for proper signal handling';
    default:
      return 'Processes signal';
  }
}

export function getContextualExplanation(
  component: CircuitComponent,
  components: CircuitComponent[],
  wires: Wire[]
): string {
  const knowledge = getComponentKnowledge(component.type);
  if (!knowledge) return 'Unknown component function';

  const connectedWires = wires.filter(
    w => w.startComponentId === component.id || w.endComponentId === component.id
  );

  const connectedComponents = connectedWires.map(w => {
    const otherId = w.startComponentId === component.id
      ? w.endComponentId
      : w.startComponentId;
    return components.find(c => c.id === otherId);
  }).filter(Boolean) as CircuitComponent[];

  const hasGround = connectedComponents.some(c => c.type === 'ground');
  const hasOpAmp = connectedComponents.some(c => c.type === 'opamp');

  for (const rule of knowledge.contextRules) {
    const condition = rule.condition.toLowerCase();

    if (component.type === 'capacitor') {
      if (condition.includes('to ground') && hasGround) {
        return rule.explanation;
      }
      if (condition.includes('in series') && !hasGround) {
        return rule.explanation;
      }
      if (condition.includes('feedback') && hasOpAmp) {
        return rule.explanation;
      }
    }

    if (component.type === 'resistor') {
      if (condition.includes('feedback') && hasOpAmp) {
        return rule.explanation;
      }
      if (condition.includes('to ground') && hasGround) {
        return rule.explanation;
      }
    }

    if ((component.type === 'diode' || component.type === 'led') && hasOpAmp) {
      if (condition.includes('feedback')) {
        return rule.explanation;
      }
    }
  }

  return knowledge.generalPurpose;
}

export function getValueExplanation(component: CircuitComponent): string {
  const knowledge = getComponentKnowledge(component.type);
  if (!knowledge) return '';

  const value = typeof component.value === 'number' ? component.value : 0;

  for (const effect of knowledge.valueEffects) {
    const range = effect.range.toLowerCase();

    if (component.type === 'resistor') {
      if (value <= 1000 && range.includes('100ω - 1kω')) return effect.effect;
      if (value > 1000 && value <= 10000 && range.includes('1kω - 10kω')) return effect.effect;
      if (value > 10000 && value <= 100000 && range.includes('10kω - 100kω')) return effect.effect;
      if (value > 100000 && range.includes('100kω - 1mω')) return effect.effect;
    }

    if (component.type === 'capacitor') {
      const uF = value;
      if (uF <= 0.0001 && range.includes('10pf')) return effect.effect;
      if (uF > 0.0001 && uF <= 0.001 && range.includes('100pf - 1nf')) return effect.effect;
      if (uF > 0.001 && uF <= 0.1 && range.includes('1nf - 100nf')) return effect.effect;
      if (uF > 0.1 && uF <= 1 && range.includes('100nf - 1µf')) return effect.effect;
      if (uF > 1 && range.includes('1µf - 100µf')) return effect.effect;
    }
  }

  if (typeof component.value === 'string' && component.value) {
    for (const effect of knowledge.valueEffects) {
      if (effect.range.toLowerCase().includes(component.value.toLowerCase())) {
        return effect.effect;
      }
    }
  }

  return knowledge.valueEffects[0]?.effect || '';
}
