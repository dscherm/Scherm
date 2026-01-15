// =============================================================================
// COCKTAIL CODEX HIERARCHICAL GRAPH VISUALIZATION
// Multi-level exploration: Root → Ingredients → Variations
// =============================================================================

let currentGraphState = 'roots'; // 'roots', 'focused', 'expanded'
let focusedRoot = null;
let graphSimulation = null;
let activeFilters = new Set(); // For filtering variations

/**
 * Generate hexagon path for SVG
 * @param {number} radius - Radius of the hexagon
 * @returns {string} SVG path string
 */
function hexagonPath(radius) {
    const points = [];
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 2; // Start from top
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        points.push(`${x},${y}`);
    }
    return `M${points.join('L')}Z`;
}

/**
 * Create the initial root cocktails view (6 foundational cocktails)
 */
function createRootCocktailsGraph(containerId, onRootClick) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const width = container.clientWidth || 800;
    const height = 600;

    // Create SVG
    const svg = d3.select(`#${containerId}`)
        .append('svg')
        .attr('width', '100%')
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height]);

    // Add gradients for each root
    const defs = svg.append('defs');
    Object.values(RootCocktails).forEach(root => {
        const gradient = defs.append('radialGradient')
            .attr('id', `root-${root.id}-gradient`);
        gradient.append('stop')
            .attr('offset', '0%')
            .attr('stop-color', d3.color(root.color).brighter(0.5));
        gradient.append('stop')
            .attr('offset', '100%')
            .attr('stop-color', root.color);
    });

    // Create root nodes
    const rootNodes = Object.values(RootCocktails).map((root, i) => {
        const angle = (i / 6) * 2 * Math.PI - Math.PI / 2;
        const radius = 180;
        return {
            id: root.id,
            label: root.name,
            description: root.description,
            data: root,
            x: width / 2 + radius * Math.cos(angle),
            y: height / 2 + radius * Math.sin(angle),
            fx: width / 2 + radius * Math.cos(angle),
            fy: height / 2 + radius * Math.sin(angle),
            radius: 60,
            type: 'root'
        };
    });

    // Create center title node
    const centerNode = {
        id: 'center',
        label: 'Cocktail Codex',
        sublabel: '6 Foundational Templates',
        x: width / 2,
        y: height / 2,
        fx: width / 2,
        fy: height / 2,
        radius: 80,
        type: 'center'
    };

    const nodes = [centerNode, ...rootNodes];

    // Create links from center to each root
    const links = rootNodes.map(node => ({
        source: 'center',
        target: node.id
    }));

    // Create force simulation
    graphSimulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(200))
        .force('charge', d3.forceManyBody().strength(-100))
        .force('center', d3.forceCenter(width / 2, height / 2));

    // Create links
    const link = svg.append('g')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke', '#ddd')
        .attr('stroke-width', 2)
        .attr('stroke-opacity', 0.3);

    // Create nodes
    const node = svg.append('g')
        .selectAll('g')
        .data(nodes)
        .join('g')
        .attr('class', d => `codex-node ${d.type}-node`)
        .style('cursor', d => d.type === 'root' ? 'pointer' : 'default');

    // Add shapes (hexagons for roots, circle for center)
    node.each(function(d) {
        const nodeGroup = d3.select(this);

        if (d.type === 'root') {
            // Hexagon for root nodes
            nodeGroup.append('path')
                .attr('d', hexagonPath(d.radius))
                .attr('fill', `url(#root-${d.id}-gradient)`)
                .attr('stroke', '#fff')
                .attr('stroke-width', 4)
                .attr('filter', 'drop-shadow(0 5px 15px rgba(0,0,0,0.3))');
        } else {
            // Circle for center node
            nodeGroup.append('circle')
                .attr('r', d.radius)
                .attr('fill', 'url(#cocktail-gradient)')
                .attr('stroke', '#C44569')
                .attr('stroke-width', 3)
                .attr('filter', 'drop-shadow(0 5px 15px rgba(0,0,0,0.3))');
        }
    });

    // Add labels
    node.append('text')
        .text(d => d.label)
        .attr('text-anchor', 'middle')
        .attr('dy', d => d.sublabel ? '-0.3em' : '0.35em')
        .attr('font-size', d => d.type === 'center' ? '18px' : '14px')
        .attr('font-weight', 'bold')
        .attr('fill', 'white')
        .attr('pointer-events', 'none')
        .style('text-shadow', '2px 2px 4px rgba(0,0,0,0.8)');

    // Add sublabels
    node.filter(d => d.sublabel)
        .append('text')
        .text(d => d.sublabel)
        .attr('text-anchor', 'middle')
        .attr('dy', '1em')
        .attr('font-size', '12px')
        .attr('fill', 'rgba(255,255,255,0.9)')
        .attr('pointer-events', 'none')
        .style('text-shadow', '1px 1px 3px rgba(0,0,0,0.8)');

    // Add descriptions with background for better readability
    node.filter(d => d.description)
        .each(function(d) {
            const nodeGroup = d3.select(this);

            // Add semi-transparent background rectangle
            const text = nodeGroup.append('text')
                .text(d.description)
                .attr('text-anchor', 'middle')
                .attr('dy', d.radius + 20)
                .attr('font-size', '11px')
                .attr('fill', 'white')
                .attr('pointer-events', 'none')
                .style('text-shadow', '1px 1px 3px rgba(0,0,0,0.9), -1px -1px 3px rgba(0,0,0,0.9), 1px -1px 3px rgba(0,0,0,0.9), -1px 1px 3px rgba(0,0,0,0.9)');
        });

    // Add interactions
    node.filter(d => d.type === 'root')
        .on('mouseenter', function(event, d) {
            d3.select(this).select('path')
                .transition()
                .duration(200)
                .attr('d', hexagonPath(d.radius * 1.1))
                .attr('stroke-width', 6);
        })
        .on('mouseleave', function(event, d) {
            d3.select(this).select('path')
                .transition()
                .duration(200)
                .attr('d', hexagonPath(d.radius))
                .attr('stroke-width', 4);
        })
        .on('click', function(event, d) {
            if (onRootClick) {
                // Pulse animation
                d3.select(this).select('path')
                    .transition()
                    .duration(300)
                    .attr('d', hexagonPath(d.radius * 1.3))
                    .transition()
                    .duration(300)
                    .attr('d', hexagonPath(d.radius));

                onRootClick(d.data);
            }
        });

    // Update simulation
    graphSimulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    return { svg, simulation: graphSimulation, nodes, links };
}

/**
 * Create focused view on a single root cocktail with ingredients and variations
 */
async function createFocusedCocktailGraph(containerId, rootCocktail, onIngredientClick, onVariationClick) {
    const container = document.getElementById(containerId);
    container.innerHTML = '<div class="graph-loading"><div class="spinner"></div><p>Loading cocktail variations...</p></div>';

    const width = container.clientWidth || 800;
    const height = 600;

    // Get variations from API
    const variations = await getVariationsForRoot(rootCocktail);

    container.innerHTML = '';

    // Create SVG
    const svg = d3.select(`#${containerId}`)
        .append('svg')
        .attr('width', '100%')
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height]);

    // Add gradients for categories
    const defs = svg.append('defs');

    // Root gradient
    const rootGradient = defs.append('radialGradient')
        .attr('id', 'focused-root-gradient');
    rootGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', d3.color(rootCocktail.color).brighter(0.5));
    rootGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', rootCocktail.color);

    // Category gradients
    const categories = ['spirit', 'citrus', 'sweetener', 'carbonated', 'liqueur', 'bitters', 'herb', 'spice', 'modifier'];
    categories.forEach(category => {
        const color = getCategoryColor(category);
        const gradient = defs.append('radialGradient')
            .attr('id', getCategoryGradientId(category));
        gradient.append('stop')
            .attr('offset', '0%')
            .attr('stop-color', d3.color(color).brighter(0.5));
        gradient.append('stop')
            .attr('offset', '100%')
            .attr('stop-color', color);
    });

    // Variation gradient (green)
    const variationGradient = defs.append('radialGradient')
        .attr('id', 'variation-gradient');
    variationGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#11998e');
    variationGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#38ef7d');

    // Create center root node
    const centerNode = {
        id: 'root-center',
        label: rootCocktail.name,
        description: rootCocktail.description,
        type: 'focused-root',
        data: rootCocktail,
        radius: 70,
        level: 0
    };

    // Create template ingredient nodes
    const ingredientNodes = rootCocktail.template.map((ingredient, i) => ({
        id: `template-${i}`,
        label: ingredient,
        type: 'template-ingredient',
        category: getIngredientCategory(ingredient),
        radius: 40,
        level: 1
    }));

    // Create variation nodes
    const variationNodes = variations.slice(0, 12).map((cocktail, i) => {
        const distance = calculateTemplateDistance(cocktail, rootCocktail);
        return {
            id: `variation-${cocktail.idDrink}`,
            label: cocktail.strDrink,
            type: 'variation',
            data: cocktail,
            distance: distance,
            radius: 30,
            level: 2
        };
    });

    const nodes = [centerNode, ...ingredientNodes, ...variationNodes];

    // Create links
    const links = [
        // Root to templates
        ...ingredientNodes.map(node => ({
            source: 'root-center',
            target: node.id,
            type: 'template',
            distance: 120
        })),
        // Root to variations (distance based on similarity)
        ...variationNodes.map(node => ({
            source: 'root-center',
            target: node.id,
            type: 'variation',
            distance: 200 + (node.distance * 150) // 200-350px
        }))
    ];

    // Create force simulation
    graphSimulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(d => d.distance))
        .force('charge', d3.forceManyBody().strength(-200))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(d => d.radius + 10));

    // Create links
    const link = svg.append('g')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke', d => d.type === 'template' ? '#fff' : getCategoryColor('variation'))
        .attr('stroke-width', d => d.type === 'template' ? 3 : 1.5)
        .attr('stroke-opacity', d => d.type === 'template' ? 0.6 : 0.4)
        .attr('stroke-dasharray', d => d.type === 'variation' ? '4,4' : 'none');

    // Create nodes
    const node = svg.append('g')
        .selectAll('g')
        .data(nodes)
        .join('g')
        .attr('class', d => `codex-node ${d.type}-node`)
        .style('cursor', d => d.type !== 'focused-root' ? 'pointer' : 'default')
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));

    // Add shapes (hexagon for focused root, circles for others)
    node.each(function(d) {
        const nodeGroup = d3.select(this);

        if (d.type === 'focused-root') {
            // Hexagon for focused root
            nodeGroup.append('path')
                .attr('d', hexagonPath(d.radius))
                .attr('fill', 'url(#focused-root-gradient)')
                .attr('stroke', '#fff')
                .attr('stroke-width', 4)
                .attr('filter', 'drop-shadow(0 5px 20px rgba(0,0,0,0.4))');
        } else {
            // Circles for ingredients and variations
            nodeGroup.append('circle')
                .attr('r', d.radius)
                .attr('fill', d => {
                    if (d.type === 'template-ingredient') return `url(#${getCategoryGradientId(d.category)})`;
                    return 'url(#variation-gradient)';
                })
                .attr('stroke', d => {
                    if (d.type === 'template-ingredient') return getCategoryColor(d.category);
                    return '#11998e';
                })
                .attr('stroke-width', 2)
                .attr('filter', 'drop-shadow(0 3px 10px rgba(0,0,0,0.3))');
        }
    });

    // Add labels
    node.append('text')
        .text(d => d.label)
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('font-size', d => {
            if (d.type === 'focused-root') return '16px';
            if (d.type === 'template-ingredient') return '12px';
            return '10px';
        })
        .attr('font-weight', d => d.type === 'focused-root' ? 'bold' : 'normal')
        .attr('fill', 'white')
        .attr('pointer-events', 'none')
        .style('text-shadow', '1px 1px 3px rgba(0,0,0,0.8)');

    // Add description for root with better contrast
    node.filter(d => d.description)
        .append('text')
        .text(d => d.description)
        .attr('text-anchor', 'middle')
        .attr('dy', d => d.radius + 20)
        .attr('font-size', '12px')
        .attr('font-weight', 'bold')
        .attr('fill', 'white')
        .attr('pointer-events', 'none')
        .style('text-shadow', '1px 1px 3px rgba(0,0,0,0.9), -1px -1px 3px rgba(0,0,0,0.9), 1px -1px 3px rgba(0,0,0,0.9), -1px 1px 3px rgba(0,0,0,0.9)');

    // Add back button
    const backButton = svg.append('g')
        .attr('class', 'back-button')
        .attr('transform', 'translate(30, 30)')
        .style('cursor', 'pointer');

    backButton.append('circle')
        .attr('r', 25)
        .attr('fill', 'rgba(255, 255, 255, 0.2)')
        .attr('stroke', '#fff')
        .attr('stroke-width', 2);

    backButton.append('text')
        .text('←')
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('font-size', '20px')
        .attr('fill', 'white')
        .attr('pointer-events', 'none');

    backButton.on('click', () => {
        // Hide filters and return to root view
        const filtersDiv = document.getElementById('codex-filters');
        if (filtersDiv) filtersDiv.style.display = 'none';
        activeFilters.clear();

        currentGraphState = 'roots';
        focusedRoot = null;

        // Re-initialize the root graph without recursive callback
        const codexContainer = document.getElementById(containerId);
        if (codexContainer) {
            codexContainer.innerHTML = '';
            createRootCocktailsGraph(containerId, (root) => {
                focusedRoot = root;
                currentGraphState = 'focused';
                createFocusedCocktailGraph(containerId, root, onIngredientClick, onVariationClick);
            });
        }
    });

    // Show filters UI
    const filtersDiv = document.getElementById('codex-filters');
    if (filtersDiv) {
        filtersDiv.style.display = 'block';
        setupFilterInteractions(rootCocktail);
    }

    // Setup filter interactions
    function setupFilterInteractions(root) {
        const filterChips = document.querySelectorAll('.filter-chip');

        filterChips.forEach(chip => {
            chip.onclick = function() {
                const filter = this.getAttribute('data-filter');

                if (this.classList.contains('reset-filters')) {
                    // Clear all filters
                    activeFilters.clear();
                    filterChips.forEach(c => c.classList.remove('active'));
                    applyFilters();
                } else {
                    // Toggle filter
                    if (activeFilters.has(filter)) {
                        activeFilters.delete(filter);
                        this.classList.remove('active');
                    } else {
                        activeFilters.add(filter);
                        this.classList.add('active');
                    }
                    applyFilters();
                }
            };
        });

        function applyFilters() {
            if (activeFilters.size === 0) {
                // Show all variation nodes
                node.filter(d => d.type === 'variation')
                    .style('opacity', 1)
                    .style('pointer-events', 'all');

                link.filter(d => d.type === 'variation')
                    .style('opacity', 0.4);
            } else {
                // Filter variations based on characteristics
                node.filter(d => d.type === 'variation')
                    .style('opacity', d => {
                        // Check if cocktail matches any active filter
                        const cocktailCharacteristics = getCocktailCharacteristics(d.data, root);
                        const matches = [...activeFilters].some(filter =>
                            cocktailCharacteristics.includes(filter)
                        );
                        return matches ? 1 : 0.1;
                    })
                    .style('pointer-events', d => {
                        const cocktailCharacteristics = getCocktailCharacteristics(d.data, root);
                        const matches = [...activeFilters].some(filter =>
                            cocktailCharacteristics.includes(filter)
                        );
                        return matches ? 'all' : 'none';
                    });

                link.filter(d => d.type === 'variation')
                    .style('opacity', d => {
                        const targetNode = nodes.find(n => n.id === d.target.id || n.id === d.target);
                        if (!targetNode || targetNode.type !== 'variation') return 0.4;

                        const cocktailCharacteristics = getCocktailCharacteristics(targetNode.data, root);
                        const matches = [...activeFilters].some(filter =>
                            cocktailCharacteristics.includes(filter)
                        );
                        return matches ? 0.4 : 0.05;
                    });
            }
        }

        function getCocktailCharacteristics(cocktail, root) {
            // Return characteristics based on ingredients and root family
            const characteristics = [...root.characteristics]; // Start with root characteristics

            // Add characteristics based on ingredients
            if (cocktail.strIngredient1) {
                const ingredients = [];
                for (let i = 1; i <= 15; i++) {
                    const ingredient = cocktail[`strIngredient${i}`];
                    if (ingredient) ingredients.push(ingredient.toLowerCase());
                }

                // Check for specific characteristics
                if (ingredients.some(ing => ing.includes('lemon') || ing.includes('lime'))) {
                    characteristics.push('citrus', 'sour');
                }
                if (ingredients.some(ing => ing.includes('cream') || ing.includes('milk'))) {
                    characteristics.push('creamy');
                }
                if (ingredients.some(ing => ing.includes('sugar') || ing.includes('syrup'))) {
                    characteristics.push('sweet');
                }
                if (ingredients.some(ing => ing.includes('soda') || ing.includes('tonic'))) {
                    characteristics.push('refreshing', 'carbonated');
                }
                if (ingredients.some(ing => ing.includes('bitters'))) {
                    characteristics.push('bitter');
                }
            }

            return characteristics;
        }
    }

    // Add interactions
    node.filter(d => d.type === 'template-ingredient')
        .on('mouseenter', function(event, d) {
            d3.select(this).select('circle')
                .transition()
                .duration(200)
                .attr('r', d.radius * 1.2);

            showCodexTooltip(event, d, 'Template ingredient - click to explore');
        })
        .on('mouseleave', function(event, d) {
            d3.select(this).select('circle')
                .transition()
                .duration(200)
                .attr('r', d.radius);

            hideCodexTooltip();
        })
        .on('click', function(event, d) {
            if (onIngredientClick) {
                onIngredientClick(d.label);
            }
        });

    node.filter(d => d.type === 'variation')
        .on('mouseenter', function(event, d) {
            d3.select(this).select('circle')
                .transition()
                .duration(200)
                .attr('r', d.radius * 1.2);

            const similarity = Math.round((1 - d.distance) * 100);
            showCodexTooltip(event, d, `${similarity}% similar to ${rootCocktail.name}`);
        })
        .on('mouseleave', function(event, d) {
            d3.select(this).select('circle')
                .transition()
                .duration(200)
                .attr('r', d.radius);

            hideCodexTooltip();
        })
        .on('click', function(event, d) {
            if (onVariationClick) {
                onVariationClick(d.data);
            }
        });

    // Update simulation
    graphSimulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    // Drag functions
    function dragstarted(event, d) {
        if (!event.active) graphSimulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) graphSimulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    return { svg, simulation: graphSimulation, nodes, links };
}

// Tooltip functions
const codexTooltip = d3.select('body')
    .append('div')
    .attr('class', 'graph-tooltip codex-tooltip')
    .style('opacity', 0);

function showCodexTooltip(event, d, message) {
    let content = `<strong>${d.label}</strong>`;
    if (message) content += `<br><em>${message}</em>`;

    codexTooltip.transition()
        .duration(200)
        .style('opacity', 0.95);
    codexTooltip.html(content)
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 10) + 'px');
}

function hideCodexTooltip() {
    codexTooltip.transition()
        .duration(200)
        .style('opacity', 0);
}
