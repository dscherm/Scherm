import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save, Play, Presentation } from 'lucide-react';

function LessonEditor() {
  const { unitId, lessonId } = useParams();

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-dark-surface border-b border-dark-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to={`/unit/${unitId || 'new'}`}
                className="p-2 text-text-muted hover:text-text-primary hover:bg-dark-hover rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <p className="text-sm text-text-muted">Editing Lesson</p>
                <h1 className="text-xl font-semibold text-text-primary">
                  Lesson Editor
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn btn-secondary flex items-center gap-2">
                <Play className="w-4 h-4" />
                Preview
              </button>
              <button className="btn btn-secondary flex items-center gap-2">
                <Presentation className="w-4 h-4" />
                Generate Slides
              </button>
              <button className="btn btn-primary flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Lesson Structure */}
          <div className="col-span-2 space-y-6">
            {/* Minds On */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🧠</span>
                <div>
                  <h3 className="font-semibold text-yellow-400">Minds On</h3>
                  <p className="text-xs text-text-muted">Synchronous start (10 min)</p>
                </div>
              </div>
              <div className="p-8 border-2 border-dashed border-dark-border rounded-lg text-center">
                <p className="text-text-muted mb-4">No Minds On activity yet</p>
                <button className="btn btn-secondary">
                  + Add Minds On Activity
                </button>
              </div>
            </div>

            {/* Work Time */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💻</span>
                <div>
                  <h3 className="font-semibold text-blue-400">Work Time</h3>
                  <p className="text-xs text-text-muted">Asynchronous core (40-60 min)</p>
                </div>
              </div>
              <div className="p-8 border-2 border-dashed border-dark-border rounded-lg text-center">
                <p className="text-text-muted mb-4">No activities yet</p>
                <div className="flex justify-center gap-2">
                  <button className="btn btn-secondary">
                    + Code Playground
                  </button>
                  <button className="btn btn-secondary">
                    + Challenge Lab
                  </button>
                  <button className="btn btn-secondary">
                    + Worksheet
                  </button>
                </div>
              </div>
            </div>

            {/* Share Out */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎤</span>
                <div>
                  <h3 className="font-semibold text-purple-400">Share Out</h3>
                  <p className="text-xs text-text-muted">Synchronous close (10-15 min)</p>
                </div>
              </div>
              <div className="p-8 border-2 border-dashed border-dark-border rounded-lg text-center">
                <p className="text-text-muted mb-4">No Share Out activity yet</p>
                <button className="btn btn-secondary">
                  + Add Share Out
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Lesson Info */}
            <div className="card">
              <h3 className="font-semibold text-text-primary mb-4">Lesson Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="label">Title</label>
                  <input
                    type="text"
                    placeholder="Lesson title..."
                    className="input"
                  />
                </div>
                <div>
                  <label className="label">Objective</label>
                  <textarea
                    placeholder="What will students learn?"
                    className="input resize-none"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Team Settings */}
            <div className="card">
              <h3 className="font-semibold text-text-primary mb-4">Team Settings</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-text-secondary">Enable team work</span>
                </label>
                <div className="text-xs text-text-muted">
                  Teams use roles: 🧩 Explainer, 🧭 Leader, ❓ Questioner
                </div>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="bg-accent-purple/10 border border-accent-purple/30 rounded-lg p-4">
              <h4 className="font-medium text-accent-purple mb-2">Coming Soon</h4>
              <ul className="text-sm text-text-muted space-y-1">
                <li>• Drag-and-drop activity ordering</li>
                <li>• Activity templates library</li>
                <li>• Google Slides integration</li>
                <li>• Printable worksheet builder</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonEditor;
