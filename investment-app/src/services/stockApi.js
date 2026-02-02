// Stock API Service - Fetches real-time stock data
// Uses Finnhub API

const FINNHUB_API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;
const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';

// List of supported stock symbols
export const SUPPORTED_SYMBOLS = [
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'NVDA', 'META', 'TSLA',
  'JPM', 'JNJ', 'V', 'PG', 'UNH', 'HD', 'MA', 'XOM', 'CVX', 'KO',
  'PEP', 'ABBV', 'MRK', 'COST', 'AVGO', 'LLY', 'WMT', 'BAC', 'PFE',
  'TMO', 'CSCO', 'ACN', 'MCD', 'CRM', 'ABT', 'DHR', 'ADBE', 'NFLX',
  'NKE', 'DIS', 'TXN', 'INTC', 'AMD', 'QCOM', 'ORCL', 'IBM'
];

// Sector mappings for stocks
const SECTOR_MAP = {
  'AAPL': 'Technology', 'MSFT': 'Technology', 'GOOGL': 'Technology',
  'AMZN': 'Consumer Cyclical', 'NVDA': 'Technology', 'META': 'Technology',
  'TSLA': 'Consumer Cyclical', 'JPM': 'Financials',
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
  'TSLA': 'Auto Manufacturers', 'JPM': 'Banks',
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

// Cache for profile data to reduce API calls
const profileCache = new Map();

// Rate limiting - Finnhub free tier is 60 calls/minute
let lastCallTime = 0;
const MIN_CALL_INTERVAL = 100; // ms between calls

async function rateLimitedFetch(url) {
  const now = Date.now();
  const timeSinceLastCall = now - lastCallTime;

  if (timeSinceLastCall < MIN_CALL_INTERVAL) {
    await new Promise(resolve => setTimeout(resolve, MIN_CALL_INTERVAL - timeSinceLastCall));
  }

  lastCallTime = Date.now();
  return fetch(url);
}

// Fetch company profile from Finnhub
async function fetchProfile(symbol) {
  if (profileCache.has(symbol)) {
    return profileCache.get(symbol);
  }

  try {
    const response = await rateLimitedFetch(
      `${FINNHUB_BASE_URL}/stock/profile2?symbol=${symbol}&token=${FINNHUB_API_KEY}`
    );

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const profile = await response.json();
    profileCache.set(symbol, profile);
    return profile;
  } catch (error) {
    console.error(`Error fetching profile for ${symbol}:`, error);
    return null;
  }
}

// Calculate analysis scores based on metrics
function calculateScores(quote, profile) {
  const scores = {
    value: 50,
    future: 50,
    past: 50,
    health: 50,
    dividend: 0
  };

  // Value Score - based on change percentage
  const changePercent = quote.dp || 0;
  if (changePercent > 2) scores.value = 75;
  else if (changePercent > 0) scores.value = 60;
  else if (changePercent > -2) scores.value = 45;
  else scores.value = 30;

  // Past Score - based on 52 week performance
  const yearHigh = quote.h;
  const yearLow = quote.l;
  const price = quote.c;

  if (yearHigh && yearLow && price && yearHigh !== yearLow) {
    const range = yearHigh - yearLow;
    const position = (price - yearLow) / range;
    scores.past = Math.round(40 + (position * 50));
  }

  // Health Score - based on market cap from profile
  if (profile && profile.marketCapitalization) {
    const marketCap = profile.marketCapitalization * 1e6; // Finnhub returns in millions
    if (marketCap > 1e12) scores.health = 90;
    else if (marketCap > 200e9) scores.health = 80;
    else if (marketCap > 50e9) scores.health = 70;
    else if (marketCap > 10e9) scores.health = 60;
    else scores.health = 50;
  }

  // Future Score - based on current momentum
  if (quote.c > quote.pc) {
    scores.future = 65;
  } else {
    scores.future = 45;
  }

  return scores;
}

// Generate analysis details
function generateAnalysis(quote, profile, scores) {
  const price = quote.c || 0;
  const change = quote.d || 0;
  const changePercent = quote.dp || 0;
  const high = quote.h || 0;
  const low = quote.l || 0;
  const prevClose = quote.pc || 0;

  return {
    value: {
      score: scores.value,
      summary: scores.value >= 60 ? 'Positive momentum' : 'Under pressure',
      details: [
        { label: 'Current Price', value: '$' + price.toFixed(2), status: change >= 0 ? 'good' : 'fair' },
        { label: 'Change', value: (change >= 0 ? '+' : '') + change.toFixed(2), status: change >= 0 ? 'good' : 'poor' },
        { label: 'Change %', value: (changePercent >= 0 ? '+' : '') + changePercent.toFixed(2) + '%', status: changePercent >= 0 ? 'good' : 'poor' },
        { label: 'Previous Close', value: '$' + prevClose.toFixed(2), status: 'fair' }
      ]
    },
    future: {
      score: scores.future,
      summary: scores.future >= 60 ? 'Positive outlook' : 'Mixed signals',
      details: [
        { label: 'Day High', value: '$' + high.toFixed(2), status: 'fair' },
        { label: 'Day Low', value: '$' + low.toFixed(2), status: 'fair' },
        { label: 'Open', value: '$' + (quote.o || 0).toFixed(2), status: 'fair' },
        { label: 'Trend', value: price > prevClose ? 'Bullish' : 'Bearish', status: price > prevClose ? 'good' : 'poor' }
      ]
    },
    past: {
      score: scores.past,
      summary: scores.past >= 60 ? 'Strong performance' : 'Mixed results',
      details: [
        { label: 'Day Range', value: `$${low.toFixed(2)} - $${high.toFixed(2)}`, status: 'fair' },
        { label: 'Previous Close', value: '$' + prevClose.toFixed(2), status: 'fair' },
        { label: 'Day Change', value: '$' + change.toFixed(2), status: change >= 0 ? 'good' : 'poor' },
        { label: 'Performance', value: changePercent.toFixed(2) + '%', status: changePercent >= 0 ? 'good' : 'poor' }
      ]
    },
    health: {
      score: scores.health,
      summary: profile ? 'Established company' : 'Data pending',
      details: [
        { label: 'Market Cap', value: profile?.marketCapitalization ? formatLargeNumber(profile.marketCapitalization * 1e6) : 'N/A', status: 'good' },
        { label: 'Industry', value: profile?.finnhubIndustry || INDUSTRY_MAP[quote.symbol] || 'N/A', status: 'fair' },
        { label: 'Exchange', value: profile?.exchange || 'US', status: 'fair' },
        { label: 'IPO Date', value: profile?.ipo || 'N/A', status: 'fair' }
      ]
    },
    dividend: {
      score: scores.dividend,
      summary: 'Dividend data via profile',
      details: [
        { label: 'Status', value: 'See company details', status: 'fair' }
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
function transformQuote(symbol, quote, profile) {
  const scores = calculateScores(quote, profile);

  return {
    symbol: symbol,
    name: profile?.name || symbol,
    sector: SECTOR_MAP[symbol] || profile?.finnhubIndustry || 'Other',
    industry: INDUSTRY_MAP[symbol] || profile?.finnhubIndustry || 'Other',
    country: profile?.country || 'US',
    price: quote.c || 0,
    change: quote.d || 0,
    changePercent: quote.dp || 0,
    marketCap: profile?.marketCapitalization ? profile.marketCapitalization * 1e6 : 0,
    pe: 0, // Would need separate metrics API
    forwardPe: 0,
    dividend: 0,
    dividendYield: 0,
    beta: 1,
    week52High: quote.h || 0,
    week52Low: quote.l || 0,
    avgVolume: 0,
    description: profile?.name ? `${profile.name} (${symbol}) - ${profile.finnhubIndustry || 'Public Company'}` : `${symbol} stock`,
    scores,
    analysis: generateAnalysis(quote, profile, scores),
    lastUpdated: new Date().toISOString(),
    news: []
  };
}

// Fetch a single stock quote
export async function fetchQuote(symbol) {
  try {
    const response = await rateLimitedFetch(
      `${FINNHUB_BASE_URL}/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const quote = await response.json();

    if (!quote || quote.c === 0) {
      throw new Error('Stock not found or no data');
    }

    // Fetch profile for additional data
    const profile = await fetchProfile(symbol);

    return transformQuote(symbol, quote, profile);
  } catch (error) {
    console.error(`Error fetching quote for ${symbol}:`, error);
    throw error;
  }
}

// Fetch quotes for multiple symbols
export async function fetchQuotes(symbols = SUPPORTED_SYMBOLS) {
  const results = [];

  // Fetch in batches to respect rate limits
  for (const symbol of symbols) {
    try {
      const stock = await fetchQuote(symbol);
      results.push(stock);
    } catch (error) {
      console.warn(`Skipping ${symbol}:`, error.message);
    }
  }

  return results;
}

// Search for stocks
export async function searchStocks(query) {
  try {
    const response = await rateLimitedFetch(
      `${FINNHUB_BASE_URL}/search?q=${encodeURIComponent(query)}&token=${FINNHUB_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.result) {
      return data.result
        .filter(item => item.type === 'Common Stock')
        .slice(0, 10)
        .map(item => ({
          symbol: item.symbol,
          name: item.description,
          exchange: item.displaySymbol
        }));
    }

    return [];
  } catch (error) {
    console.error('Error searching stocks:', error);
    return [];
  }
}

// Fetch historical data for charts
export async function fetchHistoricalData(symbol, range = '1mo', interval = '1d') {
  try {
    // Calculate timestamps based on range
    const now = Math.floor(Date.now() / 1000);
    let from;
    let resolution = 'D'; // Daily

    switch (range) {
      case '1d':
        from = now - 86400;
        resolution = '5'; // 5 minutes
        break;
      case '5d':
        from = now - 5 * 86400;
        resolution = '15'; // 15 minutes
        break;
      case '1mo':
        from = now - 30 * 86400;
        resolution = 'D';
        break;
      case '3mo':
        from = now - 90 * 86400;
        resolution = 'D';
        break;
      case '6mo':
        from = now - 180 * 86400;
        resolution = 'D';
        break;
      case '1y':
        from = now - 365 * 86400;
        resolution = 'W'; // Weekly
        break;
      default:
        from = now - 30 * 86400;
    }

    const response = await rateLimitedFetch(
      `${FINNHUB_BASE_URL}/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${now}&token=${FINNHUB_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.s === 'ok' && data.t) {
      return data.t.map((timestamp, i) => ({
        date: new Date(timestamp * 1000).toISOString(),
        open: data.o[i],
        high: data.h[i],
        low: data.l[i],
        close: data.c[i],
        volume: data.v[i]
      }));
    }

    throw new Error('No chart data available');
  } catch (error) {
    console.error(`Error fetching historical data for ${symbol}:`, error);
    throw error;
  }
}
