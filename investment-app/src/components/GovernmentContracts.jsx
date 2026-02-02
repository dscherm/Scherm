import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  DollarSign,
  Calendar,
  ChevronRight,
  ExternalLink,
  Filter,
  ChevronDown
} from 'lucide-react';
import usePoliticalData from '../hooks/usePoliticalData';

export default function GovernmentContracts() {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [minAmount, setMinAmount] = useState(10);
  const {
    loading,
    getFilteredContracts,
    getContractStats,
    setFilter
  } = usePoliticalData();

  const contracts = getFilteredContracts();
  const stats = getContractStats();

  const formatAmount = (amount) => {
    if (!amount) return '$0';
    if (amount >= 1e9) return `$${(amount / 1e9).toFixed(2)}B`;
    if (amount >= 1e6) return `$${(amount / 1e6).toFixed(1)}M`;
    if (amount >= 1e3) return `$${(amount / 1e3).toFixed(0)}K`;
    return `$${amount}`;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getAgencyColor = (agency) => {
    if (agency?.toLowerCase().includes('defense')) return 'bg-red-500/20 text-red-400';
    if (agency?.toLowerCase().includes('health')) return 'bg-green-500/20 text-green-400';
    if (agency?.toLowerCase().includes('veterans')) return 'bg-blue-500/20 text-blue-400';
    if (agency?.toLowerCase().includes('energy')) return 'bg-yellow-500/20 text-yellow-400';
    return 'bg-purple-500/20 text-purple-400';
  };

  const handleMinAmountChange = (value) => {
    setMinAmount(value);
    setFilter('contractMinAmount', value * 1000000);
  };

  return (
    <div className="space-y-4">
      {/* Stats Summary */}
      <div className="grid grid-cols-2 gap-3">
        <div className="card">
          <p className="text-xs text-gray-500">Total Value</p>
          <p className="text-2xl font-bold text-accent-green">{formatAmount(stats.totalValue)}</p>
          <p className="text-xs text-gray-400">{stats.totalContracts} contracts</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-500">Defense Contracts</p>
          <p className="text-2xl font-bold text-accent-red">{stats.defenseContracts}</p>
          <p className="text-xs text-gray-400">
            {Math.round((stats.defenseContracts / stats.totalContracts) * 100) || 0}% of total
          </p>
        </div>
      </div>

      {/* Top Agencies */}
      <div className="card">
        <h4 className="text-sm font-medium text-gray-400 mb-3">Top Agencies by Value</h4>
        <div className="space-y-2">
          {stats.topAgencies.map(({ agency, value }) => (
            <div key={agency} className="flex items-center justify-between">
              <span className="text-sm text-white truncate flex-1 mr-2">{agency}</span>
              <span className="text-sm text-accent-green font-medium">
                {formatAmount(value)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Contractors */}
      <div className="card">
        <h4 className="text-sm font-medium text-gray-400 mb-3">Top Contractors</h4>
        <div className="space-y-2">
          {stats.topContractors.map(({ name, value, count, symbol }) => (
            <div
              key={name}
              onClick={() => symbol && navigate(`/investment-app/stock/${symbol}`)}
              className={`flex items-center justify-between p-2 rounded-lg ${
                symbol ? 'hover:bg-dark-hover cursor-pointer' : ''
              }`}
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                {symbol && (
                  <span className="px-2 py-0.5 rounded bg-accent-blue/20 text-accent-blue text-xs font-medium flex-shrink-0">
                    {symbol}
                  </span>
                )}
                <span className="text-sm text-white truncate">{name}</span>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm text-accent-green font-medium">{formatAmount(value)}</p>
                <p className="text-xs text-gray-500">{count} contracts</p>
              </div>
            </div>
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
          <div className="mt-3 pt-3 border-t border-dark-border">
            <label className="text-xs text-gray-500 mb-2 block">
              Minimum Contract Value: ${minAmount}M+
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={minAmount}
              onChange={(e) => handleMinAmountChange(parseInt(e.target.value))}
              className="w-full h-2 bg-dark-surface rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$1M</span>
              <span>$100M</span>
            </div>
          </div>
        )}
      </div>

      {/* Contracts List */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-400">
          Recent Contracts ({contracts.length})
        </h3>

        {loading.contracts ? (
          <div className="card text-center py-8">
            <div className="animate-spin w-8 h-8 border-2 border-accent-blue border-t-transparent rounded-full mx-auto" />
            <p className="text-gray-400 mt-2">Loading contracts...</p>
          </div>
        ) : contracts.length === 0 ? (
          <div className="card text-center py-8">
            <Building2 className="w-12 h-12 text-gray-600 mx-auto mb-2" />
            <p className="text-gray-400">No contracts found</p>
          </div>
        ) : (
          contracts.map(contract => (
            <div
              key={contract.id}
              onClick={() => contract.symbol && navigate(`/investment-app/stock/${contract.symbol}`)}
              className={`card transition-colors ${
                contract.symbol ? 'hover:bg-dark-hover cursor-pointer' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {contract.symbol && (
                    <span className="px-2 py-0.5 rounded bg-accent-blue/20 text-accent-blue text-xs font-bold">
                      {contract.symbol}
                    </span>
                  )}
                  <span className={`px-2 py-0.5 rounded text-xs ${getAgencyColor(contract.agency)}`}>
                    {contract.subAgency || contract.agency}
                  </span>
                </div>
                <span className="text-lg font-bold text-accent-green">
                  {formatAmount(contract.amount)}
                </span>
              </div>

              <h4 className="text-sm font-medium text-white mb-1">
                {contract.contractor}
              </h4>

              <p className="text-xs text-gray-400 line-clamp-2 mb-2">
                {contract.description}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(contract.date)}
                  </span>
                  <span>{contract.type}</span>
                </div>
                {contract.symbol && (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Data Source Notice */}
      <div className="text-center py-2">
        <p className="text-xs text-gray-500">
          Data from USAspending.gov
          <ExternalLink className="w-3 h-3 inline ml-1" />
        </p>
      </div>
    </div>
  );
}
