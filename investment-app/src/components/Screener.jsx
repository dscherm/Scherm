import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft, Filter, SlidersHorizontal, X, ChevronDown,
  TrendingUp, TrendingDown, Search, RefreshCw
} from 'lucide-react';
import useStockData, {
  formatPrice, formatPercent, formatMarketCap,
  getOverallScore, getScoreColor, getAllSectors
} from '../hooks/useStockData';
import SnowflakeChart from './SnowflakeChart';

function Screener() {
  const navigate = useNavigate();
  const { stocks, isLoading, initialize } = useStockData();

  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('score'); // score, price, change, marketCap
  const [sortOrder, setSortOrder] = useState('desc');

  // Filter state
  const [filters, setFilters] = useState({
    minMarketCap: null,
    maxMarketCap: null,
    minScore: null,
    sectors: [],
    minDividend: null
  });

  // Initialize on mount
  useEffect(() => {
    if (stocks.length === 0) {
      initialize();
    }
  }, []);

  const sectors = useMemo(() => getAllSectors(stocks), [stocks]);

  const marketCapOptions = [
    { label: 'Any', value: null },
    { label: '$10B+', value: 10e9 },
    { label: '$50B+', value: 50e9 },
    { label: '$200B+', value: 200e9 },
    { label: '$1T+', value: 1e12 }
  ];

  const scoreOptions = [
    { label: 'Any', value: null },
    { label: '80+', value: 80 },
    { label: '60+', value: 60 },
    { label: '40+', value: 40 }
  ];

  // Apply filters and search
  const filteredStocks = useMemo(() => {
    let result = [...stocks];

    // Apply search
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(stock =>
        stock.symbol.toLowerCase().includes(lowerQuery) ||
        stock.name.toLowerCase().includes(lowerQuery) ||
        stock.sector.toLowerCase().includes(lowerQuery)
      );
    }

    // Apply filters
    result = result.filter(stock => {
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

    // Apply sorting
    result.sort((a, b) => {
      let aVal, bVal;
      switch (sortBy) {
        case 'score':
          aVal = getOverallScore(a.scores);
          bVal = getOverallScore(b.scores);
          break;
        case 'price':
          aVal = a.price;
          bVal = b.price;
          break;
        case 'change':
          aVal = a.changePercent;
          bVal = b.changePercent;
          break;
        case 'marketCap':
          aVal = a.marketCap;
          bVal = b.marketCap;
          break;
        case 'dividend':
          aVal = a.dividendYield;
          bVal = b.dividendYield;
          break;
        default:
          aVal = getOverallScore(a.scores);
          bVal = getOverallScore(b.scores);
      }
      return sortOrder === 'desc' ? bVal - aVal : aVal - bVal;
    });

    return result;
  }, [stocks, searchQuery, filters, sortBy, sortOrder]);

  const toggleSector = (sector) => {
    setFilters(f => ({
      ...f,
      sectors: f.sectors.includes(sector)
        ? f.sectors.filter(s => s !== sector)
        : [...f.sectors, sector]
    }));
  };

  const clearFilters = () => {
    setFilters({
      minMarketCap: null,
      maxMarketCap: null,
      minScore: null,
      sectors: [],
      minDividend: null
    });
  };

  const activeFilterCount = [
    filters.minMarketCap,
    filters.minScore,
    filters.sectors.length > 0,
    filters.minDividend
  ].filter(Boolean).length;

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  if (isLoading && stocks.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-accent-blue" />
          <p className="text-gray-400">Loading stocks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-dark-surface border-b border-dark-border px-4 py-3 safe-area-top sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-lg hover:bg-dark-card">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold text-lg flex-1">Stock Screener</h1>
          <button
            onClick={() => setShowFilters(true)}
            className={`p-2 rounded-lg relative ${activeFilterCount > 0 ? 'bg-accent-blue/20 text-accent-blue' : 'hover:bg-dark-card'}`}
          >
            <SlidersHorizontal className="w-5 h-5" />
            {activeFilterCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-blue text-white text-xs rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, symbol, or sector..."
            className="input-field pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          )}
        </div>
      </header>

      {/* Sort Options */}
      <div className="px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide border-b border-dark-border">
        {[
          { id: 'score', label: 'Score' },
          { id: 'marketCap', label: 'Market Cap' },
          { id: 'change', label: 'Change' },
          { id: 'dividend', label: 'Dividend' }
        ].map(option => (
          <button
            key={option.id}
            onClick={() => handleSort(option.id)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
              sortBy === option.id ? 'chip-selected' : 'chip'
            }`}
          >
            {option.label}
            {sortBy === option.id && (
              sortOrder === 'desc'
                ? <ChevronDown className="w-4 h-4" />
                : <ChevronDown className="w-4 h-4 rotate-180" />
            )}
          </button>
        ))}
      </div>

      {/* Results */}
      <main className="p-4">
        <p className="text-sm text-gray-400 mb-3">{filteredStocks.length} stocks found</p>

        <div className="space-y-3">
          {filteredStocks.map(stock => {
            const score = getOverallScore(stock.scores);
            return (
              <button
                key={stock.symbol}
                onClick={() => navigate(`/stock/${stock.symbol}`)}
                className="card-hover p-4 w-full flex items-center gap-3"
              >
                <div className="w-12 h-12 flex-shrink-0">
                  <SnowflakeChart scores={stock.scores} size={48} showLabels={false} />
                </div>

                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-2">
                    <p className="font-bold">{stock.symbol}</p>
                    <span className={`text-sm font-semibold ${getScoreColor(score)}`}>
                      {score}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 truncate">{stock.name}</p>
                  <p className="text-xs text-gray-500">{stock.sector} · {formatMarketCap(stock.marketCap)}</p>
                </div>

                <div className="text-right">
                  <p className="font-medium">{formatPrice(stock.price)}</p>
                  <p className={`text-sm flex items-center justify-end gap-1 ${stock.changePercent >= 0 ? 'price-up' : 'price-down'}`}>
                    {stock.changePercent >= 0 ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {formatPercent(stock.changePercent)}
                  </p>
                  {stock.dividendYield > 0 && (
                    <p className="text-xs text-gray-500">{stock.dividendYield.toFixed(2)}% div</p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {filteredStocks.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 mb-2">No stocks match your criteria</p>
            <button onClick={clearFilters} className="text-accent-blue">
              Clear filters
            </button>
          </div>
        )}
      </main>

      {/* Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/70 z-50" onClick={() => setShowFilters(false)}>
          <div
            className="absolute inset-y-0 right-0 w-full max-w-sm bg-dark-card animate-slide-up overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-dark-card border-b border-dark-border px-4 py-3 flex items-center justify-between">
              <h2 className="font-bold text-lg">Filters</h2>
              <div className="flex items-center gap-2">
                {activeFilterCount > 0 && (
                  <button onClick={clearFilters} className="text-sm text-accent-red">
                    Clear All
                  </button>
                )}
                <button onClick={() => setShowFilters(false)} className="p-2 rounded-lg hover:bg-dark-hover">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-6">
              {/* Market Cap */}
              <section>
                <h3 className="font-semibold mb-3">Market Cap</h3>
                <div className="flex flex-wrap gap-2">
                  {marketCapOptions.map(option => (
                    <button
                      key={option.label}
                      onClick={() => setFilters(f => ({ ...f, minMarketCap: option.value }))}
                      className={filters.minMarketCap === option.value ? 'chip-selected' : 'chip'}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </section>

              {/* Minimum Score */}
              <section>
                <h3 className="font-semibold mb-3">Minimum Score</h3>
                <div className="flex flex-wrap gap-2">
                  {scoreOptions.map(option => (
                    <button
                      key={option.label}
                      onClick={() => setFilters(f => ({ ...f, minScore: option.value }))}
                      className={filters.minScore === option.value ? 'chip-selected' : 'chip'}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </section>

              {/* Sectors */}
              <section>
                <h3 className="font-semibold mb-3">Sectors</h3>
                <div className="flex flex-wrap gap-2">
                  {sectors.map(sector => (
                    <button
                      key={sector}
                      onClick={() => toggleSector(sector)}
                      className={filters.sectors.includes(sector) ? 'chip-selected' : 'chip'}
                    >
                      {sector}
                    </button>
                  ))}
                </div>
              </section>

              {/* Dividend Yield */}
              <section>
                <h3 className="font-semibold mb-3">Minimum Dividend Yield</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Any', value: null },
                    { label: '1%+', value: 1 },
                    { label: '2%+', value: 2 },
                    { label: '3%+', value: 3 }
                  ].map(option => (
                    <button
                      key={option.label}
                      onClick={() => setFilters(f => ({ ...f, minDividend: option.value }))}
                      className={filters.minDividend === option.value ? 'chip-selected' : 'chip'}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </section>
            </div>

            <div className="sticky bottom-0 p-4 bg-dark-card border-t border-dark-border safe-area-bottom">
              <button
                onClick={() => setShowFilters(false)}
                className="btn-primary w-full"
              >
                Show {filteredStocks.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Screener;
