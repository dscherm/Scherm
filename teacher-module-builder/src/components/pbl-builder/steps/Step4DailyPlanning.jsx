import { useState } from 'react';
import usePBLStore from '../../../hooks/usePBLStore';
import ResearchNote from '../../common/ResearchNote';
import { Calendar, Plus, X, Clock, BookOpen, ChevronDown, ChevronRight, Trash2 } from 'lucide-react';

function Step4DailyPlanning() {
  const {
    currentUnit,
    selectedMilestoneIndex,
    setSelectedMilestone,
    addMiniLesson,
    updateMiniLesson,
    removeMiniLesson,
    addMilestoneActivity,
    removeMilestoneActivity,
  } = usePBLStore();

  const { milestones } = currentUnit;
  const [expandedMilestone, setExpandedMilestone] = useState(0);
  const [showAddLesson, setShowAddLesson] = useState(false);
  const [newLesson, setNewLesson] = useState({ title: '', duration: 15, learningTarget: '' });

  const selectedMilestone = milestones[expandedMilestone];

  const handleAddMiniLesson = () => {
    if (newLesson.title.trim()) {
      addMiniLesson(expandedMilestone, {
        ...newLesson,
        title: newLesson.title.trim(),
        learningTarget: newLesson.learningTarget.trim(),
      });
      setNewLesson({ title: '', duration: 15, learningTarget: '' });
      setShowAddLesson(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro Section */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pbl-yellow/20 mb-4">
          <Calendar className="w-8 h-8 text-pbl-yellow" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Daily Planning
        </h2>
        <p className="text-text-secondary">
          Add mini-lessons and activities to support each milestone. Mini-lessons are
          short, targeted instruction (10-20 min) that addresses "need-to-knows."
        </p>
      </div>

      <ResearchNote title="Just-in-Time Learning">
        In PBL, direct instruction happens when students need it. Use your K/NTK board
        to identify what mini-lessons to teach. Keep them short (10-20 min) and immediately
        apply the learning to the project work.
      </ResearchNote>

      {/* Milestone Tabs */}
      <div className="flex gap-2 border-b border-dark-border pb-2">
        {milestones.map((milestone, index) => (
          <button
            key={milestone.id}
            onClick={() => setExpandedMilestone(index)}
            className={`
              px-4 py-2 rounded-t-lg text-sm font-medium transition-colors
              ${expandedMilestone === index
                ? 'bg-pbl-orange text-dark-bg'
                : 'text-text-muted hover:text-text-primary hover:bg-dark-hover'
              }
            `}
          >
            {milestone.title || `Milestone ${index + 1}`}
          </button>
        ))}
      </div>

      {/* Selected Milestone Content */}
      {selectedMilestone && (
        <div className="space-y-6">
          {/* Milestone Summary */}
          <div className="card bg-pbl-orange/5 border-pbl-orange/30">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-text-primary">
                  {selectedMilestone.title || `Milestone ${expandedMilestone + 1}`}
                </h3>
                <p className="text-sm text-text-muted mt-1">
                  Weeks {selectedMilestone.weekRange.start}-{selectedMilestone.weekRange.end} •
                  {selectedMilestone.type && ` ${selectedMilestone.type.replace('_', ' ')}`}
                </p>
              </div>
              <span className="badge badge-pbl-orange">
                {selectedMilestone.miniLessons?.length || 0} mini-lessons
              </span>
            </div>
            {selectedMilestone.description && (
              <p className="text-sm text-text-secondary mt-3">
                {selectedMilestone.description}
              </p>
            )}
          </div>

          {/* Mini-Lessons Section */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-pbl-yellow" />
                  Mini-Lessons
                </h3>
                <p className="text-sm text-text-muted">
                  Short, targeted instruction to support the milestone work
                </p>
              </div>
              <button
                onClick={() => setShowAddLesson(true)}
                className="btn btn-secondary flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Mini-Lesson
              </button>
            </div>

            {/* Mini-Lessons List */}
            <div className="space-y-3">
              {selectedMilestone.miniLessons?.map((lesson) => (
                <MiniLessonCard
                  key={lesson.id}
                  lesson={lesson}
                  onUpdate={(updates) => updateMiniLesson(expandedMilestone, lesson.id, updates)}
                  onRemove={() => removeMiniLesson(expandedMilestone, lesson.id)}
                />
              ))}

              {(!selectedMilestone.miniLessons || selectedMilestone.miniLessons.length === 0) && (
                <div className="text-center py-8 text-text-muted">
                  <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No mini-lessons yet</p>
                  <p className="text-sm">Add targeted instruction to support this milestone</p>
                </div>
              )}
            </div>

            {/* Add Mini-Lesson Form */}
            {showAddLesson && (
              <div className="mt-4 p-4 bg-dark-bg rounded-lg border border-dark-border">
                <h4 className="font-medium text-text-primary mb-3">New Mini-Lesson</h4>
                <div className="space-y-3">
                  <div>
                    <label className="label">Title</label>
                    <input
                      type="text"
                      value={newLesson.title}
                      onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
                      placeholder="e.g., How to Read a Data Table"
                      className="input"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="label">Duration (minutes)</label>
                      <input
                        type="number"
                        value={newLesson.duration}
                        onChange={(e) => setNewLesson({ ...newLesson, duration: parseInt(e.target.value) || 15 })}
                        min={5}
                        max={30}
                        className="input"
                      />
                    </div>
                    <div>
                      <label className="label">Learning Target</label>
                      <input
                        type="text"
                        value={newLesson.learningTarget}
                        onChange={(e) => setNewLesson({ ...newLesson, learningTarget: e.target.value })}
                        placeholder="Students will be able to..."
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => setShowAddLesson(false)}
                      className="btn btn-ghost"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddMiniLesson}
                      disabled={!newLesson.title.trim()}
                      className="btn btn-primary"
                    >
                      Add Mini-Lesson
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Learning Objectives */}
          <div className="card">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Learning Objectives</h3>
            <div className="space-y-2">
              {selectedMilestone.learningObjectives?.map((obj, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-dark-bg rounded">
                  <span className="text-text-secondary">{obj}</span>
                </div>
              ))}
              {(!selectedMilestone.learningObjectives || selectedMilestone.learningObjectives.length === 0) && (
                <p className="text-text-muted text-sm">
                  Add learning objectives in Step 3 (Milestones)
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MiniLessonCard({ lesson, onUpdate, onRemove }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-dark-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-3 flex items-center justify-between bg-dark-surface hover:bg-dark-hover transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-pbl-yellow/20">
            <BookOpen className="w-4 h-4 text-pbl-yellow" />
          </div>
          <div className="text-left">
            <h4 className="font-medium text-text-primary">{lesson.title}</h4>
            <p className="text-xs text-text-muted flex items-center gap-2">
              <Clock className="w-3 h-3" />
              {lesson.duration} min
              {lesson.learningTarget && ` • ${lesson.learningTarget}`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="p-1 text-text-muted hover:text-red-400"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-text-muted" />
          ) : (
            <ChevronRight className="w-5 h-5 text-text-muted" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="p-4 bg-dark-bg border-t border-dark-border space-y-3">
          <div>
            <label className="label">Instruction Notes</label>
            <textarea
              value={lesson.instruction || ''}
              onChange={(e) => onUpdate({ instruction: e.target.value })}
              placeholder="Key points to cover, examples to use..."
              className="input min-h-[80px]"
            />
          </div>
          <div>
            <label className="label">Practice Activity</label>
            <textarea
              value={lesson.practiceActivity || ''}
              onChange={(e) => onUpdate({ practiceActivity: e.target.value })}
              placeholder="How will students apply this immediately?"
              className="input min-h-[60px]"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Step4DailyPlanning;
