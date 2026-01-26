import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useUnitStore from '../../../hooks/useUnitStore';
import {
  BookOpen,
  Target,
  Clock,
  FileText,
  CheckCircle,
  AlertCircle,
  Download,
  Share2,
  Presentation,
  ExternalLink,
  Edit2
} from 'lucide-react';

const PHASES = [
  { id: 'engage', name: 'Engage', icon: '🧠', color: 'yellow' },
  { id: 'explore', name: 'Explore', icon: '🔍', color: 'blue' },
  { id: 'explain', name: 'Explain', icon: '📖', color: 'purple' },
  { id: 'elaborate', name: 'Elaborate', icon: '🚀', color: 'green' },
  { id: 'evaluate', name: 'Evaluate', icon: '📊', color: 'red' },
];

function Step5Review() {
  const { unitId } = useParams();
  const { currentUnit } = useUnitStore();
  const [generateSlides, setGenerateSlides] = useState(true);
  const [generatePrintables, setGeneratePrintables] = useState(true);

  // Validation checks
  const checks = [
    {
      label: 'Unit has a title',
      passed: currentUnit.title.trim().length > 0,
    },
    {
      label: 'At least one learning objective',
      passed: currentUnit.objectives.length > 0,
    },
    {
      label: 'Phase durations are set',
      passed: currentUnit.duration.totalDays > 0,
    },
    {
      label: 'At least one lesson created',
      passed: currentUnit.lessons.length > 0,
    },
  ];

  const allChecksPassed = checks.every((c) => c.passed);
  const lessonsCount = currentUnit.lessons.length;
  const activitiesCount = currentUnit.lessons.reduce(
    (sum, l) => sum + (l.activities?.length || 0),
    0
  );

  return (
    <div className="space-y-8">
      {/* Unit Summary Card */}
      <div className="card">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-1">
              {currentUnit.title || 'Untitled Unit'}
            </h2>
            <p className="text-text-muted">
              {currentUnit.subject} • {currentUnit.gradeLevel} • {currentUnit.duration.totalDays} days
            </p>
          </div>
          {allChecksPassed ? (
            <span className="badge badge-green flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Ready to publish
            </span>
          ) : (
            <span className="badge badge-yellow flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              Incomplete
            </span>
          )}
        </div>

        {/* Essential Question */}
        {currentUnit.essentialQuestion && (
          <div className="p-4 bg-dark-bg rounded-lg mb-6">
            <p className="text-sm text-text-muted mb-1">Essential Question</p>
            <p className="text-text-primary italic">"{currentUnit.essentialQuestion}"</p>
          </div>
        )}

        {/* Stats grid */}
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center p-4 bg-dark-bg rounded-lg">
            <BookOpen className="w-6 h-6 text-accent-purple mx-auto mb-2" />
            <div className="text-2xl font-bold text-text-primary">{lessonsCount}</div>
            <div className="text-xs text-text-muted">Lessons</div>
          </div>
          <div className="text-center p-4 bg-dark-bg rounded-lg">
            <Target className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-text-primary">
              {currentUnit.objectives.length}
            </div>
            <div className="text-xs text-text-muted">Objectives</div>
          </div>
          <div className="text-center p-4 bg-dark-bg rounded-lg">
            <FileText className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-text-primary">
              {currentUnit.vocabulary.length}
            </div>
            <div className="text-xs text-text-muted">Vocabulary</div>
          </div>
          <div className="text-center p-4 bg-dark-bg rounded-lg">
            <Clock className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-text-primary">
              {currentUnit.duration.totalDays}
            </div>
            <div className="text-xs text-text-muted">Days</div>
          </div>
        </div>
      </div>

      {/* Validation Checklist */}
      <div className="card">
        <h3 className="font-semibold text-text-primary mb-4">Pre-Publish Checklist</h3>
        <div className="space-y-3">
          {checks.map((check, index) => (
            <div key={index} className="flex items-center gap-3">
              {check.passed ? (
                <CheckCircle className="w-5 h-5 text-green-400" />
              ) : (
                <AlertCircle className="w-5 h-5 text-yellow-400" />
              )}
              <span className={check.passed ? 'text-text-primary' : 'text-text-muted'}>
                {check.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 5E Phase Overview */}
      <div className="card">
        <h3 className="font-semibold text-text-primary mb-4">5E Phase Distribution</h3>
        <div className="space-y-3">
          {PHASES.map((phase) => {
            const phaseLessons = currentUnit.lessons.filter((l) => l.phase === phase.id);
            const phaseDays = currentUnit.duration[phase.id];

            return (
              <div key={phase.id} className="flex items-center gap-4">
                <span className="text-xl">{phase.icon}</span>
                <span className={`w-20 font-medium text-${phase.color}-400`}>{phase.name}</span>
                <div className="flex-1 h-2 bg-dark-border rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-${phase.color}-400`}
                    style={{
                      width: phaseDays > 0
                        ? `${(phaseLessons.length / phaseDays) * 100}%`
                        : '0%'
                    }}
                  />
                </div>
                <span className="text-sm text-text-muted w-16 text-right">
                  {phaseLessons.length}/{phaseDays} days
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lessons Overview */}
      {currentUnit.lessons.length > 0 && (
        <div className="card">
          <h3 className="font-semibold text-text-primary mb-4">
            Lessons & Slides ({currentUnit.lessons.length} lessons, {activitiesCount} activities)
          </h3>
          <p className="text-sm text-text-muted mb-4">
            Click on a lesson to add activities or generate Google Slides
          </p>
          <div className="space-y-3">
            {PHASES.map((phase) => {
              const phaseLessons = currentUnit.lessons.filter((l) => l.phase === phase.id);
              if (phaseLessons.length === 0) return null;

              return (
                <div key={phase.id}>
                  <h4 className={`text-sm font-medium text-${phase.color}-400 mb-2 flex items-center gap-2`}>
                    <span>{phase.icon}</span> {phase.name}
                  </h4>
                  <div className="space-y-2 ml-6">
                    {phaseLessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        to={`/unit/${unitId || 'new'}/lesson/${lesson.id}`}
                        className="flex items-center justify-between p-3 bg-dark-bg rounded-lg hover:bg-dark-hover transition-colors group"
                      >
                        <div>
                          <h5 className="font-medium text-text-primary">{lesson.title}</h5>
                          <p className="text-xs text-text-muted">
                            Day {lesson.dayNumber}
                            {lesson.activities?.length > 0 ? (
                              <span className="text-green-400"> • {lesson.activities.length} activities</span>
                            ) : (
                              <span className="text-yellow-400"> • No activities yet</span>
                            )}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-text-muted group-hover:text-accent-purple">
                          <Presentation className="w-4 h-4" />
                          <span className="text-xs">Edit & Generate Slides</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Export Options - for future use */}
      {false && (
        <div className="card">
          <h3 className="font-semibold text-text-primary mb-4">Export Options</h3>
          <div className="space-y-4">
            <label className="flex items-center gap-3 p-4 bg-dark-bg rounded-lg cursor-pointer hover:bg-dark-hover transition-colors">
              <input
                type="checkbox"
                checked={generateSlides}
                onChange={(e) => setGenerateSlides(e.target.checked)}
                className="w-5 h-5 rounded border-dark-border text-accent-purple focus:ring-accent-purple"
              />
              <Presentation className="w-5 h-5 text-text-muted" />
              <div>
                <p className="font-medium text-text-primary">Generate Google Slides</p>
                <p className="text-sm text-text-muted">
                  Create slide decks for each lesson automatically
                </p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-4 bg-dark-bg rounded-lg cursor-pointer hover:bg-dark-hover transition-colors">
              <input
                type="checkbox"
                checked={generatePrintables}
                onChange={(e) => setGeneratePrintables(e.target.checked)}
                className="w-5 h-5 rounded border-dark-border text-accent-purple focus:ring-accent-purple"
              />
              <Download className="w-5 h-5 text-text-muted" />
              <div>
                <p className="font-medium text-text-primary">Generate Printable Materials</p>
                <p className="text-sm text-text-muted">
                  Create PDF packet with worksheets and handouts
                </p>
              </div>
            </label>
          </div>
        </div>
      )}

      {/* Objectives List */}
      {currentUnit.objectives.length > 0 && (
        <div className="card">
          <h3 className="font-semibold text-text-primary mb-4">Learning Objectives</h3>
          <ul className="space-y-2">
            {currentUnit.objectives.map((obj, index) => (
              <li key={index} className="flex items-start gap-3 text-text-secondary">
                <span className="w-6 h-6 bg-accent-purple/20 rounded-full flex items-center justify-center text-xs text-accent-purple font-medium shrink-0">
                  {index + 1}
                </span>
                {obj}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Vocabulary Preview */}
      {currentUnit.vocabulary.length > 0 && (
        <div className="card">
          <h3 className="font-semibold text-text-primary mb-4">
            Key Vocabulary ({currentUnit.vocabulary.length} terms)
          </h3>
          <div className="flex flex-wrap gap-2">
            {currentUnit.vocabulary.map((term) => (
              <span
                key={term.id}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                title={term.definition}
              >
                {term.term}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Step5Review;
