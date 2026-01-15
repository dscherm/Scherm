// =============================================================================
// COCKTAIL NODE GRAPH VISUALIZATION WITH DYNAMIC FLAVOR EXPANSION
// Creates an interactive force-directed graph with expandable flavor nodes
// =============================================================================

/**
 * Parse measurement string to get numeric value for node sizing
 */
function parseMeasurement(measureString) {
    if (!measureString || measureString === 'To taste') return 1;

    // Remove common words
    const cleaned = measureString.toLowerCase()
        .replace(/\bof\b/g, '')
        .replace(/\bfresh\b/g, '')
        .replace(/\bsqueezed\b/g, '')
        .trim();

    // Extract fractions and decimals
    const fractionMatch = cleaned.match(/(\d+)\s*\/\s*(\d+)/);
    if (fractionMatch) {
        return parseFloat(fractionMatch[1]) / parseFloat(fractionMatch[2]);
    }

    // Extract decimal numbers
    const decimalMatch = cleaned.match(/(\d+\.?\d*)/);
    if (decimalMatch) {
        return parseFloat(decimalMatch[1]);
    }

    // Dash or splash
    if (cleaned.includes('dash') || cleaned.includes('splash')) return 0.25;

    // Default
    return 1;
}

/**
 * Create interactive node graph for a cocktail with expandable complementary ingredients
 * @param {string} containerId - ID of the container element
 * @param {string} cocktailName - Name of the cocktail (center node)
 * @param {Array} ingredients - Array of {name, measure} objects
 * @param {Function} onIngredientClick - Callback when ingredient node is clicked
 */
function createCocktailGraph(containerId, cocktailName, ingredients, onIngredientClick) {
    // Clear existing graph
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    // Set up dimensions
    const width = container.clientWidth || 800;
    const height = 500;

    // Track expanded nodes
    const expandedNodes = new Set();
    let nodeIdCounter = 0;

    // Create SVG
    const svg = d3.select(`#${containerId}`)
        .append('svg')
        .attr('width', '100%')
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height]);

    // Add gradient definitions
    const defs = svg.append('defs');

    // Gradient for cocktail node
    const cocktailGradient = defs.append('radialGradient')
        .attr('id', 'cocktail-gradient');
    cocktailGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#FF6B9D');
    cocktailGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#C44569');

    // Gradient for ingredient nodes
    const ingredientGradient = defs.append('radialGradient')
        .attr('id', 'ingredient-gradient');
    ingredientGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#667eea');
    ingredientGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#764ba2');

    // Gradient for spirit nodes
    const spiritGradient = defs.append('radialGradient')
        .attr('id', 'spirit-gradient');
    spiritGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#FFA07A');
    spiritGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#FF6B9D');

    // Gradient for complementary nodes (spawned)
    const complementaryGradient = defs.append('radialGradient')
        .attr('id', 'complementary-gradient');
    complementaryGradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#11998e');
    complementaryGradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#38ef7d');

    // Parse ingredients and create nodes
    const ingredientNodes = ingredients.map((ing, i) => {
        const measurement = parseMeasurement(ing.measure);
        const profile = FlavorProfiles[ing.name];
        const isSpirit = profile && profile.category === 'spirit';

        return {
            id: `ingredient-${nodeIdCounter++}`,
            label: ing.name,
            measure: ing.measure,
            value: measurement,
            type: 'ingredient',
            isSpirit: isSpirit,
            hasProfile: !!profile,
            profile: profile,
            level: 1 // Main ingredients are level 1
        };
    });

    // Create center cocktail node
    const cocktailNode = {
        id: 'cocktail-center',
        label: cocktailName,
        type: 'cocktail',
        value: 3,
        level: 0
    };

    // Combine nodes
    let nodes = [cocktailNode, ...ingredientNodes];

    // Create links from cocktail to each ingredient
    let links = ingredientNodes.map(ing => ({
        source: 'cocktail-center',
        target: ing.id,
        value: ing.value,
        type: 'primary'
    }));

    // Normalize node sizes
    function normalizeNodeSizes() {
        const maxValue = Math.max(...nodes.filter(n => n.level === 1).map(n => n.value || 1));
        const minRadius = 25;
        const maxRadius = 60;

        nodes.forEach(node => {
            if (node.type === 'cocktail') {
                node.radius = 70;
            } else if (node.level === 1) {
                node.radius = minRadius + (node.value / maxValue) * (maxRadius - minRadius);
            } else if (node.level === 2) {
                // Complementary nodes are smaller
                node.radius = 20;
            }
        });
    }

    normalizeNodeSizes();

    // Create force simulation
    const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(d => {
            if (d.type === 'primary') return 120 + d.value * 20;
            return 80; // Shorter distance for complementary
        }))
        .force('charge', d3.forceManyBody().strength(-300))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(d => d.radius + 10));

    // Create link group
    const linkGroup = svg.append('g').attr('class', 'links');

    // Create node group
    const nodeGroup = svg.append('g').attr('class', 'nodes');

    // Function to update visualization
    function update() {
        // Update links
        const link = linkGroup
            .selectAll('line')
            .data(links, d => `${d.source.id || d.source}-${d.target.id || d.target}`)
            .join(
                enter => enter.append('line')
                    .attr('class', 'graph-link')
                    .attr('stroke', d => d.type === 'complementary' ? '#11998e' : '#ddd')
                    .attr('stroke-width', d => d.type === 'complementary' ? 1.5 : Math.sqrt(d.value || 1) * 2)
                    .attr('stroke-opacity', 0)
                    .call(enter => enter.transition().duration(500).attr('stroke-opacity', 0.6)),
                update => update,
                exit => exit.transition().duration(300).attr('stroke-opacity', 0).remove()
            );

        // Update nodes
        const node = nodeGroup
            .selectAll('g')
            .data(nodes, d => d.id)
            .join(
                enter => {
                    const nodeEnter = enter.append('g')
                        .attr('class', d => `graph-node ${d.type}-node level-${d.level}`)
                        .attr('opacity', 0)
                        .call(d3.drag()
                            .on('start', dragstarted)
                            .on('drag', dragged)
                            .on('end', dragended));

                    // Add circles
                    nodeEnter.append('circle')
                        .attr('r', 0)
                        .attr('fill', d => {
                            if (d.type === 'cocktail') return 'url(#cocktail-gradient)';
                            if (d.level === 2) return 'url(#complementary-gradient)';
                            if (d.isSpirit) return 'url(#spirit-gradient)';
                            return 'url(#ingredient-gradient)';
                        })
                        .attr('stroke', d => {
                            if (d.type === 'cocktail') return '#C44569';
                            if (d.level === 2) return '#11998e';
                            return d.hasProfile ? '#667eea' : '#999';
                        })
                        .attr('stroke-width', d => d.type === 'cocktail' ? 4 : 2)
                        .attr('class', d => d.type === 'ingredient' || d.level === 2 ? 'clickable-node' : '')
                        .transition()
                        .duration(500)
                        .attr('r', d => d.radius);

                    // Add text labels
                    nodeEnter.append('text')
                        .text(d => d.label)
                        .attr('text-anchor', 'middle')
                        .attr('dy', d => d.type === 'cocktail' ? '0.35em' : '-0.5em')
                        .attr('class', 'node-label')
                        .attr('font-size', d => {
                            if (d.type === 'cocktail') return '16px';
                            if (d.level === 2) return '10px';
                            return '12px';
                        })
                        .attr('font-weight', d => d.type === 'cocktail' ? 'bold' : 'normal')
                        .attr('fill', 'white')
                        .attr('pointer-events', 'none')
                        .each(function(d) {
                            if (d.type === 'cocktail') {
                                const text = d3.select(this);
                                const words = d.label.split(' ');
                                text.text(null);

                                words.forEach((word, i) => {
                                    text.append('tspan')
                                        .attr('x', 0)
                                        .attr('dy', i === 0 ? '-0.2em' : '1.2em')
                                        .text(word);
                                });
                            }
                        });

                    // Add measurement labels for level 1 ingredients
                    nodeEnter.filter(d => d.type === 'ingredient' && d.level === 1)
                        .append('text')
                        .text(d => d.measure)
                        .attr('text-anchor', 'middle')
                        .attr('dy', '1.2em')
                        .attr('class', 'measure-label')
                        .attr('font-size', '10px')
                        .attr('fill', 'rgba(255, 255, 255, 0.8)')
                        .attr('pointer-events', 'none');

                    // Add profile indicator for ingredients with flavor data
                    nodeEnter.filter(d => d.hasProfile && d.level === 1)
                        .append('text')
                        .text('🎯')
                        .attr('text-anchor', 'middle')
                        .attr('dy', d => d.radius + 15)
                        .attr('font-size', '16px')
                        .attr('pointer-events', 'none');

                    // Add expand indicator for level 1 ingredients with profiles
                    nodeEnter.filter(d => d.level === 1 && d.hasProfile)
                        .append('text')
                        .text('⊕')
                        .attr('text-anchor', 'middle')
                        .attr('dy', d => -d.radius - 5)
                        .attr('class', 'expand-indicator')
                        .attr('font-size', '14px')
                        .attr('fill', 'rgba(255, 255, 255, 0.9)')
                        .attr('pointer-events', 'none');

                    // Fade in
                    nodeEnter.transition().duration(500).attr('opacity', 1);

                    return nodeEnter;
                },
                update => update,
                exit => exit.transition().duration(300).attr('opacity', 0).remove()
            );

        // Add interaction handlers
        setupNodeInteractions(node);

        // Update simulation
        simulation.nodes(nodes);
        simulation.force('link').links(links);
        simulation.alpha(0.3).restart();

        // Update positions on tick
        simulation.on('tick', () => {
            linkGroup.selectAll('line')
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            nodeGroup.selectAll('g').attr('transform', d => `translate(${d.x},${d.y})`);
        });
    }

    // Setup node interactions
    function setupNodeInteractions(nodeSelection) {
        let longPressTimer = null;
        let longPressNode = null;

        nodeSelection.filter(d => d.type === 'ingredient' || d.level === 2)
            .on('mousedown touchstart', function(event, d) {
                event.stopPropagation();
                longPressNode = d;

                // Start long press timer (750ms)
                longPressTimer = setTimeout(() => {
                    if (d.level === 1 && d.hasProfile) {
                        expandComplementaryFlavors(d);
                    }
                }, 750);
            })
            .on('mouseup touchend mouseleave touchcancel', function(event, d) {
                if (longPressTimer) {
                    clearTimeout(longPressTimer);
                    longPressTimer = null;
                }
            })
            .on('click', function(event, d) {
                event.stopPropagation();

                // Clear any pending long press
                if (longPressTimer) {
                    clearTimeout(longPressTimer);
                    longPressTimer = null;
                }

                // Regular click behavior
                if (onIngredientClick) {
                    // Pulse animation
                    d3.select(this).select('circle')
                        .transition()
                        .duration(200)
                        .attr('r', d.radius * 1.2)
                        .transition()
                        .duration(200)
                        .attr('r', d.radius);

                    onIngredientClick(d.label, d.profile);
                }
            })
            .on('mouseenter', function(event, d) {
                if (d.type === 'ingredient' || d.level === 2) {
                    d3.select(this).select('circle')
                        .transition()
                        .duration(200)
                        .attr('r', d.radius * 1.1)
                        .attr('stroke-width', 4);

                    // Show hold instruction for level 1 nodes
                    if (d.level === 1 && d.hasProfile && !expandedNodes.has(d.id)) {
                        showTooltip(event, d, 'Hold to explore complementary flavors');
                    } else if (d.level === 2) {
                        showTooltip(event, d, 'Complementary ingredient');
                    } else {
                        showTooltip(event, d);
                    }
                }
            })
            .on('mouseleave', function(event, d) {
                if (d.type === 'ingredient' || d.level === 2) {
                    d3.select(this).select('circle')
                        .transition()
                        .duration(200)
                        .attr('r', d.radius)
                        .attr('stroke-width', 2);

                    hideTooltip();
                }
            });
    }

    // Expand complementary flavors
    function expandComplementaryFlavors(node) {
        // Check if already expanded
        if (expandedNodes.has(node.id)) {
            collapseComplementaryFlavors(node);
            return;
        }

        // Mark as expanded
        expandedNodes.add(node.id);

        // Get recommendations for this ingredient
        const recommendations = getIngredientRecommendations([node.label]);

        // Take top 5 complementary ingredients
        const complementaryIngredients = recommendations.slice(0, 5);

        // Create new nodes for complementary ingredients
        const newNodes = complementaryIngredients.map(rec => {
            const profile = FlavorProfiles[rec.ingredient];
            return {
                id: `complementary-${nodeIdCounter++}`,
                label: rec.ingredient,
                type: 'complementary',
                level: 2,
                parentId: node.id,
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

        // Add to nodes and links arrays
        nodes = [...nodes, ...newNodes];
        links = [...links, ...newLinks];

        // Update expand indicator
        d3.selectAll('.graph-node')
            .filter(d => d.id === node.id)
            .select('.expand-indicator')
            .text('⊖');

        // Update visualization
        update();

        // Show expansion notification
        showNotification(`Showing ${newNodes.length} ingredients that pair well with ${node.label}`);
    }

    // Collapse complementary flavors
    function collapseComplementaryFlavors(node) {
        // Remove from expanded set
        expandedNodes.delete(node.id);

        // Remove complementary nodes and links
        nodes = nodes.filter(n => n.parentId !== node.id);
        links = links.filter(l => {
            const sourceId = l.source.id || l.source;
            return sourceId !== node.id || l.type !== 'complementary';
        });

        // Update expand indicator
        d3.selectAll('.graph-node')
            .filter(d => d.id === node.id)
            .select('.expand-indicator')
            .text('⊕');

        // Update visualization
        update();
    }

    // Tooltip
    const tooltip = d3.select('body')
        .append('div')
        .attr('class', 'graph-tooltip')
        .style('opacity', 0);

    function showTooltip(event, d, customMessage) {
        let content = `<strong>${d.label}</strong>`;

        if (customMessage) {
            content += `<br><em>${customMessage}</em>`;
        } else {
            if (d.measure) content += `<br>${d.measure}`;
            if (d.profile) {
                const flavors = Object.entries(d.profile.flavors)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 3)
                    .map(([f, w]) => f);
                content += `<br><em>${flavors.join(', ')}</em>`;
            }
            if (d.score) {
                content += `<br><span class="compat-badge">Match: ${d.score.toFixed(1)}</span>`;
            }
        }

        tooltip.transition()
            .duration(200)
            .style('opacity', 0.95);
        tooltip.html(content)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 10) + 'px');
    }

    function hideTooltip() {
        tooltip.transition()
            .duration(200)
            .style('opacity', 0);
    }

    // Notification system
    function showNotification(message) {
        const notification = d3.select('body')
            .append('div')
            .attr('class', 'graph-notification')
            .style('opacity', 0)
            .html(message);

        notification.transition()
            .duration(300)
            .style('opacity', 1)
            .transition()
            .delay(2000)
            .duration(500)
            .style('opacity', 0)
            .remove();
    }

    // Drag functions
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    // Initial update
    update();

    // Return API for external control
    return {
        simulation,
        svg,
        nodes,
        links,
        expandNode: expandComplementaryFlavors,
        collapseNode: collapseComplementaryFlavors
    };
}

/**
 * Create a simplified ingredient alternatives graph
 */
function createAlternativesGraph(containerId, ingredientName, alternatives) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const width = container.clientWidth || 600;
    const height = 300;

    const svg = d3.select(`#${containerId}`)
        .append('svg')
        .attr('width', '100%')
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height]);

    // Create center node for the ingredient
    const centerNode = {
        id: 'center',
        label: ingredientName,
        type: 'center',
        radius: 50
    };

    // Create alternative nodes
    const altNodes = alternatives.slice(0, 8).map((alt, i) => ({
        id: `alt-${i}`,
        label: alt.ingredient,
        similarity: alt.similarity,
        type: 'alternative',
        radius: 20 + alt.similarity * 30
    }));

    const nodes = [centerNode, ...altNodes];

    const links = altNodes.map(alt => ({
        source: 'center',
        target: alt.id
    }));

    // Create simulation
    const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(100))
        .force('charge', d3.forceManyBody().strength(-200))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(d => d.radius + 5));

    // Create links
    const link = svg.append('g')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke', '#ddd')
        .attr('stroke-width', 2)
        .attr('stroke-opacity', 0.6);

    // Create nodes
    const node = svg.append('g')
        .selectAll('g')
        .data(nodes)
        .join('g')
        .attr('class', 'graph-node');

    node.append('circle')
        .attr('r', d => d.radius)
        .attr('fill', d => d.type === 'center' ? '#FF6B9D' : '#667eea')
        .attr('stroke', d => d.type === 'center' ? '#C44569' : '#764ba2')
        .attr('stroke-width', 2);

    node.append('text')
        .text(d => d.label)
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('font-size', d => d.type === 'center' ? '14px' : '11px')
        .attr('font-weight', d => d.type === 'center' ? 'bold' : 'normal')
        .attr('fill', 'white')
        .attr('pointer-events', 'none');

    // Add similarity percentage
    node.filter(d => d.type === 'alternative')
        .append('text')
        .text(d => `${Math.round(d.similarity * 100)}%`)
        .attr('text-anchor', 'middle')
        .attr('dy', '1.5em')
        .attr('font-size', '9px')
        .attr('fill', 'rgba(255, 255, 255, 0.8)')
        .attr('pointer-events', 'none');

    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    return { simulation, svg, nodes, links };
}
