// Geographic Visualization for USA Vaccination Data
// Simplified table-based heat map with visual coverage bars

/**
 * Render US state vaccination coverage heat map
 * @param {Object} stateData - State coverage data from CDC API
 * @param {string} containerId - ID of container element
 */
function renderStateHeatMap(stateData, containerId = 'usMap') {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container ${containerId} not found`);
        return;
    }

    // Get latest coverage for each state
    const stateLatest = {};
    Object.entries(stateData).forEach(([state, records]) => {
        if (records.length > 0) {
            const latest = records[0];
            if (latest.series_complete_pop_pct) {
                stateLatest[state] = {
                    coverage: parseFloat(latest.series_complete_pop_pct),
                    date: latest.date
                };
            }
        }
    });

    // If no data, show placeholder
    if (Object.keys(stateLatest).length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
                Loading state vaccination data...
            </div>
        `;
        return;
    }

    // Sort states by coverage (descending)
    const sortedStates = Object.entries(stateLatest)
        .sort((a, b) => b[1].coverage - a[1].coverage);

    // Create grid layout for states
    const gridHtml = `
        <div class="state-table-container">
            <table class="state-table">
                <thead>
                    <tr>
                        <th style="width: 15%;">Rank</th>
                        <th style="width: 25%;">State</th>
                        <th style="width: 45%;">Coverage</th>
                        <th style="width: 15%;">Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    ${sortedStates.map(([ state, data], index) => {
                        const coverage = data.coverage;
                        const color = getCoverageColor(coverage);
                        const fullStateName = getStateName(state);

                        return `
                            <tr>
                                <td>${index + 1}</td>
                                <td><strong>${fullStateName}</strong></td>
                                <td>
                                    <div style="position: relative; background: rgba(255, 255, 255, 0.1); border-radius: 4px; height: 20px;">
                                        <div class="coverage-bar" style="width: ${coverage}%; background: ${color};"></div>
                                    </div>
                                </td>
                                <td style="color: ${color}; font-weight: 600;">${coverage.toFixed(1)}%</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = gridHtml;
}

/**
 * Get color based on coverage percentage
 * @param {number} coverage - Coverage percentage
 * @returns {string} - Hex color code
 */
function getCoverageColor(coverage) {
    if (coverage >= 70) return '#00A896'; // Teal (high)
    if (coverage >= 60) return '#52B788'; // Green (good)
    if (coverage >= 50) return '#FFB800'; // Yellow (medium)
    return '#E63946'; // Red (low)
}

/**
 * Get full state name from abbreviation
 * @param {string} abbr - State abbreviation
 * @returns {string} - Full state name
 */
function getStateName(abbr) {
    const stateNames = {
        'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas',
        'CA': 'California', 'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware',
        'FL': 'Florida', 'GA': 'Georgia', 'HI': 'Hawaii', 'ID': 'Idaho',
        'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa', 'KS': 'Kansas',
        'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
        'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi',
        'MO': 'Missouri', 'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada',
        'NH': 'New Hampshire', 'NJ': 'New Jersey', 'NM': 'New Mexico', 'NY': 'New York',
        'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio', 'OK': 'Oklahoma',
        'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
        'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah',
        'VT': 'Vermont', 'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia',
        'WI': 'Wisconsin', 'WY': 'Wyoming', 'DC': 'District of Columbia',
        'PR': 'Puerto Rico', 'GU': 'Guam', 'VI': 'U.S. Virgin Islands',
        'AS': 'American Samoa', 'MP': 'Northern Mariana Islands'
    };

    return stateNames[abbr] || abbr;
}

/**
 * Render simplified grid-based US map visualization
 * Uses a grid layout to approximate US geography
 */
function renderSimplifiedUSMap(stateData, containerId = 'usMap') {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Get latest coverage for each state
    const stateLatest = {};
    Object.entries(stateData).forEach(([state, records]) => {
        if (records.length > 0 && records[0].series_complete_pop_pct) {
            stateLatest[state] = parseFloat(records[0].series_complete_pop_pct);
        }
    });

    // US state grid positions (simplified geographic approximation)
    const stateGrid = {
        // Row 1 (North)
        'WA': [0, 0], 'MT': [0, 1], 'ND': [0, 2], 'MN': [0, 3], 'WI': [0, 4], 'MI': [0, 5], 'NY': [0, 6], 'VT': [0, 7], 'NH': [0, 8], 'ME': [0, 9],
        // Row 2
        'OR': [1, 0], 'ID': [1, 1], 'WY': [1, 2], 'SD': [1, 3], 'IA': [1, 4], 'IL': [1, 5], 'IN': [1, 6], 'OH': [1, 7], 'PA': [1, 8], 'MA': [1, 9], 'RI': [1, 10], 'CT': [1, 11],
        // Row 3
        'NV': [2, 0], 'UT': [2, 1], 'CO': [2, 2], 'NE': [2, 3], 'MO': [2, 4], 'KY': [2, 5], 'WV': [2, 6], 'VA': [2, 7], 'MD': [2, 8], 'DE': [2, 9], 'NJ': [2, 10],
        // Row 4
        'CA': [3, 0], 'AZ': [3, 1], 'NM': [3, 2], 'KS': [3, 3], 'AR': [3, 4], 'TN': [3, 5], 'NC': [3, 6], 'SC': [3, 7], 'DC': [3, 8],
        // Row 5 (South)
        'AK': [4, 0], 'HI': [4, 1], 'TX': [4, 2], 'OK': [4, 3], 'LA': [4, 4], 'MS': [4, 5], 'AL': [4, 6], 'GA': [4, 7], 'FL': [4, 8]
    };

    let mapHtml = '<div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 4px; margin: 2rem 0;">';

    // Create grid cells
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 12; col++) {
            // Find state at this position
            const state = Object.keys(stateGrid).find(s => {
                const [r, c] = stateGrid[s];
                return r === row && c === col;
            });

            if (state && stateLatest[state]) {
                const coverage = stateLatest[state];
                const color = getCoverageColor(coverage);
                mapHtml += `
                    <div style="
                        background: ${color};
                        padding: 0.5rem;
                        border-radius: 4px;
                        text-align: center;
                        font-size: 0.75rem;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                    "
                    title="${getStateName(state)}: ${coverage.toFixed(1)}%"
                    onmouseover="this.style.transform='scale(1.1)'; this.style.zIndex='10';"
                    onmouseout="this.style.transform='scale(1)'; this.style.zIndex='1';">
                        ${state}<br>
                        <span style="font-size: 0.65rem;">${coverage.toFixed(0)}%</span>
                    </div>
                `;
            } else {
                mapHtml += '<div></div>'; // Empty cell
            }
        }
    }

    mapHtml += '</div>';
    container.innerHTML = mapHtml;
}

/**
 * Create a comparison of top and bottom performing states
 */
function renderStateComparison(stateData, containerId = 'usMap') {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Get latest coverage for each state
    const stateLatest = [];
    Object.entries(stateData).forEach(([state, records]) => {
        if (records.length > 0 && records[0].series_complete_pop_pct) {
            stateLatest.push({
                state,
                coverage: parseFloat(records[0].series_complete_pop_pct),
                name: getStateName(state)
            });
        }
    });

    if (stateLatest.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Loading state data...</p>';
        return;
    }

    // Sort by coverage
    stateLatest.sort((a, b) => b.coverage - a.coverage);

    const top10 = stateLatest.slice(0, 10);
    const bottom10 = stateLatest.slice(-10).reverse();

    const html = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
                <h3 style="color: var(--success-green); margin-bottom: 1rem;">🏆 Top 10 States</h3>
                ${top10.map((s, i) => `
                    <div style="margin-bottom: 0.75rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                            <span><strong>${i + 1}. ${s.name}</strong></span>
                            <span style="color: ${getCoverageColor(s.coverage)}; font-weight: 600;">${s.coverage.toFixed(1)}%</span>
                        </div>
                        <div style="background: rgba(255, 255, 255, 0.1); height: 8px; border-radius: 4px;">
                            <div style="background: ${getCoverageColor(s.coverage)}; width: ${s.coverage}%; height: 100%; border-radius: 4px;"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div>
                <h3 style="color: var(--warning-yellow); margin-bottom: 1rem;">⚠️ Bottom 10 States</h3>
                ${bottom10.map((s, i) => `
                    <div style="margin-bottom: 0.75rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                            <span><strong>${i + 1}. ${s.name}</strong></span>
                            <span style="color: ${getCoverageColor(s.coverage)}; font-weight: 600;">${s.coverage.toFixed(1)}%</span>
                        </div>
                        <div style="background: rgba(255, 255, 255, 0.1); height: 8px; border-radius: 4px;">
                            <div style="background: ${getCoverageColor(s.coverage)}; width: ${s.coverage}%; height: 100%; border-radius: 4px;"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    container.innerHTML = html;
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        renderStateHeatMap,
        renderSimplifiedUSMap,
        renderStateComparison,
        getCoverageColor,
        getStateName
    };
}
