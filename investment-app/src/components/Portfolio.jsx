import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft, TrendingUp, TrendingDown, MoreVertical,
  Trash2, Edit2, PieChart, BarChart3, RefreshCw
} from 'lucide-react';
import useInvestmentStore from '../hooks/useInvestmentStore';
import useStockData, {
  formatPrice, formatPercent, getOverallScore, getScoreColor
} from '../hooks/useStockData';
import SnowflakeChart from './SnowflakeChart';

function Portfolio() {
  const navigate = useNavigate();
  const { portfolio, removeFromPortfolio, updatePortfolioPosition } = useInvestmentStore();
  const { stocks, initialize } = useStockData();
  const portfolioStats = useInvestmentStore(state => state.getPortfolioStats(stocks));

  const [selectedStock, setSelectedStock] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editShares, setEditShares] = useState('');
  const [editPrice, setEditPrice] = useState('');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'allocation'

  // Initialize stock data
  useEffect(() => {
    if (stocks.length === 0) {
      initialize();
    }
  }, []);

  const handleEditPosition = (position) => {
    setSelectedStock(position);
    setEditShares(position.shares.toString());
    setEditPrice(position.avgPrice.toString());
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    if (selectedStock && editShares && parseFloat(editShares) > 0) {
      updatePortfolioPosition(
        selectedStock.symbol,
        parseFloat(editShares),
        parseFloat(editPrice) || selectedStock.avgPrice
      );
      setShowEditModal(false);
      setSelectedStock(null);
    }
  };

  const handleDelete = (symbol) => {
    if (confirm('Remove this position from your portfolio?')) {
      removeFromPortfolio(symbol);
    }
  };

  if (!portfolioStats || portfolioStats.holdings.length === 0) {
    return (
      <div className="min-h-screen">
        <header className="bg-dark-surface border-b border-dark-border px-4 py-3 safe-area-top">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-lg hover:bg-dark-card">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="font-bold text-lg">Portfolio</h1>
          </div>
        </header>

        <div className="flex flex-col items-center justify-center p-8 text-center min-h-[60vh]">
          <PieChart className="w-16 h-16 text-gray-600 mb-4" />
          <h2 className="text-xl font-bold mb-2">No Holdings Yet</h2>
          <p className="text-gray-400 mb-6">
            Add stocks to your portfolio to track performance
          </p>
          <button onClick={() => navigate('/screener')} className="btn-primary">
            Explore Stocks
          </button>
        </div>
      </div>
    );
  }

  // Calculate allocation percentages
  const allocations = portfolioStats.holdings.map(h => ({
    ...h,
    allocation: (h.currentValue / portfolioStats.totalValue) * 100
  }));

  // Sector breakdown
  const sectorBreakdown = allocations.reduce((acc, h) => {
    const sector = h.stock.sector;
    if (!acc[sector]) {
      acc[sector] = { value: 0, percent: 0 };
    }
    acc[sector].value += h.currentValue;
    acc[sector].percent += h.allocation;
    return acc;
  }, {});

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-dark-surface border-b border-dark-border px-4 py-3 safe-area-top">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-lg hover:bg-dark-card">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold text-lg flex-1">Portfolio</h1>
          <button
            onClick={() => setViewMode(viewMode === 'list' ? 'allocation' : 'list')}
            className="p-2 rounded-lg hover:bg-dark-card"
          >
            {viewMode === 'list' ? <PieChart className="w-5 h-5" /> : <BarChart3 className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Portfolio Summary */}
      <div className="bg-dark-surface/50 px-4 py-6 border-b border-dark-border">
        <p className="text-sm text-gray-400 mb-1">Total Value</p>
        <p className="text-3xl font-bold mb-2">{formatPrice(portfolioStats.totalValue)}</p>
        <div className={`flex items-center gap-2 ${portfolioStats.totalGain >= 0 ? 'price-up' : 'price-down'}`}>
          {portfolioStats.totalGain >= 0 ? (
            <TrendingUp className="w-5 h-5" />
          ) : (
            <TrendingDown className="w-5 h-5" />
          )}
          <span className="font-semibold">
            {portfolioStats.totalGain >= 0 ? '+' : ''}{formatPrice(portfolioStats.totalGain)}
            {' '}({formatPercent(portfolioStats.totalGainPercent)})
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <p className="text-xs text-gray-400">Holdings</p>
            <p className="font-bold">{portfolioStats.holdings.length}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Cost Basis</p>
            <p className="font-bold">{formatPrice(portfolioStats.totalCost)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Return</p>
            <p className={`font-bold ${portfolioStats.totalGain >= 0 ? 'price-up' : 'price-down'}`}>
              {formatPercent(portfolioStats.totalGainPercent)}
            </p>
          </div>
        </div>
      </div>

      <main className="p-4">
        {viewMode === 'list' ? (
          /* Holdings List */
          <div className="space-y-3">
            <h2 className="font-semibold text-gray-400 text-sm mb-2">HOLDINGS</h2>
            {allocations.map(holding => {
              const score = getOverallScore(holding.stock.scores);
              return (
                <div key={holding.symbol} className="card p-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => navigate(`/stock/${holding.symbol}`)}
                      className="w-12 h-12 flex-shrink-0"
                    >
                      <SnowflakeChart scores={holding.stock.scores} size={48} showLabels={false} />
                    </button>

                    <button
                      onClick={() => navigate(`/stock/${holding.symbol}`)}
                      className="flex-1 min-w-0 text-left"
                    >
                      <div className="flex items-center gap-2">
                        <p className="font-bold">{holding.symbol}</p>
                        <span className={`text-sm font-semibold ${getScoreColor(score)}`}>
                          {score}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{holding.shares} shares</p>
                    </button>

                    <div className="text-right">
                      <p className="font-bold">{formatPrice(holding.currentValue)}</p>
                      <p className={`text-sm ${holding.gain >= 0 ? 'price-up' : 'price-down'}`}>
                        {formatPercent(holding.gainPercent)}
                      </p>
                    </div>

                    <div className="relative">
                      <button
                        onClick={() => setSelectedStock(selectedStock?.symbol === holding.symbol ? null : holding)}
                        className="p-2 rounded-lg hover:bg-dark-hover"
                      >
                        <MoreVertical className="w-5 h-5 text-gray-400" />
                      </button>

                      {selectedStock?.symbol === holding.symbol && (
                        <div className="absolute right-0 top-full mt-1 w-40 bg-dark-card border border-dark-border rounded-lg overflow-hidden z-10 shadow-lg">
                          <button
                            onClick={() => handleEditPosition(holding)}
                            className="w-full flex items-center gap-2 px-4 py-3 hover:bg-dark-hover text-left"
                          >
                            <Edit2 className="w-4 h-4" />
                            Edit Position
                          </button>
                          <button
                            onClick={() => handleDelete(holding.symbol)}
                            className="w-full flex items-center gap-2 px-4 py-3 hover:bg-dark-hover text-left text-accent-red"
                          >
                            <Trash2 className="w-4 h-4" />
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Position details */}
                  <div className="grid grid-cols-3 gap-4 mt-3 pt-3 border-t border-dark-border">
                    <div>
                      <p className="text-xs text-gray-400">Avg Price</p>
                      <p className="text-sm font-medium">{formatPrice(holding.avgPrice)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Market Price</p>
                      <p className="text-sm font-medium">{formatPrice(holding.stock.price)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Allocation</p>
                      <p className="text-sm font-medium">{holding.allocation.toFixed(1)}%</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Allocation View */
          <div className="space-y-6">
            {/* Holdings by Allocation */}
            <section>
              <h2 className="font-semibold text-gray-400 text-sm mb-3">BY HOLDING</h2>
              <div className="card p-4 space-y-4">
                {allocations.map(holding => (
                  <div key={holding.symbol}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{holding.symbol}</span>
                      <span>{holding.allocation.toFixed(1)}%</span>
                    </div>
                    <div className="h-2 bg-dark-surface rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent-blue rounded-full"
                        style={{ width: `${holding.allocation}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sector Breakdown */}
            <section>
              <h2 className="font-semibold text-gray-400 text-sm mb-3">BY SECTOR</h2>
              <div className="card p-4 space-y-4">
                {Object.entries(sectorBreakdown)
                  .sort((a, b) => b[1].percent - a[1].percent)
                  .map(([sector, data]) => (
                    <div key={sector}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{sector}</span>
                        <span>{data.percent.toFixed(1)}%</span>
                      </div>
                      <div className="h-2 bg-dark-surface rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent-purple rounded-full"
                          style={{ width: `${data.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Edit Position Modal */}
      {showEditModal && selectedStock && (
        <div className="fixed inset-0 bg-black/70 flex items-end z-50" onClick={() => setShowEditModal(false)}>
          <div
            className="w-full bg-dark-card rounded-t-2xl p-4 animate-slide-up safe-area-bottom"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-4">Edit {selectedStock.symbol} Position</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Number of Shares</label>
                <input
                  type="number"
                  value={editShares}
                  onChange={(e) => setEditShares(e.target.value)}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Average Price</label>
                <input
                  type="number"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                  className="input-field"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="btn-primary flex-1"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
