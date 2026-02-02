import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  FileText,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Link2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  RefreshCw
} from 'lucide-react';
import { fetchCongressionalTrades, fetchRecentBills, SECTOR_STOCKS, BILL_SECTOR_MAP } from '../services/politicalApi';

export default function TradesWithLegislation() {
  const navigate = useNavigate();
  const [trades, setTrades] = useState([]);
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedTrade, setExpandedTrade] = useState(null);
  const [viewMode, setViewMode] = useState('trades'); // 'trades' or 'connections'

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [tradesData, billsData] = await Promise.all([
        fetchCongressionalTrades(30),
        fetchRecentBills(20)
      ]);

      // Enrich trades with related legislation
      const enrichedTrades = tradesData.map(trade => {
        const relatedBills = findRelatedBills(trade, billsData);
        return { ...trade, relatedBills };
      });

      setTrades(enrichedTrades);
      setBills(billsData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Find bills related to a trade based on sector/stock
  const findRelatedBills = (trade, allBills) => {
    const symbol = trade.symbol;
    const sector = findSectorForSymbol(symbol);

    return allBills.filter(bill => {
      // Direct stock match
      if (bill.affectedStocks?.includes(symbol)) return true;
      // Sector match
      if (sector && bill.affectedSectors?.includes(sector)) return true;
      return false;
    });
  };

  const findSectorForSymbol = (symbol) => {
    for (const [sector, stocks] of Object.entries(SECTOR_STOCKS)) {
      if (stocks.includes(symbol)) return sector;
    }
    return null;
  };

  const getSectorLabel = (sector) => {
    const labels = {
      defense: 'Defense',
      pharma: 'Pharma',
      bigTech: 'Big Tech',
      cleanEnergy: 'Clean Energy',
      oil: 'Oil & Gas',
      banks: 'Banks',
      semiconductors: 'Semiconductors',
      healthcare: 'Healthcare',
      construction: 'Infrastructure',
      telecom: 'Telecom',
      auto: 'Automotive',
      retail: 'Retail',
      agriculture: 'Agriculture'
    };
    return labels[sector] || sector;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' });
  };

  // Get aggregated connections
  const getConnections = () => {
    const connections = [];

    trades.forEach(trade => {
      if (trade.relatedBills?.length > 0) {
        trade.relatedBills.forEach(bill => {
          connections.push({
            trade,
            bill,
            sector: findSectorForSymbol(trade.symbol),
            strength: calculateConnectionStrength(trade, bill)
          });
        });
      }
    });

    // Sort by connection strength
    return connections.sort((a, b) => b.strength - a.strength).slice(0, 20);
  };

  const calculateConnectionStrength = (trade, bill) => {
    let strength = 0;

    // Direct stock match is strongest
    if (bill.affectedStocks?.includes(trade.symbol)) strength += 10;

    // Sector match
    const sector = findSectorForSymbol(trade.symbol);
    if (sector && bill.affectedSectors?.includes(sector)) strength += 5;

    // Large trade amounts
    if (trade.isUnusual) strength += 3;

    // Recent trades
    const daysSinceTrade = Math.floor((Date.now() - new Date(trade.transactionDate)) / (1000 * 60 * 60 * 24));
    if (daysSinceTrade < 7) strength += 3;
    else if (daysSinceTrade < 30) strength += 1;

    // Bill sentiment alignment
    if (trade.transaction === 'Purchase' && bill.sentiment === 'bullish') strength += 2;
    if (trade.transaction === 'Sale' && bill.sentiment === 'bearish') strength += 2;

    return strength;
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-3 text-accent-blue" />
        <p className="text-gray-400">Loading trades & legislation...</p>
      </div>
    );
  }

  const connections = getConnections();
  const tradesWithBills = trades.filter(t => t.relatedBills?.length > 0);

  return (
    <div className="space-y-4">
      {/* View Toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setViewMode('trades')}
          className={`flex-1 py-2 rounded-lg font-medium text-sm transition-colors ${
            viewMode === 'trades'
              ? 'bg-accent-blue text-white'
              : 'bg-dark-card text-gray-400 hover:text-white'
          }`}
        >
          Recent Trades ({trades.length})
        </button>
        <button
          onClick={() => setViewMode('connections')}
          className={`flex-1 py-2 rounded-lg font-medium text-sm transition-colors ${
            viewMode === 'connections'
              ? 'bg-accent-purple text-white'
              : 'bg-dark-card text-gray-400 hover:text-white'
          }`}
        >
          Trade-Bill Links ({connections.length})
        </button>
      </div>

      {/* Summary */}
      <div className="card bg-gradient-to-r from-dark-card to-dark-surface">
        <div className="flex items-center gap-3 mb-2">
          <Link2 className="w-5 h-5 text-accent-cyan" />
          <span className="font-semibold text-white">Trade-Legislation Analysis</span>
        </div>
        <p className="text-sm text-gray-400">
          {tradesWithBills.length} of {trades.length} recent trades are linked to active legislation.
          This may indicate insider awareness of upcoming policy changes.
        </p>
      </div>

      {viewMode === 'trades' ? (
        /* Trades View */
        <div className="space-y-2">
          {trades.map((trade, idx) => {
            const isExpanded = expandedTrade === idx;
            const hasRelatedBills = trade.relatedBills?.length > 0;
            const sector = findSectorForSymbol(trade.symbol);

            return (
              <div
                key={trade.id || idx}
                className={`card transition-all ${hasRelatedBills ? 'border-accent-purple/30' : ''}`}
              >
                {/* Trade Header */}
                <div
                  className="flex items-start justify-between cursor-pointer"
                  onClick={() => setExpandedTrade(isExpanded ? null : idx)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/stock/${trade.symbol}`);
                        }}
                        className="font-bold text-white text-lg hover:text-accent-blue cursor-pointer"
                      >
                        {trade.symbol}
                      </span>
                      <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                        trade.transaction === 'Purchase'
                          ? 'bg-accent-green/20 text-accent-green'
                          : 'bg-accent-red/20 text-accent-red'
                      }`}>
                        {trade.transaction}
                      </span>
                      {trade.party && trade.party !== 'Unknown' && (
                        <span className={`px-1.5 py-0.5 rounded text-xs ${
                          trade.party === 'D' ? 'bg-blue-500/20 text-blue-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {trade.party}
                        </span>
                      )}
                      {trade.isUnusual && (
                        <AlertTriangle className="w-4 h-4 text-accent-orange" />
                      )}
                      {hasRelatedBills && (
                        <span className="flex items-center gap-1 text-xs text-accent-purple">
                          <FileText className="w-3 h-3" />
                          {trade.relatedBills.length} bills
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-400 mt-1">{trade.politician}</p>

                    {sector && (
                      <span className="text-xs text-gray-500">
                        {getSectorLabel(sector)} sector
                      </span>
                    )}
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-medium text-white">{trade.amount}</p>
                    <p className="text-xs text-gray-500">{formatDate(trade.transactionDate)}</p>
                    {hasRelatedBills && (
                      isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-gray-400 ml-auto mt-1" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 ml-auto mt-1" />
                      )
                    )}
                  </div>
                </div>

                {/* Related Bills (Expanded) */}
                {isExpanded && hasRelatedBills && (
                  <div className="mt-3 pt-3 border-t border-dark-border">
                    <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                      <Link2 className="w-3 h-3" />
                      Related Legislation:
                    </p>
                    <div className="space-y-2">
                      {trade.relatedBills.map((bill, billIdx) => (
                        <div
                          key={billIdx}
                          className="p-2 rounded-lg bg-dark-surface"
                        >
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
                                <span className={`text-xs px-1 rounded ${
                                  bill.sentiment === 'bullish' ? 'bg-accent-green/20 text-accent-green' :
                                  bill.sentiment === 'bearish' ? 'bg-accent-red/20 text-accent-red' :
                                  'bg-gray-500/20 text-gray-400'
                                }`}>
                                  {bill.sentiment}
                                </span>
                              </div>
                              <p className="text-sm text-gray-300 line-clamp-2">{bill.title}</p>

                              {/* Analysis */}
                              <div className="mt-2 p-2 rounded bg-dark-card text-xs">
                                <span className="text-gray-500">Possible connection: </span>
                                <span className="text-gray-300">
                                  {trade.transaction === 'Purchase' && bill.sentiment === 'bullish' && (
                                    <>Politician bought {trade.symbol} ahead of potentially favorable legislation</>
                                  )}
                                  {trade.transaction === 'Purchase' && bill.sentiment === 'bearish' && (
                                    <>Bought despite bearish bill - may expect bill to fail or have insider info</>
                                  )}
                                  {trade.transaction === 'Sale' && bill.sentiment === 'bearish' && (
                                    <>Sold {trade.symbol} ahead of potentially harmful legislation</>
                                  )}
                                  {trade.transaction === 'Sale' && bill.sentiment === 'bullish' && (
                                    <>Sold despite bullish bill - may have other information</>
                                  )}
                                  {bill.sentiment === 'neutral' && (
                                    <>Stock/sector mentioned in pending legislation</>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        /* Connections View */
        <div className="space-y-2">
          <p className="text-sm text-gray-400 mb-3">
            Trades ranked by connection strength to active legislation:
          </p>

          {connections.map((conn, idx) => (
            <div
              key={idx}
              className="card border border-accent-purple/20"
            >
              {/* Connection Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent-purple/20 text-accent-purple">
                    Strength: {conn.strength}
                  </span>
                  {conn.sector && (
                    <span className="text-xs text-gray-500">
                      {getSectorLabel(conn.sector)}
                    </span>
                  )}
                </div>
              </div>

              {/* Trade */}
              <div className="flex items-center gap-3 p-2 rounded-lg bg-dark-surface mb-2">
                <Users className="w-4 h-4 text-accent-blue" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      onClick={() => navigate(`/stock/${conn.trade.symbol}`)}
                      className="font-bold text-white hover:text-accent-blue cursor-pointer"
                    >
                      {conn.trade.symbol}
                    </span>
                    <span className={`text-xs ${
                      conn.trade.transaction === 'Purchase' ? 'text-accent-green' : 'text-accent-red'
                    }`}>
                      {conn.trade.transaction}
                    </span>
                    {conn.trade.party && conn.trade.party !== 'Unknown' && (
                      <span className={`text-xs ${
                        conn.trade.party === 'D' ? 'text-blue-400' : 'text-red-400'
                      }`}>
                        ({conn.trade.party})
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400">
                    {conn.trade.politician} • {conn.trade.amount} • {formatDate(conn.trade.transactionDate)}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center my-1">
                <div className="w-0.5 h-3 bg-accent-purple/50" />
              </div>

              {/* Bill */}
              <div className="flex items-start gap-3 p-2 rounded-lg bg-dark-surface">
                <FileText className={`w-4 h-4 mt-0.5 ${
                  conn.bill.sentiment === 'bullish' ? 'text-accent-green' :
                  conn.bill.sentiment === 'bearish' ? 'text-accent-red' : 'text-gray-400'
                }`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-accent-blue">
                      {conn.bill.type}.{conn.bill.number}
                    </span>
                    <span className={`text-xs px-1 rounded ${
                      conn.bill.sentiment === 'bullish' ? 'bg-accent-green/20 text-accent-green' :
                      conn.bill.sentiment === 'bearish' ? 'bg-accent-red/20 text-accent-red' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {conn.bill.sentiment}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 line-clamp-2">{conn.bill.title}</p>
                </div>
              </div>

              {/* Insight */}
              <div className="mt-2 p-2 rounded bg-accent-purple/10 text-xs text-gray-300">
                {conn.trade.transaction === 'Purchase' && conn.bill.sentiment === 'bullish' ? (
                  <span className="text-accent-green">
                    Bullish alignment: Purchase ahead of favorable legislation
                  </span>
                ) : conn.trade.transaction === 'Sale' && conn.bill.sentiment === 'bearish' ? (
                  <span className="text-accent-red">
                    Bearish alignment: Sale ahead of unfavorable legislation
                  </span>
                ) : (
                  <span>
                    Stock affected by pending {conn.bill.sentiment} legislation
                  </span>
                )}
              </div>
            </div>
          ))}

          {connections.length === 0 && (
            <div className="card text-center py-8">
              <Link2 className="w-12 h-12 text-gray-600 mx-auto mb-2" />
              <p className="text-gray-400">No direct trade-legislation connections found</p>
            </div>
          )}
        </div>
      )}

      {/* Disclaimer */}
      <div className="text-center py-2">
        <p className="text-xs text-gray-500">
          Data from official congressional disclosures. Connections are algorithmic, not proven causation.
        </p>
      </div>
    </div>
  );
}
