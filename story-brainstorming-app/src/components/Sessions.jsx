import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mic, Volume2, Trash2, FileText, Copy, Share2, ChevronDown, ChevronUp,
  Clock, BookOpen, Users, Globe, Sparkles, Edit3, Check, X
} from 'lucide-react';
import useStoryStore from '../hooks/useStoryStore';
import useVoice from '../hooks/useVoice';

const Sessions = () => {
  const navigate = useNavigate();
  const voiceSessions = useStoryStore(state => state.voiceSessions);
  const deleteVoiceSession = useStoryStore(state => state.deleteVoiceSession);
  const updateVoiceSession = useStoryStore(state => state.updateVoiceSession);
  const convertSessionToNote = useStoryStore(state => state.convertSessionToNote);
  const stories = useStoryStore(state => state.stories);
  const currentStoryId = useStoryStore(state => state.currentStoryId);

  const { speak, isSpeaking, stopSpeaking } = useVoice();

  const [expandedSession, setExpandedSession] = useState(null);
  const [editingSummary, setEditingSummary] = useState(null);
  const [summaryText, setSummaryText] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [filter, setFilter] = useState('all'); // all, brainstorm, plot, character, world

  const categories = [
    { id: 'all', label: 'All', icon: Mic, color: 'bg-slate-600' },
    { id: 'brainstorm', label: 'Ideas', icon: Sparkles, color: 'bg-purple-600' },
    { id: 'plot', label: 'Plot', icon: BookOpen, color: 'bg-primary-600' },
    { id: 'character', label: 'Character', icon: Users, color: 'bg-amber-600' },
    { id: 'world', label: 'World', icon: Globe, color: 'bg-green-600' }
  ];

  const filteredSessions = voiceSessions
    .filter(s => filter === 'all' || s.category === filter)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  const handleCopy = async (session) => {
    const text = `${session.title}\n${formatDate(session.createdAt)}\n\n${session.transcript}${session.summary ? `\n\n---\nSummary: ${session.summary}` : ''}`;
    await navigator.clipboard.writeText(text);
    setCopiedId(session.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShare = async (session) => {
    const text = `${session.title}\n${formatDate(session.createdAt)}\n\n${session.transcript}${session.summary ? `\n\n---\nSummary: ${session.summary}` : ''}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: session.title,
          text: text
        });
      } catch (e) {
        // User cancelled or error
        handleCopy(session);
      }
    } else {
      handleCopy(session);
    }
  };

  const handleConvertToNote = (sessionId) => {
    const note = convertSessionToNote(sessionId);
    if (note && currentStoryId) {
      navigate(`/story/${currentStoryId}/notes`);
    }
  };

  const handleSaveSummary = (sessionId) => {
    updateVoiceSession(sessionId, { summary: summaryText });
    setEditingSummary(null);
    setSummaryText('');
  };

  const handleDelete = (sessionId) => {
    if (confirm('Delete this session?')) {
      deleteVoiceSession(sessionId);
    }
  };

  const generateAutoSummary = (transcript) => {
    // Simple auto-summary: extract first sentence and key phrases
    const sentences = transcript.split(/[.!?]+/).filter(s => s.trim());
    if (sentences.length === 0) return '';

    const firstSentence = sentences[0].trim();
    const wordCount = transcript.split(/\s+/).length;

    if (sentences.length <= 2) {
      return firstSentence;
    }

    // Get key phrases (sentences with important words)
    const importantWords = ['protagonist', 'antagonist', 'conflict', 'theme', 'plot', 'character', 'story', 'idea', 'want', 'need', 'goal', 'fear', 'world', 'setting'];
    const keySentences = sentences
      .filter(s => importantWords.some(w => s.toLowerCase().includes(w)))
      .slice(0, 2);

    if (keySentences.length > 0) {
      return keySentences.join('. ').trim() + '.';
    }

    return `${firstSentence}. (${wordCount} words total)`;
  };

  return (
    <div className="p-4 animate-fade-in pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">Voice Sessions</h2>
          <p className="text-sm text-slate-400">{voiceSessions.length} recordings</p>
        </div>
        <button
          onClick={() => navigate('/voice')}
          className="btn-primary py-2 px-4 flex items-center gap-2"
        >
          <Mic className="w-4 h-4" />
          Record
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm whitespace-nowrap transition-colors ${
              filter === cat.id
                ? `${cat.color} text-white`
                : 'bg-slate-700 text-slate-300'
            }`}
          >
            <cat.icon className="w-4 h-4" />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sessions List */}
      {filteredSessions.length === 0 ? (
        <div className="card text-center py-12">
          <Mic className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <p className="text-slate-400 mb-4">
            {filter === 'all' ? 'No voice sessions yet' : `No ${filter} sessions`}
          </p>
          <button
            onClick={() => navigate('/voice')}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mic className="w-4 h-4" />
            Start Recording
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredSessions.map(session => {
            const isExpanded = expandedSession === session.id;
            const category = categories.find(c => c.id === session.category);
            const linkedStory = stories.find(s => s.id === session.linkedStoryId);

            return (
              <div key={session.id} className="card">
                {/* Session Header */}
                <button
                  onClick={() => setExpandedSession(isExpanded ? null : session.id)}
                  className="w-full flex items-start gap-3 text-left"
                >
                  <div className={`w-10 h-10 ${category?.color || 'bg-slate-600'} rounded-xl flex items-center justify-center shrink-0`}>
                    {category?.icon && <category.icon className="w-5 h-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{session.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatTime(session.duration)}
                      </span>
                      <span>{formatDate(session.createdAt)}</span>
                    </div>
                    {linkedStory && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-slate-700 rounded text-xs text-slate-400">
                        {linkedStory.title}
                      </span>
                    )}
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                  )}
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-700 animate-fade-in">
                    {/* Transcript */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-500 uppercase tracking-wider">Transcript</span>
                        <button
                          onClick={() => isSpeaking ? stopSpeaking() : speak(session.transcript)}
                          className="text-xs text-primary-400 flex items-center gap-1"
                        >
                          <Volume2 className="w-3 h-3" />
                          {isSpeaking ? 'Stop' : 'Read Aloud'}
                        </button>
                      </div>
                      <p className="text-sm text-slate-300 bg-slate-700/50 rounded-xl p-3 max-h-40 overflow-y-auto">
                        {session.transcript}
                      </p>
                    </div>

                    {/* Summary */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-500 uppercase tracking-wider">Summary</span>
                        {editingSummary !== session.id && (
                          <button
                            onClick={() => {
                              setEditingSummary(session.id);
                              setSummaryText(session.summary || generateAutoSummary(session.transcript));
                            }}
                            className="text-xs text-primary-400 flex items-center gap-1"
                          >
                            <Edit3 className="w-3 h-3" />
                            {session.summary ? 'Edit' : 'Add Summary'}
                          </button>
                        )}
                      </div>

                      {editingSummary === session.id ? (
                        <div>
                          <textarea
                            value={summaryText}
                            onChange={(e) => setSummaryText(e.target.value)}
                            placeholder="Write a summary of this session..."
                            className="textarea-field h-24 text-sm"
                            autoFocus
                          />
                          <div className="flex gap-2 mt-2">
                            <button
                              onClick={() => handleSaveSummary(session.id)}
                              className="btn-primary py-1 px-3 text-sm flex items-center gap-1"
                            >
                              <Check className="w-4 h-4" /> Save
                            </button>
                            <button
                              onClick={() => {
                                setEditingSummary(null);
                                setSummaryText('');
                              }}
                              className="btn-secondary py-1 px-3 text-sm flex items-center gap-1"
                            >
                              <X className="w-4 h-4" /> Cancel
                            </button>
                            <button
                              onClick={() => setSummaryText(generateAutoSummary(session.transcript))}
                              className="btn-secondary py-1 px-3 text-sm"
                            >
                              Auto-generate
                            </button>
                          </div>
                        </div>
                      ) : session.summary ? (
                        <p className="text-sm text-slate-400 italic bg-slate-700/30 rounded-xl p-3">
                          {session.summary}
                        </p>
                      ) : (
                        <p className="text-sm text-slate-500 italic">No summary yet</p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleCopy(session)}
                        className="btn-secondary py-2 px-3 text-sm flex items-center gap-1"
                      >
                        {copiedId === session.id ? (
                          <><Check className="w-4 h-4" /> Copied!</>
                        ) : (
                          <><Copy className="w-4 h-4" /> Copy</>
                        )}
                      </button>

                      <button
                        onClick={() => handleShare(session)}
                        className="btn-secondary py-2 px-3 text-sm flex items-center gap-1"
                      >
                        <Share2 className="w-4 h-4" /> Share
                      </button>

                      {currentStoryId && (
                        <button
                          onClick={() => handleConvertToNote(session.id)}
                          className="btn-secondary py-2 px-3 text-sm flex items-center gap-1"
                        >
                          <FileText className="w-4 h-4" /> To Note
                        </button>
                      )}

                      <button
                        onClick={() => handleDelete(session.id)}
                        className="btn-secondary py-2 px-3 text-sm flex items-center gap-1 text-red-400 hover:bg-red-900/30"
                      >
                        <Trash2 className="w-4 h-4" /> Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Sessions;
