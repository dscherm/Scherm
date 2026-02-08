import { Check } from 'lucide-react';

function WizardProgress({ currentStep, totalSteps }) {
  const steps = [
    { number: 1, label: 'Details' },
    { number: 2, label: 'Objectives' },
    { number: 3, label: '5E Phases' },
    { number: 4, label: 'Lessons' },
    { number: 5, label: 'Review' },
  ];

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            {/* Step indicator */}
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm
                  ${
                    step.number < currentStep
                      ? 'bg-accent-purple text-white'
                      : step.number === currentStep
                      ? 'bg-accent-purple text-white ring-4 ring-accent-purple/30'
                      : 'bg-dark-border text-text-muted'
                  }
                `}
              >
                {step.number < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.number
                )}
              </div>
              <span
                className={`
                  mt-2 text-xs
                  ${
                    step.number <= currentStep
                      ? 'text-text-primary'
                      : 'text-text-muted'
                  }
                `}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={`
                  flex-1 h-0.5 mx-2
                  ${
                    step.number < currentStep
                      ? 'bg-accent-purple'
                      : 'bg-dark-border'
                  }
                `}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WizardProgress;
