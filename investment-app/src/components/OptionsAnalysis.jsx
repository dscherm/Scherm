import { useState, useEffect } from 'react';
import {
  TrendingUp, TrendingDown, AlertTriangle, Info, RefreshCw,
  ChevronDown, ChevronUp, Activity, Target, Shield, Zap
} from 'lucide-react';
import { fetchOptionsChain, analyzeOptions, formatExpirationDate, daysToExpiration } from '../services/optionsApi';

function OptionsAnalysis({ symbol, stockPrice }) {
  const [optionsData, setOptionsData] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedSection, setExpandedSection] = useState('implications');

  useEffect(() => {
    const loadOptions = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchOptionsChain(symbol);
        setOptionsData(data);

        const analysisResult = analyzeOptions(data, stockPrice);
        setAnalysis(analysisResult);
      } catch (err) {
        setError('Unable to load options data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (symbol && stockPrice) {
      loadOptions();
    }
  }, [symbol, stockPrice]);

  if (loading) {
    return (
      <div className="card p-6 flex items-center justify-center">
        <RefreshCw className="w-6 h-6 animate-spin text-accent-blue mr-3" />
        <span className="text-gray-400">Loading options analysis...</span>
      </div>
    );
  }

  if (error || !analysis) {
    return (
      <div className="card p-6 text-center">
        <AlertTriangle className="w-8 h-8 text-gray-500 mx-auto mb-2" />
        <p className="text-gray-400">{error || 'No options data available for this stock'}</p>
      </div>
    );
  }

  const getSentimentColor = (score) => {
    if (score >= 65) return 'text-accent-green';
    if (score >= 45) return 'text-gray-400';
    return 'text-accent-red';
  };

  const getSentimentBg = (score) => {
    if (score >= 65) return 'bg-accent-green/20';
    if (score >= 45) return 'bg-gray-500/20';
    return 'bg-accent-red/20';
  };

  const getImplicationIcon = (type) => {
    switch (type) {
      case 'bullish':
        return <TrendingUp className="w-5 h-5 text-accent-green" />;
      case 'bearish':
        return <TrendingDown className="w-5 h-5 text-accent-red" />;
      case 'caution':
        return <AlertTriangle className="w-5 h-5 text-accent-orange" />;
      default:
        return <Info className="w-5 h-5 text-accent-blue" />;
    }
  };

  const getImplicationBg = (type) => {
    switch (type) {
      case 'bullish':
        return 'bg-accent-green/10 border-accent-green/30';
      case 'bearish':
        return 'bg-accent-red/10 border-accent-red/30';
      case 'caution':
        return 'bg-accent-orange/10 border-accent-orange/30';
      default:
        return 'bg-accent-blue/10 border-accent-blue/30';
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="space-y-4">
      {/* Options Sentiment Overview */}
      <div className="card p-4">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-accent-purple" />
          Options Market Sentiment
        </h3>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold">{analysis.sentiment.label}</p>
            <p className="text-sm text-gray-400">Based on options flow</p>
          </div>
          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getSentimentBg(analysis.sentiment.score)}`}>
            <span className={`text-2xl font-bold ${getSentimentColor(analysis.sentiment.score)}`}>
              {analysis.sentiment.score}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-dark-surface rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Call Volume</p>
            <p className="font-bold text-accent-green">{analysis.sentiment.callVolume.toLocaleString()}</p>
          </div>
          <div className="bg-dark-surface rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Put Volume</p>
            <p className="font-bold text-accent-red">{analysis.sentiment.putVolume.toLocaleString()}</p>
          </div>
          <div className="bg-dark-surface rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Call Open Interest</p>
            <p className="font-semibold">{analysis.sentiment.callOI.toLocaleString()}</p>
          </div>
          <div className="bg-dark-surface rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Put Open Interest</p>
            <p className="font-semibold">{analysis.sentiment.putOI.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Implications Section */}
      <div className="card overflow-hidden">
        <button
          onClick={() => toggleSection('implications')}
          className="w-full p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent-orange" />
            <span className="font-semibold">Market Implications</span>
            <span className="text-sm text-gray-400">({analysis.implications.length})</span>
          </div>
          {expandedSection === 'implications' ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>

        {expandedSection === 'implications' && (
          <div className="px-4 pb-4 space-y-3">
            {analysis.implications.map((implication, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border ${getImplicationBg(implication.type)}`}
              >
                <div className="flex items-start gap-3">
                  {getImplicationIcon(implication.type)}
                  <div>
                    <p className="font-medium">{implication.title}</p>
                    <p className="text-sm text-gray-400 mt-1">{implication.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {analysis.implications.length === 0 && (
              <p className="text-gray-400 text-center py-4">No significant implications detected</p>
            )}
          </div>
        )}
      </div>

      {/* Key Metrics Section */}
      <div className="card overflow-hidden">
        <button
          onClick={() => toggleSection('metrics')}
          className="w-full p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-accent-blue" />
            <span className="font-semibold">Key Options Metrics</span>
          </div>
          {expandedSection === 'metrics' ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>

        {expandedSection === 'metrics' && (
          <div className="px-4 pb-4 space-y-4">
            {/* Put/Call Ratio */}
            <div className="bg-dark-surface rounded-lg p-3">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Put/Call Ratio (Volume)</span>
                <span className="font-bold">{analysis.putCallRatio.volumeRatio}</span>
              </div>
              <p className="text-xs text-gray-500">{analysis.putCallRatio.interpretation}</p>
            </div>

            {/* Max Pain */}
            <div className="bg-dark-surface rounded-lg p-3">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Max Pain Strike</span>
                <span className="font-bold">${analysis.maxPain.strike}</span>
              </div>
              <p className="text-xs text-gray-500">{analysis.maxPain.interpretation}</p>
            </div>

            {/* Implied Move */}
            {analysis.impliedMove.percent !== 'N/A' && (
              <div className="bg-dark-surface rounded-lg p-3">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">Implied Move</span>
                  <span className="font-bold">±{analysis.impliedMove.percent}%</span>
                </div>
                <p className="text-xs text-gray-500">
                  Expected range: ${analysis.impliedMove.range.low} - ${analysis.impliedMove.range.high}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Support/Resistance Levels */}
      <div className="card overflow-hidden">
        <button
          onClick={() => toggleSection('levels')}
          className="w-full p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-accent-cyan" />
            <span className="font-semibold">Options-Based Levels</span>
          </div>
          {expandedSection === 'levels' ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>

        {expandedSection === 'levels' && (
          <div className="px-4 pb-4">
            {/* Resistance Levels */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-400 mb-2">Resistance (Call OI)</p>
              <div className="space-y-2">
                {analysis.keyLevels.resistance.map((level, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-dark-surface rounded-lg p-2">
                    <span className="font-medium">${level.strike}</span>
                    <span className="text-sm text-accent-red">+{level.distancePercent}%</span>
                    <span className="text-xs text-gray-400">{level.openInterest?.toLocaleString()} OI</span>
                  </div>
                ))}
                {analysis.keyLevels.resistance.length === 0 && (
                  <p className="text-gray-500 text-sm">No significant resistance levels</p>
                )}
              </div>
            </div>

            {/* Support Levels */}
            <div>
              <p className="text-sm font-medium text-gray-400 mb-2">Support (Put OI)</p>
              <div className="space-y-2">
                {analysis.keyLevels.support.map((level, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-dark-surface rounded-lg p-2">
                    <span className="font-medium">${level.strike}</span>
                    <span className="text-sm text-accent-green">-{level.distancePercent}%</span>
                    <span className="text-xs text-gray-400">{level.openInterest?.toLocaleString()} OI</span>
                  </div>
                ))}
                {analysis.keyLevels.support.length === 0 && (
                  <p className="text-gray-500 text-sm">No significant support levels</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Unusual Activity */}
      {analysis.unusualActivity.length > 0 && (
        <div className="card overflow-hidden">
          <button
            onClick={() => toggleSection('unusual')}
            className="w-full p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-accent-orange" />
              <span className="font-semibold">Unusual Activity</span>
              <span className="text-sm text-accent-orange">({analysis.unusualActivity.length})</span>
            </div>
            {expandedSection === 'unusual' ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {expandedSection === 'unusual' && (
            <div className="px-4 pb-4 space-y-2">
              {analysis.unusualActivity.map((activity, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    activity.type === 'CALL'
                      ? 'bg-accent-green/10 border border-accent-green/30'
                      : 'bg-accent-red/10 border border-accent-red/30'
                  }`}
                >
                  <div>
                    <span className={`font-bold ${activity.type === 'CALL' ? 'text-accent-green' : 'text-accent-red'}`}>
                      {activity.type}
                    </span>
                    <span className="text-gray-400 ml-2">${activity.strike}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{activity.volume.toLocaleString()} contracts</p>
                    <p className="text-xs text-gray-400">{activity.volumeToOI}x volume/OI</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 text-center px-4">
        Options analysis is for informational purposes only. Past options activity does not guarantee future stock performance.
      </p>
    </div>
  );
}

export default OptionsAnalysis;
