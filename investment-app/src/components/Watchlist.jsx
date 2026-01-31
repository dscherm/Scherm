import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft, Star, TrendingUp, TrendingDown, Trash2, Plus, RefreshCw
} from 'lucide-react';
import useInvestmentStore from '../hooks/useInvestmentStore';
import useStockData, {
  formatPrice, formatPercent, getOverallScore, getScoreColor
} from '../hooks/useStockData';
import SnowflakeChart from './SnowflakeChart';

function Watchlist() {
  const navigate = useNavigate();
  const { watchlist, removeFromWatchlist } = useInvestmentStore();
  const { stocks, initialize, getStock } = useStockData();
  const [confirmDelete, setConfirmDelete] = useState(null);

  // Initialize stock data
  useEffect(() => {
    if (stocks.length === 0) {
      initialize();
    }
  }, []);

  // Get full stock data for watchlist items
  const watchlistStocks = watchlist
    .map(item => ({
      ...item,
      stock: getStock(item.symbol)
    }))
    .filter(item => item.stock);

  const handleRemove = (symbol) => {
    removeFromWatchlist(symbol);
    setConfirmDelete(null);
  };

  if (watchlistStocks.length === 0) {
    return (
      <div className="min-h-screen">
        <header className="bg-dark-surface border-b border-dark-border px-4 py-3 safe-area-top">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-lg hover:bg-dark-card">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="font-bold text-lg">Watchlist</h1>
          </div>
        </header>

        <div className="flex flex-col items-center justify-center p-8 text-center min-h-[60vh]">
          <Star className="w-16 h-16 text-gray-600 mb-4" />
          <h2 className="text-xl font-bold mb-2">Your Watchlist is Empty</h2>
          <p className="text-gray-400 mb-6">
            Add stocks to track their performance
          </p>
          <button onClick={() => navigate('/screener')} className="btn-primary flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Find Stocks
          </button>
        </div>
      </div>
    );
  }

  // Calculate watchlist stats
  const gainers = watchlistStocks.filter(w => w.stock.changePercent > 0).length;
  const losers = watchlistStocks.filter(w => w.stock.changePercent < 0).length;

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-dark-surface border-b border-dark-border px-4 py-3 safe-area-top">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-lg hover:bg-dark-card">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold text-lg flex-1">Watchlist</h1>
          <button onClick={() => navigate('/screener')} className="p-2 rounded-lg hover:bg-dark-card">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Stats */}
      <div className="px-4 py-4 bg-dark-surface/50 border-b border-dark-border">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-xs text-gray-400">Watching</p>
            <p className="font-bold text-lg">{watchlistStocks.length}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">Gainers</p>
            <p className="font-bold text-lg text-accent-green">{gainers}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">Losers</p>
            <p className="font-bold text-lg text-accent-red">{losers}</p>
          </div>
        </div>
      </div>

      {/* Watchlist Items */}
      <main className="p-4">
        <div className="space-y-3">
          {watchlistStocks.map(({ symbol, stock }) => {
            const score = getOverallScore(stock.scores);
            const isDeleting = confirmDelete === symbol;

            return (
              <div key={symbol} className="card overflow-hidden">
                <div className="p-4 flex items-center gap-3">
                  <button
                    onClick={() => navigate(`/stock/${symbol}`)}
                    className="w-12 h-12 flex-shrink-0"
                  >
                    <SnowflakeChart scores={stock.scores} size={48} showLabels={false} />
                  </button>

                  <button
                    onClick={() => navigate(`/stock/${symbol}`)}
                    className="flex-1 min-w-0 text-left"
                  >
                    <div className="flex items-center gap-2">
                      <p className="font-bold">{symbol}</p>
                      <span className={`text-sm font-semibold ${getScoreColor(score)}`}>
                        {score}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 truncate">{stock.name}</p>
                    <p className="text-xs text-gray-500">{stock.sector}</p>
                  </button>

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
                  </div>

                  <button
                    onClick={() => setConfirmDelete(isDeleting ? null : symbol)}
                    className={`p-2 rounded-lg ${isDeleting ? 'bg-accent-red/20 text-accent-red' : 'hover:bg-dark-hover text-gray-400'}`}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Confirm Delete */}
                {isDeleting && (
                  <div className="px-4 pb-4 pt-2 border-t border-dark-border flex gap-3">
                    <button
                      onClick={() => setConfirmDelete(null)}
                      className="btn-secondary flex-1 text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleRemove(symbol)}
                      className="btn-danger flex-1 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Watchlist;
