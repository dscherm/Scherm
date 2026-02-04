import type { CircuitComponent, Wire, ComponentType } from '../types/circuit';

export interface SimulatedCircuit {
  inputNode: AudioNode | null;
  outputNode: AudioNode | null;
  nodes: Map<string, AudioNode>;
  isValid: boolean;
  signalPath: string[];
}

interface ComponentNode {
  component: CircuitComponent;
  audioNode: AudioNode | null;
}

// Build adjacency list from wires
function buildGraph(components: CircuitComponent[], wires: Wire[]): Map<string, Set<string>> {
  const adjacency = new Map<string, Set<string>>();

  for (const comp of components) {
    adjacency.set(comp.id, new Set());
  }

  for (const wire of wires) {
    adjacency.get(wire.startComponentId)?.add(wire.endComponentId);
    adjacency.get(wire.endComponentId)?.add(wire.startComponentId);
  }

  return adjacency;
}

// Find signal path from input to output using BFS
function findSignalPath(
  components: CircuitComponent[],
  wires: Wire[]
): string[] | null {
  const input = components.find(c => c.type === 'input_jack');
  const output = components.find(c => c.type === 'output_jack');

  if (!input || !output) return null;

  const graph = buildGraph(components, wires);
  const visited = new Set<string>();
  const queue: { id: string; path: string[] }[] = [{ id: input.id, path: [input.id] }];

  while (queue.length > 0) {
    const { id, path } = queue.shift()!;

    if (id === output.id) {
      return path;
    }

    if (visited.has(id)) continue;
    visited.add(id);

    const neighbors = graph.get(id);
    if (!neighbors) continue;

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        // Skip ground and VCC in signal path
        const neighborComp = components.find(c => c.id === neighbor);
        if (neighborComp && neighborComp.type !== 'ground' && neighborComp.type !== 'vcc') {
          queue.push({ id: neighbor, path: [...path, neighbor] });
        }
      }
    }
  }

  return null;
}

// Create a clipping curve for diode simulation
function makeDistortionCurve(amount: number, type: 'soft' | 'hard' | 'led'): Float32Array {
  const samples = 44100;
  const curve = new Float32Array(samples);
  const deg = Math.PI / 180;

  for (let i = 0; i < samples; i++) {
    const x = (i * 2) / samples - 1;

    switch (type) {
      case 'soft':
        // Soft clipping (like tube or op-amp feedback diodes)
        curve[i] = Math.tanh(x * amount);
        break;
      case 'hard':
        // Hard clipping (like diodes to ground)
        curve[i] = Math.max(-0.8, Math.min(0.8, x * amount)) / amount;
        break;
      case 'led':
        // LED clipping - higher headroom, more open
        const threshold = 0.7;
        if (Math.abs(x) < threshold) {
          curve[i] = x;
        } else {
          curve[i] = Math.sign(x) * (threshold + Math.tanh((Math.abs(x) - threshold) * 2) * (1 - threshold));
        }
        break;
    }
  }

  return curve;
}

// Create audio node for a component
function createAudioNode(
  ctx: AudioContext,
  component: CircuitComponent,
  components: CircuitComponent[],
  wires: Wire[]
): AudioNode | null {
  switch (component.type) {
    case 'input_jack':
    case 'output_jack':
      // Pass-through gain node
      return ctx.createGain();

    case 'resistor': {
      // Resistor as gain reduction (simplified voltage divider model)
      const gain = ctx.createGain();
      const resistance = typeof component.value === 'number' ? component.value : 10000;
      // Higher resistance = less current = quieter (simplified)
      // Normalize: 1kΩ = full volume, 1MΩ = very quiet
      const normalizedGain = Math.max(0.1, Math.min(1, 10000 / resistance));
      gain.gain.value = normalizedGain;
      return gain;
    }

    case 'capacitor': {
      // Capacitor as filter
      const filter = ctx.createBiquadFilter();
      const capacitance = typeof component.value === 'number' ? component.value : 0.1; // in µF

      // Check if connected to ground (high-pass) or in series (coupling cap)
      const connectedToGround = wires.some(w => {
        const otherId = w.startComponentId === component.id ? w.endComponentId :
                        w.endComponentId === component.id ? w.startComponentId : null;
        if (!otherId) return false;
        const other = components.find(c => c.id === otherId);
        return other?.type === 'ground';
      });

      if (connectedToGround) {
        // To ground = high-pass filter (removes bass)
        filter.type = 'highpass';
        // f = 1 / (2 * π * R * C), assume R = 10kΩ
        const freq = 1 / (2 * Math.PI * 10000 * (capacitance * 1e-6));
        filter.frequency.value = Math.max(20, Math.min(20000, freq));
      } else {
        // In series = coupling cap (also high-pass, blocks DC)
        filter.type = 'highpass';
        // Larger cap = lower cutoff = more bass
        const freq = 1 / (2 * Math.PI * 10000 * (capacitance * 1e-6));
        filter.frequency.value = Math.max(20, Math.min(2000, freq));
      }

      filter.Q.value = 0.707; // Butterworth
      return filter;
    }

    case 'inductor': {
      // Inductor as low-pass filter
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      const inductance = typeof component.value === 'number' ? component.value : 500; // in mH
      // f = R / (2 * π * L), assume R = 10kΩ
      const freq = 10000 / (2 * Math.PI * (inductance * 1e-3));
      filter.frequency.value = Math.max(200, Math.min(20000, freq));
      filter.Q.value = 2; // Resonant peak for wah-like effect
      return filter;
    }

    case 'diode': {
      // Silicon diode - hard clipping
      const waveshaper = ctx.createWaveShaper();
      waveshaper.curve = makeDistortionCurve(3, 'hard');
      waveshaper.oversample = '2x';
      return waveshaper;
    }

    case 'led': {
      // LED - softer clipping with higher headroom
      const waveshaper = ctx.createWaveShaper();
      waveshaper.curve = makeDistortionCurve(2, 'led');
      waveshaper.oversample = '2x';
      return waveshaper;
    }

    case 'zener': {
      // Zener - very hard clipping at specific voltage
      const waveshaper = ctx.createWaveShaper();
      waveshaper.curve = makeDistortionCurve(4, 'hard');
      waveshaper.oversample = '2x';
      return waveshaper;
    }

    case 'transistor_npn':
    case 'transistor_pnp':
    case 'jfet_n':
    case 'jfet_p': {
      // Transistor as gain stage with soft clipping
      const gain = ctx.createGain();
      gain.gain.value = 5; // Typical transistor gain stage

      const waveshaper = ctx.createWaveShaper();
      waveshaper.curve = makeDistortionCurve(1.5, 'soft');
      waveshaper.oversample = '2x';

      // Connect gain -> waveshaper and return waveshaper (gain is internal)
      gain.connect(waveshaper);

      // We need to return a node that can be connected TO
      // Create a dummy gain at input
      const inputGain = ctx.createGain();
      inputGain.gain.value = 1;
      inputGain.connect(gain);

      // Return the input, but we need the output to be waveshaper
      // This is tricky - we'll use a workaround
      return waveshaper; // Simplified - just return the clipping stage
    }

    case 'opamp': {
      // Op-amp as high-gain stage (gain determined by feedback network)
      const gain = ctx.createGain();
      // Default gain of ~10 (like a Tube Screamer)
      gain.gain.value = 10;
      return gain;
    }

    case 'potentiometer': {
      // Potentiometer as variable gain
      const gain = ctx.createGain();
      const value = typeof component.value === 'number' ? component.value : 10000;
      // Simulate pot position (value represents max resistance)
      // Assume it's set to 50% by default
      gain.gain.value = 0.5;
      return gain;
    }

    case 'switch': {
      // Switch as bypass (just pass through)
      const gain = ctx.createGain();
      gain.gain.value = 1;
      return gain;
    }

    default:
      // Unknown component - pass through
      const passthrough = ctx.createGain();
      passthrough.gain.value = 1;
      return passthrough;
  }
}

// Main function to build the simulated circuit
export function buildSimulatedCircuit(
  ctx: AudioContext,
  components: CircuitComponent[],
  wires: Wire[]
): SimulatedCircuit {
  const result: SimulatedCircuit = {
    inputNode: null,
    outputNode: null,
    nodes: new Map(),
    isValid: false,
    signalPath: [],
  };

  if (components.length === 0 || wires.length === 0) {
    return result;
  }

  // Find the signal path
  const path = findSignalPath(components, wires);
  if (!path || path.length < 2) {
    return result;
  }

  result.signalPath = path;

  // Create audio nodes for each component in the path
  const audioNodes: AudioNode[] = [];

  for (const compId of path) {
    const component = components.find(c => c.id === compId);
    if (!component) continue;

    const node = createAudioNode(ctx, component, components, wires);
    if (node) {
      result.nodes.set(compId, node);
      audioNodes.push(node);
    }
  }

  if (audioNodes.length < 2) {
    return result;
  }

  // Connect nodes in series
  for (let i = 0; i < audioNodes.length - 1; i++) {
    audioNodes[i].connect(audioNodes[i + 1] as AudioNode);
  }

  result.inputNode = audioNodes[0];
  result.outputNode = audioNodes[audioNodes.length - 1];
  result.isValid = true;

  return result;
}

// Disconnect and cleanup a simulated circuit
export function disconnectSimulatedCircuit(circuit: SimulatedCircuit): void {
  for (const node of circuit.nodes.values()) {
    try {
      node.disconnect();
    } catch (e) {
      // Node might already be disconnected
    }
  }
  circuit.nodes.clear();
  circuit.inputNode = null;
  circuit.outputNode = null;
  circuit.isValid = false;
}

// Get a description of what the circuit does sonically
export function describeCircuitSound(
  components: CircuitComponent[],
  signalPath: string[]
): string {
  const descriptions: string[] = [];

  for (const compId of signalPath) {
    const comp = components.find(c => c.id === compId);
    if (!comp) continue;

    switch (comp.type) {
      case 'capacitor': {
        const value = typeof comp.value === 'number' ? comp.value : 0.1;
        if (value < 0.01) {
          descriptions.push('treble filter');
        } else if (value < 0.1) {
          descriptions.push('mid-range coupling');
        } else {
          descriptions.push('full-range coupling');
        }
        break;
      }
      case 'diode':
        descriptions.push('hard clipping distortion');
        break;
      case 'led':
        descriptions.push('LED soft clipping');
        break;
      case 'transistor_npn':
      case 'transistor_pnp':
        descriptions.push('transistor gain stage');
        break;
      case 'jfet_n':
      case 'jfet_p':
        descriptions.push('JFET warm overdrive');
        break;
      case 'opamp':
        descriptions.push('op-amp gain stage');
        break;
      case 'potentiometer':
        descriptions.push('variable control');
        break;
    }
  }

  if (descriptions.length === 0) {
    return 'Clean signal path';
  }

  return descriptions.join(' → ');
}
