import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePBLStore from '../../hooks/usePBLStore';
import { useUnit } from '../../hooks/useUnits';
import { useAuth } from '../../contexts/AuthContext';
import PBLWizardProgress from './PBLWizardProgress';
import Step1Destination from './steps/Step1Destination';
import Step2Launch from './steps/Step2Launch';
import Step3Milestones from './steps/Step3Milestones';
import Step4DailyPlanning from './steps/Step4DailyPlanning';
import Step5Review from './steps/Step5Review';
import ProtocolSidebar from './ProtocolSidebar';
import { ArrowLeft, ArrowRight, Save, Loader2, CheckCircle, BookOpen } from 'lucide-react';

function PBLBuilder() {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [saveStatus, setSaveStatus] = useState(null);
  const [showProtocols, setShowProtocols] = useState(false);

  const loadedForUnitId = useRef(null);
  const justCreatedUnitId = useRef(null);

  const {
    currentStep,
    totalSteps,
    currentUnit,
    nextStep,
    prevStep,
    resetUnit,
    loadUnit,
    isStep1Complete,
    isStep2Complete,
    isStep3Complete,
    isStep4Complete,
  } = usePBLStore();

  // Firestore integration - treat PBL units the same way
  const { unit: firestoreUnit, loading, saving, save, publish } = useUnit(unitId);

  // Load existing unit from Firestore
  useEffect(() => {
    if (loadedForUnitId.current === unitId) return;

    if (unitId === 'new' || !unitId) {
      resetUnit();
      loadedForUnitId.current = unitId;
    } else if (firestoreUnit && !loading) {
      if (justCreatedUnitId.current === unitId) {
        loadedForUnitId.current = unitId;
        justCreatedUnitId.current = null;
      } else {
        loadUnit(firestoreUnit);
        loadedForUnitId.current = unitId;
      }
    }
  }, [unitId, firestoreUnit, loading]);

  // Auto-save functionality
  useEffect(() => {
    if (!user || unitId === 'new') return;

    const timeoutId = setTimeout(() => {
      if (unitId && unitId !== 'new' && currentUnit.title) {
        handleSave(true);
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [currentUnit]);

  const handleSave = async (isAutoSave = false) => {
    if (!user) {
      alert('Please sign in to save');
      return;
    }

    try {
      setSaveStatus('saving');
      // Save the PBL unit with unitType field
      const unitData = {
        ...currentUnit,
        unitType: 'pbl',
      };
      const savedId = await save(unitData, []);

      setSaveStatus('saved');
      setTimeout(() => setSaveStatus(null), 2000);

      if (unitId === 'new' && savedId) {
        justCreatedUnitId.current = savedId;
        navigate(`/pbl/${savedId}`, { replace: true });
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
      const unitData = {
        ...currentUnit,
        unitType: 'pbl',
      };
      const savedId = await save(unitData, []);
      await publish(savedId);
      alert('PBL Unit published successfully!');
      navigate('/');
    } catch (err) {
      console.error('Publish error:', err);
      alert('Failed to publish: ' + err.message);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Destination />;
      case 2:
        return <Step2Launch />;
      case 3:
        return <Step3Milestones />;
      case 4:
        return <Step4DailyPlanning />;
      case 5:
        return <Step5Review />;
      default:
        return <Step1Destination />;
    }
  };

  const stepConfig = [
    { number: 1, name: 'Destination', subtitle: 'Final Project & Skills', icon: '🎯', color: 'pbl-cyan' },
    { number: 2, name: 'Launch', subtitle: 'Entry Event & K/NTK', icon: '🚀', color: 'pbl-purple' },
    { number: 3, name: 'Milestones', subtitle: '3 Checkpoints', icon: '🏔️', color: 'pbl-orange' },
    { number: 4, name: 'Daily Planning', subtitle: 'Mini-lessons & Activities', icon: '📅', color: 'pbl-yellow' },
    { number: 5, name: 'Review', subtitle: 'Timeline & Publish', icon: '✨', color: 'pbl-green' },
  ];

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return isStep1Complete();
      case 2:
        return isStep2Complete();
      case 3:
        return isStep3Complete();
      case 4:
        return true; // Optional content
      case 5:
        return true;
      default:
        return true;
    }
  };

  const getProtocolContext = () => {
    switch (currentStep) {
      case 1:
        return 'destination';
      case 2:
        return 'launch';
      case 3:
        return 'milestone';
      case 4:
        return 'milestone';
      case 5:
        return 'final';
      default:
        return 'launch';
    }
  };

  if (loading && unitId !== 'new') {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-pbl-cyan animate-spin mx-auto mb-4" />
          <p className="text-text-muted">Loading PBL unit...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-dark-surface border-b border-dark-border">
          <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm text-text-muted mb-1">
                  <span className="px-2 py-0.5 rounded bg-pbl-cyan/20 text-pbl-cyan text-xs font-medium">
                    PBL UNIT
                  </span>
                  <span>Step {currentStep} of {totalSteps}</span>
                  {currentUnit.title && (
                    <span>• {currentUnit.title}</span>
                  )}
                </div>
                <h1 className="text-xl font-semibold text-text-primary flex items-center gap-2">
                  <span>{stepConfig[currentStep - 1].icon}</span>
                  {stepConfig[currentStep - 1].name}
                  <span className="text-sm font-normal text-text-muted">
                    — {stepConfig[currentStep - 1].subtitle}
                  </span>
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowProtocols(!showProtocols)}
                  className={`btn ${showProtocols ? 'btn-primary' : 'btn-secondary'} flex items-center gap-2`}
                >
                  <BookOpen className="w-4 h-4" />
                  Protocols
                </button>
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
                      <CheckCircle className="w-4 h-4 text-pbl-green" />
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
            </div>

            {/* Progress */}
            <PBLWizardProgress
              currentStep={currentStep}
              totalSteps={totalSteps}
              steps={stepConfig}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-5xl mx-auto px-6 py-8 w-full">
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
                  style={{ backgroundColor: '#00d9ff' }}
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handlePublish}
                  disabled={saving}
                  className="btn flex items-center gap-2"
                  style={{ backgroundColor: '#26de81' }}
                >
                  {saving ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Publishing...
                    </>
                  ) : (
                    <>
                      Publish PBL Unit
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Protocol Sidebar */}
      {showProtocols && (
        <ProtocolSidebar
          context={getProtocolContext()}
          onClose={() => setShowProtocols(false)}
        />
      )}
    </div>
  );
}

export default PBLBuilder;
