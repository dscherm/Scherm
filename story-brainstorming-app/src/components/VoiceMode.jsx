import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, MicOff, Volume2, VolumeX, Save, X, Play, Square, Clock, BookOpen, Users, Globe, Sparkles, ChevronLeft, List } from 'lucide-react';
import useVoice from '../hooks/useVoice';
import useStoryStore from '../hooks/useStoryStore';

const VoiceMode = () => {
  const navigate = useNavigate();
  const {
    isListening,
    isSpeaking,
    transcript,
    interimTranscript,
    error,
    isSupported,
    toggleListening,
    speak,
    stopSpeaking,
    clearTranscript,
    setTranscript
  } = useVoice();

  const stories = useStoryStore(state => state.stories);
  const currentStoryId = useStoryStore(state => state.currentStoryId);
  const addVoiceSession = useStoryStore(state => state.addVoiceSession);
  const voiceSessions = useStoryStore(state => state.voiceSessions);

  const [category, setCategory] = useState('brainstorm');
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showSessions, setShowSessions] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');

  const timerRef = useRef(null);

  // Timer for session duration
  useEffect(() => {
    if (isListening && !sessionStartTime) {
      setSessionStartTime(Date.now());
    }

    if (isListening) {
      timerRef.current = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - sessionStartTime) / 1000));
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isListening, sessionStartTime]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const categories = [
    { id: 'brainstorm', label: 'Ideas', icon: Sparkles, color: 'bg-purple-600' },
    { id: 'plot', label: 'Plot', icon: BookOpen, color: 'bg-primary-600' },
    { id: 'character', label: 'Character', icon: Users, color: 'bg-amber-600' },
    { id: 'world', label: 'World', icon: Globe, color: 'bg-green-600' }
  ];

  const handleSave = () => {
    if (!transcript.trim()) {
      speak('Nothing to save yet. Start talking to record your ideas.');
      return;
    }

    const session = addVoiceSession({
      transcript: transcript.trim(),
      linkedStoryId: currentStoryId,
      category,
      duration: elapsedTime,
      title: `${categories.find(c => c.id === category)?.label || 'Voice'} Session`
    });

    setSavedMessage('Session saved!');
    speak('Session saved.');
    setTimeout(() => setSavedMessage(''), 3000);

    // Reset
    clearTranscript();
    setSessionStartTime(null);
    setElapsedTime(0);
  };

  const handleClear = () => {
    clearTranscript();
    setSessionStartTime(null);
    setElapsedTime(0);
    speak('Cleared.');
  };

  const handleReadBack = () => {
    if (!transcript.trim()) {
      speak('Nothing to read back yet.');
      return;
    }
    speak(transcript);
  };

  const prompts = {
    brainstorm: [
      'What if the story started differently?',
      'What is the core conflict?',
      'What makes this story unique?',
      'What emotion should readers feel?'
    ],
    plot: [
      'What happens in the opening scene?',
      'What is the inciting incident?',
      'What is the climax?',
      'How does the story end?'
    ],
    character: [
      'What does the protagonist want?',
      'What is their greatest fear?',
      'What flaw holds them back?',
      'How do they change by the end?'
    ],
    world: [
      'What makes this world unique?',
      'What are the rules of this world?',
      'What conflict exists in society?',
      'What does daily life look like?'
    ]
  };

  const handlePrompt = (prompt) => {
    speak(prompt);
  };

  if (!isSupported) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
        <div className="text-center">
          <MicOff className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Voice Not Supported</h2>
          <p className="text-slate-400 mb-6">
            Your browser doesn't support voice features. Try using Safari on iPhone or Chrome on desktop.
          </p>
          <button onClick={() => navigate(-1)} className="btn-primary">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (showSessions) {
    return (
      <div className="min-h-screen bg-slate-900 safe-area-top safe-area-bottom">
        <header className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center gap-3">
          <button onClick={() => setShowSessions(false)} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold">Voice Sessions</h1>
        </header>

        <div className="p-4 space-y-3">
          {voiceSessions.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              No voice sessions yet. Start recording!
            </div>
          ) : (
            voiceSessions.slice().reverse().map(session => (
              <div key={session.id} className="card">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-medium">{session.title}</h3>
                    <p className="text-xs text-slate-500">
                      {new Date(session.createdAt).toLocaleString()} · {formatTime(session.duration)}
                    </p>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    categories.find(c => c.id === session.category)?.color || 'bg-slate-700'
                  }`}>
                    {session.category}
                  </span>
                </div>
                <p className="text-sm text-slate-300 line-clamp-3">{session.transcript}</p>
                <button
                  onClick={() => speak(session.transcript)}
                  className="mt-3 text-sm text-primary-400 flex items-center gap-1"
                >
                  <Volume2 className="w-4 h-4" /> Read Aloud
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col safe-area-top safe-area-bottom">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <X className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">Voice Mode</h1>
        <button onClick={() => setShowSessions(true)} className="p-2 -mr-2">
          <List className="w-6 h-6" />
        </button>
      </header>

      {/* Category Selection */}
      <div className="p-4 flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
              category === cat.id
                ? `${cat.color} text-white scale-105`
                : 'bg-slate-700 text-slate-300'
            }`}
          >
            <cat.icon className="w-4 h-4" />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main Recording Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Timer */}
        {(isListening || elapsedTime > 0) && (
          <div className="flex items-center gap-2 text-2xl font-mono text-slate-400 mb-6">
            <Clock className="w-5 h-5" />
            {formatTime(elapsedTime)}
          </div>
        )}

        {/* Big Mic Button */}
        <button
          onClick={toggleListening}
          className={`w-32 h-32 rounded-full flex items-center justify-center transition-all ${
            isListening
              ? 'bg-red-500 animate-pulse scale-110'
              : 'bg-primary-600 hover:bg-primary-500'
          }`}
        >
          {isListening ? (
            <MicOff className="w-14 h-14" />
          ) : (
            <Mic className="w-14 h-14" />
          )}
        </button>

        <p className="mt-4 text-lg text-slate-400">
          {isListening ? 'Tap to stop' : 'Tap to speak'}
        </p>

        {error && (
          <p className="mt-2 text-red-400 text-sm">{error}</p>
        )}

        {savedMessage && (
          <p className="mt-2 text-green-400 text-sm animate-fade-in">{savedMessage}</p>
        )}
      </div>

      {/* Transcript Display */}
      <div className="p-4 bg-slate-800/50 max-h-48 overflow-y-auto">
        {transcript || interimTranscript ? (
          <p className="text-slate-200">
            {transcript}
            {interimTranscript && (
              <span className="text-slate-500 italic"> {interimTranscript}</span>
            )}
          </p>
        ) : (
          <p className="text-slate-500 text-center">
            Your words will appear here...
          </p>
        )}
      </div>

      {/* Quick Prompts */}
      <div className="p-4 border-t border-slate-700">
        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Tap to hear a prompt</p>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {prompts[category].map((prompt, i) => (
            <button
              key={i}
              onClick={() => handlePrompt(prompt)}
              disabled={isSpeaking}
              className="px-3 py-2 bg-slate-700 rounded-lg text-sm text-slate-300 whitespace-nowrap hover:bg-slate-600 disabled:opacity-50"
            >
              {prompt.substring(0, 25)}...
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 bg-slate-800 border-t border-slate-700 flex gap-3 safe-area-bottom">
        <button
          onClick={handleReadBack}
          disabled={!transcript || isSpeaking}
          className="flex-1 btn-secondary py-3 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          {isSpeaking ? 'Stop' : 'Read Back'}
        </button>

        <button
          onClick={isSpeaking ? stopSpeaking : handleClear}
          disabled={!transcript && !isSpeaking}
          className="px-4 py-3 bg-slate-700 rounded-xl disabled:opacity-50"
        >
          <Square className="w-5 h-5" />
        </button>

        <button
          onClick={handleSave}
          disabled={!transcript}
          className="flex-1 btn-primary py-3 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Save className="w-5 h-5" />
          Save
        </button>
      </div>
    </div>
  );
};

export default VoiceMode;
