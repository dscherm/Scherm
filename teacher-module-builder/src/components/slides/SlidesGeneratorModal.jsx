import { useState } from 'react';
import { X, Presentation, Loader2, CheckCircle, ExternalLink, AlertCircle } from 'lucide-react';
import { useSlides } from '../../hooks/useSlides';

function SlidesGeneratorModal({ isOpen, onClose, lesson, unit }) {
  const { generateSlides, isGenerating, error, generatedSlides, clearError, clearGeneratedSlides } = useSlides();
  const [slideOptions, setSlideOptions] = useState({
    includeMindsOn: true,
    includeActivities: true,
    includeTeamRoles: lesson?.teamConfig?.mode === 'teams',
    includeShareOut: true,
    includeExitTicket: true,
  });

  if (!isOpen) return null;

  const handleGenerate = async () => {
    // Build filtered lesson based on options
    const filteredLesson = {
      ...lesson,
      mindsOn: slideOptions.includeMindsOn ? lesson.mindsOn : null,
      activities: slideOptions.includeActivities ? lesson.activities : [],
      teamConfig: slideOptions.includeTeamRoles ? lesson.teamConfig : { mode: 'solo' },
      shareOut: slideOptions.includeShareOut ? lesson.shareOut : null,
      exitTicket: slideOptions.includeExitTicket ? lesson.exitTicket : null,
    };

    await generateSlides(filteredLesson, unit);
  };

  const handleClose = () => {
    clearError();
    clearGeneratedSlides();
    onClose();
  };

  const slideCount = [
    1, // Title slide
    slideOptions.includeMindsOn && lesson?.mindsOn?.prompt ? 1 : 0,
    slideOptions.includeActivities ? (lesson?.activities?.length || 0) : 0,
    slideOptions.includeTeamRoles && lesson?.teamConfig?.mode === 'teams' ? 1 : 0,
    slideOptions.includeShareOut && lesson?.shareOut?.prompts ? 1 : 0,
    slideOptions.includeExitTicket && lesson?.exitTicket?.prompt ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-dark-surface border border-dark-border rounded-xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-dark-border">
          <div className="flex items-center gap-3">
            <Presentation className="w-5 h-5 text-accent-purple" />
            <h2 className="text-lg font-semibold text-text-primary">Generate Google Slides</h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-text-muted hover:text-text-primary rounded-lg hover:bg-dark-hover"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Success State */}
          {generatedSlides && (
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-medium text-green-400">Slides Generated!</h3>
                  <p className="text-sm text-text-muted mt-1">
                    Your presentation has been created in Google Slides.
                  </p>
                  <a
                    href={generatedSlides.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in Google Slides
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-red-400">Generation Failed</h3>
                  <p className="text-sm text-text-muted mt-1">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Options */}
          {!generatedSlides && (
            <>
              <div>
                <label className="label">Include Slides For</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 bg-dark-bg rounded-lg cursor-pointer hover:bg-dark-hover">
                    <input
                      type="checkbox"
                      checked={slideOptions.includeMindsOn}
                      onChange={(e) => setSlideOptions({ ...slideOptions, includeMindsOn: e.target.checked })}
                      className="rounded border-dark-border"
                      disabled={!lesson?.mindsOn?.prompt}
                    />
                    <div className="flex-1">
                      <span className="text-text-primary">🧠 Minds On</span>
                      {!lesson?.mindsOn?.prompt && (
                        <span className="text-xs text-text-muted ml-2">(no content)</span>
                      )}
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 bg-dark-bg rounded-lg cursor-pointer hover:bg-dark-hover">
                    <input
                      type="checkbox"
                      checked={slideOptions.includeActivities}
                      onChange={(e) => setSlideOptions({ ...slideOptions, includeActivities: e.target.checked })}
                      className="rounded border-dark-border"
                      disabled={!lesson?.activities?.length}
                    />
                    <div className="flex-1">
                      <span className="text-text-primary">📋 Activities</span>
                      <span className="text-xs text-text-muted ml-2">
                        ({lesson?.activities?.length || 0} slides)
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 bg-dark-bg rounded-lg cursor-pointer hover:bg-dark-hover">
                    <input
                      type="checkbox"
                      checked={slideOptions.includeTeamRoles}
                      onChange={(e) => setSlideOptions({ ...slideOptions, includeTeamRoles: e.target.checked })}
                      className="rounded border-dark-border"
                      disabled={lesson?.teamConfig?.mode !== 'teams'}
                    />
                    <div className="flex-1">
                      <span className="text-text-primary">👥 Team Roles</span>
                      {lesson?.teamConfig?.mode !== 'teams' && (
                        <span className="text-xs text-text-muted ml-2">(teams not enabled)</span>
                      )}
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 bg-dark-bg rounded-lg cursor-pointer hover:bg-dark-hover">
                    <input
                      type="checkbox"
                      checked={slideOptions.includeShareOut}
                      onChange={(e) => setSlideOptions({ ...slideOptions, includeShareOut: e.target.checked })}
                      className="rounded border-dark-border"
                      disabled={!lesson?.shareOut?.prompts}
                    />
                    <div className="flex-1">
                      <span className="text-text-primary">🎤 Share Out</span>
                      {!lesson?.shareOut?.prompts && (
                        <span className="text-xs text-text-muted ml-2">(no content)</span>
                      )}
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 bg-dark-bg rounded-lg cursor-pointer hover:bg-dark-hover">
                    <input
                      type="checkbox"
                      checked={slideOptions.includeExitTicket}
                      onChange={(e) => setSlideOptions({ ...slideOptions, includeExitTicket: e.target.checked })}
                      className="rounded border-dark-border"
                      disabled={!lesson?.exitTicket?.prompt}
                    />
                    <div className="flex-1">
                      <span className="text-text-primary">✅ Exit Ticket</span>
                      {!lesson?.exitTicket?.prompt && (
                        <span className="text-xs text-text-muted ml-2">(no content)</span>
                      )}
                    </div>
                  </label>
                </div>
              </div>

              <div className="p-3 bg-dark-bg rounded-lg">
                <p className="text-sm text-text-muted">
                  This will create a new Google Slides presentation with <strong className="text-text-primary">{slideCount} slides</strong>.
                  You can edit the slides after generation.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-dark-border">
          {generatedSlides ? (
            <button onClick={handleClose} className="btn btn-primary">
              Done
            </button>
          ) : (
            <>
              <button onClick={handleClose} className="btn btn-secondary">
                Cancel
              </button>
              <button
                onClick={handleGenerate}
                disabled={isGenerating || slideCount === 0}
                className="btn btn-primary flex items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Presentation className="w-4 h-4" />
                    Generate Slides
                  </>
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SlidesGeneratorModal;
