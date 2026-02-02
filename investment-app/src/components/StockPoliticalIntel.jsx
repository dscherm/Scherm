import { useState, useEffect } from 'react';
import {
  Users,
  Building2,
  FileText,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Clock,
  DollarSign,
  RefreshCw
} from 'lucide-react';
import {
  fetchTradesBySymbol,
  fetchRecentBills,
  fetchRecentContracts,
  SECTOR_STOCKS
} from '../services/politicalApi';

export default function StockPoliticalIntel({ symbol }) {
  const [trades, setTrades] = useState([]);
  const [relatedBills, setRelatedBills] = useState([]);
  const [relatedContracts, setRelatedContracts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [symbol]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [tradesData, billsData, contractsData] = await Promise.all([
        fetchTradesBySymbol(symbol),
        fetchRecentBills(20),
        fetchRecentContracts(20)
      ]);

      setTrades(tradesData);

      // Filter bills that affect this stock
      const stockSector = findSectorForSymbol(symbol);
      const filtered = billsData.filter(bill =>
        bill.affectedStocks?.includes(symbol) ||
        (stockSector && bill.affectedSectors?.includes(stockSector))
      );
      setRelatedBills(filtered.slice(0, 5));

      // Filter contracts for this company
      const contracts = contractsData.filter(c => c.symbol === symbol);
      setRelatedContracts(contracts);
    } catch (error) {
      console.error('Error loading political data:', error);
    } finally {
      setLoading(false);
    }
  };

  const findSectorForSymbol = (sym) => {
    for (const [sector, stocks] of Object.entries(SECTOR_STOCKS)) {
      if (stocks.includes(sym)) return sector;
    }
    return null;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const formatAmount = (amount) => {
    if (!amount) return '$0';
    if (amount >= 1e9) return `$${(amount / 1e9).toFixed(1)}B`;
    if (amount >= 1e6) return `$${(amount / 1e6).toFixed(0)}M`;
    return `$${(amount / 1e3).toFixed(0)}K`;
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2 text-accent-blue" />
        <p className="text-gray-400 text-sm">Loading political intel...</p>
      </div>
    );
  }

  const hasData = trades.length > 0 || relatedBills.length > 0 || relatedContracts.length > 0;

  if (!hasData) {
    return (
      <div className="card text-center py-8">
        <Users className="w-12 h-12 text-gray-600 mx-auto mb-3" />
        <p className="text-gray-400">No political activity found for {symbol}</p>
        <p className="text-sm text-gray-500 mt-1">
          This stock may not be commonly traded by Congress or affected by current legislation
        </p>
      </div>
    );
  }

  // Calculate trade sentiment
  const purchases = trades.filter(t => t.transaction === 'Purchase').length;
  const sales = trades.filter(t => t.transaction === 'Sale').length;
  const sentiment = purchases > sales ? 'bullish' : purchases < sales ? 'bearish' : 'neutral';

  return (
    <div className="space-y-4">
      {/* Summary Stats */}
      {trades.length > 0 && (
        <div className="card">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-accent-purple" />
            <h3 className="font-semibold text-white">Congressional Trading</h3>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="text-center p-2 rounded-lg bg-dark-surface">
              <p className="text-lg font-bold text-accent-green">{purchases}</p>
              <p className="text-xs text-gray-400">Purchases</p>
            </div>
            <div className="text-center p-2 rounded-lg bg-dark-surface">
              <p className="text-lg font-bold text-accent-red">{sales}</p>
              <p className="text-xs text-gray-400">Sales</p>
            </div>
            <div className="text-center p-2 rounded-lg bg-dark-surface">
              <p className={`text-lg font-bold ${
                sentiment === 'bullish' ? 'text-accent-green' :
                sentiment === 'bearish' ? 'text-accent-red' : 'text-gray-400'
              }`}>
                {sentiment === 'bullish' ? (
                  <TrendingUp className="w-5 h-5 mx-auto" />
                ) : sentiment === 'bearish' ? (
                  <TrendingDown className="w-5 h-5 mx-auto" />
                ) : (
                  <span>—</span>
                )}
              </p>
              <p className="text-xs text-gray-400">Sentiment</p>
            </div>
          </div>

          {/* Recent Trades */}
          <div className="space-y-2">
            {trades.slice(0, 5).map((trade, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-dark-surface">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`px-1.5 py-0.5 rounded text-xs ${
                      trade.transaction === 'Purchase'
                        ? 'bg-accent-green/20 text-accent-green'
                        : 'bg-accent-red/20 text-accent-red'
                    }`}>
                      {trade.transaction}
                    </span>
                    <span className={`text-xs px-1 rounded ${
                      trade.party === 'D' ? 'bg-blue-500/20 text-blue-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {trade.party}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{trade.politician}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">{trade.amount}</p>
                  <p className="text-xs text-gray-500">{formatDate(trade.transactionDate)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Contracts */}
      {relatedContracts.length > 0 && (
        <div className="card">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="w-5 h-5 text-accent-green" />
            <h3 className="font-semibold text-white">Government Contracts</h3>
          </div>

          <div className="space-y-2">
            {relatedContracts.map((contract, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-dark-surface">
                <div className="flex items-start justify-between mb-1">
                  <span className="text-xs px-2 py-0.5 rounded bg-accent-blue/20 text-accent-blue">
                    {contract.agency}
                  </span>
                  <span className="text-lg font-bold text-accent-green">
                    {formatAmount(contract.amount)}
                  </span>
                </div>
                <p className="text-sm text-gray-400 line-clamp-2">{contract.description}</p>
                <p className="text-xs text-gray-500 mt-1">
                  <Clock className="w-3 h-3 inline mr-1" />
                  {formatDate(contract.date)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Legislation */}
      {relatedBills.length > 0 && (
        <div className="card">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-accent-cyan" />
            <h3 className="font-semibold text-white">Related Legislation</h3>
          </div>

          <div className="space-y-2">
            {relatedBills.map((bill, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-dark-surface">
                <div className="flex items-start gap-2">
                  <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                    bill.sentiment === 'bullish' ? 'bg-accent-green' :
                    bill.sentiment === 'bearish' ? 'bg-accent-red' : 'bg-gray-500'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-accent-blue">
                        {bill.type}.{bill.number}
                      </span>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        bill.sentiment === 'bullish' ? 'bg-accent-green/20 text-accent-green' :
                        bill.sentiment === 'bearish' ? 'bg-accent-red/20 text-accent-red' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {bill.sentiment}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 line-clamp-2">{bill.title}</p>
                    {bill.latestAction && (
                      <p className="text-xs text-gray-500 mt-1">
                        {bill.latestAction.text?.substring(0, 50)}...
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="text-center py-2">
        <p className="text-xs text-gray-500">
          Political data is for informational purposes only. Not financial advice.
        </p>
      </div>
    </div>
  );
}
