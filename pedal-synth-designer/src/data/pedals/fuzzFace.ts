import type { PedalCircuit } from '../../types/pedal';

export const fuzzFace: PedalCircuit = {
  id: 'fuzz-face',
  name: 'Fuzz Face',
  manufacturer: 'Dallas Arbiter',
  category: 'fuzz',
  description: 'The iconic circular fuzz pedal made famous by Jimi Hendrix. Simple two-transistor design with unique cleanup characteristics when guitar volume is rolled back.',
  tags: ['vintage', 'hendrix', 'classic', 'cleanup', 'dynamic'],
  yearIntroduced: 1966,
  baseCircuit: {
    components: [
      // Input
      {
        id: 'ff-input',
        type: 'input_jack',
        position: { x: 50, y: 300 },
        rotation: 0,
        value: '',
        unit: '',
        pins: [
          { id: 'tip', name: 'Tip', position: { x: 30, y: 0 }, connected: false },
          { id: 'sleeve', name: 'Sleeve', position: { x: 30, y: 20 }, connected: false }
        ]
      },
      // Input cap
      {
        id: 'ff-c1',
        type: 'capacitor',
        position: { x: 120, y: 300 },
        rotation: 0,
        value: 2.2,
        unit: 'uF',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      // Fuzz control
      {
        id: 'ff-fuzz',
        type: 'potentiometer',
        position: { x: 180, y: 240 },
        rotation: 0,
        value: 1,
        unit: 'kΩ',
        pins: [
          { id: 'ccw', name: 'CCW', position: { x: 0, y: 30 }, connected: false },
          { id: 'wiper', name: 'Wiper', position: { x: 25, y: 0 }, connected: false },
          { id: 'cw', name: 'CW', position: { x: 50, y: 30 }, connected: false }
        ]
      },
      // First transistor (Q1)
      {
        id: 'ff-q1',
        type: 'transistor_pnp',
        position: { x: 260, y: 280 },
        rotation: 0,
        value: 'AC128',
        unit: '',
        pins: [
          { id: 'emitter', name: 'Emitter', position: { x: 25, y: 0 }, connected: false },
          { id: 'base', name: 'Base', position: { x: 0, y: 20 }, connected: false },
          { id: 'collector', name: 'Collector', position: { x: 25, y: 40 }, connected: false }
        ]
      },
      // Q1 collector resistor
      {
        id: 'ff-r1',
        type: 'resistor',
        position: { x: 260, y: 360 },
        rotation: 90,
        value: 33,
        unit: 'kΩ',
        pins: [
          { id: 'pin1', name: '1', position: { x: 15, y: 0 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 15, y: 40 }, connected: false }
        ]
      },
      // Second transistor (Q2)
      {
        id: 'ff-q2',
        type: 'transistor_pnp',
        position: { x: 380, y: 280 },
        rotation: 0,
        value: 'AC128',
        unit: '',
        pins: [
          { id: 'emitter', name: 'Emitter', position: { x: 25, y: 0 }, connected: false },
          { id: 'base', name: 'Base', position: { x: 0, y: 20 }, connected: false },
          { id: 'collector', name: 'Collector', position: { x: 25, y: 40 }, connected: false }
        ]
      },
      // Q2 collector resistor
      {
        id: 'ff-r2',
        type: 'resistor',
        position: { x: 380, y: 360 },
        rotation: 90,
        value: 8.2,
        unit: 'kΩ',
        pins: [
          { id: 'pin1', name: '1', position: { x: 15, y: 0 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 15, y: 40 }, connected: false }
        ]
      },
      // Feedback resistor
      {
        id: 'ff-r3',
        type: 'resistor',
        position: { x: 320, y: 200 },
        rotation: 0,
        value: 100,
        unit: 'kΩ',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      // Output cap
      {
        id: 'ff-c2',
        type: 'capacitor',
        position: { x: 460, y: 340 },
        rotation: 0,
        value: 10,
        unit: 'uF',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      // Volume control
      {
        id: 'ff-volume',
        type: 'potentiometer',
        position: { x: 540, y: 320 },
        rotation: 0,
        value: 500,
        unit: 'kΩ',
        pins: [
          { id: 'ccw', name: 'CCW', position: { x: 0, y: 30 }, connected: false },
          { id: 'wiper', name: 'Wiper', position: { x: 25, y: 0 }, connected: false },
          { id: 'cw', name: 'CW', position: { x: 50, y: 30 }, connected: false }
        ]
      },
      // Output
      {
        id: 'ff-output',
        type: 'output_jack',
        position: { x: 640, y: 340 },
        rotation: 0,
        value: '',
        unit: '',
        pins: [
          { id: 'tip', name: 'Tip', position: { x: 0, y: 0 }, connected: false },
          { id: 'sleeve', name: 'Sleeve', position: { x: 0, y: 20 }, connected: false }
        ]
      },
      // Power (note: positive ground for germanium PNP)
      {
        id: 'ff-vcc',
        type: 'vcc',
        position: { x: 320, y: 420 },
        rotation: 180,
        value: -9,
        unit: 'V',
        pins: [
          { id: 'vcc', name: 'VCC', position: { x: 15, y: 20 }, connected: false }
        ]
      },
      {
        id: 'ff-gnd',
        type: 'ground',
        position: { x: 320, y: 160 },
        rotation: 0,
        value: 0,
        unit: 'V',
        pins: [
          { id: 'gnd', name: 'GND', position: { x: 15, y: 0 }, connected: false }
        ]
      }
    ],
    wires: [
      { id: 'ff-w1', startComponentId: 'ff-input', startPinId: 'tip', endComponentId: 'ff-c1', endPinId: 'pin1', points: [] },
      { id: 'ff-w2', startComponentId: 'ff-c1', startPinId: 'pin2', endComponentId: 'ff-fuzz', endPinId: 'wiper', points: [] },
      { id: 'ff-w3', startComponentId: 'ff-fuzz', startPinId: 'cw', endComponentId: 'ff-q1', endPinId: 'base', points: [] },
      { id: 'ff-w4', startComponentId: 'ff-q1', startPinId: 'emitter', endComponentId: 'ff-gnd', endPinId: 'gnd', points: [] },
      { id: 'ff-w5', startComponentId: 'ff-q1', startPinId: 'collector', endComponentId: 'ff-r1', endPinId: 'pin1', points: [] },
      { id: 'ff-w6', startComponentId: 'ff-r1', startPinId: 'pin2', endComponentId: 'ff-vcc', endPinId: 'vcc', points: [] },
      { id: 'ff-w7', startComponentId: 'ff-q1', startPinId: 'collector', endComponentId: 'ff-q2', endPinId: 'base', points: [] },
      { id: 'ff-w8', startComponentId: 'ff-q2', startPinId: 'emitter', endComponentId: 'ff-gnd', endPinId: 'gnd', points: [] },
      { id: 'ff-w9', startComponentId: 'ff-q2', startPinId: 'collector', endComponentId: 'ff-r2', endPinId: 'pin1', points: [] },
      { id: 'ff-w10', startComponentId: 'ff-r2', startPinId: 'pin2', endComponentId: 'ff-vcc', endPinId: 'vcc', points: [] },
      { id: 'ff-w11', startComponentId: 'ff-q2', startPinId: 'collector', endComponentId: 'ff-r3', endPinId: 'pin2', points: [] },
      { id: 'ff-w12', startComponentId: 'ff-r3', startPinId: 'pin1', endComponentId: 'ff-q1', endPinId: 'base', points: [] },
      { id: 'ff-w13', startComponentId: 'ff-q2', startPinId: 'collector', endComponentId: 'ff-c2', endPinId: 'pin1', points: [] },
      { id: 'ff-w14', startComponentId: 'ff-c2', startPinId: 'pin2', endComponentId: 'ff-volume', endPinId: 'cw', points: [] },
      { id: 'ff-w15', startComponentId: 'ff-volume', startPinId: 'wiper', endComponentId: 'ff-output', endPinId: 'tip', points: [] },
      { id: 'ff-w16', startComponentId: 'ff-volume', startPinId: 'ccw', endComponentId: 'ff-vcc', endPinId: 'vcc', points: [] },
      { id: 'ff-w17', startComponentId: 'ff-fuzz', startPinId: 'ccw', endComponentId: 'ff-gnd', endPinId: 'gnd', points: [] }
    ]
  },
  componentRefs: {
    'INPUT': 'ff-input',
    'C1': 'ff-c1',
    'FUZZ': 'ff-fuzz',
    'Q1': 'ff-q1',
    'R1': 'ff-r1',
    'Q2': 'ff-q2',
    'R2': 'ff-r2',
    'R3': 'ff-r3',
    'C2': 'ff-c2',
    'VOLUME': 'ff-volume',
    'OUTPUT': 'ff-output',
    'VCC': 'ff-vcc',
    'GND': 'ff-gnd'
  },
  mods: [
    {
      id: 'ff-mod-silicon',
      name: 'Silicon Transistors',
      description: 'Replace germanium transistors with silicon for more gain and temperature stability.',
      difficulty: 'moderate',
      sonicChange: 'Brighter, more aggressive fuzz with tighter bass. More consistent performance.',
      partsNeeded: [
        { name: 'Silicon Transistor', value: 'BC108 or 2N3904', type: 'transistor_npn', quantity: 2, notes: 'Requires circuit polarity change' }
      ],
      componentChanges: {
        'Q1': { type: 'transistor_npn', value: 'BC108' },
        'Q2': { type: 'transistor_npn', value: 'BC108' }
      }
    },
    {
      id: 'ff-mod-input-cap',
      name: 'Tighter Bass',
      description: 'Smaller input capacitor for tighter, less boomy bass response.',
      difficulty: 'easy',
      sonicChange: 'Reduced bass for a tighter, more focused fuzz. Less "woolly" character.',
      partsNeeded: [
        { name: 'Capacitor', value: '0.1uF', type: 'capacitor', quantity: 1 }
      ],
      componentChanges: {
        'C1': { value: 0.1 }
      }
    },
    {
      id: 'ff-mod-bias',
      name: 'Bias Trim',
      description: 'Replace R2 with a trimpot to fine-tune Q2 bias for the ideal "splatter" point.',
      difficulty: 'moderate',
      sonicChange: 'Allows dialing in the perfect amount of gating and sputter.',
      partsNeeded: [
        { name: 'Trimpot', value: '20kΩ', type: 'potentiometer', quantity: 1 }
      ],
      componentChanges: {
        'R2': { type: 'potentiometer', value: 20 }
      }
    },
    {
      id: 'ff-mod-cleanup',
      name: 'Better Cleanup',
      description: 'Larger feedback resistor improves cleanup when guitar volume is rolled back.',
      difficulty: 'easy',
      sonicChange: 'Smoother transition from clean to fuzz with guitar volume pot.',
      partsNeeded: [
        { name: 'Resistor', value: '470kΩ', type: 'resistor', quantity: 1 }
      ],
      componentChanges: {
        'R3': { value: 470000 }
      }
    },
    {
      id: 'ff-mod-output-cap',
      name: 'Brighter Output',
      description: 'Smaller output cap for brighter, less muddy output.',
      difficulty: 'easy',
      sonicChange: 'Increased clarity and high-end, reduced mud in the low-mids.',
      partsNeeded: [
        { name: 'Capacitor', value: '1uF', type: 'capacitor', quantity: 1 }
      ],
      componentChanges: {
        'C2': { value: 1 }
      }
    }
  ],
  sections: [
    {
      id: 'ff-section-input',
      name: 'Input Stage',
      description: 'Large coupling capacitor passes full frequency range to fuzz control.',
      componentRefs: ['INPUT', 'C1', 'FUZZ'],
      order: 1,
      signalRole: 'input'
    },
    {
      id: 'ff-section-q1',
      name: 'First Transistor',
      description: 'Q1 provides initial gain and drives Q2. Bias affects cleanup characteristics.',
      componentRefs: ['Q1', 'R1'],
      order: 2,
      signalRole: 'gain'
    },
    {
      id: 'ff-section-q2',
      name: 'Second Transistor',
      description: 'Q2 provides main gain and creates the fuzz character. Feedback from collector to Q1 base.',
      componentRefs: ['Q2', 'R2', 'R3'],
      order: 3,
      signalRole: 'clipping'
    },
    {
      id: 'ff-section-output',
      name: 'Output Stage',
      description: 'Output coupling and volume control.',
      componentRefs: ['C2', 'VOLUME', 'OUTPUT'],
      order: 4,
      signalRole: 'volume'
    }
  ]
};
