import { useCallback, useState } from 'react';
import { useCircuitStore } from '../store';
import { getComponentDefinition, formatValue } from '../utils/componentFactory';
import type { CircuitComponent, Pin } from '../types';

interface ComponentRendererProps {
  component: CircuitComponent;
}

export function ComponentRenderer({ component }: ComponentRendererProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const {
    selectComponent,
    moveComponent,
    rotateComponent,
    startWiring,
    endWiring,
    wiringState,
  } = useCircuitStore();

  const definition = getComponentDefinition(component.type);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.button !== 0) return;
      e.stopPropagation();

      const isShift = e.shiftKey;
      selectComponent(component.id, isShift);

      setIsDragging(true);
      setDragOffset({
        x: e.clientX - component.position.x,
        y: e.clientY - component.position.y,
      });

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const zoom = useCircuitStore.getState().zoom;
        const panOffset = useCircuitStore.getState().panOffset;

        const newX = (moveEvent.clientX - dragOffset.x - panOffset.x) / zoom;
        const newY = (moveEvent.clientY - dragOffset.y - panOffset.y) / zoom;

        moveComponent(component.id, { x: newX, y: newY });
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    },
    [component.id, component.position, selectComponent, moveComponent, dragOffset]
  );

  const handleDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      rotateComponent(component.id);
    },
    [component.id, rotateComponent]
  );

  const handlePinClick = useCallback(
    (e: React.MouseEvent, pin: Pin) => {
      e.stopPropagation();

      const pinWorldPos = {
        x: component.position.x + pin.position.x,
        y: component.position.y + pin.position.y,
      };

      if (wiringState.isWiring) {
        endWiring(component.id, pin.id);
      } else {
        startWiring(component.id, pin.id, pinWorldPos);
      }
    },
    [component.id, component.position, wiringState.isWiring, startWiring, endWiring]
  );

  return (
    <div
      className={`absolute cursor-move select-none ${
        component.selected ? 'z-10' : 'z-0'
      }`}
      style={{
        left: component.position.x,
        top: component.position.y,
        transform: `rotate(${component.rotation}deg)`,
        transformOrigin: `${definition.width / 2}px ${definition.height / 2}px`,
      }}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
    >
      {/* Component body */}
      <div
        className={`relative ${
          component.selected
            ? 'ring-2 ring-[#ffd93d] ring-offset-2 ring-offset-transparent'
            : ''
        }`}
        style={{
          width: definition.width,
          height: definition.height,
        }}
      >
        {/* Symbol */}
        <ComponentSymbol type={component.type} width={definition.width} height={definition.height} />

        {/* Pins */}
        {component.pins.map((pin) => (
          <div
            key={pin.id}
            className={`absolute w-3 h-3 -ml-1.5 -mt-1.5 rounded-full cursor-pointer transition-all ${
              wiringState.isWiring
                ? 'bg-[#4ecca3] hover:bg-[#6fffb3] hover:scale-150'
                : 'bg-gray-500 hover:bg-[#4ecca3] hover:scale-125'
            }`}
            style={{
              left: pin.position.x,
              top: pin.position.y,
            }}
            onClick={(e) => handlePinClick(e, pin)}
            title={pin.name}
          />
        ))}

        {/* Value label */}
        <div
          className="absolute text-xs text-gray-400 whitespace-nowrap pointer-events-none"
          style={{
            left: '50%',
            bottom: -16,
            transform: `translateX(-50%) rotate(-${component.rotation}deg)`,
          }}
        >
          {formatValue(component.value, component.unit)}
        </div>
      </div>
    </div>
  );
}

function ComponentSymbol({
  type,
  width,
  height,
}: {
  type: string;
  width: number;
  height: number;
}) {
  const strokeColor = '#e94560';
  const fillColor = 'transparent';

  switch (type) {
    case 'resistor':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <path
            d="M0,20 L10,20 L12,10 L16,30 L20,10 L24,30 L28,10 L32,30 L36,10 L40,30 L44,10 L48,20 L60,20"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
          />
        </svg>
      );

    case 'capacitor':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <path d="M0,20 L25,20 M35,20 L60,20" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M25,5 L25,35" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M35,5 L35,35" fill="none" stroke={strokeColor} strokeWidth="2" />
        </svg>
      );

    case 'inductor':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <path
            d="M0,20 L5,20 Q10,20 10,15 Q10,10 15,10 Q20,10 20,15 Q20,20 25,20 Q30,20 30,15 Q30,10 35,10 Q40,10 40,15 Q40,20 45,20 Q50,20 50,15 Q50,10 55,10 Q60,10 60,15 Q60,20 60,20"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
          />
        </svg>
      );

    case 'diode':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <path d="M0,20 L20,20 M40,20 L60,20" fill="none" stroke={strokeColor} strokeWidth="2" />
          <polygon points="20,8 20,32 40,20" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
          <path d="M40,8 L40,32" fill="none" stroke={strokeColor} strokeWidth="2" />
        </svg>
      );

    case 'led':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <path d="M0,20 L20,20 M40,20 L60,20" fill="none" stroke={strokeColor} strokeWidth="2" />
          <polygon points="20,8 20,32 40,20" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
          <path d="M40,8 L40,32" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M35,5 L45,0 M38,8 L48,3" fill="none" stroke={strokeColor} strokeWidth="1.5" markerEnd="url(#arrow)" />
        </svg>
      );

    case 'zener':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <path d="M0,20 L20,20 M40,20 L60,20" fill="none" stroke={strokeColor} strokeWidth="2" />
          <polygon points="20,8 20,32 40,20" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
          <path d="M40,8 L40,32 L36,32 M40,8 L44,8" fill="none" stroke={strokeColor} strokeWidth="2" />
        </svg>
      );

    case 'transistor_npn':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <circle cx="30" cy="30" r="25" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M0,30 L15,30" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M15,15 L15,45" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M15,22 L40,5 M15,38 L40,55" fill="none" stroke={strokeColor} strokeWidth="2" />
          <polygon points="35,50 40,55 32,55" fill={strokeColor} />
        </svg>
      );

    case 'transistor_pnp':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <circle cx="30" cy="30" r="25" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M0,30 L15,30" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M15,15 L15,45" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M15,22 L40,5 M15,38 L40,55" fill="none" stroke={strokeColor} strokeWidth="2" />
          <polygon points="20,35 15,38 20,43" fill={strokeColor} />
        </svg>
      );

    case 'opamp':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <polygon points="5,5 5,75 75,40" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M0,20 L5,20" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M0,60 L5,60" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M75,40 L80,40" fill="none" stroke={strokeColor} strokeWidth="2" />
          <text x="12" y="24" fill={strokeColor} fontSize="12">+</text>
          <text x="12" y="64" fill={strokeColor} fontSize="12">-</text>
        </svg>
      );

    case 'potentiometer':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <path
            d="M0,20 L10,20 L12,10 L16,30 L20,10 L24,30 L28,10 L32,30 L36,10 L40,30 L44,10 L48,20 L60,20"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
          />
          <path d="M30,0 L30,10" fill="none" stroke={strokeColor} strokeWidth="2" />
          <polygon points="27,10 33,10 30,18" fill={strokeColor} />
        </svg>
      );

    case 'switch':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <circle cx="10" cy="20" r="4" fill="none" stroke={strokeColor} strokeWidth="2" />
          <circle cx="50" cy="20" r="4" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M14,20 L46,12" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M0,20 L6,20 M54,20 L60,20" fill="none" stroke={strokeColor} strokeWidth="2" />
        </svg>
      );

    case 'input_jack':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <rect x="5" y="5" width="30" height="40" rx="3" fill="none" stroke={strokeColor} strokeWidth="2" />
          <circle cx="20" cy="25" r="8" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M35,15 L50,15 M35,35 L50,35" fill="none" stroke={strokeColor} strokeWidth="2" />
          <text x="10" y="48" fill="#666" fontSize="8">IN</text>
        </svg>
      );

    case 'output_jack':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <rect x="15" y="5" width="30" height="40" rx="3" fill="none" stroke={strokeColor} strokeWidth="2" />
          <circle cx="30" cy="25" r="8" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M0,15 L15,15 M0,35 L15,35" fill="none" stroke={strokeColor} strokeWidth="2" />
          <text x="20" y="48" fill="#666" fontSize="8">OUT</text>
        </svg>
      );

    case 'ground':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <path d="M20,0 L20,10 M10,10 L30,10 M13,15 L27,15 M16,20 L24,20" fill="none" stroke={strokeColor} strokeWidth="2" />
        </svg>
      );

    case 'vcc':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <path d="M20,30 L20,15 M10,10 L20,0 L30,10" fill="none" stroke={strokeColor} strokeWidth="2" />
          <text x="8" y="28" fill={strokeColor} fontSize="10">VCC</text>
        </svg>
      );

    case 'oscillator':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <rect x="10" y="10" width="40" height="40" rx="3" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M15,30 C20,20 25,40 30,30 C35,20 40,40 45,30" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          <path d="M0,30 L10,30 M50,30 L60,30" fill="none" stroke={strokeColor} strokeWidth="2" />
        </svg>
      );

    case 'speaker':
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <path d="M0,25 L10,25 M0,45 L10,45" fill="none" stroke={strokeColor} strokeWidth="2" />
          <rect x="10" y="20" width="10" height="30" fill="none" stroke={strokeColor} strokeWidth="2" />
          <polygon points="20,20 35,5 35,65 20,50" fill="none" stroke={strokeColor} strokeWidth="2" />
          <path d="M40,25 Q50,35 40,45" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          <path d="M43,18 Q58,35 43,52" fill="none" stroke={strokeColor} strokeWidth="1.5" />
        </svg>
      );

    default:
      return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <rect
            x="5"
            y="5"
            width={width - 10}
            height={height - 10}
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
          />
          <text x={width / 2} y={height / 2} textAnchor="middle" fill={strokeColor} fontSize="10">
            ?
          </text>
        </svg>
      );
  }
}
