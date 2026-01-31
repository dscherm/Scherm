export type ComponentType =
  | 'resistor'
  | 'capacitor'
  | 'inductor'
  | 'diode'
  | 'led'
  | 'zener'
  | 'transistor_npn'
  | 'transistor_pnp'
  | 'opamp'
  | 'potentiometer'
  | 'switch'
  | 'input_jack'
  | 'output_jack'
  | 'ground'
  | 'vcc'
  | 'oscillator'
  | 'speaker';

export interface Pin {
  id: string;
  name: string;
  position: { x: number; y: number }; // Relative to component
  connected: boolean;
}

export interface CircuitComponent {
  id: string;
  type: ComponentType;
  position: { x: number; y: number };
  rotation: number; // 0, 90, 180, 270
  value: number | string;
  unit: string;
  pins: Pin[];
  selected: boolean;
}

export interface Wire {
  id: string;
  startComponentId: string;
  startPinId: string;
  endComponentId: string;
  endPinId: string;
  points: { x: number; y: number }[];
  selected: boolean;
}

export interface Circuit {
  id: string;
  name: string;
  description: string;
  components: CircuitComponent[];
  wires: Wire[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ComponentDefinition {
  type: ComponentType;
  name: string;
  category: 'passive' | 'active' | 'semiconductor' | 'io' | 'power';
  defaultValue: number | string;
  defaultUnit: string;
  pins: { name: string; relativePosition: { x: number; y: number } }[];
  width: number;
  height: number;
  symbol: string; // SVG path or identifier
}

export interface DragState {
  isDragging: boolean;
  componentType: ComponentType | null;
  startPosition: { x: number; y: number } | null;
}

export interface SelectionState {
  selectedComponentIds: string[];
  selectedWireIds: string[];
}

export interface WiringState {
  isWiring: boolean;
  startComponentId: string | null;
  startPinId: string | null;
  currentPosition: { x: number; y: number } | null;
}
