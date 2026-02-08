import { Check } from 'lucide-react';

const STEP_COLOR_MAP = {
  'pbl-cyan': {
    bg: 'bg-pbl-cyan',
    ring: 'ring-pbl-cyan/30',
  },
  'pbl-purple': {
    bg: 'bg-pbl-purple',
    ring: 'ring-pbl-purple/30',
  },
  'pbl-orange': {
    bg: 'bg-pbl-orange',
    ring: 'ring-pbl-orange/30',
  },
  'pbl-yellow': {
    bg: 'bg-pbl-yellow',
    ring: 'ring-pbl-yellow/30',
  },
  'pbl-green': {
    bg: 'bg-pbl-green',
    ring: 'ring-pbl-green/30',
  },
};

function PBLWizardProgress({ currentStep, totalSteps, steps }) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const colorClasses = STEP_COLOR_MAP[step.color] || STEP_COLOR_MAP['pbl-cyan'];
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;

          return (
            <div key={step.number} className="flex items-center flex-1">
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm transition-all duration-300
                    ${isCompleted
                      ? 'bg-pbl-green text-dark-bg'
                      : isCurrent
                        ? `${colorClasses.bg} text-dark-bg ring-4 ${colorClasses.ring}`
                        : 'bg-dark-border text-text-muted'
                    }
                  `}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-base">{step.icon}</span>
                  )}
                </div>
                <span
                  className={`
                    mt-2 text-xs font-medium
                    ${step.number <= currentStep ? 'text-text-primary' : 'text-text-muted'}
                  `}
                >
                  {step.name}
                </span>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-2 relative">
                  {/* Background line */}
                  <div className="h-0.5 bg-dark-border" />
                  {/* Progress line */}
                  <div
                    className="absolute inset-y-0 left-0 h-0.5 transition-all duration-500"
                    style={{
                      width: step.number < currentStep ? '100%' : '0%',
                      background: 'linear-gradient(90deg, #26de81 0%, #00d9ff 100%)',
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PBLWizardProgress;
