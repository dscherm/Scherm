import { useState, useRef, useEffect } from 'react';
import { useAudioStore } from '../store';
import { Mic, Upload, Send, Wand2, Music, Zap } from 'lucide-react';

interface CircuitSuggestion {
  name: string;
  type: 'fuzz' | 'overdrive' | 'distortion' | 'boost' | 'filter' | 'delay' | 'oscillator';
  description: string;
  components: string[];
  matchScore: number;
}

export function SoundAnalyzer() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [textDescription, setTextDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [suggestions, setSuggestions] = useState<CircuitSuggestion[]>([]);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const { soundProfile, initAudio, audioContext, analyser } = useAudioStore();

  // Start recording
  const startRecording = async () => {
    try {
      if (!audioContext) {
        await initAudio();
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);

      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setRecordedAudioUrl(url);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Failed to start recording:', err);
      alert('Could not access microphone. Please check permissions.');
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAudioFile(file);
      const url = URL.createObjectURL(file);
      setRecordedAudioUrl(url);
    }
  };

  // Analyze and suggest circuits
  const analyzeSound = async () => {
    setIsAnalyzing(true);

    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate suggestions based on description or mock analysis
    const mockSuggestions = generateSuggestions(textDescription, soundProfile);
    setSuggestions(mockSuggestions);

    setIsAnalyzing(false);
  };

  // Draw waveform preview
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !recordedAudioUrl) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Simple waveform visualization
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#e94560';
    ctx.lineWidth = 2;
    ctx.beginPath();

    // Draw mock waveform
    for (let x = 0; x < canvas.width; x++) {
      const y =
        canvas.height / 2 +
        Math.sin(x * 0.05) * 20 +
        Math.sin(x * 0.02) * 30 +
        (Math.random() - 0.5) * 10;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    ctx.stroke();
  }, [recordedAudioUrl]);

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left panel - Input */}
      <div className="w-1/2 border-r border-[#2a2a3a] flex flex-col">
        <div className="p-4 border-b border-[#2a2a3a]">
          <h2 className="text-lg font-semibold text-white mb-1">Sound Analysis</h2>
          <p className="text-sm text-gray-500">
            Record, upload, or describe a sound to get circuit suggestions
          </p>
        </div>

        <div className="flex-1 p-4 space-y-6 overflow-y-auto">
          {/* Recording section */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Mic size={16} />
              Record Audio
            </h3>
            <div className="flex gap-2">
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                  isRecording
                    ? 'bg-[#e94560] text-white animate-pulse'
                    : 'bg-[#1a1a2e] text-gray-300 hover:bg-[#252538]'
                }`}
              >
                <Mic size={20} />
                {isRecording ? 'Stop Recording' : 'Start Recording'}
              </button>
            </div>
          </div>

          {/* Upload section */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Upload size={16} />
              Upload Audio File
            </h3>
            <label className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1a1a2e] rounded-lg cursor-pointer hover:bg-[#252538] transition-colors">
              <Upload size={20} className="text-gray-400" />
              <span className="text-gray-300">
                {audioFile ? audioFile.name : 'Choose a file...'}
              </span>
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Waveform preview */}
          {recordedAudioUrl && (
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Music size={16} />
                Audio Preview
              </h3>
              <canvas
                ref={canvasRef}
                width={400}
                height={100}
                className="w-full rounded-lg"
              />
              <audio
                src={recordedAudioUrl}
                controls
                className="w-full h-10"
              />
            </div>
          )}

          {/* Text description */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Wand2 size={16} />
              Describe Your Sound
            </h3>
            <textarea
              value={textDescription}
              onChange={(e) => setTextDescription(e.target.value)}
              placeholder="E.g., 'Warm overdrive with singing sustain' or 'Thick fuzz with octave-up harmonics'"
              className="w-full h-24 px-3 py-2 bg-[#1a1a2e] border border-[#2a2a3a] rounded-lg text-white placeholder-gray-500 resize-none focus:outline-none focus:border-[#4ecca3]"
            />
          </div>

          {/* Analyze button */}
          <button
            onClick={analyzeSound}
            disabled={isAnalyzing || (!recordedAudioUrl && !textDescription)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#4ecca3] text-black font-medium rounded-lg hover:bg-[#5fddb5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAnalyzing ? (
              <>
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Send size={20} />
                Analyze & Suggest Circuits
              </>
            )}
          </button>
        </div>
      </div>

      {/* Right panel - Suggestions */}
      <div className="w-1/2 flex flex-col">
        <div className="p-4 border-b border-[#2a2a3a]">
          <h2 className="text-lg font-semibold text-white mb-1">Circuit Suggestions</h2>
          <p className="text-sm text-gray-500">
            Circuits that could create similar sounds
          </p>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          {suggestions.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <Zap size={48} className="mb-4 opacity-30" />
              <p>Analyze a sound to get circuit suggestions</p>
            </div>
          ) : (
            <div className="space-y-4">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#1a1a2e] rounded-lg border border-[#2a2a3a] hover:border-[#4ecca3] transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-white">{suggestion.name}</h4>
                      <span className="text-xs px-2 py-0.5 bg-[#e94560]/20 text-[#e94560] rounded">
                        {suggestion.type}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#4ecca3]">
                        {suggestion.matchScore}%
                      </div>
                      <div className="text-xs text-gray-500">match</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{suggestion.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {suggestion.components.map((comp, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-[#252538] text-gray-300 rounded"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                  <button className="mt-3 w-full py-2 text-sm text-[#4ecca3] border border-[#4ecca3] rounded hover:bg-[#4ecca3]/10 transition-colors">
                    Load Circuit
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper function to generate mock suggestions
function generateSuggestions(
  description: string,
  _soundProfile: typeof useAudioStore.getState extends () => infer R ? R['soundProfile'] : never
): CircuitSuggestion[] {
  const lowerDesc = description.toLowerCase();

  const suggestions: CircuitSuggestion[] = [];

  // Fuzz suggestions
  if (lowerDesc.includes('fuzz') || lowerDesc.includes('thick') || lowerDesc.includes('heavy')) {
    suggestions.push({
      name: 'Silicon Fuzz Face',
      type: 'fuzz',
      description:
        'Classic silicon transistor fuzz with aggressive, buzzy tone and excellent sustain.',
      components: ['2x NPN Transistor', 'Resistors', 'Capacitors', 'Potentiometer'],
      matchScore: 92,
    });
    suggestions.push({
      name: 'Big Muff Pi',
      type: 'fuzz',
      description:
        'Iconic sustaining fuzz with smooth, violin-like tone perfect for leads.',
      components: ['4x NPN Transistor', 'Op-amp', 'Diodes', 'Tone Stack'],
      matchScore: 87,
    });
  }

  // Overdrive suggestions
  if (
    lowerDesc.includes('overdrive') ||
    lowerDesc.includes('warm') ||
    lowerDesc.includes('tube')
  ) {
    suggestions.push({
      name: 'Tube Screamer',
      type: 'overdrive',
      description:
        'Industry-standard mid-focused overdrive with smooth clipping and warm tone.',
      components: ['JRC4558 Op-amp', 'Diodes', 'Resistors', 'Capacitors'],
      matchScore: 95,
    });
    suggestions.push({
      name: 'Klon Centaur',
      type: 'overdrive',
      description:
        'Transparent overdrive that enhances amp tone without coloring it.',
      components: ['TL072 Op-amp', 'Germanium Diodes', 'Charge Pump'],
      matchScore: 88,
    });
  }

  // Distortion suggestions
  if (lowerDesc.includes('distortion') || lowerDesc.includes('crunch')) {
    suggestions.push({
      name: 'RAT',
      type: 'distortion',
      description:
        'Versatile distortion from light crunch to heavy saturation.',
      components: ['LM308 Op-amp', 'Diodes', 'Filter Network'],
      matchScore: 90,
    });
  }

  // Boost suggestions
  if (lowerDesc.includes('boost') || lowerDesc.includes('clean')) {
    suggestions.push({
      name: 'LPB-1 Clean Boost',
      type: 'boost',
      description: 'Simple single-transistor boost for adding volume and punch.',
      components: ['NPN Transistor', '3x Resistors', '2x Capacitors'],
      matchScore: 85,
    });
  }

  // Oscillator suggestions for synth sounds
  if (
    lowerDesc.includes('synth') ||
    lowerDesc.includes('oscillator') ||
    lowerDesc.includes('square') ||
    lowerDesc.includes('saw')
  ) {
    suggestions.push({
      name: 'CD4046 VCO',
      type: 'oscillator',
      description:
        'Phase-locked loop based voltage-controlled oscillator from the Logic Noise series.',
      components: ['CD4046', 'Resistors', 'Capacitors', 'CV Input'],
      matchScore: 91,
    });
    suggestions.push({
      name: 'CD4069 Hex Oscillator',
      type: 'oscillator',
      description:
        'CMOS inverter-based oscillator for raw synth tones.',
      components: ['CD4069UB', 'Resistors', 'Capacitors'],
      matchScore: 84,
    });
  }

  // Filter suggestions
  if (lowerDesc.includes('filter') || lowerDesc.includes('wah')) {
    suggestions.push({
      name: 'State Variable Filter',
      type: 'filter',
      description:
        'Versatile filter with simultaneous LP, HP, and BP outputs.',
      components: ['2x TL072', 'Resistors', 'Capacitors', 'Potentiometers'],
      matchScore: 89,
    });
  }

  // Default suggestions if nothing matched
  if (suggestions.length === 0) {
    suggestions.push(
      {
        name: 'Tube Screamer',
        type: 'overdrive',
        description:
          'Versatile mid-focused overdrive suitable for many applications.',
        components: ['JRC4558 Op-amp', 'Diodes', 'Resistors', 'Capacitors'],
        matchScore: 75,
      },
      {
        name: 'Basic Fuzz',
        type: 'fuzz',
        description: 'Simple two-transistor fuzz for classic tones.',
        components: ['2x NPN Transistor', 'Resistors', 'Capacitors'],
        matchScore: 70,
      },
      {
        name: 'Clean Boost',
        type: 'boost',
        description: 'Transparent boost to push your amp.',
        components: ['JFET', 'Resistors', 'Capacitors'],
        matchScore: 65,
      }
    );
  }

  return suggestions.sort((a, b) => b.matchScore - a.matchScore);
}
