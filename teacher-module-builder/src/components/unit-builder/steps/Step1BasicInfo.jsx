import useUnitStore from '../../../hooks/useUnitStore';
import { BookOpen, GraduationCap, Clock, HelpCircle } from 'lucide-react';

const SUBJECTS = [
  'Computer Science',
  'Mathematics',
  'Science',
  'English Language Arts',
  'Social Studies',
  'Art',
  'Music',
  'Physical Education',
  'Other'
];

const GRADE_LEVELS = [
  'K-2',
  '3-5',
  '6-8',
  '9-12',
  'Higher Education'
];

const DURATIONS = [
  { label: '1 week (5 days)', days: 5 },
  { label: '2 weeks (10 days)', days: 10 },
  { label: '3 weeks (15 days)', days: 15 },
  { label: '4 weeks (20 days)', days: 20 },
];

function Step1BasicInfo() {
  const { currentUnit, updateUnit } = useUnitStore();

  return (
    <div className="space-y-8">
      {/* Unit Title */}
      <div>
        <label className="label flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Unit Title
        </label>
        <input
          type="text"
          value={currentUnit.title}
          onChange={(e) => updateUnit({ title: e.target.value })}
          placeholder="e.g., Introduction to Loops"
          className="input text-lg"
          autoFocus
        />
      </div>

      {/* Subject and Grade */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="label flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Subject
          </label>
          <select
            value={currentUnit.subject}
            onChange={(e) => updateUnit({ subject: e.target.value })}
            className="input"
          >
            <option value="">Select subject...</option>
            {SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="label">Grade Level</label>
          <select
            value={currentUnit.gradeLevel}
            onChange={(e) => updateUnit({ gradeLevel: e.target.value })}
            className="input"
          >
            <option value="">Select grade level...</option>
            {GRADE_LEVELS.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Duration */}
      <div>
        <label className="label flex items-center gap-2">
          <Clock className="w-4 h-4" />
          Duration
        </label>
        <div className="grid grid-cols-4 gap-4">
          {DURATIONS.map(({ label, days }) => (
            <button
              key={days}
              onClick={() => updateUnit({
                duration: {
                  ...currentUnit.duration,
                  totalDays: days,
                  // Distribute days across phases
                  engage: Math.ceil(days * 0.2),
                  explore: Math.ceil(days * 0.3),
                  explain: Math.ceil(days * 0.2),
                  elaborate: Math.ceil(days * 0.2),
                  evaluate: Math.floor(days * 0.1) || 1,
                }
              })}
              className={`
                p-4 rounded-lg border text-center transition-all
                ${
                  currentUnit.duration.totalDays === days
                    ? 'border-accent-purple bg-accent-purple/10 text-text-primary'
                    : 'border-dark-border hover:border-text-muted text-text-secondary'
                }
              `}
            >
              <div className="text-2xl font-bold mb-1">{days}</div>
              <div className="text-xs">{label.split('(')[0]}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Essential Question */}
      <div>
        <label className="label flex items-center gap-2">
          <HelpCircle className="w-4 h-4" />
          Essential Question / Big Idea
        </label>
        <textarea
          value={currentUnit.essentialQuestion}
          onChange={(e) => updateUnit({ essentialQuestion: e.target.value })}
          placeholder="e.g., How can we use loops to make our code more efficient and powerful?"
          className="input min-h-[100px] resize-none"
          rows={3}
        />
        <p className="text-xs text-text-muted mt-2">
          The overarching question that guides the unit. Students should be able to answer this by the end.
        </p>
      </div>

      {/* Tips Card */}
      <div className="bg-accent-purple/10 border border-accent-purple/30 rounded-lg p-4">
        <h4 className="font-medium text-accent-purple mb-2">Tips for Creating a Great Unit</h4>
        <ul className="text-sm text-text-secondary space-y-1">
          <li>• Choose a clear, focused topic that can be explored deeply</li>
          <li>• Essential questions should be open-ended and thought-provoking</li>
          <li>• Research shows 2-3 weeks is optimal for 5E units</li>
        </ul>
      </div>
    </div>
  );
}

export default Step1BasicInfo;
