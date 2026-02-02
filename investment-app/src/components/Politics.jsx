import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  Users,
  FileText,
  TrendingUp,
  AlertTriangle,
  Filter,
  RefreshCw,
  ChevronRight,
  DollarSign,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Link2
} from 'lucide-react';
import usePoliticalData from '../hooks/usePoliticalData';
import CongressionalTrades from './CongressionalTrades';
import GovernmentContracts from './GovernmentContracts';
import PolicyAlerts from './PolicyAlerts';
import PoliticalHeatmap from './PoliticalHeatmap';
import TradesWithLegislation from './TradesWithLegislation';

export default function Politics() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const {
    contracts,
    trades,
    bills,
    sectorSentiment,
    loading,
    fetchAll,
    getTradeStats,
    getContractStats,
    getBillStats
  } = usePoliticalData();

  useEffect(() => {
    fetchAll();
  }, []);

  const isLoading = loading.contracts || loading.trades || loading.bills || loading.sentiment;

  const tradeStats = getTradeStats();
  const contractStats = getContractStats();
  const billStats = getBillStats();

  const formatAmount = (amount) => {
    if (amount >= 1e9) return `$${(amount / 1e9).toFixed(1)}B`;
    if (amount >= 1e6) return `$${(amount / 1e6).toFixed(1)}M`;
    if (amount >= 1e3) return `$${(amount / 1e3).toFixed(0)}K`;
    return `$${amount}`;
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'linked', label: 'Trade-Bill Links', icon: Link2 },
    { id: 'trades', label: 'Trades', icon: Users },
    { id: 'contracts', label: 'Contracts', icon: Building2 },
    { id: 'bills', label: 'Bills', icon: FileText },
    { id: 'heatmap', label: 'Heatmap', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      {/* Header */}
      <div className="bg-dark-surface border-b border-dark-border sticky top-0 z-10">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">Political Intel</h1>
            <button
              onClick={fetchAll}
              disabled={isLoading}
              className="p-2 rounded-lg bg-dark-card hover:bg-dark-hover transition-colors"
            >
              <RefreshCw className={`w-5 h-5 text-gray-400 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 mt-3 overflow-x-auto pb-1 -mx-4 px-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-accent-blue text-white'
                    : 'bg-dark-card text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              <StatCard
                title="Congress Trades"
                value={tradeStats.totalTrades}
                subtitle={`${tradeStats.unusualCount} unusual`}
                icon={Users}
                color="blue"
                onClick={() => setActiveTab('trades')}
              />
              <StatCard
                title="Contract Value"
                value={formatAmount(contractStats.totalValue)}
                subtitle={`${contractStats.totalContracts} awards`}
                icon={Building2}
                color="green"
                onClick={() => setActiveTab('contracts')}
              />
              <StatCard
                title="Active Bills"
                value={billStats.total}
                subtitle={`${billStats.bullish} bullish, ${billStats.bearish} bearish`}
                icon={FileText}
                color="purple"
                onClick={() => setActiveTab('bills')}
              />
              <StatCard
                title="Sectors Tracked"
                value={sectorSentiment.length}
                subtitle="Political climate"
                icon={TrendingUp}
                color="orange"
                onClick={() => setActiveTab('heatmap')}
              />
            </div>

            {/* Featured: Trade-Bill Links */}
            <div
              onClick={() => setActiveTab('linked')}
              className="card cursor-pointer hover:border-accent-purple/50 transition-all bg-gradient-to-r from-accent-purple/10 to-dark-card border border-accent-purple/30"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-accent-purple/20">
                  <Link2 className="w-6 h-6 text-accent-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">Trade-Legislation Connections</h3>
                  <p className="text-sm text-gray-400">
                    See which congressional trades may be linked to pending bills
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-accent-purple" />
              </div>
            </div>

            {/* Top Bought by Congress */}
            <div className="card">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4 text-accent-green" />
                  Top Bought by Congress
                </h3>
                <button
                  onClick={() => setActiveTab('trades')}
                  className="text-sm text-accent-blue"
                >
                  See all
                </button>
              </div>
              <div className="space-y-2">
                {tradeStats.topBought.slice(0, 4).map(({ symbol, count }) => (
                  <div
                    key={symbol}
                    onClick={() => navigate(`/stock/${symbol}`)}
                    className="flex items-center justify-between p-2 rounded-lg bg-dark-surface hover:bg-dark-hover cursor-pointer"
                  >
                    <span className="font-medium text-white">{symbol}</span>
                    <span className="text-sm text-accent-green">{count} buys</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Contracts */}
            <div className="card">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-accent-purple" />
                  Recent Major Contracts
                </h3>
                <button
                  onClick={() => setActiveTab('contracts')}
                  className="text-sm text-accent-blue"
                >
                  See all
                </button>
              </div>
              <div className="space-y-2">
                {contracts.slice(0, 3).map(contract => (
                  <div
                    key={contract.id}
                    onClick={() => contract.symbol && navigate(`/investment-app/stock/${contract.symbol}`)}
                    className="p-3 rounded-lg bg-dark-surface hover:bg-dark-hover cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          {contract.symbol && (
                            <span className="px-2 py-0.5 rounded bg-accent-blue/20 text-accent-blue text-xs font-medium">
                              {contract.symbol}
                            </span>
                          )}
                          <span className="text-sm text-gray-400">{contract.contractor}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                          {contract.description}
                        </p>
                      </div>
                      <span className="text-accent-green font-semibold">
                        {formatAmount(contract.amount)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unusual Activity */}
            {tradeStats.unusualTrades.length > 0 && (
              <div className="card border border-accent-orange/30">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-accent-orange" />
                  <h3 className="font-semibold text-white">Unusual Trading Activity</h3>
                </div>
                <div className="space-y-2">
                  {tradeStats.unusualTrades.slice(0, 3).map(trade => (
                    <div
                      key={trade.id}
                      onClick={() => navigate(`/investment-app/stock/${trade.symbol}`)}
                      className="p-3 rounded-lg bg-dark-surface hover:bg-dark-hover cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-white">{trade.symbol}</span>
                            <span className={`text-xs px-1.5 py-0.5 rounded ${
                              trade.transaction === 'Purchase'
                                ? 'bg-accent-green/20 text-accent-green'
                                : 'bg-accent-red/20 text-accent-red'
                            }`}>
                              {trade.transaction}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">{trade.politician}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">{trade.amount}</p>
                          <p className="text-xs text-gray-500">
                            {trade.filingDelay}d filing delay
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Policy Impact Preview */}
            <div className="card">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-accent-cyan" />
                  Active Legislation
                </h3>
                <button
                  onClick={() => setActiveTab('bills')}
                  className="text-sm text-accent-blue"
                >
                  See all
                </button>
              </div>
              <div className="space-y-2">
                {bills.slice(0, 3).map(bill => (
                  <div
                    key={bill.id}
                    className="p-3 rounded-lg bg-dark-surface"
                  >
                    <div className="flex items-start gap-2">
                      <span className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${
                        bill.sentiment === 'bullish' ? 'bg-accent-green' :
                        bill.sentiment === 'bearish' ? 'bg-accent-red' : 'bg-gray-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white line-clamp-2">{bill.title}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {bill.affectedStocks?.slice(0, 3).map(symbol => (
                            <span
                              key={symbol}
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/stock/${symbol}`);
                              }}
                              className="text-xs px-1.5 py-0.5 rounded bg-dark-card text-gray-400 hover:text-white cursor-pointer"
                            >
                              {symbol}
                            </span>
                          ))}
                          {bill.affectedStocks?.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{bill.affectedStocks.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'linked' && <TradesWithLegislation />}
        {activeTab === 'trades' && <CongressionalTrades />}
        {activeTab === 'contracts' && <GovernmentContracts />}
        {activeTab === 'bills' && <PolicyAlerts />}
        {activeTab === 'heatmap' && <PoliticalHeatmap />}
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, icon: Icon, color, onClick }) {
  const colorClasses = {
    blue: 'bg-accent-blue/20 text-accent-blue',
    green: 'bg-accent-green/20 text-accent-green',
    purple: 'bg-accent-purple/20 text-accent-purple',
    orange: 'bg-accent-orange/20 text-accent-orange'
  };

  return (
    <div
      onClick={onClick}
      className="card hover:bg-dark-hover cursor-pointer transition-colors"
    >
      <div className="flex items-start justify-between">
        <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </div>
      <div className="mt-3">
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-sm font-medium text-gray-400">{title}</p>
        <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}
