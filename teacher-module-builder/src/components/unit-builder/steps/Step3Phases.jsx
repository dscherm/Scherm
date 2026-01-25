import useUnitStore from '../../../hooks/useUnitStore';
import { Info } from 'lucide-react';

const PHASES = [
  {
    id: 'engage',
    name: 'Engage',
    icon: '🧠',
    color: 'yellow',
    description: 'Hook interest, surface prior knowledge, spark curiosity',
    recommended: 0.2, // 20%
  },
  {
    id: 'explore',
    name: 'Explore',
    icon: '🔍',
    color: 'blue',
    description: 'Hands-on investigation, guided discovery',
    recommended: 0.3, // 30%
  },
  {
    id: 'explain',
    name: 'Explain',
    icon: '📖',
    color: 'purple',
    description: 'Formalize concepts, vocabulary instruction',
    recommended: 0.2, // 20%
  },
  {
    id: 'elaborate',
    name: 'Elaborate',
    icon: '🚀',
    color: 'green',
    description: 'Apply to new contexts, projects',
    recommended: 0.2, // 20%
  },
  {
    id: 'evaluate',
    name: 'Evaluate',
    icon: '📊',
    color: 'red',
    description: 'Demonstrate mastery, reflect on learning',
    recommended: 0.1, // 10%
  },
];

function Step3Phases() {
  const { currentUnit, updateDuration } = useUnitStore();
  const { duration } = currentUnit;

  const totalAllocated = duration.engage + duration.explore + duration.explain +
    duration.elaborate + duration.evaluate;

  const getPhasePercentage = (phase) => {
    return Math.round((duration[phase] / totalAllocated) * 100);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-2">
          Distribute Days Across 5E Phases
        </h2>
        <p className="text-text-muted">
          Allocate your {duration.totalDays} days across the five phases. Research shows keeping
          the recommended proportions leads to better learning outcomes.
        </p>
      </div>

      {/* Total days indicator */}
      <div className="flex items-center justify-between p-4 bg-dark-surface border border-dark-border rounded-lg">
        <span className="text-text-secondary">Total Days Allocated</span>
        <span className={`text-2xl font-bold ${
          totalAllocated === duration.totalDays ? 'text-green-400' : 'text-yellow-400'
        }`}>
          {totalAllocated} / {duration.totalDays}
        </span>
      </div>

      {/* Phase sliders */}
      <div className="space-y-6">
        {PHASES.map((phase) => (
          <div key={phase.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{phase.icon}</span>
                <div>
                  <h3 className={`font-medium text-${phase.color}-400`}>{phase.name}</h3>
                  <p className="text-xs text-text-muted">{phase.description}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-text-primary">
                  {duration[phase.id]}
                </span>
                <span className="text-text-muted ml-1">days</span>
                <span className="text-xs text-text-muted ml-2">
                  ({getPhasePercentage(phase.id)}%)
                </span>
              </div>
            </div>

            {/* Slider */}
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max={Math.min(10, duration.totalDays)}
                value={duration[phase.id]}
                onChange={(e) => updateDuration(phase.id, parseInt(e.target.value))}
                className={`flex-1 h-2 rounded-lg appearance-none cursor-pointer
                  bg-dark-border
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:h-4
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-${phase.color}-400
                  [&::-webkit-slider-thumb]:cursor-pointer
                `}
              />
              <div className="flex gap-1">
                <button
                  onClick={() => updateDuration(phase.id, Math.max(0, duration[phase.id] - 1))}
                  className="w-8 h-8 rounded bg-dark-border hover:bg-dark-hover text-text-primary"
                >
                  -
                </button>
                <button
                  onClick={() => updateDuration(phase.id, duration[phase.id] + 1)}
                  className="w-8 h-8 rounded bg-dark-border hover:bg-dark-hover text-text-primary"
                >
                  +
                </button>
              </div>
            </div>

            {/* Progress bar visualization */}
            <div className="h-2 bg-dark-border rounded-full overflow-hidden">
              <div
                className={`h-full bg-${phase.color}-400 transition-all duration-300`}
                style={{ width: `${getPhasePercentage(phase.id)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-400 mb-1">Research-Based Recommendation</h4>
            <p className="text-sm text-text-secondary">
              According to Bybee et al. (2006), the 5E model works best when:
            </p>
            <ul className="text-sm text-text-muted mt-2 space-y-1">
              <li>• Unit spans 2-3 weeks minimum</li>
              <li>• Explore phase is given adequate time for discovery</li>
              <li>• Phases are not skipped or reordered</li>
              <li>• Each phase has at least 1 full class period</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Visual timeline */}
      <div>
        <h3 className="text-sm font-medium text-text-secondary mb-3">Unit Timeline Preview</h3>
        <div className="flex h-8 rounded-lg overflow-hidden">
          {PHASES.map((phase) => (
            duration[phase.id] > 0 && (
              <div
                key={phase.id}
                className={`bg-${phase.color}-400/60 flex items-center justify-center text-xs font-medium`}
                style={{ width: `${getPhasePercentage(phase.id)}%` }}
                title={`${phase.name}: ${duration[phase.id]} days`}
              >
                {duration[phase.id] >= 2 && phase.icon}
              </div>
            )
          ))}
        </div>
        <div className="flex justify-between text-xs text-text-muted mt-1">
          <span>Day 1</span>
          <span>Day {totalAllocated}</span>
        </div>
      </div>
    </div>
  );
}

export default Step3Phases;
