import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useUserUnits } from '../../hooks/useUnits';
import { useToast } from '../../contexts/ToastContext';
import CreateModal from '../create/CreateModal';
import ConfirmDialog from '../common/ConfirmDialog';
import {
  PlusCircle,
  BookOpen,
  Clock,
  Users,
  FolderOpen,
  MoreVertical,
  Trash2,
  Copy,
  Edit,
  CheckCircle,
  FileText,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';

function Dashboard() {
  const { user } = useAuth();
  const { units, loading, error, remove, duplicate } = useUserUnits();
  const { toast } = useToast();
  const [menuOpen, setMenuOpen] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const handleDelete = async (unitId, e) => {
    e.preventDefault();
    setDeleteTarget(unitId);
    setMenuOpen(null);
  };

  const confirmDelete = async () => {
    if (deleteTarget) {
      await remove(deleteTarget);
      toast.success('Unit deleted');
      setDeleteTarget(null);
    }
  };

  const handleDuplicate = async (unitId, e) => {
    e.preventDefault();
    await duplicate(unitId);
    toast.success('Unit duplicated');
    setMenuOpen(null);
  };

  // Calculate stats
  const totalLessons = units.reduce((sum, unit) => sum + (unit.lessons?.length || 0), 0);
  const publishedUnits = units.filter(u => u.status === 'published').length;

  return (
    <div className="p-8 animate-fade-in">
      {/* Header with gradient strip */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 -mx-8 -mt-8 h-32 bg-gradient-to-r from-accent-purple/10 via-accent-blue/5 to-transparent" />
        <div className="relative">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Welcome back{user?.displayName ? `, ${user.displayName.split(' ')[0]}` : ''}!
          </h1>
          <p className="text-text-secondary">
            Build engaging 5E lessons for your students
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <button
          onClick={() => setShowCreateModal(true)}
          className="card-interactive group cursor-pointer text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-purple/20 rounded-lg flex items-center justify-center group-hover:bg-accent-purple/30 transition-colors">
              <Sparkles className="w-6 h-6 text-accent-purple" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">Create New</h3>
              <p className="text-sm text-text-muted">Unit, lesson, or activity</p>
            </div>
          </div>
        </button>

        <div className="card-glass border-l-2 border-l-blue-400">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">{units.length}</h3>
              <p className="text-sm text-text-muted">Total Units</p>
            </div>
          </div>
        </div>

        <div className="card-glass border-l-2 border-l-green-400">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">{publishedUnits}</h3>
              <p className="text-sm text-text-muted">Published</p>
            </div>
          </div>
        </div>

        <div className="card-glass border-l-2 border-l-yellow-400">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">{totalLessons}</h3>
              <p className="text-sm text-text-muted">Total Lessons</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Units */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-text-primary">Your Units</h2>
        </div>

        {loading ? (
          <div className="card text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent-purple mx-auto mb-4"></div>
            <p className="text-text-muted">Loading your units...</p>
          </div>
        ) : error ? (
          <div className="card text-center py-12 border-red-500/30">
            <p className="text-red-400 mb-2">Error loading units</p>
            <p className="text-sm text-text-muted">{error}</p>
          </div>
        ) : units.length === 0 ? (
          <div className="card text-center py-12">
            <FolderOpen className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <h3 className="text-lg font-medium text-text-primary mb-2">
              No units yet
            </h3>
            <p className="text-text-muted mb-6">
              Get started by uploading curriculum, entering a topic, or building from scratch
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Create New
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-fade-in">
            {units.map((unit) => (
              <div
                key={unit.id}
                className="card-interactive relative group"
              >
                <Link to={`/unit/${unit.id}`} className="block">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-text-primary pr-8">{unit.title || 'Untitled Unit'}</h3>
                    <span className={`badge ${unit.status === 'published' ? 'badge-green' : 'badge-yellow'}`}>
                      {unit.status || 'draft'}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted mb-4">
                    {unit.subject || 'No subject'} • {unit.gradeLevel || 'No grade'}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {unit.duration?.totalDays || 0} days
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {unit.objectives?.length || 0} objectives
                    </span>
                  </div>
                  {unit.updatedAt && (
                    <p className="text-xs text-text-muted mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Last saved {new Date(unit.updatedAt?.seconds ? unit.updatedAt.seconds * 1000 : unit.updatedAt).toLocaleDateString()}
                    </p>
                  )}
                </Link>

                {/* Actions menu */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(menuOpen === unit.id ? null : unit.id);
                    }}
                    className="p-1 text-text-muted hover:text-text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                  {menuOpen === unit.id && (
                    <div className="absolute right-0 mt-1 w-40 bg-dark-surface border border-dark-border rounded-lg shadow-lg z-10">
                      <Link
                        to={`/unit/${unit.id}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:bg-dark-hover"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </Link>
                      <button
                        onClick={(e) => handleDuplicate(unit.id, e)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:bg-dark-hover w-full"
                      >
                        <Copy className="w-4 h-4" />
                        Duplicate
                      </button>
                      <button
                        onClick={(e) => handleDelete(unit.id, e)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-dark-hover w-full"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5E Framework Overview */}
      <div>
        <h2 className="text-xl font-semibold text-text-primary mb-4">
          5E Framework
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {[
            { phase: 'Engage', style: 'border-yellow-400/30 bg-yellow-400/10', textStyle: 'text-yellow-400', icon: '🧠', desc: 'Hook & Prior Knowledge' },
            { phase: 'Explore', style: 'border-blue-400/30 bg-blue-400/10', textStyle: 'text-blue-400', icon: '🔍', desc: 'Hands-on Investigation' },
            { phase: 'Explain', style: 'border-purple-400/30 bg-purple-400/10', textStyle: 'text-purple-400', icon: '📖', desc: 'Formalize Concepts' },
            { phase: 'Elaborate', style: 'border-green-400/30 bg-green-400/10', textStyle: 'text-green-400', icon: '🚀', desc: 'Apply & Extend' },
            { phase: 'Evaluate', style: 'border-red-400/30 bg-red-400/10', textStyle: 'text-red-400', icon: '📊', desc: 'Demonstrate Mastery' },
          ].map(({ phase, style, textStyle, icon, desc }) => (
            <div
              key={phase}
              className={`p-4 rounded-lg border ${style}`}
            >
              <div className="text-2xl mb-2">{icon}</div>
              <h3 className={`font-semibold ${textStyle} mb-1`}>{phase}</h3>
              <p className="text-xs text-text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Create Modal */}
      <CreateModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
        title="Delete Unit"
        message="Are you sure you want to delete this unit? This action cannot be undone."
        confirmLabel="Delete"
        destructive
      />
    </div>
  );
}

export default Dashboard;
