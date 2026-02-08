import { useState, useMemo } from 'react';
import { RotateCcw, CheckCircle, XCircle, Circle, ChevronRight } from 'lucide-react';
import Modal from '../common/Modal';

function QuizPreview({ activity, onClose }) {
  const { content = {}, config = {} } = activity;
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = useMemo(() => {
    let qs = [...(content.questions || [])];
    if (config.shuffleQuestions) {
      qs = qs.sort(() => Math.random() - 0.5);
    }
    return qs;
  }, [content.questions, config.shuffleQuestions]);

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;

  const setAnswer = (questionId, answer) => {
    if (submitted && !config.allowRetry) return;
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const getScore = () => {
    let correct = 0;
    questions.forEach(q => {
      const userAns = answers[q.id];
      if (q.type === 'multiple_choice') {
        if (userAns === q.correctAnswer) correct++;
      } else if (q.type === 'true_false') {
        if (userAns === q.correctAnswer) correct++;
      } else if (q.type === 'short_answer') {
        const expected = (q.correctAnswer || '').trim().toLowerCase();
        const given = (userAns || '').trim().toLowerCase();
        if (given === expected) correct++;
      }
    });
    return correct;
  };

  const submitQuiz = () => {
    setSubmitted(true);
  };

  const retryQuiz = () => {
    setAnswers({});
    setSubmitted(false);
    setCurrentQuestion(0);
  };

  const score = submitted ? getScore() : 0;
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const passing = config.passingScore || 70;

  const isCorrect = (q) => {
    const userAns = answers[q.id];
    if (q.type === 'multiple_choice') return userAns === q.correctAnswer;
    if (q.type === 'true_false') return userAns === q.correctAnswer;
    if (q.type === 'short_answer') {
      return (userAns || '').trim().toLowerCase() === (q.correctAnswer || '').trim().toLowerCase();
    }
    return false;
  };

  if (totalQuestions === 0) {
    return (
      <Modal isOpen={true} onClose={onClose} title="Quiz Preview" icon="❓" maxWidth="max-w-md">
        <div className="p-8 text-center">
          <p className="text-text-muted mb-4">No questions have been added to this quiz yet.</p>
          <button onClick={onClose} className="btn btn-primary">Close</button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title="Quiz Preview"
      icon="❓"
      maxWidth="max-w-3xl"
      badge={
        !submitted && (
          <span className="text-xs px-2 py-0.5 bg-accent-purple/20 text-accent-purple rounded">
            {answeredCount}/{totalQuestions} answered
          </span>
        )
      }
      headerExtra={
        submitted && config.allowRetry && (
          <button
            onClick={retryQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 text-text-muted hover:text-text-primary text-sm transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Retry
          </button>
        )
      }
    >
      {/* Score Summary */}
      {submitted && (
        <div className={`px-6 py-4 border-b border-dark-border animate-fade-in ${percentage >= passing ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-2xl font-bold ${percentage >= passing ? 'text-green-400' : 'text-red-400'}`}>
                {percentage}%
              </p>
              <p className="text-sm text-text-muted">
                {score}/{totalQuestions} correct
                {percentage >= passing ? ' — Passed!' : ` — Need ${passing}% to pass`}
              </p>
            </div>
            <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center ${
              percentage >= passing ? 'border-green-400' : 'border-red-400'
            }`}>
              {percentage >= passing ? (
                <CheckCircle className="w-8 h-8 text-green-400" />
              ) : (
                <XCircle className="w-8 h-8 text-red-400" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Questions */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {questions.map((q, qIndex) => {
          const userAns = answers[q.id];
          const correct = submitted ? isCorrect(q) : null;
          const options = useMemo(() => {
            if (q.type !== 'multiple_choice') return q.options || [];
            let opts = (q.options || []).map((text, i) => ({ text, index: i }));
            if (config.shuffleOptions && !submitted) {
              opts = opts.sort(() => Math.random() - 0.5);
            }
            return opts;
          }, [q.options, config.shuffleOptions, submitted]);

          return (
            <div
              key={q.id}
              className={`p-4 rounded-lg border ${
                submitted
                  ? correct
                    ? 'border-green-500/30 bg-green-500/5'
                    : 'border-red-500/30 bg-red-500/5'
                  : 'border-dark-border bg-dark-bg'
              }`}
            >
              {/* Question header */}
              <div className="flex items-start gap-3 mb-3">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${
                  submitted
                    ? correct ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    : 'bg-accent-purple/20 text-accent-purple'
                }`}>
                  {qIndex + 1}
                </span>
                <p className="text-text-primary font-medium">{q.question || 'Untitled question'}</p>
              </div>

              {/* Multiple choice */}
              {q.type === 'multiple_choice' && (
                <div className="space-y-2 ml-10">
                  {options.map((opt) => {
                    const isSelected = userAns === opt.index;
                    const isCorrectOpt = submitted && opt.index === q.correctAnswer;
                    return (
                      <button
                        key={opt.index}
                        onClick={() => setAnswer(q.id, opt.index)}
                        disabled={submitted && !config.allowRetry}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg border text-left text-sm transition-colors ${
                          submitted
                            ? isCorrectOpt
                              ? 'border-green-500/50 bg-green-500/10 text-green-300'
                              : isSelected
                                ? 'border-red-500/50 bg-red-500/10 text-red-300'
                                : 'border-dark-border text-text-muted'
                            : isSelected
                              ? 'border-accent-purple bg-accent-purple/10 text-text-primary'
                              : 'border-dark-border text-text-secondary hover:border-text-muted'
                        }`}
                      >
                        {submitted ? (
                          isCorrectOpt ? <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /> :
                          isSelected ? <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" /> :
                          <Circle className="w-4 h-4 text-text-muted flex-shrink-0" />
                        ) : (
                          isSelected
                            ? <CheckCircle className="w-4 h-4 text-accent-purple flex-shrink-0" />
                            : <Circle className="w-4 h-4 text-text-muted flex-shrink-0" />
                        )}
                        {opt.text || `Option ${opt.index + 1}`}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* True/False */}
              {q.type === 'true_false' && (
                <div className="flex gap-3 ml-10">
                  {['true', 'false'].map(val => {
                    const isSelected = userAns === val;
                    const isCorrectVal = submitted && val === q.correctAnswer;
                    return (
                      <button
                        key={val}
                        onClick={() => setAnswer(q.id, val)}
                        disabled={submitted && !config.allowRetry}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-colors ${
                          submitted
                            ? isCorrectVal
                              ? 'border-green-500/50 bg-green-500/10 text-green-300'
                              : isSelected
                                ? 'border-red-500/50 bg-red-500/10 text-red-300'
                                : 'border-dark-border text-text-muted'
                            : isSelected
                              ? 'border-accent-purple bg-accent-purple/10 text-text-primary'
                              : 'border-dark-border text-text-secondary hover:border-text-muted'
                        }`}
                      >
                        {submitted ? (
                          isCorrectVal ? <CheckCircle className="w-4 h-4" /> :
                          isSelected ? <XCircle className="w-4 h-4" /> :
                          <Circle className="w-4 h-4" />
                        ) : (
                          isSelected ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />
                        )}
                        {val.charAt(0).toUpperCase() + val.slice(1)}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Short answer */}
              {q.type === 'short_answer' && (
                <div className="ml-10">
                  <input
                    type="text"
                    value={userAns || ''}
                    onChange={(e) => setAnswer(q.id, e.target.value)}
                    disabled={submitted && !config.allowRetry}
                    placeholder="Type your answer..."
                    className="input w-full"
                  />
                  {submitted && !correct && (
                    <p className="text-xs text-green-400 mt-1">
                      Correct answer: {q.correctAnswer}
                    </p>
                  )}
                </div>
              )}

              {/* Feedback */}
              {submitted && config.showFeedback !== false && q.explanation && (
                <div className="mt-3 ml-10 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-xs font-medium text-blue-400 mb-1">Explanation</p>
                  <p className="text-sm text-text-muted">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      {!submitted && (
        <div className="px-6 py-4 border-t border-dark-border bg-dark-bg/50 flex items-center justify-between">
          <p className="text-sm text-text-muted">
            {totalQuestions - answeredCount} question{totalQuestions - answeredCount !== 1 ? 's' : ''} remaining
          </p>
          <button
            onClick={submitQuiz}
            disabled={answeredCount === 0}
            className="flex items-center gap-2 px-4 py-2 bg-accent-purple hover:bg-accent-purple/80 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Quiz <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </Modal>
  );
}

export default QuizPreview;
