import { useState } from 'react';
import { CircuitCanvas } from './components/CircuitCanvas';
import { ComponentPalette } from './components/ComponentPalette';
import { Toolbar } from './components/Toolbar';
import { PropertiesPanel } from './components/PropertiesPanel';
import { Oscilloscope } from './components/Oscilloscope';
import { SoundAnalyzer } from './components/SoundAnalyzer';

type ViewMode = 'design' | 'analyze';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('design');
  const [showOscilloscope, setShowOscilloscope] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-[#12121a] border-b border-[#2a2a3a]">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-white">
            <span className="text-[#e94560]">Pedal</span> & <span className="text-[#4ecca3]">Synth</span> Designer
          </h1>
          <div className="flex gap-1 ml-4">
            <button
              onClick={() => setViewMode('design')}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                viewMode === 'design'
                  ? 'bg-[#e94560] text-white'
                  : 'bg-[#1a1a2e] text-gray-400 hover:text-white'
              }`}
            >
              Design
            </button>
            <button
              onClick={() => setViewMode('analyze')}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                viewMode === 'analyze'
                  ? 'bg-[#4ecca3] text-black'
                  : 'bg-[#1a1a2e] text-gray-400 hover:text-white'
              }`}
            >
              Analyze Sound
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowOscilloscope(!showOscilloscope)}
            className={`px-3 py-1 text-sm rounded transition-colors ${
              showOscilloscope
                ? 'bg-[#4ecca3] text-black'
                : 'bg-[#1a1a2e] text-gray-400 hover:text-white'
            }`}
          >
            Scope
          </button>
        </div>
      </header>

      {/* Toolbar */}
      <Toolbar />

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {viewMode === 'design' ? (
          <>
            {/* Component palette */}
            <ComponentPalette />

            {/* Canvas area */}
            <div className="flex-1 flex flex-col">
              <CircuitCanvas />

              {/* Oscilloscope */}
              {showOscilloscope && (
                <div className="h-48 border-t border-[#2a2a3a]">
                  <Oscilloscope />
                </div>
              )}
            </div>

            {/* Properties panel */}
            <PropertiesPanel />
          </>
        ) : (
          <SoundAnalyzer />
        )}
      </div>
    </div>
  );
}

export default App;
