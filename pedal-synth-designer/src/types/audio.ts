export interface AudioState {
  isPlaying: boolean;
  isRecording: boolean;
  volume: number;
  inputGain: number;
}

export interface WaveformData {
  timeData: Float32Array;
  frequencyData: Float32Array;
}

export interface AudioAnalysis {
  spectralCentroid: number;
  spectralRolloff: number;
  rms: number;
  zeroCrossingRate: number;
  fundamentalFrequency: number | null;
  harmonics: number[];
}

export interface SoundProfile {
  brightness: number; // 0-1, derived from spectral centroid
  warmth: number; // 0-1, low-frequency energy
  distortionAmount: number; // 0-1
  distortionType: 'soft' | 'hard' | 'fuzz' | 'clean';
  attack: number; // ms
  sustain: number; // 0-1
  harmonicRichness: number; // 0-1
}
