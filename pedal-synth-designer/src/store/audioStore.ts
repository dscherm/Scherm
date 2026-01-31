import { create } from 'zustand';
import type { AudioState, WaveformData, AudioAnalysis, SoundProfile } from '../types';

interface AudioStore extends AudioState {
  // Audio context
  audioContext: AudioContext | null;
  analyser: AnalyserNode | null;

  // Waveform data
  waveformData: WaveformData | null;

  // Analysis results
  analysis: AudioAnalysis | null;
  soundProfile: SoundProfile | null;

  // Actions
  initAudio: () => Promise<void>;
  setVolume: (volume: number) => void;
  setInputGain: (gain: number) => void;
  togglePlayback: () => void;
  startRecording: () => Promise<void>;
  stopRecording: () => void;
  updateWaveformData: (data: WaveformData) => void;
  updateAnalysis: (analysis: AudioAnalysis) => void;
  calculateSoundProfile: () => void;
}

export const useAudioStore = create<AudioStore>((set, get) => ({
  // Initial state
  isPlaying: false,
  isRecording: false,
  volume: 0.7,
  inputGain: 1.0,
  audioContext: null,
  analyser: null,
  waveformData: null,
  analysis: null,
  soundProfile: null,

  initAudio: async () => {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    analyser.smoothingTimeConstant = 0.8;

    set({ audioContext, analyser });
  },

  setVolume: (volume) => {
    set({ volume: Math.max(0, Math.min(1, volume)) });
  },

  setInputGain: (gain) => {
    set({ inputGain: Math.max(0, Math.min(2, gain)) });
  },

  togglePlayback: () => {
    set((state) => ({ isPlaying: !state.isPlaying }));
  },

  startRecording: async () => {
    const { audioContext, analyser } = get();

    if (!audioContext || !analyser) {
      await get().initAudio();
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const { audioContext: ctx, analyser: anal } = get();

      if (ctx && anal) {
        const source = ctx.createMediaStreamSource(stream);
        source.connect(anal);
        set({ isRecording: true });
      }
    } catch (err) {
      console.error('Failed to start recording:', err);
    }
  },

  stopRecording: () => {
    set({ isRecording: false });
  },

  updateWaveformData: (data) => {
    set({ waveformData: data });
  },

  updateAnalysis: (analysis) => {
    set({ analysis });
    get().calculateSoundProfile();
  },

  calculateSoundProfile: () => {
    const { analysis } = get();
    if (!analysis) return;

    // Calculate sound profile from analysis
    const brightness = Math.min(1, analysis.spectralCentroid / 8000);
    const warmth = 1 - brightness;
    const harmonicRichness = analysis.harmonics.length > 0
      ? Math.min(1, analysis.harmonics.reduce((a, b) => a + b, 0) / 10)
      : 0;

    // Estimate distortion from harmonic content
    const evenHarmonics = analysis.harmonics.filter((_, i) => i % 2 === 1);
    const oddHarmonics = analysis.harmonics.filter((_, i) => i % 2 === 0);
    const evenSum = evenHarmonics.reduce((a, b) => a + b, 0);
    const oddSum = oddHarmonics.reduce((a, b) => a + b, 0);

    let distortionType: SoundProfile['distortionType'] = 'clean';
    let distortionAmount = 0;

    if (harmonicRichness > 0.1) {
      distortionAmount = harmonicRichness;
      if (evenSum > oddSum * 1.5) {
        distortionType = 'soft';
      } else if (oddSum > evenSum * 2) {
        distortionType = 'hard';
      } else if (harmonicRichness > 0.5) {
        distortionType = 'fuzz';
      }
    }

    const soundProfile: SoundProfile = {
      brightness,
      warmth,
      distortionAmount,
      distortionType,
      attack: 10, // Would need envelope analysis
      sustain: 0.5,
      harmonicRichness,
    };

    set({ soundProfile });
  },
}));
