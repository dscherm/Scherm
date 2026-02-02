// Political Data API Service
// Fetches government contracts, congressional trades, bills, and political news

// Stock-to-sector mapping for political impact analysis
const SECTOR_STOCKS = {
  defense: ['LMT', 'RTX', 'NOC', 'GD', 'BA', 'HII', 'LHX', 'TDG'],
  pharma: ['PFE', 'JNJ', 'MRK', 'ABBV', 'LLY', 'BMY', 'AMGN', 'GILD'],
  bigTech: ['GOOGL', 'META', 'AMZN', 'AAPL', 'MSFT', 'NFLX'],
  cleanEnergy: ['TSLA', 'ENPH', 'FSLR', 'NEE', 'PLUG', 'RUN', 'SEDG'],
  oil: ['XOM', 'CVX', 'COP', 'EOG', 'SLB', 'OXY', 'PSX', 'VLO'],
  banks: ['JPM', 'BAC', 'GS', 'MS', 'WFC', 'C', 'USB', 'PNC'],
  semiconductors: ['NVDA', 'AMD', 'INTC', 'AVGO', 'QCOM', 'MU', 'AMAT', 'LRCX'],
  healthcare: ['UNH', 'CVS', 'CI', 'HUM', 'ELV', 'CNC', 'MOH'],
  construction: ['CAT', 'DE', 'VMC', 'MLM', 'URI', 'PWR', 'EME'],
  telecom: ['VZ', 'T', 'TMUS', 'CHTR', 'CMCSA'],
  auto: ['GM', 'F', 'RIVN', 'LCID', 'TM', 'HMC'],
  retail: ['WMT', 'TGT', 'COST', 'HD', 'LOW', 'DG', 'DLTR'],
  agriculture: ['ADM', 'BG', 'CTVA', 'DE', 'NTR', 'CF', 'MOS'],
};

// Bill keywords to sector mapping
const BILL_SECTOR_MAP = {
  'defense': ['defense', 'military', 'armed forces', 'pentagon', 'national security', 'weapons', 'army', 'navy', 'air force'],
  'pharma': ['drug', 'pharmaceutical', 'fda', 'medicare', 'medicaid', 'prescription', 'healthcare'],
  'bigTech': ['antitrust', 'big tech', 'data privacy', 'social media', 'platform', 'algorithm', 'digital'],
  'cleanEnergy': ['clean energy', 'renewable', 'solar', 'wind', 'ev', 'electric vehicle', 'climate', 'green', 'carbon'],
  'oil': ['oil', 'gas', 'fossil fuel', 'drilling', 'pipeline', 'petroleum', 'energy independence'],
  'banks': ['banking', 'financial', 'wall street', 'credit', 'dodd-frank', 'fed', 'interest rate'],
  'semiconductors': ['semiconductor', 'chips', 'microchip', 'chip manufacturing', 'fab'],
  'construction': ['infrastructure', 'highway', 'bridge', 'construction', 'public works'],
  'agriculture': ['farm', 'agriculture', 'crop', 'usda', 'rural', 'farming'],
  'telecom': ['telecom', 'broadband', 'spectrum', '5g', 'fcc', 'internet access'],
};

// ============ USAspending.gov API (Government Contracts) ============
const USA_SPENDING_BASE = 'https://api.usaspending.gov/api/v2';

// Map company names to stock symbols
const CONTRACTOR_TO_SYMBOL = {
  'lockheed martin': 'LMT',
  'raytheon': 'RTX',
  'northrop grumman': 'NOC',
  'general dynamics': 'GD',
  'boeing': 'BA',
  'huntington ingalls': 'HII',
  'l3harris': 'LHX',
  'bae systems': 'BA.L',
  'palantir': 'PLTR',
  'leidos': 'LDOS',
  'saic': 'SAIC',
  'booz allen': 'BAH',
  'general electric': 'GE',
  'honeywell': 'HON',
  'united technologies': 'RTX',
  'pfizer': 'PFE',
  'moderna': 'MRNA',
  'johnson & johnson': 'JNJ',
  'merck': 'MRK',
  'amazon': 'AMZN',
  'microsoft': 'MSFT',
  'google': 'GOOGL',
  'oracle': 'ORCL',
  'ibm': 'IBM',
  'deloitte': null,
  'accenture': 'ACN',
};

function matchContractorToSymbol(contractorName) {
  if (!contractorName) return null;
  const lower = contractorName.toLowerCase();
  for (const [name, symbol] of Object.entries(CONTRACTOR_TO_SYMBOL)) {
    if (lower.includes(name)) return symbol;
  }
  return null;
}

export async function fetchRecentContracts(limit = 20) {
  try {
    const response = await fetch(`${USA_SPENDING_BASE}/search/spending_by_award/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        filters: {
          award_type_codes: ['A', 'B', 'C', 'D'], // Contracts only
          time_period: [
            {
              start_date: getDateDaysAgo(30),
              end_date: new Date().toISOString().split('T')[0]
            }
          ],
          award_amounts: [
            { lower_bound: 10000000 } // $10M+ contracts
          ]
        },
        fields: [
          'Award ID',
          'Recipient Name',
          'Award Amount',
          'Awarding Agency',
          'Awarding Sub Agency',
          'Contract Award Type',
          'Start Date',
          'Description'
        ],
        limit: limit,
        order: 'desc',
        sort: 'Award Amount'
      })
    });

    if (!response.ok) throw new Error('USAspending API error');

    const data = await response.json();

    return data.results?.map(contract => ({
      id: contract['Award ID'],
      contractor: contract['Recipient Name'],
      symbol: matchContractorToSymbol(contract['Recipient Name']),
      amount: contract['Award Amount'],
      agency: contract['Awarding Agency'],
      subAgency: contract['Awarding Sub Agency'],
      type: contract['Contract Award Type'],
      date: contract['Start Date'],
      description: contract['Description'],
      source: 'usaspending'
    })) || [];
  } catch (error) {
    console.error('Error fetching contracts:', error);
    return getMockContracts();
  }
}

export async function fetchContractsByAgency(agencyCode, limit = 10) {
  try {
    const response = await fetch(`${USA_SPENDING_BASE}/search/spending_by_award/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        filters: {
          award_type_codes: ['A', 'B', 'C', 'D'],
          agencies: [{ type: 'awarding', tier: 'toptier', name: agencyCode }],
          time_period: [{ start_date: getDateDaysAgo(90), end_date: new Date().toISOString().split('T')[0] }]
        },
        fields: ['Award ID', 'Recipient Name', 'Award Amount', 'Awarding Agency', 'Start Date', 'Description'],
        limit,
        order: 'desc',
        sort: 'Award Amount'
      })
    });

    if (!response.ok) throw new Error('Agency contract fetch failed');
    const data = await response.json();

    return data.results?.map(c => ({
      id: c['Award ID'],
      contractor: c['Recipient Name'],
      symbol: matchContractorToSymbol(c['Recipient Name']),
      amount: c['Award Amount'],
      agency: c['Awarding Agency'],
      date: c['Start Date'],
      description: c['Description']
    })) || [];
  } catch (error) {
    console.error('Error fetching agency contracts:', error);
    return [];
  }
}

// ============ Congress.gov API (Bills) ============
const CONGRESS_API_KEY = import.meta.env.VITE_CONGRESS_API_KEY || '';
const CONGRESS_BASE = 'https://api.congress.gov/v3';

export async function fetchRecentBills(limit = 20) {
  try {
    // Congress.gov requires an API key
    if (!CONGRESS_API_KEY) {
      console.warn('Congress API key not set, using mock data');
      return getMockBills();
    }

    const response = await fetch(
      `${CONGRESS_BASE}/bill?limit=${limit}&sort=updateDate+desc&api_key=${CONGRESS_API_KEY}`
    );

    if (!response.ok) throw new Error('Congress API error');

    const data = await response.json();

    return data.bills?.map(bill => ({
      id: `${bill.congress}-${bill.type}-${bill.number}`,
      title: bill.title,
      congress: bill.congress,
      type: bill.type,
      number: bill.number,
      introducedDate: bill.introducedDate,
      latestAction: bill.latestAction,
      sponsor: bill.sponsors?.[0],
      url: bill.url,
      affectedSectors: detectAffectedSectors(bill.title),
      affectedStocks: detectAffectedStocks(bill.title),
      sentiment: analyzeBillSentiment(bill.title),
      source: 'congress.gov'
    })) || [];
  } catch (error) {
    console.error('Error fetching bills:', error);
    return getMockBills();
  }
}

export async function searchBills(query, limit = 10) {
  try {
    if (!CONGRESS_API_KEY) return getMockBills().filter(b =>
      b.title.toLowerCase().includes(query.toLowerCase())
    );

    const response = await fetch(
      `${CONGRESS_BASE}/bill?query=${encodeURIComponent(query)}&limit=${limit}&api_key=${CONGRESS_API_KEY}`
    );

    if (!response.ok) throw new Error('Bill search failed');
    const data = await response.json();

    return data.bills?.map(bill => ({
      id: `${bill.congress}-${bill.type}-${bill.number}`,
      title: bill.title,
      introducedDate: bill.introducedDate,
      latestAction: bill.latestAction,
      affectedSectors: detectAffectedSectors(bill.title),
      affectedStocks: detectAffectedStocks(bill.title),
      sentiment: analyzeBillSentiment(bill.title)
    })) || [];
  } catch (error) {
    console.error('Error searching bills:', error);
    return [];
  }
}

// ============ Free Congressional Trading Data (House & Senate Stock Watcher) ============
// Open source projects that scrape official disclosures - completely free
const HOUSE_TRADES_URL = 'https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json';
const SENATE_TRADES_URL = 'https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json';

// Cache for trades data
let tradesCache = null;
let tradesCacheTime = null;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

async function fetchAllCongressionalTradesRaw() {
  // Check cache
  if (tradesCache && tradesCacheTime && (Date.now() - tradesCacheTime < CACHE_DURATION)) {
    return tradesCache;
  }

  try {
    const [houseRes, senateRes] = await Promise.all([
      fetch(HOUSE_TRADES_URL),
      fetch(SENATE_TRADES_URL)
    ]);

    const houseTrades = houseRes.ok ? await houseRes.json() : [];
    const senateTrades = senateRes.ok ? await senateRes.json() : [];

    // Normalize and combine
    const allTrades = [
      ...houseTrades.map(t => ({ ...t, chamber: 'House' })),
      ...senateTrades.map(t => ({ ...t, chamber: 'Senate' }))
    ];

    tradesCache = allTrades;
    tradesCacheTime = Date.now();

    return allTrades;
  } catch (error) {
    console.error('Error fetching congressional trades:', error);
    return [];
  }
}

export async function fetchCongressionalTrades(limit = 50) {
  try {
    const rawTrades = await fetchAllCongressionalTradesRaw();

    if (rawTrades.length === 0) {
      console.warn('No trades from free API, using mock data');
      return getMockCongressTrades();
    }

    // Sort by transaction date (most recent first)
    const sorted = rawTrades
      .filter(t => t.ticker && t.ticker !== '--') // Filter out invalid tickers
      .sort((a, b) => new Date(b.transaction_date || b.disclosure_date) - new Date(a.transaction_date || a.disclosure_date))
      .slice(0, limit);

    return sorted.map(trade => {
      const transactionDate = trade.transaction_date || trade.disclosure_date;
      const filingDate = trade.disclosure_date;
      const amount = trade.amount || trade.range;

      return {
        id: `${trade.representative || trade.senator}-${trade.ticker}-${transactionDate}`,
        politician: trade.representative || trade.senator || 'Unknown',
        party: trade.party || detectParty(trade.representative || trade.senator),
        chamber: trade.chamber || 'House',
        symbol: trade.ticker?.toUpperCase(),
        transaction: normalizeTransactionType(trade.type || trade.transaction_type),
        amount: amount,
        amountRange: parseAmountRange(amount),
        transactionDate: transactionDate,
        filingDate: filingDate,
        filingDelay: calculateFilingDelay(transactionDate, filingDate),
        committees: [],
        isUnusual: checkUnusualTradeFromData(trade),
        assetDescription: trade.asset_description,
        source: 'stock-watcher'
      };
    });
  } catch (error) {
    console.error('Error processing congressional trades:', error);
    return getMockCongressTrades();
  }
}

export async function fetchTradesBySymbol(symbol) {
  try {
    const rawTrades = await fetchAllCongressionalTradesRaw();

    if (rawTrades.length === 0) {
      return getMockCongressTrades().filter(t => t.symbol === symbol);
    }

    const filtered = rawTrades
      .filter(t => t.ticker?.toUpperCase() === symbol.toUpperCase())
      .sort((a, b) => new Date(b.transaction_date || b.disclosure_date) - new Date(a.transaction_date || a.disclosure_date))
      .slice(0, 20);

    return filtered.map(trade => ({
      politician: trade.representative || trade.senator || 'Unknown',
      party: trade.party || detectParty(trade.representative || trade.senator),
      chamber: trade.chamber || 'House',
      transaction: normalizeTransactionType(trade.type || trade.transaction_type),
      amount: trade.amount || trade.range,
      transactionDate: trade.transaction_date || trade.disclosure_date,
      filingDate: trade.disclosure_date
    }));
  } catch (error) {
    console.error('Error fetching trades by symbol:', error);
    return getMockCongressTrades().filter(t => t.symbol === symbol);
  }
}

// Helper to detect party from name (rough heuristic based on known politicians)
function detectParty(name) {
  if (!name) return 'Unknown';
  // Known Democrats
  const dems = ['pelosi', 'schumer', 'ocasio', 'warren', 'sanders', 'waters', 'schiff', 'kelly', 'khanna', 'gottheimer'];
  // Known Republicans
  const reps = ['tuberville', 'crenshaw', 'greene', 'mcconnell', 'cruz', 'hawley', 'graham'];

  const lower = name.toLowerCase();
  if (dems.some(d => lower.includes(d))) return 'D';
  if (reps.some(r => lower.includes(r))) return 'R';
  return 'Unknown';
}

// Normalize transaction type
function normalizeTransactionType(type) {
  if (!type) return 'Unknown';
  const lower = type.toLowerCase();
  if (lower.includes('purchase') || lower.includes('buy')) return 'Purchase';
  if (lower.includes('sale') || lower.includes('sell') || lower.includes('sold')) return 'Sale';
  if (lower.includes('exchange')) return 'Exchange';
  return type;
}

// Check if trade is unusual based on raw data
function checkUnusualTradeFromData(trade) {
  const amount = trade.amount || trade.range || '';
  // Large trades
  if (amount.includes('1,000,000') || amount.includes('5,000,000') || amount.includes('$1,000,001')) {
    return true;
  }
  // Long filing delay
  const delay = calculateFilingDelay(trade.transaction_date, trade.disclosure_date);
  if (delay && delay > 40) return true;
  return false;
}

// ============ Political Sector Heatmap Data ============
export async function fetchPoliticalSentiment() {
  // Aggregate data from all sources to create sector sentiment
  const [contracts, bills, trades] = await Promise.all([
    fetchRecentContracts(50),
    fetchRecentBills(30),
    fetchCongressionalTrades(100)
  ]);

  const sectorScores = {};

  // Initialize sectors
  Object.keys(SECTOR_STOCKS).forEach(sector => {
    sectorScores[sector] = {
      sector,
      score: 0,
      contracts: 0,
      contractValue: 0,
      bullishBills: 0,
      bearishBills: 0,
      congressBuys: 0,
      congressSells: 0,
      topStocks: SECTOR_STOCKS[sector].slice(0, 5),
      recentEvents: []
    };
  });

  // Process contracts
  contracts.forEach(contract => {
    if (contract.symbol) {
      const sector = findSectorForSymbol(contract.symbol);
      if (sector && sectorScores[sector]) {
        sectorScores[sector].contracts++;
        sectorScores[sector].contractValue += contract.amount || 0;
        sectorScores[sector].score += 2; // Contracts are bullish
        sectorScores[sector].recentEvents.push({
          type: 'contract',
          text: `${contract.contractor} won $${formatAmount(contract.amount)} contract`,
          date: contract.date
        });
      }
    }
  });

  // Process bills
  bills.forEach(bill => {
    bill.affectedSectors?.forEach(sector => {
      if (sectorScores[sector]) {
        if (bill.sentiment === 'bullish') {
          sectorScores[sector].bullishBills++;
          sectorScores[sector].score += 1;
        } else if (bill.sentiment === 'bearish') {
          sectorScores[sector].bearishBills++;
          sectorScores[sector].score -= 1;
        }
        sectorScores[sector].recentEvents.push({
          type: 'bill',
          text: bill.title.substring(0, 60) + '...',
          sentiment: bill.sentiment,
          date: bill.introducedDate
        });
      }
    });
  });

  // Process congressional trades
  trades.forEach(trade => {
    const sector = findSectorForSymbol(trade.symbol);
    if (sector && sectorScores[sector]) {
      if (trade.transaction === 'Purchase') {
        sectorScores[sector].congressBuys++;
        sectorScores[sector].score += 0.5;
      } else {
        sectorScores[sector].congressSells++;
        sectorScores[sector].score -= 0.3;
      }
    }
  });

  // Normalize scores to -100 to +100
  const maxScore = Math.max(...Object.values(sectorScores).map(s => Math.abs(s.score)), 1);
  Object.values(sectorScores).forEach(sector => {
    sector.normalizedScore = Math.round((sector.score / maxScore) * 100);
    sector.recentEvents = sector.recentEvents.slice(0, 3); // Keep top 3 events
  });

  return Object.values(sectorScores).sort((a, b) => b.normalizedScore - a.normalizedScore);
}

// ============ Helper Functions ============
function getDateDaysAgo(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().split('T')[0];
}

function detectAffectedSectors(text) {
  if (!text) return [];
  const lower = text.toLowerCase();
  const affected = [];

  for (const [sector, keywords] of Object.entries(BILL_SECTOR_MAP)) {
    if (keywords.some(kw => lower.includes(kw))) {
      affected.push(sector);
    }
  }
  return affected;
}

function detectAffectedStocks(text) {
  const sectors = detectAffectedSectors(text);
  const stocks = [];
  sectors.forEach(sector => {
    if (SECTOR_STOCKS[sector]) {
      stocks.push(...SECTOR_STOCKS[sector].slice(0, 3));
    }
  });
  return [...new Set(stocks)];
}

function analyzeBillSentiment(title) {
  if (!title) return 'neutral';
  const lower = title.toLowerCase();

  const bullishWords = ['incentive', 'funding', 'support', 'investment', 'grant', 'tax credit', 'expand', 'strengthen'];
  const bearishWords = ['restrict', 'ban', 'limit', 'tax', 'regulate', 'break up', 'antitrust', 'penalty', 'fine'];

  let score = 0;
  bullishWords.forEach(word => { if (lower.includes(word)) score++; });
  bearishWords.forEach(word => { if (lower.includes(word)) score--; });

  if (score > 0) return 'bullish';
  if (score < 0) return 'bearish';
  return 'neutral';
}

function findSectorForSymbol(symbol) {
  for (const [sector, stocks] of Object.entries(SECTOR_STOCKS)) {
    if (stocks.includes(symbol)) return sector;
  }
  return null;
}

function parseAmountRange(range) {
  if (!range) return { min: 0, max: 0 };
  // Quiver uses ranges like "$1,001 - $15,000"
  const matches = range.match(/\$?([\d,]+)\s*-\s*\$?([\d,]+)/);
  if (matches) {
    return {
      min: parseInt(matches[1].replace(/,/g, '')),
      max: parseInt(matches[2].replace(/,/g, ''))
    };
  }
  return { min: 0, max: 0 };
}

function calculateFilingDelay(tradeDate, filingDate) {
  if (!tradeDate || !filingDate) return null;
  const trade = new Date(tradeDate);
  const filing = new Date(filingDate);
  return Math.round((filing - trade) / (1000 * 60 * 60 * 24));
}

function checkUnusualTrade(trade) {
  // Flag as unusual if:
  // 1. Large amount (over $100k)
  // 2. Filed close to 45-day deadline
  // 3. Politician sits on relevant committee
  const range = parseAmountRange(trade.Range);
  if (range.max > 100000) return true;

  const delay = calculateFilingDelay(trade.TransactionDate, trade.ReportDate);
  if (delay && delay > 40) return true;

  return false;
}

function formatAmount(amount) {
  if (!amount) return '0';
  if (amount >= 1e9) return (amount / 1e9).toFixed(1) + 'B';
  if (amount >= 1e6) return (amount / 1e6).toFixed(1) + 'M';
  if (amount >= 1e3) return (amount / 1e3).toFixed(1) + 'K';
  return amount.toString();
}

// ============ Mock Data (for development without API keys) ============
function getMockContracts() {
  return [
    {
      id: 'CONT-2026-001',
      contractor: 'Lockheed Martin Corporation',
      symbol: 'LMT',
      amount: 1200000000,
      agency: 'Department of Defense',
      subAgency: 'Air Force',
      type: 'Definitive Contract',
      date: getDateDaysAgo(2),
      description: 'F-35 Lightning II sustainment and maintenance services',
      source: 'mock'
    },
    {
      id: 'CONT-2026-002',
      contractor: 'Palantir Technologies',
      symbol: 'PLTR',
      amount: 480000000,
      agency: 'Department of Defense',
      subAgency: 'U.S. Army',
      type: 'Definitive Contract',
      date: getDateDaysAgo(3),
      description: 'Army intelligence data analytics platform',
      source: 'mock'
    },
    {
      id: 'CONT-2026-003',
      contractor: 'Raytheon Technologies',
      symbol: 'RTX',
      amount: 890000000,
      agency: 'Department of Defense',
      subAgency: 'Missile Defense Agency',
      type: 'Definitive Contract',
      date: getDateDaysAgo(5),
      description: 'Patriot missile system upgrade and support',
      source: 'mock'
    },
    {
      id: 'CONT-2026-004',
      contractor: 'Microsoft Corporation',
      symbol: 'MSFT',
      amount: 320000000,
      agency: 'Department of Veterans Affairs',
      subAgency: 'Veterans Health Administration',
      type: 'Delivery Order',
      date: getDateDaysAgo(7),
      description: 'Azure cloud infrastructure modernization',
      source: 'mock'
    },
    {
      id: 'CONT-2026-005',
      contractor: 'General Dynamics',
      symbol: 'GD',
      amount: 750000000,
      agency: 'Department of Defense',
      subAgency: 'Navy',
      type: 'Definitive Contract',
      date: getDateDaysAgo(10),
      description: 'Virginia-class submarine combat systems',
      source: 'mock'
    },
    {
      id: 'CONT-2026-006',
      contractor: 'Pfizer Inc',
      symbol: 'PFE',
      amount: 180000000,
      agency: 'Department of Health and Human Services',
      subAgency: 'CDC',
      type: 'Delivery Order',
      date: getDateDaysAgo(12),
      description: 'Vaccine stockpile replenishment',
      source: 'mock'
    },
    {
      id: 'CONT-2026-007',
      contractor: 'Amazon Web Services',
      symbol: 'AMZN',
      amount: 410000000,
      agency: 'Central Intelligence Agency',
      subAgency: null,
      type: 'Definitive Contract',
      date: getDateDaysAgo(14),
      description: 'Cloud computing services for intelligence community',
      source: 'mock'
    },
    {
      id: 'CONT-2026-008',
      contractor: 'Northrop Grumman',
      symbol: 'NOC',
      amount: 2100000000,
      agency: 'Department of Defense',
      subAgency: 'Air Force',
      type: 'Definitive Contract',
      date: getDateDaysAgo(15),
      description: 'B-21 Raider bomber program development',
      source: 'mock'
    }
  ];
}

function getMockBills() {
  return [
    {
      id: '119-HR-1234',
      title: 'Clean Energy Manufacturing and Jobs Act of 2026',
      congress: 119,
      type: 'HR',
      number: 1234,
      introducedDate: getDateDaysAgo(5),
      latestAction: { text: 'Passed House, referred to Senate Energy Committee', actionDate: getDateDaysAgo(2) },
      sponsor: { firstName: 'John', lastName: 'Smith', party: 'D', state: 'CA' },
      affectedSectors: ['cleanEnergy', 'oil'],
      affectedStocks: ['TSLA', 'ENPH', 'FSLR', 'XOM', 'CVX'],
      sentiment: 'bullish',
      source: 'mock'
    },
    {
      id: '119-S-567',
      title: 'American Semiconductor Leadership Act',
      congress: 119,
      type: 'S',
      number: 567,
      introducedDate: getDateDaysAgo(10),
      latestAction: { text: 'Committee hearing scheduled', actionDate: getDateDaysAgo(3) },
      sponsor: { firstName: 'Jane', lastName: 'Doe', party: 'R', state: 'TX' },
      affectedSectors: ['semiconductors'],
      affectedStocks: ['NVDA', 'AMD', 'INTC'],
      sentiment: 'bullish',
      source: 'mock'
    },
    {
      id: '119-HR-2345',
      title: 'Big Tech Accountability and Competition Act',
      congress: 119,
      type: 'HR',
      number: 2345,
      introducedDate: getDateDaysAgo(14),
      latestAction: { text: 'Referred to Judiciary Committee', actionDate: getDateDaysAgo(12) },
      sponsor: { firstName: 'Mike', lastName: 'Johnson', party: 'R', state: 'OH' },
      affectedSectors: ['bigTech'],
      affectedStocks: ['GOOGL', 'META', 'AMZN', 'AAPL'],
      sentiment: 'bearish',
      source: 'mock'
    },
    {
      id: '119-S-890',
      title: 'National Defense Authorization Act FY2027',
      congress: 119,
      type: 'S',
      number: 890,
      introducedDate: getDateDaysAgo(20),
      latestAction: { text: 'Markup completed, reported favorably', actionDate: getDateDaysAgo(5) },
      sponsor: { firstName: 'Sarah', lastName: 'Williams', party: 'D', state: 'VA' },
      affectedSectors: ['defense'],
      affectedStocks: ['LMT', 'RTX', 'NOC', 'GD'],
      sentiment: 'bullish',
      source: 'mock'
    },
    {
      id: '119-HR-3456',
      title: 'Prescription Drug Price Reduction Act',
      congress: 119,
      type: 'HR',
      number: 3456,
      introducedDate: getDateDaysAgo(25),
      latestAction: { text: 'House floor vote scheduled', actionDate: getDateDaysAgo(1) },
      sponsor: { firstName: 'Emily', lastName: 'Chen', party: 'D', state: 'NY' },
      affectedSectors: ['pharma'],
      affectedStocks: ['PFE', 'JNJ', 'MRK', 'ABBV'],
      sentiment: 'bearish',
      source: 'mock'
    },
    {
      id: '119-S-111',
      title: 'Banking Reform and Consumer Protection Act',
      congress: 119,
      type: 'S',
      number: 111,
      introducedDate: getDateDaysAgo(30),
      latestAction: { text: 'Passed Senate Banking Committee', actionDate: getDateDaysAgo(8) },
      sponsor: { firstName: 'Robert', lastName: 'Brown', party: 'D', state: 'MA' },
      affectedSectors: ['banks'],
      affectedStocks: ['JPM', 'BAC', 'GS', 'MS'],
      sentiment: 'bearish',
      source: 'mock'
    }
  ];
}

function getMockCongressTrades() {
  return [
    {
      id: 'TRADE-001',
      politician: 'Nancy Pelosi',
      party: 'D',
      chamber: 'House',
      symbol: 'NVDA',
      transaction: 'Purchase',
      amount: '$1,000,001 - $5,000,000',
      amountRange: { min: 1000001, max: 5000000 },
      transactionDate: getDateDaysAgo(15),
      filingDate: getDateDaysAgo(3),
      filingDelay: 12,
      committees: ['Financial Services'],
      isUnusual: true,
      source: 'mock'
    },
    {
      id: 'TRADE-002',
      politician: 'Dan Crenshaw',
      party: 'R',
      chamber: 'House',
      symbol: 'LMT',
      transaction: 'Purchase',
      amount: '$15,001 - $50,000',
      amountRange: { min: 15001, max: 50000 },
      transactionDate: getDateDaysAgo(20),
      filingDate: getDateDaysAgo(5),
      filingDelay: 15,
      committees: ['Armed Services', 'Intelligence'],
      isUnusual: false,
      source: 'mock'
    },
    {
      id: 'TRADE-003',
      politician: 'Tommy Tuberville',
      party: 'R',
      chamber: 'Senate',
      symbol: 'MSFT',
      transaction: 'Sale',
      amount: '$100,001 - $250,000',
      amountRange: { min: 100001, max: 250000 },
      transactionDate: getDateDaysAgo(25),
      filingDate: getDateDaysAgo(2),
      filingDelay: 23,
      committees: ['Armed Services', 'Agriculture'],
      isUnusual: true,
      source: 'mock'
    },
    {
      id: 'TRADE-004',
      politician: 'Mark Kelly',
      party: 'D',
      chamber: 'Senate',
      symbol: 'RTX',
      transaction: 'Purchase',
      amount: '$50,001 - $100,000',
      amountRange: { min: 50001, max: 100000 },
      transactionDate: getDateDaysAgo(18),
      filingDate: getDateDaysAgo(4),
      filingDelay: 14,
      committees: ['Armed Services', 'Commerce'],
      isUnusual: false,
      source: 'mock'
    },
    {
      id: 'TRADE-005',
      politician: 'Josh Gottheimer',
      party: 'D',
      chamber: 'House',
      symbol: 'GOOGL',
      transaction: 'Purchase',
      amount: '$15,001 - $50,000',
      amountRange: { min: 15001, max: 50000 },
      transactionDate: getDateDaysAgo(12),
      filingDate: getDateDaysAgo(1),
      filingDelay: 11,
      committees: ['Financial Services'],
      isUnusual: false,
      source: 'mock'
    },
    {
      id: 'TRADE-006',
      politician: 'Marjorie Taylor Greene',
      party: 'R',
      chamber: 'House',
      symbol: 'TSLA',
      transaction: 'Sale',
      amount: '$1,001 - $15,000',
      amountRange: { min: 1001, max: 15000 },
      transactionDate: getDateDaysAgo(30),
      filingDate: getDateDaysAgo(7),
      filingDelay: 23,
      committees: ['Homeland Security', 'Oversight'],
      isUnusual: false,
      source: 'mock'
    },
    {
      id: 'TRADE-007',
      politician: 'Gary Peters',
      party: 'D',
      chamber: 'Senate',
      symbol: 'AMD',
      transaction: 'Purchase',
      amount: '$15,001 - $50,000',
      amountRange: { min: 15001, max: 50000 },
      transactionDate: getDateDaysAgo(8),
      filingDate: getDateDaysAgo(1),
      filingDelay: 7,
      committees: ['Commerce', 'Homeland Security'],
      isUnusual: false,
      source: 'mock'
    },
    {
      id: 'TRADE-008',
      politician: 'Ro Khanna',
      party: 'D',
      chamber: 'House',
      symbol: 'PLTR',
      transaction: 'Purchase',
      amount: '$50,001 - $100,000',
      amountRange: { min: 50001, max: 100000 },
      transactionDate: getDateDaysAgo(22),
      filingDate: getDateDaysAgo(6),
      filingDelay: 16,
      committees: ['Armed Services', 'Oversight'],
      isUnusual: false,
      source: 'mock'
    }
  ];
}

// Export sector data for components
export { SECTOR_STOCKS, BILL_SECTOR_MAP };
