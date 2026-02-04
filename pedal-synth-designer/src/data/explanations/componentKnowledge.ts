import type { ComponentKnowledge } from '../../types/explanation';
import type { ComponentType } from '../../types/circuit';

export const componentKnowledge: Record<ComponentType, ComponentKnowledge> = {
  resistor: {
    type: 'resistor',
    generalPurpose: 'Limits current flow and creates voltage drops. Essential for biasing transistors and setting gain.',
    sonicRole: 'Controls signal levels, sets gain in amplifier stages, and affects frequency response when combined with capacitors.',
    valueEffects: [
      { range: '100Ω - 1kΩ', effect: 'Low resistance, used for current sensing and emitter degeneration' },
      { range: '1kΩ - 10kΩ', effect: 'Common for biasing and feedback networks' },
      { range: '10kΩ - 100kΩ', effect: 'High impedance applications, input resistors' },
      { range: '100kΩ - 1MΩ', effect: 'Very high impedance, guitar input stages' },
    ],
    contextRules: [
      { condition: 'In series with input', explanation: 'Acts as input impedance, affects treble response' },
      { condition: 'In feedback loop', explanation: 'Sets gain - higher values = more gain' },
      { condition: 'To ground from collector', explanation: 'Load resistor, affects signal swing' },
      { condition: 'Between base and power', explanation: 'Bias resistor, sets operating point' },
    ],
    commonUses: ['Biasing', 'Gain setting', 'Voltage dividers', 'Current limiting'],
    interactsWith: ['capacitor', 'transistor_npn', 'transistor_pnp', 'opamp'],
  },

  capacitor: {
    type: 'capacitor',
    generalPurpose: 'Blocks DC while passing AC. Used for coupling stages and filtering frequencies.',
    sonicRole: 'Shapes frequency response, couples audio stages, and creates tone controls.',
    valueEffects: [
      { range: '10pF - 100pF', effect: 'Treble frequencies only, radio frequency filtering' },
      { range: '100pF - 1nF', effect: 'High frequency shaping, presence control' },
      { range: '1nF - 100nF', effect: 'Mid to treble range, common in tone controls' },
      { range: '100nF - 1µF', effect: 'Full audio range coupling' },
      { range: '1µF - 100µF', effect: 'Bass frequencies, power supply filtering' },
    ],
    contextRules: [
      { condition: 'In series with signal', explanation: 'Coupling capacitor - blocks DC, passes audio' },
      { condition: 'To ground', explanation: 'Forms high-pass filter with series resistance' },
      { condition: 'In feedback loop', explanation: 'Rolls off gain at high frequencies (Miller compensation)' },
      { condition: 'Parallel with resistor', explanation: 'Bypasses resistor at high frequencies' },
    ],
    commonUses: ['Stage coupling', 'Tone shaping', 'Power filtering', 'Bypass'],
    interactsWith: ['resistor', 'potentiometer', 'opamp'],
  },

  inductor: {
    type: 'inductor',
    generalPurpose: 'Stores energy in magnetic field. Passes DC, blocks high frequencies.',
    sonicRole: 'Creates resonant circuits for wah pedals and midrange boost.',
    valueEffects: [
      { range: '10mH - 100mH', effect: 'Low frequency filtering' },
      { range: '100mH - 500mH', effect: 'Wah pedal range (typically 500mH)' },
      { range: '500mH - 1H', effect: 'Strong bass emphasis' },
    ],
    contextRules: [
      { condition: 'With capacitor to ground', explanation: 'Creates resonant peak (wah effect)' },
      { condition: 'In series with signal', explanation: 'Low-pass filter, blocks treble' },
    ],
    commonUses: ['Wah pedals', 'Tone shaping', 'EMI filtering'],
    interactsWith: ['capacitor', 'resistor'],
  },

  diode: {
    type: 'diode',
    generalPurpose: 'Allows current in one direction only. Clips signals when forward biased.',
    sonicRole: 'Creates clipping distortion - the heart of overdrive and distortion pedals.',
    valueEffects: [
      { range: 'Silicon (1N914, 1N4148)', effect: '0.6V clipping threshold, tight and focused distortion' },
      { range: 'Germanium (1N34A)', effect: '0.3V threshold, softer, warmer clipping' },
      { range: 'Schottky', effect: '0.2-0.3V threshold, very soft clipping' },
    ],
    contextRules: [
      { condition: 'In feedback loop (op-amp)', explanation: 'Soft clipping - smooth overdrive character' },
      { condition: 'To ground after gain stage', explanation: 'Hard clipping - more aggressive distortion' },
      { condition: 'Back-to-back pair', explanation: 'Symmetric clipping on both halves of waveform' },
      { condition: 'Different types in pair', explanation: 'Asymmetric clipping - more even harmonics' },
    ],
    commonUses: ['Clipping', 'Rectification', 'Protection'],
    interactsWith: ['opamp', 'transistor_npn'],
  },

  led: {
    type: 'led',
    generalPurpose: 'Light-emitting diode. Higher forward voltage than silicon diodes.',
    sonicRole: 'Creates higher headroom clipping (~1.8V) - cleaner, more dynamic overdrive.',
    valueEffects: [
      { range: 'Red LED', effect: '1.8V forward voltage, bright clipping' },
      { range: 'Green/Yellow LED', effect: '2.0V forward voltage, even more headroom' },
      { range: 'Blue/White LED', effect: '3.0V+ forward voltage, very clean until hard clip' },
    ],
    contextRules: [
      { condition: 'In feedback loop', explanation: 'High headroom soft clipping' },
      { condition: 'Replacing silicon diodes', explanation: 'More open, dynamic sound' },
    ],
    commonUses: ['High-headroom clipping', 'Visual indicator', 'Modded overdrives'],
    interactsWith: ['opamp', 'resistor'],
  },

  zener: {
    type: 'zener',
    generalPurpose: 'Conducts in reverse at specific voltage. Used for voltage regulation and hard clipping.',
    sonicRole: 'Creates symmetrical hard clipping at precise voltages.',
    valueEffects: [
      { range: '2.4V - 3.3V', effect: 'Low threshold, aggressive clipping' },
      { range: '4.7V - 5.1V', effect: 'Medium threshold, common in distortion pedals' },
      { range: '9V - 12V', effect: 'High threshold, voltage regulation' },
    ],
    contextRules: [
      { condition: 'Back-to-back pair', explanation: 'Symmetric clipping at zener voltage' },
      { condition: 'To ground from signal', explanation: 'Hard limiting at zener voltage' },
    ],
    commonUses: ['Hard clipping', 'Voltage regulation', 'Protection'],
    interactsWith: ['resistor', 'opamp'],
  },

  transistor_npn: {
    type: 'transistor_npn',
    generalPurpose: 'Amplifies current. Fundamental building block of amplifier circuits.',
    sonicRole: 'Provides gain and can create distinctive distortion character.',
    valueEffects: [
      { range: 'Low hFE (50-100)', effect: 'Less gain, cleaner sound' },
      { range: 'Medium hFE (100-300)', effect: 'Balanced gain and headroom' },
      { range: 'High hFE (300+)', effect: 'High gain, can be unstable' },
    ],
    contextRules: [
      { condition: 'Common emitter', explanation: 'Inverting amplifier, most gain' },
      { condition: 'Emitter follower', explanation: 'Buffer, unity gain, impedance matching' },
      { condition: 'With emitter resistor', explanation: 'Degeneration reduces gain, improves linearity' },
    ],
    commonUses: ['Amplification', 'Buffering', 'Fuzz circuits'],
    interactsWith: ['resistor', 'capacitor'],
  },

  transistor_pnp: {
    type: 'transistor_pnp',
    generalPurpose: 'Complementary to NPN. Current flows from emitter to collector.',
    sonicRole: 'Classic germanium fuzz character. Often leaky and temperature-sensitive.',
    valueEffects: [
      { range: 'Silicon PNP', effect: 'Clean, stable operation' },
      { range: 'Germanium PNP', effect: 'Warm, fuzzy, vintage tone' },
    ],
    contextRules: [
      { condition: 'Positive ground circuit', explanation: 'Traditional germanium fuzz topology' },
      { condition: 'Paired with NPN', explanation: 'Push-pull output stage' },
    ],
    commonUses: ['Germanium fuzz', 'Complementary circuits', 'Classic fuzzes'],
    interactsWith: ['resistor', 'capacitor', 'transistor_npn'],
  },

  mosfet_n: {
    type: 'mosfet_n',
    generalPurpose: 'Voltage-controlled transistor. Very high input impedance.',
    sonicRole: 'Clean amplification, good for transparent boost and buffer circuits.',
    valueEffects: [
      { range: 'Low Vth', effect: 'Works at lower voltages' },
      { range: 'High gm', effect: 'More gain available' },
    ],
    contextRules: [
      { condition: 'Source follower', explanation: 'Excellent buffer with high input Z' },
      { condition: 'Common source', explanation: 'High gain amplifier stage' },
    ],
    commonUses: ['Buffers', 'Clean boost', 'Switching'],
    interactsWith: ['resistor', 'capacitor'],
  },

  mosfet_p: {
    type: 'mosfet_p',
    generalPurpose: 'Complementary to N-channel MOSFET.',
    sonicRole: 'Used in complementary output stages and power switching.',
    valueEffects: [
      { range: 'Standard', effect: 'Higher on-resistance than N-channel' },
    ],
    contextRules: [
      { condition: 'High-side switch', explanation: 'Controls power to load' },
      { condition: 'Complementary pair', explanation: 'Push-pull output with N-channel' },
    ],
    commonUses: ['Power switching', 'Complementary outputs'],
    interactsWith: ['resistor', 'mosfet_n'],
  },

  jfet_n: {
    type: 'jfet_n',
    generalPurpose: 'Junction FET. Simple biasing, natural soft clipping character.',
    sonicRole: 'Warm, tube-like response. Popular in boutique overdrives.',
    valueEffects: [
      { range: 'Low Idss (1-3mA)', effect: 'Lower gain, earlier clipping' },
      { range: 'High Idss (5-10mA)', effect: 'More headroom, cleaner' },
    ],
    contextRules: [
      { condition: 'Self-biased', explanation: 'Source resistor sets operating point' },
      { condition: 'Source follower', explanation: 'Natural sounding buffer' },
    ],
    commonUses: ['Buffers', 'Low-noise preamps', 'Tube amp simulation'],
    interactsWith: ['resistor', 'capacitor'],
  },

  jfet_p: {
    type: 'jfet_p',
    generalPurpose: 'P-channel JFET. Less common than N-channel.',
    sonicRole: 'Similar to N-channel but with inverted polarity.',
    valueEffects: [
      { range: 'Standard', effect: 'Complementary to N-channel JFET' },
    ],
    contextRules: [
      { condition: 'Complementary pair', explanation: 'Used with N-channel for push-pull' },
    ],
    commonUses: ['Complementary circuits', 'Current sources'],
    interactsWith: ['resistor', 'jfet_n'],
  },

  opamp: {
    type: 'opamp',
    generalPurpose: 'Operational amplifier. Very high gain IC that requires feedback to be useful.',
    sonicRole: 'Clean, precise amplification. Character depends on specific chip and feedback network.',
    valueEffects: [
      { range: 'JRC4558', effect: 'Warm midrange, classic Tube Screamer sound' },
      { range: 'TL072', effect: 'Clean, hi-fi, low noise' },
      { range: 'LM308', effect: 'Slow slew rate, distinctive compression (RAT)' },
      { range: 'NE5532', effect: 'Low noise, good for clean preamps' },
    ],
    contextRules: [
      { condition: 'Non-inverting configuration', explanation: 'Gain = 1 + (Rf/Rg)' },
      { condition: 'Inverting configuration', explanation: 'Gain = -Rf/Rin, inverts phase' },
      { condition: 'With diodes in feedback', explanation: 'Soft clipping circuit' },
    ],
    commonUses: ['Gain stages', 'Buffers', 'Active filters', 'Clipping circuits'],
    interactsWith: ['resistor', 'capacitor', 'diode', 'led'],
  },

  potentiometer: {
    type: 'potentiometer',
    generalPurpose: 'Variable resistor. Allows user control of circuit parameters.',
    sonicRole: 'Controls gain, tone, or volume depending on placement.',
    valueEffects: [
      { range: '1kΩ - 10kΩ', effect: 'Low impedance, tone controls' },
      { range: '10kΩ - 100kΩ', effect: 'Volume controls, gain adjust' },
      { range: '250kΩ - 1MΩ', effect: 'High impedance, guitar volume/tone' },
    ],
    contextRules: [
      { condition: 'As voltage divider', explanation: 'Volume control - signal divided to ground' },
      { condition: 'In feedback loop', explanation: 'Variable gain control' },
      { condition: 'With capacitor', explanation: 'Variable frequency tone control' },
    ],
    commonUses: ['Volume', 'Gain/Drive', 'Tone', 'Bias trim'],
    interactsWith: ['resistor', 'capacitor', 'opamp'],
  },

  switch: {
    type: 'switch',
    generalPurpose: 'Opens or closes circuit paths.',
    sonicRole: 'Bypass, mode selection, or parameter switching.',
    valueEffects: [
      { range: 'SPST', effect: 'Simple on/off' },
      { range: 'SPDT', effect: 'Selects between two options' },
      { range: 'DPDT', effect: 'True bypass switching' },
      { range: '3PDT', effect: 'True bypass with LED indicator' },
    ],
    contextRules: [
      { condition: 'In signal path', explanation: 'Bypass or effect selection' },
      { condition: 'Selecting components', explanation: 'Mod or voicing switch' },
    ],
    commonUses: ['Bypass', 'Mode selection', 'Clipping options'],
    interactsWith: ['diode', 'capacitor', 'resistor'],
  },

  input_jack: {
    type: 'input_jack',
    generalPurpose: 'Audio input connection point.',
    sonicRole: 'Where your guitar signal enters the circuit.',
    valueEffects: [
      { range: 'Standard 1/4"', effect: 'Standard guitar/instrument connection' },
    ],
    contextRules: [
      { condition: 'With pulldown resistor', explanation: 'Prevents pop when plugging in' },
      { condition: 'To high impedance input', explanation: 'Preserves guitar tone' },
    ],
    commonUses: ['Signal input'],
    interactsWith: ['resistor', 'capacitor'],
  },

  output_jack: {
    type: 'output_jack',
    generalPurpose: 'Audio output connection point.',
    sonicRole: 'Where the processed signal exits to the amplifier.',
    valueEffects: [
      { range: 'Standard 1/4"', effect: 'Standard guitar/instrument connection' },
    ],
    contextRules: [
      { condition: 'After buffer', explanation: 'Low impedance output, cable-friendly' },
      { condition: 'Direct from circuit', explanation: 'May be affected by cable capacitance' },
    ],
    commonUses: ['Signal output'],
    interactsWith: ['resistor', 'capacitor', 'opamp'],
  },

  ground: {
    type: 'ground',
    generalPurpose: 'Reference point for all voltages in the circuit.',
    sonicRole: 'Proper grounding prevents noise and hum.',
    valueEffects: [
      { range: '0V reference', effect: 'All signals measured relative to ground' },
    ],
    contextRules: [
      { condition: 'Star ground', explanation: 'All grounds meet at single point - reduces noise' },
      { condition: 'Ground plane', explanation: 'Large copper area for low impedance' },
    ],
    commonUses: ['Reference', 'Return path', 'Shielding'],
    interactsWith: ['resistor', 'capacitor'],
  },

  vcc: {
    type: 'vcc',
    generalPurpose: 'Positive power supply rail.',
    sonicRole: 'Higher voltage = more headroom before clipping.',
    valueEffects: [
      { range: '9V', effect: 'Standard pedal voltage' },
      { range: '12V', effect: 'More headroom, common in rack gear' },
      { range: '18V', effect: 'Maximum clean headroom' },
    ],
    contextRules: [
      { condition: 'With regulator', explanation: 'Stable, noise-free power' },
      { condition: 'Filtered', explanation: 'Capacitors remove power supply noise' },
    ],
    commonUses: ['Power supply', 'Biasing reference'],
    interactsWith: ['resistor', 'capacitor', 'regulator'],
  },

  oscillator: {
    type: 'oscillator',
    generalPurpose: 'Generates periodic signal without external input.',
    sonicRole: 'Creates tremolo, vibrato, or synthesizer tones.',
    valueEffects: [
      { range: '1-10Hz', effect: 'LFO range for tremolo/vibrato' },
      { range: '20Hz-20kHz', effect: 'Audio range for synth sounds' },
    ],
    contextRules: [
      { condition: 'Modulating amplitude', explanation: 'Tremolo effect' },
      { condition: 'Modulating pitch', explanation: 'Vibrato effect' },
    ],
    commonUses: ['Tremolo', 'Vibrato', 'Ring modulation'],
    interactsWith: ['resistor', 'capacitor', 'opamp'],
  },

  speaker: {
    type: 'speaker',
    generalPurpose: 'Converts electrical signal to sound.',
    sonicRole: 'Final voice of your tone - huge impact on character.',
    valueEffects: [
      { range: '4Ω', effect: 'Low impedance, requires more current' },
      { range: '8Ω', effect: 'Standard guitar speaker' },
      { range: '16Ω', effect: 'Higher impedance, less current draw' },
    ],
    contextRules: [
      { condition: 'Direct from amp', explanation: 'Must match amplifier impedance' },
    ],
    commonUses: ['Audio output'],
    interactsWith: ['resistor'],
  },

  timer_555: {
    type: 'timer_555',
    generalPurpose: 'Versatile timer IC for oscillation and timing.',
    sonicRole: 'Creates square wave oscillations for tremolo or synth effects.',
    valueEffects: [
      { range: 'Astable mode', effect: 'Continuous oscillation' },
      { range: 'Monostable mode', effect: 'Triggered pulse output' },
    ],
    contextRules: [
      { condition: 'With RC timing', explanation: 'Frequency set by resistor and capacitor values' },
    ],
    commonUses: ['Tremolo LFO', 'Square wave synth', 'Timing circuits'],
    interactsWith: ['resistor', 'capacitor'],
  },

  cd40106: {
    type: 'cd40106',
    generalPurpose: 'Hex Schmitt trigger inverter. Six inverters with hysteresis.',
    sonicRole: 'Creates harsh, raw square wave oscillations.',
    valueEffects: [
      { range: 'With RC', effect: 'Simple oscillator' },
    ],
    contextRules: [
      { condition: 'Inverter oscillator', explanation: 'RC on input creates square wave' },
    ],
    commonUses: ['Square wave oscillator', 'Clock generation', 'Signal conditioning'],
    interactsWith: ['resistor', 'capacitor'],
  },

  cd4017: {
    type: 'cd4017',
    generalPurpose: 'Decade counter with 10 decoded outputs.',
    sonicRole: 'Creates sequenced patterns and rhythms.',
    valueEffects: [
      { range: '10 steps', effect: 'Sequential pattern of 10' },
    ],
    contextRules: [
      { condition: 'With clock input', explanation: 'Advances through outputs on each clock' },
    ],
    commonUses: ['Sequencers', 'LED chasers', 'Rhythm patterns'],
    interactsWith: ['cd40106', 'timer_555'],
  },

  cd4040: {
    type: 'cd4040',
    generalPurpose: '12-stage binary counter/divider.',
    sonicRole: 'Creates sub-octaves and frequency division.',
    valueEffects: [
      { range: 'Divide by 2-4096', effect: 'Each stage halves frequency' },
    ],
    contextRules: [
      { condition: 'After oscillator', explanation: 'Creates lower octaves' },
    ],
    commonUses: ['Octave divider', 'Sub-bass generation', 'Frequency division'],
    interactsWith: ['cd40106', 'timer_555'],
  },

  cd4049: {
    type: 'cd4049',
    generalPurpose: 'Hex inverting buffer. Can be used as crude amplifier.',
    sonicRole: 'Creates lo-fi distortion and square wave clipping.',
    valueEffects: [
      { range: 'Biased linear', effect: 'Crude amplifier with distortion' },
    ],
    contextRules: [
      { condition: 'Biased at mid-rail', explanation: 'Acts as inverting amplifier' },
    ],
    commonUses: ['Lo-fi distortion', 'Square wave shaping', 'Buffer'],
    interactsWith: ['resistor', 'capacitor'],
  },

  cd4066: {
    type: 'cd4066',
    generalPurpose: 'Quad bilateral switch. Analog switching IC.',
    sonicRole: 'Allows voltage-controlled signal routing.',
    valueEffects: [
      { range: 'On resistance ~100Ω', effect: 'Some signal loss when on' },
    ],
    contextRules: [
      { condition: 'With control signal', explanation: 'Opens/closes signal path' },
    ],
    commonUses: ['Tremolo', 'Signal routing', 'Sample and hold'],
    interactsWith: ['cd40106', 'timer_555', 'opamp'],
  },

  pt2399: {
    type: 'pt2399',
    generalPurpose: 'Digital delay IC with analog-like character.',
    sonicRole: 'Creates echo and delay effects with lo-fi charm.',
    valueEffects: [
      { range: 'Short delay', effect: 'Slapback, doubling' },
      { range: 'Long delay', effect: 'More degradation, warmer sound' },
    ],
    contextRules: [
      { condition: 'With feedback', explanation: 'Multiple repeating echoes' },
      { condition: 'Modulated clock', explanation: 'Chorus/vibrato effects' },
    ],
    commonUses: ['Delay', 'Echo', 'Modulation'],
    interactsWith: ['resistor', 'capacitor', 'opamp'],
  },

  optocoupler: {
    type: 'optocoupler',
    generalPurpose: 'Isolates circuits using light. LED drives photoresistor or transistor.',
    sonicRole: 'Creates smooth, natural-sounding tremolo and compression.',
    valueEffects: [
      { range: 'Vactrol (LED/LDR)', effect: 'Smooth, slow response - classic tremolo' },
      { range: 'Phototransistor', effect: 'Faster response, more precise' },
    ],
    contextRules: [
      { condition: 'In signal path', explanation: 'Acts as voltage-controlled resistor' },
      { condition: 'In feedback loop', explanation: 'Optical compression/limiting' },
    ],
    commonUses: ['Tremolo', 'Optical compression', 'Isolation'],
    interactsWith: ['resistor', 'opamp', 'timer_555'],
  },

  ldr: {
    type: 'ldr',
    generalPurpose: 'Light-dependent resistor. Resistance varies with light level.',
    sonicRole: 'Natural, organic response in tremolo and expression pedals.',
    valueEffects: [
      { range: 'Dark (high R)', effect: 'High resistance, low signal' },
      { range: 'Light (low R)', effect: 'Low resistance, high signal' },
    ],
    contextRules: [
      { condition: 'Paired with LED', explanation: 'Creates vactrol-style optocoupler' },
      { condition: 'As volume control', explanation: 'Expression pedal using light' },
    ],
    commonUses: ['Vactrol building', 'Light-controlled effects'],
    interactsWith: ['led', 'resistor'],
  },

  regulator: {
    type: 'regulator',
    generalPurpose: 'Maintains constant output voltage regardless of input variations.',
    sonicRole: 'Clean, stable power reduces noise and improves headroom.',
    valueEffects: [
      { range: '5V (7805)', effect: 'Logic and digital IC power' },
      { range: '9V (7809)', effect: 'Standard pedal voltage' },
      { range: '12V (7812)', effect: 'Higher headroom circuits' },
    ],
    contextRules: [
      { condition: 'With filter caps', explanation: 'Removes ripple and noise' },
      { condition: 'After battery/adapter', explanation: 'Stabilizes varying input' },
    ],
    commonUses: ['Power supply', 'Voltage reference', 'Isolation'],
    interactsWith: ['capacitor', 'resistor'],
  },
};

export function getComponentKnowledge(type: ComponentType): ComponentKnowledge | undefined {
  return componentKnowledge[type];
}

export function getQuickExplanation(type: ComponentType): string {
  const knowledge = componentKnowledge[type];
  if (!knowledge) return 'Unknown component';
  return knowledge.sonicRole;
}
