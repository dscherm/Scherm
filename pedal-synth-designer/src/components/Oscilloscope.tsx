import { useEffect, useRef, useState } from 'react';
import { useAudioStore } from '../store';
import { Activity, BarChart3 } from 'lucide-react';

type ViewMode = 'waveform' | 'spectrum';

export function Oscilloscope() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [viewMode, setViewMode] = useState<ViewMode>('waveform');

  const { audioContext, analyser, isPlaying, initAudio } = useAudioStore();

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
    </div>
  );
}
