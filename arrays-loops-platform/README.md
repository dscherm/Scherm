# Arrays, Loops & Traversal - p5.js Learning Platform

An interactive 4-week curriculum for teaching arrays, loops, and traversal concepts using p5.js.

## Overview

This platform provides a structured learning experience with:
- **20 days** of exercises across **4 weeks**
- Progressive difficulty from basic arrays to 2D grid games
- Interactive p5.js code editor with live preview
- Vocabulary reference with programming terms
- Mini-projects at the end of each week
- Final capstone: Grid Adventure Game

## Curriculum Structure

### Week 1: Arrays Basics
- Creating and initializing arrays
- Accessing elements by index
- push(), pop() methods
- Parallel arrays
- **Mini-Project:** Click Collector

### Week 2: Loops Basics
- For-loop syntax and patterns
- Visual patterns with loops
- Animation with the draw() loop
- While loops
- **Mini-Project:** Pattern Poster Generator

### Week 3: Traversing Arrays
- Reading every element
- Computing sum, average, min, max
- Conditional highlighting
- Updating array values
- **Mini-Project:** Particle Fountain

### Week 4: Filtering & 2D Arrays
- Filter patterns
- Reduce/accumulate patterns
- Nested loops and grids
- 2D array data structures
- **Capstone:** Grid Adventure Game

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
cd arrays-loops-platform
npm install
npm run dev
```

The app will run at `http://localhost:3001`

### Building for Production

```bash
npm run build
```

## Features

- **Interactive Code Editor**: Write and run p5.js code directly in the browser
- **Live Preview**: See your sketch run instantly
- **Hint System**: Progressive hints for each exercise
- **Solution Viewer**: Full solutions available after attempting
- **Progress Tracking**: Points and completion tracking with localStorage
- **Vocabulary Reference**: Searchable glossary of programming terms
- **Rubrics**: Clear expectations for mini-projects

## Technology Stack

- React 18
- Vite
- p5.js (loaded via CDN)
- CSS3 (dark theme with neon accents)
- localStorage for progress persistence

## Project Structure

```
arrays-loops-platform/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx      # Main week selection view
│   │   ├── WeekView.jsx       # Day and exercise listing
│   │   ├── ExerciseDetail.jsx # Code editor and exercise view
│   │   └── VocabularyPage.jsx # Glossary of terms
│   ├── data/
│   │   ├── exercises.js       # All exercise content (4 weeks)
│   │   └── vocabulary.js      # Programming terms
│   ├── App.jsx                # Main app with routing
│   ├── App.css                # All styling
│   └── main.jsx               # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## For Teachers

### Daily Structure
1. **Warm-Up (5 min)**: Yesterday's concept micro-challenge
2. **Build (15 min)**: New concept demo + guided coding
3. **Practice (20 min)**: Independent exercises
4. **Share (5 min)**: Show working sketch
5. **Exit Ticket (5 min)**: Quick check question

### Assessment
- Daily exercise completion
- Weekly mini-project rubrics
- Final capstone project

## License

Educational use - part of the Scherm learning platform.
