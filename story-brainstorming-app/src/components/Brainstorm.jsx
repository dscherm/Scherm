import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, RefreshCw, Copy, Check, BookOpen, Users, Globe, Palette, ChevronDown, ChevronUp } from 'lucide-react';
import {
  storyStarters,
  genrePrompts,
  plotQuestions,
  worldBuildingQuestions,
  themeQuestions,
  getRandomPrompt
} from '../data/brainstormingPrompts';

const Brainstorm = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('starters');
  const [currentPrompt, setCurrentPrompt] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('what-if');
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [copied, setCopied] = useState(false);
  const [notes, setNotes] = useState('');

  const tabs = [
    { id: 'starters', label: 'Story Starters', icon: Sparkles },
    { id: 'genre', label: 'Genre Prompts', icon: Palette },
    { id: 'plot', label: 'Plot Questions', icon: BookOpen },
    { id: 'world', label: 'World Building', icon: Globe },
    { id: 'character', label: 'Character', icon: Users }
  ];

  const handleGeneratePrompt = () => {
    const prompt = getRandomPrompt(selectedCategory);
    setCurrentPrompt(prompt);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderStarters = () => (
    <div className="space-y-6">
      {/* Category Selection */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {storyStarters.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-colors ${
              selectedCategory === cat.id
                ? 'bg-primary-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Random Prompt Generator */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Random Prompt</h3>
          <button
            onClick={handleGeneratePrompt}
            className="btn-primary py-2 px-4 flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${currentPrompt ? 'animate-spin-once' : ''}`} />
            Generate
          </button>
        </div>

        {currentPrompt ? (
          <div className="bg-slate-700/50 rounded-xl p-4">
            <p className="text-lg text-slate-200 italic">"{currentPrompt}"</p>
            <button
              onClick={() => handleCopy(currentPrompt)}
              className="mt-3 text-sm text-primary-400 flex items-center gap-1 hover:text-primary-300"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy to clipboard'}
            </button>
          </div>
        ) : (
          <p className="text-slate-500 text-center py-8">
            Click generate to get a random story prompt
          </p>
        )}
      </div>

      {/* All Prompts in Category */}
      <div className="card">
        <h3 className="font-medium mb-4">
          All {storyStarters.find(c => c.id === selectedCategory)?.category} Prompts
        </h3>
        <div className="space-y-2">
          {storyStarters.find(c => c.id === selectedCategory)?.prompts.map((prompt, i) => (
            <div
              key={i}
              className="p-3 bg-slate-700/50 rounded-xl text-sm text-slate-300 flex items-start justify-between gap-2"
            >
              <span>{prompt}</span>
              <button
                onClick={() => handleCopy(prompt)}
                className="text-slate-500 hover:text-primary-400 shrink-0"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGenrePrompts = () => (
    <div className="space-y-4">
      {/* Genre Selection */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {Object.keys(genrePrompts).map(key => (
          <button
            key={key}
            onClick={() => setSelectedGenre(selectedGenre === key ? null : key)}
            className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-colors ${
              selectedGenre === key
                ? 'bg-primary-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {genrePrompts[key].name}
          </button>
        ))}
      </div>

      {selectedGenre && (
        <div className="card animate-fade-in">
          <h3 className="text-lg font-semibold mb-4">{genrePrompts[selectedGenre].name}</h3>

          <div className="mb-6">
            <h4 className="text-sm text-slate-400 uppercase tracking-wider mb-3">Key Questions</h4>
            <div className="space-y-2">
              {genrePrompts[selectedGenre].questions.map((q, i) => (
                <div key={i} className="p-3 bg-slate-700/50 rounded-xl text-sm text-slate-300">
                  {q}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm text-slate-400 uppercase tracking-wider mb-3">Common Themes</h4>
            <div className="flex flex-wrap gap-2">
              {genrePrompts[selectedGenre].themes.map((theme, i) => (
                <span key={i} className="px-3 py-1.5 bg-slate-700 rounded-lg text-sm text-slate-300">
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {!selectedGenre && (
        <div className="card text-center py-12">
          <Palette className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <p className="text-slate-400">Select a genre to see specific prompts</p>
        </div>
      )}
    </div>
  );

  const renderPlotQuestions = () => (
    <div className="space-y-3">
      {Object.entries(plotQuestions).map(([key, questions]) => (
        <div key={key} className="card">
          <button
            onClick={() => setExpandedSection(expandedSection === key ? null : key)}
            className="w-full flex items-center justify-between"
          >
            <h3 className="font-medium capitalize">{key} Questions</h3>
            {expandedSection === key ? (
              <ChevronUp className="w-5 h-5 text-slate-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-500" />
            )}
          </button>

          {expandedSection === key && (
            <div className="mt-4 space-y-2">
              {questions.map((q, i) => (
                <div key={i} className="p-3 bg-slate-700/50 rounded-xl text-sm text-slate-300 flex items-start justify-between gap-2">
                  <span>{q}</span>
                  <button
                    onClick={() => handleCopy(q)}
                    className="text-slate-500 hover:text-primary-400 shrink-0"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderWorldBuilding = () => (
    <div className="card">
      <h3 className="font-medium mb-4">World Building Questions</h3>
      <div className="space-y-2">
        {worldBuildingQuestions.map((q, i) => (
          <div key={i} className="p-3 bg-slate-700/50 rounded-xl text-sm text-slate-300 flex items-start justify-between gap-2">
            <span>{q}</span>
            <button
              onClick={() => handleCopy(q)}
              className="text-slate-500 hover:text-primary-400 shrink-0"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h4 className="text-sm text-slate-400 uppercase tracking-wider mb-3">Theme Questions</h4>
        <div className="space-y-2">
          {themeQuestions.map((q, i) => (
            <div key={i} className="p-3 bg-slate-700/50 rounded-xl text-sm text-slate-300 flex items-start justify-between gap-2">
              <span>{q}</span>
              <button
                onClick={() => handleCopy(q)}
                className="text-slate-500 hover:text-primary-400 shrink-0"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCharacter = () => (
    <div className="space-y-4">
      <div className="card">
        <h3 className="font-medium mb-4">Quick Character Generator</h3>
        <p className="text-slate-400 text-sm mb-4">
          Use these prompts to quickly brainstorm character ideas
        </p>

        <div className="space-y-2">
          {[
            "A character who has lost something important and will do anything to get it back",
            "Someone keeping a secret that could destroy their relationships",
            "A person forced into a role they never wanted",
            "An expert in their field who suddenly finds their skills useless",
            "Someone who appears to be a villain but has noble motivations",
            "A character torn between two cultures or worlds",
            "A person on the run from their past",
            "Someone who knows more than they're letting on",
            "A character whose greatest strength is also their greatest weakness",
            "A person who must become the thing they hate most to save what they love"
          ].map((prompt, i) => (
            <div key={i} className="p-3 bg-slate-700/50 rounded-xl text-sm text-slate-300 flex items-start justify-between gap-2">
              <span>{prompt}</span>
              <button
                onClick={() => handleCopy(prompt)}
                className="text-slate-500 hover:text-primary-400 shrink-0"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 animate-fade-in pb-24">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-600/20 rounded-2xl mb-3">
          <Sparkles className="w-7 h-7 text-amber-400" />
        </div>
        <h2 className="text-xl font-bold">Brainstorm</h2>
        <p className="text-slate-400 text-sm">Get inspired with prompts and questions</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-colors flex items-center gap-2 ${
              activeTab === tab.id
                ? 'bg-primary-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'starters' && renderStarters()}
      {activeTab === 'genre' && renderGenrePrompts()}
      {activeTab === 'plot' && renderPlotQuestions()}
      {activeTab === 'world' && renderWorldBuilding()}
      {activeTab === 'character' && renderCharacter()}

      {/* Quick Notes */}
      <div className="card mt-6">
        <h3 className="font-medium mb-3">Quick Notes</h3>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Jot down your ideas here..."
          className="textarea-field h-32"
        />
      </div>
    </div>
  );
};

export default Brainstorm;
