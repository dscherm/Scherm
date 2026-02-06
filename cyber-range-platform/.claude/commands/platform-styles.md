# CyberEd Range Platform Style Guide

Use this guide when creating or styling new components for the platform. The theme is **80s Retro-Futuristic/Synthwave**.

## CSS Variables (use these!)

```css
/* Neon Color Palette */
--neon-cyan: #00ffff;      /* Primary accent */
--neon-magenta: #ff00ff;   /* Secondary accent */
--neon-pink: #ff0080;
--neon-green: #39ff14;     /* Success, stats */
--neon-blue: #00d4ff;
--neon-purple: #bf00ff;
--neon-orange: #ff6600;

/* Backgrounds */
--bg-dark: #0a0a0f;        /* Main background */
--bg-purple: #1a0a2e;      /* Section backgrounds */
--bg-grid: #120820;

/* Text */
--text-primary: #00ffff;
--text-secondary: #ff00ff;
--text-light: #e0e0e0;

/* Glow Effects */
--glow-cyan: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
--glow-magenta: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff;
--glow-green: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff14;
```

## Typography

```css
/* Headings - Orbitron */
h1, h2, h3 {
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
}

h1 { color: var(--neon-cyan); text-shadow: var(--glow-cyan); }
h2 { color: var(--neon-magenta); text-shadow: 0 0 10px var(--neon-magenta); }
h3 { color: var(--neon-cyan); }
h4, h5, h6 { color: var(--neon-green); }

/* Body - Share Tech Mono */
body, p, span {
  font-family: 'Share Tech Mono', 'Courier New', monospace;
}
```

## Cards (with corner cut effect)

```css
.card {
  background: rgba(10, 10, 15, 0.9);
  padding: 1.5rem;
  border: 1px solid var(--neon-cyan);
  transition: all 0.3s;
  clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
}

.card:hover {
  border-color: var(--neon-magenta);
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.4);
  transform: translateY(-5px);
}
```

## Buttons

### Primary Button (Cyan)
```css
.btn-primary {
  font-family: 'Share Tech Mono', monospace;
  background: transparent;
  border: 1px solid var(--neon-cyan);
  color: var(--neon-cyan);
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;
  clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
}

.btn-primary:hover {
  background: var(--neon-cyan);
  color: var(--bg-dark);
  box-shadow: 0 0 20px var(--neon-cyan);
}
```

### Secondary Button (Magenta)
```css
.btn-secondary {
  border: 1px solid var(--neon-magenta);
  color: var(--neon-magenta);
  /* Same structure as primary */
}
```

### Success Button (Green)
```css
.btn-success {
  background: #00ff88;
  color: var(--bg-dark);
  border: none;
  padding: 1rem 2rem;
  font-weight: bold;
}

.btn-success:hover {
  background: #00cc6a;
  box-shadow: 0 4px 8px rgba(0, 255, 136, 0.3);
}
```

## Difficulty Badges

```css
.difficulty {
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: bold;
}

.difficulty-easy { background: #4caf50; color: white; }
.difficulty-medium { background: #ff9800; color: white; }
.difficulty-hard { background: #f44336; color: white; }
```

## Form Inputs

```css
.input {
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: #fff;
  font-family: 'Courier New', monospace;
}

.input:focus {
  outline: none;
  border-color: var(--neon-cyan);
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}
```

## Code/Prompt Boxes

```css
.code-box {
  background: rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  border-radius: 5px;
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
  border-left: 4px solid var(--neon-cyan);
}
```

## Feedback Messages

```css
.feedback-success {
  background: rgba(76, 175, 80, 0.2);
  border: 2px solid #4caf50;
  color: #4caf50;
  padding: 1rem;
  border-radius: 5px;
}

.feedback-error {
  background: rgba(244, 67, 54, 0.2);
  border: 2px solid #f44336;
  color: #f44336;
}
```

## Stat Cards

```css
.stat-value {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--neon-green);
  text-shadow: var(--glow-green);
}

.stat-label {
  color: var(--neon-cyan);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.85rem;
}
```

## Progress Bars

```css
.progress-track {
  background: rgba(0, 0, 0, 0.5);
  height: 4px;
  border: 1px solid var(--neon-magenta);
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--neon-magenta), var(--neon-cyan));
  box-shadow: 0 0 10px var(--neon-magenta);
}
```

## Hover Effects

```css
/* Sweep effect */
.element::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.element:hover::before {
  left: 100%;
}
```

## Key Principles

1. **Always use CSS variables** - keeps theme consistent
2. **Clip-path corners** - gives that 80s tech feel
3. **Glow effects on hover** - neon aesthetic
4. **Uppercase + letter-spacing** - for labels/buttons
5. **Orbitron for headings** - futuristic look
6. **Share Tech Mono for body** - terminal/hacker vibe
7. **Cyan = primary, Magenta = secondary, Green = success**
8. **Dark backgrounds with neon accents**
