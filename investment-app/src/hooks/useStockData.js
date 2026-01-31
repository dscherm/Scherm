import { create } from 'zustand';
import { fetchQuotes, fetchQuote, SUPPORTED_SYMBOLS } from '../services/stockApi';

// Stock data store with auto-refresh
const useStockData = create((set, get) => ({
  // Stock data
  stocks: [],
  stockMap: {}, // Quick lookup by symbol

  // Loading states
  isLoading: false,
  isRefreshing: false,
  error: null,

  // Last update time
  lastUpdated: null,

  // Refresh interval (in ms) - default 60 seconds
  refreshInterval: 60000,

  // Initialize and fetch all stocks
  initialize: async () => {
    const { stocks, isLoading } = get();

    // Skip if already loading or have recent data
    if (isLoading) return;
    if (stocks.length > 0) {
      set({ isRefreshing: true });
    } else {
      set({ isLoading: true });
    }

    try {
      const data = await fetchQuotes(SUPPORTED_SYMBOLS);

      const stockMap = {};
      data.forEach(stock => {
        stockMap[stock.symbol] = stock;
      });

      set({
        stocks: data,
        stockMap,
        isLoading: false,
        isRefreshing: false,
        error: null,
        lastUpdated: new Date()
      });
    } catch (error) {
      console.error('Failed to fetch stocks:', error);
      set({
        isLoading: false,
        isRefreshing: false,
        error: error.message
      });
    }
  },

  // Refresh stock data
  refresh: async () => {
    const { isRefreshing } = get();
    if (isRefreshing) return;

    set({ isRefreshing: true });

    try {
      const data = await fetchQuotes(SUPPORTED_SYMBOLS);

      const stockMap = {};
      data.forEach(stock => {
        stockMap[stock.symbol] = stock;
      });

      set({
        stocks: data,
        stockMap,
        isRefreshing: false,
        error: null,
        lastUpdated: new Date()
      });
    } catch (error) {
      console.error('Failed to refresh stocks:', error);
      set({ isRefreshing: false, error: error.message });
    }
  },

  // Fetch a single stock (with cache)
  fetchStock: async (symbol) => {
    const { stockMap } = get();

    // Return cached if recent
    if (stockMap[symbol]) {
      return stockMap[symbol];
    }

    try {
      const stock = await fetchQuote(symbol);

      set(state => ({
        stocks: [...state.stocks.filter(s => s.symbol !== symbol), stock],
        stockMap: { ...state.stockMap, [symbol]: stock }
      }));

      return stock;
    } catch (error) {
      console.error(`Failed to fetch ${symbol}:`, error);
      throw error;
    }
  },

  // Get stock by symbol
  getStock: (symbol) => {
    return get().stockMap[symbol] || null;
  },

  // Get all stocks
  getAllStocks: () => {
    return get().stocks;
  },

  // Search stocks
  searchStocks: (query) => {
    const { stocks } = get();
    const lowerQuery = query.toLowerCase();

    return stocks.filter(stock =>
      stock.symbol.toLowerCase().includes(lowerQuery) ||
      stock.name.toLowerCase().includes(lowerQuery) ||
      stock.sector.toLowerCase().includes(lowerQuery)
    );
  },

  // Filter stocks
  filterStocks: (filters) => {
    const { stocks } = get();

    return stocks.filter(stock => {
      if (filters.minMarketCap && stock.marketCap < filters.minMarketCap) return false;
      if (filters.maxMarketCap && stock.marketCap > filters.maxMarketCap) return false;
      if (filters.minScore) {
        const score = getOverallScore(stock.scores);
        if (score < filters.minScore) return false;
      }
      if (filters.sectors?.length > 0 && !filters.sectors.includes(stock.sector)) return false;
      if (filters.minDividend && stock.dividendYield < filters.minDividend) return false;
      return true;
    });
  },

  // Get stocks by symbols
  getStocksBySymbols: (symbols) => {
    const { stockMap } = get();
    return symbols.map(s => stockMap[s]).filter(Boolean);
  },

  // Clear error
  clearError: () => set({ error: null })
}));

// Helper function to calculate overall score
export function getOverallScore(scores) {
  if (!scores) return 0;

  const weights = { value: 0.2, future: 0.25, past: 0.2, health: 0.2, dividend: 0.15 };
  let totalScore = 0;
  let totalWeight = 0;

  Object.entries(weights).forEach(([key, weight]) => {
    if (scores[key] > 0) {
      totalScore += scores[key] * weight;
      totalWeight += weight;
    } else if (key === 'dividend' && scores[key] === 0) {
      // Redistribute weight for non-dividend stocks
      totalWeight += 0;
    } else {
      totalScore += scores[key] * weight;
      totalWeight += weight;
    }
  });

  return totalWeight > 0 ? Math.round(totalScore / totalWeight * (1 / 0.85)) : 0;
}

// Helper functions for formatting
export function formatMarketCap(value) {
  if (!value) return 'N/A';
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
  return `$${value.toLocaleString()}`;
}

export function formatPrice(value) {
  if (value === undefined || value === null) return 'N/A';
  return `$${value.toFixed(2)}`;
}

export function formatPercent(value) {
  if (value === undefined || value === null) return 'N/A';
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
}

export function getScoreColor(score) {
  if (score >= 80) return 'text-score-excellent';
  if (score >= 60) return 'text-score-good';
  if (score >= 40) return 'text-score-fair';
  return 'text-score-poor';
}

export function getScoreBgColor(score) {
  if (score >= 80) return 'bg-score-excellent';
  if (score >= 60) return 'bg-score-good';
  if (score >= 40) return 'bg-score-fair';
  return 'bg-score-poor';
}

export function getAllSectors(stocks) {
  return [...new Set(stocks.map(s => s.sector))];
}

export default useStockData;
