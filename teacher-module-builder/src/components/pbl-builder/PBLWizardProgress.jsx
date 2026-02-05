import { Check } from 'lucide-react';

function PBLWizardProgress({ currentStep, totalSteps, steps }) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            {/* Step indicator */}
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm transition-all duration-300
                  ${
                    step.number < currentStep
                      ? 'bg-pbl-green text-dark-bg'
                      : step.number === currentStep
                      ? 'text-dark-bg ring-4 ring-opacity-30'
                      : 'bg-dark-border text-text-muted'
                  }
                `}
                style={{
                  backgroundColor: step.number === currentStep
                    ? getStepColor(step.color)
                    : step.number < currentStep
                    ? '#26de81'
                    : undefined,
                  ringColor: step.number === currentStep
                    ? getStepColor(step.color)
                    : undefined,
                }}
              >
                {step.number < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-base">{step.icon}</span>
                )}
              </div>
              <span
                className={`
                  mt-2 text-xs font-medium
                  ${
                    step.number <= currentStep
                      ? 'text-text-primary'
                      : 'text-text-muted'
                  }
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
        ))}
      </div>
    </div>
  );
}

function getStepColor(colorClass) {
  const colors = {
    'pbl-cyan': '#00d9ff',
    'pbl-purple': '#a55eea',
    'pbl-orange': '#ff6b6b',
    'pbl-yellow': '#feca57',
    'pbl-green': '#26de81',
    'pbl-pink': '#fd79a8',
  };
  return colors[colorClass] || '#00d9ff';
}

export default PBLWizardProgress;
