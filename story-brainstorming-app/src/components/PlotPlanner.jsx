import { useNavigate, useParams } from 'react-router-dom';
import { ChevronRight, Plus, HelpCircle } from 'lucide-react';
import useStoryStore from '../hooks/useStoryStore';

const PlotPlanner = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const getCurrentStory = useStoryStore(state => state.getCurrentStory);

  const story = getCurrentStory();

  if (!story) {
    return (
      <div className="p-4 text-center py-20">
        <p className="text-slate-400">Story not found</p>
      </div>
    );
  }

  // Calculate the visual arc
  const renderArc = () => {
    const acts = story.acts || [];
    const maxHeight = 120;

    // Create points for the arc based on structure
    const getArcHeight = (act, index, total) => {
      // For Freytag's Pyramid
      if (story.structureType === 'freytag') {
        const heights = [30, 60, 100, 60, 30];
        return heights[index] || 50;
      }
      // For 3-act structure
      if (story.structureType === 'threeAct') {
        const heights = [40, 100, 40];
        return heights[index] || 50;
      }
      // For 5-act structure
      if (story.structureType === 'fiveAct') {
        const heights = [25, 50, 100, 50, 25];
        return heights[index] || 50;
      }
      // For 7-act structure
      if (story.structureType === 'sevenAct') {
        const heights = [20, 35, 55, 100, 55, 85, 30];
        return heights[index] || 50;
      }
      return 50;
    };

    return (
      <div className="relative h-40 bg-slate-800/50 rounded-2xl overflow-hidden mb-6">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between py-4 px-2">
          {[0, 1, 2].map(i => (
            <div key={i} className="border-t border-slate-700/50 w-full" />
          ))}
        </div>

        {/* Arc visualization */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              {acts.map((act, i) => (
                <stop
                  key={act.id}
                  offset={`${(i / (acts.length - 1)) * 100}%`}
                  stopColor={act.color}
                />
              ))}
            </linearGradient>
          </defs>

          {/* Draw the arc path */}
          <path
            d={acts.map((act, i) => {
              const x = (i / (acts.length - 1)) * 100;
              const y = 100 - getArcHeight(act, i, acts.length);
              return `${i === 0 ? 'M' : 'L'} ${x}% ${y}%`;
            }).join(' ')}
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Draw points */}
          {acts.map((act, i) => {
            const x = (i / (acts.length - 1)) * 100;
            const y = 100 - getArcHeight(act, i, acts.length);
            return (
              <circle
                key={act.id}
                cx={`${x}%`}
                cy={`${y}%`}
                r="6"
                fill={act.color}
                stroke="#0f172a"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {/* Labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 pb-2">
          {acts.map(act => (
            <span key={act.id} className="text-[10px] text-slate-500 truncate max-w-[60px]">
              {act.name.split(':')[0]}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 animate-fade-in">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-1">Plot Planner</h2>
        <p className="text-slate-400 text-sm">{story.title}</p>
      </div>

      {/* Visual Arc */}
      {renderArc()}

      {/* Acts List */}
      <div className="space-y-4">
        {story.acts?.map((act, index) => {
          const hasContent = act.content && act.content.trim().length > 0;
          const sceneCount = act.scenes?.length || 0;

          return (
            <div key={act.id} className="card">
              {/* Act Header */}
              <button
                onClick={() => navigate(`/story/${storyId}/act/${act.id}`)}
                className="w-full flex items-start gap-3 text-left group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
                  style={{ backgroundColor: `${act.color}20`, color: act.color }}
                >
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{act.name}</h3>
                    <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-slate-300 transition-colors" />
                  </div>
                  <p className="text-sm text-slate-400 mt-1">{act.description}</p>

                  <div className="flex items-center gap-2 mt-3">
                    <span
                      className="px-2 py-0.5 rounded-full text-xs"
                      style={{ backgroundColor: `${act.color}20`, color: act.color }}
                    >
                      {act.percentage}%
                    </span>
                    {sceneCount > 0 && (
                      <span className="px-2 py-0.5 bg-slate-700 rounded-full text-xs text-slate-300">
                        {sceneCount} scene{sceneCount !== 1 ? 's' : ''}
                      </span>
                    )}
                    {hasContent && (
                      <span className="px-2 py-0.5 bg-green-900/30 text-green-400 rounded-full text-xs">
                        Has content
                      </span>
                    )}
                  </div>
                </div>
              </button>

              {/* Key Elements Preview */}
              {act.keyElements && act.keyElements.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Key Elements</p>
                  <div className="flex flex-wrap gap-2">
                    {act.keyElements.slice(0, 3).map((element, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs text-slate-300">
                        {element}
                      </span>
                    ))}
                    {act.keyElements.length > 3 && (
                      <span className="px-2 py-1 text-xs text-slate-500">
                        +{act.keyElements.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Questions Preview */}
              {act.questions && act.questions.length > 0 && (
                <button
                  onClick={() => navigate(`/story/${storyId}/act/${act.id}`)}
                  className="w-full mt-3 pt-3 border-t border-slate-700 flex items-center gap-2 text-left text-sm text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>{act.questions.length} guiding questions</span>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlotPlanner;
