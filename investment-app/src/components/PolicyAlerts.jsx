import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  TrendingUp,
  TrendingDown,
  Minus,
  Filter,
  ChevronDown,
  ExternalLink,
  Calendar,
  User,
  Building
} from 'lucide-react';
import usePoliticalData from '../hooks/usePoliticalData';
import { SECTOR_STOCKS } from '../services/politicalApi';

export default function PolicyAlerts() {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const {
    loading,
    filters,
    setFilter,
    getFilteredBills,
    getBillStats
  } = usePoliticalData();

  const bills = getFilteredBills();
  const stats = getBillStats();

  const sectors = Object.keys(SECTOR_STOCKS);

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getSentimentIcon = (sentiment) => {
    if (sentiment === 'bullish') return <TrendingUp className="w-4 h-4 text-accent-green" />;
    if (sentiment === 'bearish') return <TrendingDown className="w-4 h-4 text-accent-red" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  const getSentimentColor = (sentiment) => {
    if (sentiment === 'bullish') return 'text-accent-green bg-accent-green/20';
    if (sentiment === 'bearish') return 'text-accent-red bg-accent-red/20';
    return 'text-gray-400 bg-gray-500/20';
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
      auto: 'Auto',
      retail: 'Retail',
      agriculture: 'Agriculture'
    };
    return labels[sector] || sector;
  };

  return (
    <div className="space-y-4">
      {/* Sentiment Overview */}
      <div className="grid grid-cols-3 gap-2">
        <div className="card text-center py-3 border border-accent-green/30">
          <TrendingUp className="w-5 h-5 text-accent-green mx-auto mb-1" />
          <p className="text-lg font-bold text-white">{stats.bullish}</p>
          <p className="text-xs text-accent-green">Bullish</p>
        </div>
        <div className="card text-center py-3 border border-accent-red/30">
          <TrendingDown className="w-5 h-5 text-accent-red mx-auto mb-1" />
          <p className="text-lg font-bold text-white">{stats.bearish}</p>
          <p className="text-xs text-accent-red">Bearish</p>
        </div>
        <div className="card text-center py-3">
          <Minus className="w-5 h-5 text-gray-400 mx-auto mb-1" />
          <p className="text-lg font-bold text-white">{stats.neutral}</p>
          <p className="text-xs text-gray-400">Neutral</p>
        </div>
      </div>

      {/* Bills by Sector */}
      <div className="card">
        <h4 className="text-sm font-medium text-gray-400 mb-3">Bills by Sector</h4>
        <div className="flex flex-wrap gap-2">
          {Object.entries(stats.bySector).map(([sector, count]) => (
            <button
              key={sector}
              onClick={() => setFilter('billSector', sector === filters.billSector ? 'all' : sector)}
              className={`px-2 py-1 rounded-full text-xs transition-colors ${
                filters.billSector === sector
                  ? 'bg-accent-blue text-white'
                  : 'bg-dark-surface text-gray-400 hover:text-white'
              }`}
            >
              {getSectorLabel(sector)} ({count})
            </button>
          ))}
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
            {/* Sentiment Filter */}
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Market Impact</label>
              <div className="flex gap-2">
                {['all', 'bullish', 'bearish', 'neutral'].map(sentiment => (
                  <button
                    key={sentiment}
                    onClick={() => setFilter('billSentiment', sentiment)}
                    className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                      filters.billSentiment === sentiment
                        ? sentiment === 'bullish' ? 'bg-accent-green text-white'
                          : sentiment === 'bearish' ? 'bg-accent-red text-white'
                          : sentiment === 'neutral' ? 'bg-gray-500 text-white'
                          : 'bg-accent-blue text-white'
                        : 'bg-dark-surface text-gray-400'
                    }`}
                  >
                    {sentiment !== 'all' && getSentimentIcon(sentiment)}
                    {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Sector Filter */}
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Sector</label>
              <select
                value={filters.billSector}
                onChange={(e) => setFilter('billSector', e.target.value)}
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-3 py-2 text-white text-sm"
              >
                <option value="all">All Sectors</option>
                {sectors.map(sector => (
                  <option key={sector} value={sector}>
                    {getSectorLabel(sector)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Bills List */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-400">
          Active Legislation ({bills.length})
        </h3>

        {loading.bills ? (
          <div className="card text-center py-8">
            <div className="animate-spin w-8 h-8 border-2 border-accent-blue border-t-transparent rounded-full mx-auto" />
            <p className="text-gray-400 mt-2">Loading bills...</p>
          </div>
        ) : bills.length === 0 ? (
          <div className="card text-center py-8">
            <FileText className="w-12 h-12 text-gray-600 mx-auto mb-2" />
            <p className="text-gray-400">No bills match your filters</p>
          </div>
        ) : (
          bills.map(bill => (
            <div key={bill.id} className="card">
              {/* Header */}
              <div className="flex items-start gap-3 mb-2">
                <div className={`p-2 rounded-lg ${getSentimentColor(bill.sentiment)}`}>
                  {getSentimentIcon(bill.sentiment)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-accent-blue">
                      {bill.type}.{bill.number}
                    </span>
                    <span className={`text-xs px-1.5 py-0.5 rounded ${getSentimentColor(bill.sentiment)}`}>
                      {bill.sentiment}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-white leading-tight">
                    {bill.title}
                  </h4>
                </div>
              </div>

              {/* Sponsor */}
              {bill.sponsor && (
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                  <User className="w-3 h-3" />
                  <span>
                    {bill.sponsor.firstName} {bill.sponsor.lastName}
                    <span className={`ml-1 ${
                      bill.sponsor.party === 'D' ? 'text-blue-400' : 'text-red-400'
                    }`}>
                      ({bill.sponsor.party}-{bill.sponsor.state})
                    </span>
                  </span>
                </div>
              )}

              {/* Latest Action */}
              {bill.latestAction && (
                <div className="p-2 rounded-lg bg-dark-surface mb-2">
                  <p className="text-xs text-gray-400">
                    <span className="text-gray-500">Latest: </span>
                    {bill.latestAction.text}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDate(bill.latestAction.actionDate)}
                  </p>
                </div>
              )}

              {/* Affected Sectors */}
              {bill.affectedSectors?.length > 0 && (
                <div className="mb-2">
                  <p className="text-xs text-gray-500 mb-1">Affected Sectors:</p>
                  <div className="flex flex-wrap gap-1">
                    {bill.affectedSectors.map(sector => (
                      <span
                        key={sector}
                        className="text-xs px-2 py-0.5 rounded-full bg-dark-surface text-gray-400"
                      >
                        {getSectorLabel(sector)}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Affected Stocks */}
              {bill.affectedStocks?.length > 0 && (
                <div>
                  <p className="text-xs text-gray-500 mb-1">Stocks to Watch:</p>
                  <div className="flex flex-wrap gap-1">
                    {bill.affectedStocks.map(symbol => (
                      <button
                        key={symbol}
                        onClick={() => navigate(`/investment-app/stock/${symbol}`)}
                        className={`text-xs px-2 py-0.5 rounded font-medium transition-colors ${
                          bill.sentiment === 'bullish'
                            ? 'bg-accent-green/20 text-accent-green hover:bg-accent-green/30'
                            : bill.sentiment === 'bearish'
                            ? 'bg-accent-red/20 text-accent-red hover:bg-accent-red/30'
                            : 'bg-dark-surface text-gray-400 hover:text-white'
                        }`}
                      >
                        {symbol}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Date */}
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-dark-border">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Introduced {formatDate(bill.introducedDate)}
                </span>
                {bill.url && (
                  <a
                    href={bill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent-blue flex items-center gap-1 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Full Text <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Data Source Notice */}
      <div className="text-center py-2">
        <p className="text-xs text-gray-500">
          Data from Congress.gov
          <ExternalLink className="w-3 h-3 inline ml-1" />
        </p>
      </div>
    </div>
  );
}
