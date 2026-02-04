import type { CircuitComponent, Wire } from '../types/circuit';
import type { PedalCircuit, PedalMod } from '../types/pedal';

export interface AppliedCircuit {
  components: CircuitComponent[];
  wires: Wire[];
  appliedMods: string[];
}

/**
 * Apply selected mods to a pedal's base circuit
 */
export function applyMods(
  pedal: PedalCircuit,
  selectedModIds: string[]
): AppliedCircuit {
  // Start with the base circuit, adding selected: false to all components and wires
  let components: CircuitComponent[] = pedal.baseCircuit.components.map(c => ({
    ...c,
    selected: false
  }));

  let wires: Wire[] = pedal.baseCircuit.wires.map(w => ({
    ...w,
    selected: false
  }));

  const appliedMods: string[] = [];

  // Apply each selected mod in order
  for (const modId of selectedModIds) {
    const mod = pedal.mods.find(m => m.id === modId);
    if (!mod) continue;

    // Apply component changes
    if (mod.componentChanges) {
      for (const [ref, changes] of Object.entries(mod.componentChanges)) {
        const componentId = pedal.componentRefs[ref];
        if (!componentId) continue;

        components = components.map(c => {
          if (c.id === componentId) {
            return {
              ...c,
              ...(changes.type && { type: changes.type }),
              ...(changes.value !== undefined && { value: changes.value }),
              ...(changes.unit !== undefined && { unit: changes.unit })
            };
          }
          return c;
        });
      }
    }

    // Remove components if specified
    if (mod.removeComponents) {
      const idsToRemove = mod.removeComponents
        .map(ref => pedal.componentRefs[ref])
        .filter(Boolean);

      components = components.filter(c => !idsToRemove.includes(c.id));
      wires = wires.filter(w =>
        !idsToRemove.includes(w.startComponentId) &&
        !idsToRemove.includes(w.endComponentId)
      );
    }

    // Add components if specified
    if (mod.addComponents) {
      const newComponents: CircuitComponent[] = mod.addComponents.map((c, index) => ({
        ...c,
        id: `${modId}-comp-${index}`,
        selected: false
      }));
      components = [...components, ...newComponents];
    }

    // Remove wires if specified
    if (mod.removeWires) {
      const wireIds = new Set(mod.removeWires);
      wires = wires.filter(w => !wireIds.has(w.id));
    }

    // Add wires if specified
    if (mod.addWires) {
      const newWires: Wire[] = mod.addWires.map((w, index) => ({
        ...w,
        id: `${modId}-wire-${index}`,
        selected: false
      }));
      wires = [...wires, ...newWires];
    }

    appliedMods.push(modId);
  }

  return { components, wires, appliedMods };
}

/**
 * Get the base circuit without any mods applied
 */
export function getBaseCircuit(pedal: PedalCircuit): AppliedCircuit {
  return {
    components: pedal.baseCircuit.components.map(c => ({
      ...c,
      selected: false
    })),
    wires: pedal.baseCircuit.wires.map(w => ({
      ...w,
      selected: false
    })),
    appliedMods: []
  };
}

/**
 * Get a summary of what a mod changes
 */
export function getModChangeSummary(
  pedal: PedalCircuit,
  mod: PedalMod
): string[] {
  const changes: string[] = [];

  if (mod.componentChanges) {
    for (const [ref, change] of Object.entries(mod.componentChanges)) {
      const originalComponent = pedal.baseCircuit.components.find(
        c => c.id === pedal.componentRefs[ref]
      );

      if (!originalComponent) continue;

      if (change.type && change.type !== originalComponent.type) {
        changes.push(`${ref}: ${originalComponent.type} → ${change.type}`);
      } else if (change.value !== undefined && change.value !== originalComponent.value) {
        const unit = change.unit || originalComponent.unit;
        changes.push(`${ref}: ${originalComponent.value}${originalComponent.unit} → ${change.value}${unit}`);
      }
    }
  }

  if (mod.removeComponents?.length) {
    changes.push(`Remove: ${mod.removeComponents.join(', ')}`);
  }

  if (mod.addComponents?.length) {
    changes.push(`Add: ${mod.addComponents.length} component(s)`);
  }

  return changes;
}

/**
 * Calculate total parts needed for selected mods (deduplicated)
 */
export function calculatePartsNeeded(
  pedal: PedalCircuit,
  selectedModIds: string[]
): { name: string; value: string; quantity: number; notes?: string }[] {
  const partsMap = new Map<string, { name: string; value: string; quantity: number; notes?: string }>();

  for (const modId of selectedModIds) {
    const mod = pedal.mods.find(m => m.id === modId);
    if (!mod) continue;

    for (const part of mod.partsNeeded) {
      const key = `${part.name}-${part.value}`;
      const existing = partsMap.get(key);

      if (existing) {
        existing.quantity += part.quantity;
      } else {
        partsMap.set(key, {
          name: part.name,
          value: part.value,
          quantity: part.quantity,
          notes: part.notes
        });
      }
    }
  }

  return Array.from(partsMap.values());
}
