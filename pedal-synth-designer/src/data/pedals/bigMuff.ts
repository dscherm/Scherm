import type { PedalCircuit } from '../../types/pedal';

export const bigMuff: PedalCircuit = {
  id: 'big-muff',
  name: 'Big Muff Pi',
  manufacturer: 'Electro-Harmonix',
  category: 'fuzz',
  description: 'The legendary fuzz pedal known for its massive sustain and wall of sound. Four transistor stages with hard clipping diodes create the iconic "creamy" fuzz tone.',
  tags: ['classic', 'sustain', 'wall-of-sound', 'grunge', 'doom'],
  yearIntroduced: 1969,
  baseCircuit: {
    components: [
      // Input
      {
        id: 'bm-input',
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
        id: 'bm-c1',
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
      // First gain stage
      {
        id: 'bm-q1',
        type: 'transistor_npn',
        position: { x: 180, y: 280 },
        rotation: 0,
        value: '2N5088',
        unit: '',
        pins: [
          { id: 'base', name: 'Base', position: { x: 0, y: 20 }, connected: false },
          { id: 'collector', name: 'Collector', position: { x: 25, y: 0 }, connected: false },
          { id: 'emitter', name: 'Emitter', position: { x: 25, y: 40 }, connected: false }
        ]
      },
      {
        id: 'bm-r1',
        type: 'resistor',
        position: { x: 180, y: 220 },
        rotation: 90,
        value: 12,
        unit: 'kΩ',
        pins: [
          { id: 'pin1', name: '1', position: { x: 15, y: 0 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 15, y: 40 }, connected: false }
        ]
      },
      // First clipping stage
      {
        id: 'bm-d1',
        type: 'diode',
        position: { x: 260, y: 260 },
        rotation: 0,
        value: '1N914',
        unit: '',
        pins: [
          { id: 'anode', name: 'Anode', position: { x: 0, y: 10 }, connected: false },
          { id: 'cathode', name: 'Cathode', position: { x: 30, y: 10 }, connected: false }
        ]
      },
      {
        id: 'bm-d2',
        type: 'diode',
        position: { x: 260, y: 300 },
        rotation: 180,
        value: '1N914',
        unit: '',
        pins: [
          { id: 'anode', name: 'Anode', position: { x: 30, y: 10 }, connected: false },
          { id: 'cathode', name: 'Cathode', position: { x: 0, y: 10 }, connected: false }
        ]
      },
      // Second gain stage
      {
        id: 'bm-q2',
        type: 'transistor_npn',
        position: { x: 340, y: 280 },
        rotation: 0,
        value: '2N5088',
        unit: '',
        pins: [
          { id: 'base', name: 'Base', position: { x: 0, y: 20 }, connected: false },
          { id: 'collector', name: 'Collector', position: { x: 25, y: 0 }, connected: false },
          { id: 'emitter', name: 'Emitter', position: { x: 25, y: 40 }, connected: false }
        ]
      },
      {
        id: 'bm-r2',
        type: 'resistor',
        position: { x: 340, y: 220 },
        rotation: 90,
        value: 12,
        unit: 'kΩ',
        pins: [
          { id: 'pin1', name: '1', position: { x: 15, y: 0 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 15, y: 40 }, connected: false }
        ]
      },
      // Second clipping stage
      {
        id: 'bm-d3',
        type: 'diode',
        position: { x: 420, y: 260 },
        rotation: 0,
        value: '1N914',
        unit: '',
        pins: [
          { id: 'anode', name: 'Anode', position: { x: 0, y: 10 }, connected: false },
          { id: 'cathode', name: 'Cathode', position: { x: 30, y: 10 }, connected: false }
        ]
      },
      {
        id: 'bm-d4',
        type: 'diode',
        position: { x: 420, y: 300 },
        rotation: 180,
        value: '1N914',
        unit: '',
        pins: [
          { id: 'anode', name: 'Anode', position: { x: 30, y: 10 }, connected: false },
          { id: 'cathode', name: 'Cathode', position: { x: 0, y: 10 }, connected: false }
        ]
      },
      // Sustain control
      {
        id: 'bm-sustain',
        type: 'potentiometer',
        position: { x: 500, y: 260 },
        rotation: 0,
        value: 100,
        unit: 'kΩ',
        pins: [
          { id: 'ccw', name: 'CCW', position: { x: 0, y: 30 }, connected: false },
          { id: 'wiper', name: 'Wiper', position: { x: 25, y: 0 }, connected: false },
          { id: 'cw', name: 'CW', position: { x: 50, y: 30 }, connected: false }
        ]
      },
      // Tone stack
      {
        id: 'bm-tone',
        type: 'potentiometer',
        position: { x: 580, y: 260 },
        rotation: 0,
        value: 100,
        unit: 'kΩ',
        pins: [
          { id: 'ccw', name: 'CCW', position: { x: 0, y: 30 }, connected: false },
          { id: 'wiper', name: 'Wiper', position: { x: 25, y: 0 }, connected: false },
          { id: 'cw', name: 'CW', position: { x: 50, y: 30 }, connected: false }
        ]
      },
      {
        id: 'bm-c2',
        type: 'capacitor',
        position: { x: 580, y: 200 },
        rotation: 0,
        value: 3.9,
        unit: 'nF',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      {
        id: 'bm-c3',
        type: 'capacitor',
        position: { x: 580, y: 340 },
        rotation: 0,
        value: 10,
        unit: 'nF',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      // Volume control
      {
        id: 'bm-volume',
        type: 'potentiometer',
        position: { x: 680, y: 280 },
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
        id: 'bm-output',
        type: 'output_jack',
        position: { x: 780, y: 300 },
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
        id: 'bm-vcc',
        type: 'vcc',
        position: { x: 400, y: 140 },
        rotation: 0,
        value: 9,
        unit: 'V',
        pins: [
          { id: 'vcc', name: 'VCC', position: { x: 15, y: 20 }, connected: false }
        ]
      },
      {
        id: 'bm-gnd',
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
      { id: 'bm-w1', startComponentId: 'bm-input', startPinId: 'tip', endComponentId: 'bm-c1', endPinId: 'pin1', points: [] },
      { id: 'bm-w2', startComponentId: 'bm-c1', startPinId: 'pin2', endComponentId: 'bm-q1', endPinId: 'base', points: [] },
      { id: 'bm-w3', startComponentId: 'bm-q1', startPinId: 'collector', endComponentId: 'bm-r1', endPinId: 'pin2', points: [] },
      { id: 'bm-w4', startComponentId: 'bm-r1', startPinId: 'pin1', endComponentId: 'bm-vcc', endPinId: 'vcc', points: [] },
      { id: 'bm-w5', startComponentId: 'bm-q1', startPinId: 'collector', endComponentId: 'bm-d1', endPinId: 'anode', points: [] },
      { id: 'bm-w6', startComponentId: 'bm-d1', startPinId: 'cathode', endComponentId: 'bm-d2', endPinId: 'cathode', points: [] },
      { id: 'bm-w7', startComponentId: 'bm-d2', startPinId: 'anode', endComponentId: 'bm-q2', endPinId: 'base', points: [] },
      { id: 'bm-w8', startComponentId: 'bm-q2', startPinId: 'collector', endComponentId: 'bm-r2', endPinId: 'pin2', points: [] },
      { id: 'bm-w9', startComponentId: 'bm-q2', startPinId: 'collector', endComponentId: 'bm-d3', endPinId: 'anode', points: [] },
      { id: 'bm-w10', startComponentId: 'bm-d3', startPinId: 'cathode', endComponentId: 'bm-d4', endPinId: 'cathode', points: [] },
      { id: 'bm-w11', startComponentId: 'bm-d4', startPinId: 'anode', endComponentId: 'bm-sustain', endPinId: 'cw', points: [] },
      { id: 'bm-w12', startComponentId: 'bm-sustain', startPinId: 'wiper', endComponentId: 'bm-tone', endPinId: 'wiper', points: [] },
      { id: 'bm-w13', startComponentId: 'bm-tone', startPinId: 'ccw', endComponentId: 'bm-c2', endPinId: 'pin1', points: [] },
      { id: 'bm-w14', startComponentId: 'bm-tone', startPinId: 'cw', endComponentId: 'bm-c3', endPinId: 'pin1', points: [] },
      { id: 'bm-w15', startComponentId: 'bm-tone', startPinId: 'wiper', endComponentId: 'bm-volume', endPinId: 'cw', points: [] },
      { id: 'bm-w16', startComponentId: 'bm-volume', startPinId: 'wiper', endComponentId: 'bm-output', endPinId: 'tip', points: [] },
      { id: 'bm-w17', startComponentId: 'bm-q1', startPinId: 'emitter', endComponentId: 'bm-gnd', endPinId: 'gnd', points: [] },
      { id: 'bm-w18', startComponentId: 'bm-q2', startPinId: 'emitter', endComponentId: 'bm-gnd', endPinId: 'gnd', points: [] },
      { id: 'bm-w19', startComponentId: 'bm-volume', startPinId: 'ccw', endComponentId: 'bm-gnd', endPinId: 'gnd', points: [] }
    ]
  },
  componentRefs: {
    'INPUT': 'bm-input',
    'C1': 'bm-c1',
    'Q1': 'bm-q1',
    'R1': 'bm-r1',
    'D1': 'bm-d1',
    'D2': 'bm-d2',
    'Q2': 'bm-q2',
    'R2': 'bm-r2',
    'D3': 'bm-d3',
    'D4': 'bm-d4',
    'SUSTAIN': 'bm-sustain',
    'TONE': 'bm-tone',
    'C2': 'bm-c2',
    'C3': 'bm-c3',
    'VOLUME': 'bm-volume',
    'OUTPUT': 'bm-output',
    'VCC': 'bm-vcc',
    'GND': 'bm-gnd'
  },
  mods: [
    {
      id: 'bm-mod-led-clipping',
      name: 'LED Clipping',
      description: 'Replace silicon diodes with LEDs for a louder, more open fuzz with increased headroom.',
      difficulty: 'easy',
      sonicChange: 'Less compressed, more dynamic fuzz. Retains more pick attack and has higher output.',
      partsNeeded: [
        { name: 'Red LED', value: '3mm Red', type: 'led', quantity: 4 }
      ],
      componentChanges: {
        'D1': { type: 'led', value: 'Red LED' },
        'D2': { type: 'led', value: 'Red LED' },
        'D3': { type: 'led', value: 'Red LED' },
        'D4': { type: 'led', value: 'Red LED' }
      }
    },
    {
      id: 'bm-mod-scoop-cut',
      name: 'Mid Scoop Reduction',
      description: 'Increase the tone cap values to reduce the characteristic mid-scoop and improve cut in a band mix.',
      difficulty: 'easy',
      sonicChange: 'More midrange presence, better definition in a mix, less "scooped" character.',
      partsNeeded: [
        { name: 'Capacitor', value: '10nF', type: 'capacitor', quantity: 1, notes: 'For C2' },
        { name: 'Capacitor', value: '22nF', type: 'capacitor', quantity: 1, notes: 'For C3' }
      ],
      componentChanges: {
        'C2': { value: 10 },
        'C3': { value: 22 }
      }
    },
    {
      id: 'bm-mod-bass-boost',
      name: 'Bass Boost',
      description: 'Larger input capacitor for extended low-frequency response. Great for bass guitar or 7-string.',
      difficulty: 'easy',
      sonicChange: 'Fuller, deeper bass response. More low-end rumble and thickness.',
      partsNeeded: [
        { name: 'Capacitor', value: '0.47uF', type: 'capacitor', quantity: 1 }
      ],
      componentChanges: {
        'C1': { value: 0.47 }
      }
    },
    {
      id: 'bm-mod-germanium',
      name: 'Germanium Transistors',
      description: 'Replace silicon transistors with germanium for a softer, more vintage fuzz character.',
      difficulty: 'advanced',
      sonicChange: 'Warmer, softer fuzz with more sag and compression. Temperature sensitive.',
      partsNeeded: [
        { name: 'Germanium Transistor', value: 'AC128 or 2N527', type: 'transistor_pnp', quantity: 2, notes: 'Requires circuit polarity change' }
      ],
      componentChanges: {
        'Q1': { type: 'transistor_pnp', value: 'AC128' },
        'Q2': { type: 'transistor_pnp', value: 'AC128' }
      }
    }
  ],
  sections: [
    {
      id: 'bm-section-input',
      name: 'Input Stage',
      description: 'Coupling capacitor sets bass response before first gain stage.',
      componentRefs: ['INPUT', 'C1'],
      order: 1,
      signalRole: 'input'
    },
    {
      id: 'bm-section-gain1',
      name: 'First Gain/Clipping Stage',
      description: 'First transistor amplifies signal, diodes provide hard clipping.',
      componentRefs: ['Q1', 'R1', 'D1', 'D2'],
      order: 2,
      signalRole: 'clipping'
    },
    {
      id: 'bm-section-gain2',
      name: 'Second Gain/Clipping Stage',
      description: 'Second transistor and diode pair add more gain and sustain.',
      componentRefs: ['Q2', 'R2', 'D3', 'D4'],
      order: 3,
      signalRole: 'clipping'
    },
    {
      id: 'bm-section-sustain',
      name: 'Sustain Control',
      description: 'Controls amount of signal reaching tone section, affecting sustain length.',
      componentRefs: ['SUSTAIN'],
      order: 4,
      signalRole: 'gain'
    },
    {
      id: 'bm-section-tone',
      name: 'Tone Stack',
      description: 'Passive tone control blends between treble and bass paths.',
      componentRefs: ['TONE', 'C2', 'C3'],
      order: 5,
      signalRole: 'tone'
    },
    {
      id: 'bm-section-output',
      name: 'Output Stage',
      description: 'Volume control sets final output level.',
      componentRefs: ['VOLUME', 'OUTPUT'],
      order: 6,
      signalRole: 'volume'
    }
  ]
};
