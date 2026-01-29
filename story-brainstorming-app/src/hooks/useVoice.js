import { useState, useEffect, useCallback, useRef } from 'react';

// Check for browser support
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const speechSynthesis = window.speechSynthesis;

export const useVoice = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [error, setError] = useState(null);
  const [isSupported, setIsSupported] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  const recognitionRef = useRef(null);
  const utteranceRef = useRef(null);

  // Initialize speech recognition
  useEffect(() => {
    if (SpeechRecognition) {
      setIsSupported(true);
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setError(null);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        setError(event.error);
        setIsListening(false);
      };

      recognition.onresult = (event) => {
        let interim = '';
        let final = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            final += transcript;
          } else {
            interim += transcript;
          }
        }

        if (final) {
          setTranscript(prev => prev + (prev ? ' ' : '') + final);
        }
        setInterimTranscript(interim);
      };

      recognitionRef.current = recognition;
    } else {
      setIsSupported(false);
    }

    // Load available voices
    const loadVoices = () => {
      const availableVoices = speechSynthesis?.getVoices() || [];
      setVoices(availableVoices);
      // Prefer a natural-sounding English voice
      const preferred = availableVoices.find(v =>
        v.lang.startsWith('en') && (v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('Google'))
      ) || availableVoices.find(v => v.lang.startsWith('en'));
      if (preferred) setSelectedVoice(preferred);
    };

    loadVoices();
    speechSynthesis?.addEventListener('voiceschanged', loadVoices);

    return () => {
      speechSynthesis?.removeEventListener('voiceschanged', loadVoices);
      recognitionRef.current?.stop();
    };
  }, []);

  // Start listening
  const startListening = useCallback(() => {
    if (!recognitionRef.current) {
      setError('Speech recognition not supported');
      return;
    }

    setTranscript('');
    setInterimTranscript('');
    setError(null);

    try {
      recognitionRef.current.start();
    } catch (e) {
      // Already started, restart
      recognitionRef.current.stop();
      setTimeout(() => recognitionRef.current.start(), 100);
    }
  }, []);

  // Stop listening
  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setInterimTranscript('');
  }, []);

  // Toggle listening
  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  // Speak text
  const speak = useCallback((text, options = {}) => {
    if (!speechSynthesis) {
      setError('Speech synthesis not supported');
      return Promise.reject('Not supported');
    }

    // Cancel any ongoing speech
    speechSynthesis.cancel();

    return new Promise((resolve, reject) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = options.voice || selectedVoice;
      utterance.rate = options.rate || 1;
      utterance.pitch = options.pitch || 1;
      utterance.volume = options.volume || 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        resolve();
      };
      utterance.onerror = (e) => {
        setIsSpeaking(false);
        reject(e);
      };

      utteranceRef.current = utterance;
      speechSynthesis.speak(utterance);
    });
  }, [selectedVoice]);

  // Stop speaking
  const stopSpeaking = useCallback(() => {
    speechSynthesis?.cancel();
    setIsSpeaking(false);
  }, []);

  // Clear transcript
  const clearTranscript = useCallback(() => {
    setTranscript('');
    setInterimTranscript('');
  }, []);

  return {
    // State
    isListening,
    isSpeaking,
    transcript,
    interimTranscript,
    error,
    isSupported,
    voices,
    selectedVoice,

    // Actions
    startListening,
    stopListening,
    toggleListening,
    speak,
    stopSpeaking,
    clearTranscript,
    setSelectedVoice,
    setTranscript
  };
};

export default useVoice;
