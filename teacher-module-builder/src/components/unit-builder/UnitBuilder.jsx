import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useUnitStore from '../../hooks/useUnitStore';
import WizardProgress from './WizardProgress';
import Step1BasicInfo from './steps/Step1BasicInfo';
import Step2Objectives from './steps/Step2Objectives';
import Step3Phases from './steps/Step3Phases';
import Step4Lessons from './steps/Step4Lessons';
import Step5Review from './steps/Step5Review';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';

function UnitBuilder() {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const {
    currentStep,
    totalSteps,
    currentUnit,
    nextStep,
    prevStep,
    resetUnit
  } = useUnitStore();

  // Reset on new unit
  useEffect(() => {
    if (!unitId) {
      resetUnit();
    }
    // TODO: Load existing unit if unitId is provided
  }, [unitId]);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1BasicInfo />;
      case 2:
        return <Step2Objectives />;
      case 3:
        return <Step3Phases />;
      case 4:
        return <Step4Lessons />;
      case 5:
        return <Step5Review />;
      default:
        return <Step1BasicInfo />;
    }
  };

  const stepTitles = [
    'Unit Details',
    'Objectives & Vocabulary',
    '5E Phase Planning',
    'Build Lessons',
    'Review & Publish'
  ];

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return currentUnit.title.trim().length > 0;
      case 2:
        return currentUnit.objectives.length > 0;
      case 3:
        return currentUnit.duration.totalDays > 0;
      case 4:
        return true; // Can proceed even without lessons
      case 5:
        return true;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-dark-surface border-b border-dark-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-muted">
                Step {currentStep} of {totalSteps}
              </p>
              <h1 className="text-xl font-semibold text-text-primary">
                {stepTitles[currentStep - 1]}
              </h1>
            </div>
            <button className="btn btn-secondary flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Draft
            </button>
          </div>

          {/* Progress bar */}
          <WizardProgress currentStep={currentStep} totalSteps={totalSteps} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {renderStep()}
      </div>

      {/* Footer Navigation */}
      <div className="sticky bottom-0 bg-dark-surface border-t border-dark-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="btn btn-secondary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="btn btn-ghost"
            >
              Cancel
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className="btn btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  // TODO: Save to Firestore and redirect
                  console.log('Publishing unit:', currentUnit);
                  alert('Unit published! (Firestore integration coming soon)');
                }}
                className="btn btn-primary flex items-center gap-2"
              >
                Publish Unit
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnitBuilder;
