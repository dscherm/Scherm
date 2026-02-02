import { create } from 'zustand';
import {
  fetchRecentContracts,
  fetchCongressionalTrades,
  fetchRecentBills,
  fetchPoliticalSentiment,
  fetchTradesBySymbol
} from '../services/politicalApi';

const usePoliticalData = create((set, get) => ({
  // Data
  contracts: [],
  trades: [],
  bills: [],
  sectorSentiment: [],

  // Loading states
  loading: {
    contracts: false,
    trades: false,
    bills: false,
    sentiment: false
  },

  // Errors
  errors: {
    contracts: null,
    trades: null,
    bills: null,
    sentiment: null
  },

  // Last updated timestamps
  lastUpdated: {
    contracts: null,
    trades: null,
    bills: null,
    sentiment: null
  },

  // Filters
  filters: {
    contractMinAmount: 10000000, // $10M minimum
    tradeParty: 'all', // 'all', 'D', 'R'
    tradeChamber: 'all', // 'all', 'House', 'Senate'
    tradeType: 'all', // 'all', 'Purchase', 'Sale'
    billSentiment: 'all', // 'all', 'bullish', 'bearish', 'neutral'
    billSector: 'all',
    showUnusualOnly: false
  },

  // Actions
  setFilter: (key, value) => set(state => ({
    filters: { ...state.filters, [key]: value }
  })),

  resetFilters: () => set({
    filters: {
      contractMinAmount: 10000000,
      tradeParty: 'all',
      tradeChamber: 'all',
      tradeType: 'all',
      billSentiment: 'all',
      billSector: 'all',
      showUnusualOnly: false
    }
  }),

  // Fetch contracts
  fetchContracts: async (limit = 20) => {
    set(state => ({
      loading: { ...state.loading, contracts: true },
      errors: { ...state.errors, contracts: null }
    }));

    try {
      const contracts = await fetchRecentContracts(limit);
      set(state => ({
        contracts,
        loading: { ...state.loading, contracts: false },
        lastUpdated: { ...state.lastUpdated, contracts: new Date().toISOString() }
      }));
      return contracts;
    } catch (error) {
      set(state => ({
        loading: { ...state.loading, contracts: false },
        errors: { ...state.errors, contracts: error.message }
      }));
      return [];
    }
  },

  // Fetch congressional trades
  fetchTrades: async (limit = 50) => {
    set(state => ({
      loading: { ...state.loading, trades: true },
      errors: { ...state.errors, trades: null }
    }));

    try {
      const trades = await fetchCongressionalTrades(limit);
      set(state => ({
        trades,
        loading: { ...state.loading, trades: false },
        lastUpdated: { ...state.lastUpdated, trades: new Date().toISOString() }
      }));
      return trades;
    } catch (error) {
      set(state => ({
        loading: { ...state.loading, trades: false },
        errors: { ...state.errors, trades: error.message }
      }));
      return [];
    }
  },

  // Fetch bills
  fetchBills: async (limit = 20) => {
    set(state => ({
      loading: { ...state.loading, bills: true },
      errors: { ...state.errors, bills: null }
    }));

    try {
      const bills = await fetchRecentBills(limit);
      set(state => ({
        bills,
        loading: { ...state.loading, bills: false },
        lastUpdated: { ...state.lastUpdated, bills: new Date().toISOString() }
      }));
      return bills;
    } catch (error) {
      set(state => ({
        loading: { ...state.loading, bills: false },
        errors: { ...state.errors, bills: error.message }
      }));
      return [];
    }
  },

  // Fetch sector sentiment
  fetchSentiment: async () => {
    set(state => ({
      loading: { ...state.loading, sentiment: true },
      errors: { ...state.errors, sentiment: null }
    }));

    try {
      const sectorSentiment = await fetchPoliticalSentiment();
      set(state => ({
        sectorSentiment,
        loading: { ...state.loading, sentiment: false },
        lastUpdated: { ...state.lastUpdated, sentiment: new Date().toISOString() }
      }));
      return sectorSentiment;
    } catch (error) {
      set(state => ({
        loading: { ...state.loading, sentiment: false },
        errors: { ...state.errors, sentiment: error.message }
      }));
      return [];
    }
  },

  // Fetch all data
  fetchAll: async () => {
    const { fetchContracts, fetchTrades, fetchBills, fetchSentiment } = get();
    await Promise.all([
      fetchContracts(),
      fetchTrades(),
      fetchBills(),
      fetchSentiment()
    ]);
  },

  // Get trades for a specific stock
  getTradesForSymbol: async (symbol) => {
    return await fetchTradesBySymbol(symbol);
  },

  // Computed getters
  getFilteredContracts: () => {
    const { contracts, filters } = get();
    return contracts.filter(c =>
      (c.amount || 0) >= filters.contractMinAmount
    );
  },

  getFilteredTrades: () => {
    const { trades, filters } = get();
    return trades.filter(trade => {
      if (filters.tradeParty !== 'all' && trade.party !== filters.tradeParty) return false;
      if (filters.tradeChamber !== 'all' && trade.chamber !== filters.tradeChamber) return false;
      if (filters.tradeType !== 'all' && trade.transaction !== filters.tradeType) return false;
      if (filters.showUnusualOnly && !trade.isUnusual) return false;
      return true;
    });
  },

  getFilteredBills: () => {
    const { bills, filters } = get();
    return bills.filter(bill => {
      if (filters.billSentiment !== 'all' && bill.sentiment !== filters.billSentiment) return false;
      if (filters.billSector !== 'all' && !bill.affectedSectors?.includes(filters.billSector)) return false;
      return true;
    });
  },

  // Aggregated stats
  getTradeStats: () => {
    const trades = get().trades;

    const purchases = trades.filter(t => t.transaction === 'Purchase');
    const sales = trades.filter(t => t.transaction === 'Sale');

    // Top bought symbols
    const buyCount = {};
    purchases.forEach(t => {
      buyCount[t.symbol] = (buyCount[t.symbol] || 0) + 1;
    });
    const topBought = Object.entries(buyCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([symbol, count]) => ({ symbol, count }));

    // Top sold symbols
    const sellCount = {};
    sales.forEach(t => {
      sellCount[t.symbol] = (sellCount[t.symbol] || 0) + 1;
    });
    const topSold = Object.entries(sellCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([symbol, count]) => ({ symbol, count }));

    // Party breakdown
    const demPurchases = purchases.filter(t => t.party === 'D').length;
    const repPurchases = purchases.filter(t => t.party === 'R').length;

    // Unusual trades
    const unusualTrades = trades.filter(t => t.isUnusual);

    return {
      totalTrades: trades.length,
      purchases: purchases.length,
      sales: sales.length,
      topBought,
      topSold,
      demPurchases,
      repPurchases,
      unusualCount: unusualTrades.length,
      unusualTrades
    };
  },

  getContractStats: () => {
    const contracts = get().contracts;

    const totalValue = contracts.reduce((sum, c) => sum + (c.amount || 0), 0);

    // By agency
    const byAgency = {};
    contracts.forEach(c => {
      const agency = c.agency || 'Unknown';
      byAgency[agency] = (byAgency[agency] || 0) + (c.amount || 0);
    });
    const topAgencies = Object.entries(byAgency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([agency, value]) => ({ agency, value }));

    // By contractor
    const byContractor = {};
    contracts.forEach(c => {
      const name = c.contractor || 'Unknown';
      if (!byContractor[name]) {
        byContractor[name] = { count: 0, value: 0, symbol: c.symbol };
      }
      byContractor[name].count++;
      byContractor[name].value += c.amount || 0;
    });
    const topContractors = Object.entries(byContractor)
      .sort((a, b) => b[1].value - a[1].value)
      .slice(0, 5)
      .map(([name, data]) => ({ name, ...data }));

    return {
      totalContracts: contracts.length,
      totalValue,
      topAgencies,
      topContractors,
      defenseContracts: contracts.filter(c =>
        c.agency?.toLowerCase().includes('defense')
      ).length
    };
  },

  getBillStats: () => {
    const bills = get().bills;

    const bullish = bills.filter(b => b.sentiment === 'bullish').length;
    const bearish = bills.filter(b => b.sentiment === 'bearish').length;
    const neutral = bills.filter(b => b.sentiment === 'neutral').length;

    // By sector
    const bySector = {};
    bills.forEach(b => {
      b.affectedSectors?.forEach(sector => {
        bySector[sector] = (bySector[sector] || 0) + 1;
      });
    });

    return {
      total: bills.length,
      bullish,
      bearish,
      neutral,
      bySector
    };
  }
}));

export default usePoliticalData;
