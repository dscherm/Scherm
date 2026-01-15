// Vaccination Policy Tracker - Main Application Logic

// Sample data structure - this will be replaced with real CDC API data
const vaccinationData = {
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
        },
        {
            date: '2025-05-27',
            year: 2025,
            type: 'policy',
            title: 'COVID-19 Vaccines Removed from CDC Schedule',
            description: 'CDC removes COVID-19 vaccines from recommended immunization schedules for healthy children and pregnant women.',
            tags: ['CDC', 'schedule-change'],
            impact: 'critical'
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

// State management
let currentTopic = 'all';
let currentYear = 'all';

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeTopicNavigation();
    initializeYearFilter();
    updateDisplay();
});

// Topic navigation
function initializeTopicNavigation() {
    const topicCards = document.querySelectorAll('.topic-card');

    topicCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            topicCards.forEach(c => c.classList.remove('active'));

            // Add active class to clicked card
            this.classList.add('active');

            // Update current topic
            currentTopic = this.getAttribute('data-topic');

            // Update display
            updateDisplay();
        });
    });
}

// Year filter
function initializeYearFilter() {
    const yearButtons = document.querySelectorAll('.year-btn');

    yearButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            yearButtons.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Update current year
            currentYear = this.getAttribute('data-year');

            // Update display
            updateDisplay();
        });
    });
}

// Get filtered events based on current topic and year
function getFilteredEvents() {
    let events = [];

    // Collect events from selected topic(s)
    if (currentTopic === 'all') {
        // Combine all topics
        Object.values(vaccinationData).forEach(topicEvents => {
            events = events.concat(topicEvents);
        });
    } else {
        // Get events from specific topic
        events = vaccinationData[currentTopic] || [];
    }

    // Filter by year if not 'all'
    if (currentYear !== 'all') {
        const year = parseInt(currentYear);
        events = events.filter(event => event.year === year);
    }

    // Sort by date (most recent first)
    events.sort((a, b) => new Date(b.date) - new Date(a.date));

    return events;
}

// Update the entire display
function updateDisplay() {
    updateStatistics();
    updateTimeline();
}

// Update statistics cards
function updateStatistics() {
    const events = getFilteredEvents();
    const statsGrid = document.getElementById('statsGrid');

    // Calculate statistics
    const totalEvents = events.length;
    const policyChanges = events.filter(e => e.type === 'policy').length;
    const mandates = events.filter(e => e.type === 'mandate').length;
    const safetyEvents = events.filter(e => e.type === 'safety').length;

    // Calculate average coverage for events that have coverage data
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

// Update timeline display
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

// API Integration Functions (to be implemented with real data)

/**
 * Fetch data from CDC NIS (National Immunization Survey)
 * Documentation: https://www.cdc.gov/nis/php/datasets-child/index.html
 */
async function fetchNISData() {
    // TODO: Implement CDC NIS API integration
    // This will fetch vaccination coverage data for children and teens
    // Can use CDC's FTP server or data.cdc.gov Socrata API
    console.log('Fetching NIS data...');
}

/**
 * Fetch data from CDC COVID-19 Data API
 * Documentation: https://data.cdc.gov/
 * Using Socrata Open Data API (SODA)
 */
async function fetchCOVIDData() {
    // TODO: Implement CDC COVID-19 data API
    // Example endpoint: https://data.cdc.gov/resource/unsk-b7fc.json
    // Can filter by date, location, demographics
    console.log('Fetching COVID-19 data...');
}

/**
 * Fetch data from CDC WONDER VAERS API
 * Documentation: https://wonder.cdc.gov/wonder/help/WONDER-API.html
 * Note: Uses XML format, not JSON
 */
async function fetchVAERSData() {
    // TODO: Implement CDC WONDER API integration
    // This API uses XML POST requests
    // Can query adverse event reports by vaccine, date range, etc.
    console.log('Fetching VAERS data...');
}

/**
 * Fetch influenza vaccination data from FluVaxView
 * Documentation: https://www.cdc.gov/fluvaxview/
 */
async function fetchFluData() {
    // TODO: Implement flu vaccination coverage API
    console.log('Fetching flu vaccination data...');
}

// Export functions for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getFilteredEvents,
        fetchNISData,
        fetchCOVIDData,
        fetchVAERSData,
        fetchFluData
    };
}
