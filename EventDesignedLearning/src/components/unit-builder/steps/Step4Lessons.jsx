import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useUnitStore from '../../../hooks/useUnitStore';
import {
  Plus,
  ChevronDown,
  ChevronRight,
  Edit2,
  Trash2,
  Clock,
  CheckCircle,
  Circle
} from 'lucide-react';

const PHASES = [
  { id: 'engage', name: 'Engage', icon: '🧠', color: 'yellow' },
  { id: 'explore', name: 'Explore', icon: '🔍', color: 'blue' },
  { id: 'explain', name: 'Explain', icon: '📖', color: 'purple' },
  { id: 'elaborate', name: 'Elaborate', icon: '🚀', color: 'green' },
  { id: 'evaluate', name: 'Evaluate', icon: '📊', color: 'red' },
];

function Step4Lessons() {
  const { unitId } = useParams();
  const { currentUnit, addLesson, updateLesson } = useUnitStore();
  const [expandedPhases, setExpandedPhases] = useState(['engage']);
  const [showAddLesson, setShowAddLesson] = useState(null); // phase id
  const [newLessonTitle, setNewLessonTitle] = useState('');

  const togglePhase = (phaseId) => {
    setExpandedPhases((prev) =>
      prev.includes(phaseId)
        ? prev.filter((p) => p !== phaseId)
        : [...prev, phaseId]
    );
  };

  const getLessonsForPhase = (phaseId) => {
    return currentUnit.lessons.filter((lesson) => lesson.phase === phaseId);
  };

  const handleAddLesson = (phaseId) => {
    if (newLessonTitle.trim()) {
      const phaseLessons = getLessonsForPhase(phaseId);
      addLesson({
        phase: phaseId,
        dayNumber: phaseLessons.length + 1,
        title: newLessonTitle.trim(),
        objective: '',
        mindsOn: null,
        activities: [],
        shareOut: null,
        exitTicket: null,
      });
      setNewLessonTitle('');
      setShowAddLesson(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-2">
          Build Your Lessons
        </h2>
        <p className="text-text-muted">
          Create lessons for each phase, then <strong className="text-text-primary">click on a lesson</strong> to add activities and generate slides.
        </p>
      </div>

      {/* Lesson structure preview */}
      <div className="flex items-center gap-2 p-3 bg-dark-surface border border-dark-border rounded-lg text-sm">
        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">🧠 Minds On</span>
        <span className="text-text-muted">→</span>
        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded">💻 Work Time</span>
        <span className="text-text-muted">→</span>
        <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded">🎤 Share Out</span>
      </div>

      {/* Workflow tip */}
      <div className="p-4 bg-accent-purple/10 border border-accent-purple/30 rounded-lg">
        <h4 className="font-medium text-accent-purple mb-1">How it works</h4>
        <ol className="text-sm text-text-muted space-y-1 list-decimal list-inside">
          <li>Create lessons below for each 5E phase</li>
          <li>Click on a lesson to open the <strong className="text-text-primary">Lesson Editor</strong></li>
          <li>Add activities (quizzes, code playgrounds, discussions, etc.)</li>
          <li>Click <strong className="text-text-primary">Generate Slides</strong> to create a Google Slides deck</li>
        </ol>
      </div>

      {/* Phases accordion */}
      <div className="space-y-4">
        {PHASES.map((phase) => {
          const lessons = getLessonsForPhase(phase.id);
          const phaseDays = currentUnit.duration[phase.id];
          const isExpanded = expandedPhases.includes(phase.id);

          return (
            <div
              key={phase.id}
              className={`border rounded-lg overflow-hidden border-${phase.color}-400/30`}
            >
              {/* Phase header */}
              <button
                onClick={() => togglePhase(phase.id)}
                className={`w-full flex items-center justify-between p-4 bg-${phase.color}-400/10 hover:bg-${phase.color}-400/20 transition-colors`}
              >
                <div className="flex items-center gap-3">
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-text-muted" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-text-muted" />
                  )}
                  <span className="text-2xl">{phase.icon}</span>
                  <div className="text-left">
                    <h3 className={`font-semibold text-${phase.color}-400`}>
                      {phase.name}
                    </h3>
                    <p className="text-xs text-text-muted">
                      {lessons.length} of {phaseDays} lessons created
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {lessons.length === phaseDays ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <Circle className="w-5 h-5 text-text-muted" />
                  )}
                </div>
              </button>

              {/* Phase content */}
              {isExpanded && (
                <div className="p-4 bg-dark-surface space-y-3">
                  {/* Existing lessons */}
                  {lessons.map((lesson, index) => (
                    <Link
                      key={lesson.id}
                      to={`/unit/${unitId || 'new'}/lesson/${lesson.id}`}
                      className="flex items-center justify-between p-3 bg-dark-bg border border-dark-border rounded-lg group hover:border-accent-purple/50 hover:bg-dark-hover transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-full bg-${phase.color}-400/20 flex items-center justify-center text-sm font-medium text-${phase.color}-400`}>
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="font-medium text-text-primary">{lesson.title}</h4>
                          <p className="text-xs text-text-muted flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            Day {lesson.dayNumber}
                            {lesson.activities?.length > 0 ? (
                              <span className="text-green-400">• {lesson.activities.length} activities</span>
                            ) : (
                              <span className="text-yellow-400">• Click to add activities</span>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-text-muted group-hover:text-accent-purple transition-colors flex items-center gap-1">
                          <Edit2 className="w-3 h-3" />
                          Edit lesson
                        </span>
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          className="p-2 text-text-muted hover:text-red-400 hover:bg-dark-hover rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </Link>
                  ))}

                  {/* Add lesson button/form */}
                  {lessons.length < phaseDays && (
                    <>
                      {showAddLesson === phase.id ? (
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={newLessonTitle}
                            onChange={(e) => setNewLessonTitle(e.target.value)}
                            placeholder={`Day ${lessons.length + 1} title...`}
                            className="input flex-1"
                            autoFocus
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleAddLesson(phase.id);
                              if (e.key === 'Escape') {
                                setShowAddLesson(null);
                                setNewLessonTitle('');
                              }
                            }}
                          />
                          <button
                            onClick={() => handleAddLesson(phase.id)}
                            className="btn btn-primary"
                          >
                            Add
                          </button>
                          <button
                            onClick={() => {
                              setShowAddLesson(null);
                              setNewLessonTitle('');
                            }}
                            className="btn btn-ghost"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setShowAddLesson(phase.id)}
                          className={`w-full p-3 border-2 border-dashed border-${phase.color}-400/30 rounded-lg text-${phase.color}-400 hover:bg-${phase.color}-400/10 transition-colors flex items-center justify-center gap-2`}
                        >
                          <Plus className="w-4 h-4" />
                          Add Day {lessons.length + 1} Lesson
                        </button>
                      )}
                    </>
                  )}

                  {/* Phase complete message */}
                  {lessons.length === phaseDays && phaseDays > 0 && (
                    <p className="text-sm text-green-400 text-center py-2">
                      ✓ All {phaseDays} lessons created for {phase.name}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick stats */}
      <div className="p-4 bg-dark-surface border border-dark-border rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-muted">Total Lessons Created</span>
          <span className="font-medium text-text-primary">
            {currentUnit.lessons.length} of {currentUnit.duration.totalDays}
          </span>
        </div>
        <div className="mt-2 h-2 bg-dark-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent-purple transition-all duration-300"
            style={{
              width: `${(currentUnit.lessons.length / currentUnit.duration.totalDays) * 100}%`
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Step4Lessons;
