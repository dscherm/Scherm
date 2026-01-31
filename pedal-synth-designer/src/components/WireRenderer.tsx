import { useCallback } from 'react';
import { useCircuitStore } from '../store';
import type { Wire } from '../types';

interface WireRendererProps {
  wire: Wire;
  startPos: { x: number; y: number };
  endPos: { x: number; y: number };
}

export function WireRenderer({ wire, startPos, endPos }: WireRendererProps) {
  const { selectWire } = useCircuitStore();

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      selectWire(wire.id, e.shiftKey);
    },
    [wire.id, selectWire]
  );

  // Calculate a nice curved path
  const midX = (startPos.x + endPos.x) / 2;
  const midY = (startPos.y + endPos.y) / 2;

  // Determine if we should use horizontal or vertical routing
  const dx = Math.abs(endPos.x - startPos.x);
  const dy = Math.abs(endPos.y - startPos.y);

  let pathD: string;

  if (dx > dy) {
    // Horizontal-first routing
    pathD = `M ${startPos.x} ${startPos.y}
             C ${midX} ${startPos.y}, ${midX} ${endPos.y}, ${endPos.x} ${endPos.y}`;
  } else {
    // Vertical-first routing
    pathD = `M ${startPos.x} ${startPos.y}
             C ${startPos.x} ${midY}, ${endPos.x} ${midY}, ${endPos.x} ${endPos.y}`;
  }

  return (
    <g className="cursor-pointer" onClick={handleClick}>
      {/* Invisible wider path for easier clicking */}
      <path
        d={pathD}
        fill="none"
        stroke="transparent"
        strokeWidth="10"
        className="pointer-events-auto"
      />
      {/* Visible wire */}
      <path
        d={pathD}
        fill="none"
        stroke={wire.selected ? '#ffd93d' : '#4ecca3'}
        strokeWidth={wire.selected ? 3 : 2}
        strokeLinecap="round"
        className="pointer-events-none transition-colors"
      />
      {/* Connection dots */}
      <circle
        cx={startPos.x}
        cy={startPos.y}
        r={wire.selected ? 4 : 3}
        fill={wire.selected ? '#ffd93d' : '#4ecca3'}
      />
      <circle
        cx={endPos.x}
        cy={endPos.y}
        r={wire.selected ? 4 : 3}
        fill={wire.selected ? '#ffd93d' : '#4ecca3'}
      />
    </g>
  );
}
