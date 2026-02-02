// Options API Service - Uses Tradier for options data
// Get your free sandbox API token at https://developer.tradier.com/

const TRADIER_BASE_URL = 'https://sandbox.tradier.com/v1';
const TRADIER_TOKEN = import.meta.env.VITE_TRADIER_API_TOKEN || '';

// Check if Tradier API is configured
export function isOptionsApiConfigured() {
  return TRADIER_TOKEN && TRADIER_TOKEN.length > 0;
}

// Helper to make Tradier API calls
async function tradierFetch(endpoint, params = {}) {
  if (!TRADIER_TOKEN) {
    throw new Error('Tradier API token not configured. Add VITE_TRADIER_API_TOKEN to your .env file for options data.');
  }

  const url = new URL(`${TRADIER_BASE_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${TRADIER_TOKEN}`,
      'Accept': 'application/json'
    }
  });

  if (response.status === 401) {
    throw new Error('Invalid Tradier API token. Please check your token.');
  }

  if (response.status === 429) {
    throw new Error('Rate limit exceeded.');
  }

  if (!response.ok) {
    throw new Error(`Tradier API error: ${response.status}`);
  }

  return response.json();
}

// Fetch options expirations for a stock
export async function fetchOptionsExpirations(symbol) {
  const data = await tradierFetch('/markets/options/expirations', {
    symbol,
    includeAllRoots: 'true'
  });

  if (data.expirations && data.expirations.date) {
    const dates = Array.isArray(data.expirations.date)
      ? data.expirations.date
      : [data.expirations.date];
    return dates;
  }

  return [];
}

// Fetch options chain for a stock
export async function fetchOptionsChain(symbol, expiration = null) {
  // If no expiration provided, get the nearest one
  if (!expiration) {
    const expirations = await fetchOptionsExpirations(symbol);
    if (expirations.length === 0) {
      throw new Error('No options available for this symbol');
    }
    expiration = expirations[0];
  }

  const data = await tradierFetch('/markets/options/chains', {
    symbol,
    expiration,
    greeks: 'true'
  });

  if (data.options && data.options.option) {
    const options = Array.isArray(data.options.option)
      ? data.options.option
      : [data.options.option];

    const calls = options.filter(o => o.option_type === 'call');
    const puts = options.filter(o => o.option_type === 'put');
    const strikes = [...new Set(options.map(o => o.strike))].sort((a, b) => a - b);

    // Get current price from the underlying
    const underlyingPrice = options[0]?.underlying_price || 0;

    // Get all expiration dates for this symbol
    const expirationDates = await fetchOptionsExpirations(symbol);

    return {
      symbol,
      currentPrice: underlyingPrice,
      expirationDates: expirationDates.map(d => new Date(d).getTime() / 1000),
      strikes,
      calls: calls.map(transformOption),
      puts: puts.map(transformOption),
      quote: {
        regularMarketPrice: underlyingPrice
      }
    };
  }

  throw new Error('No options data available');
}

// Transform Tradier option to our format
function transformOption(option) {
  return {
    contractSymbol: option.symbol,
    strike: option.strike,
    lastPrice: option.last || 0,
    bid: option.bid || 0,
    ask: option.ask || 0,
    change: option.change || 0,
    percentChange: option.change_percentage || 0,
    volume: option.volume || 0,
    openInterest: option.open_interest || 0,
    impliedVolatility: option.greeks?.smv_vol || option.greeks?.mid_iv || 0,
    inTheMoney: option.strike < option.underlying_price ? option.option_type === 'call' : option.option_type === 'put',
    expirationDate: option.expiration_date,
    // Greeks
    greeks: option.greeks ? {
      delta: option.greeks.delta,
      gamma: option.greeks.gamma,
      theta: option.greeks.theta,
      vega: option.greeks.vega,
      rho: option.greeks.rho,
      iv: option.greeks.smv_vol || option.greeks.mid_iv
    } : null
  };
}

// Analyze options data to provide insights
export function analyzeOptions(optionsData, stockPrice) {
  if (!optionsData || !optionsData.calls || !optionsData.puts) {
    return null;
  }

  const { calls, puts } = optionsData;

  // Calculate key metrics
  const analysis = {
    sentiment: calculateSentiment(calls, puts),
    putCallRatio: calculatePutCallRatio(calls, puts),
    maxPain: calculateMaxPain(calls, puts, stockPrice),
    unusualActivity: findUnusualActivity(calls, puts),
    keyLevels: findKeyLevels(calls, puts, stockPrice),
    impliedMove: calculateImpliedMove(calls, puts, stockPrice),
    implications: []
  };

  // Generate implications based on analysis
  analysis.implications = generateImplications(analysis, stockPrice);

  return analysis;
}

function calculateSentiment(calls, puts) {
  // Calculate sentiment based on volume and open interest
  const callVolume = calls.reduce((sum, c) => sum + (c.volume || 0), 0);
  const putVolume = puts.reduce((sum, p) => sum + (p.volume || 0), 0);
  const callOI = calls.reduce((sum, c) => sum + (c.openInterest || 0), 0);
  const putOI = puts.reduce((sum, p) => sum + (p.openInterest || 0), 0);

  const volumeRatio = callVolume / (putVolume || 1);
  const oiRatio = callOI / (putOI || 1);

  let sentiment = 'Neutral';
  let score = 50;

  if (volumeRatio > 1.5 && oiRatio > 1.3) {
    sentiment = 'Bullish';
    score = 70 + Math.min(20, (volumeRatio - 1.5) * 10);
  } else if (volumeRatio > 1.2 && oiRatio > 1.1) {
    sentiment = 'Slightly Bullish';
    score = 55 + Math.min(15, (volumeRatio - 1.2) * 15);
  } else if (volumeRatio < 0.67 && oiRatio < 0.77) {
    sentiment = 'Bearish';
    score = 30 - Math.min(20, (0.67 - volumeRatio) * 30);
  } else if (volumeRatio < 0.83 && oiRatio < 0.9) {
    sentiment = 'Slightly Bearish';
    score = 45 - Math.min(10, (0.83 - volumeRatio) * 20);
  }

  return {
    label: sentiment,
    score: Math.round(Math.max(0, Math.min(100, score))),
    callVolume,
    putVolume,
    callOI,
    putOI
  };
}

function calculatePutCallRatio(calls, puts) {
  const callVolume = calls.reduce((sum, c) => sum + (c.volume || 0), 0);
  const putVolume = puts.reduce((sum, p) => sum + (p.volume || 0), 0);
  const callOI = calls.reduce((sum, c) => sum + (c.openInterest || 0), 0);
  const putOI = puts.reduce((sum, p) => sum + (p.openInterest || 0), 0);

  const volumeRatio = putVolume / (callVolume || 1);
  const oiRatio = putOI / (callOI || 1);

  let interpretation = 'Neutral market sentiment';
  if (volumeRatio > 1.2) {
    interpretation = 'High put buying - traders may be hedging or expecting downside';
  } else if (volumeRatio < 0.8) {
    interpretation = 'High call buying - traders may be expecting upside';
  }

  return {
    volumeRatio: volumeRatio.toFixed(2),
    oiRatio: oiRatio.toFixed(2),
    interpretation
  };
}

function calculateMaxPain(calls, puts, stockPrice) {
  // Max pain is the strike price where options sellers would lose the least
  const allStrikes = [...new Set([
    ...calls.map(c => c.strike),
    ...puts.map(p => p.strike)
  ])].sort((a, b) => a - b);

  let maxPainStrike = stockPrice;
  let minPain = Infinity;

  for (const strike of allStrikes) {
    let totalPain = 0;

    // Calculate call pain (for call buyers)
    for (const call of calls) {
      if (strike > call.strike) {
        totalPain += (strike - call.strike) * (call.openInterest || 0);
      }
    }

    // Calculate put pain (for put buyers)
    for (const put of puts) {
      if (strike < put.strike) {
        totalPain += (put.strike - strike) * (put.openInterest || 0);
      }
    }

    if (totalPain < minPain) {
      minPain = totalPain;
      maxPainStrike = strike;
    }
  }

  const distanceFromMaxPain = ((stockPrice - maxPainStrike) / stockPrice) * 100;

  return {
    strike: maxPainStrike,
    distancePercent: distanceFromMaxPain.toFixed(2),
    interpretation: distanceFromMaxPain > 2
      ? 'Stock trading above max pain - may face resistance'
      : distanceFromMaxPain < -2
        ? 'Stock trading below max pain - may find support'
        : 'Stock near max pain level'
  };
}

function findUnusualActivity(calls, puts) {
  const unusual = [];

  // Look for high volume relative to open interest
  const allOptions = [
    ...calls.map(c => ({ ...c, type: 'CALL' })),
    ...puts.map(p => ({ ...p, type: 'PUT' }))
  ];

  for (const option of allOptions) {
    const volumeToOI = (option.volume || 0) / (option.openInterest || 1);

    if (volumeToOI > 2 && option.volume > 100) {
      unusual.push({
        type: option.type,
        strike: option.strike,
        volume: option.volume,
        openInterest: option.openInterest,
        volumeToOI: volumeToOI.toFixed(1),
        impliedVolatility: ((option.impliedVolatility || 0) * 100).toFixed(1)
      });
    }
  }

  // Sort by volume and take top 5
  return unusual.sort((a, b) => b.volume - a.volume).slice(0, 5);
}

function findKeyLevels(calls, puts, stockPrice) {
  // Find strikes with highest open interest - these act as support/resistance
  const callsByOI = [...calls]
    .filter(c => c.strike > stockPrice * 0.95)
    .sort((a, b) => (b.openInterest || 0) - (a.openInterest || 0))
    .slice(0, 3);

  const putsByOI = [...puts]
    .filter(p => p.strike < stockPrice * 1.05)
    .sort((a, b) => (b.openInterest || 0) - (a.openInterest || 0))
    .slice(0, 3);

  return {
    resistance: callsByOI.map(c => ({
      strike: c.strike,
      openInterest: c.openInterest,
      distancePercent: (((c.strike - stockPrice) / stockPrice) * 100).toFixed(1)
    })),
    support: putsByOI.map(p => ({
      strike: p.strike,
      openInterest: p.openInterest,
      distancePercent: (((stockPrice - p.strike) / stockPrice) * 100).toFixed(1)
    }))
  };
}

function calculateImpliedMove(calls, puts, stockPrice) {
  // Find at-the-money options
  const atmCalls = calls.filter(c =>
    Math.abs(c.strike - stockPrice) / stockPrice < 0.03
  );
  const atmPuts = puts.filter(p =>
    Math.abs(p.strike - stockPrice) / stockPrice < 0.03
  );

  if (atmCalls.length === 0 || atmPuts.length === 0) {
    return { percent: 'N/A', range: { low: 0, high: 0 } };
  }

  // Implied move is roughly the ATM straddle price
  const avgCallPremium = atmCalls.reduce((sum, c) => sum + (c.lastPrice || 0), 0) / atmCalls.length;
  const avgPutPremium = atmPuts.reduce((sum, p) => sum + (p.lastPrice || 0), 0) / atmPuts.length;
  const straddlePrice = avgCallPremium + avgPutPremium;
  const impliedMovePercent = (straddlePrice / stockPrice) * 100;

  return {
    percent: impliedMovePercent.toFixed(1),
    range: {
      low: (stockPrice * (1 - impliedMovePercent / 100)).toFixed(2),
      high: (stockPrice * (1 + impliedMovePercent / 100)).toFixed(2)
    }
  };
}

function generateImplications(analysis, stockPrice) {
  const implications = [];

  // Sentiment implications
  if (analysis.sentiment.score > 65) {
    implications.push({
      type: 'bullish',
      title: 'Bullish Options Flow',
      description: `Options traders are positioning for upside with ${analysis.sentiment.callVolume.toLocaleString()} call contracts vs ${analysis.sentiment.putVolume.toLocaleString()} puts.`
    });
  } else if (analysis.sentiment.score < 35) {
    implications.push({
      type: 'bearish',
      title: 'Bearish Options Flow',
      description: `Options traders are positioning defensively with high put activity relative to calls.`
    });
  }

  // Put/Call ratio implications
  const pcRatio = parseFloat(analysis.putCallRatio.volumeRatio);
  if (pcRatio > 1.3) {
    implications.push({
      type: 'caution',
      title: 'Elevated Put/Call Ratio',
      description: `At ${pcRatio}x, the put/call ratio suggests increased hedging or bearish speculation. This can sometimes signal a contrarian buy opportunity if overdone.`
    });
  } else if (pcRatio < 0.6) {
    implications.push({
      type: 'caution',
      title: 'Low Put/Call Ratio',
      description: `At ${pcRatio}x, the low put/call ratio indicates high optimism. This can sometimes signal complacency and potential for a pullback.`
    });
  }

  // Max pain implications
  if (Math.abs(parseFloat(analysis.maxPain.distancePercent)) > 3) {
    implications.push({
      type: 'info',
      title: 'Max Pain Analysis',
      description: `Stock is ${Math.abs(parseFloat(analysis.maxPain.distancePercent))}% ${parseFloat(analysis.maxPain.distancePercent) > 0 ? 'above' : 'below'} max pain at $${analysis.maxPain.strike}. Price may gravitate toward this level near expiration.`
    });
  }

  // Unusual activity implications
  if (analysis.unusualActivity.length > 0) {
    const biggestTrade = analysis.unusualActivity[0];
    implications.push({
      type: biggestTrade.type === 'CALL' ? 'bullish' : 'bearish',
      title: 'Unusual Options Activity',
      description: `Large ${biggestTrade.type} activity detected at $${biggestTrade.strike} strike with ${biggestTrade.volume.toLocaleString()} contracts (${biggestTrade.volumeToOI}x normal volume).`
    });
  }

  // Key levels implications
  if (analysis.keyLevels.resistance.length > 0) {
    const nearestResistance = analysis.keyLevels.resistance[0];
    implications.push({
      type: 'info',
      title: 'Options-Based Resistance',
      description: `Heavy call open interest at $${nearestResistance.strike} (${parseFloat(nearestResistance.distancePercent).toFixed(1)}% above) may act as resistance if stock rallies.`
    });
  }

  if (analysis.keyLevels.support.length > 0) {
    const nearestSupport = analysis.keyLevels.support[0];
    implications.push({
      type: 'info',
      title: 'Options-Based Support',
      description: `Heavy put open interest at $${nearestSupport.strike} (${parseFloat(nearestSupport.distancePercent).toFixed(1)}% below) may provide support if stock declines.`
    });
  }

  // Implied move implications
  if (analysis.impliedMove.percent !== 'N/A') {
    implications.push({
      type: 'info',
      title: 'Implied Price Range',
      description: `Options pricing suggests a ±${analysis.impliedMove.percent}% move, with an expected range of $${analysis.impliedMove.range.low} to $${analysis.impliedMove.range.high} by expiration.`
    });
  }

  return implications;
}

// Format options date
export function formatExpirationDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

// Calculate days to expiration
export function daysToExpiration(timestamp) {
  const now = new Date();
  const expiry = new Date(timestamp * 1000);
  const diff = expiry - now;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
