import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ChevronLeft, Star, Plus, TrendingUp, TrendingDown,
  DollarSign, Target, Shield, PiggyBank, History, ExternalLink,
  ChevronDown, ChevronUp, AlertCircle, CheckCircle, Info,
  RefreshCw
} from 'lucide-react';
import useInvestmentStore from '../hooks/useInvestmentStore';
import useStockData, {
  formatPrice, formatPercent, formatMarketCap,
  getOverallScore, getScoreColor, getScoreBgColor
} from '../hooks/useStockData';
import SnowflakeChart from './SnowflakeChart';
import OptionsAnalysis from './OptionsAnalysis';

function StockDetail() {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const { getStock, fetchStock, isLoading } = useStockData();
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    addToWatchlist, removeFromWatchlist, isInWatchlist,
    addToPortfolio, isInPortfolio, getPortfolioPosition
  } = useInvestmentStore();

  const [activeTab, setActiveTab] = useState('overview');
  const [showAddModal, setShowAddModal] = useState(false);
  const [shares, setShares] = useState('');
  const [avgPrice, setAvgPrice] = useState('');
  const [expandedSection, setExpandedSection] = useState(null);

  // Fetch stock data
  useEffect(() => {
    const loadStock = async () => {
      setLoading(true);
      setError(null);

      // First check cache
      const cachedStock = getStock(symbol);
      if (cachedStock) {
        setStock(cachedStock);
        setLoading(false);
        return;
      }

      // Fetch from API
      try {
        const data = await fetchStock(symbol);
        setStock(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadStock();
  }, [symbol]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-accent-blue" />
          <p className="text-gray-400">Loading {symbol}...</p>
        </div>
      </div>
    );
  }

  if (error || !stock) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400 mb-2">{error || 'Stock not found'}</p>
          <button
            onClick={() => navigate(-1)}
            className="btn-primary mt-4"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const inWatchlist = isInWatchlist(symbol);
  const inPortfolio = isInPortfolio(symbol);
  const position = getPortfolioPosition(symbol);
  const overallScore = getOverallScore(stock.scores);

  const handleWatchlistToggle = () => {
    if (inWatchlist) {
      removeFromWatchlist(symbol);
    } else {
      addToWatchlist(stock);
    }
  };

  const handleAddToPortfolio = () => {
    const numShares = parseFloat(shares);
    const price = parseFloat(avgPrice) || stock.price;

    if (numShares > 0) {
      addToPortfolio(stock, numShares, price);
      setShowAddModal(false);
      setShares('');
      setAvgPrice('');
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'options', label: 'Options' }
  ];

  const analysisCategories = [
    { key: 'value', label: 'Value', icon: DollarSign, color: 'text-blue-400' },
    { key: 'future', label: 'Future Growth', icon: Target, color: 'text-purple-400' },
    { key: 'past', label: 'Past Performance', icon: History, color: 'text-green-400' },
    { key: 'health', label: 'Financial Health', icon: Shield, color: 'text-cyan-400' },
    { key: 'dividend', label: 'Dividend', icon: PiggyBank, color: 'text-orange-400' }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="w-4 h-4 text-score-excellent" />;
      case 'good':
        return <CheckCircle className="w-4 h-4 text-score-good" />;
      case 'fair':
        return <Info className="w-4 h-4 text-score-fair" />;
      case 'poor':
        return <AlertCircle className="w-4 h-4 text-score-poor" />;
      default:
        return <Info className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-dark-surface border-b border-dark-border px-4 py-3 safe-area-top sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-lg hover:bg-dark-card"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="font-bold text-lg">{stock.symbol}</h1>
            <p className="text-sm text-gray-400 truncate">{stock.name}</p>
          </div>
          <button
            onClick={handleWatchlistToggle}
            className={`p-2 rounded-lg ${inWatchlist ? 'bg-accent-orange/20 text-accent-orange' : 'hover:bg-dark-card'}`}
          >
            <Star className={`w-6 h-6 ${inWatchlist ? 'fill-current' : ''}`} />
          </button>
        </div>
      </header>

      {/* Price Section */}
      <div className="px-4 py-4 bg-dark-surface/50">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl font-bold">{formatPrice(stock.price)}</p>
            <div className={`flex items-center gap-2 ${stock.changePercent >= 0 ? 'price-up' : 'price-down'}`}>
              {stock.changePercent >= 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span className="font-medium">
                {stock.change >= 0 ? '+' : ''}{stock.change?.toFixed(2)} ({formatPercent(stock.changePercent)})
              </span>
            </div>
            {stock.lastUpdated && (
              <p className="text-xs text-gray-500 mt-1">
                Last updated: {new Date(stock.lastUpdated).toLocaleTimeString()}
              </p>
            )}
          </div>
          <div className="text-right">
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${getScoreBgColor(overallScore)}/20`}>
              <span className={`text-xl font-bold ${getScoreColor(overallScore)}`}>{overallScore}</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Score</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="text-center">
            <p className="text-xs text-gray-400">Market Cap</p>
            <p className="font-medium text-sm">{formatMarketCap(stock.marketCap)}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">P/E</p>
            <p className="font-medium text-sm">{stock.pe ? stock.pe.toFixed(1) : 'N/A'}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">Div Yield</p>
            <p className="font-medium text-sm">{stock.dividendYield?.toFixed(2) || '0'}%</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">Beta</p>
            <p className="font-medium text-sm">{stock.beta?.toFixed(2) || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-3 flex gap-3 bg-dark-surface/50 border-b border-dark-border">
        {inPortfolio && position ? (
          <div className="flex-1 card p-3">
            <p className="text-xs text-gray-400">Your Position</p>
            <p className="font-bold">{position.shares} shares @ {formatPrice(position.avgPrice)}</p>
            <p className={`text-sm ${(stock.price - position.avgPrice) >= 0 ? 'price-up' : 'price-down'}`}>
              {((stock.price - position.avgPrice) / position.avgPrice * 100).toFixed(2)}% return
            </p>
          </div>
        ) : (
          <button
            onClick={() => setShowAddModal(true)}
            className="btn-primary flex-1 flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add to Portfolio
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-dark-border px-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 font-medium text-sm transition-colors ${
              activeTab === tab.id ? 'tab-active' : 'tab-inactive'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <main className="p-4">
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fade-in">
            {/* Snowflake Chart */}
            <section className="card p-4">
              <h3 className="font-semibold mb-4">Stock Analysis</h3>
              <div className="flex justify-center">
                <SnowflakeChart scores={stock.scores} size={280} />
              </div>
            </section>

            {/* Company Info */}
            <section className="card p-4">
              <h3 className="font-semibold mb-3">About {stock.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{stock.description}</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-xs text-gray-500">Sector</p>
                  <p className="font-medium">{stock.sector}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Industry</p>
                  <p className="font-medium">{stock.industry}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">52 Week High</p>
                  <p className="font-medium">{formatPrice(stock.week52High)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">52 Week Low</p>
                  <p className="font-medium">{formatPrice(stock.week52Low)}</p>
                </div>
              </div>
            </section>

            {/* Key Metrics */}
            <section className="card p-4">
              <h3 className="font-semibold mb-3">Key Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Forward P/E</span>
                  <span className="font-medium">{stock.forwardPe ? stock.forwardPe.toFixed(1) : 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Annual Dividend</span>
                  <span className="font-medium">{formatPrice(stock.dividend)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Volume</span>
                  <span className="font-medium">{stock.avgVolume ? (stock.avgVolume / 1e6).toFixed(1) + 'M' : 'N/A'}</span>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'analysis' && stock.analysis && (
          <div className="space-y-4 animate-fade-in">
            {analysisCategories.map(category => {
              const analysis = stock.analysis[category.key];
              if (!analysis) return null;

              const isExpanded = expandedSection === category.key;
              const Icon = category.icon;

              return (
                <section key={category.key} className="card overflow-hidden">
                  <button
                    onClick={() => setExpandedSection(isExpanded ? null : category.key)}
                    className="w-full p-4 flex items-center gap-3"
                  >
                    <div className={`p-2 rounded-lg bg-dark-surface ${category.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{category.label}</p>
                        <span className={`text-sm font-bold ${getScoreColor(analysis.score)}`}>
                          {analysis.score}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{analysis.summary}</p>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  {isExpanded && analysis.details && (
                    <div className="px-4 pb-4 space-y-3 border-t border-dark-border pt-3">
                      {analysis.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">{detail.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{detail.value}</span>
                            {getStatusIcon(detail.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}

        {activeTab === 'options' && (
          <div className="animate-fade-in">
            <OptionsAnalysis symbol={stock.symbol} stockPrice={stock.price} />
          </div>
        )}
      </main>

      {/* Add to Portfolio Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/70 flex items-end z-50" onClick={() => setShowAddModal(false)}>
          <div
            className="w-full bg-dark-card rounded-t-2xl p-4 animate-slide-up safe-area-bottom"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-4">Add {stock.symbol} to Portfolio</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Number of Shares</label>
                <input
                  type="number"
                  value={shares}
                  onChange={(e) => setShares(e.target.value)}
                  placeholder="Enter shares"
                  className="input-field"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Average Price (optional)</label>
                <input
                  type="number"
                  value={avgPrice}
                  onChange={(e) => setAvgPrice(e.target.value)}
                  placeholder={`Current: ${formatPrice(stock.price)}`}
                  className="input-field"
                />
              </div>

              {shares && (
                <div className="card p-3 bg-dark-surface">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Value</span>
                    <span className="font-medium">
                      {formatPrice(parseFloat(shares) * (parseFloat(avgPrice) || stock.price))}
                    </span>
                  </div>
                </div>
              )}

              <button
                onClick={handleAddToPortfolio}
                disabled={!shares || parseFloat(shares) <= 0}
                className="btn-primary w-full"
              >
                Add to Portfolio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StockDetail;
