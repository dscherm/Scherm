// Guitar Simulator using additive synthesis with harmonics and envelope

export interface GuitarNote {
  frequency: number;
  name: string;
}

// Standard guitar tuning notes
export const GUITAR_NOTES: GuitarNote[] = [
  { frequency: 82.41, name: 'E2 (Low E)' },
  { frequency: 110.00, name: 'A2' },
  { frequency: 146.83, name: 'D3' },
  { frequency: 196.00, name: 'G3' },
  { frequency: 246.94, name: 'B3' },
  { frequency: 329.63, name: 'E4 (High E)' },
];

// Common chord frequencies (root notes)
export const CHORD_PATTERNS = {
  'E Major': [82.41, 123.47, 164.81, 207.65, 246.94, 329.63],
  'A Major': [110.00, 138.59, 164.81, 220.00, 277.18, 329.63],
  'D Major': [146.83, 220.00, 293.66, 369.99],
  'G Major': [98.00, 123.47, 146.83, 196.00, 246.94, 392.00],
  'C Major': [130.81, 164.81, 196.00, 261.63, 329.63],
};

export type PlayMode = 'single' | 'strum' | 'riff';

export class GuitarSimulator {
  private ctx: AudioContext;
  private outputNode: GainNode;
  private activeOscillators: OscillatorNode[] = [];
  private activeGains: GainNode[] = [];
  private isPlaying = false;
  private playMode: PlayMode = 'single';
  private currentNote: GuitarNote = GUITAR_NOTES[0];
  private strumInterval: number | null = null;
  private riffInterval: number | null = null;

  constructor(ctx: AudioContext) {
    this.ctx = ctx;
    this.outputNode = ctx.createGain();
    this.outputNode.gain.value = 0.4;
  }

  getOutput(): GainNode {
    return this.outputNode;
  }

  setPlayMode(mode: PlayMode) {
    this.playMode = mode;
  }

  setNote(note: GuitarNote) {
    this.currentNote = note;
  }

  // Create a single plucked note with harmonics
  private pluckNote(frequency: number, duration: number = 2): void {
    const now = this.ctx.currentTime;

    // Harmonics with decreasing amplitude (simulates guitar string)
    const harmonics = [1, 2, 3, 4, 5, 6, 7, 8];
    const harmonicAmplitudes = [1, 0.5, 0.33, 0.25, 0.2, 0.16, 0.14, 0.12];

    for (let i = 0; i < harmonics.length; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Use sawtooth for odd harmonics, sine for even (more guitar-like)
      osc.type = i % 2 === 0 ? 'sawtooth' : 'sine';
      osc.frequency.value = frequency * harmonics[i];

      // Pluck envelope: fast attack, medium decay
      const amplitude = harmonicAmplitudes[i] * 0.15;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(amplitude, now + 0.005); // Fast attack
      gain.gain.exponentialRampToValueAtTime(amplitude * 0.3, now + 0.1); // Initial decay
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration); // Sustain decay

      osc.connect(gain);
      gain.connect(this.outputNode);

      osc.start(now);
      osc.stop(now + duration);

      this.activeOscillators.push(osc);
      this.activeGains.push(gain);

      // Cleanup after note ends
      osc.onended = () => {
        const oscIndex = this.activeOscillators.indexOf(osc);
        if (oscIndex > -1) this.activeOscillators.splice(oscIndex, 1);
        const gainIndex = this.activeGains.indexOf(gain);
        if (gainIndex > -1) this.activeGains.splice(gainIndex, 1);
      };
    }

    // Add a bit of pick noise
    this.addPickNoise();
  }

  // Add pick attack noise
  private addPickNoise(): void {
    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.02; // 20ms of noise
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize); // Decaying noise
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.value = 0.05;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 2000;

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.outputNode);

    noise.start(now);
  }

  // Strum a chord
  private strumChord(frequencies: number[]): void {
    const strumDelay = 0.03; // 30ms between strings
    frequencies.forEach((freq, i) => {
      setTimeout(() => {
        this.pluckNote(freq, 1.5);
      }, i * strumDelay * 1000);
    });
  }

  // Play a simple blues riff
  private playRiff(): void {
    const riffNotes = [
      { freq: 82.41, dur: 0.3 },  // E
      { freq: 98.00, dur: 0.3 },  // G
      { freq: 110.00, dur: 0.3 }, // A
      { freq: 98.00, dur: 0.3 },  // G
      { freq: 82.41, dur: 0.5 },  // E
    ];

    let delay = 0;
    riffNotes.forEach((note) => {
      setTimeout(() => {
        this.pluckNote(note.freq, note.dur + 0.2);
      }, delay * 1000);
      delay += note.dur;
    });
  }

  start(): void {
    if (this.isPlaying) return;
    this.isPlaying = true;

    switch (this.playMode) {
      case 'single':
        // Continuous plucking of single note
        this.pluckNote(this.currentNote.frequency);
        this.strumInterval = window.setInterval(() => {
          if (this.isPlaying) {
            this.pluckNote(this.currentNote.frequency);
          }
        }, 2000);
        break;

      case 'strum':
        // Strum E major chord repeatedly
        this.strumChord(CHORD_PATTERNS['E Major']);
        this.strumInterval = window.setInterval(() => {
          if (this.isPlaying) {
            // Alternate between chords
            const chords = Object.values(CHORD_PATTERNS);
            const randomChord = chords[Math.floor(Math.random() * chords.length)];
            this.strumChord(randomChord);
          }
        }, 2500);
        break;

      case 'riff':
        // Play blues riff repeatedly
        this.playRiff();
        this.riffInterval = window.setInterval(() => {
          if (this.isPlaying) {
            this.playRiff();
          }
        }, 2000);
        break;
    }
  }

  stop(): void {
    this.isPlaying = false;

    if (this.strumInterval) {
      clearInterval(this.strumInterval);
      this.strumInterval = null;
    }

    if (this.riffInterval) {
      clearInterval(this.riffInterval);
      this.riffInterval = null;
    }

    // Stop all active oscillators
    const now = this.ctx.currentTime;
    this.activeGains.forEach((gain) => {
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    });

    setTimeout(() => {
      this.activeOscillators.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {
          // Already stopped
        }
      });
      this.activeOscillators = [];
      this.activeGains = [];
    }, 150);
  }

  // Trigger a single pluck (for manual playing)
  pluck(): void {
    this.pluckNote(this.currentNote.frequency, 2);
  }

  disconnect(): void {
    this.stop();
    this.outputNode.disconnect();
  }
}
