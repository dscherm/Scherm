import type { PedalCircuit } from '../../types/pedal';

export const rat: PedalCircuit = {
  id: 'rat',
  name: 'RAT',
  manufacturer: 'Pro Co',
  category: 'distortion',
  description: 'Iconic distortion pedal known for its aggressive, gritty tone. Uses an LM308 op-amp with hard clipping diodes and a unique filter control.',
  tags: ['aggressive', 'gritty', 'versatile', 'rock', 'metal'],
  yearIntroduced: 1978,
  baseCircuit: {
    components: [
      // Input
      {
        id: 'rat-input',
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
        id: 'rat-c1',
        type: 'capacitor',
        position: { x: 120, y: 300 },
        rotation: 0,
        value: 0.022,
        unit: 'uF',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      // Input resistor
      {
        id: 'rat-r1',
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
      // Op-amp gain stage
      {
        id: 'rat-ic1',
        type: 'opamp',
        position: { x: 280, y: 280 },
        rotation: 0,
        value: 'LM308',
        unit: '',
        pins: [
          { id: 'inv', name: 'Inv-', position: { x: 0, y: 10 }, connected: false },
          { id: 'non-inv', name: 'Non-Inv+', position: { x: 0, y: 30 }, connected: false },
          { id: 'out', name: 'Out', position: { x: 60, y: 20 }, connected: false },
          { id: 'vcc', name: 'V+', position: { x: 30, y: 0 }, connected: false },
          { id: 'vee', name: 'V-', position: { x: 30, y: 40 }, connected: false }
        ]
      },
      // Distortion control (gain)
      {
        id: 'rat-distortion',
        type: 'potentiometer',
        position: { x: 280, y: 180 },
        rotation: 0,
        value: 100,
        unit: 'kΩ',
        pins: [
          { id: 'ccw', name: 'CCW', position: { x: 0, y: 30 }, connected: false },
          { id: 'wiper', name: 'Wiper', position: { x: 25, y: 0 }, connected: false },
          { id: 'cw', name: 'CW', position: { x: 50, y: 30 }, connected: false }
        ]
      },
      // Feedback resistor
      {
        id: 'rat-r2',
        type: 'resistor',
        position: { x: 220, y: 200 },
        rotation: 0,
        value: 560,
        unit: 'Ω',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      // Clipping diodes
      {
        id: 'rat-d1',
        type: 'diode',
        position: { x: 380, y: 260 },
        rotation: 0,
        value: '1N914',
        unit: '',
        pins: [
          { id: 'anode', name: 'Anode', position: { x: 0, y: 10 }, connected: false },
          { id: 'cathode', name: 'Cathode', position: { x: 30, y: 10 }, connected: false }
        ]
      },
      {
        id: 'rat-d2',
        type: 'diode',
        position: { x: 380, y: 300 },
        rotation: 180,
        value: '1N914',
        unit: '',
        pins: [
          { id: 'anode', name: 'Anode', position: { x: 30, y: 10 }, connected: false },
          { id: 'cathode', name: 'Cathode', position: { x: 0, y: 10 }, connected: false }
        ]
      },
      // Output cap
      {
        id: 'rat-c2',
        type: 'capacitor',
        position: { x: 450, y: 280 },
        rotation: 0,
        value: 1,
        unit: 'uF',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      // Filter control
      {
        id: 'rat-filter',
        type: 'potentiometer',
        position: { x: 520, y: 280 },
        rotation: 0,
        value: 100,
        unit: 'kΩ',
        pins: [
          { id: 'ccw', name: 'CCW', position: { x: 0, y: 30 }, connected: false },
          { id: 'wiper', name: 'Wiper', position: { x: 25, y: 0 }, connected: false },
          { id: 'cw', name: 'CW', position: { x: 50, y: 30 }, connected: false }
        ]
      },
      // Filter cap
      {
        id: 'rat-c3',
        type: 'capacitor',
        position: { x: 520, y: 340 },
        rotation: 0,
        value: 3.3,
        unit: 'nF',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      // Volume control
      {
        id: 'rat-volume',
        type: 'potentiometer',
        position: { x: 620, y: 280 },
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
        id: 'rat-output',
        type: 'output_jack',
        position: { x: 720, y: 300 },
        rotation: 0,
        value: '',
        unit: '',
        pins: [
          { id: 'tip', name: 'Tip', position: { x: 0, y: 0 }, connected: false },
          { id: 'sleeve', name: 'Sleeve', position: { x: 0, y: 20 }, connected: false }
        ]
      },
      // Power
      {
        id: 'rat-vcc',
        type: 'vcc',
        position: { x: 280, y: 140 },
        rotation: 0,
        value: 9,
        unit: 'V',
        pins: [
          { id: 'vcc', name: 'VCC', position: { x: 15, y: 20 }, connected: false }
        ]
      },
      {
        id: 'rat-gnd',
        type: 'ground',
        position: { x: 400, y: 420 },
        rotation: 0,
        value: 0,
        unit: 'V',
        pins: [
          { id: 'gnd', name: 'GND', position: { x: 15, y: 0 }, connected: false }
        ]
      }
    ],
    wires: [
      { id: 'rat-w1', startComponentId: 'rat-input', startPinId: 'tip', endComponentId: 'rat-c1', endPinId: 'pin1', points: [] },
      { id: 'rat-w2', startComponentId: 'rat-c1', startPinId: 'pin2', endComponentId: 'rat-r1', endPinId: 'pin2', points: [] },
      { id: 'rat-w3', startComponentId: 'rat-r1', startPinId: 'pin2', endComponentId: 'rat-ic1', endPinId: 'inv', points: [] },
      { id: 'rat-w4', startComponentId: 'rat-ic1', startPinId: 'inv', endComponentId: 'rat-r2', endPinId: 'pin1', points: [] },
      { id: 'rat-w5', startComponentId: 'rat-r2', startPinId: 'pin2', endComponentId: 'rat-distortion', endPinId: 'ccw', points: [] },
      { id: 'rat-w6', startComponentId: 'rat-distortion', startPinId: 'wiper', endComponentId: 'rat-ic1', endPinId: 'out', points: [] },
      { id: 'rat-w7', startComponentId: 'rat-ic1', startPinId: 'out', endComponentId: 'rat-d1', endPinId: 'anode', points: [] },
      { id: 'rat-w8', startComponentId: 'rat-d1', startPinId: 'cathode', endComponentId: 'rat-d2', endPinId: 'cathode', points: [] },
      { id: 'rat-w9', startComponentId: 'rat-d2', startPinId: 'anode', endComponentId: 'rat-gnd', endPinId: 'gnd', points: [] },
      { id: 'rat-w10', startComponentId: 'rat-ic1', startPinId: 'out', endComponentId: 'rat-c2', endPinId: 'pin1', points: [] },
      { id: 'rat-w11', startComponentId: 'rat-c2', startPinId: 'pin2', endComponentId: 'rat-filter', endPinId: 'cw', points: [] },
      { id: 'rat-w12', startComponentId: 'rat-filter', startPinId: 'wiper', endComponentId: 'rat-volume', endPinId: 'cw', points: [] },
      { id: 'rat-w13', startComponentId: 'rat-filter', startPinId: 'ccw', endComponentId: 'rat-c3', endPinId: 'pin1', points: [] },
      { id: 'rat-w14', startComponentId: 'rat-c3', startPinId: 'pin2', endComponentId: 'rat-gnd', endPinId: 'gnd', points: [] },
      { id: 'rat-w15', startComponentId: 'rat-volume', startPinId: 'wiper', endComponentId: 'rat-output', endPinId: 'tip', points: [] },
      { id: 'rat-w16', startComponentId: 'rat-volume', startPinId: 'ccw', endComponentId: 'rat-gnd', endPinId: 'gnd', points: [] },
      { id: 'rat-w17', startComponentId: 'rat-vcc', startPinId: 'vcc', endComponentId: 'rat-ic1', endPinId: 'vcc', points: [] }
    ]
  },
  componentRefs: {
    'INPUT': 'rat-input',
    'C1': 'rat-c1',
    'R1': 'rat-r1',
    'IC1': 'rat-ic1',
    'DISTORTION': 'rat-distortion',
    'R2': 'rat-r2',
    'D1': 'rat-d1',
    'D2': 'rat-d2',
    'C2': 'rat-c2',
    'FILTER': 'rat-filter',
    'C3': 'rat-c3',
    'VOLUME': 'rat-volume',
    'OUTPUT': 'rat-output',
    'VCC': 'rat-vcc',
    'GND': 'rat-gnd'
  },
  mods: [
    {
      id: 'rat-mod-led-clipping',
      name: 'LED Clipping',
      description: 'Replace silicon diodes with LEDs for a cleaner, louder distortion with more dynamics.',
      difficulty: 'easy',
      sonicChange: 'More headroom and dynamics, less compressed. Retains more of the picking nuances.',
      partsNeeded: [
        { name: 'Red LED', value: '3mm Red', type: 'led', quantity: 2 }
      ],
      componentChanges: {
        'D1': { type: 'led', value: 'Red LED' },
        'D2': { type: 'led', value: 'Red LED' }
      }
    },
    {
      id: 'rat-mod-turbo',
      name: 'Turbo RAT',
      description: 'Add a third diode in parallel for asymmetric clipping with more gain.',
      difficulty: 'moderate',
      sonicChange: 'More aggressive, asymmetric distortion with additional even harmonics.',
      partsNeeded: [
        { name: 'LED', value: '3mm Red', type: 'led', quantity: 2, notes: 'Replace D1 and D2' }
      ],
      componentChanges: {
        'D1': { type: 'led', value: 'Red LED' },
        'D2': { type: 'led', value: 'Red LED' }
      }
    },
    {
      id: 'rat-mod-opamp-swap',
      name: 'OP07 Swap',
      description: 'Replace LM308 with OP07 for tighter, more modern distortion character.',
      difficulty: 'easy',
      sonicChange: 'Faster slew rate means tighter bass and more clarity. Less "fuzzy" character.',
      partsNeeded: [
        { name: 'Op-amp', value: 'OP07', type: 'opamp', quantity: 1 }
      ],
      componentChanges: {
        'IC1': { value: 'OP07' }
      }
    },
    {
      id: 'rat-mod-ruetz',
      name: 'Ruetz Mod',
      description: 'Increase feedback resistor for less gain and more clarity at lower distortion settings.',
      difficulty: 'easy',
      sonicChange: 'Cleaner low-gain tones, better touch sensitivity, more usable range on distortion knob.',
      partsNeeded: [
        { name: 'Resistor', value: '1kΩ', type: 'resistor', quantity: 1, notes: 'Replace R2' }
      ],
      componentChanges: {
        'R2': { value: 1000 }
      }
    },
    {
      id: 'rat-mod-bass-boost',
      name: 'Bass Boost',
      description: 'Increase input capacitor for fuller low-end response.',
      difficulty: 'easy',
      sonicChange: 'Extended bass response, fuller sound especially for baritone or bass guitar.',
      partsNeeded: [
        { name: 'Capacitor', value: '0.047uF', type: 'capacitor', quantity: 1 }
      ],
      componentChanges: {
        'C1': { value: 0.047 }
      }
    }
  ],
  sections: [
    {
      id: 'rat-section-input',
      name: 'Input Stage',
      description: 'High impedance input with coupling capacitor that sets bass response.',
      componentRefs: ['INPUT', 'C1', 'R1'],
      order: 1,
      signalRole: 'input'
    },
    {
      id: 'rat-section-gain',
      name: 'Gain Stage',
      description: 'LM308 op-amp provides gain set by the distortion control. Slow slew rate adds compression.',
      componentRefs: ['IC1', 'DISTORTION', 'R2'],
      order: 2,
      signalRole: 'gain'
    },
    {
      id: 'rat-section-clipping',
      name: 'Clipping Stage',
      description: 'Hard clipping diodes to ground create the aggressive RAT distortion character.',
      componentRefs: ['D1', 'D2'],
      order: 3,
      signalRole: 'clipping'
    },
    {
      id: 'rat-section-filter',
      name: 'Filter Control',
      description: 'Low-pass filter with variable cutoff. Rolls off highs for darker tones.',
      componentRefs: ['FILTER', 'C3'],
      order: 4,
      signalRole: 'tone'
    },
    {
      id: 'rat-section-output',
      name: 'Output Stage',
      description: 'Volume control and output coupling capacitor.',
      componentRefs: ['VOLUME', 'C2', 'OUTPUT'],
      order: 5,
      signalRole: 'volume'
    }
  ]
};
