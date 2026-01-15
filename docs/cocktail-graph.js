// =============================================================================
// COCKTAIL NODE GRAPH VISUALIZATION
// Creates an interactive force-directed graph showing cocktail and ingredients
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
 * Create interactive node graph for a cocktail
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

    // Parse ingredients and create nodes
    const ingredientNodes = ingredients.map((ing, i) => {
        const measurement = parseMeasurement(ing.measure);
        const profile = FlavorProfiles[ing.name];
        const isSpirit = profile && profile.category === 'spirit';

        return {
            id: `ingredient-${i}`,
            label: ing.name,
            measure: ing.measure,
            value: measurement,
            type: 'ingredient',
            isSpirit: isSpirit,
            hasProfile: !!profile,
            profile: profile
        };
    });

    // Create center cocktail node
    const cocktailNode = {
        id: 'cocktail-center',
        label: cocktailName,
        type: 'cocktail',
        value: 3
    };

    // Combine nodes
    const nodes = [cocktailNode, ...ingredientNodes];

    // Create links from cocktail to each ingredient
    const links = ingredientNodes.map(ing => ({
        source: 'cocktail-center',
        target: ing.id,
        value: ing.value
    }));

    // Normalize node sizes
    const maxValue = Math.max(...ingredientNodes.map(n => n.value));
    const minRadius = 25;
    const maxRadius = 60;

    nodes.forEach(node => {
        if (node.type === 'cocktail') {
            node.radius = 70;
        } else {
            node.radius = minRadius + (node.value / maxValue) * (maxRadius - minRadius);
        }
    });

    // Create force simulation
    const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(d => 120 + d.value * 20))
        .force('charge', d3.forceManyBody().strength(-300))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(d => d.radius + 10));

    // Create links (lines)
    const link = svg.append('g')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('class', 'graph-link')
        .attr('stroke', '#ddd')
        .attr('stroke-width', d => Math.sqrt(d.value) * 2)
        .attr('stroke-opacity', 0.6);

    // Create node groups
    const node = svg.append('g')
        .selectAll('g')
        .data(nodes)
        .join('g')
        .attr('class', d => `graph-node ${d.type}-node`)
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));

    // Add circles to nodes
    node.append('circle')
        .attr('r', d => d.radius)
        .attr('fill', d => {
            if (d.type === 'cocktail') return 'url(#cocktail-gradient)';
            if (d.isSpirit) return 'url(#spirit-gradient)';
            return 'url(#ingredient-gradient)';
        })
        .attr('stroke', d => d.type === 'cocktail' ? '#C44569' : (d.hasProfile ? '#667eea' : '#999'))
        .attr('stroke-width', d => d.type === 'cocktail' ? 4 : 2)
        .attr('class', d => d.type === 'ingredient' ? 'clickable-node' : '');

    // Add text labels
    node.append('text')
        .text(d => d.label)
        .attr('text-anchor', 'middle')
        .attr('dy', d => d.type === 'cocktail' ? '0.35em' : '-0.5em')
        .attr('class', 'node-label')
        .attr('font-size', d => d.type === 'cocktail' ? '16px' : '12px')
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

    // Add measurement labels for ingredients
    node.filter(d => d.type === 'ingredient')
        .append('text')
        .text(d => d.measure)
        .attr('text-anchor', 'middle')
        .attr('dy', '1.2em')
        .attr('class', 'measure-label')
        .attr('font-size', '10px')
        .attr('fill', 'rgba(255, 255, 255, 0.8)')
        .attr('pointer-events', 'none');

    // Add profile indicator for ingredients with flavor data
    node.filter(d => d.hasProfile && d.type === 'ingredient')
        .append('text')
        .text('🎯')
        .attr('text-anchor', 'middle')
        .attr('dy', d => d.radius + 15)
        .attr('font-size', '16px')
        .attr('pointer-events', 'none');

    // Add click handlers for ingredient nodes
    node.filter(d => d.type === 'ingredient')
        .on('click', function(event, d) {
            event.stopPropagation();
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
            if (d.type === 'ingredient') {
                d3.select(this).select('circle')
                    .transition()
                    .duration(200)
                    .attr('r', d.radius * 1.1)
                    .attr('stroke-width', 4);

                // Show tooltip
                showTooltip(event, d);
            }
        })
        .on('mouseleave', function(event, d) {
            if (d.type === 'ingredient') {
                d3.select(this).select('circle')
                    .transition()
                    .duration(200)
                    .attr('r', d.radius)
                    .attr('stroke-width', 2);

                hideTooltip();
            }
        });

    // Tooltip
    const tooltip = d3.select('body')
        .append('div')
        .attr('class', 'graph-tooltip')
        .style('opacity', 0);

    function showTooltip(event, d) {
        let content = `<strong>${d.label}</strong><br>${d.measure}`;

        if (d.profile) {
            const flavors = Object.entries(d.profile.flavors)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 3)
                .map(([f, w]) => f);
            content += `<br><em>${flavors.join(', ')}</em>`;
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

    // Update positions on tick
    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node.attr('transform', d => `translate(${d.x},${d.y})`);
    });

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

    // Return simulation for external control
    return {
        simulation,
        svg,
        nodes,
        links
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
