import { useState, useEffect } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Target,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Zap,
  DollarSign,
  BarChart3,
  Users,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Lightbulb
} from 'lucide-react';
import { fetchTradesBySymbol, fetchRecentBills, fetchRecentContracts, SECTOR_STOCKS } from '../services/politicalApi';

export default function StockOutlook({ stock, optionsData }) {
  const [politicalData, setPoliticalData] = useState({ trades: [], bills: [], contracts: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPoliticalData();
  }, [stock.symbol]);

  const loadPoliticalData = async () => {
    setLoading(true);
    try {
      const [trades, bills, contracts] = await Promise.all([
        fetchTradesBySymbol(stock.symbol),
        fetchRecentBills(20),
        fetchRecentContracts(20)
      ]);

      // Filter relevant data
      const sector = findSectorForSymbol(stock.symbol);
      const relatedBills = bills.filter(b =>
        b.affectedStocks?.includes(stock.symbol) ||
        (sector && b.affectedSectors?.includes(sector))
      );
      const relatedContracts = contracts.filter(c => c.symbol === stock.symbol);

      setPoliticalData({ trades, bills: relatedBills, contracts: relatedContracts });
    } catch (error) {
      console.error('Error loading political data:', error);
    } finally {
      setLoading(false);
    }
  };

  const findSectorForSymbol = (symbol) => {
    for (const [sector, stocks] of Object.entries(SECTOR_STOCKS)) {
      if (stocks.includes(symbol)) return sector;
    }
    return null;
  };

  // ============ ANALYSIS ENGINE ============

  // Calculate overall sentiment score (-100 to +100)
  const calculateSentiment = () => {
    let score = 0;
    let factors = [];

    // 1. Fundamental Analysis (from scores)
    const avgScore = stock.scores ?
      (stock.scores.value + stock.scores.future + stock.scores.past + stock.scores.health + stock.scores.dividend) / 5 : 50;

    if (avgScore >= 70) {
      score += 25;
      factors.push({ type: 'bullish', text: 'Strong fundamentals (score: ' + Math.round(avgScore) + ')' });
    } else if (avgScore >= 50) {
      score += 10;
      factors.push({ type: 'neutral', text: 'Decent fundamentals (score: ' + Math.round(avgScore) + ')' });
    } else {
      score -= 15;
      factors.push({ type: 'bearish', text: 'Weak fundamentals (score: ' + Math.round(avgScore) + ')' });
    }

    // 2. Price Momentum
    if (stock.changePercent > 3) {
      score += 15;
      factors.push({ type: 'bullish', text: 'Strong upward momentum today (+' + stock.changePercent.toFixed(1) + '%)' });
    } else if (stock.changePercent > 0) {
      score += 5;
      factors.push({ type: 'neutral', text: 'Slight positive momentum (+' + stock.changePercent.toFixed(1) + '%)' });
    } else if (stock.changePercent < -3) {
      score -= 15;
      factors.push({ type: 'bearish', text: 'Strong downward momentum (' + stock.changePercent.toFixed(1) + '%)' });
    } else if (stock.changePercent < 0) {
      score -= 5;
      factors.push({ type: 'neutral', text: 'Slight negative momentum (' + stock.changePercent.toFixed(1) + '%)' });
    }

    // 3. Valuation (P/E)
    if (stock.pe) {
      if (stock.pe < 15) {
        score += 10;
        factors.push({ type: 'bullish', text: 'Attractive valuation (P/E: ' + stock.pe.toFixed(1) + ')' });
      } else if (stock.pe > 40) {
        score -= 10;
        factors.push({ type: 'bearish', text: 'High valuation risk (P/E: ' + stock.pe.toFixed(1) + ')' });
      }
    }

    // 4. 52-Week Position
    if (stock.week52High && stock.week52Low) {
      const range = stock.week52High - stock.week52Low;
      const position = (stock.price - stock.week52Low) / range;

      if (position > 0.9) {
        score -= 5;
        factors.push({ type: 'bearish', text: 'Near 52-week high (potential resistance)' });
      } else if (position < 0.2) {
        score += 5;
        factors.push({ type: 'bullish', text: 'Near 52-week low (potential support)' });
      }
    }

    // 5. Congressional Trading
    if (politicalData.trades.length > 0) {
      const buys = politicalData.trades.filter(t => t.transaction === 'Purchase').length;
      const sells = politicalData.trades.filter(t => t.transaction === 'Sale').length;

      if (buys > sells * 2) {
        score += 20;
        factors.push({ type: 'bullish', text: `Congress heavily buying (${buys} buys vs ${sells} sells)` });
      } else if (buys > sells) {
        score += 10;
        factors.push({ type: 'bullish', text: `Congress net buying (${buys} buys vs ${sells} sells)` });
      } else if (sells > buys * 2) {
        score -= 20;
        factors.push({ type: 'bearish', text: `Congress heavily selling (${sells} sells vs ${buys} buys)` });
      } else if (sells > buys) {
        score -= 10;
        factors.push({ type: 'bearish', text: `Congress net selling (${sells} sells vs ${buys} buys)` });
      }
    }

    // 6. Related Legislation
    if (politicalData.bills.length > 0) {
      const bullishBills = politicalData.bills.filter(b => b.sentiment === 'bullish').length;
      const bearishBills = politicalData.bills.filter(b => b.sentiment === 'bearish').length;

      if (bullishBills > bearishBills) {
        score += 15;
        factors.push({ type: 'bullish', text: `Favorable legislation pending (${bullishBills} bullish bills)` });
      } else if (bearishBills > bullishBills) {
        score -= 15;
        factors.push({ type: 'bearish', text: `Unfavorable legislation pending (${bearishBills} bearish bills)` });
      }
    }

    // 7. Government Contracts
    if (politicalData.contracts.length > 0) {
      const totalValue = politicalData.contracts.reduce((sum, c) => sum + (c.amount || 0), 0);
      score += 15;
      factors.push({ type: 'bullish', text: `Recent government contracts ($${(totalValue / 1e6).toFixed(0)}M)` });
    }

    // 8. Dividend (for income investors)
    if (stock.dividendYield > 3) {
      score += 5;
      factors.push({ type: 'bullish', text: `Strong dividend yield (${stock.dividendYield.toFixed(2)}%)` });
    }

    // Clamp score
    score = Math.max(-100, Math.min(100, score));

    return { score, factors };
  };

  const { score: sentimentScore, factors } = calculateSentiment();

  // Determine overall outlook
  const getOutlook = () => {
    if (sentimentScore >= 40) return { label: 'Strong Buy', color: 'text-accent-green', bg: 'bg-accent-green' };
    if (sentimentScore >= 20) return { label: 'Buy', color: 'text-green-400', bg: 'bg-green-500' };
    if (sentimentScore >= -10) return { label: 'Hold', color: 'text-yellow-400', bg: 'bg-yellow-500' };
    if (sentimentScore >= -30) return { label: 'Sell', color: 'text-orange-400', bg: 'bg-orange-500' };
    return { label: 'Strong Sell', color: 'text-accent-red', bg: 'bg-accent-red' };
  };

  const outlook = getOutlook();

  // Generate trading strategies
  const getStrategies = () => {
    const strategies = [];

    // Based on sentiment
    if (sentimentScore >= 20) {
      strategies.push({
        name: 'Long Position',
        type: 'bullish',
        description: 'Buy and hold for medium-term gains',
        details: [
          `Entry: Current price ($${stock.price?.toFixed(2)}) or pullback to support`,
          `Target: +10-15% (around $${(stock.price * 1.12).toFixed(2)})`,
          `Stop Loss: -7% (around $${(stock.price * 0.93).toFixed(2)})`
        ],
        risk: 'Medium',
        timeframe: '1-3 months'
      });
    }

    if (sentimentScore <= -20) {
      strategies.push({
        name: 'Short or Avoid',
        type: 'bearish',
        description: 'Consider shorting or staying away',
        details: [
          'Wait for clearer bullish signals before entry',
          'If holding, consider reducing position',
          'Watch for support levels before adding'
        ],
        risk: 'High',
        timeframe: 'Variable'
      });
    }

    // Dividend strategy
    if (stock.dividendYield > 2) {
      strategies.push({
        name: 'Dividend Capture',
        type: 'income',
        description: 'Hold for dividend income',
        details: [
          `Annual yield: ${stock.dividendYield?.toFixed(2)}%`,
          `Quarterly dividend: ~$${(stock.dividend / 4)?.toFixed(2)} per share`,
          'Consider DRIP for compound growth'
        ],
        risk: 'Low',
        timeframe: 'Long-term'
      });
    }

    // Volatility play
    if (stock.beta && stock.beta > 1.3) {
      strategies.push({
        name: 'Volatility Play',
        type: 'options',
        description: 'Use options for leveraged exposure',
        details: [
          `High beta (${stock.beta?.toFixed(2)}) = larger moves`,
          'Consider ATM calls if bullish',
          'Consider protective puts if holding shares'
        ],
        risk: 'High',
        timeframe: '1-4 weeks'
      });
    }

    // Political catalyst
    if (politicalData.bills.length > 0 || politicalData.contracts.length > 0) {
      strategies.push({
        name: 'Political Catalyst Play',
        type: 'event',
        description: 'Trade around political events',
        details: [
          politicalData.bills.length > 0 ? `${politicalData.bills.length} pending bills could move stock` : null,
          politicalData.contracts.length > 0 ? 'Government contract revenue potential' : null,
          'Watch for vote dates and announcements'
        ].filter(Boolean),
        risk: 'Medium-High',
        timeframe: 'Event-dependent'
      });
    }

    // Range trading if neutral
    if (sentimentScore > -15 && sentimentScore < 15) {
      strategies.push({
        name: 'Range Trading',
        type: 'neutral',
        description: 'Buy support, sell resistance',
        details: [
          `Support zone: ~$${(stock.week52Low * 1.05)?.toFixed(2)}`,
          `Resistance zone: ~$${(stock.week52High * 0.95)?.toFixed(2)}`,
          'Use tight stops outside range'
        ],
        risk: 'Medium',
        timeframe: '1-4 weeks'
      });
    }

    // Value play
    if (stock.pe && stock.pe < 15 && stock.scores?.value >= 60) {
      strategies.push({
        name: 'Value Accumulation',
        type: 'value',
        description: 'Accumulate undervalued shares',
        details: [
          `P/E of ${stock.pe?.toFixed(1)} below market average`,
          'Dollar-cost average over time',
          'Hold for multiple expansion'
        ],
        risk: 'Low-Medium',
        timeframe: '6-12 months'
      });
    }

    return strategies;
  };

  const strategies = getStrategies();

  // Generate forecast
  const getForecast = () => {
    const shortTerm = sentimentScore >= 10 ? 'bullish' : sentimentScore <= -10 ? 'bearish' : 'neutral';
    const mediumTerm = (stock.scores?.future >= 60) ? 'bullish' : (stock.scores?.future <= 40) ? 'bearish' : 'neutral';

    // Price targets (simplified)
    const upside = stock.price * (1 + (sentimentScore / 200)); // +50% sentiment = +25% target
    const downside = stock.price * (1 - (Math.abs(sentimentScore) / 300)); // risk estimate

    return {
      shortTerm,
      mediumTerm,
      priceTargets: {
        bear: Math.min(downside, stock.week52Low * 1.05),
        base: stock.price * 1.05,
        bull: Math.max(upside, stock.price * 1.15)
      }
    };
  };

  const forecast = getForecast();

  // Key risks
  const getRisks = () => {
    const risks = [];

    if (stock.pe > 30) risks.push('High valuation could compress');
    if (stock.beta > 1.5) risks.push('High volatility - larger drawdowns possible');
    if (politicalData.bills.some(b => b.sentiment === 'bearish')) {
      risks.push('Pending legislation could negatively impact');
    }
    if (stock.week52High && stock.price > stock.week52High * 0.95) {
      risks.push('Near all-time highs - limited upside');
    }
    if (stock.scores?.health < 40) risks.push('Weak financial health');
    if (stock.scores?.past < 40) risks.push('Poor historical performance');

    if (risks.length === 0) risks.push('No major risks identified');

    return risks;
  };

  const risks = getRisks();

  // Key catalysts
  const getCatalysts = () => {
    const catalysts = [];

    if (politicalData.contracts.length > 0) {
      catalysts.push({ type: 'bullish', text: 'Recent government contract wins' });
    }
    if (politicalData.bills.some(b => b.sentiment === 'bullish')) {
      catalysts.push({ type: 'bullish', text: 'Favorable legislation in progress' });
    }
    if (politicalData.trades.filter(t => t.transaction === 'Purchase').length > 2) {
      catalysts.push({ type: 'bullish', text: 'Unusual congressional buying activity' });
    }
    if (stock.scores?.future >= 70) {
      catalysts.push({ type: 'bullish', text: 'Strong growth outlook' });
    }
    if (stock.dividendYield > 4) {
      catalysts.push({ type: 'bullish', text: 'Attractive dividend yield' });
    }
    if (politicalData.bills.some(b => b.sentiment === 'bearish')) {
      catalysts.push({ type: 'bearish', text: 'Unfavorable legislation pending' });
    }

    return catalysts;
  };

  const catalysts = getCatalysts();

  const getStrategyIcon = (type) => {
    switch (type) {
      case 'bullish': return <TrendingUp className="w-5 h-5 text-accent-green" />;
      case 'bearish': return <TrendingDown className="w-5 h-5 text-accent-red" />;
      case 'income': return <DollarSign className="w-5 h-5 text-accent-orange" />;
      case 'options': return <BarChart3 className="w-5 h-5 text-accent-purple" />;
      case 'event': return <Zap className="w-5 h-5 text-accent-cyan" />;
      case 'value': return <Target className="w-5 h-5 text-accent-blue" />;
      default: return <Minus className="w-5 h-5 text-gray-400" />;
    }
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin w-8 h-8 border-2 border-accent-blue border-t-transparent rounded-full mx-auto mb-2" />
        <p className="text-gray-400 text-sm">Analyzing {stock.symbol}...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Overall Outlook */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-white text-lg">Overall Outlook</h3>
          <div className={`px-4 py-2 rounded-full font-bold ${outlook.bg}/20 ${outlook.color}`}>
            {outlook.label}
          </div>
        </div>

        {/* Sentiment Meter */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Bearish</span>
            <span>Neutral</span>
            <span>Bullish</span>
          </div>
          <div className="relative h-4 bg-dark-surface rounded-full overflow-hidden">
            <div className="absolute inset-0 flex">
              <div className="flex-1 bg-gradient-to-r from-accent-red to-yellow-500" />
              <div className="flex-1 bg-gradient-to-r from-yellow-500 to-accent-green" />
            </div>
            {/* Indicator */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-500"
              style={{ left: `${((sentimentScore + 100) / 200) * 100}%` }}
            />
          </div>
          <p className="text-center text-sm text-gray-400 mt-2">
            Sentiment Score: <span className={outlook.color}>{sentimentScore > 0 ? '+' : ''}{sentimentScore}</span>
          </p>
        </div>

        {/* Factors */}
        <div className="space-y-2">
          {factors.map((factor, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              {factor.type === 'bullish' ? (
                <CheckCircle className="w-4 h-4 text-accent-green flex-shrink-0" />
              ) : factor.type === 'bearish' ? (
                <XCircle className="w-4 h-4 text-accent-red flex-shrink-0" />
              ) : (
                <Minus className="w-4 h-4 text-gray-400 flex-shrink-0" />
              )}
              <span className="text-gray-300">{factor.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price Forecast */}
      <div className="card">
        <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
          <Target className="w-5 h-5 text-accent-blue" />
          Price Forecast
        </h3>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-3 rounded-lg bg-accent-red/10 border border-accent-red/30">
            <p className="text-xs text-gray-400 mb-1">Bear Case</p>
            <p className="text-lg font-bold text-accent-red">
              ${forecast.priceTargets.bear?.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">
              {(((forecast.priceTargets.bear - stock.price) / stock.price) * 100).toFixed(1)}%
            </p>
          </div>
          <div className="text-center p-3 rounded-lg bg-gray-500/10 border border-gray-500/30">
            <p className="text-xs text-gray-400 mb-1">Base Case</p>
            <p className="text-lg font-bold text-gray-300">
              ${forecast.priceTargets.base?.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">
              +{(((forecast.priceTargets.base - stock.price) / stock.price) * 100).toFixed(1)}%
            </p>
          </div>
          <div className="text-center p-3 rounded-lg bg-accent-green/10 border border-accent-green/30">
            <p className="text-xs text-gray-400 mb-1">Bull Case</p>
            <p className="text-lg font-bold text-accent-green">
              ${forecast.priceTargets.bull?.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">
              +{(((forecast.priceTargets.bull - stock.price) / stock.price) * 100).toFixed(1)}%
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-dark-surface">
            <p className="text-xs text-gray-500 mb-1">Short-Term (1-4 weeks)</p>
            <div className="flex items-center gap-2">
              {forecast.shortTerm === 'bullish' ? (
                <ArrowUpRight className="w-4 h-4 text-accent-green" />
              ) : forecast.shortTerm === 'bearish' ? (
                <ArrowDownRight className="w-4 h-4 text-accent-red" />
              ) : (
                <Minus className="w-4 h-4 text-gray-400" />
              )}
              <span className={`font-medium capitalize ${
                forecast.shortTerm === 'bullish' ? 'text-accent-green' :
                forecast.shortTerm === 'bearish' ? 'text-accent-red' : 'text-gray-400'
              }`}>
                {forecast.shortTerm}
              </span>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-dark-surface">
            <p className="text-xs text-gray-500 mb-1">Medium-Term (1-6 months)</p>
            <div className="flex items-center gap-2">
              {forecast.mediumTerm === 'bullish' ? (
                <ArrowUpRight className="w-4 h-4 text-accent-green" />
              ) : forecast.mediumTerm === 'bearish' ? (
                <ArrowDownRight className="w-4 h-4 text-accent-red" />
              ) : (
                <Minus className="w-4 h-4 text-gray-400" />
              )}
              <span className={`font-medium capitalize ${
                forecast.mediumTerm === 'bullish' ? 'text-accent-green' :
                forecast.mediumTerm === 'bearish' ? 'text-accent-red' : 'text-gray-400'
              }`}>
                {forecast.mediumTerm}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Trading Strategies */}
      <div className="card">
        <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-accent-orange" />
          Trading Strategies
        </h3>

        <div className="space-y-3">
          {strategies.map((strategy, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-dark-surface">
              <div className="flex items-center gap-2 mb-2">
                {getStrategyIcon(strategy.type)}
                <span className="font-medium text-white">{strategy.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  strategy.risk === 'Low' ? 'bg-accent-green/20 text-accent-green' :
                  strategy.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  strategy.risk === 'Low-Medium' ? 'bg-green-500/20 text-green-400' :
                  strategy.risk === 'Medium-High' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-accent-red/20 text-accent-red'
                }`}>
                  {strategy.risk} Risk
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-2">{strategy.description}</p>
              <ul className="space-y-1">
                {strategy.details.map((detail, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                {strategy.timeframe}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Catalysts & Risks */}
      <div className="grid grid-cols-2 gap-3">
        {/* Catalysts */}
        <div className="card">
          <h4 className="font-semibold text-white mb-2 flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4 text-accent-cyan" />
            Catalysts
          </h4>
          <div className="space-y-2">
            {catalysts.length > 0 ? catalysts.map((c, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs">
                {c.type === 'bullish' ? (
                  <ArrowUpRight className="w-3 h-3 text-accent-green mt-0.5 flex-shrink-0" />
                ) : (
                  <ArrowDownRight className="w-3 h-3 text-accent-red mt-0.5 flex-shrink-0" />
                )}
                <span className="text-gray-400">{c.text}</span>
              </div>
            )) : (
              <p className="text-xs text-gray-500">No major catalysts identified</p>
            )}
          </div>
        </div>

        {/* Risks */}
        <div className="card">
          <h4 className="font-semibold text-white mb-2 flex items-center gap-2 text-sm">
            <AlertTriangle className="w-4 h-4 text-accent-orange" />
            Key Risks
          </h4>
          <div className="space-y-2">
            {risks.map((risk, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs">
                <span className="text-accent-orange mt-0.5 flex-shrink-0">!</span>
                <span className="text-gray-400">{risk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="text-center py-2">
        <p className="text-xs text-gray-500">
          Analysis based on fundamentals, technicals, and political data. Not financial advice.
        </p>
      </div>
    </div>
  );
}
