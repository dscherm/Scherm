import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  PlusCircle,
  BookOpen,
  Clock,
  Users,
  TrendingUp,
  FolderOpen
} from 'lucide-react';

function Dashboard() {
  const { user } = useAuth();

  // Mock data - replace with Firestore queries
  const recentUnits = [];
  const stats = {
    totalUnits: 0,
    totalLessons: 0,
    activeStudents: 0,
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Welcome back{user?.displayName ? `, ${user.displayName.split(' ')[0]}` : ''}!
        </h1>
        <p className="text-text-secondary">
          Build engaging 5E lessons for your students
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link
          to="/unit/new"
          className="card hover:border-accent-purple transition-colors group cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-purple/20 rounded-lg flex items-center justify-center group-hover:bg-accent-purple/30 transition-colors">
              <PlusCircle className="w-6 h-6 text-accent-purple" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">Create New Unit</h3>
              <p className="text-sm text-text-muted">Start building a 5E unit</p>
            </div>
          </div>
        </Link>

        <div className="card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">{stats.totalUnits}</h3>
              <p className="text-sm text-text-muted">Total Units</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">{stats.activeStudents}</h3>
              <p className="text-sm text-text-muted">Active Students</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Units */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-text-primary">Recent Units</h2>
          <Link to="/units" className="text-sm text-accent-purple hover:underline">
            View all
          </Link>
        </div>

        {recentUnits.length === 0 ? (
          <div className="card text-center py-12">
            <FolderOpen className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <h3 className="text-lg font-medium text-text-primary mb-2">
              No units yet
            </h3>
            <p className="text-text-muted mb-6">
              Create your first 5E unit to get started
            </p>
            <Link to="/unit/new" className="btn btn-primary inline-flex items-center gap-2">
              <PlusCircle className="w-4 h-4" />
              Create Unit
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentUnits.map((unit) => (
              <Link
                key={unit.id}
                to={`/unit/${unit.id}`}
                className="card hover:border-accent-purple transition-colors"
              >
                <h3 className="font-semibold text-text-primary mb-2">{unit.title}</h3>
                <p className="text-sm text-text-muted mb-4">{unit.subject}</p>
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {unit.duration?.totalDays} days
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    {unit.lessons?.length || 0} lessons
                  </span>
                </div>
              </Link>
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
            { phase: 'Engage', color: 'yellow', icon: '🧠', desc: 'Hook & Prior Knowledge' },
            { phase: 'Explore', color: 'blue', icon: '🔍', desc: 'Hands-on Investigation' },
            { phase: 'Explain', color: 'purple', icon: '📖', desc: 'Formalize Concepts' },
            { phase: 'Elaborate', color: 'green', icon: '🚀', desc: 'Apply & Extend' },
            { phase: 'Evaluate', color: 'red', icon: '📊', desc: 'Demonstrate Mastery' },
          ].map(({ phase, color, icon, desc }) => (
            <div
              key={phase}
              className={`p-4 rounded-lg border border-${color}-400/30 bg-${color}-400/10`}
            >
              <div className="text-2xl mb-2">{icon}</div>
              <h3 className={`font-semibold text-${color}-400 mb-1`}>{phase}</h3>
              <p className="text-xs text-text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
