import { useRef, useEffect, useCallback, useState } from 'react';
import { useCircuitStore } from '../store';
import { ComponentRenderer } from './ComponentRenderer';
import { WireRenderer } from './WireRenderer';
import type { ComponentType } from '../types';

export function CircuitCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const {
    components,
    wires,
    zoom,
    panOffset,
    gridSize,
    showGrid,
    dragState,
    wiringState,
    addComponent,
    endDrag,
    clearSelection,
    updateWiringPosition,
    cancelWiring,
    setZoom,
    setPanOffset,
  } = useCircuitStore();

  // Handle resize
  useEffect(() => {
    const updateSize = () => {
      if (canvasRef.current) {
        setCanvasSize({
          width: canvasRef.current.clientWidth,
          height: canvasRef.current.clientHeight,
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Handle drop from palette
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const componentType = e.dataTransfer.getData('componentType') as ComponentType;

      if (componentType && canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - panOffset.x) / zoom;
        const y = (e.clientY - rect.top - panOffset.y) / zoom;

        // Snap to grid
        const snappedX = Math.round(x / gridSize) * gridSize;
        const snappedY = Math.round(y / gridSize) * gridSize;

        addComponent(componentType, { x: snappedX, y: snappedY });
      }

      endDrag();
    },
    [addComponent, endDrag, panOffset, zoom, gridSize]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  // Handle mouse move for wiring
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (wiringState.isWiring && canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - panOffset.x) / zoom;
        const y = (e.clientY - rect.top - panOffset.y) / zoom;
        updateWiringPosition({ x, y });
      }
    },
    [wiringState.isWiring, panOffset, zoom, updateWiringPosition]
  );

  // Handle click on canvas background
  const handleCanvasClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === canvasRef.current) {
        clearSelection();
        if (wiringState.isWiring) {
          cancelWiring();
        }
      }
    },
    [clearSelection, wiringState.isWiring, cancelWiring]
  );

  // Handle wheel for zoom
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        setZoom(zoom * delta);
      } else {
        // Pan
        setPanOffset({
          x: panOffset.x - e.deltaX,
          y: panOffset.y - e.deltaY,
        });
      }
    },
    [zoom, panOffset, setZoom, setPanOffset]
  );

  // Handle keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && wiringState.isWiring) {
        cancelWiring();
      }
      if ((e.key === 'Delete' || e.key === 'Backspace') && !e.target) {
        useCircuitStore.getState().deleteSelected();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [wiringState.isWiring, cancelWiring]);

  // Generate grid pattern
  const gridPattern = showGrid ? (
    <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
      <defs>
        <pattern
          id="grid"
          width={gridSize * zoom}
          height={gridSize * zoom}
          patternUnits="userSpaceOnUse"
          x={panOffset.x % (gridSize * zoom)}
          y={panOffset.y % (gridSize * zoom)}
        >
          <circle cx="1" cy="1" r="1" fill="#2a2a4a" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  ) : null;

  // Get pin position in canvas coordinates
  const getPinPosition = (componentId: string, pinId: string) => {
    const component = components.find((c) => c.id === componentId);
    if (!component) return null;
    const pin = component.pins.find((p) => p.id === pinId);
    if (!pin) return null;
    return {
      x: component.position.x + pin.position.x,
      y: component.position.y + pin.position.y,
    };
  };

  return (
    <div
      ref={canvasRef}
      className="flex-1 relative overflow-hidden bg-circuit-bg cursor-crosshair"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onMouseMove={handleMouseMove}
      onClick={handleCanvasClick}
      onWheel={handleWheel}
    >
      {gridPattern}

      {/* Transform container */}
      <div
        className="absolute"
        style={{
          transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoom})`,
          transformOrigin: '0 0',
        }}
      >
        {/* Wires */}
        <svg
          className="absolute top-0 left-0 pointer-events-none"
          style={{
            width: canvasSize.width / zoom + 1000,
            height: canvasSize.height / zoom + 1000,
            overflow: 'visible',
          }}
        >
          {wires.map((wire) => {
            const startPos = getPinPosition(wire.startComponentId, wire.startPinId);
            const endPos = getPinPosition(wire.endComponentId, wire.endPinId);
            if (!startPos || !endPos) return null;

            return (
              <WireRenderer
                key={wire.id}
                wire={wire}
                startPos={startPos}
                endPos={endPos}
              />
            );
          })}

          {/* Wiring preview */}
          {wiringState.isWiring &&
            wiringState.startComponentId &&
            wiringState.startPinId &&
            wiringState.currentPosition && (
              <line
                x1={
                  getPinPosition(
                    wiringState.startComponentId,
                    wiringState.startPinId
                  )?.x || 0
                }
                y1={
                  getPinPosition(
                    wiringState.startComponentId,
                    wiringState.startPinId
                  )?.y || 0
                }
                x2={wiringState.currentPosition.x}
                y2={wiringState.currentPosition.y}
                stroke="#4ecca3"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.7"
              />
            )}
        </svg>

        {/* Components */}
        {components.map((component) => (
          <ComponentRenderer key={component.id} component={component} />
        ))}
      </div>

      {/* Zoom indicator */}
      <div className="absolute bottom-2 right-2 px-2 py-1 bg-[#1a1a2e] rounded text-xs text-gray-400">
        {Math.round(zoom * 100)}%
      </div>

      {/* Instructions */}
      {components.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-gray-500">
            <p className="text-lg mb-2">Drag components from the palette</p>
            <p className="text-sm">Click pins to connect wires</p>
          </div>
        </div>
      )}
    </div>
  );
}
