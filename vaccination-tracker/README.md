# USA Vaccination Policy Tracker (2015-2025)

A comprehensive web application for comparing and visualizing USA vaccination policies, mandates, and outcomes over the past decade, organized by topic.

## Features

### Topic Categories
- **Childhood Vaccines** - MMR, DTaP, Polio, Hepatitis B
- **COVID-19** - Pandemic response policies 2020-2025
- **Influenza** - Annual flu campaigns and coverage
- **HPV Vaccines** - Adolescent vaccination programs
- **Adult Vaccines** - Pneumonia, Shingles, Tdap boosters
- **Mandates** - School, healthcare, and federal requirements
- **Safety Monitoring** - VAERS adverse event tracking
- **All Topics** - Comprehensive view across all categories

### Interactive Features
- **Timeline Visualization** - View policy changes and outcomes chronologically
- **Topic Filtering** - Focus on specific vaccination categories
- **Year Filtering** - Narrow down to specific years (2015-2025)
- **Statistics Dashboard** - Real-time metrics on selected data
- **Responsive Design** - Works on desktop, tablet, and mobile

## Data Sources & APIs

### 1. CDC National Immunization Survey (NIS)

**Purpose:** Vaccination coverage rates for children and teens

**Data Available:**
- NIS-Child: Children 19-35 months
- NIS-Teen: Adolescents 13-17 years
- State and local area estimates
- Annual data from 2015-present

**Access Methods:**

#### A. Public Use Files (CSV/SAS)
```
URLs:
- NIS-Child: https://www.cdc.gov/nis/php/datasets-child/index.html
- NIS-Teen: https://www.cdc.gov/nis/php/datasets-teen/index.html

Format: CSV, SAS datasets
Update Frequency: Annual
```

#### B. FTP Server
```
FTP: ftp.cdc.gov/pub/VACCINES_NIS/
Structure:
  /child/    - NIS-Child datasets
  /teen/     - NIS-Teen datasets
  /Archived/ - Historical data
```

#### C. Data.CDC.gov (Socrata API)
```javascript
// Example: Fetch NIS-Child COVID Module data
const response = await fetch(
  'https://data.cdc.gov/resource/uny6-e3dx.json?$limit=5000'
);
const data = await response.json();
```

**Key Variables:**
- `est_pct_vaccinated` - Vaccination coverage percentage
- `state` - Geographic area
- `survey_year` - Year of survey
- `vaccine` - Vaccine type

---

### 2. CDC COVID-19 Vaccination Data

**Purpose:** COVID-19 vaccination coverage and trends

**Primary Endpoint:**
```
https://data.cdc.gov/Vaccinations/COVID-19-Vaccinations-in-the-United-States-Jurisdi/unsk-b7fc
```

**API Access (Socrata SODA):**
```javascript
// Fetch COVID-19 vaccination by jurisdiction
const endpoint = 'https://data.cdc.gov/resource/unsk-b7fc.json';

// Basic query
const response = await fetch(`${endpoint}?$limit=1000`);

// Filtered query (specific state, date range)
const filtered = await fetch(
  `${endpoint}?location=CA&date>=2021-01-01&$order=date DESC&$limit=100`
);

const data = await filtered.json();
```

**Available Datasets:**
1. **National Immunization Survey - Adult COVID Module (NIS-ACM)**
   - Dataset ID: `akkj-j5ru` (Trends)
   - Dataset ID: `iwxc-qftf` (Demographics)

2. **COVID-19 Vaccination Trends**
   - Dataset ID: `unsk-b7fc` (By jurisdiction)
   - Dataset ID: `gxj9-t96f` (By age group - archived)

**Query Parameters:**
- `$where` - SQL-style WHERE clause
- `$limit` - Number of results (default 1000, max 50000)
- `$offset` - Pagination offset
- `$order` - Sort order
- `$select` - Choose specific fields

**Example Queries:**
```javascript
// Get latest data for all states
fetch('https://data.cdc.gov/resource/unsk-b7fc.json?$order=date DESC&$limit=50')

// Filter by date range
fetch('https://data.cdc.gov/resource/unsk-b7fc.json?$where=date between "2021-01-01" and "2021-12-31"')

// Aggregate data
fetch('https://data.cdc.gov/resource/unsk-b7fc.json?$select=location,avg(administered_dose1_recip_4)&$group=location')
```

---

### 3. CDC WONDER VAERS (Vaccine Adverse Event Reporting System)

**Purpose:** Vaccine safety monitoring and adverse event reports

**Access:** CDC WONDER API (XML-based)

**Documentation:** https://wonder.cdc.gov/wonder/help/WONDER-API.html

**Important Notes:**
- Uses XML format (NOT JSON)
- Requires POST requests with XML payload
- Rate limit: 1 query per 2 minutes recommended
- No authentication required
- Data updated weekly

**Basic Query Structure:**
```xml
<request>
  <parameter>
    <code>B1</code>  <!-- Parameter code -->
    <name>Vaccine</name>
    <value>COVID19</value>
  </parameter>
</request>
```

**Example JavaScript Implementation:**
```javascript
async function fetchVAERSData(vaccine, startYear, endYear) {
  const xmlPayload = `
    <request>
      <b1>
        <name>vaccine</name>
        <value>${vaccine}</value>
      </b1>
      <dates>
        <start>${startYear}</start>
        <end>${endYear}</end>
      </dates>
    </request>
  `;

  const response = await fetch('https://wonder.cdc.gov/controller/datarequest/D8', {
    method: 'POST',
    headers: { 'Content-Type': 'application/xml' },
    body: xmlPayload
  });

  const xmlText = await response.text();
  // Parse XML response
  return parseXMLResponse(xmlText);
}
```

**Alternative: Download CSV Files**
```
Direct URL: https://vaers.hhs.gov/data/datasets.html

Files:
- VAERSData.csv - Adverse event reports
- VAERSVAX.csv - Vaccine information
- VAERSSYMPTOMS.csv - Symptoms data

Update Frequency: Weekly
```

**Recent Update (May 2025):**
- Expanded public data access
- Now includes secondary reports
- Enhanced filtering capabilities

---

### 4. FluVaxView - Influenza Vaccination Coverage

**Purpose:** Seasonal flu vaccination coverage rates

**Dashboard:** https://www.cdc.gov/fluvaxview/

**Data Access:**
```
Platform: data.cdc.gov
Search: "influenza vaccination coverage"

Common datasets:
- Adult flu vaccination (18+)
- Child flu vaccination (6 months - 17 years)
- Healthcare worker flu vaccination
```

**Example Query:**
```javascript
// Fetch flu vaccination trends
const response = await fetch(
  'https://data.cdc.gov/resource/[dataset-id].json?season=2023-24'
);
```

---

### 5. HealthData.gov

**Purpose:** Comprehensive health datasets including vaccination policies

**Portal:** https://healthdata.gov

**Search Strategy:**
- Keywords: "vaccination", "immunization", "vaccine coverage"
- Filter by: Organization (CDC, HHS), Date range
- Format: CSV, JSON, XML, API

**Example Datasets:**
- State vaccination requirements
- School immunization laws
- Healthcare worker mandates

---

## API Integration Guide

### Step 1: Set Up CORS Proxy (if needed)

Since many CDC APIs don't have CORS enabled, you may need a proxy for browser-based requests:

```javascript
// Option 1: Use a CORS proxy service
const PROXY = 'https://cors-anywhere.herokuapp.com/';
const API_URL = 'https://data.cdc.gov/resource/unsk-b7fc.json';

fetch(PROXY + API_URL)
  .then(response => response.json())
  .then(data => console.log(data));

// Option 2: Set up your own backend proxy
// Create a Node.js/Express server to proxy requests
```

### Step 2: Implement Data Fetching

Add to `app.js`:

```javascript
// Real CDC COVID-19 data implementation
async function fetchCOVIDData() {
  try {
    const endpoint = 'https://data.cdc.gov/resource/unsk-b7fc.json';
    const params = new URLSearchParams({
      '$limit': 5000,
      '$order': 'date DESC',
      '$where': 'date >= "2020-01-01"'
    });

    const response = await fetch(`${endpoint}?${params}`);
    if (!response.ok) throw new Error('Failed to fetch data');

    const data = await response.json();

    // Transform data to match app structure
    return data.map(item => ({
      date: item.date,
      year: new Date(item.date).getFullYear(),
      type: 'outcome',
      title: `COVID-19 Vaccination Update - ${item.location}`,
      description: `${item.administered_dose1_recip_4}% received at least one dose`,
      tags: ['COVID-19', item.location],
      coverage: parseFloat(item.administered_dose1_recip_4)
    }));
  } catch (error) {
    console.error('Error fetching COVID data:', error);
    return [];
  }
}
```

### Step 3: Merge API Data with Timeline

```javascript
async function loadAllData() {
  // Show loading state
  document.getElementById('timelineEvents').innerHTML = '<div class="loading"><div class="spinner"></div>Loading data...</div>';

  try {
    // Fetch from multiple sources
    const [covidData, nisData, fluData] = await Promise.all([
      fetchCOVIDData(),
      fetchNISData(),
      fetchFluData()
    ]);

    // Merge with existing static data
    vaccinationData.covid = [...vaccinationData.covid, ...covidData];
    vaccinationData.childhood = [...vaccinationData.childhood, ...nisData];
    vaccinationData.flu = [...vaccinationData.flu, ...fluData];

    // Update display
    updateDisplay();
  } catch (error) {
    console.error('Error loading data:', error);
    document.getElementById('timelineEvents').innerHTML = '<div style="color: var(--danger-red);">Error loading data. Please try again.</div>';
  }
}

// Call on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeTopicNavigation();
  initializeYearFilter();
  loadAllData(); // This replaces updateDisplay()
});
```

---

## Visualization Enhancements

### Option 1: Chart.js

Add interactive charts for coverage trends:

```html
<!-- Add to index.html -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

```javascript
// Add to app.js
function renderCoverageChart(data) {
  const ctx = document.getElementById('coverageChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(d => d.year),
      datasets: [{
        label: 'Vaccination Coverage %',
        data: data.map(d => d.coverage),
        borderColor: 'rgb(0, 168, 150)',
        backgroundColor: 'rgba(0, 168, 150, 0.1)'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Vaccination Coverage Over Time'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}
```

### Option 2: D3.js

For more complex visualizations:

```html
<script src="https://d3js.org/d3.v7.min.js"></script>
```

```javascript
// Create interactive timeline with D3
function createD3Timeline(data) {
  const width = 1200;
  const height = 600;

  const svg = d3.select('#timelineAxis')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  // D3 visualization code...
}
```

---

## Data Update Schedule

| Source | Update Frequency | Latest Data |
|--------|------------------|-------------|
| NIS-Child/Teen | Annual | 2023 (published 2024) |
| COVID-19 Vaccination | Weekly | Current week |
| VAERS | Weekly | Current week |
| FluVaxView | Weekly (seasonal) | Current season |

---

## Future Enhancements

### Phase 1: Live Data Integration ✅ (Current)
- [x] Sample data structure
- [ ] Real-time CDC API integration
- [ ] Error handling and fallbacks
- [ ] Loading states

### Phase 2: Advanced Visualizations
- [ ] Interactive charts (Chart.js/D3.js)
- [ ] Geographic heat maps (US states)
- [ ] Comparison overlays (multiple vaccines)
- [ ] Export to PDF/CSV

### Phase 3: Comparative Analysis
- [ ] State-by-state comparisons
- [ ] Demographic breakdowns
- [ ] Correlation analysis (policy → outcomes)
- [ ] Predictive trends

### Phase 4: International Expansion
- [ ] WHO GHO API integration
- [ ] OECD health statistics
- [ ] Country comparisons (US, UK, Canada, EU)
- [ ] Global vaccination policies

---

## Technical Architecture

```
vaccination-tracker/
├── index.html          # Main application UI
├── app.js             # Application logic and API integration
├── README.md          # This documentation
└── assets/            # (future) Images, additional resources
```

**Technology Stack:**
- Pure JavaScript (ES6+)
- No framework dependencies (vanilla JS)
- CSS3 with CSS variables
- Responsive design (mobile-first)

**Browser Compatibility:**
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## API Rate Limits & Best Practices

### CDC Data.gov (Socrata)
- **Rate Limit:** 1000 requests/rolling hour (unauthenticated)
- **With App Token:** 10,000 requests/rolling hour
- **Get App Token:** https://data.cdc.gov/signup
- **Usage:** Add `$$app_token=YOUR_TOKEN` to query params

### CDC WONDER
- **Rate Limit:** Not officially specified
- **Recommendation:** 1 query per 2 minutes
- **Caching:** Implement local caching for repeated queries

### Best Practices:
1. **Cache API responses** - Store data in localStorage/sessionStorage
2. **Batch requests** - Combine multiple filters in single query
3. **Implement retry logic** - Handle network failures gracefully
4. **Show loading states** - Improve user experience
5. **Error handling** - Provide fallback to sample data

---

## Development Setup

1. **Clone/Download** the repository
2. **Serve locally** with a web server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (http-server)
   npx http-server

   # PHP
   php -S localhost:8000
   ```
3. **Open browser** to `http://localhost:8000/vaccination-tracker/`

---

## Contributing

To add new policy events or outcomes:

1. Open `app.js`
2. Add to appropriate topic in `vaccinationData` object:
   ```javascript
   {
     date: 'YYYY-MM-DD',
     year: 2025,
     type: 'policy', // or 'outcome', 'mandate', 'safety'
     title: 'Event Title',
     description: 'Detailed description...',
     tags: ['tag1', 'tag2'],
     coverage: 85.5, // optional: if coverage data available
     impact: 'high' // optional: 'critical', 'high', 'medium', 'low'
   }
   ```

---

## Resources

### Official Documentation
- [CDC Open Technology Portal](https://open.cdc.gov/)
- [CDC APIs](https://open.cdc.gov/apis.html)
- [CDC Data.gov](https://data.cdc.gov/)
- [CDC WONDER](https://wonder.cdc.gov/)
- [HealthData.gov](https://healthdata.gov/)

### API Documentation
- [Socrata Open Data API](https://dev.socrata.com/)
- [CDC WONDER API Docs](https://wonder.cdc.gov/wonder/help/WONDER-API.html)
- [NIS Data Documentation](https://www.cdc.gov/nis/)

### Research Sources
- [NIS-Child Data](https://www.cdc.gov/nis/php/datasets-child/index.html)
- [NIS-Teen Data](https://www.cdc.gov/nis/php/datasets-teen/index.html)
- [VAERS Data](https://vaers.hhs.gov/data.html)
- [CDC VaxView](https://www.cdc.gov/vaccines/data-reporting/index.html)

---

## License

This project is for educational and research purposes. All data is sourced from publicly available CDC and HHS databases.

CDC data is in the public domain and may be freely used without permission.

---

## Contact & Support

For questions about CDC APIs:
- CDC Open Technology: https://open.cdc.gov/
- Data.gov Support: https://data.cdc.gov/

For questions about this application:
- Create an issue in the repository
- Refer to the CDC documentation links above
