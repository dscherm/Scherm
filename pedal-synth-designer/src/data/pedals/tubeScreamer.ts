import type { PedalCircuit } from '../../types/pedal';

export const tubeScreamer: PedalCircuit = {
  id: 'tube-screamer',
  name: 'Tube Screamer',
  manufacturer: 'Ibanez',
  category: 'overdrive',
  description: 'The classic green overdrive pedal known for its mid-focused tone and smooth clipping. Uses a JRC4558 op-amp with asymmetric clipping diodes.',
  tags: ['classic', 'mid-boost', 'blues', 'rock', 'transparent'],
  yearIntroduced: 1979,
  baseCircuit: {
    components: [
      // Input section
      {
        id: 'ts-input',
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
      // Input buffer stage
      {
        id: 'ts-c1',
        type: 'capacitor',
        position: { x: 120, y: 300 },
        rotation: 0,
        value: 0.047,
        unit: 'uF',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      {
        id: 'ts-r1',
        type: 'resistor',
        position: { x: 180, y: 260 },
        rotation: 90,
        value: 510,
        unit: 'kΩ',
        pins: [
          { id: 'pin1', name: '1', position: { x: 15, y: 0 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 15, y: 40 }, connected: false }
        ]
      },
      // Op-amp clipping stage
      {
        id: 'ts-ic1',
        type: 'opamp',
        position: { x: 280, y: 280 },
        rotation: 0,
        value: 'JRC4558',
        unit: '',
        pins: [
          { id: 'inv', name: 'Inv-', position: { x: 0, y: 10 }, connected: false },
          { id: 'non-inv', name: 'Non-Inv+', position: { x: 0, y: 30 }, connected: false },
          { id: 'out', name: 'Out', position: { x: 60, y: 20 }, connected: false },
          { id: 'vcc', name: 'V+', position: { x: 30, y: 0 }, connected: false },
          { id: 'vee', name: 'V-', position: { x: 30, y: 40 }, connected: false }
        ]
      },
      // Drive control
      {
        id: 'ts-drive',
        type: 'potentiometer',
        position: { x: 350, y: 200 },
        rotation: 0,
        value: 500,
        unit: 'kΩ',
        pins: [
          { id: 'ccw', name: 'CCW', position: { x: 0, y: 30 }, connected: false },
          { id: 'wiper', name: 'Wiper', position: { x: 25, y: 0 }, connected: false },
          { id: 'cw', name: 'CW', position: { x: 50, y: 30 }, connected: false }
        ]
      },
      // Clipping diodes
      {
        id: 'ts-d1',
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
        id: 'ts-d2',
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
      // Feedback capacitor
      {
        id: 'ts-c2',
        type: 'capacitor',
        position: { x: 350, y: 340 },
        rotation: 0,
        value: 0.047,
        unit: 'uF',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      // Feedback resistor
      {
        id: 'ts-r2',
        type: 'resistor',
        position: { x: 280, y: 340 },
        rotation: 0,
        value: 4.7,
        unit: 'kΩ',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      // Tone section
      {
        id: 'ts-c3',
        type: 'capacitor',
        position: { x: 450, y: 280 },
        rotation: 0,
        value: 0.22,
        unit: 'uF',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      {
        id: 'ts-tone',
        type: 'potentiometer',
        position: { x: 520, y: 280 },
        rotation: 0,
        value: 20,
        unit: 'kΩ',
        pins: [
          { id: 'ccw', name: 'CCW', position: { x: 0, y: 30 }, connected: false },
          { id: 'wiper', name: 'Wiper', position: { x: 25, y: 0 }, connected: false },
          { id: 'cw', name: 'CW', position: { x: 50, y: 30 }, connected: false }
        ]
      },
      {
        id: 'ts-c4',
        type: 'capacitor',
        position: { x: 520, y: 340 },
        rotation: 0,
        value: 0.22,
        unit: 'uF',
        pins: [
          { id: 'pin1', name: '1', position: { x: 0, y: 15 }, connected: false },
          { id: 'pin2', name: '2', position: { x: 40, y: 15 }, connected: false }
        ]
      },
      // Volume section
      {
        id: 'ts-volume',
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
        id: 'ts-output',
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
      // Power section
      {
        id: 'ts-vcc',
        type: 'vcc',
        position: { x: 280, y: 180 },
        rotation: 0,
        value: 9,
        unit: 'V',
        pins: [
          { id: 'vcc', name: 'VCC', position: { x: 15, y: 20 }, connected: false }
        ]
      },
      {
        id: 'ts-gnd',
        type: 'ground',
        position: { x: 300, y: 420 },
        rotation: 0,
        value: 0,
        unit: 'V',
        pins: [
          { id: 'gnd', name: 'GND', position: { x: 15, y: 0 }, connected: false }
        ]
      }
    ],
    wires: [
      // Input to buffer
      { id: 'ts-w1', startComponentId: 'ts-input', startPinId: 'tip', endComponentId: 'ts-c1', endPinId: 'pin1', points: [] },
      { id: 'ts-w2', startComponentId: 'ts-c1', startPinId: 'pin2', endComponentId: 'ts-r1', endPinId: 'pin2', points: [] },
      { id: 'ts-w3', startComponentId: 'ts-r1', startPinId: 'pin2', endComponentId: 'ts-ic1', endPinId: 'non-inv', points: [] },
      // Op-amp feedback loop
      { id: 'ts-w4', startComponentId: 'ts-ic1', startPinId: 'out', endComponentId: 'ts-d1', endPinId: 'anode', points: [] },
      { id: 'ts-w5', startComponentId: 'ts-d1', startPinId: 'cathode', endComponentId: 'ts-d2', endPinId: 'cathode', points: [] },
      { id: 'ts-w6', startComponentId: 'ts-d2', startPinId: 'anode', endComponentId: 'ts-ic1', endPinId: 'inv', points: [] },
      { id: 'ts-w7', startComponentId: 'ts-drive', startPinId: 'wiper', endComponentId: 'ts-d1', endPinId: 'cathode', points: [] },
      { id: 'ts-w8', startComponentId: 'ts-c2', startPinId: 'pin1', endComponentId: 'ts-ic1', endPinId: 'inv', points: [] },
      { id: 'ts-w9', startComponentId: 'ts-c2', startPinId: 'pin2', endComponentId: 'ts-r2', endPinId: 'pin1', points: [] },
      // Tone section
      { id: 'ts-w10', startComponentId: 'ts-ic1', startPinId: 'out', endComponentId: 'ts-c3', endPinId: 'pin1', points: [] },
      { id: 'ts-w11', startComponentId: 'ts-c3', startPinId: 'pin2', endComponentId: 'ts-tone', endPinId: 'ccw', points: [] },
      { id: 'ts-w12', startComponentId: 'ts-tone', startPinId: 'wiper', endComponentId: 'ts-volume', endPinId: 'cw', points: [] },
      { id: 'ts-w13', startComponentId: 'ts-c4', startPinId: 'pin1', endComponentId: 'ts-tone', endPinId: 'cw', points: [] },
      // Volume to output
      { id: 'ts-w14', startComponentId: 'ts-volume', startPinId: 'wiper', endComponentId: 'ts-output', endPinId: 'tip', points: [] },
      // Power
      { id: 'ts-w15', startComponentId: 'ts-vcc', startPinId: 'vcc', endComponentId: 'ts-ic1', endPinId: 'vcc', points: [] },
      // Ground connections
      { id: 'ts-w16', startComponentId: 'ts-input', startPinId: 'sleeve', endComponentId: 'ts-gnd', endPinId: 'gnd', points: [] },
      { id: 'ts-w17', startComponentId: 'ts-r1', startPinId: 'pin1', endComponentId: 'ts-gnd', endPinId: 'gnd', points: [] },
      { id: 'ts-w18', startComponentId: 'ts-volume', startPinId: 'ccw', endComponentId: 'ts-gnd', endPinId: 'gnd', points: [] },
      { id: 'ts-w19', startComponentId: 'ts-output', startPinId: 'sleeve', endComponentId: 'ts-gnd', endPinId: 'gnd', points: [] }
    ]
  },
  componentRefs: {
    'C1': 'ts-c1',
    'R1': 'ts-r1',
    'IC1': 'ts-ic1',
    'DRIVE': 'ts-drive',
    'D1': 'ts-d1',
    'D2': 'ts-d2',
    'C2': 'ts-c2',
    'R2': 'ts-r2',
    'C3': 'ts-c3',
    'TONE': 'ts-tone',
    'C4': 'ts-c4',
    'VOLUME': 'ts-volume',
    'INPUT': 'ts-input',
    'OUTPUT': 'ts-output',
    'VCC': 'ts-vcc',
    'GND': 'ts-gnd'
  },
  mods: [
    {
      id: 'ts-mod-led-clipping',
      name: 'LED Clipping',
      description: 'Replace silicon diodes with LEDs for higher headroom and a different clipping character. Results in a cleaner, louder overdrive with more dynamics.',
      difficulty: 'easy',
      sonicChange: 'Higher headroom, more open and dynamic sound, slightly less compressed. The clipping threshold increases from ~0.6V to ~1.8V.',
      partsNeeded: [
        { name: 'Red LED', value: '3mm Red LED', type: 'led', quantity: 2, notes: 'Any standard red LED works' }
      ],
      componentChanges: {
        'D1': { type: 'led', value: 'Red LED' },
        'D2': { type: 'led', value: 'Red LED' }
      }
    },
    {
      id: 'ts-mod-asymmetric',
      name: 'Asymmetric Clipping',
      description: 'Use different diodes for each half of the waveform. Creates a more complex harmonic structure similar to tube amp distortion.',
      difficulty: 'easy',
      sonicChange: 'More even-order harmonics, warmer and more tube-like character. The asymmetry creates second harmonic content.',
      partsNeeded: [
        { name: 'Germanium Diode', value: '1N34A', type: 'diode', quantity: 1, notes: 'For D1 position' },
        { name: 'Silicon Diode', value: '1N914', type: 'diode', quantity: 1, notes: 'Keep original D2' }
      ],
      componentChanges: {
        'D1': { value: '1N34A' }
      }
    },
    {
      id: 'ts-mod-bass-boost',
      name: 'Bass Boost',
      description: 'Increase the input coupling capacitor to allow more low frequencies through. Reduces the characteristic mid-hump of the Tube Screamer.',
      difficulty: 'easy',
      sonicChange: 'Fuller bass response, less mid-focused. Good for humbuckers or when you want a fatter sound.',
      partsNeeded: [
        { name: 'Capacitor', value: '0.1uF', type: 'capacitor', quantity: 1, notes: 'Film capacitor preferred' }
      ],
      componentChanges: {
        'C1': { value: 0.1 }
      }
    },
    {
      id: 'ts-mod-gain-boost',
      name: 'Higher Gain',
      description: 'Replace the drive pot with a higher value to increase maximum gain. Also adjusts the feedback resistor for better taper.',
      difficulty: 'moderate',
      sonicChange: 'More gain on tap, can get into light distortion territory. Good for harder rock styles.',
      partsNeeded: [
        { name: 'Potentiometer', value: '1M', type: 'potentiometer', quantity: 1, notes: 'Linear or audio taper' }
      ],
      componentChanges: {
        'DRIVE': { value: 1000 }
      }
    },
    {
      id: 'ts-mod-flat-mids',
      name: 'Flat Mids',
      description: 'Modify the tone stack to reduce the mid-hump. Changes the characteristic Tube Screamer voicing to something more neutral.',
      difficulty: 'moderate',
      sonicChange: 'Flatter frequency response, more transparent overdrive character. Better for stacking with other pedals.',
      partsNeeded: [
        { name: 'Capacitor', value: '0.1uF', type: 'capacitor', quantity: 2, notes: 'For C3 and C4' }
      ],
      componentChanges: {
        'C3': { value: 0.1 },
        'C4': { value: 0.1 }
      }
    }
  ],
  sections: [
    {
      id: 'ts-section-input',
      name: 'Input Buffer',
      description: 'High impedance input stage that prevents signal loss when connected to passive pickups.',
      componentRefs: ['INPUT', 'C1', 'R1'],
      order: 1,
      signalRole: 'input'
    },
    {
      id: 'ts-section-clipping',
      name: 'Clipping Stage',
      description: 'The heart of the Tube Screamer. An op-amp with diodes in the feedback loop creates soft, symmetrical clipping.',
      componentRefs: ['IC1', 'DRIVE', 'D1', 'D2', 'C2', 'R2'],
      order: 2,
      signalRole: 'clipping'
    },
    {
      id: 'ts-section-tone',
      name: 'Tone Control',
      description: 'A simple low-pass filter that rolls off high frequencies. The mid-hump is created by the interaction with the clipping stage.',
      componentRefs: ['C3', 'TONE', 'C4'],
      order: 3,
      signalRole: 'tone'
    },
    {
      id: 'ts-section-volume',
      name: 'Volume Control',
      description: 'Output level control. Also provides some output impedance matching.',
      componentRefs: ['VOLUME', 'OUTPUT'],
      order: 4,
      signalRole: 'volume'
    },
    {
      id: 'ts-section-power',
      name: 'Power Supply',
      description: 'Standard 9V power supply with virtual ground for biasing the op-amp.',
      componentRefs: ['VCC', 'GND'],
      order: 5,
      signalRole: 'power'
    }
  ]
};
