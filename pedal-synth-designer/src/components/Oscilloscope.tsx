import { useEffect, useRef, useState, useCallback } from 'react';
import { useAudioStore, useCircuitStore } from '../store';
import { Activity, BarChart3, Play, Square, Volume2, Cpu, Guitar, Music } from 'lucide-react';
import { buildSimulatedCircuit, disconnectSimulatedCircuit, describeCircuitSound, type SimulatedCircuit } from '../utils/circuitSimulator';
import { GuitarSimulator, GUITAR_NOTES, type PlayMode, type GuitarNote } from '../utils/guitarSimulator';

type ViewMode = 'waveform' | 'spectrum';
type InputSource = 'oscillator' | 'guitar';
type TestSignal = 'sine' | 'square' | 'sawtooth' | 'triangle';

export function Oscilloscope() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const guitarRef = useRef<GuitarSimulator | null>(null);
  const simulatedCircuitRef = useRef<SimulatedCircuit | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('waveform');
  const [isTestPlaying, setIsTestPlaying] = useState(false);
  const [inputSource, setInputSource] = useState<InputSource>('guitar');
  const [testSignal, setTestSignal] = useState<TestSignal>('sine');
  const [testFrequency, setTestFrequency] = useState(440);
  const [guitarNote, setGuitarNote] = useState<GuitarNote>(GUITAR_NOTES[0]);
  const [guitarMode, setGuitarMode] = useState<PlayMode>('single');
  const [useCircuit, setUseCircuit] = useState(true);
  const [circuitDescription, setCircuitDescription] = useState<string>('');

  const { audioContext, analyser, initAudio } = useAudioStore();
  const { components, wires } = useCircuitStore();

  // Initialize audio on first interaction
  useEffect(() => {
    const handleInteraction = async () => {
      if (!audioContext) {
        await initAudio();
      }
      window.removeEventListener('click', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    return () => window.removeEventListener('click', handleInteraction);
  }, [audioContext, initAudio]);

  // Build/rebuild circuit simulation when circuit changes
  const rebuildCircuit = useCallback(() => {
    const ctx = useAudioStore.getState().audioContext;
    if (!ctx) return;

    // Disconnect old circuit
    if (simulatedCircuitRef.current) {
      disconnectSimulatedCircuit(simulatedCircuitRef.current);
    }

    // Build new circuit
    const circuit = buildSimulatedCircuit(ctx, components, wires);
    simulatedCircuitRef.current = circuit;

    // Update description
    if (circuit.isValid) {
      const desc = describeCircuitSound(components, circuit.signalPath);
      setCircuitDescription(desc);
    } else {
      setCircuitDescription('No valid signal path');
    }

    return circuit;
  }, [components, wires]);

  // Stop all audio sources
  const stopAllAudio = useCallback(() => {
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
      oscillatorRef.current = null;
    }
    if (gainNodeRef.current) {
      gainNodeRef.current.disconnect();
      gainNodeRef.current = null;
    }
    if (guitarRef.current) {
      guitarRef.current.stop();
      guitarRef.current.disconnect();
      guitarRef.current = null;
    }
    if (simulatedCircuitRef.current) {
      disconnectSimulatedCircuit(simulatedCircuitRef.current);
      simulatedCircuitRef.current = null;
    }
  }, []);

  // Start/stop test signal
  const toggleTestSignal = useCallback(async () => {
    if (!audioContext) {
      await initAudio();
    }

    const ctx = useAudioStore.getState().audioContext;
    const anal = useAudioStore.getState().analyser;

    if (!ctx || !anal) return;

    if (isTestPlaying) {
      // Stop
      stopAllAudio();
      setIsTestPlaying(false);
    } else {
      // Start
      const outputGain = ctx.createGain();
      outputGain.gain.setValueAtTime(0.4, ctx.currentTime);

      let sourceNode: AudioNode;

      if (inputSource === 'guitar') {
        // Use guitar simulator
        const guitar = new GuitarSimulator(ctx);
        guitar.setNote(guitarNote);
        guitar.setPlayMode(guitarMode);
        guitarRef.current = guitar;
        sourceNode = guitar.getOutput();
        guitar.start();
      } else {
        // Use oscillator
        const osc = ctx.createOscillator();
        const inputGain = ctx.createGain();

        osc.type = testSignal;
        osc.frequency.setValueAtTime(testFrequency, ctx.currentTime);
        inputGain.gain.setValueAtTime(0.5, ctx.currentTime);

        osc.connect(inputGain);
        osc.start();
        oscillatorRef.current = osc;
        gainNodeRef.current = inputGain;
        sourceNode = inputGain;
      }

      // Route through circuit if enabled and valid
      if (useCircuit && components.length > 0 && wires.length > 0) {
        const circuit = rebuildCircuit();
        if (circuit && circuit.isValid && circuit.inputNode && circuit.outputNode) {
          sourceNode.connect(circuit.inputNode);
          circuit.outputNode.connect(outputGain);
        } else {
          // No valid circuit, direct connection
          sourceNode.connect(outputGain);
        }
      } else {
        // Direct connection (bypass circuit)
        sourceNode.connect(outputGain);
      }

      outputGain.connect(anal);
      outputGain.connect(ctx.destination);

      setIsTestPlaying(true);
    }
  }, [audioContext, initAudio, isTestPlaying, inputSource, testSignal, testFrequency, guitarNote, guitarMode, useCircuit, components, wires, rebuildCircuit, stopAllAudio]);

  // Update oscillator when signal type or frequency changes
  useEffect(() => {
    if (oscillatorRef.current && isTestPlaying) {
      oscillatorRef.current.type = testSignal;
      oscillatorRef.current.frequency.setValueAtTime(
        testFrequency,
        audioContext?.currentTime || 0
      );
    }
  }, [testSignal, testFrequency, isTestPlaying, audioContext]);

  // Update circuit description when circuit changes
  useEffect(() => {
    const updateDescription = async () => {
      let ctx = audioContext;
      if (!ctx) {
        await initAudio();
        ctx = useAudioStore.getState().audioContext;
      }
      if (!ctx) return;

      const circuit = buildSimulatedCircuit(ctx, components, wires);
      if (circuit.isValid) {
        setCircuitDescription(describeCircuitSound(components, circuit.signalPath));
      } else if (components.length > 0) {
        setCircuitDescription('Connect input → output');
      } else {
        setCircuitDescription('Add components to simulate');
      }
      disconnectSimulatedCircuit(circuit);
    };

    updateDescription();
  }, [components, wires, audioContext, initAudio]);

  // Restart audio when circuit changes while playing
  useEffect(() => {
    if (isTestPlaying && useCircuit) {
      // Stop and restart to apply new circuit
      stopAllAudio();
      setIsTestPlaying(false);

      // Small delay then restart
      const timer = setTimeout(() => {
        toggleTestSignal();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [components.length, wires.length]); // Only trigger on structure changes

  // Update guitar settings while playing
  useEffect(() => {
    if (guitarRef.current && isTestPlaying) {
      guitarRef.current.setNote(guitarNote);
      guitarRef.current.setPlayMode(guitarMode);
    }
  }, [guitarNote, guitarMode, isTestPlaying]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAllAudio();
    };
  }, [stopAllAudio]);

  // Draw visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, width, height);

      // Draw grid
      ctx.strokeStyle = '#1a1a2e';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Center line
      ctx.strokeStyle = '#2a2a4a';
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      if (analyser) {
        if (viewMode === 'waveform') {
          drawWaveform(ctx, width, height);
        } else {
          drawSpectrum(ctx, width, height);
        }
      } else {
        // Draw placeholder sine wave
        ctx.strokeStyle = '#4ecca3';
        ctx.lineWidth = 2;
        ctx.beginPath();

        const frequency = 2;
        const amplitude = height / 4;

        for (let x = 0; x < width; x++) {
          const y =
            height / 2 +
            Math.sin((x / width) * Math.PI * 2 * frequency) * amplitude * 0.3;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Draw "No signal" text
        ctx.fillStyle = '#4a4a6a';
        ctx.font = '12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('No signal - Click Play to start', width / 2, height - 10);
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const drawWaveform = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number
    ) => {
      if (!analyser) return;

      const bufferLength = analyser.fftSize;
      const dataArray = new Float32Array(bufferLength);
      analyser.getFloatTimeDomainData(dataArray);

      ctx.strokeStyle = '#4ecca3';
      ctx.lineWidth = 2;
      ctx.beginPath();

      const sliceWidth = width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i];
        const y = (v + 1) * (height / 2);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      ctx.stroke();
    };

    const drawSpectrum = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number
    ) => {
      if (!analyser) return;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser.getByteFrequencyData(dataArray);

      const barWidth = (width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * height;

        // Gradient from green to red based on frequency
        const hue = 160 - (i / bufferLength) * 60;
        ctx.fillStyle = `hsl(${hue}, 70%, 50%)`;

        ctx.fillRect(x, height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
        if (x > width) break;
      }
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [analyser, viewMode]);

  // Handle canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight - 32; // Account for header
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-full flex flex-col bg-[#0a0a0f]">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-1 bg-[#12121a] border-b border-[#2a2a3a]">
        <span className="text-xs text-gray-500 uppercase tracking-wider">
          Oscilloscope
        </span>
        <div className="flex gap-1">
          <button
            onClick={() => setViewMode('waveform')}
            className={`p-1 rounded transition-colors ${
              viewMode === 'waveform'
                ? 'bg-[#4ecca3] text-black'
                : 'text-gray-500 hover:text-white'
            }`}
            title="Waveform"
          >
            <Activity size={14} />
          </button>
          <button
            onClick={() => setViewMode('spectrum')}
            className={`p-1 rounded transition-colors ${
              viewMode === 'spectrum'
                ? 'bg-[#4ecca3] text-black'
                : 'text-gray-500 hover:text-white'
            }`}
            title="Spectrum"
          >
            <BarChart3 size={14} />
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 relative">
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>

      {/* Test Signal Controls */}
      <div className="px-3 py-2 bg-[#12121a] border-t border-[#2a2a3a] space-y-2">
        {/* Input source selector */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setInputSource('guitar')}
            className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${
              inputSource === 'guitar'
                ? 'bg-[#f39c12] text-black'
                : 'bg-[#1a1a2e] text-gray-400 hover:text-white'
            }`}
            title="Guitar input"
          >
            <Guitar size={12} />
            Guitar
          </button>
          <button
            onClick={() => setInputSource('oscillator')}
            className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${
              inputSource === 'oscillator'
                ? 'bg-[#f39c12] text-black'
                : 'bg-[#1a1a2e] text-gray-400 hover:text-white'
            }`}
            title="Test oscillator"
          >
            <Music size={12} />
            Oscillator
          </button>
          <div className="flex-1" />
          <button
            onClick={toggleTestSignal}
            className={`flex items-center gap-1 px-3 py-1 rounded text-xs font-medium transition-colors ${
              isTestPlaying
                ? 'bg-[#e94560] text-white'
                : 'bg-[#4ecca3] text-black'
            }`}
            title={isTestPlaying ? 'Stop' : 'Play'}
          >
            {isTestPlaying ? <Square size={12} /> : <Play size={12} />}
            {isTestPlaying ? 'Stop' : 'Play'}
          </button>
        </div>

        {/* Source-specific controls */}
        {inputSource === 'guitar' ? (
          <div className="flex items-center gap-2">
            <select
              value={guitarNote.name}
              onChange={(e) => {
                const note = GUITAR_NOTES.find(n => n.name === e.target.value);
                if (note) setGuitarNote(note);
              }}
              className="text-xs bg-[#1a1a2e] border border-[#2a2a3a] rounded px-2 py-1 text-gray-300"
            >
              {GUITAR_NOTES.map((note) => (
                <option key={note.name} value={note.name}>{note.name}</option>
              ))}
            </select>
            <select
              value={guitarMode}
              onChange={(e) => setGuitarMode(e.target.value as PlayMode)}
              className="text-xs bg-[#1a1a2e] border border-[#2a2a3a] rounded px-2 py-1 text-gray-300"
            >
              <option value="single">Single Note</option>
              <option value="strum">Strum Chords</option>
              <option value="riff">Blues Riff</option>
            </select>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <select
              value={testSignal}
              onChange={(e) => setTestSignal(e.target.value as TestSignal)}
              className="text-xs bg-[#1a1a2e] border border-[#2a2a3a] rounded px-2 py-1 text-gray-300"
            >
              <option value="sine">Sine</option>
              <option value="square">Square</option>
              <option value="sawtooth">Sawtooth</option>
              <option value="triangle">Triangle</option>
            </select>
            <div className="flex items-center gap-1 flex-1">
              <Volume2 size={12} className="text-gray-500" />
              <input
                type="range"
                min="20"
                max="2000"
                value={testFrequency}
                onChange={(e) => setTestFrequency(Number(e.target.value))}
                className="flex-1 h-1 bg-[#2a2a3a] rounded appearance-none cursor-pointer"
              />
              <span className="text-xs text-gray-400 w-12 text-right">
                {testFrequency}Hz
              </span>
            </div>
          </div>
        )}

        {/* Circuit simulation toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setUseCircuit(!useCircuit)}
            className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs transition-colors ${
              useCircuit
                ? 'bg-[#4ecca3] text-black'
                : 'bg-[#1a1a2e] text-gray-400 hover:text-white'
            }`}
            title={useCircuit ? 'Circuit simulation ON' : 'Circuit simulation OFF (bypass)'}
          >
            <Cpu size={12} />
            {useCircuit ? 'Circuit ON' : 'Bypass'}
          </button>
          <span className="text-xs text-gray-500 truncate flex-1">
            {useCircuit ? circuitDescription : 'Direct signal (no processing)'}
          </span>
        </div>
      </div>
    </div>
  );
}
