import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TrendingUp, TrendingDown, Search, Star, RefreshCw,
  ChevronRight, Briefcase, BarChart3, Zap, AlertCircle, Landmark
} from 'lucide-react';
import useInvestmentStore from '../hooks/useInvestmentStore';
import useStockData, {
  formatPrice, formatPercent, getOverallScore, getScoreColor
} from '../hooks/useStockData';
import SnowflakeChart from './SnowflakeChart';

function Dashboard() {
  const navigate = useNavigate();
  const { portfolio, watchlist } = useInvestmentStore();
  const {
    stocks, isLoading, isRefreshing, error, lastUpdated,
    initialize, refresh, searchStocks: searchInStore
  } = useStockData();

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // Initialize stock data on mount
  useEffect(() => {
    initialize();

    // Auto-refresh every 60 seconds
    const interval = setInterval(() => {
      refresh();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const searchResults = searchQuery ? searchInStore(searchQuery).slice(0, 5) : [];

  // Get portfolio stats
  const portfolioStats = useInvestmentStore(state => state.getPortfolioStats(stocks));

  // Get top movers
  const topGainers = [...stocks]
    .sort((a, b) => b.changePercent - a.changePercent)
    .slice(0, 3);

  const topLosers = [...stocks]
    .sort((a, b) => a.changePercent - b.changePercent)
    .slice(0, 3);

  // Get high-score stocks
  const topRated = [...stocks]
    .sort((a, b) => getOverallScore(b.scores) - getOverallScore(a.scores))
    .slice(0, 5);

  const handleStockClick = (symbol) => {
    setSearchQuery('');
    setShowSearch(false);
    navigate(`/stock/${symbol}`);
  };

  const formatLastUpdated = () => {
    if (!lastUpdated) return '';
    const now = new Date();
    const diff = Math.floor((now - lastUpdated) / 1000);
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return lastUpdated.toLocaleTimeString();
  };

  // Loading state
  if (isLoading && stocks.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-accent-blue" />
          <p className="text-gray-400">Loading market data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error && stocks.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-accent-red mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Unable to Load Data</h2>
          <p className="text-gray-400 mb-4">{error}</p>
          <button onClick={() => initialize()} className="btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-dark-surface border-b border-dark-border px-4 py-4 safe-area-top">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold">InvestView</h1>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Stock Analysis</span>
              {lastUpdated && (
                <>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    {isRefreshing && <RefreshCw className="w-3 h-3 animate-spin" />}
                    {formatLastUpdated()}
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => refresh()}
              disabled={isRefreshing}
              className="p-2 rounded-lg bg-dark-card border border-dark-border disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 rounded-lg bg-dark-card border border-dark-border"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="relative animate-slide-up">
            <input
              type="text"
              placeholder="Search stocks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pr-10"
              autoFocus
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-dark-card border border-dark-border rounded-lg overflow-hidden z-50">
                {searchResults.map(stock => (
                  <button
                    key={stock.symbol}
                    onClick={() => handleStockClick(stock.symbol)}
                    className="w-full flex items-center gap-3 p-3 hover:bg-dark-hover transition-colors text-left"
                  >
                    <div className="w-10 h-10 rounded-lg bg-dark-surface flex items-center justify-center font-bold text-sm">
                      {stock.symbol.slice(0, 2)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{stock.symbol}</p>
                      <p className="text-sm text-gray-400 truncate">{stock.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{formatPrice(stock.price)}</p>
                      <p className={stock.changePercent >= 0 ? 'price-up text-sm' : 'price-down text-sm'}>
                        {formatPercent(stock.changePercent)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </header>

      <main className="p-4 space-y-6">
        {/* Portfolio Summary Card */}
        {portfolioStats && portfolioStats.holdings.length > 0 ? (
          <section
            className="card p-4 cursor-pointer hover:border-dark-hover transition-colors"
            onClick={() => navigate('/portfolio')}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-accent-blue" />
                <h2 className="font-semibold">Your Portfolio</h2>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold">{formatPrice(portfolioStats.totalValue)}</p>
                <p className={portfolioStats.totalGain >= 0 ? 'price-up text-sm' : 'price-down text-sm'}>
                  {portfolioStats.totalGain >= 0 ? '+' : ''}{formatPrice(portfolioStats.totalGain)} ({formatPercent(portfolioStats.totalGainPercent)})
                </p>
              </div>
              <p className="text-gray-400 text-sm">{portfolioStats.holdings.length} holdings</p>
            </div>
          </section>
        ) : (
          <section className="card p-4">
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="w-5 h-5 text-accent-blue" />
              <h2 className="font-semibold">Start Your Portfolio</h2>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Add stocks to track your investments and see performance.
            </p>
            <button
              onClick={() => navigate('/screener')}
              className="btn-primary w-full"
            >
              Explore Stocks
            </button>
          </section>
        )}

        {/* Quick Stats */}
        <section className="grid grid-cols-2 gap-3">
          <div
            className="card p-4 cursor-pointer hover:border-dark-hover transition-colors"
            onClick={() => navigate('/watchlist')}
          >
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-accent-orange" />
              <span className="text-sm text-gray-400">Watchlist</span>
            </div>
            <p className="text-xl font-bold">{watchlist.length}</p>
            <p className="text-sm text-gray-400">stocks</p>
          </div>
          <div
            className="card p-4 cursor-pointer hover:border-dark-hover transition-colors"
            onClick={() => navigate('/screener')}
          >
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-accent-purple" />
              <span className="text-sm text-gray-400">Screener</span>
            </div>
            <p className="text-xl font-bold">{stocks.length}</p>
            <p className="text-sm text-gray-400">available</p>
          </div>
        </section>

        {/* Political Intel Card */}
        <section
          className="card p-4 cursor-pointer hover:border-dark-hover transition-colors bg-gradient-to-r from-dark-card to-dark-surface border-accent-purple/20"
          onClick={() => navigate('/politics')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent-purple/20">
                <Landmark className="w-5 h-5 text-accent-purple" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Political Intel</h3>
                <p className="text-sm text-gray-400">Congressional trades, contracts & policy alerts</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </section>

        {/* Market Movers */}
        {stocks.length > 0 && (
          <section>
            <h2 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent-orange" />
              Today's Movers
            </h2>

            {/* Top Gainers */}
            <div className="mb-4">
              <h3 className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent-green" />
                Top Gainers
              </h3>
              <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4">
                {topGainers.map(stock => (
                  <button
                    key={stock.symbol}
                    onClick={() => handleStockClick(stock.symbol)}
                    className="card-hover p-3 min-w-[140px] flex-shrink-0"
                  >
                    <p className="font-bold">{stock.symbol}</p>
                    <p className="text-sm text-gray-400 truncate">{stock.name}</p>
                    <p className="price-up font-medium mt-2">{formatPercent(stock.changePercent)}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Losers */}
            <div>
              <h3 className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-accent-red" />
                Top Losers
              </h3>
              <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-4 px-4">
                {topLosers.map(stock => (
                  <button
                    key={stock.symbol}
                    onClick={() => handleStockClick(stock.symbol)}
                    className="card-hover p-3 min-w-[140px] flex-shrink-0"
                  >
                    <p className="font-bold">{stock.symbol}</p>
                    <p className="text-sm text-gray-400 truncate">{stock.name}</p>
                    <p className="price-down font-medium mt-2">{formatPercent(stock.changePercent)}</p>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Top Rated Stocks */}
        {stocks.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold flex items-center gap-2">
                <Star className="w-5 h-5 text-accent-green" />
                Top Rated Stocks
              </h2>
              <button
                onClick={() => navigate('/screener')}
                className="text-sm text-accent-blue"
              >
                View All
              </button>
            </div>
            <div className="space-y-3">
              {topRated.map(stock => {
                const score = getOverallScore(stock.scores);
                return (
                  <button
                    key={stock.symbol}
                    onClick={() => handleStockClick(stock.symbol)}
                    className="card-hover p-4 w-full flex items-center gap-4"
                  >
                    <div className="w-14 h-14 flex-shrink-0">
                      <SnowflakeChart scores={stock.scores} size={56} showLabels={false} />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center gap-2">
                        <p className="font-bold">{stock.symbol}</p>
                        <span className={`text-sm font-semibold ${getScoreColor(score)}`}>
                          {score}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 truncate">{stock.name}</p>
                      <p className="text-sm text-gray-500">{stock.sector}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{formatPrice(stock.price)}</p>
                      <p className={stock.changePercent >= 0 ? 'price-up text-sm' : 'price-down text-sm'}>
                        {formatPercent(stock.changePercent)}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
