# Advanced Cocktail Mixologist - Development Plan

This file tracks development tasks for the Ralph Wiggum autonomous development loop.
Each task includes steps, verification criteria, and a `passes` boolean.

---

## Task Format
```json
{
  "category": "feature|bugfix|optimization|documentation",
  "description": "Brief task description",
  "steps": [
    "Step 1",
    "Step 2"
  ],
  "verification": "How to verify completion",
  "passes": false
}
```

---

## Tasks

### Phase 1: Core Functionality ✅

```json
{
  "category": "feature",
  "description": "Implement cocktail search and discovery",
  "steps": [
    "Create search input with debounce (300ms)",
    "Add base liquor filter buttons",
    "Integrate TheCocktailDB API endpoints",
    "Display cocktail results in grid",
    "Add random cocktail button"
  ],
  "verification": "Search for 'Margarita', filter by 'Rum', click random - all should return valid results",
  "passes": true
}
```

```json
{
  "category": "feature",
  "description": "Build flavor pairing engine with Jaccard similarity",
  "steps": [
    "Create FlavorProfiles object with 100+ ingredients",
    "Implement Jaccard similarity algorithm",
    "Build compatibility score calculation",
    "Add getIngredientRecommendations function",
    "Create ingredient normalization system with 60+ aliases"
  ],
  "verification": "Call getIngredientRecommendations(['Lime juice']) - should return rum, tequila, mint with scores",
  "passes": true
}
```

```json
{
  "category": "feature",
  "description": "Create interactive D3.js node visualizations",
  "steps": [
    "Set up D3.js force simulation with 4 forces",
    "Implement measurement parsing for proportional sizing",
    "Create three-level node hierarchy (cocktail → ingredients → expanded)",
    "Add dynamic node expansion for complementary flavors",
    "Add dynamic node expansion for alternative ingredients",
    "Implement enter-update-exit pattern for smooth animations"
  ],
  "verification": "View any cocktail - nodes should be sized by measurement, click ingredient to expand",
  "passes": true
}
```

```json
{
  "category": "feature",
  "description": "Implement Cocktail Codex hierarchical taxonomy",
  "steps": [
    "Define 6 root cocktails with templates and characteristics",
    "Create hexagon SVG path generator",
    "Build root cocktails circular layout view",
    "Implement focused root view with variations",
    "Add filter chips for characteristics",
    "Connect variation clicks to full cocktail details"
  ],
  "verification": "Navigate to Codex tab, click Martini, apply 'stirred' filter, click Vesper variation",
  "passes": true
}
```

```json
{
  "category": "feature",
  "description": "Build device-responsive interaction system",
  "steps": [
    "Add device capability detection with matchMedia",
    "Implement hover-based action buttons for desktop",
    "Create tap-to-select with bottom sheet for mobile",
    "Add selected node highlighting with pulse animation",
    "Implement 100ms grace period for button hovering"
  ],
  "verification": "Test on desktop (hover) and mobile (tap) - both should show action buttons correctly",
  "passes": true
}
```

### Phase 2: Polish & Refinement ✅

```json
{
  "category": "bugfix",
  "description": "Fix text readability on white backgrounds",
  "steps": [
    "Add --primary-color, --secondary-color, --accent-color CSS variables",
    "Change filter heading color from light to dark (#2c3e50)",
    "Add font-weight: bold to filter heading",
    "Test contrast on all backgrounds"
  ],
  "verification": "Check filter variations heading on Codex tab - text should be clearly readable",
  "passes": true
}
```

```json
{
  "category": "bugfix",
  "description": "Center text in menu tab buttons",
  "steps": [
    "Add text-align: center to .tab-btn CSS class",
    "Verify button text alignment on all tabs"
  ],
  "verification": "All tab buttons (Search, Codex, Create) should have centered text",
  "passes": true
}
```

```json
{
  "category": "bugfix",
  "description": "Fix back button navigation in Codex view",
  "steps": [
    "Clear container innerHTML before creating new graph",
    "Reset currentGraphState to 'roots'",
    "Clear activeFilters set",
    "Hide filter chips display"
  ],
  "verification": "Click root cocktail, then back button - should return to 6 root hexagons cleanly",
  "passes": true
}
```

```json
{
  "category": "bugfix",
  "description": "Fix action buttons not working on desktop",
  "steps": [
    "Add device detection: window.matchMedia('(hover: hover) and (pointer: fine)')",
    "Implement mouseenter to show buttons on desktop",
    "Add mouseleave with 100ms delay to hide buttons",
    "Keep buttons visible while hovering over them"
  ],
  "verification": "Hover over ingredient node on desktop - buttons should appear and remain while hovering",
  "passes": true
}
```

### Phase 3: Documentation ✅

```json
{
  "category": "documentation",
  "description": "Create NODE_VISUALIZATION_SKILL.md guide",
  "steps": [
    "Document D3.js force-directed graph fundamentals",
    "Explain hierarchical node structure (3 levels)",
    "Detail measurement parsing and proportional sizing",
    "Document device-responsive interaction patterns",
    "Explain hexagon generation with trigonometry",
    "Cover color coding and gradient system",
    "Document dynamic node expansion mechanism",
    "Provide best practices and implementation checklist"
  ],
  "verification": "Read NODE_VISUALIZATION_SKILL.md - should be comprehensive guide (400+ lines)",
  "passes": true
}
```

```json
{
  "category": "documentation",
  "description": "Create Claude.md project hub",
  "steps": [
    "Document all projects in repository (4 total)",
    "Add skills & techniques section",
    "Link to NODE_VISUALIZATION_SKILL.md",
    "Include reusable code patterns",
    "Add project portfolio summary table",
    "Create future skills checklist"
  ],
  "verification": "Claude.md should index all projects with status indicators and tech stacks",
  "passes": true
}
```

```json
{
  "category": "documentation",
  "description": "Create comprehensive PRD for project",
  "steps": [
    "Write executive summary and problem statement",
    "Define user personas (3 types)",
    "Document all core features with acceptance criteria",
    "Detail technical architecture and file structure",
    "Include design specifications (colors, typography, spacing)",
    "Add performance requirements and optimization strategies",
    "Create information architecture diagram",
    "Document user flows with step-by-step interactions",
    "Add future roadmap and testing strategy"
  ],
  "verification": "PRD.md should be complete product requirements document (1000+ lines)",
  "passes": true
}
```

### Phase 4: Future Enhancements 🔲

```json
{
  "category": "feature",
  "description": "Add keyboard navigation for accessibility",
  "steps": [
    "Implement arrow key navigation between nodes",
    "Add tab key focus management",
    "Create keyboard shortcuts for common actions (Esc to close, Enter to select)",
    "Add focus indicators for all interactive elements",
    "Test with screen reader"
  ],
  "verification": "Navigate entire app using only keyboard - all features should be accessible",
  "passes": true
}
```

```json
{
  "category": "feature",
  "description": "Implement ARIA labels and semantic HTML",
  "steps": [
    "Add aria-label to all buttons and inputs",
    "Use semantic HTML (nav, main, article, section)",
    "Add role attributes where needed",
    "Implement aria-live regions for dynamic content",
    "Add aria-expanded for collapsible sections"
  ],
  "verification": "Run axe DevTools - should have no critical accessibility violations",
  "passes": true
}
```

```json
{
  "category": "feature",
  "description": "Add cocktail comparison view (side-by-side)",
  "steps": [
    "Create comparison mode toggle button",
    "Allow selecting 2-4 cocktails for comparison",
    "Display ingredients side-by-side in table format",
    "Highlight common ingredients",
    "Show flavor profile differences",
    "Add export comparison as image/PDF"
  ],
  "verification": "Select 2 cocktails, enable comparison - should show clear side-by-side view",
  "passes": true
}
```

```json
{
  "category": "feature",
  "description": "Create ingredient inventory tracker",
  "steps": [
    "Build ingredient inventory UI (checklist)",
    "Store inventory in LocalStorage",
    "Implement 'What can I make?' filter",
    "Show partial matches (missing 1-2 ingredients)",
    "Add shopping list for missing ingredients",
    "Allow exporting shopping list"
  ],
  "verification": "Check 5 ingredients, click 'What can I make?' - should show makeable cocktails",
  "passes": false
}
```

```json
{
  "category": "optimization",
  "description": "Implement progressive Web App (PWA) features",
  "steps": [
    "Create manifest.json with app metadata",
    "Add service worker for offline caching",
    "Cache API responses for offline access",
    "Add install prompt for mobile devices",
    "Test offline functionality"
  ],
  "verification": "Go offline, reload app - should still work with cached data",
  "passes": false
}
```

```json
{
  "category": "feature",
  "description": "Add seasonal cocktail recommendations",
  "steps": [
    "Tag cocktails by season (summer, winter, spring, fall)",
    "Detect current date/season",
    "Show seasonal recommendations on homepage",
    "Add seasonal filter toggle",
    "Explain why cocktail fits season (flavor profile, temperature, etc.)"
  ],
  "verification": "Check recommendations in summer - should show refreshing, citrus-forward cocktails",
  "passes": false
}
```

```json
{
  "category": "optimization",
  "description": "Reduce initial load time to <1.5 seconds",
  "steps": [
    "Minify CSS and JavaScript files",
    "Lazy load D3.js library",
    "Defer non-critical CSS",
    "Optimize SVG icons",
    "Add resource hints (preconnect, dns-prefetch)",
    "Measure with Lighthouse"
  ],
  "verification": "Run Lighthouse - Performance score should be 90+",
  "passes": false
}
```

---

## Progress Summary

**Completed:** 10/17 tasks (58.8%)
**In Progress:** 0/17 tasks
**Pending:** 7/17 tasks (41.2%)

**Phase 1 (Core):** ✅ 5/5 complete
**Phase 2 (Polish):** ✅ 4/4 complete
**Phase 3 (Documentation):** ✅ 3/3 complete
**Phase 4 (Future):** 🔲 0/7 complete
