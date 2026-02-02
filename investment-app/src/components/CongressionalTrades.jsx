import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  Clock,
  Building,
  ChevronDown
} from 'lucide-react';
import usePoliticalData from '../hooks/usePoliticalData';

export default function CongressionalTrades() {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const {
    loading,
    filters,
    setFilter,
    getFilteredTrades,
    getTradeStats
  } = usePoliticalData();

  const trades = getFilteredTrades();
  const stats = getTradeStats();

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getPartyColor = (party) => {
    if (party === 'D') return 'text-blue-400';
    if (party === 'R') return 'text-red-400';
    return 'text-gray-400';
  };

  const getPartyBg = (party) => {
    if (party === 'D') return 'bg-blue-500/20';
    if (party === 'R') return 'bg-red-500/20';
    return 'bg-gray-500/20';
  };

  return (
    <div className="space-y-4">
      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-2">
        <div className="card text-center py-3">
          <p className="text-lg font-bold text-white">{stats.purchases}</p>
          <p className="text-xs text-accent-green">Purchases</p>
        </div>
        <div className="card text-center py-3">
          <p className="text-lg font-bold text-white">{stats.sales}</p>
          <p className="text-xs text-accent-red">Sales</p>
        </div>
        <div className="card text-center py-3">
          <p className="text-lg font-bold text-white">{stats.unusualCount}</p>
          <p className="text-xs text-accent-orange">Unusual</p>
        </div>
      </div>

      {/* Party Breakdown */}
      <div className="card">
        <h4 className="text-sm font-medium text-gray-400 mb-2">Buy Activity by Party</h4>
        <div className="flex gap-2">
          <div className="flex-1 bg-blue-500/20 rounded-lg p-2">
            <div className="flex items-center justify-between">
              <span className="text-blue-400 font-medium">Democrats</span>
              <span className="text-white font-bold">{stats.demPurchases}</span>
            </div>
          </div>
          <div className="flex-1 bg-red-500/20 rounded-lg p-2">
            <div className="flex items-center justify-between">
              <span className="text-red-400 font-medium">Republicans</span>
              <span className="text-white font-bold">{stats.repPurchases}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Bought/Sold */}
      <div className="grid grid-cols-2 gap-3">
        <div className="card">
          <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-1">
            <ArrowUpRight className="w-4 h-4 text-accent-green" />
            Top Bought
          </h4>
          <div className="space-y-1">
            {stats.topBought.map(({ symbol, count }) => (
              <div
                key={symbol}
                onClick={() => navigate(`/investment-app/stock/${symbol}`)}
                className="flex items-center justify-between py-1 hover:bg-dark-hover rounded px-1 cursor-pointer"
              >
                <span className="text-white font-medium">{symbol}</span>
                <span className="text-xs text-accent-green">{count}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-1">
            <ArrowDownRight className="w-4 h-4 text-accent-red" />
            Top Sold
          </h4>
          <div className="space-y-1">
            {stats.topSold.map(({ symbol, count }) => (
              <div
                key={symbol}
                onClick={() => navigate(`/investment-app/stock/${symbol}`)}
                className="flex items-center justify-between py-1 hover:bg-dark-hover rounded px-1 cursor-pointer"
              >
                <span className="text-white font-medium">{symbol}</span>
                <span className="text-xs text-accent-red">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-between w-full"
        >
          <span className="flex items-center gap-2 text-gray-400">
            <Filter className="w-4 h-4" />
            Filters
          </span>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </button>

        {showFilters && (
          <div className="mt-3 space-y-3 pt-3 border-t border-dark-border">
            {/* Party Filter */}
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Party</label>
              <div className="flex gap-2">
                {['all', 'D', 'R'].map(party => (
                  <button
                    key={party}
                    onClick={() => setFilter('tradeParty', party)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      filters.tradeParty === party
                        ? party === 'D' ? 'bg-blue-500 text-white'
                          : party === 'R' ? 'bg-red-500 text-white'
                          : 'bg-accent-blue text-white'
                        : 'bg-dark-surface text-gray-400'
                    }`}
                  >
                    {party === 'all' ? 'All' : party === 'D' ? 'Dem' : 'Rep'}
                  </button>
                ))}
              </div>
            </div>

            {/* Chamber Filter */}
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Chamber</label>
              <div className="flex gap-2">
                {['all', 'House', 'Senate'].map(chamber => (
                  <button
                    key={chamber}
                    onClick={() => setFilter('tradeChamber', chamber)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      filters.tradeChamber === chamber
                        ? 'bg-accent-blue text-white'
                        : 'bg-dark-surface text-gray-400'
                    }`}
                  >
                    {chamber === 'all' ? 'All' : chamber}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Transaction</label>
              <div className="flex gap-2">
                {['all', 'Purchase', 'Sale'].map(type => (
                  <button
                    key={type}
                    onClick={() => setFilter('tradeType', type)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      filters.tradeType === type
                        ? type === 'Purchase' ? 'bg-accent-green text-white'
                          : type === 'Sale' ? 'bg-accent-red text-white'
                          : 'bg-accent-blue text-white'
                        : 'bg-dark-surface text-gray-400'
                    }`}
                  >
                    {type === 'all' ? 'All' : type === 'Purchase' ? 'Buy' : 'Sell'}
                  </button>
                ))}
              </div>
            </div>

            {/* Unusual Only */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Unusual only</span>
              <button
                onClick={() => setFilter('showUnusualOnly', !filters.showUnusualOnly)}
                className={`w-10 h-6 rounded-full transition-colors ${
                  filters.showUnusualOnly ? 'bg-accent-orange' : 'bg-dark-surface'
                }`}
              >
                <div className={`w-4 h-4 rounded-full bg-white mx-1 transition-transform ${
                  filters.showUnusualOnly ? 'translate-x-4' : ''
                }`} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Trades List */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-400">
          Recent Trades ({trades.length})
        </h3>

        {loading.trades ? (
          <div className="card text-center py-8">
            <div className="animate-spin w-8 h-8 border-2 border-accent-blue border-t-transparent rounded-full mx-auto" />
            <p className="text-gray-400 mt-2">Loading trades...</p>
          </div>
        ) : trades.length === 0 ? (
          <div className="card text-center py-8">
            <Users className="w-12 h-12 text-gray-600 mx-auto mb-2" />
            <p className="text-gray-400">No trades match your filters</p>
          </div>
        ) : (
          trades.map(trade => (
            <div
              key={trade.id}
              onClick={() => navigate(`/investment-app/stock/${trade.symbol}`)}
              className={`card hover:bg-dark-hover cursor-pointer transition-colors ${
                trade.isUnusual ? 'border border-accent-orange/30' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-white text-lg">{trade.symbol}</span>
                    <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                      trade.transaction === 'Purchase'
                        ? 'bg-accent-green/20 text-accent-green'
                        : 'bg-accent-red/20 text-accent-red'
                    }`}>
                      {trade.transaction}
                    </span>
                    {trade.isUnusual && (
                      <span className="flex items-center gap-1 text-xs text-accent-orange">
                        <AlertTriangle className="w-3 h-3" />
                        Unusual
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-1.5 py-0.5 rounded text-xs ${getPartyBg(trade.party)} ${getPartyColor(trade.party)}`}>
                      {trade.party}
                    </span>
                    <span className="text-sm text-gray-400">{trade.politician}</span>
                  </div>

                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Building className="w-3 h-3" />
                      {trade.chamber}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {trade.filingDelay}d delay
                    </span>
                  </div>

                  {trade.committees?.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {trade.committees.slice(0, 2).map(committee => (
                        <span
                          key={committee}
                          className="text-xs px-1.5 py-0.5 rounded bg-dark-surface text-gray-400"
                        >
                          {committee}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-white">{trade.amount}</p>
                  <p className="text-xs text-gray-500">{formatDate(trade.transactionDate)}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
