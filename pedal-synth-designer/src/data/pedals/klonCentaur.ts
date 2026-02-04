import type { PedalCircuit } from '../../types/pedal';

export const klonCentaur: PedalCircuit = {
  id: 'klon-centaur',
  name: 'Klon Centaur',
  manufacturer: 'Klon',
  category: 'overdrive',
  description: 'The legendary "transparent" overdrive known for its clean blend and dynamic response. Features a unique charge pump for 18V headroom and germanium clipping.',
  tags: ['transparent', 'boutique', 'legendary', 'dynamic', 'clean-blend'],
  yearIntroduced: 1994,
  baseCircuit: {
    components: [
      // Input
      {
        id: 'klon-input',
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
      // Input buffer
      {
        id: 'klon-c1',
        type: 'capacitor',
        position: { x: 120, y: 300 },
        rotation: 0,
        value: 0.1,
        unit: 'uF',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      {
        id: 'klon-r1',
        type: 'resistor',
        position: { x: 180, y: 260 },
        rotation: 90,
        value: 1,
        unit: 'MΩ',
        pins: [
          { id: 'pin1', name: '1', position: { x: 15, y: 0 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 15, y: 40 }, connected: false }
        ]
      },
      // Input buffer op-amp
      {
        id: 'klon-ic1a',
        type: 'opamp',
        position: { x: 240, y: 280 },
        rotation: 0,
        value: 'TL072',
        unit: '',
        pins: [
          { id: 'inv', name: 'Inv-', position: { x: 0, y: 10 }, connected: false },
          { id: 'non-inv', name: 'Non-Inv+', position: { x: 0, y: 30 }, connected: false },
          { id: 'out', name: 'Out', position: { x: 60, y: 20 }, connected: false },
          { id: 'vcc', name: 'V+', position: { x: 30, y: 0 }, connected: false },
          { id: 'vee', name: 'V-', position: { x: 30, y: 40 }, connected: false }
        ]
      },
      // Gain control
      {
        id: 'klon-gain',
        type: 'potentiometer',
        position: { x: 340, y: 220 },
        rotation: 0,
        value: 100,
        unit: 'kΩ',
        pins: [
          { id: 'ccw', name: 'CCW', position: { x: 0, y: 30 }, connected: false },
          { id: 'wiper', name: 'Wiper', position: { x: 25, y: 0 }, connected: false },
          { id: 'cw', name: 'CW', position: { x: 50, y: 30 }, connected: false }
        ]
      },
      // Clipping stage
      {
        id: 'klon-ic1b',
        type: 'opamp',
        position: { x: 420, y: 280 },
        rotation: 0,
        value: 'TL072',
        unit: '',
        pins: [
          { id: 'inv', name: 'Inv-', position: { x: 0, y: 10 }, connected: false },
          { id: 'non-inv', name: 'Non-Inv+', position: { x: 0, y: 30 }, connected: false },
          { id: 'out', name: 'Out', position: { x: 60, y: 20 }, connected: false },
          { id: 'vcc', name: 'V+', position: { x: 30, y: 0 }, connected: false },
          { id: 'vee', name: 'V-', position: { x: 30, y: 40 }, connected: false }
        ]
      },
      // Germanium clipping diodes
      {
        id: 'klon-d1',
        type: 'diode',
        position: { x: 500, y: 260 },
        rotation: 0,
        value: '1N34A',
        unit: '',
        pins: [
          { id: 'anode', name: 'Anode', position: { x: 0, y: 10 }, connected: false },
          { id: 'cathode', name: 'Cathode', position: { x: 30, y: 10 }, connected: false }
        ]
      },
      {
        id: 'klon-d2',
        type: 'diode',
        position: { x: 500, y: 300 },
        rotation: 180,
        value: '1N34A',
        unit: '',
        pins: [
          { id: 'anode', name: 'Anode', position: { x: 30, y: 10 }, connected: false },
          { id: 'cathode', name: 'Cathode', position: { x: 0, y: 10 }, connected: false }
        ]
      },
      // Clean blend
      {
        id: 'klon-r2',
        type: 'resistor',
        position: { x: 340, y: 360 },
        rotation: 0,
        value: 15,
        unit: 'kΩ',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      // Treble control
      {
        id: 'klon-treble',
        type: 'potentiometer',
        position: { x: 580, y: 280 },
        rotation: 0,
        value: 10,
        unit: 'kΩ',
        pins: [
          { id: 'ccw', name: 'CCW', position: { x: 0, y: 30 }, connected: false },
          { id: 'wiper', name: 'Wiper', position: { x: 25, y: 0 }, connected: false },
          { id: 'cw', name: 'CW', position: { x: 50, y: 30 }, connected: false }
        ]
      },
      // Treble cap
      {
        id: 'klon-c2',
        type: 'capacitor',
        position: { x: 580, y: 340 },
        rotation: 0,
        value: 3.9,
        unit: 'nF',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      // Output buffer
      {
        id: 'klon-ic2',
        type: 'opamp',
        position: { x: 660, y: 280 },
        rotation: 0,
        value: 'TL072',
        unit: '',
        pins: [
          { id: 'inv', name: 'Inv-', position: { x: 0, y: 10 }, connected: false },
          { id: 'non-inv', name: 'Non-Inv+', position: { x: 0, y: 30 }, connected: false },
          { id: 'out', name: 'Out', position: { x: 60, y: 20 }, connected: false },
          { id: 'vcc', name: 'V+', position: { x: 30, y: 0 }, connected: false },
          { id: 'vee', name: 'V-', position: { x: 30, y: 40 }, connected: false }
        ]
      },
      // Output volume
      {
        id: 'klon-output-vol',
        type: 'potentiometer',
        position: { x: 760, y: 280 },
        rotation: 0,
        value: 100,
        unit: 'kΩ',
        pins: [
          { id: 'ccw', name: 'CCW', position: { x: 0, y: 30 }, connected: false },
          { id: 'wiper', name: 'Wiper', position: { x: 25, y: 0 }, connected: false },
          { id: 'cw', name: 'CW', position: { x: 50, y: 30 }, connected: false }
        ]
      },
      // Output
      {
        id: 'klon-output',
        type: 'output_jack',
        position: { x: 860, y: 300 },
        rotation: 0,
        value: '',
        unit: '',
        pins: [
          { id: 'tip', name: 'Tip', position: { x: 0, y: 0 }, connected: false },
          { id: 'sleeve', name: 'Sleeve', position: { x: 0, y: 20 }, connected: false }
        ]
      },
      // Power (18V via charge pump)
      {
        id: 'klon-vcc',
        type: 'vcc',
        position: { x: 450, y: 140 },
        rotation: 0,
        value: 18,
        unit: 'V',
        pins: [
          { id: 'vcc', name: 'VCC', position: { x: 15, y: 20 }, connected: false }
        ]
      },
      {
        id: 'klon-gnd',
        type: 'ground',
        position: { x: 450, y: 420 },
        rotation: 0,
        value: 0,
        unit: 'V',
        pins: [
          { id: 'gnd', name: 'GND', position: { x: 15, y: 0 }, connected: false }
        ]
      }
    ],
    wires: [
      { id: 'klon-w1', startComponentId: 'klon-input', startPinId: 'tip', endComponentId: 'klon-c1', endPinId: 'pin1', points: [] },
      { id: 'klon-w2', startComponentId: 'klon-c1', startPinId: 'pin2', endComponentId: 'klon-r1', endPinId: 'pin2', points: [] },
      { id: 'klon-w3', startComponentId: 'klon-r1', startPinId: 'pin2', endComponentId: 'klon-ic1a', endPinId: 'non-inv', points: [] },
      { id: 'klon-w4', startComponentId: 'klon-ic1a', startPinId: 'out', endComponentId: 'klon-gain', endPinId: 'ccw', points: [] },
      { id: 'klon-w5', startComponentId: 'klon-gain', startPinId: 'wiper', endComponentId: 'klon-ic1b', endPinId: 'non-inv', points: [] },
      { id: 'klon-w6', startComponentId: 'klon-ic1b', startPinId: 'out', endComponentId: 'klon-d1', endPinId: 'anode', points: [] },
      { id: 'klon-w7', startComponentId: 'klon-d1', startPinId: 'cathode', endComponentId: 'klon-d2', endPinId: 'cathode', points: [] },
      { id: 'klon-w8', startComponentId: 'klon-d2', startPinId: 'anode', endComponentId: 'klon-ic1b', endPinId: 'inv', points: [] },
      { id: 'klon-w9', startComponentId: 'klon-ic1a', startPinId: 'out', endComponentId: 'klon-r2', endPinId: 'pin1', points: [] },
      { id: 'klon-w10', startComponentId: 'klon-r2', startPinId: 'pin2', endComponentId: 'klon-ic1b', endPinId: 'out', points: [] },
      { id: 'klon-w11', startComponentId: 'klon-ic1b', startPinId: 'out', endComponentId: 'klon-treble', endPinId: 'cw', points: [] },
      { id: 'klon-w12', startComponentId: 'klon-treble', startPinId: 'wiper', endComponentId: 'klon-ic2', endPinId: 'non-inv', points: [] },
      { id: 'klon-w13', startComponentId: 'klon-treble', startPinId: 'ccw', endComponentId: 'klon-c2', endPinId: 'pin1', points: [] },
      { id: 'klon-w14', startComponentId: 'klon-c2', startPinId: 'pin2', endComponentId: 'klon-gnd', endPinId: 'gnd', points: [] },
      { id: 'klon-w15', startComponentId: 'klon-ic2', startPinId: 'out', endComponentId: 'klon-output-vol', endPinId: 'cw', points: [] },
      { id: 'klon-w16', startComponentId: 'klon-output-vol', startPinId: 'wiper', endComponentId: 'klon-output', endPinId: 'tip', points: [] },
      { id: 'klon-w17', startComponentId: 'klon-output-vol', startPinId: 'ccw', endComponentId: 'klon-gnd', endPinId: 'gnd', points: [] },
      { id: 'klon-w18', startComponentId: 'klon-vcc', startPinId: 'vcc', endComponentId: 'klon-ic1a', endPinId: 'vcc', points: [] },
      { id: 'klon-w19', startComponentId: 'klon-vcc', startPinId: 'vcc', endComponentId: 'klon-ic1b', endPinId: 'vcc', points: [] },
      { id: 'klon-w20', startComponentId: 'klon-vcc', startPinId: 'vcc', endComponentId: 'klon-ic2', endPinId: 'vcc', points: [] }
    ]
  },
  componentRefs: {
    'INPUT': 'klon-input',
    'C1': 'klon-c1',
    'R1': 'klon-r1',
    'IC1A': 'klon-ic1a',
    'GAIN': 'klon-gain',
    'IC1B': 'klon-ic1b',
    'D1': 'klon-d1',
    'D2': 'klon-d2',
    'R2': 'klon-r2',
    'TREBLE': 'klon-treble',
    'C2': 'klon-c2',
    'IC2': 'klon-ic2',
    'OUTPUT_VOL': 'klon-output-vol',
    'OUTPUT': 'klon-output',
    'VCC': 'klon-vcc',
    'GND': 'klon-gnd'
  },
  mods: [
    {
      id: 'klon-mod-silicon',
      name: 'Silicon Diodes',
      description: 'Replace germanium diodes with silicon for more aggressive clipping.',
      difficulty: 'easy',
      sonicChange: 'Tighter, more aggressive clipping. Less "soft" character, more defined attack.',
      partsNeeded: [
        { name: 'Silicon Diode', value: '1N914', type: 'diode', quantity: 2 }
      ],
      componentChanges: {
        'D1': { value: '1N914' },
        'D2': { value: '1N914' }
      }
    },
    {
      id: 'klon-mod-mosfet',
      name: 'MOSFET Clipping',
      description: 'Use MOSFETs as clipping elements for a unique, dynamic response.',
      difficulty: 'moderate',
      sonicChange: 'Very soft, asymmetric clipping with tube-like compression.',
      partsNeeded: [
        { name: 'MOSFET', value: '2N7000', type: 'mosfet_n', quantity: 2, notes: 'Wired as diodes' }
      ],
      componentChanges: {
        'D1': { type: 'mosfet_n', value: '2N7000' },
        'D2': { type: 'mosfet_n', value: '2N7000' }
      }
    },
    {
      id: 'klon-mod-bass-boost',
      name: 'Bass Boost',
      description: 'Larger input cap for extended low-end response.',
      difficulty: 'easy',
      sonicChange: 'Fuller bass response, especially useful for humbuckers or bass.',
      partsNeeded: [
        { name: 'Capacitor', value: '0.22uF', type: 'capacitor', quantity: 1 }
      ],
      componentChanges: {
        'C1': { value: 0.22 }
      }
    },
    {
      id: 'klon-mod-more-gain',
      name: 'Higher Gain',
      description: 'Larger gain pot for more overdrive on tap.',
      difficulty: 'easy',
      sonicChange: 'Extended gain range, can push into distortion territory.',
      partsNeeded: [
        { name: 'Potentiometer', value: '500kΩ', type: 'potentiometer', quantity: 1 }
      ],
      componentChanges: {
        'GAIN': { value: 500 }
      }
    },
    {
      id: 'klon-mod-clean-blend',
      name: 'Adjustable Clean Blend',
      description: 'Replace R2 with a pot to control the amount of clean signal mixed in.',
      difficulty: 'moderate',
      sonicChange: 'Control over how much clean signal is blended with the overdrive.',
      partsNeeded: [
        { name: 'Potentiometer', value: '50kΩ', type: 'potentiometer', quantity: 1 }
      ],
      componentChanges: {
        'R2': { type: 'potentiometer', value: 50 }
      }
    }
  ],
  sections: [
    {
      id: 'klon-section-input',
      name: 'Input Buffer',
      description: 'High impedance input preserves guitar signal integrity.',
      componentRefs: ['INPUT', 'C1', 'R1', 'IC1A'],
      order: 1,
      signalRole: 'buffer'
    },
    {
      id: 'klon-section-gain',
      name: 'Gain Stage',
      description: 'Gain control determines drive amount. Signal also splits to clean blend path.',
      componentRefs: ['GAIN', 'IC1B'],
      order: 2,
      signalRole: 'gain'
    },
    {
      id: 'klon-section-clipping',
      name: 'Clipping Stage',
      description: 'Germanium diodes in feedback create soft, tube-like clipping.',
      componentRefs: ['D1', 'D2'],
      order: 3,
      signalRole: 'clipping'
    },
    {
      id: 'klon-section-blend',
      name: 'Clean Blend',
      description: 'Clean signal is mixed back in, providing the "transparent" character.',
      componentRefs: ['R2'],
      order: 4,
      signalRole: 'gain'
    },
    {
      id: 'klon-section-tone',
      name: 'Treble Control',
      description: 'Simple high-frequency roll-off control.',
      componentRefs: ['TREBLE', 'C2'],
      order: 5,
      signalRole: 'tone'
    },
    {
      id: 'klon-section-output',
      name: 'Output Stage',
      description: 'Output buffer and volume control.',
      componentRefs: ['IC2', 'OUTPUT_VOL', 'OUTPUT'],
      order: 6,
      signalRole: 'volume'
    }
  ]
};
