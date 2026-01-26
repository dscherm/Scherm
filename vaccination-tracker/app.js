// Vaccination Policy Tracker - Enhanced with Real CDC API Integration
// Version 2.0 - Includes Chart.js visualizations and state-by-state data

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
    CDC_COVID_API: 'https://data.cdc.gov/resource/unsk-b7fc.json',
    CDC_NIS_TEEN_API: 'https://data.cdc.gov/resource/c7yr-jaxa.json',
    CDC_COVID_TRENDS_API: 'https://data.cdc.gov/resource/rh2h-3yt2.json',
    CACHE_DURATION: 1000 * 60 * 60, // 1 hour
    MAX_RETRIES: 3,
    RETRY_DELAY: 2000 // 2 seconds
};

// ============================================================================
// SAMPLE DATA - Historical policy events
// ============================================================================

const policyEventsData = {
    childhood: [
        {
            date: '2015-02-01',
            year: 2015,
            type: 'outcome',
            title: 'Disneyland Measles Outbreak',
            description: 'Major measles outbreak affecting 147 people across 7 states, leading to policy discussions about vaccine requirements.',
            tags: ['measles', 'outbreak', 'MMR'],
            coverage: 91.9
        },
        {
            date: '2015-06-30',
            year: 2015,
            type: 'policy',
            title: 'California Eliminates Personal Belief Exemptions (SB 277)',
            description: 'California becomes first state to eliminate personal belief exemptions for school vaccine requirements, allowing only medical exemptions.',
            tags: ['California', 'mandate', 'school-entry'],
            impact: 'high'
        },
        {
            date: '2019-01-01',
            year: 2019,
            type: 'outcome',
            title: 'Measles Outbreak Peaks',
            description: '1,282 individual cases of measles confirmed in 31 states - highest number reported since 1992.',
            tags: ['measles', 'outbreak', 'MMR'],
            coverage: 91.1
        },
        {
            date: '2019-06-13',
            year: 2019,
            type: 'policy',
            title: 'New York Eliminates Religious Exemptions',
            description: 'Following measles outbreak, New York eliminates religious exemptions for school vaccine requirements.',
            tags: ['New York', 'mandate', 'school-entry'],
            impact: 'high'
        },
        {
            date: '2021-12-31',
            year: 2021,
            type: 'outcome',
            title: 'Childhood Vaccination Rates Decline',
            description: 'NIS data shows decline in routine childhood vaccinations due to COVID-19 pandemic disruptions.',
            tags: ['coverage', 'pandemic-impact'],
            coverage: 93.9
        }
    ],
    covid: [
        {
            date: '2020-12-11',
            year: 2020,
            type: 'policy',
            title: 'FDA Authorizes Pfizer-BioNTech COVID-19 Vaccine (EUA)',
            description: 'First COVID-19 vaccine receives Emergency Use Authorization for individuals 16 years and older.',
            tags: ['FDA', 'EUA', 'Pfizer'],
            impact: 'critical'
        },
        {
            date: '2020-12-18',
            year: 2020,
            type: 'policy',
            title: 'FDA Authorizes Moderna COVID-19 Vaccine',
            description: 'Second COVID-19 vaccine receives Emergency Use Authorization.',
            tags: ['FDA', 'EUA', 'Moderna'],
            impact: 'critical'
        },
        {
            date: '2021-08-23',
            year: 2021,
            type: 'policy',
            title: 'Pfizer-BioNTech Receives Full FDA Approval',
            description: 'First COVID-19 vaccine to receive full FDA approval (not EUA), branded as Comirnaty.',
            tags: ['FDA', 'approval', 'Pfizer'],
            impact: 'critical'
        },
        {
            date: '2021-09-09',
            year: 2021,
            type: 'mandate',
            title: 'Biden Announces Federal Vaccine Mandates',
            description: 'Executive order requiring vaccination for federal workers and large employers (100+ employees).',
            tags: ['federal', 'mandate', 'OSHA'],
            impact: 'critical'
        },
        {
            date: '2021-11-01',
            year: 2021,
            type: 'outcome',
            title: 'US Reaches 70% Adult Vaccination',
            description: 'CDC reports 70% of US adults fully vaccinated against COVID-19.',
            tags: ['milestone', 'coverage'],
            coverage: 70.0
        },
        {
            date: '2022-01-13',
            year: 2022,
            type: 'policy',
            title: 'Supreme Court Blocks OSHA Mandate',
            description: 'Supreme Court blocks OSHA vaccine mandate for large employers but allows healthcare worker mandate.',
            tags: ['supreme-court', 'mandate'],
            impact: 'critical'
        },
        {
            date: '2023-05-11',
            year: 2023,
            type: 'policy',
            title: 'COVID-19 Public Health Emergency Ends',
            description: 'Federal public health emergency declaration expires, changing vaccine access and data reporting.',
            tags: ['PHE', 'emergency'],
            impact: 'high'
        },
        {
            date: '2024-06-01',
            year: 2024,
            type: 'policy',
            title: 'Updated COVID-19 Vaccine Recommendations',
            description: 'CDC recommends updated 2024-2025 COVID-19 vaccines for everyone 6 months and older.',
            tags: ['CDC', 'ACIP', 'recommendation'],
            impact: 'medium'
        }
    ],
    flu: [
        {
            date: '2015-09-01',
            year: 2015,
            type: 'outcome',
            title: '2015-16 Flu Season Coverage',
            description: 'Flu vaccination coverage reaches 46.8% for adults, 59.3% for children.',
            tags: ['coverage', 'seasonal'],
            coverage: 46.8
        },
        {
            date: '2020-09-01',
            year: 2020,
            type: 'outcome',
            title: 'Record Flu Vaccination During Pandemic',
            description: 'Flu vaccination rates reach record highs as healthcare systems emphasize vaccination during COVID-19.',
            tags: ['coverage', 'pandemic-impact'],
            coverage: 52.3
        },
        {
            date: '2024-09-01',
            year: 2024,
            type: 'policy',
            title: '2024-25 Flu Vaccine Recommendations',
            description: 'CDC recommends updated flu vaccines for all persons 6 months and older.',
            tags: ['CDC', 'ACIP', 'recommendation'],
            impact: 'medium'
        }
    ],
    hpv: [
        {
            date: '2016-02-01',
            year: 2016,
            type: 'policy',
            title: 'ACIP Updates HPV Vaccination Schedule',
            description: 'CDC recommends 2-dose HPV vaccine series for adolescents starting vaccination before 15th birthday.',
            tags: ['ACIP', 'schedule-change'],
            impact: 'medium'
        },
        {
            date: '2018-12-31',
            year: 2018,
            type: 'outcome',
            title: 'HPV Vaccination Coverage Increases',
            description: 'NIS-Teen data shows 51.1% of adolescents up to date with HPV vaccination.',
            tags: ['coverage', 'adolescent'],
            coverage: 51.1
        },
        {
            date: '2023-12-31',
            year: 2023,
            type: 'outcome',
            title: 'HPV Coverage Reaches 61.7%',
            description: 'Continued improvement in HPV vaccination rates among adolescents.',
            tags: ['coverage', 'adolescent'],
            coverage: 61.7
        }
    ],
    adult: [
        {
            date: '2017-10-01',
            year: 2017,
            type: 'policy',
            title: 'Shingrix Approved by FDA',
            description: 'New shingles vaccine (Shingrix) approved, showing higher efficacy than previous Zostavax vaccine.',
            tags: ['FDA', 'approval', 'shingles'],
            impact: 'medium'
        },
        {
            date: '2021-06-01',
            year: 2021,
            type: 'policy',
            title: 'Pneumococcal Vaccine Updates',
            description: 'CDC updates pneumococcal vaccination recommendations for adults 65 and older.',
            tags: ['ACIP', 'pneumococcal'],
            impact: 'medium'
        }
    ],
    mandates: [
        {
            date: '2015-06-30',
            year: 2015,
            type: 'mandate',
            title: 'California SB 277 - No Personal Exemptions',
            description: 'Landmark legislation eliminating personal belief exemptions for school vaccines.',
            tags: ['California', 'school-entry'],
            impact: 'high'
        },
        {
            date: '2019-06-13',
            year: 2019,
            type: 'mandate',
            title: 'New York Eliminates Religious Exemptions',
            description: 'Response to measles outbreak - only medical exemptions allowed.',
            tags: ['New York', 'school-entry'],
            impact: 'high'
        },
        {
            date: '2021-11-04',
            year: 2021,
            type: 'mandate',
            title: 'Healthcare Worker COVID-19 Mandate',
            description: 'CMS requires COVID-19 vaccination for healthcare workers in Medicare/Medicaid facilities.',
            tags: ['CMS', 'healthcare-workers', 'COVID-19'],
            impact: 'critical'
        },
        {
            date: '2023-01-01',
            year: 2023,
            type: 'mandate',
            title: 'Military COVID-19 Mandate Rescinded',
            description: 'DOD rescinds COVID-19 vaccination mandate for military service members.',
            tags: ['military', 'COVID-19'],
            impact: 'high'
        }
    ],
    safety: [
        {
            date: '2021-04-13',
            year: 2021,
            type: 'safety',
            title: 'J&J Vaccine Pause',
            description: 'FDA and CDC recommend pause in J&J COVID-19 vaccine due to rare blood clotting events (TTS).',
            tags: ['VAERS', 'adverse-events', 'J&J'],
            impact: 'high'
        },
        {
            date: '2021-04-23',
            year: 2021,
            type: 'safety',
            title: 'J&J Vaccine Resumes with Warning',
            description: 'FDA and CDC lift pause on J&J vaccine, add warning about rare clotting risk.',
            tags: ['VAERS', 'adverse-events', 'J&J'],
            impact: 'high'
        },
        {
            date: '2021-06-23',
            year: 2021,
            type: 'safety',
            title: 'Myocarditis Warning Added to mRNA Vaccines',
            description: 'FDA adds warning about rare cases of myocarditis following mRNA COVID-19 vaccines, primarily in young males.',
            tags: ['VAERS', 'adverse-events', 'mRNA'],
            impact: 'high'
        },
        {
            date: '2025-05-08',
            year: 2025,
            type: 'policy',
            title: 'Expanded VAERS Public Data Access',
            description: 'CDC and FDA expand public access to VAERS data, including secondary reports.',
            tags: ['VAERS', 'transparency'],
            impact: 'medium'
        }
    ]
};

// Combined vaccination data (static + API)
let vaccinationData = { ...policyEventsData };

// API data storage
let apiData = {
    covidVaccination: [],
    stateData: {},
    teenVaccination: [],
    lastUpdated: null
};

// Chart instances (for cleanup/updates)
let chartInstances = {
    coverageChart: null,
    stateChart: null
};

// State management
let currentTopic = 'all';
let currentYear = 'all';
let dataLoaded = false;

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeTopicNavigation();
    initializeYearFilter();
    loadAllData(); // Load data on startup
});

// ============================================================================
// NAVIGATION & FILTERING
// ============================================================================

function initializeTopicNavigation() {
    const topicCards = document.querySelectorAll('.topic-card');

    topicCards.forEach(card => {
        card.addEventListener('click', function() {
            topicCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            currentTopic = this.getAttribute('data-topic');
            updateDisplay();
        });
    });
}

function initializeYearFilter() {
    const yearButtons = document.querySelectorAll('.year-btn');

    yearButtons.forEach(button => {
        button.addEventListener('click', function() {
            yearButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentYear = this.getAttribute('data-year');
            updateDisplay();
        });
    });
}

// ============================================================================
// DATA FETCHING & API INTEGRATION
// ============================================================================

/**
 * Load all data from CDC APIs with caching and error handling
 */
async function loadAllData() {
    showLoadingState();

    try {
        // Check cache first
        const cached = getCachedData();
        if (cached && !isCacheExpired(cached.timestamp)) {
            console.log('Using cached data');
            apiData = cached;
            mergeApiData();
            updateDisplay();
            updateCharts();
            return;
        }

        // Fetch fresh data from multiple APIs in parallel
        const results = await Promise.allSettled([
            fetchCOVIDVaccinationData(),
            fetchTeenVaccinationData(),
            fetchStateComparisonData()
        ]);

        // Process results
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`API ${index + 1} fetch successful`);
            } else {
                console.warn(`API ${index + 1} fetch failed:`, result.reason);
            }
        });

        // Cache the data
        apiData.lastUpdated = new Date().toISOString();
        cacheData(apiData);

        // Merge and display
        mergeApiData();
        updateDisplay();
        updateCharts();

    } catch (error) {
        console.error('Error loading data:', error);
        showErrorState(error.message);
        // Fall back to static data
        updateDisplay();
    }
}

/**
 * Fetch COVID-19 vaccination data from CDC
 */
async function fetchCOVIDVaccinationData() {
    try {
        const params = new URLSearchParams({
            '$limit': 5000,
            '$order': 'date DESC',
            '$where': `date >= '2020-12-01' AND location = 'US'`
        });

        const response = await fetchWithRetry(
            `${CONFIG.CDC_COVID_API}?${params}`
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        apiData.covidVaccination = transformCOVIDData(data);

        console.log(`Fetched ${data.length} COVID-19 vaccination records`);
        return data;
    } catch (error) {
        console.error('Error fetching COVID-19 data:', error);
        throw error;
    }
}

/**
 * Fetch teen vaccination data from CDC NIS
 */
async function fetchTeenVaccinationData() {
    try {
        const params = new URLSearchParams({
            '$limit': 1000,
            '$order': 'year DESC',
            '$where': `geography = 'United States'`
        });

        const response = await fetchWithRetry(
            `${CONFIG.CDC_NIS_TEEN_API}?${params}`
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        apiData.teenVaccination = data;

        console.log(`Fetched ${data.length} teen vaccination records`);
        return data;
    } catch (error) {
        console.error('Error fetching teen vaccination data:', error);
        throw error;
    }
}

/**
 * Fetch state-by-state comparison data
 */
async function fetchStateComparisonData() {
    try {
        const params = new URLSearchParams({
            '$limit': 5000,
            '$order': 'date DESC',
            '$where': `date >= '2023-01-01'`,
            '$select': 'location,date,series_complete_pop_pct,administered_dose1_recip'
        });

        const response = await fetchWithRetry(
            `${CONFIG.CDC_COVID_API}?${params}`
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        // Group by state
        const stateData = {};
        data.forEach(record => {
            if (record.location && record.location !== 'US') {
                if (!stateData[record.location]) {
                    stateData[record.location] = [];
                }
                stateData[record.location].push(record);
            }
        });

        apiData.stateData = stateData;
        console.log(`Fetched data for ${Object.keys(stateData).length} states`);
        return stateData;
    } catch (error) {
        console.error('Error fetching state data:', error);
        throw error;
    }
}

/**
 * Fetch with retry logic for network resilience
 */
async function fetchWithRetry(url, retries = CONFIG.MAX_RETRIES) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            return response;
        } catch (error) {
            if (i === retries - 1) throw error;

            const delay = CONFIG.RETRY_DELAY * Math.pow(2, i);
            console.log(`Fetch failed, retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

// ============================================================================
// DATA TRANSFORMATION
// ============================================================================

/**
 * Transform CDC COVID data to match app structure
 */
function transformCOVIDData(data) {
    return data
        .filter(item => item.date && item.series_complete_pop_pct)
        .map(item => {
            const date = item.date;
            const year = new Date(date).getFullYear();
            const coverage = parseFloat(item.series_complete_pop_pct) || 0;

            return {
                date: date,
                year: year,
                type: 'outcome',
                title: `COVID-19 Vaccination Coverage Update`,
                description: `${coverage.toFixed(1)}% of US population fully vaccinated`,
                tags: ['COVID-19', 'CDC-data', 'vaccination-coverage'],
                coverage: coverage,
                rawData: item
            };
        });
}

/**
 * Merge API data with static policy events
 */
function mergeApiData() {
    // Add COVID vaccination coverage milestones
    if (apiData.covidVaccination && apiData.covidVaccination.length > 0) {
        // Sample every 30th record to avoid overwhelming timeline
        const sampledData = apiData.covidVaccination.filter((_, index) => index % 30 === 0);
        vaccinationData.covid = [...policyEventsData.covid, ...sampledData];
    }

    // Add teen vaccination data to childhood/hpv categories
    if (apiData.teenVaccination && apiData.teenVaccination.length > 0) {
        // Process and add to relevant categories
        // This would require more specific transformation based on vaccine type
    }

    console.log('API data merged with static data');
}

// ============================================================================
// CACHING
// ============================================================================

function getCachedData() {
    try {
        const cached = localStorage.getItem('vaccinationAPIData');
        return cached ? JSON.parse(cached) : null;
    } catch (error) {
        console.warn('Error reading cache:', error);
        return null;
    }
}

function cacheData(data) {
    try {
        localStorage.setItem('vaccinationAPIData', JSON.stringify(data));
    } catch (error) {
        console.warn('Error caching data:', error);
    }
}

function isCacheExpired(timestamp) {
    if (!timestamp) return true;
    const age = Date.now() - new Date(timestamp).getTime();
    return age > CONFIG.CACHE_DURATION;
}

// ============================================================================
// DISPLAY UPDATES
// ============================================================================

function getFilteredEvents() {
    let events = [];

    if (currentTopic === 'all') {
        Object.values(vaccinationData).forEach(topicEvents => {
            events = events.concat(topicEvents);
        });
    } else {
        events = vaccinationData[currentTopic] || [];
    }

    if (currentYear !== 'all') {
        const year = parseInt(currentYear);
        events = events.filter(event => event.year === year);
    }

    events.sort((a, b) => new Date(b.date) - new Date(a.date));
    return events;
}

function updateDisplay() {
    updateStatistics();
    updateTimeline();
    updateCharts();
    updateMap();
}

function updateStatistics() {
    const events = getFilteredEvents();
    const statsGrid = document.getElementById('statsGrid');

    const totalEvents = events.length;
    const policyChanges = events.filter(e => e.type === 'policy').length;
    const mandates = events.filter(e => e.type === 'mandate').length;

    const coverageEvents = events.filter(e => e.coverage);
    const avgCoverage = coverageEvents.length > 0
        ? (coverageEvents.reduce((sum, e) => sum + e.coverage, 0) / coverageEvents.length).toFixed(1)
        : 'N/A';

    statsGrid.innerHTML = `
        <div class="stat-card">
            <span class="stat-value">${totalEvents}</span>
            <div class="stat-label">Total Events</div>
        </div>
        <div class="stat-card">
            <span class="stat-value">${policyChanges}</span>
            <div class="stat-label">Policy Changes</div>
        </div>
        <div class="stat-card">
            <span class="stat-value">${mandates}</span>
            <div class="stat-label">Mandates</div>
        </div>
        <div class="stat-card">
            <span class="stat-value">${avgCoverage}%</span>
            <div class="stat-label">Avg Coverage</div>
        </div>
    `;
}

function updateTimeline() {
    const events = getFilteredEvents();
    const timelineContainer = document.getElementById('timelineEvents');

    if (events.length === 0) {
        timelineContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
                No events found for the selected filters.
            </div>
        `;
        return;
    }

    timelineContainer.innerHTML = events.map(event => {
        const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const typeClass = event.type;
        const tags = event.tags.map(tag =>
            `<span class="event-tag">${tag}</span>`
        ).join('');

        const coverageInfo = event.coverage
            ? `<div style="margin-top: 0.5rem; color: var(--secondary-teal); font-weight: 600;">Coverage: ${event.coverage}%</div>`
            : '';

        return `
            <div class="timeline-event ${typeClass}">
                <div class="event-date">${formattedDate}</div>
                <div class="event-title">${event.title}</div>
                <div class="event-description">${event.description}</div>
                ${coverageInfo}
                <div class="event-tags">${tags}</div>
            </div>
        `;
    }).join('');
}

// ============================================================================
// CHART.JS VISUALIZATIONS
// ============================================================================

function updateCharts() {
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js not loaded - charts will not render');
        return;
    }

    updateCoverageChart();
    updateStateChart();
}

function updateCoverageChart() {
    const events = getFilteredEvents();
    let coverageData = events
        .filter(e => e.coverage)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (coverageData.length === 0) return;

    // Smart sampling: if too many points, show every Nth point
    const maxPoints = 20; // Maximum data points to display
    if (coverageData.length > maxPoints) {
        const step = Math.ceil(coverageData.length / maxPoints);
        coverageData = coverageData.filter((_, index) => index % step === 0);
    }

    const ctx = document.getElementById('coverageChart');
    if (!ctx) return;

    // Destroy existing chart
    if (chartInstances.coverageChart) {
        chartInstances.coverageChart.destroy();
    }

    // Create canvas if placeholder exists
    if (ctx.classList.contains('chart-placeholder')) {
        const canvas = document.createElement('canvas');
        canvas.id = 'coverageChart';
        canvas.style.height = '400px';
        ctx.parentNode.replaceChild(canvas, ctx);
    }

    const chartCanvas = document.getElementById('coverageChart');

    chartInstances.coverageChart = new Chart(chartCanvas, {
        type: 'line',
        data: {
            labels: coverageData.map(d => new Date(d.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short'
            })),
            datasets: [{
                label: 'Vaccination Coverage %',
                data: coverageData.map(d => d.coverage),
                borderColor: 'rgb(0, 168, 150)',
                backgroundColor: 'rgba(0, 168, 150, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 8,
                pointBackgroundColor: 'rgb(0, 168, 150)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Vaccination Coverage Trends Over Time',
                    color: '#F4F4F4',
                    font: { size: 18, weight: '600' },
                    padding: { top: 10, bottom: 20 }
                },
                legend: {
                    labels: {
                        color: '#F4F4F4',
                        font: { size: 14 },
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleFont: { size: 14 },
                    bodyFont: { size: 13 },
                    padding: 12,
                    borderColor: 'rgb(0, 168, 150)',
                    borderWidth: 2,
                    callbacks: {
                        label: function(context) {
                            return `Coverage: ${context.parsed.y.toFixed(1)}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#B8B8B8',
                        font: { size: 13 },
                        padding: 10,
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        lineWidth: 1
                    }
                },
                x: {
                    ticks: {
                        color: '#B8B8B8',
                        font: { size: 12 },
                        padding: 8,
                        maxRotation: 45,
                        minRotation: 0
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                }
            }
        }
    });
}

function updateStateChart() {
    if (!apiData.stateData || Object.keys(apiData.stateData).length === 0) {
        return;
    }

    const ctx = document.getElementById('stateChart');
    if (!ctx) return;

    // Destroy existing chart
    if (chartInstances.stateChart) {
        chartInstances.stateChart.destroy();
    }

    // Create canvas if placeholder exists
    if (ctx.classList.contains('chart-placeholder')) {
        const canvas = document.createElement('canvas');
        canvas.id = 'stateChart';
        canvas.style.height = '400px';
        ctx.parentNode.replaceChild(canvas, ctx);
    }

    // Get latest data for each state
    const stateLatest = {};
    Object.entries(apiData.stateData).forEach(([state, records]) => {
        if (records.length > 0) {
            const latest = records[0];
            if (latest.series_complete_pop_pct) {
                stateLatest[state] = parseFloat(latest.series_complete_pop_pct);
            }
        }
    });

    // Sort by coverage and take top 10 for better readability
    const sorted = Object.entries(stateLatest)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

    const chartCanvas = document.getElementById('stateChart');

    // Create gradient colors for bars
    const colors = sorted.map((_, index) => {
        const intensity = 1 - (index * 0.08); // Fade from brightest to slightly dimmer
        return `rgba(0, 168, 150, ${intensity})`;
    });

    chartInstances.stateChart = new Chart(chartCanvas, {
        type: 'bar',
        data: {
            labels: sorted.map(s => getStateName(s[0])), // Use full state names
            datasets: [{
                label: 'Vaccination Coverage %',
                data: sorted.map(s => s[1]),
                backgroundColor: colors,
                borderColor: 'rgb(0, 168, 150)',
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            indexAxis: 'y', // Horizontal bars for better label readability
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Top 10 States by Vaccination Coverage',
                    color: '#F4F4F4',
                    font: { size: 18, weight: '600' },
                    padding: { top: 10, bottom: 20 }
                },
                legend: {
                    labels: {
                        color: '#F4F4F4',
                        font: { size: 14 },
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleFont: { size: 14 },
                    bodyFont: { size: 13 },
                    padding: 12,
                    borderColor: 'rgb(0, 168, 150)',
                    borderWidth: 2,
                    callbacks: {
                        label: function(context) {
                            return `Coverage: ${context.parsed.x.toFixed(1)}%`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#B8B8B8',
                        font: { size: 13 },
                        padding: 10,
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        lineWidth: 1
                    }
                },
                y: {
                    ticks: {
                        color: '#B8B8B8',
                        font: { size: 13 },
                        padding: 10
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                }
            }
        }
    });
}

// ============================================================================
// MAP VISUALIZATION
// ============================================================================

function updateMap() {
    if (typeof renderStateComparison === 'undefined') {
        console.warn('Map visualization library not loaded');
        return;
    }

    if (!apiData.stateData || Object.keys(apiData.stateData).length === 0) {
        // Show placeholder
        const mapContainer = document.getElementById('usMap');
        if (mapContainer) {
            mapContainer.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
                    State-by-state data will appear here once loaded from CDC API
                </div>
            `;
        }
        return;
    }

    // Render state comparison visualization
    renderStateComparison(apiData.stateData, 'usMap');
}

// ============================================================================
// UI STATE MANAGEMENT
// ============================================================================

function showLoadingState() {
    const timelineContainer = document.getElementById('timelineEvents');
    timelineContainer.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Loading CDC vaccination data...</p>
        </div>
    `;
}

function showErrorState(message) {
    const timelineContainer = document.getElementById('timelineEvents');
    timelineContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: var(--danger-red);">
            <strong>Error loading data</strong><br>
            ${message}<br>
            <em style="color: var(--text-muted);">Displaying cached or sample data instead.</em>
        </div>
    `;
}

// ============================================================================
// UTILITY FUNCTIONS FOR STATE VISUALIZATION
// ============================================================================

/**
 * Get state abbreviation to full name mapping
 */
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
    'PR': 'Puerto Rico', 'US': 'United States'
};

/**
 * Get full state name from abbreviation
 */
function getStateName(abbr) {
    return stateNames[abbr] || abbr;
}

// ============================================================================
// EXPORT FOR TESTING
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getFilteredEvents,
        fetchCOVIDVaccinationData,
        fetchTeenVaccinationData,
        fetchStateComparisonData,
        transformCOVIDData,
        updateCharts
    };
}
