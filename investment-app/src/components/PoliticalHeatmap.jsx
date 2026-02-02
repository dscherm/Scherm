import { useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  TrendingDown,
  Building2,
  FileText,
  Users,
  ChevronRight,
  Info
} from 'lucide-react';
import usePoliticalData from '../hooks/usePoliticalData';

export default function PoliticalHeatmap() {
  const navigate = useNavigate();
  const { sectorSentiment, loading } = usePoliticalData();

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

  const getSectorIcon = (sector) => {
    // Could customize icons per sector
    return Building2;
  };

  const getScoreColor = (score) => {
    if (score >= 50) return 'bg-accent-green';
    if (score >= 20) return 'bg-green-600';
    if (score > 0) return 'bg-green-800';
    if (score === 0) return 'bg-gray-600';
    if (score > -20) return 'bg-red-800';
    if (score > -50) return 'bg-red-600';
    return 'bg-accent-red';
  };

  const getScoreTextColor = (score) => {
    if (score >= 20) return 'text-accent-green';
    if (score > 0) return 'text-green-400';
    if (score === 0) return 'text-gray-400';
    if (score > -20) return 'text-red-400';
    return 'text-accent-red';
  };

  const formatAmount = (amount) => {
    if (!amount) return '$0';
    if (amount >= 1e9) return `$${(amount / 1e9).toFixed(1)}B`;
    if (amount >= 1e6) return `$${(amount / 1e6).toFixed(0)}M`;
    return `$${(amount / 1e3).toFixed(0)}K`;
  };

  if (loading.sentiment) {
    return (
      <div className="card text-center py-12">
        <div className="animate-spin w-8 h-8 border-2 border-accent-blue border-t-transparent rounded-full mx-auto" />
        <p className="text-gray-400 mt-3">Analyzing political climate...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Info Banner */}
      <div className="card bg-dark-surface border border-dark-border">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-gray-300">
              Political sentiment based on government contracts, congressional trading activity,
              and active legislation affecting each sector.
            </p>
          </div>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="grid grid-cols-1 gap-2">
        {sectorSentiment.map((sector, index) => {
          const SectorIcon = getSectorIcon(sector.sector);
          const barWidth = Math.min(Math.abs(sector.normalizedScore), 100);

          return (
            <div key={sector.sector} className="card">
              {/* Sector Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-white">
                    {getSectorLabel(sector.sector)}
                  </span>
                  <span className={`text-sm font-bold ${getScoreTextColor(sector.normalizedScore)}`}>
                    {sector.normalizedScore > 0 ? '+' : ''}{sector.normalizedScore}%
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {sector.normalizedScore > 0 ? (
                    <TrendingUp className="w-5 h-5 text-accent-green" />
                  ) : sector.normalizedScore < 0 ? (
                    <TrendingDown className="w-5 h-5 text-accent-red" />
                  ) : (
                    <div className="w-5 h-5" />
                  )}
                </div>
              </div>

              {/* Score Bar */}
              <div className="relative h-3 bg-dark-surface rounded-full overflow-hidden mb-3">
                <div
                  className={`absolute h-full rounded-full transition-all duration-500 ${getScoreColor(sector.normalizedScore)}`}
                  style={{
                    width: `${barWidth}%`,
                    left: sector.normalizedScore >= 0 ? '50%' : `${50 - barWidth}%`
                  }}
                />
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-600" />
              </div>

              {/* Stats Row */}
              <div className="flex items-center justify-between text-xs mb-3">
                <div className="flex items-center gap-4">
                  {sector.contracts > 0 && (
                    <span className="flex items-center gap-1 text-gray-400">
                      <Building2 className="w-3 h-3" />
                      {sector.contracts} contracts ({formatAmount(sector.contractValue)})
                    </span>
                  )}
                  {(sector.bullishBills > 0 || sector.bearishBills > 0) && (
                    <span className="flex items-center gap-1 text-gray-400">
                      <FileText className="w-3 h-3" />
                      {sector.bullishBills} bullish / {sector.bearishBills} bearish bills
                    </span>
                  )}
                </div>
              </div>

              {/* Congress Activity */}
              {(sector.congressBuys > 0 || sector.congressSells > 0) && (
                <div className="flex items-center gap-3 text-xs mb-3">
                  <span className="flex items-center gap-1 text-gray-400">
                    <Users className="w-3 h-3" />
                    Congress:
                  </span>
                  {sector.congressBuys > 0 && (
                    <span className="text-accent-green">{sector.congressBuys} buys</span>
                  )}
                  {sector.congressSells > 0 && (
                    <span className="text-accent-red">{sector.congressSells} sells</span>
                  )}
                </div>
              )}

              {/* Recent Events */}
              {sector.recentEvents?.length > 0 && (
                <div className="border-t border-dark-border pt-2 mt-2">
                  <p className="text-xs text-gray-500 mb-1">Recent Events:</p>
                  <div className="space-y-1">
                    {sector.recentEvents.map((event, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          event.type === 'contract' ? 'bg-accent-green' :
                          event.sentiment === 'bullish' ? 'bg-accent-green' :
                          event.sentiment === 'bearish' ? 'bg-accent-red' : 'bg-gray-500'
                        }`} />
                        <span className="text-gray-400 line-clamp-1">{event.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Top Stocks */}
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs text-gray-500">Top stocks:</span>
                <div className="flex flex-wrap gap-1">
                  {sector.topStocks.map(symbol => (
                    <button
                      key={symbol}
                      onClick={() => navigate(`/investment-app/stock/${symbol}`)}
                      className="text-xs px-2 py-0.5 rounded bg-dark-surface text-gray-400 hover:text-white hover:bg-dark-hover transition-colors"
                    >
                      {symbol}
                    </button>
                  ))}
                </div>
                <ChevronRight className="w-3 h-3 text-gray-600 ml-auto" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="card">
        <h4 className="text-sm font-medium text-gray-400 mb-3">How Scores Are Calculated</h4>
        <div className="space-y-2 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-accent-green" />
            <span>Government contracts add positive sentiment</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-accent-blue" />
            <span>Bills analyzed for bullish/bearish impact</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-accent-purple" />
            <span>Congressional trades signal insider sentiment</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-dark-border">
          <p className="text-xs text-gray-500 mb-2">Score Range:</p>
          <div className="flex items-center gap-1">
            <div className="h-2 w-full rounded-l bg-accent-red" />
            <div className="h-2 w-full bg-red-600" />
            <div className="h-2 w-full bg-red-800" />
            <div className="h-2 w-full bg-gray-600" />
            <div className="h-2 w-full bg-green-800" />
            <div className="h-2 w-full bg-green-600" />
            <div className="h-2 w-full rounded-r bg-accent-green" />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Bearish</span>
            <span>Neutral</span>
            <span>Bullish</span>
          </div>
        </div>
      </div>
    </div>
  );
}
