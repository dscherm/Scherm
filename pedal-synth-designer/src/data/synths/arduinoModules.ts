import type { SynthModule } from '../../types/synth';

export const arduinoModules: SynthModule[] = [
  // OSCILLATORS
  {
    id: '40106-vco',
    name: '40106 Square Wave VCO',
    category: 'oscillator',
    route: 'arduino',
    skillLevel: 'beginner',
    description: 'Simple voltage-controlled oscillator using the CD40106 hex Schmitt trigger. Creates raw, buzzy square waves perfect for harsh synth tones.',
    features: [
      'Voltage control input',
      'Wide frequency range',
      'Multiple outputs from one chip',
      'Great for stacking oscillators',
    ],
    components: ['CD40106', 'Potentiometer', 'Capacitor'],
    sourceUrl: 'https://github.com/chrisbeckstrom/diy_modular_synthesizer/tree/master/circuits',
    baseCircuit: {
      components: [
        {
          id: 'vco-input',
          type: 'input_jack',
          position: { x: 50, y: 200 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'tip', name: 'CV In', position: { x: 50, y: 15 }, connected: false },
            { id: 'sleeve', name: 'GND', position: { x: 50, y: 35 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vco-ic1',
          type: 'cd40106',
          position: { x: 200, y: 180 },
          rotation: 0,
          value: 'CD40106',
          unit: '',
          pins: [
            { id: 'in1', name: 'In 1', position: { x: 0, y: 20 }, connected: false },
            { id: 'out1', name: 'Out 1', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vco-c1',
          type: 'capacitor',
          position: { x: 150, y: 250 },
          rotation: 0,
          value: 0.01,
          unit: 'µF',
          pins: [
            { id: 'pin1', name: '1', position: { x: 0, y: 20 }, connected: false },
            { id: 'pin2', name: '2', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vco-pot',
          type: 'potentiometer',
          position: { x: 120, y: 150 },
          rotation: 0,
          value: 100,
          unit: 'kΩ',
          pins: [
            { id: 'ccw', name: 'CCW', position: { x: 0, y: 20 }, connected: false },
            { id: 'wiper', name: 'Wiper', position: { x: 30, y: 0 }, connected: false },
            { id: 'cw', name: 'CW', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vco-output',
          type: 'output_jack',
          position: { x: 350, y: 200 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'tip', name: 'Out', position: { x: 0, y: 15 }, connected: false },
            { id: 'sleeve', name: 'GND', position: { x: 0, y: 35 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vco-gnd',
          type: 'ground',
          position: { x: 200, y: 300 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'gnd', name: 'GND', position: { x: 20, y: 0 }, connected: false }
          ],
          selected: false
        }
      ],
      wires: [
        { id: 'w1', startComponentId: 'vco-input', startPinId: 'tip', endComponentId: 'vco-pot', endPinId: 'wiper', points: [], selected: false },
        { id: 'w2', startComponentId: 'vco-pot', startPinId: 'cw', endComponentId: 'vco-ic1', endPinId: 'in1', points: [], selected: false },
        { id: 'w3', startComponentId: 'vco-ic1', startPinId: 'out1', endComponentId: 'vco-output', endPinId: 'tip', points: [], selected: false },
        { id: 'w4', startComponentId: 'vco-c1', startPinId: 'pin1', endComponentId: 'vco-ic1', endPinId: 'in1', points: [], selected: false },
        { id: 'w5', startComponentId: 'vco-c1', startPinId: 'pin2', endComponentId: 'vco-gnd', endPinId: 'gnd', points: [], selected: false },
      ]
    },
    componentRefs: {
      'IC1': 'vco-ic1',
      'C1': 'vco-c1',
      'POT1': 'vco-pot'
    },
    tags: ['beginner', 'square', 'cmos', 'vco']
  },

  // FILTERS
  {
    id: '4069-vcf',
    name: '4069 Voltage Controlled Filter',
    category: 'filter',
    route: 'arduino',
    skillLevel: 'intermediate',
    description: 'A simple but effective voltage-controlled low-pass filter using the CD4069 hex inverter. Great for creating sweeping filter effects.',
    features: [
      'Voltage-controlled cutoff',
      'Low-pass response',
      'Self-oscillation possible',
      'Pairs well with 40106 VCO',
    ],
    components: ['CD4069', 'Resistor', 'Capacitor', 'Potentiometer'],
    sourceUrl: 'https://github.com/chrisbeckstrom/diy_modular_synthesizer/tree/master/circuits',
    baseCircuit: {
      components: [
        {
          id: 'vcf-input',
          type: 'input_jack',
          position: { x: 50, y: 200 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'tip', name: 'Audio In', position: { x: 50, y: 15 }, connected: false },
            { id: 'sleeve', name: 'GND', position: { x: 50, y: 35 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vcf-ic1',
          type: 'cd4049',
          position: { x: 200, y: 180 },
          rotation: 0,
          value: 'CD4069',
          unit: '',
          pins: [
            { id: 'in1', name: 'In', position: { x: 0, y: 20 }, connected: false },
            { id: 'out1', name: 'Out', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vcf-r1',
          type: 'resistor',
          position: { x: 130, y: 200 },
          rotation: 0,
          value: 10,
          unit: 'kΩ',
          pins: [
            { id: 'pin1', name: '1', position: { x: 0, y: 20 }, connected: false },
            { id: 'pin2', name: '2', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vcf-c1',
          type: 'capacitor',
          position: { x: 260, y: 250 },
          rotation: 90,
          value: 0.1,
          unit: 'µF',
          pins: [
            { id: 'pin1', name: '1', position: { x: 20, y: 0 }, connected: false },
            { id: 'pin2', name: '2', position: { x: 20, y: 40 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vcf-output',
          type: 'output_jack',
          position: { x: 350, y: 200 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'tip', name: 'Out', position: { x: 0, y: 15 }, connected: false },
            { id: 'sleeve', name: 'GND', position: { x: 0, y: 35 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vcf-gnd',
          type: 'ground',
          position: { x: 260, y: 320 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'gnd', name: 'GND', position: { x: 20, y: 0 }, connected: false }
          ],
          selected: false
        }
      ],
      wires: [
        { id: 'w1', startComponentId: 'vcf-input', startPinId: 'tip', endComponentId: 'vcf-r1', endPinId: 'pin1', points: [], selected: false },
        { id: 'w2', startComponentId: 'vcf-r1', startPinId: 'pin2', endComponentId: 'vcf-ic1', endPinId: 'in1', points: [], selected: false },
        { id: 'w3', startComponentId: 'vcf-ic1', startPinId: 'out1', endComponentId: 'vcf-output', endPinId: 'tip', points: [], selected: false },
        { id: 'w4', startComponentId: 'vcf-ic1', startPinId: 'out1', endComponentId: 'vcf-c1', endPinId: 'pin1', points: [], selected: false },
        { id: 'w5', startComponentId: 'vcf-c1', startPinId: 'pin2', endComponentId: 'vcf-gnd', endPinId: 'gnd', points: [], selected: false },
      ]
    },
    componentRefs: {
      'IC1': 'vcf-ic1',
      'R1': 'vcf-r1',
      'C1': 'vcf-c1'
    },
    tags: ['filter', 'lowpass', 'cmos', 'vcf']
  },

  // LFO
  {
    id: '40106-lfo',
    name: '40106 Square Wave LFO',
    category: 'modulation',
    route: 'arduino',
    skillLevel: 'beginner',
    description: 'Low frequency oscillator for modulating other modules. Uses the same 40106 chip as the VCO but with larger capacitor values for slower rates.',
    features: [
      'Adjustable rate from sub-Hz to audio',
      'Square wave output',
      'LED rate indicator',
      'Can double as audio oscillator',
    ],
    components: ['CD40106', 'Potentiometer', 'Capacitor', 'LED'],
    sourceUrl: 'https://github.com/chrisbeckstrom/diy_modular_synthesizer/tree/master/circuits',
    baseCircuit: {
      components: [
        {
          id: 'lfo-ic1',
          type: 'cd40106',
          position: { x: 200, y: 180 },
          rotation: 0,
          value: 'CD40106',
          unit: '',
          pins: [
            { id: 'in1', name: 'In 1', position: { x: 0, y: 20 }, connected: false },
            { id: 'out1', name: 'Out 1', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'lfo-c1',
          type: 'capacitor',
          position: { x: 150, y: 250 },
          rotation: 0,
          value: 10,
          unit: 'µF',
          pins: [
            { id: 'pin1', name: '1', position: { x: 0, y: 20 }, connected: false },
            { id: 'pin2', name: '2', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'lfo-pot',
          type: 'potentiometer',
          position: { x: 120, y: 150 },
          rotation: 0,
          value: 1000,
          unit: 'kΩ',
          pins: [
            { id: 'ccw', name: 'CCW', position: { x: 0, y: 20 }, connected: false },
            { id: 'wiper', name: 'Wiper', position: { x: 30, y: 0 }, connected: false },
            { id: 'cw', name: 'CW', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'lfo-led',
          type: 'led',
          position: { x: 300, y: 150 },
          rotation: 0,
          value: 'Red',
          unit: '',
          pins: [
            { id: 'anode', name: 'Anode', position: { x: 0, y: 20 }, connected: false },
            { id: 'cathode', name: 'Cathode', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'lfo-output',
          type: 'output_jack',
          position: { x: 350, y: 200 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'tip', name: 'LFO Out', position: { x: 0, y: 15 }, connected: false },
            { id: 'sleeve', name: 'GND', position: { x: 0, y: 35 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'lfo-gnd',
          type: 'ground',
          position: { x: 200, y: 300 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'gnd', name: 'GND', position: { x: 20, y: 0 }, connected: false }
          ],
          selected: false
        }
      ],
      wires: [
        { id: 'w1', startComponentId: 'lfo-pot', startPinId: 'cw', endComponentId: 'lfo-ic1', endPinId: 'in1', points: [], selected: false },
        { id: 'w2', startComponentId: 'lfo-ic1', startPinId: 'out1', endComponentId: 'lfo-output', endPinId: 'tip', points: [], selected: false },
        { id: 'w3', startComponentId: 'lfo-ic1', startPinId: 'out1', endComponentId: 'lfo-led', endPinId: 'anode', points: [], selected: false },
        { id: 'w4', startComponentId: 'lfo-c1', startPinId: 'pin1', endComponentId: 'lfo-ic1', endPinId: 'in1', points: [], selected: false },
        { id: 'w5', startComponentId: 'lfo-c1', startPinId: 'pin2', endComponentId: 'lfo-gnd', endPinId: 'gnd', points: [], selected: false },
      ]
    },
    componentRefs: {
      'IC1': 'lfo-ic1',
      'C1': 'lfo-c1',
      'POT1': 'lfo-pot',
      'LED1': 'lfo-led'
    },
    tags: ['lfo', 'modulation', 'cmos', 'beginner']
  },

  // VCA
  {
    id: 'vactrol-vca',
    name: 'Vactrol VCA',
    category: 'amplifier',
    route: 'arduino',
    skillLevel: 'intermediate',
    description: 'A simple voltage-controlled amplifier using a vactrol (LED + LDR optocoupler). Creates organic, slightly sluggish amplitude control.',
    features: [
      'Organic response curve',
      'Natural compression',
      'DIY vactrol possible',
      'Great for tremolo effects',
    ],
    components: ['Optocoupler', 'Resistor', 'Capacitor'],
    sourceUrl: 'https://github.com/chrisbeckstrom/diy_modular_synthesizer/tree/master/circuits',
    baseCircuit: {
      components: [
        {
          id: 'vca-input',
          type: 'input_jack',
          position: { x: 50, y: 150 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'tip', name: 'Audio In', position: { x: 50, y: 15 }, connected: false },
            { id: 'sleeve', name: 'GND', position: { x: 50, y: 35 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vca-cv',
          type: 'input_jack',
          position: { x: 50, y: 250 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'tip', name: 'CV In', position: { x: 50, y: 15 }, connected: false },
            { id: 'sleeve', name: 'GND', position: { x: 50, y: 35 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vca-opto',
          type: 'optocoupler',
          position: { x: 200, y: 200 },
          rotation: 0,
          value: 'Vactrol',
          unit: '',
          pins: [
            { id: 'led-a', name: 'LED+', position: { x: 0, y: 10 }, connected: false },
            { id: 'led-c', name: 'LED-', position: { x: 0, y: 30 }, connected: false },
            { id: 'ldr-1', name: 'LDR 1', position: { x: 60, y: 10 }, connected: false },
            { id: 'ldr-2', name: 'LDR 2', position: { x: 60, y: 30 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vca-r1',
          type: 'resistor',
          position: { x: 130, y: 260 },
          rotation: 0,
          value: 1,
          unit: 'kΩ',
          pins: [
            { id: 'pin1', name: '1', position: { x: 0, y: 20 }, connected: false },
            { id: 'pin2', name: '2', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vca-output',
          type: 'output_jack',
          position: { x: 350, y: 200 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'tip', name: 'Out', position: { x: 0, y: 15 }, connected: false },
            { id: 'sleeve', name: 'GND', position: { x: 0, y: 35 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'vca-gnd',
          type: 'ground',
          position: { x: 200, y: 320 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'gnd', name: 'GND', position: { x: 20, y: 0 }, connected: false }
          ],
          selected: false
        }
      ],
      wires: [
        { id: 'w1', startComponentId: 'vca-input', startPinId: 'tip', endComponentId: 'vca-opto', endPinId: 'ldr-1', points: [], selected: false },
        { id: 'w2', startComponentId: 'vca-opto', startPinId: 'ldr-2', endComponentId: 'vca-output', endPinId: 'tip', points: [], selected: false },
        { id: 'w3', startComponentId: 'vca-cv', startPinId: 'tip', endComponentId: 'vca-r1', endPinId: 'pin1', points: [], selected: false },
        { id: 'w4', startComponentId: 'vca-r1', startPinId: 'pin2', endComponentId: 'vca-opto', endPinId: 'led-a', points: [], selected: false },
        { id: 'w5', startComponentId: 'vca-opto', startPinId: 'led-c', endComponentId: 'vca-gnd', endPinId: 'gnd', points: [], selected: false },
      ]
    },
    componentRefs: {
      'OPTO1': 'vca-opto',
      'R1': 'vca-r1'
    },
    tags: ['vca', 'amplitude', 'vactrol', 'organic']
  },

  // NOISE
  {
    id: 'cmos-noise',
    name: 'CMOS Noise Generator',
    category: 'oscillator',
    route: 'arduino',
    skillLevel: 'beginner',
    description: 'White noise generator using CMOS logic chips. Creates random noise useful for percussion, wind effects, and sample-and-hold sources.',
    features: [
      'White noise output',
      'Can be filtered for pink/brown noise',
      'Great for snare/hi-hat sounds',
      'S&H clock source',
    ],
    components: ['CD40106', 'CD4015', 'Resistor'],
    sourceUrl: 'https://github.com/chrisbeckstrom/diy_modular_synthesizer/tree/master/circuits',
    baseCircuit: {
      components: [
        {
          id: 'noise-ic1',
          type: 'cd40106',
          position: { x: 150, y: 180 },
          rotation: 0,
          value: 'CD40106',
          unit: '',
          pins: [
            { id: 'in1', name: 'In', position: { x: 0, y: 20 }, connected: false },
            { id: 'out1', name: 'Out', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'noise-r1',
          type: 'resistor',
          position: { x: 250, y: 180 },
          rotation: 0,
          value: 100,
          unit: 'kΩ',
          pins: [
            { id: 'pin1', name: '1', position: { x: 0, y: 20 }, connected: false },
            { id: 'pin2', name: '2', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'noise-output',
          type: 'output_jack',
          position: { x: 350, y: 180 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'tip', name: 'Noise Out', position: { x: 0, y: 15 }, connected: false },
            { id: 'sleeve', name: 'GND', position: { x: 0, y: 35 }, connected: false }
          ],
          selected: false
        }
      ],
      wires: [
        { id: 'w1', startComponentId: 'noise-ic1', startPinId: 'out1', endComponentId: 'noise-r1', endPinId: 'pin1', points: [], selected: false },
        { id: 'w2', startComponentId: 'noise-r1', startPinId: 'pin2', endComponentId: 'noise-output', endPinId: 'tip', points: [], selected: false },
      ]
    },
    componentRefs: {
      'IC1': 'noise-ic1',
      'R1': 'noise-r1'
    },
    tags: ['noise', 'white', 'cmos', 'beginner', 'percussion']
  },

  // DELAY
  {
    id: 'pt2399-delay',
    name: 'PT2399 Delay',
    category: 'effect',
    route: 'arduino',
    skillLevel: 'intermediate',
    description: 'Lo-fi digital delay using the PT2399 chip. Creates warm, degraded echoes perfect for dub and ambient textures.',
    features: [
      'Variable delay time',
      'Feedback control',
      'Lo-fi character',
      'Self-oscillation possible',
    ],
    components: ['PT2399', 'Resistor', 'Capacitor', 'Potentiometer'],
    sourceUrl: 'https://github.com/chrisbeckstrom/diy_modular_synthesizer/tree/master/circuits',
    baseCircuit: {
      components: [
        {
          id: 'delay-input',
          type: 'input_jack',
          position: { x: 50, y: 200 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'tip', name: 'In', position: { x: 50, y: 15 }, connected: false },
            { id: 'sleeve', name: 'GND', position: { x: 50, y: 35 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'delay-ic1',
          type: 'pt2399',
          position: { x: 200, y: 180 },
          rotation: 0,
          value: 'PT2399',
          unit: '',
          pins: [
            { id: 'in', name: 'In', position: { x: 0, y: 20 }, connected: false },
            { id: 'out', name: 'Out', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'delay-time',
          type: 'potentiometer',
          position: { x: 200, y: 100 },
          rotation: 0,
          value: 50,
          unit: 'kΩ',
          pins: [
            { id: 'ccw', name: 'CCW', position: { x: 0, y: 20 }, connected: false },
            { id: 'wiper', name: 'Wiper', position: { x: 30, y: 0 }, connected: false },
            { id: 'cw', name: 'CW', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'delay-feedback',
          type: 'potentiometer',
          position: { x: 300, y: 250 },
          rotation: 0,
          value: 100,
          unit: 'kΩ',
          pins: [
            { id: 'ccw', name: 'CCW', position: { x: 0, y: 20 }, connected: false },
            { id: 'wiper', name: 'Wiper', position: { x: 30, y: 0 }, connected: false },
            { id: 'cw', name: 'CW', position: { x: 60, y: 20 }, connected: false }
          ],
          selected: false
        },
        {
          id: 'delay-output',
          type: 'output_jack',
          position: { x: 400, y: 200 },
          rotation: 0,
          value: '',
          unit: '',
          pins: [
            { id: 'tip', name: 'Out', position: { x: 0, y: 15 }, connected: false },
            { id: 'sleeve', name: 'GND', position: { x: 0, y: 35 }, connected: false }
          ],
          selected: false
        }
      ],
      wires: [
        { id: 'w1', startComponentId: 'delay-input', startPinId: 'tip', endComponentId: 'delay-ic1', endPinId: 'in', points: [], selected: false },
        { id: 'w2', startComponentId: 'delay-ic1', startPinId: 'out', endComponentId: 'delay-output', endPinId: 'tip', points: [], selected: false },
      ]
    },
    componentRefs: {
      'IC1': 'delay-ic1',
      'TIME': 'delay-time',
      'FEEDBACK': 'delay-feedback'
    },
    tags: ['delay', 'echo', 'lofi', 'pt2399', 'dub']
  },
];

export default arduinoModules;
