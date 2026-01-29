import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight, Check, Sparkles } from 'lucide-react';
import useStoryStore from '../hooks/useStoryStore';
import { storyStructures, structureList } from '../data/storyStructures';
import { genrePrompts } from '../data/brainstormingPrompts';

const NewStory = () => {
  const navigate = useNavigate();
  const createStory = useStoryStore(state => state.createStory);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    logline: '',
    genre: '',
    structureType: 'threeAct'
  });

  const genres = Object.keys(genrePrompts).map(key => ({
    id: key,
    name: genrePrompts[key].name
  }));

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleCreate();
    }
  };

  const handleCreate = () => {
    const structure = storyStructures[formData.structureType];
    const acts = structure.acts.map(act => ({
      ...act,
      content: '',
      scenes: [],
      notes: ''
    }));

    const newStory = createStory({
      ...formData,
      acts
    });

    navigate(`/story/${newStory.id}`);
  };

  const canProceed = () => {
    if (step === 1) return formData.title.trim().length > 0;
    if (step === 2) return formData.structureType;
    return true;
  };

  return (
    <div className="p-4 animate-slide-up">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3].map(s => (
          <div
            key={s}
            className={`w-3 h-3 rounded-full transition-colors ${
              s === step
                ? 'bg-primary-500'
                : s < step
                ? 'bg-primary-700'
                : 'bg-slate-700'
            }`}
          />
        ))}
      </div>

      {/* Step 1: Basic Info */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-600/20 rounded-2xl mb-4">
              <BookOpen className="w-7 h-7 text-primary-400" />
            </div>
            <h2 className="text-xl font-bold">Create a New Story</h2>
            <p className="text-slate-400 mt-1">Let's start with the basics</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Story Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter your story title"
              className="input-field"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Logline (optional)
            </label>
            <textarea
              value={formData.logline}
              onChange={(e) => setFormData({ ...formData, logline: e.target.value })}
              placeholder="A one or two sentence summary of your story"
              className="textarea-field h-24"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Genre (optional)
            </label>
            <div className="flex flex-wrap gap-2">
              {genres.map(genre => (
                <button
                  key={genre.id}
                  onClick={() => setFormData({ ...formData, genre: formData.genre === genre.name ? '' : genre.name })}
                  className={`px-4 py-2 rounded-xl text-sm transition-colors ${
                    formData.genre === genre.name
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {genre.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Choose Structure */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-600/20 rounded-2xl mb-4">
              <Sparkles className="w-7 h-7 text-amber-400" />
            </div>
            <h2 className="text-xl font-bold">Choose Your Structure</h2>
            <p className="text-slate-400 mt-1">Select a narrative framework</p>
          </div>

          <div className="space-y-3">
            {structureList.map(structure => {
              const isSelected = formData.structureType === structure.id;
              return (
                <button
                  key={structure.id}
                  onClick={() => setFormData({ ...formData, structureType: structure.id })}
                  className={`w-full card text-left transition-all ${
                    isSelected
                      ? 'ring-2 ring-primary-500 bg-primary-900/20'
                      : 'hover:bg-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{structure.name}</h4>
                        <span className="px-2 py-0.5 bg-slate-700 rounded-full text-xs text-slate-400">
                          {structure.actCount} acts
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mt-1">{structure.description}</p>
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 3: Preview & Confirm */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-600/20 rounded-2xl mb-4">
              <Check className="w-7 h-7 text-green-400" />
            </div>
            <h2 className="text-xl font-bold">Ready to Begin!</h2>
            <p className="text-slate-400 mt-1">Review your story setup</p>
          </div>

          <div className="card space-y-4">
            <div>
              <label className="text-xs text-slate-500 uppercase tracking-wider">Title</label>
              <p className="text-lg font-semibold">{formData.title}</p>
            </div>

            {formData.logline && (
              <div>
                <label className="text-xs text-slate-500 uppercase tracking-wider">Logline</label>
                <p className="text-slate-300">{formData.logline}</p>
              </div>
            )}

            <div className="flex gap-4">
              {formData.genre && (
                <div>
                  <label className="text-xs text-slate-500 uppercase tracking-wider">Genre</label>
                  <p className="text-slate-300">{formData.genre}</p>
                </div>
              )}
              <div>
                <label className="text-xs text-slate-500 uppercase tracking-wider">Structure</label>
                <p className="text-slate-300">
                  {structureList.find(s => s.id === formData.structureType)?.name}
                </p>
              </div>
            </div>
          </div>

          {/* Structure Preview */}
          <div className="card">
            <h4 className="font-medium mb-3">Story Structure Preview</h4>
            <div className="space-y-2">
              {storyStructures[formData.structureType].acts.map((act, index) => (
                <div
                  key={act.id}
                  className="flex items-center gap-3 py-2"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: `${act.color}20`, color: act.color }}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{act.name}</p>
                    <p className="text-xs text-slate-500">{act.percentage}% of story</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="mt-8 flex gap-3">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="btn-secondary flex-1"
          >
            Back
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={!canProceed()}
          className={`btn-primary flex-1 flex items-center justify-center gap-2 ${
            !canProceed() ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {step === 3 ? 'Create Story' : 'Continue'}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NewStory;
