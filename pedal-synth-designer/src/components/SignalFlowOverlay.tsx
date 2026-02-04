import { useEffect, useState, useMemo } from 'react';
import { useExplanationStore, useCircuitStore } from '../store';

interface SignalFlowOverlayProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

export function SignalFlowOverlay({ containerRef: _containerRef }: SignalFlowOverlayProps) {
  const { showSignalFlow, signalPath } = useExplanationStore();
  const { components, zoom, panOffset } = useCircuitStore();
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    if (!showSignalFlow) return;

    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, [showSignalFlow]);

  const pathData = useMemo(() => {
    if (!signalPath || !showSignalFlow) return null;

    const points: { x: number; y: number; componentId: string; stage: number }[] = [];

    for (const stage of signalPath.stages) {
      const comp = components.find((c) => c.id === stage.componentId);
      if (!comp) continue;

      const x = (comp.position.x + 30) * zoom + panOffset.x;
      const y = (comp.position.y + 20) * zoom + panOffset.y;

      points.push({
        x,
        y,
        componentId: stage.componentId,
        stage: stage.stageNumber,
      });
    }

    return points;
  }, [signalPath, components, zoom, panOffset, showSignalFlow]);

  if (!showSignalFlow || !signalPath || !pathData || pathData.length < 2) {
    return null;
  }

  const svgPath = pathData.reduce((path, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }
    const prev = pathData[index - 1];
    const midX = (prev.x + point.x) / 2;
    return `${path} Q ${midX} ${prev.y} ${midX} ${(prev.y + point.y) / 2} Q ${midX} ${point.y} ${point.x} ${point.y}`;
  }, '');

  const totalLength = pathData.reduce((acc, point, index) => {
    if (index === 0) return 0;
    const prev = pathData[index - 1];
    return acc + Math.sqrt(Math.pow(point.x - prev.x, 2) + Math.pow(point.y - prev.y, 2));
  }, 0);

  const dashOffset = (animationPhase / 100) * totalLength;

  return (
    <svg
      className="absolute inset-0 pointer-events-none z-10"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <linearGradient id="signal-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4ecca3" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#4ecca3" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#4ecca3" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#4ecca3" />
        </marker>
      </defs>

      {/* Background path */}
      <path
        d={svgPath}
        fill="none"
        stroke="#4ecca3"
        strokeWidth="2"
        strokeOpacity="0.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Animated signal pulse */}
      <path
        d={svgPath}
        fill="none"
        stroke="url(#signal-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={`${totalLength * 0.1} ${totalLength * 0.9}`}
        strokeDashoffset={-dashOffset}
        filter="url(#glow)"
      />

      {/* Stage markers */}
      {pathData.map((point, index) => (
        <g key={point.componentId}>
          {/* Outer glow */}
          <circle
            cx={point.x}
            cy={point.y}
            r={16}
            fill="#4ecca3"
            fillOpacity={0.1}
          />
          {/* Inner circle */}
          <circle
            cx={point.x}
            cy={point.y}
            r={12}
            fill="#0a0a12"
            stroke="#4ecca3"
            strokeWidth="2"
          />
          {/* Stage number */}
          <text
            x={point.x}
            y={point.y}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#4ecca3"
            fontSize="10"
            fontWeight="bold"
          >
            {point.stage}
          </text>

          {/* Connecting arrows (except for last point) */}
          {index < pathData.length - 1 && (
            <ArrowBetweenPoints
              from={point}
              to={pathData[index + 1]}
              animationPhase={animationPhase}
            />
          )}
        </g>
      ))}
    </svg>
  );
}

function ArrowBetweenPoints({
  from,
  to,
  animationPhase,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  animationPhase: number;
}) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;

  const progress = (animationPhase % 50) / 50;
  const pulsX = from.x + dx * progress;
  const pulsY = from.y + dy * progress;

  return (
    <g>
      {/* Direction indicator at midpoint */}
      <circle
        cx={pulsX}
        cy={pulsY}
        r={4}
        fill="#4ecca3"
        opacity={0.8 - progress * 0.6}
      />
    </g>
  );
}
