import { useEffect, useState } from 'react';
import type { TooltipPosition } from '../types/explanation';
import type { CircuitComponent } from '../types/circuit';
import { getQuickExplanation } from '../data/explanations/componentKnowledge';
import { formatValue } from '../utils/componentFactory';
import { COMPONENT_DEFINITIONS } from '../utils/componentFactory';

interface ComponentTooltipProps {
  component: CircuitComponent | null;
  position: { x: number; y: number } | null;
  containerRef: React.RefObject<HTMLElement>;
}

export function ComponentTooltip({ component, position, containerRef }: ComponentTooltipProps) {
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!component || !position || !containerRef.current) {
      setIsVisible(false);
      return;
    }

    const container = containerRef.current.getBoundingClientRect();
    const tooltipWidth = 280;
    const tooltipHeight = 100;
    const padding = 12;

    let x = position.x + padding;
    let y = position.y + padding;
    let anchor: TooltipPosition['anchor'] = 'top';

    if (x + tooltipWidth > container.right - padding) {
      x = position.x - tooltipWidth - padding;
      anchor = 'right';
    }

    if (y + tooltipHeight > container.bottom - padding) {
      y = position.y - tooltipHeight - padding;
      anchor = 'bottom';
    }

    setTooltipPosition({ x, y, anchor });
    setIsVisible(true);
  }, [component, position, containerRef]);

  if (!component || !position || !tooltipPosition || !isVisible) {
    return null;
  }

  const definition = COMPONENT_DEFINITIONS[component.type];
  const explanation = getQuickExplanation(component.type);

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        left: tooltipPosition.x,
        top: tooltipPosition.y,
      }}
    >
      <div className="bg-[#1a1a2e] border border-[#3a3a4a] rounded-lg shadow-xl p-3 max-w-[280px]">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white font-medium">{definition?.name || component.type}</span>
          {component.value && (
            <span className="px-1.5 py-0.5 text-xs bg-[#4ecca3]/20 text-[#4ecca3] rounded font-mono">
              {formatValue(component.value, component.unit)}
            </span>
          )}
        </div>

        {/* Quick explanation */}
        <p className="text-xs text-gray-400 leading-relaxed">{explanation}</p>

        {/* Hint */}
        <div className="mt-2 pt-2 border-t border-[#2a2a3a]">
          <p className="text-xs text-gray-500">
            Click to see detailed explanation
          </p>
        </div>
      </div>
    </div>
  );
}
