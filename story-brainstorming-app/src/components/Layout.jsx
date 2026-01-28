import { useLocation, useNavigate } from 'react-router-dom';
import { Home, BookOpen, Users, FileText, Sparkles, ChevronLeft } from 'lucide-react';
import useStoryStore from '../hooks/useStoryStore';

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentStoryId = useStoryStore(state => state.currentStoryId);

  const isHome = location.pathname === '/';
  const isBrainstorm = location.pathname === '/brainstorm';
  const isNewStory = location.pathname === '/new';
  const inStory = location.pathname.includes('/story/');

  const showBackButton = !isHome;

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/brainstorm', icon: Sparkles, label: 'Ideas' },
  ];

  if (currentStoryId) {
    navItems.push(
      { path: `/story/${currentStoryId}/plot`, icon: BookOpen, label: 'Plot' },
      { path: `/story/${currentStoryId}/characters`, icon: Users, label: 'Characters' },
      { path: `/story/${currentStoryId}/notes`, icon: FileText, label: 'Notes' }
    );
  }

  const handleBack = () => {
    if (location.pathname.includes('/act/') || location.pathname.includes('/character/')) {
      // Go back to story view
      navigate(`/story/${currentStoryId}`);
    } else if (location.pathname.includes('/story/') && !location.pathname.endsWith(currentStoryId)) {
      // Go back to story view from sub-pages
      navigate(`/story/${currentStoryId}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col safe-area-top safe-area-bottom">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center gap-3">
        {showBackButton && (
          <button
            onClick={handleBack}
            className="p-2 -ml-2 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        <h1 className="text-lg font-semibold flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary-400" />
          Story Brainstormer
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 safe-area-bottom">
        <div className="flex justify-around items-center py-2">
          {navItems.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path ||
              (path !== '/' && path !== '/brainstorm' && location.pathname.startsWith(path.split('/').slice(0, 4).join('/')));

            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'text-primary-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
