import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useInvestmentStore = create(
  persist(
    (set, get) => ({
      // Portfolio holdings
      portfolio: [],

      // Watchlist
      watchlist: [],

      // Recent searches
      recentSearches: [],

      // Screener filters
      screenerFilters: {
        minMarketCap: null,
        maxMarketCap: null,
        minScore: null,
        sectors: [],
        countries: []
      },

      // Portfolio actions
      addToPortfolio: (stock, shares, avgPrice) => {
        const existing = get().portfolio.find(p => p.symbol === stock.symbol);
        if (existing) {
          // Update existing position
          const totalShares = existing.shares + shares;
          const totalCost = (existing.shares * existing.avgPrice) + (shares * avgPrice);
          const newAvgPrice = totalCost / totalShares;

          set(state => ({
            portfolio: state.portfolio.map(p =>
              p.symbol === stock.symbol
                ? { ...p, shares: totalShares, avgPrice: newAvgPrice }
                : p
            )
          }));
        } else {
          set(state => ({
            portfolio: [...state.portfolio, {
              symbol: stock.symbol,
              name: stock.name,
              shares,
              avgPrice,
              addedAt: new Date().toISOString()
            }]
          }));
        }
      },

      removeFromPortfolio: (symbol) => {
        set(state => ({
          portfolio: state.portfolio.filter(p => p.symbol !== symbol)
        }));
      },

      updatePortfolioPosition: (symbol, shares, avgPrice) => {
        set(state => ({
          portfolio: state.portfolio.map(p =>
            p.symbol === symbol ? { ...p, shares, avgPrice } : p
          )
        }));
      },

      // Watchlist actions
      addToWatchlist: (stock) => {
        const exists = get().watchlist.find(w => w.symbol === stock.symbol);
        if (!exists) {
          set(state => ({
            watchlist: [...state.watchlist, {
              symbol: stock.symbol,
              name: stock.name,
              addedAt: new Date().toISOString()
            }]
          }));
        }
      },

      removeFromWatchlist: (symbol) => {
        set(state => ({
          watchlist: state.watchlist.filter(w => w.symbol !== symbol)
        }));
      },

      isInWatchlist: (symbol) => {
        return get().watchlist.some(w => w.symbol === symbol);
      },

      isInPortfolio: (symbol) => {
        return get().portfolio.some(p => p.symbol === symbol);
      },

      getPortfolioPosition: (symbol) => {
        return get().portfolio.find(p => p.symbol === symbol);
      },

      // Search history
      addRecentSearch: (symbol) => {
        set(state => {
          const filtered = state.recentSearches.filter(s => s !== symbol);
          return {
            recentSearches: [symbol, ...filtered].slice(0, 10)
          };
        });
      },

      // Screener filters
      setScreenerFilters: (filters) => {
        set(state => ({
          screenerFilters: { ...state.screenerFilters, ...filters }
        }));
      },

      resetScreenerFilters: () => {
        set({
          screenerFilters: {
            minMarketCap: null,
            maxMarketCap: null,
            minScore: null,
            sectors: [],
            countries: []
          }
        });
      },

      // Calculate portfolio stats
      getPortfolioStats: (stocks) => {
        const portfolio = get().portfolio;
        if (portfolio.length === 0) return null;

        let totalValue = 0;
        let totalCost = 0;
        let holdings = [];

        portfolio.forEach(position => {
          const stock = stocks.find(s => s.symbol === position.symbol);
          if (stock) {
            const currentValue = position.shares * stock.price;
            const costBasis = position.shares * position.avgPrice;
            totalValue += currentValue;
            totalCost += costBasis;
            holdings.push({
              ...position,
              stock,
              currentValue,
              costBasis,
              gain: currentValue - costBasis,
              gainPercent: ((currentValue - costBasis) / costBasis) * 100
            });
          }
        });

        return {
          totalValue,
          totalCost,
          totalGain: totalValue - totalCost,
          totalGainPercent: totalCost > 0 ? ((totalValue - totalCost) / totalCost) * 100 : 0,
          holdings: holdings.sort((a, b) => b.currentValue - a.currentValue)
        };
      }
    }),
    {
      name: 'investment-store',
      version: 1
    }
  )
);

export default useInvestmentStore;
