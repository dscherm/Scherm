import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  LayoutDashboard,
  PlusCircle,
  Settings,
  LogOut,
  BookOpen,
  User,
  Compass,
  Puzzle
} from 'lucide-react';

function Layout() {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinkClass = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
      isActive(path)
        ? 'nav-link-active'
        : 'text-text-secondary hover:text-text-primary hover:bg-dark-hover'
    }`;

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-purple"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg flex">
      {/* Sidebar */}
      <aside className="w-64 bg-dark-surface border-r border-dark-border flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-dark-border">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-purple rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-text-primary">Module Builder</h1>
              <p className="text-xs text-text-muted">5E Lesson Designer</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <Link to="/" className={navLinkClass('/')}>
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>

          <Link to="/unit/new" className={navLinkClass('/unit')}>
            <PlusCircle className="w-5 h-5" />
            Create Unit
          </Link>

          <Link to="/pbl/new" className={navLinkClass('/pbl')}>
            <Compass className="w-5 h-5" />
            PBL Builder
          </Link>

          <Link to="/activities" className={navLinkClass('/activities')}>
            <Puzzle className="w-5 h-5" />
            Activities
          </Link>

          <div className="pt-4 border-t border-dark-border mt-4">
            <p className="px-4 py-2 text-xs font-medium text-text-muted uppercase tracking-wider">
              Settings
            </p>
            <Link to="/settings" className={navLinkClass('/settings')}>
              <Settings className="w-5 h-5" />
              Preferences
            </Link>
          </div>
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-dark-border">
          <div className="flex items-center gap-3 px-4 py-3">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="w-8 h-8 bg-dark-hover rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-text-muted" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-primary truncate">
                {user?.displayName || 'Guest'}
              </p>
              <p className="text-xs text-text-muted truncate">
                {user?.email || 'Not signed in'}
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="p-2 text-text-muted hover:text-text-primary transition-colors"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto animate-fade-in">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
