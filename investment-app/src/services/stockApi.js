// Stock API Service - Fetches real-time stock data
// Uses Yahoo Finance API via query endpoints

const YAHOO_QUOTE_URL = 'https://query1.finance.yahoo.com/v7/finance/quote';
const YAHOO_CHART_URL = 'https://query1.finance.yahoo.com/v8/finance/chart';

// CORS proxy for development (Yahoo blocks direct browser requests)
const CORS_PROXY = 'https://corsproxy.io/?';

// List of supported stock symbols
export const SUPPORTED_SYMBOLS = [
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'NVDA', 'META', 'TSLA', 'BRK-B',
  'JPM', 'JNJ', 'V', 'PG', 'UNH', 'HD', 'MA', 'XOM', 'CVX', 'KO',
  'PEP', 'ABBV', 'MRK', 'COST', 'AVGO', 'LLY', 'WMT', 'BAC', 'PFE',
  'TMO', 'CSCO', 'ACN', 'MCD', 'CRM', 'ABT', 'DHR', 'ADBE', 'NFLX',
  'NKE', 'DIS', 'TXN', 'INTC', 'AMD', 'QCOM', 'ORCL', 'IBM'
];

// Sector mappings for stocks
const SECTOR_MAP = {
  'AAPL': 'Technology', 'MSFT': 'Technology', 'GOOGL': 'Technology',
  'AMZN': 'Consumer Cyclical', 'NVDA': 'Technology', 'META': 'Technology',
  'TSLA': 'Consumer Cyclical', 'BRK-B': 'Financials', 'JPM': 'Financials',
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
  'TSLA': 'Auto Manufacturers', 'BRK-B': 'Conglomerate', 'JPM': 'Banks',
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

// Calculate analysis scores based on real metrics
function calculateScores(quote) {
  const scores = {
    value: 50,
    future: 50,
    past: 50,
    health: 50,
    dividend: 0
  };

  // Value Score - based on P/E ratio
  const pe = quote.trailingPE || quote.forwardPE;
  if (pe) {
    if (pe < 15) scores.value = 85;
    else if (pe < 20) scores.value = 70;
    else if (pe < 30) scores.value = 55;
    else if (pe < 50) scores.value = 35;
    else scores.value = 20;
  }

  // Future Score - based on analyst recommendations and forward PE
  const forwardPE = quote.forwardPE;
  const targetPrice = quote.targetMeanPrice;
  const currentPrice = quote.regularMarketPrice;

  if (targetPrice && currentPrice) {
    const upside = ((targetPrice - currentPrice) / currentPrice) * 100;
    if (upside > 30) scores.future = 90;
    else if (upside > 20) scores.future = 75;
    else if (upside > 10) scores.future = 60;
    else if (upside > 0) scores.future = 45;
    else scores.future = 30;
  }

  // Past Score - based on 52 week performance
  const yearHigh = quote.fiftyTwoWeekHigh;
  const yearLow = quote.fiftyTwoWeekLow;
  const price = quote.regularMarketPrice;

  if (yearHigh && yearLow && price) {
    const range = yearHigh - yearLow;
    const position = (price - yearLow) / range;
    scores.past = Math.round(40 + (position * 50));
  }

  // Health Score - based on market cap and volume
  const marketCap = quote.marketCap;
  if (marketCap) {
    if (marketCap > 1e12) scores.health = 90;
    else if (marketCap > 200e9) scores.health = 80;
    else if (marketCap > 50e9) scores.health = 70;
    else if (marketCap > 10e9) scores.health = 60;
    else scores.health = 50;
  }

  // Dividend Score
  const divYield = quote.dividendYield;
  if (divYield && divYield > 0) {
    const yieldPercent = divYield * 100;
    if (yieldPercent > 4) scores.dividend = 90;
    else if (yieldPercent > 3) scores.dividend = 75;
    else if (yieldPercent > 2) scores.dividend = 60;
    else if (yieldPercent > 1) scores.dividend = 45;
    else scores.dividend = 30;
  }

  return scores;
}

// Generate analysis details based on real data
function generateAnalysis(quote, scores) {
  const pe = quote.trailingPE || 0;
  const forwardPE = quote.forwardPE || 0;
  const divYield = (quote.dividendYield || 0) * 100;
  const targetPrice = quote.targetMeanPrice || quote.regularMarketPrice;
  const price = quote.regularMarketPrice;

  const getStatus = (score) => {
    if (score >= 80) return 'excellent';
    if (score >= 60) return 'good';
    if (score >= 40) return 'fair';
    return 'poor';
  };

  return {
    value: {
      score: scores.value,
      summary: scores.value >= 60 ? 'Reasonably valued' : 'Trading at a premium',
      details: [
        { label: 'P/E Ratio', value: pe ? pe.toFixed(1) + 'x' : 'N/A', status: pe < 25 ? 'good' : 'fair' },
        { label: 'Forward P/E', value: forwardPE ? forwardPE.toFixed(1) + 'x' : 'N/A', status: forwardPE < 20 ? 'good' : 'fair' },
        { label: 'Price to Book', value: quote.priceToBook ? quote.priceToBook.toFixed(2) + 'x' : 'N/A', status: 'fair' },
        { label: 'EV/EBITDA', value: quote.enterpriseToEbitda ? quote.enterpriseToEbitda.toFixed(1) + 'x' : 'N/A', status: 'fair' }
      ]
    },
    future: {
      score: scores.future,
      summary: scores.future >= 60 ? 'Positive analyst outlook' : 'Mixed analyst sentiment',
      details: [
        { label: 'Price Target', value: '$' + targetPrice?.toFixed(2), status: targetPrice > price ? 'good' : 'fair' },
        { label: 'Upside Potential', value: (((targetPrice - price) / price) * 100).toFixed(1) + '%', status: targetPrice > price ? 'good' : 'poor' },
        { label: 'Analyst Rating', value: quote.recommendationKey?.replace('_', ' ') || 'N/A', status: 'fair' },
        { label: 'Number of Analysts', value: quote.numberOfAnalystOpinions?.toString() || 'N/A', status: 'fair' }
      ]
    },
    past: {
      score: scores.past,
      summary: scores.past >= 60 ? 'Strong historical performance' : 'Mixed track record',
      details: [
        { label: '52 Week High', value: '$' + quote.fiftyTwoWeekHigh?.toFixed(2), status: 'fair' },
        { label: '52 Week Low', value: '$' + quote.fiftyTwoWeekLow?.toFixed(2), status: 'fair' },
        { label: '50 Day Avg', value: '$' + quote.fiftyDayAverage?.toFixed(2), status: price > quote.fiftyDayAverage ? 'good' : 'fair' },
        { label: '200 Day Avg', value: '$' + quote.twoHundredDayAverage?.toFixed(2), status: price > quote.twoHundredDayAverage ? 'good' : 'fair' }
      ]
    },
    health: {
      score: scores.health,
      summary: scores.health >= 60 ? 'Strong financial position' : 'Adequate financial health',
      details: [
        { label: 'Market Cap', value: formatLargeNumber(quote.marketCap), status: 'good' },
        { label: 'Avg Volume', value: formatLargeNumber(quote.averageDailyVolume10Day), status: 'fair' },
        { label: 'Beta', value: quote.beta?.toFixed(2) || 'N/A', status: quote.beta < 1.5 ? 'good' : 'fair' },
        { label: 'Float', value: formatLargeNumber(quote.floatShares), status: 'fair' }
      ]
    },
    dividend: {
      score: scores.dividend,
      summary: scores.dividend > 0 ? `${divYield.toFixed(2)}% dividend yield` : 'No dividend',
      details: [
        { label: 'Dividend Yield', value: divYield.toFixed(2) + '%', status: divYield > 2 ? 'good' : 'fair' },
        { label: 'Annual Dividend', value: '$' + (quote.dividendRate || 0).toFixed(2), status: 'fair' },
        { label: 'Ex-Dividend Date', value: quote.exDividendDate ? new Date(quote.exDividendDate * 1000).toLocaleDateString() : 'N/A', status: 'neutral' },
        { label: 'Payout Ratio', value: quote.payoutRatio ? (quote.payoutRatio * 100).toFixed(0) + '%' : 'N/A', status: 'fair' }
      ]
    }
  };
}

function formatLargeNumber(num) {
  if (!num) return 'N/A';
  if (num >= 1e12) return '$' + (num / 1e12).toFixed(2) + 'T';
  if (num >= 1e9) return '$' + (num / 1e9).toFixed(1) + 'B';
  if (num >= 1e6) return '$' + (num / 1e6).toFixed(1) + 'M';
  return num.toLocaleString();
}

// Transform Yahoo Finance quote to our stock format
function transformQuote(quote) {
  const scores = calculateScores(quote);

  return {
    symbol: quote.symbol,
    name: quote.shortName || quote.longName || quote.symbol,
    sector: SECTOR_MAP[quote.symbol] || 'Other',
    industry: INDUSTRY_MAP[quote.symbol] || 'Other',
    country: 'US',
    price: quote.regularMarketPrice || 0,
    change: quote.regularMarketChange || 0,
    changePercent: quote.regularMarketChangePercent || 0,
    marketCap: quote.marketCap || 0,
    pe: quote.trailingPE || 0,
    forwardPe: quote.forwardPE || 0,
    dividend: quote.dividendRate || 0,
    dividendYield: (quote.dividendYield || 0) * 100,
    beta: quote.beta || 1,
    week52High: quote.fiftyTwoWeekHigh || 0,
    week52Low: quote.fiftyTwoWeekLow || 0,
    avgVolume: quote.averageDailyVolume10Day || 0,
    description: quote.longBusinessSummary || `${quote.shortName} is a publicly traded company.`,
    scores,
    analysis: generateAnalysis(quote, scores),
    lastUpdated: new Date().toISOString(),
    news: [] // News requires separate API call
  };
}

// Fetch quotes for multiple symbols
export async function fetchQuotes(symbols = SUPPORTED_SYMBOLS) {
  try {
    const symbolsStr = symbols.join(',');
    const url = `${CORS_PROXY}${encodeURIComponent(`${YAHOO_QUOTE_URL}?symbols=${symbolsStr}`)}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.quoteResponse && data.quoteResponse.result) {
      return data.quoteResponse.result.map(transformQuote);
    }

    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Error fetching quotes:', error);
    throw error;
  }
}

// Fetch a single stock quote
export async function fetchQuote(symbol) {
  try {
    const url = `${CORS_PROXY}${encodeURIComponent(`${YAHOO_QUOTE_URL}?symbols=${symbol}`)}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.quoteResponse && data.quoteResponse.result && data.quoteResponse.result[0]) {
      return transformQuote(data.quoteResponse.result[0]);
    }

    throw new Error('Stock not found');
  } catch (error) {
    console.error(`Error fetching quote for ${symbol}:`, error);
    throw error;
  }
}

// Search for stocks
export async function searchStocks(query) {
  try {
    const url = `${CORS_PROXY}${encodeURIComponent(`https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(query)}&quotesCount=10&newsCount=0`)}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.quotes) {
      return data.quotes
        .filter(q => q.quoteType === 'EQUITY' && q.exchange && q.exchange.includes('NAS') || q.exchange?.includes('NYQ'))
        .map(q => ({
          symbol: q.symbol,
          name: q.shortname || q.longname || q.symbol,
          exchange: q.exchange
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
    const url = `${CORS_PROXY}${encodeURIComponent(`${YAHOO_CHART_URL}/${symbol}?range=${range}&interval=${interval}`)}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.chart && data.chart.result && data.chart.result[0]) {
      const result = data.chart.result[0];
      const timestamps = result.timestamp || [];
      const quotes = result.indicators.quote[0] || {};

      return timestamps.map((ts, i) => ({
        date: new Date(ts * 1000).toISOString(),
        open: quotes.open?.[i],
        high: quotes.high?.[i],
        low: quotes.low?.[i],
        close: quotes.close?.[i],
        volume: quotes.volume?.[i]
      })).filter(d => d.close !== null);
    }

    throw new Error('No chart data available');
  } catch (error) {
    console.error(`Error fetching historical data for ${symbol}:`, error);
    throw error;
  }
}
