import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BookOpen, Users, FileText, Sparkles, ChevronRight, Edit3 } from 'lucide-react';
import useStoryStore from '../hooks/useStoryStore';

const StoryView = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const setCurrentStory = useStoryStore(state => state.setCurrentStory);
  const getCurrentStory = useStoryStore(state => state.getCurrentStory);

  useEffect(() => {
    setCurrentStory(storyId);
  }, [storyId, setCurrentStory]);

  const story = getCurrentStory();

  if (!story) {
    return (
      <div className="p-4 text-center py-20">
        <p className="text-slate-400">Story not found</p>
        <button onClick={() => navigate('/')} className="btn-primary mt-4">
          Go Home
        </button>
      </div>
    );
  }

  const quickActions = [
    {
      icon: BookOpen,
      label: 'Plot Planner',
      description: 'Plan your story structure',
      path: `/story/${storyId}/plot`,
      color: 'bg-primary-600'
    },
    {
      icon: Users,
      label: 'Characters',
      description: `${story.characters?.length || 0} characters`,
      path: `/story/${storyId}/characters`,
      color: 'bg-amber-600'
    },
    {
      icon: FileText,
      label: 'Notes',
      description: `${story.notes?.length || 0} notes`,
      path: `/story/${storyId}/notes`,
      color: 'bg-green-600'
    },
    {
      icon: Sparkles,
      label: 'Brainstorm',
      description: 'Get inspired',
      path: '/brainstorm',
      color: 'bg-purple-600'
    }
  ];

  const completedActs = story.acts?.filter(act => act.content && act.content.trim().length > 0).length || 0;
  const totalActs = story.acts?.length || 0;
  const progress = totalActs > 0 ? Math.round((completedActs / totalActs) * 100) : 0;

  return (
    <div className="p-4 animate-fade-in">
      {/* Story Header */}
      <div className="card mb-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{story.title}</h2>
            {story.genre && (
              <span className="inline-block mt-2 px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
                {story.genre}
              </span>
            )}
          </div>
          <button
            onClick={() => navigate(`/story/${storyId}/plot`)}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <Edit3 className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {story.logline && (
          <p className="text-slate-400 italic mb-4">"{story.logline}"</p>
        )}

        {/* Progress Bar */}
        <div>
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-slate-400">Story Progress</span>
            <span className="text-primary-400">{progress}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {quickActions.map(action => (
          <button
            key={action.label}
            onClick={() => navigate(action.path)}
            className="card flex flex-col items-center gap-2 py-5 hover:bg-slate-700 transition-colors"
          >
            <div className={`w-11 h-11 ${action.color} rounded-xl flex items-center justify-center`}>
              <action.icon className="w-5 h-5" />
            </div>
            <span className="font-medium text-sm">{action.label}</span>
            <span className="text-xs text-slate-500">{action.description}</span>
          </button>
        ))}
      </div>

      {/* Acts Overview */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary-400" />
          Story Structure
        </h3>

        <div className="space-y-3">
          {story.acts?.map((act, index) => {
            const hasContent = act.content && act.content.trim().length > 0;
            const sceneCount = act.scenes?.length || 0;

            return (
              <button
                key={act.id}
                onClick={() => navigate(`/story/${storyId}/act/${act.id}`)}
                className="w-full card hover:bg-slate-700 transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ backgroundColor: `${act.color}20`, color: act.color }}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold truncate">{act.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                      <span>{act.percentage}% of story</span>
                      {sceneCount > 0 && (
                        <span className="px-2 py-0.5 bg-slate-700 rounded-full">
                          {sceneCount} scene{sceneCount !== 1 ? 's' : ''}
                        </span>
                      )}
                      {hasContent && (
                        <span className="text-green-500">Has content</span>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-slate-300 transition-colors" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Characters Preview */}
      {story.characters && story.characters.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-400" />
            Characters
          </h3>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {story.characters.slice(0, 6).map(character => (
              <button
                key={character.id}
                onClick={() => navigate(`/story/${storyId}/character/${character.id}`)}
                className="shrink-0 w-20 text-center"
              >
                <div className="w-14 h-14 mx-auto bg-slate-700 rounded-full flex items-center justify-center text-xl font-bold text-slate-300 mb-2">
                  {character.name.charAt(0).toUpperCase()}
                </div>
                <p className="text-xs truncate text-slate-400">{character.name}</p>
              </button>
            ))}
            {story.characters.length > 6 && (
              <button
                onClick={() => navigate(`/story/${storyId}/characters`)}
                className="shrink-0 w-20 text-center"
              >
                <div className="w-14 h-14 mx-auto bg-slate-700 rounded-full flex items-center justify-center text-sm font-medium text-slate-400 mb-2">
                  +{story.characters.length - 6}
                </div>
                <p className="text-xs text-slate-500">More</p>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryView;
