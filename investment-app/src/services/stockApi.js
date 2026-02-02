// Stock API Service - Uses Finnhub for real-time stock data
// Get your free key at https://finnhub.io/register

const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';

// API Key - set in .env file as VITE_FINNHUB_API_KEY
const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY || '';

// Check if API is configured
export function isApiConfigured() {
  return API_KEY && API_KEY.length > 0;
}

// List of supported stock symbols
export const SUPPORTED_SYMBOLS = [
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'NVDA', 'META', 'TSLA', 'BRK.B',
  'JPM', 'JNJ', 'V', 'PG', 'UNH', 'HD', 'MA', 'XOM', 'CVX', 'KO',
  'PEP', 'ABBV', 'MRK', 'COST', 'AVGO', 'LLY', 'WMT', 'BAC', 'PFE',
  'TMO', 'CSCO', 'ACN', 'MCD', 'CRM', 'ABT', 'DHR', 'ADBE', 'NFLX',
  'NKE', 'DIS', 'TXN', 'INTC', 'AMD', 'QCOM', 'ORCL', 'IBM'
];

// Sector mappings for stocks
const SECTOR_MAP = {
  'AAPL': 'Technology', 'MSFT': 'Technology', 'GOOGL': 'Technology',
  'AMZN': 'Consumer Cyclical', 'NVDA': 'Technology', 'META': 'Technology',
  'TSLA': 'Consumer Cyclical', 'BRK.B': 'Financials', 'JPM': 'Financials',
  'JNJ': 'Healthcare', 'V': 'Financials', 'PG': 'Consumer Defensive',
  'UNH': 'Healthcare', 'HD': 'Consumer Cyclical', 'MA': 'Financials',
  'XOM': 'Energy', 'CVX': 'Energy', 'KO': 'Consumer Defensive',
  'PEP': 'Consumer Defensive', 'ABBV': 'Healthcare', 'MRK': 'Healthcare',
  'COST': 'Consumer Defensive', 'AVGO': 'Technology', 'LLY': 'Healthcare',
  'WMT': 'Consumer Defensive', 'BAC': 'Financials', 'PFE': 'Healthcare',
  'TMO': 'Healthcare', 'CSCO': 'Technology', 'ACN': 'Technology',
  'MCD': 'Consumer Cyclical', 'CRM': 'Technology', 'ABT': 'Healthcare',
  'DHR': 'Healthcare', 'ADBE': 'Technology', 'NFLX': 'Technology',
  'NKE': 'Consumer Cyclical', 'DIS': 'Communication Services',
  'TXN': 'Technology', 'INTC': 'Technology', 'AMD': 'Technology',
  'QCOM': 'Technology', 'ORCL': 'Technology', 'IBM': 'Technology'
};

// Industry mappings
const INDUSTRY_MAP = {
  'AAPL': 'Consumer Electronics', 'MSFT': 'Software', 'GOOGL': 'Internet Services',
  'AMZN': 'E-Commerce', 'NVDA': 'Semiconductors', 'META': 'Social Media',
  'TSLA': 'Auto Manufacturers', 'BRK.B': 'Conglomerate', 'JPM': 'Banks',
  'JNJ': 'Pharmaceuticals', 'V': 'Credit Services', 'PG': 'Household Products',
  'UNH': 'Health Insurance', 'HD': 'Home Improvement', 'MA': 'Credit Services',
  'XOM': 'Oil & Gas', 'CVX': 'Oil & Gas', 'KO': 'Beverages',
  'PEP': 'Beverages', 'ABBV': 'Biotechnology', 'MRK': 'Pharmaceuticals',
  'COST': 'Retail', 'AVGO': 'Semiconductors', 'LLY': 'Pharmaceuticals',
  'WMT': 'Retail', 'BAC': 'Banks', 'PFE': 'Pharmaceuticals',
  'TMO': 'Medical Devices', 'CSCO': 'Networking', 'ACN': 'IT Services',
  'MCD': 'Restaurants', 'CRM': 'Software', 'ABT': 'Medical Devices',
  'DHR': 'Medical Devices', 'ADBE': 'Software', 'NFLX': 'Streaming',
  'NKE': 'Apparel', 'DIS': 'Entertainment', 'TXN': 'Semiconductors',
  'INTC': 'Semiconductors', 'AMD': 'Semiconductors', 'QCOM': 'Semiconductors',
  'ORCL': 'Software', 'IBM': 'IT Services'
};

// Helper to make Finnhub API calls
async function finnhubFetch(endpoint, params = {}) {
  if (!API_KEY) {
    throw new Error('Finnhub API key not configured. Add VITE_FINNHUB_API_KEY to your .env file.');
  }

  const url = new URL(`${FINNHUB_BASE_URL}${endpoint}`);
  url.searchParams.append('token', API_KEY);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url.toString());

  if (response.status === 401) {
    throw new Error('Invalid API key. Please check your Finnhub API key.');
  }

  if (response.status === 429) {
    throw new Error('Rate limit exceeded. Finnhub free tier allows 60 requests/minute.');
  }

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

// Cache for company profiles and metrics
const profileCache = new Map();
const metricsCache = new Map();

// Fetch company profile (cached)
async function getCompanyProfile(symbol) {
  if (profileCache.has(symbol)) {
    return profileCache.get(symbol);
  }

  try {
    const profile = await finnhubFetch('/stock/profile2', { symbol });
    if (profile && profile.name) {
      profileCache.set(symbol, profile);
      return profile;
    }
  } catch (e) {
    console.warn(`Failed to fetch profile for ${symbol}:`, e.message);
  }
  return null;
}

// Fetch basic financials (cached)
async function getBasicFinancials(symbol) {
  if (metricsCache.has(symbol)) {
    return metricsCache.get(symbol);
  }

  try {
    const data = await finnhubFetch('/stock/metric', { symbol, metric: 'all' });
    if (data && data.metric) {
      metricsCache.set(symbol, data.metric);
      return data.metric;
    }
  } catch (e) {
    console.warn(`Failed to fetch metrics for ${symbol}:`, e.message);
  }
  return {};
}

// Calculate analysis scores based on quote and metrics
function calculateScores(quote, metrics) {
  const scores = {
    value: 50,
    future: 50,
    past: 50,
    health: 50,
    dividend: 0
  };

  // Value Score - based on P/E ratio
  const pe = metrics.peBasicExclExtraTTM || metrics.peTTM || metrics.peNormalizedAnnual;
  if (pe) {
    if (pe < 15) scores.value = 80;
    else if (pe < 20) scores.value = 70;
    else if (pe < 25) scores.value = 60;
    else if (pe < 35) scores.value = 45;
    else scores.value = 30;
  }

  // Past Score - based on 52 week performance
  const week52High = metrics['52WeekHigh'];
  const week52Low = metrics['52WeekLow'];
  const price = quote.c;

  if (week52High && week52Low && price) {
    const range = week52High - week52Low;
    const position = range > 0 ? (price - week52Low) / range : 0.5;
    scores.past = Math.round(40 + (position * 50));
  }

  // Health Score - based on current ratio and debt metrics
  const currentRatio = metrics.currentRatioQuarterly;
  if (currentRatio) {
    if (currentRatio > 2) scores.health = 85;
    else if (currentRatio > 1.5) scores.health = 75;
    else if (currentRatio > 1) scores.health = 60;
    else scores.health = 40;
  }

  // Future score based on recent momentum
  const changePercent = quote.dp || 0;
  if (changePercent > 2) scores.future = 70;
  else if (changePercent > 0) scores.future = 60;
  else if (changePercent > -2) scores.future = 45;
  else scores.future = 35;

  // Dividend score
  const dividendYield = metrics.dividendYieldIndicatedAnnual;
  if (dividendYield) {
    scores.dividend = Math.min(100, Math.round(dividendYield * 20));
  }

  return scores;
}

// Generate analysis details from quote and metrics
function generateAnalysis(quote, metrics, scores) {
  const price = quote.c || 0;
  const pe = metrics.peBasicExclExtraTTM || metrics.peTTM || metrics.peNormalizedAnnual;
  const forwardPe = metrics.forwardPE || metrics.peExclExtraAnnual;

  return {
    value: {
      score: scores.value,
      summary: pe ? `P/E ratio of ${pe.toFixed(1)}` : 'Valuation data limited',
      details: [
        { label: 'P/E Ratio', value: pe ? pe.toFixed(2) : 'N/A', status: pe && pe < 20 ? 'good' : 'fair' },
        { label: 'Forward P/E', value: forwardPe ? forwardPe.toFixed(2) : 'N/A', status: 'fair' },
        { label: 'P/B Ratio', value: metrics.pbQuarterly ? metrics.pbQuarterly.toFixed(2) : 'N/A', status: 'fair' },
        { label: 'P/S Ratio', value: metrics.psAnnual ? metrics.psAnnual.toFixed(2) : 'N/A', status: 'fair' }
      ]
    },
    future: {
      score: scores.future,
      summary: quote.dp >= 0 ? 'Positive momentum' : 'Negative momentum',
      details: [
        { label: 'Day Change', value: `${quote.dp >= 0 ? '+' : ''}${(quote.dp || 0).toFixed(2)}%`, status: quote.dp >= 0 ? 'good' : 'poor' },
        { label: 'Day High', value: quote.h ? `$${quote.h.toFixed(2)}` : 'N/A', status: 'fair' },
        { label: 'Day Low', value: quote.l ? `$${quote.l.toFixed(2)}` : 'N/A', status: 'fair' },
        { label: 'Open', value: quote.o ? `$${quote.o.toFixed(2)}` : 'N/A', status: 'fair' }
      ]
    },
    past: {
      score: scores.past,
      summary: '52-week performance',
      details: [
        { label: '52 Week High', value: metrics['52WeekHigh'] ? `$${metrics['52WeekHigh'].toFixed(2)}` : 'N/A', status: 'fair' },
        { label: '52 Week Low', value: metrics['52WeekLow'] ? `$${metrics['52WeekLow'].toFixed(2)}` : 'N/A', status: 'fair' },
        { label: 'Beta', value: metrics.beta ? metrics.beta.toFixed(2) : 'N/A', status: 'fair' },
        { label: '10D Avg Vol', value: metrics['10DayAverageTradingVolume'] ? `${(metrics['10DayAverageTradingVolume']).toFixed(1)}M` : 'N/A', status: 'fair' }
      ]
    },
    health: {
      score: scores.health,
      summary: 'Financial health metrics',
      details: [
        { label: 'Current Ratio', value: metrics.currentRatioQuarterly ? metrics.currentRatioQuarterly.toFixed(2) : 'N/A', status: metrics.currentRatioQuarterly > 1.5 ? 'good' : 'fair' },
        { label: 'Debt/Equity', value: metrics.totalDebtToEquityQuarterly ? metrics.totalDebtToEquityQuarterly.toFixed(2) : 'N/A', status: 'fair' },
        { label: 'ROE', value: metrics.roeTTM ? `${metrics.roeTTM.toFixed(1)}%` : 'N/A', status: metrics.roeTTM > 15 ? 'good' : 'fair' },
        { label: 'ROA', value: metrics.roaTTM ? `${metrics.roaTTM.toFixed(1)}%` : 'N/A', status: 'fair' }
      ]
    },
    dividend: {
      score: scores.dividend,
      summary: metrics.dividendYieldIndicatedAnnual ? `${metrics.dividendYieldIndicatedAnnual.toFixed(2)}% yield` : 'No dividend data',
      details: [
        { label: 'Dividend Yield', value: metrics.dividendYieldIndicatedAnnual ? `${metrics.dividendYieldIndicatedAnnual.toFixed(2)}%` : 'N/A', status: 'fair' },
        { label: 'Payout Ratio', value: metrics.payoutRatioAnnual ? `${metrics.payoutRatioAnnual.toFixed(1)}%` : 'N/A', status: 'fair' },
        { label: 'Div Growth 5Y', value: metrics.dividendGrowthRate5Y ? `${metrics.dividendGrowthRate5Y.toFixed(1)}%` : 'N/A', status: 'fair' },
        { label: 'Div Per Share', value: metrics.dividendPerShareAnnual ? `$${metrics.dividendPerShareAnnual.toFixed(2)}` : 'N/A', status: 'fair' }
      ]
    }
  };
}

function formatLargeNumber(num) {
  if (!num) return 'N/A';
  if (num >= 1e12) return '$' + (num / 1e12).toFixed(2) + 'T';
  if (num >= 1e9) return '$' + (num / 1e9).toFixed(1) + 'B';
  if (num >= 1e6) return '$' + (num / 1e6).toFixed(1) + 'M';
  return '$' + num.toLocaleString();
}

// Transform Finnhub quote to our stock format
function transformQuote(symbol, quote, profile, metrics) {
  const price = quote.c || 0;
  const prevClose = quote.pc || price;
  const change = quote.d || (price - prevClose);
  const changePercent = quote.dp || (prevClose ? (change / prevClose) * 100 : 0);
  const scores = calculateScores(quote, metrics);

  return {
    symbol: symbol,
    name: profile?.name || symbol,
    sector: SECTOR_MAP[symbol] || profile?.finnhubIndustry || 'Other',
    industry: INDUSTRY_MAP[symbol] || profile?.finnhubIndustry || 'Other',
    country: profile?.country || 'US',
    price: price,
    change: change,
    changePercent: changePercent,
    marketCap: profile?.marketCapitalization ? profile.marketCapitalization * 1e6 : 0,
    pe: metrics.peBasicExclExtraTTM || metrics.peTTM || 0,
    forwardPe: metrics.forwardPE || 0,
    dividend: metrics.dividendPerShareAnnual || 0,
    dividendYield: metrics.dividendYieldIndicatedAnnual || 0,
    beta: metrics.beta || 1,
    week52High: metrics['52WeekHigh'] || quote.h || 0,
    week52Low: metrics['52WeekLow'] || quote.l || 0,
    avgVolume: metrics['10DayAverageTradingVolume'] ? metrics['10DayAverageTradingVolume'] * 1e6 : 0,
    volume: 0, // Finnhub quote doesn't include volume
    open: quote.o || 0,
    high: quote.h || 0,
    low: quote.l || 0,
    bid: 0,
    ask: 0,
    description: profile?.name || `${symbol} stock`,
    logo: profile?.logo || '',
    weburl: profile?.weburl || '',
    scores,
    analysis: generateAnalysis(quote, metrics, scores),
    lastUpdated: new Date().toISOString(),
    news: []
  };
}

// Fetch quotes for multiple symbols
export async function fetchQuotes(symbols = SUPPORTED_SYMBOLS) {
  if (!isApiConfigured()) {
    throw new Error('Please configure your Finnhub API key in .env file (VITE_FINNHUB_API_KEY)');
  }

  const results = [];

  // Finnhub requires individual requests per symbol
  // Process in batches to respect rate limits
  const batchSize = 10;

  for (let i = 0; i < symbols.length; i += batchSize) {
    const batch = symbols.slice(i, i + batchSize);

    const batchPromises = batch.map(async (symbol) => {
      try {
        const [quote, profile, metrics] = await Promise.all([
          finnhubFetch('/quote', { symbol }),
          getCompanyProfile(symbol),
          getBasicFinancials(symbol)
        ]);

        if (quote && quote.c) {
          return transformQuote(symbol, quote, profile, metrics);
        }
        return null;
      } catch (error) {
        console.warn(`Failed to fetch ${symbol}:`, error.message);
        return null;
      }
    });

    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults.filter(r => r !== null));

    // Small delay between batches to avoid rate limiting
    if (i + batchSize < symbols.length) {
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }

  return results;
}

// Fetch a single stock quote
export async function fetchQuote(symbol) {
  if (!isApiConfigured()) {
    throw new Error('Please configure your Finnhub API key');
  }

  const [quote, profile, metrics] = await Promise.all([
    finnhubFetch('/quote', { symbol }),
    getCompanyProfile(symbol),
    getBasicFinancials(symbol)
  ]);

  if (quote && quote.c) {
    return transformQuote(symbol, quote, profile, metrics);
  }

  throw new Error('Stock not found');
}

// Search for stocks
export async function searchStocks(query) {
  if (!isApiConfigured()) {
    return [];
  }

  try {
    const data = await finnhubFetch('/search', { q: query });

    if (data && data.result) {
      return data.result
        .filter(r => r.type === 'Common Stock')
        .slice(0, 10)
        .map(r => ({
          symbol: r.symbol,
          name: r.description,
          exchange: r.displaySymbol
        }));
    }

    return [];
  } catch (error) {
    console.error('Error searching stocks:', error);
    return [];
  }
}

// Fetch historical data for charts (candles)
export async function fetchHistoricalData(symbol, range = '1mo', interval = '1d') {
  if (!isApiConfigured()) {
    throw new Error('Please configure your Finnhub API key');
  }

  // Calculate date range
  const end = Math.floor(Date.now() / 1000);
  let start = end;
  let resolution = 'D';

  switch (range) {
    case '1d':
      start = end - 86400;
      resolution = '5';
      break;
    case '5d':
      start = end - 5 * 86400;
      resolution = '15';
      break;
    case '1mo':
      start = end - 30 * 86400;
      resolution = 'D';
      break;
    case '3mo':
      start = end - 90 * 86400;
      resolution = 'D';
      break;
    case '6mo':
      start = end - 180 * 86400;
      resolution = 'D';
      break;
    case '1y':
      start = end - 365 * 86400;
      resolution = 'W';
      break;
    case '5y':
      start = end - 5 * 365 * 86400;
      resolution = 'M';
      break;
    default:
      start = end - 30 * 86400;
      resolution = 'D';
  }

  const data = await finnhubFetch('/stock/candle', {
    symbol,
    resolution,
    from: start,
    to: end
  });

  if (data && data.s === 'ok' && data.t) {
    return data.t.map((timestamp, i) => ({
      date: new Date(timestamp * 1000).toISOString().split('T')[0],
      open: data.o[i],
      high: data.h[i],
      low: data.l[i],
      close: data.c[i],
      volume: data.v[i]
    }));
  }

  return [];
}
