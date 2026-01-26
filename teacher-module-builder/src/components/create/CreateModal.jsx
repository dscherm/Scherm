import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  X,
  Upload,
  FileText,
  Sparkles,
  PenTool,
  ArrowRight,
  Loader2,
  BookOpen,
  Calendar,
  Lightbulb
} from 'lucide-react';
import useUnitStore from '../../hooks/useUnitStore';

const CREATION_MODES = [
  {
    id: 'topic',
    name: 'Generate from Topic',
    icon: Sparkles,
    color: 'purple',
    description: 'Enter a topic or learning objective and generate a full unit or lesson',
    examples: ['Arrays and Loops in JavaScript', 'Photosynthesis', 'World War II Causes'],
  },
  {
    id: 'upload-curriculum',
    name: 'Upload Curriculum',
    icon: Upload,
    color: 'blue',
    description: 'Upload your scope & sequence, unit plan, or pacing guide',
    accepts: '.pdf,.doc,.docx,.txt',
  },
  {
    id: 'upload-lesson',
    name: 'Upload Lesson',
    icon: FileText,
    color: 'green',
    description: 'Upload an existing lesson plan to enhance with activities',
    accepts: '.pdf,.doc,.docx,.txt',
  },
  {
    id: 'scratch',
    name: 'Build from Scratch',
    icon: PenTool,
    color: 'orange',
    description: 'Start with a blank unit and build it step by step',
  },
];

const OUTPUT_TYPES = [
  { id: 'unit', name: 'Full Unit', icon: Calendar, description: '2-3 weeks, multiple lessons' },
  { id: 'lesson', name: 'Single Lesson', icon: BookOpen, description: 'One class period' },
  { id: 'activity', name: 'Activity Only', icon: Lightbulb, description: 'Quick engagement or practice' },
];

function CreateModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { resetUnit } = useUnitStore();
  const [selectedMode, setSelectedMode] = useState(null);
  const [step, setStep] = useState('mode'); // 'mode', 'configure', 'generating'

  // Form state
  const [topic, setTopic] = useState('');
  const [outputType, setOutputType] = useState('unit');
  const [gradeLevel, setGradeLevel] = useState('');
  const [subject, setSubject] = useState('');
  const [additionalContext, setAdditionalContext] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    if (mode.id === 'scratch') {
      // Go directly to unit builder
      resetUnit();
      navigate('/unit/new');
      onClose();
    } else {
      setStep('configure');
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);

    // TODO: Integrate with AI service to generate content
    // For now, simulate generation and go to unit builder with pre-filled data
    setTimeout(() => {
      resetUnit();
      // In the future, this would pre-fill the unit store with generated content
      navigate('/unit/new');
      onClose();
      setIsGenerating(false);
    }, 1500);
  };

  const handleBack = () => {
    setStep('mode');
    setSelectedMode(null);
    setUploadedFile(null);
  };

  const handleClose = () => {
    setStep('mode');
    setSelectedMode(null);
    setTopic('');
    setUploadedFile(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-dark-surface border border-dark-border rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-dark-border">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">
              {step === 'mode' ? 'Create New' : selectedMode?.name}
            </h2>
            {step === 'configure' && (
              <p className="text-sm text-text-muted">{selectedMode?.description}</p>
            )}
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-text-muted hover:text-text-primary rounded-lg hover:bg-dark-hover"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[70vh]">
          {/* Step 1: Select Mode */}
          {step === 'mode' && (
            <div className="grid grid-cols-2 gap-4">
              {CREATION_MODES.map((mode) => {
                const Icon = mode.icon;
                return (
                  <button
                    key={mode.id}
                    onClick={() => handleModeSelect(mode)}
                    className={`
                      p-4 rounded-lg border text-left transition-all hover:scale-[1.02]
                      border-dark-border hover:border-${mode.color}-400/50
                      hover:bg-${mode.color}-400/5
                    `}
                  >
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center mb-3
                      bg-${mode.color}-400/20 text-${mode.color}-400
                    `}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-medium text-text-primary mb-1">{mode.name}</h3>
                    <p className="text-sm text-text-muted">{mode.description}</p>
                    {mode.examples && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {mode.examples.slice(0, 2).map((ex, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 bg-dark-bg rounded text-text-muted">
                            {ex}
                          </span>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Step 2: Configure */}
          {step === 'configure' && selectedMode && (
            <div className="space-y-6">
              {/* Topic Input (for 'topic' mode) */}
              {selectedMode.id === 'topic' && (
                <>
                  <div>
                    <label className="label">What do you want to teach?</label>
                    <textarea
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="e.g., Arrays and loops in JavaScript, focusing on iteration patterns..."
                      className="input min-h-[100px] resize-none"
                      rows={3}
                    />
                    <p className="text-xs text-text-muted mt-2">
                      Be as specific as you like - include learning objectives, standards, or context
                    </p>
                  </div>

                  <div>
                    <label className="label">What do you want to create?</label>
                    <div className="grid grid-cols-3 gap-3">
                      {OUTPUT_TYPES.map((type) => {
                        const Icon = type.icon;
                        return (
                          <button
                            key={type.id}
                            onClick={() => setOutputType(type.id)}
                            className={`
                              p-3 rounded-lg border text-left transition-all
                              ${outputType === type.id
                                ? 'border-accent-purple bg-accent-purple/10'
                                : 'border-dark-border hover:border-text-muted'
                              }
                            `}
                          >
                            <Icon className="w-4 h-4 text-text-muted mb-2" />
                            <h4 className="font-medium text-text-primary text-sm">{type.name}</h4>
                            <p className="text-xs text-text-muted">{type.description}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {/* File Upload (for upload modes) */}
              {(selectedMode.id === 'upload-curriculum' || selectedMode.id === 'upload-lesson') && (
                <div>
                  <label className="label">Upload your file</label>
                  <div className="border-2 border-dashed border-dark-border rounded-lg p-8 text-center hover:border-text-muted transition-colors">
                    {uploadedFile ? (
                      <div className="space-y-2">
                        <FileText className="w-10 h-10 mx-auto text-accent-purple" />
                        <p className="font-medium text-text-primary">{uploadedFile.name}</p>
                        <p className="text-sm text-text-muted">
                          {(uploadedFile.size / 1024).toFixed(1)} KB
                        </p>
                        <button
                          onClick={() => setUploadedFile(null)}
                          className="text-sm text-red-400 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-10 h-10 mx-auto text-text-muted mb-3" />
                        <p className="text-text-primary mb-1">
                          Drag and drop or click to upload
                        </p>
                        <p className="text-sm text-text-muted">
                          PDF, Word, or text files
                        </p>
                        <input
                          type="file"
                          accept={selectedMode.accepts}
                          onChange={handleFileUpload}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Common Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="input"
                  >
                    <option value="">Select subject...</option>
                    <option value="cs">Computer Science</option>
                    <option value="math">Mathematics</option>
                    <option value="science">Science</option>
                    <option value="ela">English/Language Arts</option>
                    <option value="social">Social Studies</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="label">Grade Level</label>
                  <select
                    value={gradeLevel}
                    onChange={(e) => setGradeLevel(e.target.value)}
                    className="input"
                  >
                    <option value="">Select grade...</option>
                    <option value="k-2">K-2</option>
                    <option value="3-5">3-5</option>
                    <option value="6-8">6-8</option>
                    <option value="9-10">9-10</option>
                    <option value="11-12">11-12</option>
                    <option value="higher-ed">Higher Ed</option>
                  </select>
                </div>
              </div>

              {/* Additional Context */}
              <div>
                <label className="label">Additional Context (optional)</label>
                <textarea
                  value={additionalContext}
                  onChange={(e) => setAdditionalContext(e.target.value)}
                  placeholder="Any specific requirements, standards to address, student needs, time constraints..."
                  className="input resize-none"
                  rows={2}
                />
              </div>
            </div>
          )}

          {/* Generating State */}
          {isGenerating && (
            <div className="py-12 text-center">
              <Loader2 className="w-10 h-10 animate-spin text-accent-purple mx-auto mb-4" />
              <h3 className="font-medium text-text-primary mb-2">Generating your content...</h3>
              <p className="text-sm text-text-muted">
                This usually takes 10-30 seconds
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-dark-border">
          {step === 'configure' ? (
            <>
              <button onClick={handleBack} className="btn btn-secondary">
                Back
              </button>
              <button
                onClick={handleGenerate}
                disabled={
                  isGenerating ||
                  (selectedMode?.id === 'topic' && !topic.trim()) ||
                  ((selectedMode?.id === 'upload-curriculum' || selectedMode?.id === 'upload-lesson') && !uploadedFile)
                }
                className="btn btn-primary flex items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </>
          ) : (
            <div className="w-full text-center text-sm text-text-muted">
              Choose how you want to start
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateModal;
