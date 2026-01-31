import type { CircuitComponent, ComponentType, ComponentDefinition } from '../types';

export const COMPONENT_DEFINITIONS: Record<ComponentType, ComponentDefinition> = {
  resistor: {
    type: 'resistor',
    name: 'Resistor',
    category: 'passive',
    defaultValue: 10000,
    defaultUnit: 'Ω',
    pins: [
      { name: 'A', relativePosition: { x: 0, y: 20 } },
      { name: 'B', relativePosition: { x: 60, y: 20 } },
    ],
    width: 60,
    height: 40,
    symbol: 'resistor',
  },
  capacitor: {
    type: 'capacitor',
    name: 'Capacitor',
    category: 'passive',
    defaultValue: 0.1,
    defaultUnit: 'µF',
    pins: [
      { name: '+', relativePosition: { x: 0, y: 20 } },
      { name: '-', relativePosition: { x: 60, y: 20 } },
    ],
    width: 60,
    height: 40,
    symbol: 'capacitor',
  },
  inductor: {
    type: 'inductor',
    name: 'Inductor',
    category: 'passive',
    defaultValue: 10,
    defaultUnit: 'mH',
    pins: [
      { name: 'A', relativePosition: { x: 0, y: 20 } },
      { name: 'B', relativePosition: { x: 60, y: 20 } },
    ],
    width: 60,
    height: 40,
    symbol: 'inductor',
  },
  diode: {
    type: 'diode',
    name: 'Diode',
    category: 'semiconductor',
    defaultValue: '1N4148',
    defaultUnit: '',
    pins: [
      { name: 'A', relativePosition: { x: 0, y: 20 } },
      { name: 'K', relativePosition: { x: 60, y: 20 } },
    ],
    width: 60,
    height: 40,
    symbol: 'diode',
  },
  led: {
    type: 'led',
    name: 'LED',
    category: 'semiconductor',
    defaultValue: 'Red',
    defaultUnit: '',
    pins: [
      { name: 'A', relativePosition: { x: 0, y: 20 } },
      { name: 'K', relativePosition: { x: 60, y: 20 } },
    ],
    width: 60,
    height: 40,
    symbol: 'led',
  },
  zener: {
    type: 'zener',
    name: 'Zener Diode',
    category: 'semiconductor',
    defaultValue: 5.1,
    defaultUnit: 'V',
    pins: [
      { name: 'A', relativePosition: { x: 0, y: 20 } },
      { name: 'K', relativePosition: { x: 60, y: 20 } },
    ],
    width: 60,
    height: 40,
    symbol: 'zener',
  },
  transistor_npn: {
    type: 'transistor_npn',
    name: 'NPN Transistor',
    category: 'semiconductor',
    defaultValue: '2N3904',
    defaultUnit: '',
    pins: [
      { name: 'B', relativePosition: { x: 0, y: 30 } },
      { name: 'C', relativePosition: { x: 40, y: 0 } },
      { name: 'E', relativePosition: { x: 40, y: 60 } },
    ],
    width: 60,
    height: 60,
    symbol: 'transistor_npn',
  },
  transistor_pnp: {
    type: 'transistor_pnp',
    name: 'PNP Transistor',
    category: 'semiconductor',
    defaultValue: '2N3906',
    defaultUnit: '',
    pins: [
      { name: 'B', relativePosition: { x: 0, y: 30 } },
      { name: 'C', relativePosition: { x: 40, y: 60 } },
      { name: 'E', relativePosition: { x: 40, y: 0 } },
    ],
    width: 60,
    height: 60,
    symbol: 'transistor_pnp',
  },
  opamp: {
    type: 'opamp',
    name: 'Op-Amp',
    category: 'active',
    defaultValue: 'TL072',
    defaultUnit: '',
    pins: [
      { name: '+', relativePosition: { x: 0, y: 20 } },
      { name: '-', relativePosition: { x: 0, y: 60 } },
      { name: 'OUT', relativePosition: { x: 80, y: 40 } },
      { name: 'V+', relativePosition: { x: 40, y: 0 } },
      { name: 'V-', relativePosition: { x: 40, y: 80 } },
    ],
    width: 80,
    height: 80,
    symbol: 'opamp',
  },
  potentiometer: {
    type: 'potentiometer',
    name: 'Potentiometer',
    category: 'passive',
    defaultValue: 100000,
    defaultUnit: 'Ω',
    pins: [
      { name: '1', relativePosition: { x: 0, y: 20 } },
      { name: '2', relativePosition: { x: 30, y: 0 } },
      { name: '3', relativePosition: { x: 60, y: 20 } },
    ],
    width: 60,
    height: 50,
    symbol: 'potentiometer',
  },
  switch: {
    type: 'switch',
    name: 'Switch',
    category: 'passive',
    defaultValue: 'SPST',
    defaultUnit: '',
    pins: [
      { name: 'A', relativePosition: { x: 0, y: 20 } },
      { name: 'B', relativePosition: { x: 60, y: 20 } },
    ],
    width: 60,
    height: 40,
    symbol: 'switch',
  },
  input_jack: {
    type: 'input_jack',
    name: 'Input Jack',
    category: 'io',
    defaultValue: '1/4"',
    defaultUnit: '',
    pins: [
      { name: 'TIP', relativePosition: { x: 50, y: 15 } },
      { name: 'GND', relativePosition: { x: 50, y: 35 } },
    ],
    width: 50,
    height: 50,
    symbol: 'input_jack',
  },
  output_jack: {
    type: 'output_jack',
    name: 'Output Jack',
    category: 'io',
    defaultValue: '1/4"',
    defaultUnit: '',
    pins: [
      { name: 'TIP', relativePosition: { x: 0, y: 15 } },
      { name: 'GND', relativePosition: { x: 0, y: 35 } },
    ],
    width: 50,
    height: 50,
    symbol: 'output_jack',
  },
  ground: {
    type: 'ground',
    name: 'Ground',
    category: 'power',
    defaultValue: 0,
    defaultUnit: 'V',
    pins: [{ name: 'GND', relativePosition: { x: 20, y: 0 } }],
    width: 40,
    height: 30,
    symbol: 'ground',
  },
  vcc: {
    type: 'vcc',
    name: 'VCC',
    category: 'power',
    defaultValue: 9,
    defaultUnit: 'V',
    pins: [{ name: 'VCC', relativePosition: { x: 20, y: 30 } }],
    width: 40,
    height: 30,
    symbol: 'vcc',
  },
  oscillator: {
    type: 'oscillator',
    name: 'Oscillator',
    category: 'active',
    defaultValue: 440,
    defaultUnit: 'Hz',
    pins: [
      { name: 'OUT', relativePosition: { x: 60, y: 30 } },
      { name: 'CV', relativePosition: { x: 0, y: 30 } },
    ],
    width: 60,
    height: 60,
    symbol: 'oscillator',
  },
  speaker: {
    type: 'speaker',
    name: 'Speaker',
    category: 'io',
    defaultValue: 8,
    defaultUnit: 'Ω',
    pins: [
      { name: '+', relativePosition: { x: 0, y: 25 } },
      { name: '-', relativePosition: { x: 0, y: 45 } },
    ],
    width: 50,
    height: 70,
    symbol: 'speaker',
  },
};

export function createComponent(
  type: ComponentType,
  position: { x: number; y: number }
): CircuitComponent {
  const definition = COMPONENT_DEFINITIONS[type];

  return {
    id: `${type}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    type,
    position,
    rotation: 0,
    value: definition.defaultValue,
    unit: definition.defaultUnit,
    pins: definition.pins.map((pinDef, index) => ({
      id: `pin-${index}`,
      name: pinDef.name,
      position: pinDef.relativePosition,
      connected: false,
    })),
    selected: false,
  };
}

export function getComponentDefinition(type: ComponentType): ComponentDefinition {
  return COMPONENT_DEFINITIONS[type];
}

export function formatValue(value: number | string, unit: string): string {
  if (typeof value === 'string') return value;

  if (unit === 'Ω' || unit === 'F' || unit === 'H') {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M${unit}`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}k${unit}`;
    if (value < 0.001) return `${(value * 1000000).toFixed(1)}µ${unit}`;
    if (value < 1) return `${(value * 1000).toFixed(1)}m${unit}`;
  }

  return `${value}${unit}`;
}
