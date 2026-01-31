# Node Visualization Skill Guide

## Overview

This document explains the architecture and implementation of the interactive node-based cocktail visualization built with D3.js v7. The system uses force-directed graph layouts to create dynamic, explorable visualizations with three distinct levels of hierarchy.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [D3.js Force-Directed Graphs](#d3js-force-directed-graphs)
3. [Hierarchical Structure](#hierarchical-structure)
4. [Measurement Parsing & Proportional Sizing](#measurement-parsing--proportional-sizing)
5. [Interaction Patterns](#interaction-patterns)
6. [Device-Responsive Design](#device-responsive-design)
7. [Hexagon Generation](#hexagon-generation)
8. [Color Coding & Gradients](#color-coding--gradients)
9. [Dynamic Node Expansion](#dynamic-node-expansion)
10. [Best Practices & Patterns](#best-practices--patterns)

---

## Architecture Overview

The visualization system consists of three main graph types:

1. **Root Cocktails Graph** (`createRootCocktailsGraph`)
   - Shows 6 foundational cocktail templates (Old Fashioned, Martini, Daiquiri, Sidecar, Highball, Flip)
   - Fixed positions in circular layout
   - Hexagonal nodes for visual distinction

2. **Focused Cocktail Graph** (`createFocusedCocktailGraph`)
   - Displays a single root with its template ingredients and variations
   - Template ingredients at level 1, variations at level 2
   - Color-coded by ingredient category
   - Filterable by characteristics

3. **Individual Cocktail Graph** (`createCocktailGraph`)
   - Shows a specific cocktail with ingredients
   - Dynamically expandable to show complementary flavors and alternatives
   - Proportionally sized by ingredient measurements
   - Interactive with device-responsive controls

**Key Files:**
- `cocktail-graph.js` - Individual cocktail visualization
- `codex-graph.js` - Hierarchical Codex visualization
- `codex-app.js` - Initialization and tab handling

---

## D3.js Force-Directed Graphs

### Core Concept

Force-directed graphs use physics simulation to position nodes:
- **Forces push/pull nodes** into optimal positions
- **Links act as springs** connecting related nodes
- **Collisions prevent overlap** between nodes

### Force Simulation Setup

```javascript
const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links)
        .id(d => d.id)
        .distance(d => 120 + d.value * 20)) // Dynamic distance
    .force('charge', d3.forceManyBody().strength(-300)) // Repulsion
    .force('center', d3.forceCenter(width / 2, height / 2)) // Centering
    .force('collision', d3.forceCollide().radius(d => d.radius + 10)); // Prevent overlap
```

**Key Forces:**
- **link**: Attracts connected nodes to maintain relationships
- **charge**: Repels nodes from each other (negative = repulsion)
- **center**: Pulls nodes toward center to prevent drift
- **collision**: Prevents nodes from overlapping based on radius

### Tick Updates

The simulation runs continuously, updating node positions on each "tick":

```javascript
simulation.on('tick', () => {
    // Update link positions
    linkGroup.selectAll('line')
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

    // Update node positions
    nodeGroup.selectAll('g')
        .attr('transform', d => `translate(${d.x},${d.y})`);
});
```

---

## Hierarchical Structure

### Three-Level Node Hierarchy

**Level 0**: Central node (cocktail or root)
- Largest radius (70-80px)
- Primary gradient styling
- Usually non-interactive or limited interaction

**Level 1**: Primary ingredients/template components
- Medium radius (25-60px, proportional to measurement)
- Category-based color coding
- Interactive with expansion capabilities

**Level 2**: Complementary/alternative ingredients
- Smallest radius (20px)
- Secondary gradient styling
- Clickable for details

### Node Data Structure

```javascript
{
    id: 'unique-identifier',      // Unique ID for D3 data binding
    label: 'Display Name',         // Text shown on node
    type: 'ingredient',            // Node type for styling
    level: 1,                      // Hierarchy level (0, 1, or 2)
    radius: 40,                    // Size of the node
    hasProfile: true,              // Has flavor profile data
    profile: {...},                // Flavor profile object
    parentId: 'parent-node-id',    // For level 2 nodes
    parentType: 'alternatives',    // Type of relationship
    value: 2.5                     // Measurement value for sizing
}
```

### Link Data Structure

```javascript
{
    source: 'source-node-id',      // ID or node object
    target: 'target-node-id',      // ID or node object
    type: 'primary',               // Link type (primary, complementary, alternative)
    value: 2.5,                    // Strength/weight
    distance: 120                  // Preferred distance
}
```

---

## Measurement Parsing & Proportional Sizing

### Parsing Measurements

Cocktail recipes use various measurement formats. The `parseMeasurement()` function normalizes these:

```javascript
function parseMeasurement(measureString) {
    if (!measureString || measureString === 'To taste') return 1;

    const cleaned = measureString.toLowerCase()
        .replace(/\bof\b/g, '')
        .replace(/\bfresh\b/g, '')
        .trim();

    // Handle fractions: "1/2 oz" → 0.5
    const fractionMatch = cleaned.match(/(\d+)\s*\/\s*(\d+)/);
    if (fractionMatch) {
        return parseFloat(fractionMatch[1]) / parseFloat(fractionMatch[2]);
    }

    // Handle decimals: "1.5 oz" → 1.5
    const decimalMatch = cleaned.match(/(\d+\.?\d*)/);
    if (decimalMatch) {
        return parseFloat(decimalMatch[1]);
    }

    // Handle dashes/splashes: "dash" → 0.25
    if (cleaned.includes('dash') || cleaned.includes('splash')) return 0.25;

    return 1; // Default
}
```

**Supported Formats:**
- Fractions: `1/2 oz`, `3/4 oz`
- Decimals: `1.5 oz`, `2.0 oz`
- Whole numbers: `2 oz`, `3 cl`
- Special: `dash`, `splash`
- Fallback: `To taste` → 1

### Proportional Node Sizing

Normalize parsed values to radius range:

```javascript
function normalizeNodeSizes() {
    const maxValue = Math.max(...nodes.filter(n => n.level === 1).map(n => n.value || 1));
    const minRadius = 25;
    const maxRadius = 60;

    nodes.forEach(node => {
        if (node.type === 'cocktail') {
            node.radius = 70; // Fixed size for center
        } else if (node.level === 1) {
            // Scale linearly between min and max
            node.radius = minRadius + (node.value / maxValue) * (maxRadius - minRadius);
        } else if (node.level === 2) {
            node.radius = 20; // Fixed small size for complementary
        }
    });
}
```

**Visual Result**: Nodes with larger measurements (e.g., 2 oz vs 0.5 oz) appear proportionally larger.

---

## Interaction Patterns

### Multi-Modal Interaction System

The visualization supports three interaction modes:

1. **Hover** (Desktop): Shows tooltips, highlights nodes
2. **Click** (All devices): Selects nodes, triggers expansion
3. **Tap-to-Select** (Mobile): Shows action buttons at bottom

### Hover Interactions

```javascript
.on('mouseenter', function(event, d) {
    // Scale up node
    d3.select(this).select('circle')
        .transition()
        .duration(200)
        .attr('r', d.radius * 1.1)
        .attr('stroke-width', 4);

    // Show tooltip
    showTooltip(event, d, 'Tap to explore alternatives and flavors');
})
.on('mouseleave', function(event, d) {
    // Scale back down
    d3.select(this).select('circle')
        .transition()
        .duration(200)
        .attr('r', d.radius)
        .attr('stroke-width', 2);

    hideTooltip();
})
```

### Click/Tap Selection

```javascript
.on('click', function(event, d) {
    event.stopPropagation(); // Prevent bubbling

    if (d.level === 1 && d.hasProfile) {
        // Pulse animation
        d3.select(this).select('circle')
            .transition()
            .duration(200)
            .attr('r', d.radius * 1.2)
            .transition()
            .duration(200)
            .attr('r', d.radius);

        // Toggle selection
        if (selectedNode && selectedNode.id === d.id) {
            hideActionButtons();
        } else {
            showActionButtons(d);
        }
    }
})
```

### Drag Interactions

Enable node dragging to manually adjust positions:

```javascript
.call(d3.drag()
    .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x; // Fix position
        d.fy = d.y;
    })
    .on('drag', (event, d) => {
        d.fx = event.x; // Update fixed position
        d.fy = event.y;
    })
    .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null; // Release position
        d.fy = null;
    })
)
```

### Background Click to Deselect

```javascript
svg.on('click', function(event) {
    if (event.target.tagName === 'svg') {
        hideActionButtons();
    }
});
```

---

## Device-Responsive Design

### Capability Detection

Use media queries to detect device capabilities:

```javascript
const hasHoverCapability = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
```

**Detection Results:**
- **Desktop/Laptop**: `true` (has hover and precise pointer)
- **Tablet/Phone**: `false` (touch-only, no hover)

### Desktop Behavior (Hover-Capable)

```javascript
if (hasHoverCapability && d.level === 1 && d.hasProfile) {
    // Show action buttons on hover
    showActionButtons(d);
    showTooltip(event, d, 'Hover to explore - click for details');
}

// Hide on mouse leave with grace period
if (hasHoverCapability && (!selectedNode || selectedNode.id !== d.id)) {
    setTimeout(() => {
        if (!actionButtons || !actionButtons.matches(':hover')) {
            hideActionButtons();
        }
    }, 100); // 100ms grace period for clicking buttons
}
```

### Mobile Behavior (Touch-Only)

```javascript
if (d.level === 1 && d.hasProfile) {
    // Show tooltip on hover (still works on some touch devices)
    showTooltip(event, d, 'Tap to explore alternatives and flavors');
}

// No automatic hiding on mouse leave for mobile
// User must click background or close button
```

### Action Buttons (Bottom Sheet Pattern)

Fixed position buttons slide up from bottom on mobile:

```css
.node-action-buttons {
    position: fixed;
    bottom: -200px; /* Hidden by default */
    left: 50%;
    transform: translateX(-50%);
    transition: bottom 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.node-action-buttons.visible {
    bottom: 0; /* Slide up when visible */
}
```

```javascript
function showActionButtons(node) {
    selectedNode = node;

    // Highlight selected node
    d3.selectAll('.graph-node').classed('selected', false);
    d3.selectAll('.graph-node')
        .filter(d => d.id === node.id)
        .classed('selected', true);

    // Show buttons
    actionButtons.classList.add('visible');
}
```

**CSS for Selected Node:**

```css
.graph-node.selected circle {
    stroke: #FFD700 !important;
    stroke-width: 5px !important;
    filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)) brightness(1.2);
    animation: selectedPulse 2s infinite;
}

@keyframes selectedPulse {
    0%, 100% { filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)) brightness(1.2); }
    50% { filter: drop-shadow(0 0 30px rgba(255, 215, 0, 1.0)) brightness(1.4); }
}
```

---

## Hexagon Generation

### Mathematical Approach

Hexagons are generated using trigonometry with 6 points evenly distributed:

```javascript
function hexagonPath(radius) {
    const points = [];
    for (let i = 0; i < 6; i++) {
        // Calculate angle for each vertex (60° apart)
        const angle = (Math.PI / 3) * i - Math.PI / 2; // Start from top

        // Convert polar to cartesian coordinates
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        points.push(`${x},${y}`);
    }

    // Create closed path
    return `M${points.join('L')}Z`;
}
```

**Breakdown:**
- **`Math.PI / 3`**: 60° in radians (360° / 6 vertices)
- **`- Math.PI / 2`**: Offset to start from top (rotate -90°)
- **`Math.cos(angle)` / `Math.sin(angle)`**: Convert to X/Y coordinates
- **`M...L...Z`**: SVG path (Move to first point, Line to others, Close path)

### Usage

```javascript
nodeGroup.append('path')
    .attr('d', hexagonPath(60)) // 60px radius hexagon
    .attr('fill', 'url(#root-gradient)')
    .attr('stroke', '#fff')
    .attr('stroke-width', 4);
```

### Scaling on Hover

```javascript
.on('mouseenter', function(event, d) {
    d3.select(this).select('path')
        .transition()
        .duration(200)
        .attr('d', hexagonPath(d.radius * 1.1)); // Scale up 10%
})
.on('mouseleave', function(event, d) {
    d3.select(this).select('path')
        .transition()
        .duration(200)
        .attr('d', hexagonPath(d.radius)); // Scale back
})
```

**Why Hexagons?**
- Visually distinct from circular nodes
- Suggests "foundational" or "structural" elements
- Aesthetic appeal and geometric variety

---

## Color Coding & Gradients

### Category-Based Color System

Ingredients are color-coded by category:

```javascript
function getCategoryColor(category) {
    const colors = {
        spirit: '#FF6B35',      // Orange-red
        citrus: '#FFD700',      // Gold
        sweetener: '#00D9C0',   // Cyan
        carbonated: '#87CEEB',  // Sky blue
        liqueur: '#8B2FC9',     // Purple
        bitters: '#D4AF37',     // Dark gold
        herb: '#38ef7d',        // Green
        spice: '#E6B89C',       // Tan
        modifier: '#999999'     // Gray
    };
    return colors[category] || '#999';
}
```

### Radial Gradient Creation

Gradients add depth and visual polish:

```javascript
const defs = svg.append('defs');

// Create gradient for each category
categories.forEach(category => {
    const color = getCategoryColor(category);
    const gradient = defs.append('radialGradient')
        .attr('id', `category-${category}-gradient`);

    // Lighter center
    gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', d3.color(color).brighter(0.5));

    // Darker edge
    gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', color);
});
```

### Applying Gradients to Nodes

```javascript
nodeEnter.append('circle')
    .attr('r', d => d.radius)
    .attr('fill', d => {
        if (d.type === 'cocktail') return 'url(#cocktail-gradient)';
        if (d.type === 'complementary') return 'url(#complementary-gradient)';
        if (d.type === 'alternative') return 'url(#alternative-gradient)';
        if (d.isSpirit) return 'url(#spirit-gradient)';

        // Category-based gradient for ingredients
        return `url(#category-${d.category}-gradient)`;
    })
    .attr('stroke', d => getCategoryColor(d.category))
    .attr('stroke-width', 2);
```

### Link Color Coding

```javascript
.attr('stroke', d => {
    if (d.type === 'complementary') return '#11998e'; // Teal
    if (d.type === 'alternative') return '#667eea';   // Purple
    return '#ddd';                                    // Default gray
})
```

**Visual Hierarchy:**
- **Primary links**: Gray, thicker
- **Complementary links**: Teal, medium
- **Alternative links**: Purple, medium

---

## Dynamic Node Expansion

### Expansion State Management

Track which nodes are expanded:

```javascript
const expandedNodes = new Set(); // Stores IDs of expanded nodes

function expandComplementaryFlavors(node) {
    // Check if already expanded
    if (expandedNodes.has(node.id)) {
        collapseComplementaryFlavors(node);
        return;
    }

    expandedNodes.add(node.id); // Mark as expanded

    // ... create new nodes and links ...
}
```

### Creating Dynamic Nodes

```javascript
// Get recommendations for this ingredient
const recommendations = getIngredientRecommendations([node.label]);
const complementaryIngredients = recommendations.slice(0, 5); // Top 5

// Create new nodes
const newNodes = complementaryIngredients.map(rec => {
    const profile = FlavorProfiles[rec.ingredient];
    return {
        id: `complementary-${nodeIdCounter++}`, // Unique ID
        label: rec.ingredient,
        type: 'complementary',
        level: 2,
        parentId: node.id,              // Track parent
        hasProfile: !!profile,
        profile: profile,
        score: rec.score,
        radius: 20
    };
});

// Create new links
const newLinks = newNodes.map(n => ({
    source: node.id,
    target: n.id,
    type: 'complementary'
}));
```

### Updating the Visualization

```javascript
// Add to existing arrays
nodes = [...nodes, ...newNodes];
links = [...links, ...newLinks];

// Update expand indicator
d3.selectAll('.graph-node')
    .filter(d => d.id === node.id)
    .select('.expand-indicator')
    .text('⊖'); // Change from ⊕ to ⊖

// Re-run the update function
update();
```

### The Update Pattern

D3's enter-update-exit pattern handles dynamic data changes:

```javascript
function update() {
    // Update nodes
    const node = nodeGroup
        .selectAll('g')
        .data(nodes, d => d.id) // Key function for object constancy
        .join(
            // ENTER: New nodes
            enter => {
                const nodeEnter = enter.append('g')
                    .attr('class', 'graph-node')
                    .attr('opacity', 0);

                nodeEnter.append('circle')
                    .attr('r', 0)
                    .transition()
                    .duration(500)
                    .attr('r', d => d.radius);

                nodeEnter.transition()
                    .duration(500)
                    .attr('opacity', 1);

                return nodeEnter;
            },
            // UPDATE: Existing nodes
            update => update,
            // EXIT: Removed nodes
            exit => exit.transition()
                .duration(300)
                .attr('opacity', 0)
                .remove()
        );

    // Restart simulation
    simulation.nodes(nodes);
    simulation.force('link').links(links);
    simulation.alpha(0.3).restart();
}
```

**Key Concepts:**
- **Key function** (`d => d.id`): Maintains identity across updates
- **Enter**: Handles new nodes with fade-in animation
- **Update**: Keeps existing nodes (usually no changes needed)
- **Exit**: Removes old nodes with fade-out animation
- **Alpha restart**: Re-energizes simulation to settle into new layout

### Collapsing Nodes

```javascript
function collapseComplementaryFlavors(node) {
    expandedNodes.delete(node.id);

    // Remove nodes with matching parent
    nodes = nodes.filter(n => n.parentId !== node.id);

    // Remove links originating from this node
    links = links.filter(l => {
        const sourceId = l.source.id || l.source;
        return sourceId !== node.id || l.type !== 'complementary';
    });

    // Update indicator
    d3.selectAll('.graph-node')
        .filter(d => d.id === node.id)
        .select('.expand-indicator')
        .text('⊕');

    update();
}
```

---

## Best Practices & Patterns

### 1. Use Unique IDs for All Nodes

Always generate unique IDs to prevent D3 data binding conflicts:

```javascript
let nodeIdCounter = 0;

const newNode = {
    id: `ingredient-${nodeIdCounter++}`,
    // ...
};
```

### 2. Separate Data from Visualization

Keep data structures separate from D3 selections:

```javascript
// Data arrays
let nodes = [...];
let links = [...];

// Visualization function
function update() {
    const nodeSelection = nodeGroup.selectAll('g').data(nodes, d => d.id);
    // ...
}
```

### 3. Use Transitions for Smooth Changes

Always animate state changes:

```javascript
// Good
d3.select(this).select('circle')
    .transition()
    .duration(200)
    .attr('r', newRadius);

// Bad (jarring)
d3.select(this).select('circle')
    .attr('r', newRadius);
```

### 4. Prevent Event Bubbling

Stop click events from propagating to parent elements:

```javascript
.on('click', function(event, d) {
    event.stopPropagation(); // Important!
    // ...
})
```

### 5. Clean Up Container Before Redraw

Always clear existing content:

```javascript
function createGraph(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear first

    // Then create new visualization
}
```

### 6. Use Grace Periods for Hover Interactions

Allow time for users to move mouse to action buttons:

```javascript
setTimeout(() => {
    if (!actionButtons || !actionButtons.matches(':hover')) {
        hideActionButtons();
    }
}, 100); // 100ms grace period
```

### 7. Normalize Input Data

Always normalize measurements and ingredient names:

```javascript
const measurement = parseMeasurement(ing.measure);
const profile = getFlavorProfile(ing.name); // Uses normalization
```

### 8. Use Object Constancy

Provide key functions to maintain node identity:

```javascript
.data(nodes, d => d.id) // Key function
```

### 9. Fixed Positions for Static Layouts

Use `fx` and `fy` to fix node positions:

```javascript
const centerNode = {
    x: width / 2,
    y: height / 2,
    fx: width / 2, // Fixed X
    fy: height / 2  // Fixed Y
};
```

### 10. Accessibility Considerations

Add text shadows for readability on any background:

```javascript
.style('text-shadow', '1px 1px 3px rgba(0,0,0,0.9), -1px -1px 3px rgba(0,0,0,0.9), 1px -1px 3px rgba(0,0,0,0.9), -1px 1px 3px rgba(0,0,0,0.9)');
```

---

## Implementation Checklist

When building a similar node visualization:

- [ ] Define clear node hierarchy (levels 0, 1, 2+)
- [ ] Create data structures with unique IDs
- [ ] Set up SVG and viewBox for responsiveness
- [ ] Define gradients and color scheme
- [ ] Implement force simulation with appropriate forces
- [ ] Create enter-update-exit pattern in `update()` function
- [ ] Add interaction handlers (hover, click, drag)
- [ ] Implement device detection for responsive behavior
- [ ] Create expansion/collapse functionality
- [ ] Add transitions for all state changes
- [ ] Test on both desktop and mobile devices
- [ ] Ensure text readability with shadows/backgrounds
- [ ] Prevent event bubbling where needed
- [ ] Add tooltips for additional context
- [ ] Implement proper cleanup on container reuse

---

## Key Takeaways

1. **Force-directed graphs** provide natural, organic layouts for relational data
2. **Hierarchical structure** (levels 0-1-2) creates visual clarity
3. **Device-responsive design** ensures usability across all platforms
4. **Dynamic expansion** allows progressive disclosure of complexity
5. **Color coding and gradients** provide visual categorization and polish
6. **Smooth transitions** create professional, polished interactions
7. **Touch and hover patterns** require different interaction models
8. **Data normalization** is critical for consistent behavior
9. **D3's enter-update-exit pattern** handles dynamic data elegantly
10. **Object constancy** (via key functions) maintains smooth animations

---

## Resources

- **D3.js Documentation**: https://d3js.org/
- **Force Simulation**: https://github.com/d3/d3-force
- **SVG Paths**: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
- **Media Queries API**: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia

---

*This skill guide documents the node visualization implementation for the Cocktail Mixologist app. The patterns and techniques described here are reusable for any D3.js force-directed graph visualization.*
