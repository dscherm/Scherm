# Claude Code Projects & Skills

This repository contains projects and code examples built with Claude Code. Below is documentation of key features, techniques, and reusable patterns.

---

## Projects

### 🍸 Cocktail Mixologist App
**Location:** `docs/`
**Live Demo:** [GitHub Pages](https://dscherm.github.io/Scherm/docs/)

An interactive cocktail discovery application featuring:
- **Flavor-Based Recommendations**: Weighted flavor pairing system inspired by The Flavor Bible
- **Interactive Node Visualizations**: D3.js force-directed graphs with dynamic exploration
- **Cocktail Codex Taxonomy**: Hierarchical organization based on 6 foundational cocktail templates
- **Device-Responsive Design**: Adapts interactions for desktop (hover) and mobile (tap-to-select)
- **Ingredient Normalization**: Intelligent fuzzy matching for flavor profile lookups

**Key Files:**
- `docs/index.html` - Main application
- `docs/app.js` - Core application logic
- `docs/flavor-engine.js` - Flavor pairing and normalization system
- `docs/cocktail-graph.js` - Individual cocktail node visualization
- `docs/codex-graph.js` - Hierarchical Codex visualization
- `docs/styles.css` - Synthwave retro-futuristic theme

---

## Skills & Techniques

### 🔵 Node Visualization with D3.js
**Documentation:** [`docs/NODE_VISUALIZATION_SKILL.md`](docs/NODE_VISUALIZATION_SKILL.md)

Comprehensive guide to building interactive force-directed graph visualizations using D3.js v7.

**Topics Covered:**
- Force simulation setup and configuration
- Hierarchical node structures (3-level architecture)
- Measurement parsing and proportional node sizing
- Multi-modal interaction patterns (hover, click, drag)
- Device-responsive design with capability detection
- Hexagon generation using trigonometry
- Category-based color coding and radial gradients
- Dynamic node expansion/collapse mechanisms
- D3's enter-update-exit pattern for smooth updates
- Best practices and implementation checklist

**Key Techniques:**
```javascript
// Force simulation with multiple forces
const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id))
    .force('charge', d3.forceManyBody().strength(-300))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(d => d.radius + 10));

// Device capability detection
const hasHoverCapability = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// Hexagon path generation
function hexagonPath(radius) {
    const points = [];
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 2;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        points.push(`${x},${y}`);
    }
    return `M${points.join('L')}Z`;
}
```

**Use Cases:**
- Relational data visualization
- Interactive knowledge graphs
- Network diagrams
- Hierarchical exploration interfaces
- Recipe or ingredient relationship mapping

---

### 🔍 Ingredient Normalization System
**Implementation:** `docs/flavor-engine.js`

Intelligent ingredient matching system that recognizes variations and aliases.

**Features:**
- **Modifier Stripping**: Removes words like "juice", "fresh", "squeezed"
- **Alias Mapping**: 60+ ingredient aliases (e.g., "lime" → "Lime juice", "white rum" → "Light rum")
- **Fuzzy Matching**: Partial string matching for close matches
- **Normalization Chain**: Direct match → Alias lookup → Modifier removal → Fuzzy search

**Example:**
```javascript
// All of these resolve to "Lime juice"
normalizeIngredient("lime")           // → "Lime juice"
normalizeIngredient("lime juice")     // → "Lime juice"
normalizeIngredient("fresh lime juice") // → "Lime juice"
normalizeIngredient("squeezed lime")  // → "Lime juice"
```

**Benefits:**
- Consistent flavor profile lookups
- Better pairing recommendations
- Improved user experience (flexible search)

---

### 🎨 Synthwave Retro-Futuristic Design
**Implementation:** `docs/styles.css`, `index.html`

60s atomic age aesthetic with modern synthwave color palette.

**Design Elements:**
- **Neon Color Palette**: Pink (#FF006E), Purple (#8B2FC9), Cyan (#00D9C0), Orange (#FF6B35)
- **Retro Grid Background**: Perspective-transformed grid pattern
- **Orbital Animations**: Atomic logo with spinning electrons
- **Glassmorphic Cards**: Frosted glass effect with blur
- **Gradient Accents**: Radial and linear gradients throughout

**CSS Patterns:**
```css
/* Retro grid background */
body::before {
    background:
        linear-gradient(90deg, var(--grid-color) 1px, transparent 1px),
        linear-gradient(0deg, var(--grid-color) 1px, transparent 1px);
    background-size: 50px 50px;
    transform: rotateX(60deg) translateY(50%);
}

/* Glassmorphic cards */
.project-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

---

### 🧪 Flavor Pairing Algorithm
**Implementation:** `docs/flavor-engine.js`

Weighted flavor relationship system using Jaccard similarity.

**Methodology:**
- **Flavor Profiles**: Each ingredient has weighted flavor characteristics (0-3 scale)
- **Jaccard Similarity**: Measures overlap between flavor sets
  - `J(A,B) = |A ∩ B| / |A ∪ B|`
- **Compatibility Score**: Combines Jaccard similarity with pairwise relationships
- **Category Bonuses**: Rewards complementary categories (e.g., spirit + citrus)

**Example Profile:**
```javascript
FlavorProfiles['Lime juice'] = {
    category: 'citrus',
    flavors: {
        citrus: 3,
        tart: 3,
        bright: 2,
        fresh: 2,
        acidic: 2
    },
    pairsWith: {
        'Light rum': 3,
        'Tequila': 3,
        'Mint': 2,
        // ...
    }
}
```

**Algorithm:**
```javascript
function calculateJaccardSimilarity(flavors1, flavors2) {
    const set1 = new Set(Object.keys(flavors1));
    const set2 = new Set(Object.keys(flavors2));

    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);

    return intersection.size / union.size;
}
```

---

## Reusable Patterns

### Device-Responsive Interactions

Detect device capabilities and adapt UI:

```javascript
// Capability detection
const hasHoverCapability = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// Desktop: show on hover
if (hasHoverCapability) {
    element.on('mouseenter', showControls);
    element.on('mouseleave', hideControlsWithDelay);
}

// Mobile: show on tap, hide on background click
element.on('click', toggleControls);
background.on('click', hideControls);
```

### Bottom Sheet Action Buttons

Mobile-first pattern for contextual actions:

```css
.action-buttons {
    position: fixed;
    bottom: -200px;
    transition: bottom 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.action-buttons.visible {
    bottom: 0;
}
```

### Enter-Update-Exit Pattern (D3.js)

Handle dynamic data changes smoothly:

```javascript
const nodes = nodeGroup
    .selectAll('g')
    .data(newData, d => d.id)
    .join(
        enter => enter.append('g').attr('opacity', 0)
            .call(enter => enter.transition().duration(500).attr('opacity', 1)),
        update => update,
        exit => exit.transition().duration(300).attr('opacity', 0).remove()
    );
```

---

## Development Notes

### Git Workflow
- Feature branches follow pattern: `claude/[feature-name]-[session-id]`
- Commit messages: descriptive with context
- Always push with `-u` flag for tracking

### API Usage
- **TheCocktailDB API**: RESTful cocktail database
  - Search by name: `www.thecocktaildb.com/api/json/v1/1/search.php?s={name}`
  - Search by ingredient: `www.thecocktaildb.com/api/json/v1/1/filter.php?i={ingredient}`
  - Lookup by ID: `www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id}`

### Browser Storage
- LocalStorage for custom cocktails
- Session state management
- Filter preferences persistence

---

## Future Skills to Document

- [ ] Hierarchical taxonomy systems
- [ ] Filter and search patterns
- [ ] Modal and detail panel interactions
- [ ] SVG icon creation
- [ ] Animation and transition techniques
- [ ] Responsive layout strategies

---

*Last updated: 2026-01-31*
