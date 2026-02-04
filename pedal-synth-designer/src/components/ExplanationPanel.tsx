import { useExplanationStore, useCircuitStore } from '../store';
import { COMPONENT_DEFINITIONS, formatValue } from '../utils/componentFactory';
import {
  Info,
  Lightbulb,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Zap,
  Settings,
  Eye,
  EyeOff,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import type { ExplanationMode, ComponentExplanation, SignalPath, SectionExplanation } from '../types/explanation';
import type { CircuitComponent } from '../types/circuit';

const MODE_OPTIONS: { value: ExplanationMode; label: string; icon: React.ReactNode }[] = [
  { value: 'component', label: 'Component', icon: <Info size={14} /> },
  { value: 'signal-flow', label: 'Signal Flow', icon: <Zap size={14} /> },
  { value: 'section', label: 'Sections', icon: <Settings size={14} /> },
];

export function ExplanationPanel() {
  const {
    mode,
    setMode,
    isEnabled,
    toggleEnabled,
    showSignalFlow,
    toggleSignalFlow,
    currentExplanation,
    signalPath,
    sectionExplanations,
    generateComponentExplanation,
    generateSignalPath,
  } = useExplanationStore();

  const { components, wires, selectionState } = useCircuitStore();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const selectedComponent = components.find(
    (c) => selectionState.selectedComponentIds.includes(c.id)
  );

  // Get the selected component ID for dependency tracking
  const selectedComponentId = selectedComponent?.id ?? null;

  // Generate component explanation when a component is selected
  useEffect(() => {
    if (!isEnabled || !selectedComponentId) return;

    // Find the component using the ID (ensures we use current component data)
    const component = components.find((c) => c.id === selectedComponentId);
    if (!component) return;

    // Auto-switch to component mode when a component is selected
    setMode('component');

    // Generate explanation for the selected component
    generateComponentExplanation(component, components, wires);
  }, [isEnabled, selectedComponentId, components, wires, generateComponentExplanation, setMode]);

  // Generate signal path when explanation mode is enabled or components change
  useEffect(() => {
    if (isEnabled && components.length > 0) {
      generateSignalPath(components, wires);
    }
  }, [isEnabled, components, wires, generateSignalPath]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  const definition = selectedComponent ? COMPONENT_DEFINITIONS[selectedComponent.type] : null;

  return (
    <div className="border-t border-[#2a2a3a]">
      {/* Header - clickable to toggle */}
      <button
        onClick={toggleEnabled}
        className="w-full p-3 flex items-center justify-between hover:bg-[#1a1a2e] transition-colors"
      >
        <div className="flex items-center gap-2">
          <Lightbulb size={16} className={isEnabled ? "text-[#f39c12]" : "text-gray-500"} />
          <span className={`text-sm font-semibold uppercase tracking-wider ${isEnabled ? 'text-gray-300' : 'text-gray-500'}`}>
            Explain
          </span>
          {!isEnabled && selectedComponent && (
            <span className="text-xs text-gray-500 truncate max-w-[100px]">
              ({definition?.name})
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          {isEnabled ? (
            <ChevronDown size={16} className="text-gray-400" />
          ) : (
            <ChevronRight size={16} className="text-gray-500" />
          )}
        </div>
      </button>

      {isEnabled && (
        <div className="border-t border-[#2a2a3a]">
          {/* Mode selector */}
          <div className="p-3 border-b border-[#2a2a3a]">
            <div className="flex gap-1">
              {MODE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setMode(option.value)}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs rounded transition-colors ${
                    mode === option.value
                      ? 'bg-[#4ecca3] text-black'
                      : 'bg-[#1a1a2e] text-gray-400 hover:text-white'
                  }`}
                >
                  {option.icon}
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content based on mode */}
          <div className="p-3 max-h-[300px] overflow-y-auto">
            {mode === 'component' && (
              <ComponentExplanationView
                explanation={currentExplanation}
                selectedComponent={selectedComponent}
              />
            )}

            {mode === 'signal-flow' && (
              <SignalFlowView
                signalPath={signalPath}
                showOverlay={showSignalFlow}
                onToggleOverlay={toggleSignalFlow}
              />
            )}

            {mode === 'section' && (
              <SectionView
                sections={sectionExplanations}
                expandedSections={expandedSections}
                onToggleSection={toggleSection}
              />
            )}
          </div>

          {/* Close button at bottom */}
          <div className="p-2 border-t border-[#2a2a3a]">
            <button
              onClick={toggleEnabled}
              className="w-full flex items-center justify-center gap-2 px-3 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-[#1a1a2e] rounded transition-colors"
            >
              <ChevronUp size={14} />
              Collapse
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ComponentExplanationView({
  explanation,
  selectedComponent,
}: {
  explanation: ComponentExplanation | null;
  selectedComponent?: CircuitComponent;
}) {
  if (!selectedComponent) {
    return (
      <div className="text-center text-gray-500 py-4">
        <Info size={24} className="mx-auto mb-2 opacity-50" />
        <p className="text-xs">Select a component to see its explanation</p>
      </div>
    );
  }

  if (!explanation) {
    return (
      <div className="text-center text-gray-500 py-4">
        <p className="text-xs">Loading explanation...</p>
      </div>
    );
  }

  const definition = COMPONENT_DEFINITIONS[explanation.type];

  return (
    <div className="space-y-4">
      {/* Component header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-white font-medium">{definition?.name}</span>
          {explanation.componentRef && (
            <span className="px-1.5 py-0.5 text-xs bg-[#252538] text-gray-400 rounded font-mono">
              {explanation.componentRef}
            </span>
          )}
        </div>
        {selectedComponent.value && (
          <div className="text-sm text-[#4ecca3] font-mono">
            {formatValue(selectedComponent.value, selectedComponent.unit)}
          </div>
        )}
      </div>

      {/* Role */}
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Role</div>
        <p className="text-sm text-gray-300">{explanation.role}</p>
      </div>

      {/* Context explanation */}
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          In This Circuit
        </div>
        <p className="text-sm text-gray-300">{explanation.contextExplanation}</p>
      </div>

      {/* Value explanation */}
      {explanation.valueExplanation && (
        <div>
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
            Value Effect
          </div>
          <p className="text-sm text-gray-300">{explanation.valueExplanation}</p>
        </div>
      )}

      {/* Modification suggestions */}
      {explanation.modificationSuggestions.length > 0 && (
        <div>
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
            Mod Ideas
          </div>
          <div className="space-y-1">
            {explanation.modificationSuggestions.map((suggestion, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-xs text-gray-400"
              >
                <Lightbulb size={12} className="text-[#f39c12] mt-0.5 flex-shrink-0" />
                <span>{suggestion}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SignalFlowView({
  signalPath,
  showOverlay,
  onToggleOverlay,
}: {
  signalPath: SignalPath | null;
  showOverlay: boolean;
  onToggleOverlay: () => void;
}) {
  if (!signalPath) {
    return (
      <div className="text-center text-gray-500 py-4">
        <Zap size={24} className="mx-auto mb-2 opacity-50" />
        <p className="text-xs">No signal path detected</p>
        <p className="text-xs mt-1">Connect input to output to trace signal</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Overlay toggle */}
      <button
        onClick={onToggleOverlay}
        className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded text-sm transition-colors ${
          showOverlay
            ? 'bg-[#4ecca3] text-black'
            : 'bg-[#1a1a2e] text-gray-400 hover:text-white'
        }`}
      >
        {showOverlay ? <Eye size={16} /> : <EyeOff size={16} />}
        {showOverlay ? 'Hide Signal Flow' : 'Show Signal Flow'}
      </button>

      {/* Signal path stages */}
      <div className="space-y-2">
        <div className="text-xs text-gray-500 uppercase tracking-wider">
          {signalPath.totalStages} Stages
        </div>
        {signalPath.stages.map((stage, index) => (
          <div key={stage.componentId} className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-[#4ecca3] text-black text-xs flex items-center justify-center flex-shrink-0 font-bold">
              {stage.stageNumber}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm text-white truncate">
                  {stage.componentRef || `Stage ${stage.stageNumber}`}
                </span>
              </div>
              <p className="text-xs text-gray-400">{stage.signalEffect}</p>
            </div>
            {index < signalPath.stages.length - 1 && (
              <ArrowRight size={14} className="text-gray-600 flex-shrink-0 mt-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionView({
  sections,
  expandedSections,
  onToggleSection,
}: {
  sections: SectionExplanation[];
  expandedSections: Set<string>;
  onToggleSection: (id: string) => void;
}) {
  if (sections.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        <Settings size={24} className="mx-auto mb-2 opacity-50" />
        <p className="text-xs">No sections defined</p>
        <p className="text-xs mt-1">Load a pedal circuit to see sections</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {sections.map((section) => {
        const isExpanded = expandedSections.has(section.sectionId);

        return (
          <div key={section.sectionId} className="bg-[#1a1a2e] rounded-lg overflow-hidden">
            <button
              onClick={() => onToggleSection(section.sectionId)}
              className="w-full flex items-center gap-2 p-3 text-left hover:bg-[#252538] transition-colors"
            >
              {isExpanded ? (
                <ChevronDown size={14} className="text-gray-500" />
              ) : (
                <ChevronRight size={14} className="text-gray-500" />
              )}
              <span className="text-sm text-white flex-1">{section.name}</span>
              <span className="text-xs text-gray-500 capitalize">{section.role}</span>
            </button>

            {isExpanded && (
              <div className="px-3 pb-3 pt-0 space-y-2 border-t border-[#2a2a3a]">
                <p className="text-xs text-gray-400 mt-2">{section.howItWorks}</p>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Sound Impact:</div>
                  <p className="text-xs text-[#4ecca3]">{section.sonicContribution}</p>
                </div>
                {section.keyComponents.length > 0 && (
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Components:</div>
                    <div className="flex flex-wrap gap-1">
                      {section.keyComponents.map((ref) => (
                        <span
                          key={ref}
                          className="px-1.5 py-0.5 text-xs bg-[#252538] text-gray-400 rounded font-mono"
                        >
                          {ref}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
