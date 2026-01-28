import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Plus, Trash2, ChevronDown, ChevronUp, HelpCircle, Lightbulb, Save } from 'lucide-react';
import useStoryStore from '../hooks/useStoryStore';

const ActDetail = () => {
  const { storyId, actId } = useParams();
  const navigate = useNavigate();
  const getCurrentStory = useStoryStore(state => state.getCurrentStory);
  const updateAct = useStoryStore(state => state.updateAct);
  const addScene = useStoryStore(state => state.addScene);
  const updateScene = useStoryStore(state => state.updateScene);
  const deleteScene = useStoryStore(state => state.deleteScene);

  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [showElements, setShowElements] = useState(true);
  const [newSceneTitle, setNewSceneTitle] = useState('');
  const [editingScene, setEditingScene] = useState(null);

  const story = getCurrentStory();
  const act = story?.acts?.find(a => a.id === actId);

  if (!act) {
    return (
      <div className="p-4 text-center py-20">
        <p className="text-slate-400">Act not found</p>
        <button onClick={() => navigate(`/story/${storyId}`)} className="btn-primary mt-4">
          Back to Story
        </button>
      </div>
    );
  }

  const handleContentChange = (content) => {
    updateAct(actId, { content });
  };

  const handleAddScene = () => {
    if (!newSceneTitle.trim()) return;
    addScene(actId, {
      title: newSceneTitle,
      order: (act.scenes?.length || 0)
    });
    setNewSceneTitle('');
  };

  const handleUpdateScene = (sceneId, updates) => {
    updateScene(actId, sceneId, updates);
  };

  const handleDeleteScene = (sceneId) => {
    if (confirm('Delete this scene?')) {
      deleteScene(actId, sceneId);
    }
  };

  return (
    <div className="p-4 animate-fade-in pb-20">
      {/* Act Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
            style={{ backgroundColor: `${act.color}20`, color: act.color }}
          >
            {act.number}
          </div>
          <div>
            <h2 className="text-xl font-bold">{act.name}</h2>
            <p className="text-sm text-slate-400">{act.percentage}% of your story</p>
          </div>
        </div>
        <p className="text-slate-400">{act.description}</p>
      </div>

      {/* Main Content Area */}
      <div className="card mb-6">
        <label className="block text-sm font-medium text-slate-300 mb-2">
          What happens in this act?
        </label>
        <textarea
          value={act.content || ''}
          onChange={(e) => handleContentChange(e.target.value)}
          placeholder="Describe the key events, character moments, and plot developments..."
          className="textarea-field h-40"
        />
      </div>

      {/* Key Elements */}
      <div className="card mb-6">
        <button
          onClick={() => setShowElements(!showElements)}
          className="w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-400" />
            <span className="font-medium">Key Elements</span>
          </div>
          {showElements ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {showElements && act.keyElements && (
          <div className="mt-4 space-y-2">
            {act.keyElements.map((element, i) => (
              <div
                key={i}
                className="flex items-start gap-2 py-2 px-3 bg-slate-700/50 rounded-lg"
              >
                <div
                  className="w-2 h-2 rounded-full mt-2 shrink-0"
                  style={{ backgroundColor: act.color }}
                />
                <span className="text-sm text-slate-300">{element}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Guiding Questions */}
      {act.questions && act.questions.length > 0 && (
        <div className="card mb-6">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-primary-400" />
            <span className="font-medium">Guiding Questions</span>
          </div>

          <div className="space-y-2">
            {act.questions.map((question, i) => (
              <div key={i} className="border border-slate-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedQuestion(expandedQuestion === i ? null : i)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-slate-700/50 transition-colors"
                >
                  <span className="text-sm text-slate-300 pr-4">{question}</span>
                  {expandedQuestion === i ? (
                    <ChevronUp className="w-4 h-4 shrink-0 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 shrink-0 text-slate-500" />
                  )}
                </button>

                {expandedQuestion === i && (
                  <div className="p-3 pt-0">
                    <textarea
                      placeholder="Your thoughts..."
                      className="textarea-field h-24 text-sm"
                      value={act.questionAnswers?.[i] || ''}
                      onChange={(e) => {
                        const answers = { ...(act.questionAnswers || {}) };
                        answers[i] = e.target.value;
                        updateAct(actId, { questionAnswers: answers });
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scenes */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Scenes</h3>
          <span className="text-sm text-slate-500">
            {act.scenes?.length || 0} scene{(act.scenes?.length || 0) !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Add Scene */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newSceneTitle}
            onChange={(e) => setNewSceneTitle(e.target.value)}
            placeholder="New scene title..."
            className="input-field flex-1 py-2"
            onKeyDown={(e) => e.key === 'Enter' && handleAddScene()}
          />
          <button
            onClick={handleAddScene}
            disabled={!newSceneTitle.trim()}
            className="btn-primary px-4 py-2 disabled:opacity-50"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Scene List */}
        <div className="space-y-3">
          {act.scenes?.map((scene, index) => (
            <div key={scene.id} className="bg-slate-700/50 rounded-xl p-3">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-mono">{index + 1}</span>
                  {editingScene === scene.id ? (
                    <input
                      type="text"
                      value={scene.title}
                      onChange={(e) => handleUpdateScene(scene.id, { title: e.target.value })}
                      onBlur={() => setEditingScene(null)}
                      autoFocus
                      className="input-field py-1 px-2 text-sm"
                    />
                  ) : (
                    <button
                      onClick={() => setEditingScene(scene.id)}
                      className="font-medium text-sm hover:text-primary-400 transition-colors"
                    >
                      {scene.title}
                    </button>
                  )}
                </div>
                <button
                  onClick={() => handleDeleteScene(scene.id)}
                  className="p-1 text-slate-500 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <textarea
                value={scene.summary || ''}
                onChange={(e) => handleUpdateScene(scene.id, { summary: e.target.value })}
                placeholder="What happens in this scene?"
                className="w-full bg-slate-800 rounded-lg p-2 text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none h-20"
              />

              <div className="mt-2 flex gap-2">
                <input
                  type="text"
                  value={scene.location || ''}
                  onChange={(e) => handleUpdateScene(scene.id, { location: e.target.value })}
                  placeholder="Location"
                  className="flex-1 bg-slate-800 rounded-lg px-2 py-1 text-xs text-slate-400 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>
            </div>
          ))}

          {(!act.scenes || act.scenes.length === 0) && (
            <p className="text-center text-slate-500 py-4 text-sm">
              No scenes yet. Add your first scene above.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActDetail;
