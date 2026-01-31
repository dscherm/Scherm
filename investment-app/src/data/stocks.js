// Mock stock data with Simply Wall St style metrics
// Each stock has scores for: Value, Future, Past, Health, Dividend

export const STOCKS = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    sector: 'Technology',
    industry: 'Consumer Electronics',
    country: 'US',
    price: 178.72,
    change: 2.35,
    changePercent: 1.33,
    marketCap: 2780000000000,
    pe: 28.5,
    forwardPe: 26.2,
    dividend: 0.96,
    dividendYield: 0.54,
    beta: 1.28,
    week52High: 199.62,
    week52Low: 164.08,
    avgVolume: 58200000,
    description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.',
    scores: {
      value: 45,
      future: 78,
      past: 85,
      health: 92,
      dividend: 25
    },
    analysis: {
      value: {
        score: 45,
        summary: 'Trading above fair value estimate',
        details: [
          { label: 'Price to Earnings', value: '28.5x', status: 'fair' },
          { label: 'Price to Book', value: '47.2x', status: 'poor' },
          { label: 'PEG Ratio', value: '2.8', status: 'fair' },
          { label: 'Discounted Cash Flow', value: '$156.40', status: 'poor' }
        ]
      },
      future: {
        score: 78,
        summary: 'Strong earnings growth expected',
        details: [
          { label: 'Revenue Growth (3Y)', value: '8.2%', status: 'good' },
          { label: 'Earnings Growth (3Y)', value: '12.5%', status: 'excellent' },
          { label: 'Analyst Coverage', value: '48 analysts', status: 'excellent' },
          { label: 'Price Target', value: '$195.00', status: 'good' }
        ]
      },
      past: {
        score: 85,
        summary: 'Exceptional historical performance',
        details: [
          { label: '5Y Revenue CAGR', value: '11.2%', status: 'excellent' },
          { label: '5Y EPS CAGR', value: '18.6%', status: 'excellent' },
          { label: 'Return on Equity', value: '147%', status: 'excellent' },
          { label: 'Return on Assets', value: '28%', status: 'excellent' }
        ]
      },
      health: {
        score: 92,
        summary: 'Very strong financial position',
        details: [
          { label: 'Debt to Equity', value: '1.81', status: 'fair' },
          { label: 'Current Ratio', value: '0.98', status: 'fair' },
          { label: 'Interest Coverage', value: '29.6x', status: 'excellent' },
          { label: 'Cash Flow', value: '$99.6B', status: 'excellent' }
        ]
      },
      dividend: {
        score: 25,
        summary: 'Low but growing dividend',
        details: [
          { label: 'Dividend Yield', value: '0.54%', status: 'poor' },
          { label: 'Payout Ratio', value: '15%', status: 'excellent' },
          { label: 'Dividend Growth (5Y)', value: '6.2%', status: 'good' },
          { label: 'Years of Growth', value: '12 years', status: 'good' }
        ]
      }
    },
    news: [
      { title: 'Apple Vision Pro sales exceed expectations', date: '2024-01-15', sentiment: 'positive' },
      { title: 'Services revenue hits new all-time high', date: '2024-01-10', sentiment: 'positive' },
      { title: 'iPhone demand softens in China market', date: '2024-01-08', sentiment: 'negative' }
    ]
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    sector: 'Technology',
    industry: 'Software',
    country: 'US',
    price: 397.58,
    change: 5.12,
    changePercent: 1.30,
    marketCap: 2950000000000,
    pe: 35.8,
    forwardPe: 30.2,
    dividend: 3.00,
    dividendYield: 0.75,
    beta: 0.89,
    week52High: 405.63,
    week52Low: 309.45,
    avgVolume: 22100000,
    description: 'Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.',
    scores: {
      value: 38,
      future: 88,
      past: 90,
      health: 95,
      dividend: 35
    },
    analysis: {
      value: {
        score: 38,
        summary: 'Premium valuation for growth',
        details: [
          { label: 'Price to Earnings', value: '35.8x', status: 'poor' },
          { label: 'Price to Book', value: '12.8x', status: 'fair' },
          { label: 'PEG Ratio', value: '2.2', status: 'fair' },
          { label: 'Discounted Cash Flow', value: '$325.00', status: 'poor' }
        ]
      },
      future: {
        score: 88,
        summary: 'AI-driven growth acceleration',
        details: [
          { label: 'Revenue Growth (3Y)', value: '14.5%', status: 'excellent' },
          { label: 'Earnings Growth (3Y)', value: '18.2%', status: 'excellent' },
          { label: 'Analyst Coverage', value: '52 analysts', status: 'excellent' },
          { label: 'Price Target', value: '$435.00', status: 'excellent' }
        ]
      },
      past: {
        score: 90,
        summary: 'Outstanding track record',
        details: [
          { label: '5Y Revenue CAGR', value: '14.8%', status: 'excellent' },
          { label: '5Y EPS CAGR', value: '22.4%', status: 'excellent' },
          { label: 'Return on Equity', value: '38%', status: 'excellent' },
          { label: 'Return on Assets', value: '17%', status: 'excellent' }
        ]
      },
      health: {
        score: 95,
        summary: 'Fortress balance sheet',
        details: [
          { label: 'Debt to Equity', value: '0.42', status: 'excellent' },
          { label: 'Current Ratio', value: '1.77', status: 'excellent' },
          { label: 'Interest Coverage', value: '46.2x', status: 'excellent' },
          { label: 'Cash Flow', value: '$87.6B', status: 'excellent' }
        ]
      },
      dividend: {
        score: 35,
        summary: 'Growing dividend with low yield',
        details: [
          { label: 'Dividend Yield', value: '0.75%', status: 'poor' },
          { label: 'Payout Ratio', value: '25%', status: 'excellent' },
          { label: 'Dividend Growth (5Y)', value: '10.2%', status: 'excellent' },
          { label: 'Years of Growth', value: '19 years', status: 'excellent' }
        ]
      }
    },
    news: [
      { title: 'Azure AI services see 50% growth', date: '2024-01-14', sentiment: 'positive' },
      { title: 'Microsoft Copilot adoption accelerating', date: '2024-01-12', sentiment: 'positive' }
    ]
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    sector: 'Technology',
    industry: 'Internet Services',
    country: 'US',
    price: 141.80,
    change: -0.95,
    changePercent: -0.67,
    marketCap: 1780000000000,
    pe: 25.2,
    forwardPe: 21.8,
    dividend: 0,
    dividendYield: 0,
    beta: 1.05,
    week52High: 153.78,
    week52Low: 102.21,
    avgVolume: 28500000,
    description: 'Alphabet Inc. provides various products and platforms in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America.',
    scores: {
      value: 62,
      future: 75,
      past: 82,
      health: 90,
      dividend: 0
    },
    analysis: {
      value: {
        score: 62,
        summary: 'Reasonably valued for growth',
        details: [
          { label: 'Price to Earnings', value: '25.2x', status: 'good' },
          { label: 'Price to Book', value: '6.2x', status: 'fair' },
          { label: 'PEG Ratio', value: '1.6', status: 'good' },
          { label: 'Discounted Cash Flow', value: '$152.00', status: 'good' }
        ]
      },
      future: {
        score: 75,
        summary: 'AI investments driving growth',
        details: [
          { label: 'Revenue Growth (3Y)', value: '11.2%', status: 'excellent' },
          { label: 'Earnings Growth (3Y)', value: '15.8%', status: 'excellent' },
          { label: 'Analyst Coverage', value: '45 analysts', status: 'excellent' },
          { label: 'Price Target', value: '$165.00', status: 'good' }
        ]
      },
      past: {
        score: 82,
        summary: 'Strong historical growth',
        details: [
          { label: '5Y Revenue CAGR', value: '18.2%', status: 'excellent' },
          { label: '5Y EPS CAGR', value: '24.5%', status: 'excellent' },
          { label: 'Return on Equity', value: '25%', status: 'excellent' },
          { label: 'Return on Assets', value: '15%', status: 'excellent' }
        ]
      },
      health: {
        score: 90,
        summary: 'Exceptional financial strength',
        details: [
          { label: 'Debt to Equity', value: '0.11', status: 'excellent' },
          { label: 'Current Ratio', value: '2.38', status: 'excellent' },
          { label: 'Interest Coverage', value: '85.2x', status: 'excellent' },
          { label: 'Cash Flow', value: '$91.5B', status: 'excellent' }
        ]
      },
      dividend: {
        score: 0,
        summary: 'No dividend paid',
        details: [
          { label: 'Dividend Yield', value: '0%', status: 'poor' },
          { label: 'Payout Ratio', value: 'N/A', status: 'neutral' },
          { label: 'Share Buybacks', value: '$62B', status: 'excellent' },
          { label: 'Total Shareholder Return', value: '28%', status: 'excellent' }
        ]
      }
    },
    news: [
      { title: 'Gemini AI model receives positive reviews', date: '2024-01-13', sentiment: 'positive' },
      { title: 'YouTube ad revenue beats estimates', date: '2024-01-09', sentiment: 'positive' }
    ]
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    sector: 'Technology',
    industry: 'Semiconductors',
    country: 'US',
    price: 547.10,
    change: 12.45,
    changePercent: 2.33,
    marketCap: 1350000000000,
    pe: 62.5,
    forwardPe: 28.5,
    dividend: 0.16,
    dividendYield: 0.03,
    beta: 1.72,
    week52High: 589.50,
    week52Low: 222.97,
    avgVolume: 52800000,
    description: 'NVIDIA Corporation provides graphics, and compute and networking solutions in the United States, Taiwan, China, and internationally.',
    scores: {
      value: 28,
      future: 95,
      past: 98,
      health: 88,
      dividend: 5
    },
    analysis: {
      value: {
        score: 28,
        summary: 'High valuation reflects AI boom',
        details: [
          { label: 'Price to Earnings', value: '62.5x', status: 'poor' },
          { label: 'Price to Book', value: '42.8x', status: 'poor' },
          { label: 'PEG Ratio', value: '0.8', status: 'excellent' },
          { label: 'Discounted Cash Flow', value: '$420.00', status: 'poor' }
        ]
      },
      future: {
        score: 95,
        summary: 'AI demand driving explosive growth',
        details: [
          { label: 'Revenue Growth (3Y)', value: '85.2%', status: 'excellent' },
          { label: 'Earnings Growth (3Y)', value: '125.8%', status: 'excellent' },
          { label: 'Analyst Coverage', value: '42 analysts', status: 'excellent' },
          { label: 'Price Target', value: '$620.00', status: 'excellent' }
        ]
      },
      past: {
        score: 98,
        summary: 'Exceptional historical performance',
        details: [
          { label: '5Y Revenue CAGR', value: '52.4%', status: 'excellent' },
          { label: '5Y EPS CAGR', value: '68.2%', status: 'excellent' },
          { label: 'Return on Equity', value: '91%', status: 'excellent' },
          { label: 'Return on Assets', value: '45%', status: 'excellent' }
        ]
      },
      health: {
        score: 88,
        summary: 'Strong balance sheet',
        details: [
          { label: 'Debt to Equity', value: '0.41', status: 'excellent' },
          { label: 'Current Ratio', value: '4.17', status: 'excellent' },
          { label: 'Interest Coverage', value: '132.5x', status: 'excellent' },
          { label: 'Cash Flow', value: '$28.9B', status: 'excellent' }
        ]
      },
      dividend: {
        score: 5,
        summary: 'Token dividend',
        details: [
          { label: 'Dividend Yield', value: '0.03%', status: 'poor' },
          { label: 'Payout Ratio', value: '2%', status: 'excellent' },
          { label: 'Dividend Growth (5Y)', value: '0%', status: 'poor' },
          { label: 'Share Buybacks', value: '$9.2B', status: 'good' }
        ]
      }
    },
    news: [
      { title: 'H100 chip demand outpacing supply', date: '2024-01-15', sentiment: 'positive' },
      { title: 'New B100 chip announced for 2024', date: '2024-01-11', sentiment: 'positive' },
      { title: 'China export restrictions impact sales', date: '2024-01-07', sentiment: 'negative' }
    ]
  },
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    sector: 'Healthcare',
    industry: 'Pharmaceuticals',
    country: 'US',
    price: 160.25,
    change: 0.85,
    changePercent: 0.53,
    marketCap: 386000000000,
    pe: 28.9,
    forwardPe: 14.8,
    dividend: 4.76,
    dividendYield: 2.97,
    beta: 0.52,
    week52High: 175.97,
    week52Low: 143.13,
    avgVolume: 7200000,
    description: 'Johnson & Johnson researches and develops, manufactures, and sells various products in the healthcare field worldwide.',
    scores: {
      value: 55,
      future: 52,
      past: 65,
      health: 78,
      dividend: 92
    },
    analysis: {
      value: {
        score: 55,
        summary: 'Fair value for defensive stock',
        details: [
          { label: 'Price to Earnings', value: '28.9x', status: 'fair' },
          { label: 'Price to Book', value: '5.8x', status: 'fair' },
          { label: 'PEG Ratio', value: '3.2', status: 'poor' },
          { label: 'Discounted Cash Flow', value: '$168.00', status: 'good' }
        ]
      },
      future: {
        score: 52,
        summary: 'Moderate growth expected',
        details: [
          { label: 'Revenue Growth (3Y)', value: '4.2%', status: 'fair' },
          { label: 'Earnings Growth (3Y)', value: '6.8%', status: 'fair' },
          { label: 'Analyst Coverage', value: '24 analysts', status: 'good' },
          { label: 'Price Target', value: '$175.00', status: 'good' }
        ]
      },
      past: {
        score: 65,
        summary: 'Consistent but modest growth',
        details: [
          { label: '5Y Revenue CAGR', value: '5.8%', status: 'fair' },
          { label: '5Y EPS CAGR', value: '8.2%', status: 'fair' },
          { label: 'Return on Equity', value: '22%', status: 'good' },
          { label: 'Return on Assets', value: '9%', status: 'fair' }
        ]
      },
      health: {
        score: 78,
        summary: 'Solid financial position',
        details: [
          { label: 'Debt to Equity', value: '0.38', status: 'excellent' },
          { label: 'Current Ratio', value: '1.16', status: 'good' },
          { label: 'Interest Coverage', value: '18.5x', status: 'excellent' },
          { label: 'Cash Flow', value: '$22.8B', status: 'excellent' }
        ]
      },
      dividend: {
        score: 92,
        summary: 'Dividend King - 61 years of growth',
        details: [
          { label: 'Dividend Yield', value: '2.97%', status: 'good' },
          { label: 'Payout Ratio', value: '45%', status: 'excellent' },
          { label: 'Dividend Growth (5Y)', value: '5.8%', status: 'good' },
          { label: 'Years of Growth', value: '61 years', status: 'excellent' }
        ]
      }
    },
    news: [
      { title: 'Talc litigation settlement approved', date: '2024-01-12', sentiment: 'positive' },
      { title: 'New cancer drug shows promising results', date: '2024-01-08', sentiment: 'positive' }
    ]
  },
  {
    symbol: 'JPM',
    name: 'JPMorgan Chase & Co.',
    sector: 'Financials',
    industry: 'Banks',
    country: 'US',
    price: 172.40,
    change: 1.25,
    changePercent: 0.73,
    marketCap: 498000000000,
    pe: 10.8,
    forwardPe: 9.5,
    dividend: 4.60,
    dividendYield: 2.67,
    beta: 1.08,
    week52High: 178.56,
    week52Low: 123.38,
    avgVolume: 9800000,
    description: 'JPMorgan Chase & Co. operates as a financial services company worldwide. It operates through four segments: Consumer & Community Banking, Corporate & Investment Bank, Commercial Banking, and Asset & Wealth Management.',
    scores: {
      value: 78,
      future: 62,
      past: 75,
      health: 82,
      dividend: 72
    },
    analysis: {
      value: {
        score: 78,
        summary: 'Attractively valued bank',
        details: [
          { label: 'Price to Earnings', value: '10.8x', status: 'excellent' },
          { label: 'Price to Book', value: '1.7x', status: 'good' },
          { label: 'PEG Ratio', value: '1.2', status: 'excellent' },
          { label: 'Discounted Cash Flow', value: '$185.00', status: 'excellent' }
        ]
      },
      future: {
        score: 62,
        summary: 'Steady growth expected',
        details: [
          { label: 'Revenue Growth (3Y)', value: '6.5%', status: 'fair' },
          { label: 'Earnings Growth (3Y)', value: '8.2%', status: 'fair' },
          { label: 'Analyst Coverage', value: '28 analysts', status: 'good' },
          { label: 'Price Target', value: '$185.00', status: 'good' }
        ]
      },
      past: {
        score: 75,
        summary: 'Strong historical performance',
        details: [
          { label: '5Y Revenue CAGR', value: '8.2%', status: 'good' },
          { label: '5Y EPS CAGR', value: '12.5%', status: 'excellent' },
          { label: 'Return on Equity', value: '17%', status: 'good' },
          { label: 'Return on Assets', value: '1.3%', status: 'good' }
        ]
      },
      health: {
        score: 82,
        summary: 'Well-capitalized bank',
        details: [
          { label: 'Tier 1 Capital Ratio', value: '15.2%', status: 'excellent' },
          { label: 'CET1 Ratio', value: '13.8%', status: 'excellent' },
          { label: 'Loan Loss Reserve', value: '$22.4B', status: 'excellent' },
          { label: 'Liquidity Coverage', value: '118%', status: 'excellent' }
        ]
      },
      dividend: {
        score: 72,
        summary: 'Strong dividend with growth',
        details: [
          { label: 'Dividend Yield', value: '2.67%', status: 'good' },
          { label: 'Payout Ratio', value: '28%', status: 'excellent' },
          { label: 'Dividend Growth (5Y)', value: '12.5%', status: 'excellent' },
          { label: 'Years of Growth', value: '13 years', status: 'good' }
        ]
      }
    },
    news: [
      { title: 'Record Q4 earnings reported', date: '2024-01-13', sentiment: 'positive' },
      { title: 'Investment banking fees surge', date: '2024-01-10', sentiment: 'positive' }
    ]
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    sector: 'Consumer Cyclical',
    industry: 'E-Commerce',
    country: 'US',
    price: 155.20,
    change: 2.80,
    changePercent: 1.84,
    marketCap: 1610000000000,
    pe: 58.2,
    forwardPe: 38.5,
    dividend: 0,
    dividendYield: 0,
    beta: 1.22,
    week52High: 161.73,
    week52Low: 101.26,
    avgVolume: 48200000,
    description: 'Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions through online and physical stores in North America and internationally.',
    scores: {
      value: 35,
      future: 85,
      past: 72,
      health: 75,
      dividend: 0
    },
    analysis: {
      value: {
        score: 35,
        summary: 'Premium pricing for growth',
        details: [
          { label: 'Price to Earnings', value: '58.2x', status: 'poor' },
          { label: 'Price to Book', value: '8.2x', status: 'fair' },
          { label: 'PEG Ratio', value: '1.8', status: 'good' },
          { label: 'Discounted Cash Flow', value: '$142.00', status: 'fair' }
        ]
      },
      future: {
        score: 85,
        summary: 'AWS and AI driving growth',
        details: [
          { label: 'Revenue Growth (3Y)', value: '12.8%', status: 'excellent' },
          { label: 'Earnings Growth (3Y)', value: '32.5%', status: 'excellent' },
          { label: 'Analyst Coverage', value: '55 analysts', status: 'excellent' },
          { label: 'Price Target', value: '$180.00', status: 'excellent' }
        ]
      },
      past: {
        score: 72,
        summary: 'Strong but volatile past',
        details: [
          { label: '5Y Revenue CAGR', value: '22.5%', status: 'excellent' },
          { label: '5Y EPS CAGR', value: '28.2%', status: 'excellent' },
          { label: 'Return on Equity', value: '15%', status: 'good' },
          { label: 'Return on Assets', value: '6%', status: 'fair' }
        ]
      },
      health: {
        score: 75,
        summary: 'Good but leveraged balance sheet',
        details: [
          { label: 'Debt to Equity', value: '0.62', status: 'good' },
          { label: 'Current Ratio', value: '1.05', status: 'fair' },
          { label: 'Interest Coverage', value: '8.5x', status: 'good' },
          { label: 'Cash Flow', value: '$46.8B', status: 'excellent' }
        ]
      },
      dividend: {
        score: 0,
        summary: 'No dividend - reinvesting in growth',
        details: [
          { label: 'Dividend Yield', value: '0%', status: 'poor' },
          { label: 'Payout Ratio', value: 'N/A', status: 'neutral' },
          { label: 'Share Buybacks', value: '$10B', status: 'good' },
          { label: 'Capital Expenditure', value: '$58B', status: 'neutral' }
        ]
      }
    },
    news: [
      { title: 'AWS market share increases', date: '2024-01-14', sentiment: 'positive' },
      { title: 'Prime membership hits 250 million', date: '2024-01-11', sentiment: 'positive' }
    ]
  },
  {
    symbol: 'PG',
    name: 'Procter & Gamble Co.',
    sector: 'Consumer Defensive',
    industry: 'Household Products',
    country: 'US',
    price: 152.85,
    change: -0.45,
    changePercent: -0.29,
    marketCap: 360000000000,
    pe: 25.8,
    forwardPe: 23.5,
    dividend: 3.76,
    dividendYield: 2.46,
    beta: 0.42,
    week52High: 162.10,
    week52Low: 140.88,
    avgVolume: 6800000,
    description: 'The Procter & Gamble Company provides branded consumer packaged goods worldwide.',
    scores: {
      value: 52,
      future: 48,
      past: 62,
      health: 72,
      dividend: 88
    },
    analysis: {
      value: {
        score: 52,
        summary: 'Fair value for defensive name',
        details: [
          { label: 'Price to Earnings', value: '25.8x', status: 'fair' },
          { label: 'Price to Book', value: '7.8x', status: 'fair' },
          { label: 'PEG Ratio', value: '3.5', status: 'poor' },
          { label: 'Discounted Cash Flow', value: '$148.00', status: 'fair' }
        ]
      },
      future: {
        score: 48,
        summary: 'Slow and steady growth',
        details: [
          { label: 'Revenue Growth (3Y)', value: '4.2%', status: 'fair' },
          { label: 'Earnings Growth (3Y)', value: '5.8%', status: 'fair' },
          { label: 'Analyst Coverage', value: '22 analysts', status: 'good' },
          { label: 'Price Target', value: '$165.00', status: 'good' }
        ]
      },
      past: {
        score: 62,
        summary: 'Consistent historical performance',
        details: [
          { label: '5Y Revenue CAGR', value: '4.8%', status: 'fair' },
          { label: '5Y EPS CAGR', value: '8.5%', status: 'fair' },
          { label: 'Return on Equity', value: '32%', status: 'excellent' },
          { label: 'Return on Assets', value: '12%', status: 'good' }
        ]
      },
      health: {
        score: 72,
        summary: 'Stable financial position',
        details: [
          { label: 'Debt to Equity', value: '0.72', status: 'good' },
          { label: 'Current Ratio', value: '0.68', status: 'fair' },
          { label: 'Interest Coverage', value: '32.5x', status: 'excellent' },
          { label: 'Cash Flow', value: '$18.2B', status: 'excellent' }
        ]
      },
      dividend: {
        score: 88,
        summary: 'Dividend King - 67 years of growth',
        details: [
          { label: 'Dividend Yield', value: '2.46%', status: 'good' },
          { label: 'Payout Ratio', value: '62%', status: 'good' },
          { label: 'Dividend Growth (5Y)', value: '5.5%', status: 'good' },
          { label: 'Years of Growth', value: '67 years', status: 'excellent' }
        ]
      }
    },
    news: [
      { title: 'Price increases drive margin expansion', date: '2024-01-10', sentiment: 'positive' },
      { title: 'Emerging markets growth accelerates', date: '2024-01-06', sentiment: 'positive' }
    ]
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    sector: 'Consumer Cyclical',
    industry: 'Auto Manufacturers',
    country: 'US',
    price: 218.50,
    change: -5.20,
    changePercent: -2.32,
    marketCap: 694000000000,
    pe: 68.5,
    forwardPe: 52.8,
    dividend: 0,
    dividendYield: 0,
    beta: 2.05,
    week52High: 299.29,
    week52Low: 152.37,
    avgVolume: 112500000,
    description: 'Tesla, Inc. designs, develops, manufactures, sells, and leases electric vehicles, and energy generation and storage systems worldwide.',
    scores: {
      value: 22,
      future: 72,
      past: 88,
      health: 82,
      dividend: 0
    },
    analysis: {
      value: {
        score: 22,
        summary: 'Very expensive valuation',
        details: [
          { label: 'Price to Earnings', value: '68.5x', status: 'poor' },
          { label: 'Price to Book', value: '12.5x', status: 'poor' },
          { label: 'PEG Ratio', value: '3.8', status: 'poor' },
          { label: 'Discounted Cash Flow', value: '$165.00', status: 'poor' }
        ]
      },
      future: {
        score: 72,
        summary: 'Growth slowing from competition',
        details: [
          { label: 'Revenue Growth (3Y)', value: '18.5%', status: 'excellent' },
          { label: 'Earnings Growth (3Y)', value: '12.2%', status: 'excellent' },
          { label: 'Analyst Coverage', value: '48 analysts', status: 'excellent' },
          { label: 'Price Target', value: '$250.00', status: 'good' }
        ]
      },
      past: {
        score: 88,
        summary: 'Explosive historical growth',
        details: [
          { label: '5Y Revenue CAGR', value: '42.5%', status: 'excellent' },
          { label: '5Y EPS CAGR', value: '85.2%', status: 'excellent' },
          { label: 'Return on Equity', value: '22%', status: 'good' },
          { label: 'Return on Assets', value: '12%', status: 'good' }
        ]
      },
      health: {
        score: 82,
        summary: 'Strong balance sheet',
        details: [
          { label: 'Debt to Equity', value: '0.08', status: 'excellent' },
          { label: 'Current Ratio', value: '1.73', status: 'excellent' },
          { label: 'Interest Coverage', value: '42.5x', status: 'excellent' },
          { label: 'Cash Flow', value: '$8.9B', status: 'good' }
        ]
      },
      dividend: {
        score: 0,
        summary: 'No dividend - growth focus',
        details: [
          { label: 'Dividend Yield', value: '0%', status: 'poor' },
          { label: 'Payout Ratio', value: 'N/A', status: 'neutral' },
          { label: 'Share Buybacks', value: '$0', status: 'poor' },
          { label: 'Capital Expenditure', value: '$8.5B', status: 'neutral' }
        ]
      }
    },
    news: [
      { title: 'Cybertruck production ramps up', date: '2024-01-14', sentiment: 'positive' },
      { title: 'Price cuts announced in China', date: '2024-01-11', sentiment: 'negative' },
      { title: 'FSD v12 rollout begins', date: '2024-01-09', sentiment: 'positive' }
    ]
  },
  {
    symbol: 'V',
    name: 'Visa Inc.',
    sector: 'Financials',
    industry: 'Credit Services',
    country: 'US',
    price: 272.50,
    change: 1.85,
    changePercent: 0.68,
    marketCap: 558000000000,
    pe: 29.8,
    forwardPe: 25.2,
    dividend: 2.08,
    dividendYield: 0.76,
    beta: 0.94,
    week52High: 282.88,
    week52Low: 221.23,
    avgVolume: 6500000,
    description: 'Visa Inc. operates as a payments technology company worldwide. It facilitates digital payments among consumers, merchants, financial institutions, businesses, strategic partners, and government entities.',
    scores: {
      value: 48,
      future: 75,
      past: 85,
      health: 88,
      dividend: 38
    },
    analysis: {
      value: {
        score: 48,
        summary: 'Premium valuation for quality',
        details: [
          { label: 'Price to Earnings', value: '29.8x', status: 'fair' },
          { label: 'Price to Book', value: '13.2x', status: 'poor' },
          { label: 'PEG Ratio', value: '2.2', status: 'fair' },
          { label: 'Discounted Cash Flow', value: '$258.00', status: 'fair' }
        ]
      },
      future: {
        score: 75,
        summary: 'Digital payments growth driver',
        details: [
          { label: 'Revenue Growth (3Y)', value: '11.2%', status: 'excellent' },
          { label: 'Earnings Growth (3Y)', value: '13.5%', status: 'excellent' },
          { label: 'Analyst Coverage', value: '38 analysts', status: 'excellent' },
          { label: 'Price Target', value: '$300.00', status: 'good' }
        ]
      },
      past: {
        score: 85,
        summary: 'Excellent track record',
        details: [
          { label: '5Y Revenue CAGR', value: '10.8%', status: 'excellent' },
          { label: '5Y EPS CAGR', value: '15.2%', status: 'excellent' },
          { label: 'Return on Equity', value: '48%', status: 'excellent' },
          { label: 'Return on Assets', value: '18%', status: 'excellent' }
        ]
      },
      health: {
        score: 88,
        summary: 'Asset-light strong balance sheet',
        details: [
          { label: 'Debt to Equity', value: '0.58', status: 'good' },
          { label: 'Current Ratio', value: '1.32', status: 'good' },
          { label: 'Interest Coverage', value: '25.8x', status: 'excellent' },
          { label: 'Cash Flow', value: '$18.5B', status: 'excellent' }
        ]
      },
      dividend: {
        score: 38,
        summary: 'Low yield with strong growth',
        details: [
          { label: 'Dividend Yield', value: '0.76%', status: 'poor' },
          { label: 'Payout Ratio', value: '22%', status: 'excellent' },
          { label: 'Dividend Growth (5Y)', value: '17.5%', status: 'excellent' },
          { label: 'Years of Growth', value: '15 years', status: 'good' }
        ]
      }
    },
    news: [
      { title: 'Cross-border payments surge post-pandemic', date: '2024-01-12', sentiment: 'positive' },
      { title: 'New partnerships expand acceptance network', date: '2024-01-08', sentiment: 'positive' }
    ]
  },
  {
    symbol: 'XOM',
    name: 'Exxon Mobil Corporation',
    sector: 'Energy',
    industry: 'Oil & Gas',
    country: 'US',
    price: 102.15,
    change: -1.25,
    changePercent: -1.21,
    marketCap: 414000000000,
    pe: 11.2,
    forwardPe: 12.5,
    dividend: 3.80,
    dividendYield: 3.72,
    beta: 0.92,
    week52High: 120.70,
    week52Low: 95.77,
    avgVolume: 16800000,
    description: 'Exxon Mobil Corporation explores for and produces crude oil and natural gas in the United States and internationally.',
    scores: {
      value: 72,
      future: 42,
      past: 58,
      health: 85,
      dividend: 82
    },
    analysis: {
      value: {
        score: 72,
        summary: 'Attractively valued energy major',
        details: [
          { label: 'Price to Earnings', value: '11.2x', status: 'excellent' },
          { label: 'Price to Book', value: '2.1x', status: 'good' },
          { label: 'PEG Ratio', value: '2.8', status: 'fair' },
          { label: 'Discounted Cash Flow', value: '$115.00', status: 'excellent' }
        ]
      },
      future: {
        score: 42,
        summary: 'Commodity price dependent',
        details: [
          { label: 'Revenue Growth (3Y)', value: '-2.5%', status: 'poor' },
          { label: 'Earnings Growth (3Y)', value: '-5.2%', status: 'poor' },
          { label: 'Analyst Coverage', value: '28 analysts', status: 'good' },
          { label: 'Price Target', value: '$120.00', status: 'good' }
        ]
      },
      past: {
        score: 58,
        summary: 'Volatile but profitable',
        details: [
          { label: '5Y Revenue CAGR', value: '8.5%', status: 'fair' },
          { label: '5Y EPS CAGR', value: '12.2%', status: 'excellent' },
          { label: 'Return on Equity', value: '20%', status: 'good' },
          { label: 'Return on Assets', value: '11%', status: 'good' }
        ]
      },
      health: {
        score: 85,
        summary: 'Very strong balance sheet',
        details: [
          { label: 'Debt to Equity', value: '0.21', status: 'excellent' },
          { label: 'Current Ratio', value: '1.48', status: 'excellent' },
          { label: 'Interest Coverage', value: '48.2x', status: 'excellent' },
          { label: 'Cash Flow', value: '$55.4B', status: 'excellent' }
        ]
      },
      dividend: {
        score: 82,
        summary: 'High yield with 40 years growth',
        details: [
          { label: 'Dividend Yield', value: '3.72%', status: 'excellent' },
          { label: 'Payout Ratio', value: '42%', status: 'excellent' },
          { label: 'Dividend Growth (5Y)', value: '2.8%', status: 'fair' },
          { label: 'Years of Growth', value: '40 years', status: 'excellent' }
        ]
      }
    },
    news: [
      { title: 'Pioneer Natural Resources acquisition completed', date: '2024-01-10', sentiment: 'positive' },
      { title: 'Oil prices decline on demand concerns', date: '2024-01-08', sentiment: 'negative' }
    ]
  },
  {
    symbol: 'KO',
    name: 'The Coca-Cola Company',
    sector: 'Consumer Defensive',
    industry: 'Beverages',
    country: 'US',
    price: 59.25,
    change: 0.32,
    changePercent: 0.54,
    marketCap: 256000000000,
    pe: 24.2,
    forwardPe: 22.5,
    dividend: 1.84,
    dividendYield: 3.10,
    beta: 0.58,
    week52High: 64.99,
    week52Low: 52.28,
    avgVolume: 12500000,
    description: 'The Coca-Cola Company manufactures, markets, and sells various nonalcoholic beverages worldwide.',
    scores: {
      value: 55,
      future: 45,
      past: 60,
      health: 68,
      dividend: 90
    },
    analysis: {
      value: {
        score: 55,
        summary: 'Fair value for stability',
        details: [
          { label: 'Price to Earnings', value: '24.2x', status: 'fair' },
          { label: 'Price to Book', value: '10.5x', status: 'poor' },
          { label: 'PEG Ratio', value: '3.8', status: 'poor' },
          { label: 'Discounted Cash Flow', value: '$62.00', status: 'good' }
        ]
      },
      future: {
        score: 45,
        summary: 'Mature business with slow growth',
        details: [
          { label: 'Revenue Growth (3Y)', value: '5.2%', status: 'fair' },
          { label: 'Earnings Growth (3Y)', value: '6.5%', status: 'fair' },
          { label: 'Analyst Coverage', value: '24 analysts', status: 'good' },
          { label: 'Price Target', value: '$65.00', status: 'good' }
        ]
      },
      past: {
        score: 60,
        summary: 'Consistent but modest growth',
        details: [
          { label: '5Y Revenue CAGR', value: '4.2%', status: 'fair' },
          { label: '5Y EPS CAGR', value: '7.8%', status: 'fair' },
          { label: 'Return on Equity', value: '42%', status: 'excellent' },
          { label: 'Return on Assets', value: '10%', status: 'good' }
        ]
      },
      health: {
        score: 68,
        summary: 'Adequate financial health',
        details: [
          { label: 'Debt to Equity', value: '1.72', status: 'fair' },
          { label: 'Current Ratio', value: '1.15', status: 'good' },
          { label: 'Interest Coverage', value: '12.5x', status: 'excellent' },
          { label: 'Cash Flow', value: '$11.2B', status: 'excellent' }
        ]
      },
      dividend: {
        score: 90,
        summary: 'Dividend King - 61 years of growth',
        details: [
          { label: 'Dividend Yield', value: '3.10%', status: 'good' },
          { label: 'Payout Ratio', value: '72%', status: 'fair' },
          { label: 'Dividend Growth (5Y)', value: '3.2%', status: 'fair' },
          { label: 'Years of Growth', value: '61 years', status: 'excellent' }
        ]
      }
    },
    news: [
      { title: 'Zero sugar products driving growth', date: '2024-01-11', sentiment: 'positive' },
      { title: 'Emerging markets expansion continues', date: '2024-01-07', sentiment: 'positive' }
    ]
  }
];

// Helper functions
export const getStockBySymbol = (symbol) => {
  return STOCKS.find(s => s.symbol === symbol);
};

export const getStocksBySymbols = (symbols) => {
  return symbols.map(symbol => getStockBySymbol(symbol)).filter(Boolean);
};

export const getStocksBySector = (sector) => {
  return STOCKS.filter(s => s.sector === sector);
};

export const getAllSectors = () => {
  return [...new Set(STOCKS.map(s => s.sector))];
};

export const getAllCountries = () => {
  return [...new Set(STOCKS.map(s => s.country))];
};

export const formatMarketCap = (value) => {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
  return `$${value.toLocaleString()}`;
};

export const formatPrice = (value) => {
  return `$${value.toFixed(2)}`;
};

export const formatPercent = (value) => {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
};

export const getScoreColor = (score) => {
  if (score >= 80) return 'text-score-excellent';
  if (score >= 60) return 'text-score-good';
  if (score >= 40) return 'text-score-fair';
  return 'text-score-poor';
};

export const getScoreBgColor = (score) => {
  if (score >= 80) return 'bg-score-excellent';
  if (score >= 60) return 'bg-score-good';
  if (score >= 40) return 'bg-score-fair';
  return 'bg-score-poor';
};

export const getOverallScore = (scores) => {
  const weights = { value: 0.2, future: 0.25, past: 0.2, health: 0.2, dividend: 0.15 };
  let totalScore = 0;
  let totalWeight = 0;

  Object.entries(weights).forEach(([key, weight]) => {
    if (scores[key] > 0) {
      totalScore += scores[key] * weight;
      totalWeight += weight;
    } else if (key === 'dividend' && scores[key] === 0) {
      // If no dividend, redistribute weight
      totalWeight += 0;
    } else {
      totalScore += scores[key] * weight;
      totalWeight += weight;
    }
  });

  return totalWeight > 0 ? Math.round(totalScore / totalWeight * (1 / 0.85)) : 0;
};

export const searchStocks = (query) => {
  const lowerQuery = query.toLowerCase();
  return STOCKS.filter(stock =>
    stock.symbol.toLowerCase().includes(lowerQuery) ||
    stock.name.toLowerCase().includes(lowerQuery) ||
    stock.sector.toLowerCase().includes(lowerQuery)
  );
};

export const filterStocks = (filters) => {
  return STOCKS.filter(stock => {
    if (filters.minMarketCap && stock.marketCap < filters.minMarketCap) return false;
    if (filters.maxMarketCap && stock.marketCap > filters.maxMarketCap) return false;
    if (filters.minScore && getOverallScore(stock.scores) < filters.minScore) return false;
    if (filters.sectors?.length > 0 && !filters.sectors.includes(stock.sector)) return false;
    if (filters.countries?.length > 0 && !filters.countries.includes(stock.country)) return false;
    return true;
  });
};
