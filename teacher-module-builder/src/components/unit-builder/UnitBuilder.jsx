import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useUnitStore from '../../hooks/useUnitStore';
import { useUnit } from '../../hooks/useUnits';
import { useAuth } from '../../contexts/AuthContext';
import WizardProgress from './WizardProgress';
import Step1BasicInfo from './steps/Step1BasicInfo';
import Step2Objectives from './steps/Step2Objectives';
import Step3Phases from './steps/Step3Phases';
import Step4Lessons from './steps/Step4Lessons';
import Step5Review from './steps/Step5Review';
import { ArrowLeft, ArrowRight, Save, Loader2, CheckCircle } from 'lucide-react';

function UnitBuilder() {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [saveStatus, setSaveStatus] = useState(null); // null, 'saving', 'saved', 'error'

  const {
    currentStep,
    totalSteps,
    currentUnit,
    nextStep,
    prevStep,
    resetUnit,
    loadUnit
  } = useUnitStore();

  // Firestore integration
  const { unit: firestoreUnit, lessons: firestoreLessons, loading, saving, save, publish } = useUnit(unitId);

  // Load existing unit from Firestore
  useEffect(() => {
    if (unitId === 'new' || !unitId) {
      resetUnit();
    } else if (firestoreUnit && !loading) {
      loadUnit({
        ...firestoreUnit,
        lessons: firestoreLessons || []
      });
    }
  }, [unitId, firestoreUnit, firestoreLessons, loading]);

  // Auto-save functionality (debounced)
  useEffect(() => {
    if (!user || unitId === 'new') return;

    const timeoutId = setTimeout(() => {
      // Auto-save only if we have an existing unit
      if (unitId && unitId !== 'new' && currentUnit.title) {
        handleSave(true);
      }
    }, 5000); // Auto-save after 5 seconds of inactivity

    return () => clearTimeout(timeoutId);
  }, [currentUnit]);

  const handleSave = async (isAutoSave = false) => {
    if (!user) {
      alert('Please sign in to save');
      return;
    }

    try {
      setSaveStatus('saving');
      const savedId = await save(currentUnit, currentUnit.lessons || []);

      setSaveStatus('saved');
      setTimeout(() => setSaveStatus(null), 2000);

      // If this was a new unit, redirect to the edit URL
      if (unitId === 'new' && savedId) {
        navigate(`/unit/${savedId}`, { replace: true });
      }
    } catch (err) {
      console.error('Save error:', err);
      setSaveStatus('error');
      if (!isAutoSave) {
        alert('Failed to save: ' + err.message);
      }
    }
  };

  const handlePublish = async () => {
    if (!user) {
      alert('Please sign in to publish');
      return;
    }

    try {
      // First save
      const savedId = await save(currentUnit, currentUnit.lessons || []);

      // Then publish with the saved ID
      await publish(savedId);

      alert('Unit published successfully!');
      navigate('/');
    } catch (err) {
      console.error('Publish error:', err);
      alert('Failed to publish: ' + err.message);
    }
  };

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
        return true;
      case 5:
        return true;
      default:
        return true;
    }
  };

  if (loading && unitId !== 'new') {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-accent-purple animate-spin mx-auto mb-4" />
          <p className="text-text-muted">Loading unit...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-dark-surface border-b border-dark-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-muted">
                Step {currentStep} of {totalSteps}
                {currentUnit.title && (
                  <span className="ml-2">• {currentUnit.title}</span>
                )}
              </p>
              <h1 className="text-xl font-semibold text-text-primary">
                {stepTitles[currentStep - 1]}
              </h1>
            </div>
            <button
              onClick={() => handleSave(false)}
              disabled={saving || saveStatus === 'saving'}
              className="btn btn-secondary flex items-center gap-2"
            >
              {saveStatus === 'saving' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : saveStatus === 'saved' ? (
                <>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Saved
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Draft
                </>
              )}
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
                onClick={handlePublish}
                disabled={saving}
                className="btn btn-primary flex items-center gap-2"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  <>
                    Publish Unit
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnitBuilder;
