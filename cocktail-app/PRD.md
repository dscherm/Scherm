# Product Requirements Document
# Advanced Cocktail Mixologist

**Version:** 2.0
**Last Updated:** 2026-02-17
**Status:** Active Development
**Project Lead:** Scherm
**Technical Stack:** D3.js v7, Vanilla JavaScript ES6+, CSS3, TheCocktailDB API

---

## Executive Summary

The Advanced Cocktail Mixologist is an interactive web application that revolutionizes cocktail discovery through flavor science, visual exploration, and educational taxonomy. Built on The Flavor Bible methodology and The Cocktail Codex framework, it helps users discover cocktails based on flavor profiles, explore ingredient relationships through interactive node graphs, and understand cocktail families through a hierarchical taxonomy system.

**Live Demo:** https://dscherm.github.io/Scherm/docs/

---

## Problem Statement

### User Needs
1. **Home Bartenders:** Want to understand which ingredients pair well together and why
2. **Cocktail Enthusiasts:** Need to explore cocktail variations and understand relationships between recipes
3. **Learners:** Desire educational context about cocktail families and foundational templates
4. **Mobile Users:** Require touch-optimized interactions that work as well as desktop hover patterns

### Current Gaps
- Most cocktail apps focus on search without explaining flavor relationships
- No visualization of ingredient compatibility or cocktail family trees
- Limited educational content about why certain ingredients work together
- Desktop-centric interactions that don't translate to mobile

---

## Goals & Success Metrics

### Primary Goals
1. **Education:** Users understand cocktail taxonomy and flavor pairing principles
2. **Discovery:** Users find new cocktails based on flavor preferences
3. **Engagement:** Users explore ingredient relationships through interactive visualizations
4. **Accessibility:** Application works seamlessly across devices (desktop, tablet, mobile)

### Success Metrics
- Users successfully navigate 3+ levels deep in node graphs (complementary/alternatives expansion)
- Users explore at least 2 different root cocktail families in Codex view
- Mobile users can access all features without frustration
- Zero errors in flavor profile lookups after ingredient normalization

### Non-Goals (Out of Scope)
- User accounts or social features
- E-commerce (buying ingredients)
- Recipe rating/review system
- Video content or tutorials

---

## User Personas

### Persona 1: Sarah - The Curious Home Bartender
**Demographics:** 28, professional, enjoys hosting dinner parties
**Goals:** Learn to make impressive cocktails, understand flavor principles
**Pain Points:** Overwhelmed by recipe variety, doesn't know substitutions
**Use Case:** "I have gin but the recipe calls for vodka - what changes?"

### Persona 2: Marcus - The Cocktail Enthusiast
**Demographics:** 35, hobbyist mixologist, follows cocktail blogs
**Goals:** Deep dive into cocktail history and variations
**Pain Points:** Hard to see relationships between similar cocktails
**Use Case:** "Show me all Daiquiri variations and what makes each unique"

### Persona 3: Alex - The Visual Learner
**Demographics:** 42, learns best through diagrams and interaction
**Goals:** Understand cocktail structure through visual exploration
**Pain Points:** Text-heavy recipe sites don't show relationships
**Use Case:** "What ingredients go well with rum? Show me visually"

---

## Core Features

### Feature 1: Cocktail Search & Discovery
**Priority:** P0 (Critical)
**Status:** ✅ Complete

**Description:**
Multi-modal search allowing users to find cocktails by name, ingredient, or base spirit.

**User Stories:**
- As a user, I want to search for cocktails by name so I can find specific recipes
- As a user, I want to filter by base spirit (rum, gin, vodka, etc.) so I can use what I have
- As a user, I want to search by ingredient so I can use up ingredients I have on hand
- As a user, I want random suggestions so I can discover new cocktails

**Acceptance Criteria:**
- [ ] Search returns results within 1 second
- [ ] Base liquor buttons display all available categories
- [ ] Random button provides a different cocktail on each click
- [ ] Results show cocktail name, image, and basic info

**Technical Implementation:**
- TheCocktailDB API endpoints:
  - Search by name: `www.thecocktaildb.com/api/json/v1/1/search.php?s={name}`
  - Filter by ingredient: `www.thecocktaildb.com/api/json/v1/1/filter.php?i={ingredient}`
  - Random: `www.thecocktaildb.com/api/json/v1/1/random.php`
- Debounced search input (300ms delay)
- Loading states during API calls
- Error handling for failed requests

---

### Feature 2: Flavor Pairing Engine
**Priority:** P0 (Critical)
**Status:** ✅ Complete

**Description:**
Weighted flavor profile system that calculates ingredient compatibility using Jaccard similarity and pairwise relationships.

**User Stories:**
- As a user, I want to see which ingredients pair well with a selected ingredient
- As a user, I want to understand why two ingredients work together (shared flavor notes)
- As a user, I want compatibility scores so I can prioritize recommendations

**Acceptance Criteria:**
- [x] All common cocktail ingredients have flavor profiles (100+ ingredients)
- [x] Jaccard similarity algorithm calculates flavor overlap correctly
- [x] Compatibility scores range from 0-10 with clear thresholds
- [x] Recommendations sorted by compatibility score (highest first)
- [x] Flavor profiles include category, flavors (weighted 0-3), and pairsWith relationships

**Technical Implementation:**
```javascript
// Flavor Profile Structure
FlavorProfiles['Ingredient'] = {
    category: 'spirit' | 'citrus' | 'sweetener' | 'liqueur' | 'bitters' | 'herb' | 'spice',
    flavors: {
        'flavor_note': 0-3  // Weight: 0=none, 1=subtle, 2=moderate, 3=dominant
    },
    pairsWith: {
        'Ingredient': 0-3  // Pairwise compatibility score
    }
}

// Jaccard Similarity: J(A,B) = |A ∩ B| / |A ∪ B|
function calculateJaccardSimilarity(flavors1, flavors2) {
    const set1 = new Set(Object.keys(flavors1));
    const set2 = new Set(Object.keys(flavors2));
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    return intersection.size / union.size;
}

// Compatibility Score: (Jaccard * 5) + (Pairwise * 2) + CategoryBonus
```

**Data Sources:**
- The Flavor Bible (Dornenburg & Page)
- Professional bartender knowledge
- Classic cocktail recipes analysis

---

### Feature 3: Ingredient Normalization System
**Priority:** P0 (Critical)
**Status:** ✅ Complete

**Description:**
Intelligent fuzzy matching that recognizes ingredient variations, aliases, and modifiers to ensure consistent flavor profile lookups.

**User Stories:**
- As a user, I want "lime" and "lime juice" to be treated as the same ingredient
- As a user, I want "fresh squeezed lemon juice" to resolve to the correct profile
- As a user, I want "white rum" and "light rum" recognized as the same

**Acceptance Criteria:**
- [x] 60+ ingredient aliases mapped correctly
- [x] 18+ common modifiers stripped (juice, fresh, squeezed, etc.)
- [x] Fuzzy matching with partial string comparison
- [x] Normalization chain: Direct match → Alias lookup → Modifier removal → Fuzzy search
- [x] All variations resolve to canonical profile names

**Technical Implementation:**
```javascript
INGREDIENT_MODIFIERS = [
    'juice', 'fresh', 'dried', 'extract', 'syrup', 'liqueur',
    'zest', 'peel', 'wedge', 'slice', 'twist', 'leaf', 'leaves',
    'ground', 'whole', 'crushed', 'muddled', 'infused',
    'simple', 'homemade', 'organic', 'premium', 'squeezed', 'pure'
]

INGREDIENT_ALIASES = {
    'lime': 'Lime juice',
    'lemon': 'Lemon juice',
    'white rum': 'Light rum',
    'whisky': 'Bourbon',
    // ... 60+ total mappings
}

function normalizeIngredient(ingredient) {
    // 1. Direct alias match
    // 2. Strip modifiers with regex
    // 3. Exact match in FlavorProfiles
    // 4. Partial match (fuzzy)
    // 5. Return original if no match
}
```

---

### Feature 4: Interactive Node Visualizations
**Priority:** P0 (Critical)
**Status:** ✅ Complete

**Description:**
D3.js force-directed graphs showing cocktail-ingredient relationships with dynamic expansion of complementary flavors and alternative ingredients.

**User Stories:**
- As a user, I want to see a cocktail's ingredients as connected nodes sized by proportion
- As a user, I want to click an ingredient to see alternatives (e.g., gin alternatives)
- As a user, I want to expand nodes to see complementary ingredients (what pairs well)
- As a user, I want smooth animations when nodes are added/removed
- As a user on mobile, I want tap-based interactions that work as well as hover

**Acceptance Criteria:**
- [x] Central cocktail node with radiating ingredient nodes
- [x] Node sizes proportional to measurement (1 oz > 0.5 oz)
- [x] Color-coded by ingredient category (spirit=orange, citrus=gold, etc.)
- [x] Dynamic expansion: complementary flavors (teal) and alternatives (purple)
- [x] Device-responsive: hover on desktop, tap-to-select on mobile
- [x] Smooth enter/exit animations (500ms fade-in, 300ms fade-out)
- [x] Force simulation prevents overlap (collision detection)
- [x] Tooltips show ingredient details and compatibility scores

**Technical Implementation:**
- **D3.js v7** force simulation with 4 forces:
  - `forceLink`: Attracts connected nodes (distance based on measurement)
  - `forceManyBody`: Repels nodes from each other (-300 strength)
  - `forceCenter`: Pulls toward viewport center
  - `forceCollide`: Prevents overlap (radius + 10px buffer)
- **Three-level hierarchy:**
  - Level 0: Cocktail (70px radius, fixed)
  - Level 1: Ingredients (25-60px, proportional to measurement)
  - Level 2: Complementary/Alternatives (20px, fixed small)
- **Measurement parsing:** Handles fractions (1/2), decimals (1.5), dashes, "to taste"
- **Enter-update-exit pattern:** D3 data binding with key function (`d => d.id`)
- **Device detection:** `window.matchMedia('(hover: hover) and (pointer: fine)')`

**Files:**
- `docs/cocktail-graph.js` - Individual cocktail graphs
- `docs/NODE_VISUALIZATION_SKILL.md` - Complete implementation guide

---

### Feature 5: Cocktail Codex Taxonomy
**Priority:** P1 (High)
**Status:** ✅ Complete

**Description:**
Hierarchical visualization of cocktail families based on The Cocktail Codex book, showing 6 root cocktails (templates) with all variations organized by shared structure.

**User Stories:**
- As a user, I want to see the 6 foundational cocktail templates
- As a user, I want to click a root to see all variations (Martini → Vesper, Dirty Martini, etc.)
- As a user, I want to filter variations by characteristics (stirred, shaken, citrus, etc.)
- As a user, I want to understand what makes a cocktail belong to a family
- As a user, I want to click a variation to see its full recipe with node graph

**Acceptance Criteria:**
- [x] 6 root cocktails displayed as hexagons in circular layout
- [x] Root nodes: Old Fashioned, Martini, Daiquiri, Sidecar, Whiskey Highball, Flip
- [x] Each root has color, template structure, base spirits, characteristics
- [x] Clicking root navigates to focused view with variations
- [x] Filter chips toggle characteristics (spirit-forward, sour, shaken, etc.)
- [x] Active filters highlight, variations update in real-time
- [x] Back button returns to root overview
- [x] Clicking variation loads full cocktail details with ingredients

**Technical Implementation:**
```javascript
// Root Cocktail Structure
RootCocktails = {
    OLD_FASHIONED: {
        id: 'old-fashioned',
        name: 'Old Fashioned',
        description: 'Spirit + Sugar + Bitters',
        template: ['Spirit', 'Sugar', 'Bitters'],
        baseSpirits: ['Bourbon', 'Rye whiskey', 'Brandy', 'Rum'],
        characteristics: ['spirit-forward', 'stirred', 'boozy', 'bitter'],
        color: '#D4AF37'
    },
    // ... 5 more roots
}

// Template Matching Algorithm
function matchCocktailToTemplate(ingredients, instructions) {
    // Analyze ingredient categories
    // Check preparation method (stirred vs shaken)
    // Compare to template structures
    // Return best match + confidence score
}
```

**Hexagon Generation:**
```javascript
function hexagonPath(radius) {
    const points = [];
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 2;  // 60° increments, start top
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        points.push(`${x},${y}`);
    }
    return `M${points.join('L')}Z`;  // SVG path
}
```

**Files:**
- `docs/cocktail-codex.js` - Root cocktail definitions and matching
- `docs/codex-graph.js` - Hierarchical visualization
- `docs/codex-app.js` - Tab initialization and filtering

---

### Feature 6: Device-Responsive Interactions
**Priority:** P0 (Critical)
**Status:** ✅ Complete

**Description:**
Adaptive UI that provides optimal interaction patterns for desktop (hover) and mobile (tap-to-select) without compromising functionality.

**User Stories:**
- As a desktop user, I want action buttons to appear on hover for quick access
- As a mobile user, I want to tap nodes to show action buttons at the bottom
- As a mobile user, I want buttons to persist until I dismiss them or click background
- As a user on any device, I want clear visual feedback when nodes are selected

**Acceptance Criteria:**
- [x] Capability detection using `matchMedia('(hover: hover) and (pointer: fine)')`
- [x] Desktop: Show action buttons on hover, hide on mouse leave (100ms grace period)
- [x] Mobile: Show buttons on tap, slide up from bottom with animation
- [x] Selected nodes highlighted with gold border and pulsing glow
- [x] Action buttons: "Show Alternatives" (🔄), "Show Flavors" (✨), "Close" (✕)
- [x] Buttons remain visible while hovering over them (desktop)
- [x] Clicking background deselects and hides buttons

**Technical Implementation:**
```javascript
// Device Detection
const hasHoverCapability = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// Desktop Behavior
if (hasHoverCapability) {
    nodeSelection.on('mouseenter', showActionButtons);
    nodeSelection.on('mouseleave', () => {
        setTimeout(() => {
            if (!actionButtons.matches(':hover')) {
                hideActionButtons();
            }
        }, 100);  // Grace period for moving to buttons
    });
}

// Mobile Behavior
nodeSelection.on('click', (event, d) => {
    if (selectedNode?.id === d.id) {
        hideActionButtons();
    } else {
        showActionButtons(d);
    }
});

// Background deselect
svg.on('click', (event) => {
    if (event.target.tagName === 'svg') {
        hideActionButtons();
    }
});
```

**CSS:**
```css
.node-action-buttons {
    position: fixed;
    bottom: -200px;
    transition: bottom 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.node-action-buttons.visible {
    bottom: 0;
}

.graph-node.selected circle {
    stroke: #FFD700 !important;
    stroke-width: 5px !important;
    filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8));
    animation: selectedPulse 2s infinite;
}
```

---

### Feature 7: Synthwave Retro-Futuristic Design
**Priority:** P2 (Nice to Have)
**Status:** ✅ Complete

**Description:**
Visually striking aesthetic combining synthwave/vaporwave elements with retro-futuristic design patterns for an immersive experience.

**User Stories:**
- As a user, I want a visually appealing interface that makes cocktail exploration exciting
- As a user, I want consistent theming across all views (search, codex, node graphs)
- As a user, I want smooth animations and transitions that feel polished

**Acceptance Criteria:**
- [x] Neon color palette: Pink (#FF2E97), Orange (#FF6B35), Yellow (#FFCF40), Purple (#B721FF)
- [x] Gradient backgrounds (sunset: purple → pink → orange)
- [x] Retro grid overlay with perspective transform
- [x] Radial gradients on all nodes and cards
- [x] Text shadows for readability on all backgrounds
- [x] Smooth transitions (200-500ms) on all interactive elements
- [x] Hover effects with scale and glow
- [x] Animated stars in background

**Technical Implementation:**
```css
:root {
    --neon-pink: #FF2E97;
    --neon-orange: #FF6B35;
    --neon-yellow: #FFCF40;
    --purple-shadow: #B721FF;
    --dark-bg: #1a0a28;
}

body {
    background: linear-gradient(180deg, #0f0514 0%, #2d1b3d 30%, #4a2545 60%, #5c1f3a 100%);
}

body::before {
    background:
        linear-gradient(90deg, var(--grid-color) 1px, transparent 1px),
        linear-gradient(0deg, var(--grid-color) 1px, transparent 1px);
    background-size: 50px 50px;
    transform: rotateX(60deg) translateY(50%);
    opacity: 0.3;
}
```

---

## Information Architecture

```
Homepage (index.html)
│
└─── Cocktail Mixologist (docs/index.html)
     │
     ├─── Tab 1: Search & Discover
     │    ├─── Search Input
     │    ├─── Base Liquor Filters
     │    ├─── Random Button
     │    └─── Results → Cocktail Detail
     │         ├─── Cocktail Name & Image
     │         ├─── Ingredients List
     │         ├─── Instructions
     │         ├─── Node Visualization Graph
     │         │    ├─── Central Cocktail Node
     │         │    ├─── Ingredient Nodes (Level 1)
     │         │    └─── Expanded Nodes (Level 2)
     │         │         ├─── Complementary Flavors
     │         │         └─── Alternative Ingredients
     │         └─── Flavor Profile Panel
     │              ├─── Dominant Flavors
     │              ├─── Compatibility Scores
     │              └─── Recommended Pairings
     │
     ├─── Tab 2: Cocktail Codex
     │    ├─── Root Cocktails View
     │    │    └─── 6 Hexagonal Root Nodes
     │    │         ├─── Old Fashioned
     │    │         ├─── Martini
     │    │         ├─── Daiquiri
     │    │         ├─── Sidecar
     │    │         ├─── Whiskey Highball
     │    │         └─── Flip
     │    │
     │    └─── Focused Root View (after clicking root)
     │         ├─── Back Button → Root Overview
     │         ├─── Central Root Hexagon
     │         ├─── Template Ingredients (Level 1)
     │         ├─── Variation Cocktails (Level 2)
     │         ├─── Filter Chips
     │         │    ├─── Spirit-Forward
     │         │    ├─── Sour
     │         │    ├─── Shaken/Stirred
     │         │    └─── ... more characteristics
     │         └─── Click Variation → Full Cocktail Detail
     │
     └─── Tab 3: Create Custom
          ├─── Custom Cocktail Form
          ├─── Add/Remove Ingredients
          ├─── Save to LocalStorage
          └─── Saved Cocktails List
```

---

## User Flows

### Flow 1: Discover Similar Cocktails
1. User lands on Search tab
2. User clicks "Random Cocktail" or searches by name
3. Cocktail details appear with node visualization
4. User hovers/taps an ingredient node (e.g., "Rum")
5. Action buttons appear: "Show Alternatives" / "Show Flavors"
6. User clicks "Show Flavors"
7. Graph expands with 5 complementary ingredients (e.g., Lime, Mint, Coconut, etc.)
8. User sees compatibility scores in tooltips
9. User clicks a complementary ingredient to see its details
10. Modal shows flavor profile and pairings

### Flow 2: Explore Cocktail Families
1. User navigates to Codex tab
2. 6 root cocktails displayed as hexagons
3. User clicks "Daiquiri" hexagon
4. View transitions to focused Daiquiri family
5. Center shows Daiquiri template: Rum + Citrus + Sugar
6. Surrounding nodes show variations: Hemingway, Frozen, Strawberry, etc.
7. User activates filter: "Shaken"
8. Non-shaken variations fade out
9. User clicks "Hemingway Daiquiri"
10. Full recipe loads with ingredients and node graph
11. User clicks "Back" to return to Daiquiri family

### Flow 3: Find Ingredient Substitutions
1. User views a cocktail with "Gin"
2. User taps the Gin node
3. Action buttons slide up from bottom (mobile)
4. User taps "Show Alternatives"
5. Graph expands with gin alternatives: Vodka (high similarity), Rum (medium), etc.
6. Similarity percentages shown (e.g., 85%, 60%)
7. User taps "Vodka" alternative
8. Modal explains flavor difference and how it changes the cocktail

---

## Technical Architecture

### Technology Stack
- **Frontend:** Vanilla JavaScript ES6+, HTML5, CSS3
- **Visualization:** D3.js v7 (force-directed graphs)
- **Data Source:** TheCocktailDB API (RESTful JSON API)
- **Storage:** LocalStorage (custom cocktails)
- **Styling:** CSS Custom Properties (theming)
- **Build:** None (vanilla, no bundler)
- **Hosting:** GitHub Pages (static site)

### File Structure
```
docs/
├── index.html                      # Main application entry
├── styles.css                      # All CSS (7800+ lines)
├── app.js                          # Core application logic
├── flavor-engine.js                # Flavor pairing system
│   ├── FlavorProfiles{}            # 100+ ingredient profiles
│   ├── normalizeIngredient()       # Fuzzy matching
│   ├── calculateJaccardSimilarity()
│   ├── calculateCompatibilityScore()
│   └── getIngredientRecommendations()
├── cocktail-graph.js               # Individual cocktail D3 graphs
│   ├── createCocktailGraph()
│   ├── expandComplementaryFlavors()
│   ├── expandAlternatives()
│   └── parseMeasurement()
├── cocktail-codex.js               # Root cocktail definitions
│   ├── RootCocktails{}
│   └── matchCocktailToTemplate()
├── codex-graph.js                  # Hierarchical Codex visualization
│   ├── createRootCocktailsGraph()
│   ├── createFocusedCocktailGraph()
│   ├── hexagonPath()
│   └── filterVariationsByCharacteristics()
├── codex-app.js                    # Codex tab initialization
├── app-enhanced.js                 # Alternative enhanced version
└── NODE_VISUALIZATION_SKILL.md     # Implementation guide
```

### Data Models

**Cocktail Object (from API):**
```javascript
{
    idDrink: "11007",
    strDrink: "Margarita",
    strCategory: "Ordinary Drink",
    strAlcoholic: "Alcoholic",
    strGlass: "Cocktail glass",
    strInstructions: "Rub the rim...",
    strDrinkThumb: "https://...",
    strIngredient1: "Tequila",
    strMeasure1: "1 1/2 oz"
    // ... up to 15 ingredients
}
```

**Flavor Profile Object:**
```javascript
{
    category: 'spirit',
    flavors: {
        citrus: 3,
        tart: 3,
        bright: 2,
        fresh: 2
    },
    pairsWith: {
        'Light rum': 3,
        'Mint': 2,
        'Simple syrup': 2
    }
}
```

**Root Cocktail Object:**
```javascript
{
    id: 'daiquiri',
    name: 'Daiquiri',
    description: 'Spirit + Citrus + Sugar',
    template: ['Spirit', 'Citrus', 'Sweetener'],
    baseSpirits: ['Light rum', 'Dark rum'],
    flavorProfile: ['citrus', 'tart', 'balanced', 'refreshing'],
    characteristics: ['sour', 'shaken', 'citrus', 'balanced'],
    color: '#FFE135',
    variations: [
        { id: '11006', name: 'Daiquiri', apiId: '11006' },
        { id: 'hemingway', name: 'Hemingway Daiquiri', apiId: '17222' }
    ]
}
```

### API Integration

**Endpoints Used:**
```javascript
// Search by name
GET www.thecocktaildb.com/api/json/v1/1/search.php?s={name}

// Filter by ingredient
GET www.thecocktaildb.com/api/json/v1/1/filter.php?i={ingredient}

// Lookup by ID
GET www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id}

// Random cocktail
GET www.thecocktaildb.com/api/json/v1/1/random.php

// List by category
GET www.thecocktaildb.com/api/json/v1/1/filter.php?c={category}
```

**Error Handling:**
- Network failures: Show user-friendly error message
- Empty results: "No cocktails found, try different search"
- API rate limiting: Currently not enforced by TheCocktailDB
- Malformed data: Validate required fields before rendering

---

## Design Specifications

### Color Palette
```css
/* Primary Synthwave Colors */
--neon-pink: #FF2E97
--neon-magenta: #FF006E
--neon-orange: #FF6B35
--neon-yellow: #FFCF40
--neon-gold: #FFB800
--purple-shadow: #B721FF

/* Background Gradients */
--dark-bg: #1a0a28
--darker-bg: #0f0514
--sunset-gradient: linear-gradient(180deg, #0f0514 0%, #2d1b3d 30%, #4a2545 60%, #5c1f3a 100%)

/* Category Colors (Node Graph) */
--spirit-color: #FF6B35
--citrus-color: #FFD700
--sweetener-color: #00D9C0
--liqueur-color: #8B2FC9
--bitters-color: #D4AF37
--herb-color: #38ef7d
```

### Typography
```css
font-family: 'Courier New', monospace;  /* All text */

h1: 3em, bold, letter-spacing: 0.1em, uppercase
h2: 2.5em, bold
h3: 1.8em, bold
Body: 1em
Labels: 0.9em, uppercase, letter-spacing: 0.05em
```

### Spacing & Layout
```css
Container max-width: 1200px
Section padding: 40px 20px
Card padding: 25px
Button padding: 15px 35px
Gap (flexbox): 15-20px
Border radius: 10-15px (cards), 25px (chips/buttons)
```

### Animations
```css
/* Transitions */
All interactive elements: 200-300ms ease
Tab switches: 400ms
Node expansion: 500ms enter, 300ms exit
Action buttons: 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)

/* Keyframe Animations */
Selected node pulse: 2s infinite
Star twinkle: 4s ease-in-out infinite
Hover glow: 500ms
```

### Responsive Breakpoints
```css
Desktop: 1200px+
Tablet: 768px - 1199px
Mobile: < 768px

/* Mobile Adjustments */
- Reduce font sizes by 15-20%
- Stack cards vertically
- Full-width action buttons
- Larger tap targets (44px minimum)
- Reduce node graph canvas height (500px → 400px)
```

---

## Performance Requirements

### Load Time
- **Initial page load:** < 2 seconds on 3G connection
- **API response:** < 1 second for search results
- **Graph rendering:** < 500ms for initial cocktail graph
- **Node expansion:** < 300ms animation

### Optimization Strategies
- Debounced search input (300ms)
- Lazy load images from API
- Minimize API calls (cache in memory during session)
- D3 enter-update-exit pattern for efficient DOM updates
- CSS animations on GPU (transform, opacity)
- LocalStorage for custom cocktails (no server calls)

### Browser Support
- **Desktop:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile:** iOS Safari 14+, Chrome Android 90+
- **Required Features:**
  - ES6+ (arrow functions, const/let, template literals, spread operator)
  - CSS Custom Properties
  - Fetch API
  - LocalStorage
  - matchMedia API

---

## Accessibility (Future Enhancement)

**Current State:** Limited accessibility
**Priority:** P3 (Future)

**Planned Improvements:**
- [ ] Keyboard navigation for all interactive elements
- [ ] ARIA labels on all buttons and inputs
- [ ] Screen reader announcements for dynamic content
- [ ] High contrast mode toggle
- [ ] Focus indicators on all focusable elements
- [ ] Alt text for all images
- [ ] Semantic HTML (proper heading hierarchy)

---

## Security & Privacy

### Data Privacy
- **No user accounts:** No personal data collected
- **No cookies:** Only LocalStorage for custom cocktails (client-side only)
- **No analytics:** No tracking scripts
- **No third-party scripts:** Except D3.js CDN

### API Security
- **TheCocktailDB:** Free API, no authentication required
- **HTTPS only:** All API calls over secure connection
- **No sensitive data:** Public cocktail data only

---

## Future Roadmap

### Phase 1 (Current) ✅
- Core search and discovery
- Flavor pairing engine
- Node visualizations
- Cocktail Codex taxonomy
- Device-responsive interactions

### Phase 2 (Planned)
- [ ] Accessibility improvements (keyboard nav, ARIA, screen readers)
- [ ] Advanced filtering (multiple simultaneous filters)
- [ ] Cocktail comparison view (side-by-side)
- [ ] Share cocktails (generate shareable links)
- [ ] Print-friendly recipe cards

### Phase 3 (Ideas)
- [ ] User favorites (with URL export/import for sharing)
- [ ] Ingredient inventory tracker ("What can I make?")
- [ ] Shopping list generator
- [ ] Seasonal cocktail recommendations
- [ ] Cocktail history and origin stories
- [ ] Video tutorials integration

---

## Testing Strategy

### Manual Testing Checklist
- [ ] All API endpoints return valid data
- [ ] Search works for name, ingredient, base liquor
- [ ] Node graphs render correctly on desktop and mobile
- [ ] Flavor recommendations sorted by compatibility
- [ ] Ingredient normalization handles all variations
- [ ] Codex filtering updates variations in real-time
- [ ] Back button navigation works correctly
- [ ] Action buttons appear/hide based on device
- [ ] Custom cocktails save and load from LocalStorage
- [ ] Text readable on all backgrounds (contrast check)
- [ ] All buttons centered and properly styled

### Browser Testing Matrix
| Feature | Chrome | Firefox | Safari | Edge | Mobile Safari | Mobile Chrome |
|---------|--------|---------|--------|------|---------------|---------------|
| Search | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| D3 Graphs | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Codex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| LocalStorage | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Hover/Tap | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

### Edge Cases Handled
- Empty API results
- Malformed ingredient names
- Cocktails with >10 ingredients
- Very long cocktail names (text wrapping)
- Missing images from API
- Ingredients without flavor profiles
- Mobile landscape orientation
- Very small screens (< 375px)

---

## Dependencies

### External Libraries
```html
<!-- D3.js v7 (only external dependency) -->
<script src="https://d3js.org/d3.v7.min.js"></script>
```

### APIs
- **TheCocktailDB:** Free tier, no API key required
  - Documentation: https://www.thecocktaildb.com/api.php
  - Rate limits: None documented
  - Uptime: ~99% (community-maintained)

---

## Deployment

### Hosting
- **Platform:** GitHub Pages
- **URL:** https://dscherm.github.io/Scherm/docs/
- **Branch:** `gh-pages`
- **Build:** None required (static files)

### Deployment Process
1. Develop on feature branch (`claude/cocktail-suggestion-app-*`)
2. Test locally
3. Merge/copy to `gh-pages` branch
4. Push to remote
5. GitHub Pages auto-deploys within 2-3 minutes

### Environment Variables
None required (no build process, no secrets)

---

## Known Issues & Limitations

### Current Limitations
1. **API Dependency:** Entire app depends on TheCocktailDB availability
2. **Limited Cocktails:** Only ~600 cocktails in API database
3. **Incomplete Flavor Profiles:** Only ~100 ingredients have profiles
4. **No Offline Mode:** Requires internet connection
5. **No User Accounts:** Can't sync custom cocktails across devices
6. **Manual Codex Mapping:** Variations must be manually added to root cocktails

### Known Bugs
- ~~Filter text hard to read on white background~~ ✅ Fixed
- ~~Tab button text not centered~~ ✅ Fixed
- ~~Back button didn't clear container properly~~ ✅ Fixed
- ~~Action buttons only worked on mobile~~ ✅ Fixed

---

## Glossary

- **Jaccard Similarity:** Statistical measure of similarity between two sets (intersection/union)
- **Force-Directed Graph:** Node-link diagram where physics simulation determines layout
- **Node:** Visual representation of an entity (cocktail or ingredient)
- **Edge/Link:** Connection between two nodes
- **Hexagon:** Six-sided polygon used for root cocktail visualization
- **Flavor Profile:** Weighted set of flavor characteristics for an ingredient
- **Compatibility Score:** Calculated measure of how well two ingredients pair (0-10)
- **Root Cocktail:** Foundational template that spawns variations (e.g., Martini)
- **Template:** Basic structure of a cocktail family (e.g., Spirit + Vermouth)
- **Variation:** Cocktail derived from a root template with modifications
- **Level 0/1/2:** Hierarchy in node graph (center/primary/expanded)
- **Complementary Ingredients:** Flavors that pair well with a selected ingredient
- **Alternative Ingredients:** Substitutions with similar flavor profiles
- **Device Capability Detection:** Browser API to detect hover/touch capability
- **Enter-Update-Exit Pattern:** D3.js data binding pattern for smooth transitions
- **Normalization:** Converting ingredient variations to canonical names
- **Synthwave:** Retro-futuristic aesthetic inspired by 1980s design

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-18 | Scherm | Initial PRD creation |
| 1.5 | 2026-01-25 | Scherm | Added ingredient normalization |
| 2.0 | 2026-02-17 | Scherm | Complete PRD with all features documented |

---

**Approval Status:** ✅ Approved for Development
**Next Review:** 2026-03-01
**Contact:** GitHub @dscherm
