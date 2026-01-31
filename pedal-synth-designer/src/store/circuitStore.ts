import { create } from 'zustand';
import type {
  CircuitComponent,
  Wire,
  ComponentType,
  DragState,
  SelectionState,
  WiringState
} from '../types';
import { createComponent } from '../utils/componentFactory';

interface CircuitStore {
  // Circuit state
  components: CircuitComponent[];
  wires: Wire[];

  // Interaction state
  dragState: DragState;
  selectionState: SelectionState;
  wiringState: WiringState;

  // View state
  zoom: number;
  panOffset: { x: number; y: number };
  gridSize: number;
  showGrid: boolean;

  // Actions - Components
  addComponent: (type: ComponentType, position: { x: number; y: number }) => void;
  removeComponent: (id: string) => void;
  updateComponent: (id: string, updates: Partial<CircuitComponent>) => void;
  moveComponent: (id: string, position: { x: number; y: number }) => void;
  rotateComponent: (id: string) => void;

  // Actions - Wires
  addWire: (wire: Omit<Wire, 'id' | 'selected'>) => void;
  removeWire: (id: string) => void;

  // Actions - Selection
  selectComponent: (id: string, addToSelection?: boolean) => void;
  selectWire: (id: string, addToSelection?: boolean) => void;
  clearSelection: () => void;
  deleteSelected: () => void;

  // Actions - Drag & Drop
  startDrag: (type: ComponentType, position: { x: number; y: number }) => void;
  endDrag: () => void;

  // Actions - Wiring
  startWiring: (componentId: string, pinId: string, position: { x: number; y: number }) => void;
  updateWiringPosition: (position: { x: number; y: number }) => void;
  endWiring: (componentId: string, pinId: string) => void;
  cancelWiring: () => void;

  // Actions - View
  setZoom: (zoom: number) => void;
  setPanOffset: (offset: { x: number; y: number }) => void;
  toggleGrid: () => void;

  // Actions - Circuit
  clearCircuit: () => void;
  loadCircuit: (components: CircuitComponent[], wires: Wire[]) => void;
}

export const useCircuitStore = create<CircuitStore>((set, get) => ({
  // Initial state
  components: [],
  wires: [],

  dragState: {
    isDragging: false,
    componentType: null,
    startPosition: null,
  },

  selectionState: {
    selectedComponentIds: [],
    selectedWireIds: [],
  },

  wiringState: {
    isWiring: false,
    startComponentId: null,
    startPinId: null,
    currentPosition: null,
  },

  zoom: 1,
  panOffset: { x: 0, y: 0 },
  gridSize: 20,
  showGrid: true,

  // Component actions
  addComponent: (type, position) => {
    const component = createComponent(type, position);
    set((state) => ({
      components: [...state.components, component],
    }));
  },

  removeComponent: (id) => {
    set((state) => ({
      components: state.components.filter((c) => c.id !== id),
      wires: state.wires.filter(
        (w) => w.startComponentId !== id && w.endComponentId !== id
      ),
    }));
  },

  updateComponent: (id, updates) => {
    set((state) => ({
      components: state.components.map((c) =>
        c.id === id ? { ...c, ...updates } : c
      ),
    }));
  },

  moveComponent: (id, position) => {
    const { gridSize } = get();
    const snappedPosition = {
      x: Math.round(position.x / gridSize) * gridSize,
      y: Math.round(position.y / gridSize) * gridSize,
    };
    set((state) => ({
      components: state.components.map((c) =>
        c.id === id ? { ...c, position: snappedPosition } : c
      ),
    }));
  },

  rotateComponent: (id) => {
    set((state) => ({
      components: state.components.map((c) =>
        c.id === id ? { ...c, rotation: (c.rotation + 90) % 360 } : c
      ),
    }));
  },

  // Wire actions
  addWire: (wireData) => {
    const wire: Wire = {
      ...wireData,
      id: `wire-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      selected: false,
    };
    set((state) => ({
      wires: [...state.wires, wire],
    }));
  },

  removeWire: (id) => {
    set((state) => ({
      wires: state.wires.filter((w) => w.id !== id),
    }));
  },

  // Selection actions
  selectComponent: (id, addToSelection = false) => {
    set((state) => {
      const newSelectedIds = addToSelection
        ? state.selectionState.selectedComponentIds.includes(id)
          ? state.selectionState.selectedComponentIds.filter((i) => i !== id)
          : [...state.selectionState.selectedComponentIds, id]
        : [id];

      return {
        selectionState: {
          ...state.selectionState,
          selectedComponentIds: newSelectedIds,
        },
        components: state.components.map((c) => ({
          ...c,
          selected: newSelectedIds.includes(c.id),
        })),
      };
    });
  },

  selectWire: (id, addToSelection = false) => {
    set((state) => {
      const newSelectedIds = addToSelection
        ? state.selectionState.selectedWireIds.includes(id)
          ? state.selectionState.selectedWireIds.filter((i) => i !== id)
          : [...state.selectionState.selectedWireIds, id]
        : [id];

      return {
        selectionState: {
          ...state.selectionState,
          selectedWireIds: newSelectedIds,
        },
        wires: state.wires.map((w) => ({
          ...w,
          selected: newSelectedIds.includes(w.id),
        })),
      };
    });
  },

  clearSelection: () => {
    set((state) => ({
      selectionState: {
        selectedComponentIds: [],
        selectedWireIds: [],
      },
      components: state.components.map((c) => ({ ...c, selected: false })),
      wires: state.wires.map((w) => ({ ...w, selected: false })),
    }));
  },

  deleteSelected: () => {
    const { selectionState } = get();
    set((state) => ({
      components: state.components.filter(
        (c) => !selectionState.selectedComponentIds.includes(c.id)
      ),
      wires: state.wires.filter(
        (w) =>
          !selectionState.selectedWireIds.includes(w.id) &&
          !selectionState.selectedComponentIds.includes(w.startComponentId) &&
          !selectionState.selectedComponentIds.includes(w.endComponentId)
      ),
      selectionState: {
        selectedComponentIds: [],
        selectedWireIds: [],
      },
    }));
  },

  // Drag actions
  startDrag: (type, position) => {
    set({
      dragState: {
        isDragging: true,
        componentType: type,
        startPosition: position,
      },
    });
  },

  endDrag: () => {
    set({
      dragState: {
        isDragging: false,
        componentType: null,
        startPosition: null,
      },
    });
  },

  // Wiring actions
  startWiring: (componentId, pinId, position) => {
    set({
      wiringState: {
        isWiring: true,
        startComponentId: componentId,
        startPinId: pinId,
        currentPosition: position,
      },
    });
  },

  updateWiringPosition: (position) => {
    set((state) => ({
      wiringState: {
        ...state.wiringState,
        currentPosition: position,
      },
    }));
  },

  endWiring: (componentId, pinId) => {
    const { wiringState } = get();
    if (
      wiringState.isWiring &&
      wiringState.startComponentId &&
      wiringState.startPinId
    ) {
      // Don't connect to self
      if (
        wiringState.startComponentId !== componentId ||
        wiringState.startPinId !== pinId
      ) {
        get().addWire({
          startComponentId: wiringState.startComponentId,
          startPinId: wiringState.startPinId,
          endComponentId: componentId,
          endPinId: pinId,
          points: [],
        });
      }
    }
    set({
      wiringState: {
        isWiring: false,
        startComponentId: null,
        startPinId: null,
        currentPosition: null,
      },
    });
  },

  cancelWiring: () => {
    set({
      wiringState: {
        isWiring: false,
        startComponentId: null,
        startPinId: null,
        currentPosition: null,
      },
    });
  },

  // View actions
  setZoom: (zoom) => {
    set({ zoom: Math.max(0.25, Math.min(4, zoom)) });
  },

  setPanOffset: (offset) => {
    set({ panOffset: offset });
  },

  toggleGrid: () => {
    set((state) => ({ showGrid: !state.showGrid }));
  },

  // Circuit actions
  clearCircuit: () => {
    set({
      components: [],
      wires: [],
      selectionState: {
        selectedComponentIds: [],
        selectedWireIds: [],
      },
    });
  },

  loadCircuit: (components, wires) => {
    set({ components, wires });
  },
}));
