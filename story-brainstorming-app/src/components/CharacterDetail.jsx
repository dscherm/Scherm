import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles, User } from 'lucide-react';
import useStoryStore from '../hooks/useStoryStore';
import { characterRoles, characterArchetypes, characterQuestions, characterTraits } from '../data/characterArchetypes';

const CharacterDetail = () => {
  const { storyId, characterId } = useParams();
  const navigate = useNavigate();
  const getCurrentStory = useStoryStore(state => state.getCurrentStory);
  const updateCharacter = useStoryStore(state => state.updateCharacter);

  const [expandedSection, setExpandedSection] = useState('basic');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const story = getCurrentStory();
  const character = story?.characters?.find(c => c.id === characterId);

  if (!character) {
    return (
      <div className="p-4 text-center py-20">
        <p className="text-slate-400">Character not found</p>
        <button onClick={() => navigate(`/story/${storyId}/characters`)} className="btn-primary mt-4">
          Back to Characters
        </button>
      </div>
    );
  }

  const handleUpdate = (field, value) => {
    updateCharacter(characterId, { [field]: value });
  };

  const toggleTrait = (trait) => {
    const currentTraits = character.traits || [];
    const newTraits = currentTraits.includes(trait)
      ? currentTraits.filter(t => t !== trait)
      : [...currentTraits, trait];
    handleUpdate('traits', newTraits);
  };

  const role = characterRoles.find(r => r.id === character.role);
  const archetype = characterArchetypes.find(a => a.id === character.archetype);

  const sections = [
    { id: 'basic', title: 'Basic Info', questions: characterQuestions.basic },
    { id: 'background', title: 'Background', questions: characterQuestions.background },
    { id: 'psychology', title: 'Psychology', questions: characterQuestions.psychology },
    { id: 'motivation', title: 'Motivation', questions: characterQuestions.motivation },
    { id: 'relationships', title: 'Relationships', questions: characterQuestions.relationships },
    { id: 'growth', title: 'Character Arc', questions: characterQuestions.growth }
  ];

  return (
    <div className="p-4 animate-fade-in pb-20">
      {/* Character Header */}
      <div className="card mb-6">
        <div className="flex items-start gap-4">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0"
            style={{
              backgroundColor: `${role?.color || '#64748b'}20`,
              color: role?.color || '#64748b'
            }}
          >
            {character.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <input
              type="text"
              value={character.name}
              onChange={(e) => handleUpdate('name', e.target.value)}
              className="text-xl font-bold bg-transparent border-none outline-none w-full"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {role && (
                <span
                  className="px-2 py-0.5 rounded-full text-xs"
                  style={{ backgroundColor: `${role.color}20`, color: role.color }}
                >
                  {role.name}
                </span>
              )}
              {archetype && (
                <span className="px-2 py-0.5 bg-slate-700 rounded-full text-xs text-slate-300">
                  {archetype.name}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Fields */}
      <div className="card mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-slate-500 uppercase tracking-wider">Age</label>
            <input
              type="text"
              value={character.age || ''}
              onChange={(e) => handleUpdate('age', e.target.value)}
              placeholder="Age"
              className="input-field py-2 mt-1"
            />
          </div>
          <div>
            <label className="text-xs text-slate-500 uppercase tracking-wider">Role</label>
            <select
              value={character.role || 'supporting'}
              onChange={(e) => handleUpdate('role', e.target.value)}
              className="input-field py-2 mt-1"
            >
              {characterRoles.map(r => (
                <option key={r.id} value={r.id}>{r.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="text-xs text-slate-500 uppercase tracking-wider">Goal</label>
          <input
            type="text"
            value={character.goal || ''}
            onChange={(e) => handleUpdate('goal', e.target.value)}
            placeholder="What do they want?"
            className="input-field py-2 mt-1"
          />
        </div>

        <div className="mt-4">
          <label className="text-xs text-slate-500 uppercase tracking-wider">Fatal Flaw</label>
          <input
            type="text"
            value={character.flaw || ''}
            onChange={(e) => handleUpdate('flaw', e.target.value)}
            placeholder="What's their weakness?"
            className="input-field py-2 mt-1"
          />
        </div>
      </div>

      {/* Archetype Info */}
      {archetype && (
        <div className="card mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="font-medium">Archetype: {archetype.name}</span>
          </div>
          <p className="text-sm text-slate-400 mb-3">{archetype.description}</p>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Strengths</p>
              <div className="flex flex-wrap gap-1">
                {archetype.strengths.map(s => (
                  <span key={s} className="px-2 py-0.5 bg-green-900/30 text-green-400 rounded text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Weaknesses</p>
              <div className="flex flex-wrap gap-1">
                {archetype.weaknesses.map(w => (
                  <span key={w} className="px-2 py-0.5 bg-red-900/30 text-red-400 rounded text-xs">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-700">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Examples</p>
            <p className="text-sm text-slate-400">{archetype.examples.join(', ')}</p>
          </div>
        </div>
      )}

      {/* Character Traits */}
      <div className="card mb-6">
        <h3 className="font-medium mb-3">Personality Traits</h3>

        <div className="space-y-4">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Positive</p>
            <div className="flex flex-wrap gap-2">
              {characterTraits.positive.map(trait => (
                <button
                  key={trait}
                  onClick={() => toggleTrait(trait)}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    character.traits?.includes(trait)
                      ? 'bg-green-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {trait}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Negative</p>
            <div className="flex flex-wrap gap-2">
              {characterTraits.negative.map(trait => (
                <button
                  key={trait}
                  onClick={() => toggleTrait(trait)}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    character.traits?.includes(trait)
                      ? 'bg-red-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {trait}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Neutral</p>
            <div className="flex flex-wrap gap-2">
              {characterTraits.neutral.map(trait => (
                <button
                  key={trait}
                  onClick={() => toggleTrait(trait)}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    character.traits?.includes(trait)
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {trait}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Questions Sections */}
      <div className="space-y-3">
        {sections.map(section => (
          <div key={section.id} className="card">
            <button
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary-400" />
                <span className="font-medium">{section.title}</span>
              </div>
              {expandedSection === section.id ? (
                <ChevronUp className="w-5 h-5 text-slate-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-500" />
              )}
            </button>

            {expandedSection === section.id && (
              <div className="mt-4 space-y-3">
                {section.questions.map((question, i) => (
                  <div key={i}>
                    <p className="text-sm text-slate-300 mb-2">{question}</p>
                    <textarea
                      value={character[`${section.id}Answer${i}`] || ''}
                      onChange={(e) => handleUpdate(`${section.id}Answer${i}`, e.target.value)}
                      placeholder="Your answer..."
                      className="textarea-field h-20 text-sm"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Free Notes */}
      <div className="card mt-6">
        <h3 className="font-medium mb-3">Additional Notes</h3>
        <textarea
          value={character.notes || ''}
          onChange={(e) => handleUpdate('notes', e.target.value)}
          placeholder="Any other notes about this character..."
          className="textarea-field h-32"
        />
      </div>
    </div>
  );
};

export default CharacterDetail;
