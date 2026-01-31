# Guitar Pedal & Synth Designer App - Planning Document

## Overview

A web-based application for designing guitar pedals and synthesizers that:
1. **Simulates electronic circuits** in real-time with audio output
2. **Analyzes sounds** (played or described) and suggests circuits to recreate them
3. **Provides component libraries** with realistic models (op-amps, transistors, etc.)

---

## Core Features

### 1. Circuit Designer & Simulator
- Visual drag-and-drop circuit schematic editor
- Real-time SPICE-like circuit simulation with audio output
- Component library with realistic models
- Waveform visualization (oscilloscope view)
- Frequency analysis (spectrum analyzer)

### 2. Sound Analysis Engine
- Record/upload audio for analysis
- Extract audio features (spectral descriptors, harmonics, envelope)
- Describe sounds in text and get circuit suggestions via AI
- Match sounds to known pedal/synth characteristics

### 3. Circuit Suggestion Engine
- Database of known pedal/synth circuits with tagged sound characteristics
- AI-powered circuit recommendation based on sound analysis
- "Sound-to-circuit" matching algorithm

### 4. Export & Sharing
- Export schematics as images/PDFs
- Generate component lists (BOM)
- Share circuits with community
- Export audio samples of simulated circuits

---

## Technology Stack

### Frontend Framework
```
React/Next.js + TypeScript
- Component-based UI for circuit editor
- Canvas/SVG for schematic rendering
- Web Audio API integration
```

### Circuit Simulation Options

#### Option A: Browser-Based SPICE (Recommended for MVP)
| Tool | Pros | Cons |
|------|------|------|
| [CircuitJS1](https://github.com/sharpie7/circuitjs1) | Mature, open-source, browser-based | No native audio output, Java/GWT |
| [EEcircuit](https://github.com/eelab-dev/EEcircuit) | ngspice via WebAssembly | Limited documentation |
| [SimcirJS](https://kazuhikoarase.github.io/simcirjs/) | Pure JS, MIT license | Digital logic focused |

#### Option B: Custom WebAssembly DSP Engine
```
Rust/C++ compiled to WebAssembly
- Fine-grained control over simulation
- Optimized for audio-rate processing
- Can integrate with Web Audio API AudioWorklet
```

#### Option C: Hybrid Approach (Recommended)
```
Faust DSP Language → WebAssembly
- Domain-specific language for audio DSP
- Compiles to efficient WebAssembly
- Large library of existing effects
- Integration: https://faust.grame.fr/
```

### Audio Processing

#### Web Audio API (Core)
```javascript
// Core audio pipeline
AudioContext → AnalyserNode → AudioWorkletNode → Destination

// Key features:
- Real-time FFT analysis (getFloatFrequencyData)
- Custom DSP via AudioWorklet
- Low-latency processing
- Microphone input for recording
```

#### Tone.js (High-Level Abstraction)
```javascript
// npm install tone
import * as Tone from 'tone';

// Pre-built effects chain
const distortion = new Tone.Distortion(0.4);
const filter = new Tone.Filter(400, "lowpass");
const player = new Tone.Player("audio.mp3");

player.chain(distortion, filter, Tone.Destination);
```

#### essentia.js (Audio Analysis)
```javascript
// WebAssembly-powered audio analysis
// https://mtg.github.io/essentia.js/

// Features:
- Spectral descriptors (centroid, rolloff, flux)
- MFCC extraction
- Pitch detection
- Rhythm analysis
```

### Sound Analysis & AI

#### Audio Feature Extraction
| Feature | Use Case | Library |
|---------|----------|---------|
| Spectral Centroid | Brightness detection | essentia.js |
| MFCC | Timbre fingerprinting | essentia.js |
| Pitch Detection | Note identification | Web Audio + autocorrelation |
| Envelope (ADSR) | Attack/decay character | Custom analysis |
| Harmonics | Distortion type | FFT peak analysis |

#### AI/ML Integration

**Option 1: Cloud API (OpenAI/Claude)**
```
User describes sound → LLM suggests circuit topology
"I want a warm overdrive with singing sustain"
→ Suggests Tube Screamer-style circuit with specific component values
```

**Option 2: Local ML Model**
```
- Train classifier on labeled pedal sounds
- Map spectral features to circuit parameters
- Use TensorFlow.js for browser inference
```

**Option 3: Google Magenta NSynth (Experimental)**
```
- Neural audio synthesis
- Blend characteristics of different sounds
- https://magenta.tensorflow.org/nsynth-instrument
```

---

## Component Database

### SPICE Models Required

#### Op-Amps (Common in Pedals)
| Chip | Use | SPICE Model Source |
|------|-----|-------------------|
| TL072 | Clean boost, buffers | Texas Instruments |
| LM741 | Vintage fuzz | Various |
| NE5532 | Low-noise preamps | ON Semiconductor |
| 4558 | Tube Screamer | JRC |

#### Transistors
| Type | Examples | Use |
|------|----------|-----|
| NPN Silicon | 2N3904, BC108 | Fuzz, boost |
| PNP Germanium | OC44, AC128 | Vintage fuzz |
| JFET | 2N5457, J201 | Buffers, preamps |
| MOSFET | BS170, 2N7000 | Switching, distortion |

#### Diodes
| Type | Use |
|------|-----|
| 1N4148 | Soft clipping |
| 1N914 | Signal clipping |
| Germanium (1N34A) | Warm clipping |
| LED | Hard clipping |
| Zener | Voltage limiting |

#### CMOS Logic (Lunetta Synths - from Hackaday Logic Noise)
| Chip | Function |
|------|----------|
| CD4046 | Phase-locked loop VCO |
| CD4070 | XOR gates (ring mod sounds) |
| CD4069UB | Inverters (amplifiers, filters) |
| CD4040 | Binary counter (frequency divider) |
| CD4017 | Decade counter (sequencer) |
| CD4051 | Analog multiplexer |

### Schematic Databases to Index
1. **Effects Database** - effectsdatabase.com (20,000+ pedals)
2. **Stomp Box Schematics** - stompboxschematics.com
3. **General Guitar Gadgets** - generalguitargadgets.com
4. **DIY Stompboxes** - diystompboxes.com
5. **TagBoard Effects** - tagboardeffects.blogspot.com (1000+ verified)
6. **ElectroSmash** - electrosmash.com (detailed analysis)

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Frontend (React)                        │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Circuit    │  │    Sound     │  │    Waveform      │  │
│  │   Editor     │  │   Recorder   │  │   Visualizer     │  │
│  │   (Canvas)   │  │   (Mic API)  │  │   (Canvas/D3)    │  │
│  └──────┬───────┘  └──────┬───────┘  └────────┬─────────┘  │
│         │                 │                    │            │
│  ┌──────▼─────────────────▼────────────────────▼─────────┐  │
│  │              Web Audio API / AudioWorklet              │  │
│  └──────────────────────┬────────────────────────────────┘  │
│                         │                                   │
│  ┌──────────────────────▼────────────────────────────────┐  │
│  │           WebAssembly DSP Engine (Faust/Rust)          │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────────┐   │  │
│  │  │  Circuit   │  │  Component │  │    Audio       │   │  │
│  │  │  Solver    │  │   Models   │  │   Analysis     │   │  │
│  │  └────────────┘  └────────────┘  └────────────────┘   │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Backend Services                          │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Circuit    │  │     AI       │  │      User        │  │
│  │   Database   │  │   Service    │  │    Accounts      │  │
│  │  (Postgres)  │  │  (LLM API)   │  │   (Auth/Store)   │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Implementation Phases

### Phase 1: MVP Circuit Simulator
**Goal:** Basic circuit editor with audio output

- [ ] Set up React + TypeScript project
- [ ] Create canvas-based circuit editor
  - Drag & drop components
  - Wire connections
  - Component value editing
- [ ] Integrate basic circuit simulation
  - Option: Port CircuitJS1 concepts to TypeScript
  - Option: Use Faust for DSP, custom netlist parser
- [ ] Connect to Web Audio API for output
- [ ] Basic oscilloscope/spectrum view

**Components to support initially:**
- Resistors, capacitors
- Op-amp (ideal model)
- Diodes (simple model)
- Input/output jacks
- Potentiometers

### Phase 2: Sound Analysis
**Goal:** Analyze audio and extract characteristics

- [ ] Implement microphone recording
- [ ] Integrate essentia.js for feature extraction
- [ ] Build sound characteristic fingerprinting
  - Brightness (spectral centroid)
  - Warmth (low-frequency content)
  - Distortion type (harmonic analysis)
  - Attack/sustain characteristics
- [ ] Create sound visualization UI

### Phase 3: Circuit Suggestions
**Goal:** Recommend circuits based on sound analysis

- [ ] Build circuit database with tagged characteristics
- [ ] Implement similarity matching algorithm
- [ ] Add AI integration for text descriptions
- [ ] Create "Sound → Circuit" recommendation UI

### Phase 4: Advanced Features
**Goal:** Full-featured design tool

- [ ] Expanded component library (transistors, tubes)
- [ ] CMOS logic synth components (Lunetta style)
- [ ] PCB layout suggestions
- [ ] Community sharing features
- [ ] Export to various formats

---

## Key Resources & References

### Circuit Simulation
- [LiveSPICE](https://www.livespice.org/) - Real-time SPICE for audio
- [CircuitJS1](https://github.com/sharpie7/circuitjs1) - Browser circuit simulator
- [Faust](https://faust.grame.fr/) - DSP programming language
- [ngspice](https://ngspice.sourceforge.io/) - Open-source SPICE

### Audio Processing
- [Tone.js](https://tonejs.github.io/) - Web Audio framework
- [essentia.js](https://mtg.github.io/essentia.js/) - Audio analysis in WebAssembly
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - MDN docs
- [Superpowered](https://superpowered.com/js-wasm-overview) - Low-latency WebAssembly audio

### Pedal/Synth Design Knowledge
- [Hackaday Logic Noise Series](https://hackaday.com/series_of_posts/logic-noise/) - CMOS synth tutorials
- [Klangorium Board](https://github.com/hexagon5un/klangorium) - Logic Noise demo board
- [ElectroSmash](https://www.electrosmash.com/) - Pedal circuit analysis
- [LTSpice for Pedals](https://hforsten.com/simulating-audio-effects-with-spice.html) - SPICE simulation tutorial

### AI & Sound Matching
- [Google NSynth](https://magenta.tensorflow.org/nsynth-instrument) - Neural audio synthesis
- [Dejavu](https://github.com/worldveil/dejavu) - Audio fingerprinting
- [AcoustID](https://acoustid.org/) - Open-source audio identification
- [GuitarML](https://guitarml.com/) - ML for guitar tone modeling

### Component Databases
- [Effects Database](https://www.effectsdatabase.com/schematics) - 20,000+ pedal schematics
- [TagBoard Effects](https://tagboardeffects.blogspot.com/) - Verified layouts
- [DIY Stompboxes](https://www.diystompboxes.com/pedals/schematics.html) - Classic circuits
- [Duncan's Tube Models](http://duncanamps.com/technical/ltspice.html) - SPICE tube models

### Existing Products for Inspiration
- [VCV Rack](https://vcvrack.com/) - Virtual modular synth (open source)
- [BIAS X](https://www.positivegrid.com/pages/bias-x) - AI-powered tone creation
- [ToneLib GFX](https://tonelib.net/gfx-overview.html) - Pedal simulation
- [GuitarML Plugins](https://guitarml.com/) - ML-based pedal clones

---

## Technical Challenges & Solutions

### Challenge 1: Real-Time Circuit Simulation
**Problem:** SPICE simulations are computationally expensive

**Solutions:**
1. Use WebAssembly for performance-critical code
2. Simplify models (ideal op-amps vs full SPICE models)
3. Use AudioWorklet for dedicated audio thread
4. Pre-compute transfer functions where possible
5. Use Faust's optimized code generation

### Challenge 2: Accurate Component Modeling
**Problem:** Audio characteristics depend on non-ideal component behavior

**Solutions:**
1. Use simplified but "musically accurate" models
2. Allow users to tune model parameters
3. Provide presets based on measured real components
4. Reference GuitarML's trained models approach

### Challenge 3: Sound-to-Circuit Matching
**Problem:** Many different circuits can produce similar sounds

**Solutions:**
1. Use multi-dimensional feature matching
2. Provide multiple circuit suggestions with trade-offs
3. Allow users to refine based on constraints (component availability, complexity)
4. Use LLM to understand natural language descriptions

### Challenge 4: Browser Audio Latency
**Problem:** Web Audio can have noticeable latency

**Solutions:**
1. Use AudioWorklet (not deprecated ScriptProcessorNode)
2. Request low-latency audio context
3. Optimize buffer sizes
4. Consider WebAssembly SIMD for parallel processing

---

## Data Models

### Circuit Schema
```typescript
interface Circuit {
  id: string;
  name: string;
  description: string;
  components: Component[];
  connections: Connection[];
  metadata: {
    author: string;
    tags: string[];
    soundCharacteristics: SoundProfile;
    createdAt: Date;
    updatedAt: Date;
  };
}

interface Component {
  id: string;
  type: ComponentType;
  value: number | string;
  position: { x: number; y: number };
  rotation: number;
  pins: Pin[];
}

interface SoundProfile {
  brightness: number;      // 0-1, spectral centroid normalized
  warmth: number;          // 0-1, low-freq energy
  distortionType: 'soft' | 'hard' | 'tube' | 'fuzz';
  attack: number;          // ms
  sustain: number;         // 0-1
  harmonicContent: number[];  // harmonic strengths
}
```

### Component Types
```typescript
enum ComponentType {
  RESISTOR = 'resistor',
  CAPACITOR = 'capacitor',
  INDUCTOR = 'inductor',
  DIODE = 'diode',
  LED = 'led',
  ZENER = 'zener',
  TRANSISTOR_NPN = 'transistor_npn',
  TRANSISTOR_PNP = 'transistor_pnp',
  JFET_N = 'jfet_n',
  JFET_P = 'jfet_p',
  MOSFET_N = 'mosfet_n',
  MOSFET_P = 'mosfet_p',
  OPAMP = 'opamp',
  POTENTIOMETER = 'pot',
  SWITCH = 'switch',
  INPUT_JACK = 'input',
  OUTPUT_JACK = 'output',
  GROUND = 'ground',
  VCC = 'vcc',
  // CMOS Logic
  CD4046 = 'cd4046',
  CD4070 = 'cd4070',
  CD4069 = 'cd4069',
  CD4040 = 'cd4040',
  CD4017 = 'cd4017',
}
```

---

## Next Steps

1. **Prototype the circuit editor UI** - Start with a simple React canvas component
2. **Evaluate Faust vs custom DSP** - Build proof-of-concept with each approach
3. **Create minimal component library** - 5-10 essential components
4. **Integrate essentia.js** - Test audio analysis capabilities
5. **Build sample circuit database** - Start with 10 classic pedal circuits
6. **Test LLM integration** - Prototype "describe your sound" feature

---

## Open Questions

1. Should simulation run entirely client-side or use server for complex circuits?
2. What's the minimum viable component set for MVP?
3. How to handle intellectual property of indexed schematics?
4. Should we support mobile (touch-based circuit editing)?
5. Freemium model? What features would be premium?

---

*Document created: January 2026*
*Last updated: January 2026*
