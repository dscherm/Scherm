import { useNavigate } from 'react-router-dom';
import { Plus, BookOpen, Sparkles, Clock, Trash2, ChevronRight } from 'lucide-react';
import useStoryStore from '../hooks/useStoryStore';

const Dashboard = () => {
  const navigate = useNavigate();
  const stories = useStoryStore(state => state.stories);
  const setCurrentStory = useStoryStore(state => state.setCurrentStory);
  const deleteStory = useStoryStore(state => state.deleteStory);

  const handleStoryClick = (storyId) => {
    setCurrentStory(storyId);
    navigate(`/story/${storyId}`);
  };

  const handleDeleteStory = (e, storyId) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this story?')) {
      deleteStory(storyId);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="p-4 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center py-6 mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600/20 rounded-2xl mb-4">
          <Sparkles className="w-8 h-8 text-primary-400" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Welcome to Story Brainstormer</h2>
        <p className="text-slate-400">Craft your narrative with structure and purpose</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <button
          onClick={() => navigate('/new')}
          className="card flex flex-col items-center gap-3 py-6 hover:bg-slate-700 transition-colors"
        >
          <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
            <Plus className="w-6 h-6" />
          </div>
          <span className="font-medium">New Story</span>
        </button>

        <button
          onClick={() => navigate('/brainstorm')}
          className="card flex flex-col items-center gap-3 py-6 hover:bg-slate-700 transition-colors"
        >
          <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="font-medium">Brainstorm</span>
        </button>
      </div>

      {/* Stories List */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary-400" />
          Your Stories
        </h3>

        {stories.length === 0 ? (
          <div className="card text-center py-12">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 mb-4">No stories yet</p>
            <button
              onClick={() => navigate('/new')}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Your First Story
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {stories.map(story => (
              <div
                key={story.id}
                onClick={() => handleStoryClick(story.id)}
                className="card hover:bg-slate-700 transition-colors cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-lg truncate">{story.title}</h4>
                    {story.logline && (
                      <p className="text-slate-400 text-sm mt-1 line-clamp-2">{story.logline}</p>
                    )}
                    <div className="flex items-center gap-3 mt-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatDate(story.updatedAt)}
                      </span>
                      {story.genre && (
                        <span className="px-2 py-0.5 bg-slate-700 rounded-full">
                          {story.genre}
                        </span>
                      )}
                      <span className="px-2 py-0.5 bg-slate-700 rounded-full">
                        {story.characters?.length || 0} characters
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleDeleteStory(e, story.id)}
                      className="p-2 text-slate-500 hover:text-red-400 hover:bg-slate-600 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <ChevronRight className="w-5 h-5 text-slate-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
