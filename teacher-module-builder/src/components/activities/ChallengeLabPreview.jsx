import { useState } from 'react';
import { Lightbulb, CheckCircle, XCircle, RotateCcw, Send } from 'lucide-react';
import Modal from '../common/Modal';

function ChallengeLabPreview({ activity, onClose }) {
  const { content = {}, config = {} } = activity;
  const [userAnswer, setUserAnswer] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [result, setResult] = useState(null);
  const [revealedHints, setRevealedHints] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const hints = content.hints || [];
  const maxAttempts = config.maxAttempts || 0;

  const checkAnswer = () => {
    const correctAnswer = content.answer || '';
    const alternates = content.alternateAnswers || [];
    const allCorrect = [correctAnswer, ...alternates];
    const caseSensitive = content.caseSensitive || false;

    const normalize = (s) => caseSensitive ? s.trim() : s.trim().toLowerCase();
    const userNormalized = normalize(userAnswer);
    const isCorrect = allCorrect.some(a => normalize(a) === userNormalized);

    setAttempts(prev => prev + 1);
    setResult(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect && config.showExplanation !== false) {
      setShowExplanation(true);
    }
  };

  const retry = () => {
    setUserAnswer('');
    setResult(null);
  };

  const reset = () => {
    setUserAnswer('');
    setAttempts(0);
    setResult(null);
    setRevealedHints(0);
    setShowExplanation(false);
  };

  const isLocked = result === 'correct' || (maxAttempts > 0 && attempts >= maxAttempts);

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title="Challenge Lab Preview"
      icon="🧩"
      headerExtra={
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-1.5 text-text-muted hover:text-text-primary text-sm transition-colors"
        >
          <RotateCcw className="w-4 h-4" /> Reset
        </button>
      }
    >
      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Challenge Prompt */}
        <div className="bg-dark-bg rounded-lg p-4 border border-dark-border">
          <h3 className="text-text-primary font-medium mb-3">Challenge</h3>
          <p className="text-text-secondary whitespace-pre-wrap">{content.prompt || 'No challenge prompt set.'}</p>
        </div>

        {/* Hints */}
        {hints.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-text-secondary">
                Hints ({revealedHints}/{hints.length})
              </span>
              {revealedHints < hints.length && !isLocked && (
                <button
                  onClick={() => setRevealedHints(prev => prev + 1)}
                  className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded hover:bg-yellow-500/30 transition-colors"
                >
                  Reveal Hint
                </button>
              )}
            </div>
            {hints.slice(0, revealedHints).map((hint, i) => (
              <div key={i} className="flex items-start gap-2 pl-6">
                <span className="text-yellow-400 text-sm font-medium mt-0.5">{i + 1}.</span>
                <p className="text-sm text-text-muted">{hint}</p>
              </div>
            ))}
          </div>
        )}

        {/* Answer Input */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-text-secondary">Your Answer</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !isLocked && userAnswer.trim() && checkAnswer()}
              placeholder="Type your answer..."
              className="input flex-1"
              disabled={isLocked}
            />
            {!isLocked && (
              <button
                onClick={checkAnswer}
                disabled={!userAnswer.trim()}
                className="flex items-center gap-1.5 px-4 py-2 bg-accent-purple hover:bg-accent-purple/80 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" /> Submit
              </button>
            )}
          </div>
          {maxAttempts > 0 && (
            <p className="text-xs text-text-muted">
              Attempts: {attempts}/{maxAttempts}
            </p>
          )}
        </div>

        {/* Result Feedback */}
        {result === 'correct' && (
          <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg animate-scale-in">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
            <div>
              <p className="font-medium text-green-400">Correct!</p>
              <p className="text-sm text-green-300/80">Great job solving the challenge.</p>
            </div>
          </div>
        )}

        {result === 'incorrect' && (
          <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg animate-scale-in">
            <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-medium text-red-400">Not quite!</p>
              <p className="text-sm text-red-300/80">
                {maxAttempts > 0 && attempts >= maxAttempts
                  ? `You've used all ${maxAttempts} attempts. The correct answer was: ${content.answer}`
                  : 'Try again, or use a hint if you need help.'
                }
              </p>
            </div>
            {!(maxAttempts > 0 && attempts >= maxAttempts) && (
              <button
                onClick={retry}
                className="px-3 py-1.5 bg-dark-hover text-text-secondary hover:text-text-primary rounded text-sm transition-colors"
              >
                Try Again
              </button>
            )}
          </div>
        )}

        {/* Explanation */}
        {showExplanation && content.explanation && (
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg animate-fade-in">
            <h4 className="font-medium text-blue-400 mb-2">Explanation</h4>
            <p className="text-sm text-text-secondary whitespace-pre-wrap">{content.explanation}</p>
          </div>
        )}

        {/* Show explanation after max attempts */}
        {maxAttempts > 0 && attempts >= maxAttempts && result !== 'correct' && content.explanation && (
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg animate-fade-in">
            <h4 className="font-medium text-blue-400 mb-2">Explanation</h4>
            <p className="text-sm text-text-secondary whitespace-pre-wrap">{content.explanation}</p>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default ChallengeLabPreview;
