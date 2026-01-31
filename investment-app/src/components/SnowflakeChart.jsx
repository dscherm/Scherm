import { useMemo } from 'react';

// Simply Wall St style snowflake/radar chart for stock analysis
function SnowflakeChart({
  scores,
  size = 200,
  showLabels = true,
  interactive = false,
  onSegmentClick = null
}) {
  const dimensions = ['value', 'future', 'past', 'health', 'dividend'];
  const labels = {
    value: 'Value',
    future: 'Future',
    past: 'Past',
    health: 'Health',
    dividend: 'Dividend'
  };

  const colors = {
    value: '#3b82f6',    // Blue
    future: '#8b5cf6',   // Purple
    past: '#22c55e',     // Green
    health: '#06b6d4',   // Cyan
    dividend: '#f59e0b'  // Orange
  };

  const center = size / 2;
  const maxRadius = (size / 2) - (showLabels ? 35 : 15);

  // Calculate points for each dimension
  const points = useMemo(() => {
    return dimensions.map((dim, index) => {
      const angle = (Math.PI * 2 * index) / dimensions.length - Math.PI / 2;
      const score = scores[dim] || 0;
      const radius = (score / 100) * maxRadius;
      return {
        dimension: dim,
        x: center + radius * Math.cos(angle),
        y: center + radius * Math.sin(angle),
        labelX: center + (maxRadius + 20) * Math.cos(angle),
        labelY: center + (maxRadius + 20) * Math.sin(angle),
        score,
        color: colors[dim]
      };
    });
  }, [scores, size]);

  // Create the polygon path
  const polygonPath = points.map((p, i) =>
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ') + ' Z';

  // Create grid circles
  const gridCircles = [20, 40, 60, 80, 100].map(percent => {
    const radius = (percent / 100) * maxRadius;
    return { percent, radius };
  });

  // Create grid lines
  const gridLines = dimensions.map((_, index) => {
    const angle = (Math.PI * 2 * index) / dimensions.length - Math.PI / 2;
    return {
      x1: center,
      y1: center,
      x2: center + maxRadius * Math.cos(angle),
      y2: center + maxRadius * Math.sin(angle)
    };
  });

  // Calculate overall score
  const overallScore = Math.round(
    points.reduce((sum, p) => sum + p.score, 0) / points.length
  );

  const getScoreColor = (score) => {
    if (score >= 80) return '#22c55e';
    if (score >= 60) return '#84cc16';
    if (score >= 40) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circles */}
        {gridCircles.map(({ percent, radius }) => (
          <circle
            key={percent}
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Grid lines from center to each dimension */}
        {gridLines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Filled area with gradient */}
        <defs>
          <linearGradient id={`snowflake-gradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Main polygon */}
        <path
          d={polygonPath}
          fill={`url(#snowflake-gradient-${size})`}
          stroke="rgba(139, 92, 246, 0.8)"
          strokeWidth="2"
          className="snowflake-segment"
        />

        {/* Individual colored segments (triangles from center) */}
        {points.map((point, index) => {
          const nextPoint = points[(index + 1) % points.length];
          const segmentPath = `M ${center} ${center} L ${point.x} ${point.y} L ${nextPoint.x} ${nextPoint.y} Z`;

          return (
            <path
              key={point.dimension}
              d={segmentPath}
              fill={point.color}
              fillOpacity="0.15"
              stroke={point.color}
              strokeWidth="1"
              strokeOpacity="0.5"
              className={interactive ? 'snowflake-segment cursor-pointer' : ''}
              onClick={() => interactive && onSegmentClick?.(point.dimension)}
            />
          );
        })}

        {/* Points at each vertex */}
        {points.map((point) => (
          <circle
            key={`point-${point.dimension}`}
            cx={point.x}
            cy={point.y}
            r={showLabels ? 5 : 3}
            fill={point.color}
            stroke="white"
            strokeWidth="2"
          />
        ))}

        {/* Labels */}
        {showLabels && points.map((point) => {
          const isTop = point.labelY < center;
          const isLeft = point.labelX < center - 10;
          const isRight = point.labelX > center + 10;

          let textAnchor = 'middle';
          if (isLeft) textAnchor = 'end';
          if (isRight) textAnchor = 'start';

          return (
            <g key={`label-${point.dimension}`}>
              <text
                x={point.labelX}
                y={point.labelY}
                textAnchor={textAnchor}
                dominantBaseline={isTop ? 'auto' : 'hanging'}
                fill="white"
                fontSize="12"
                fontWeight="500"
              >
                {labels[point.dimension]}
              </text>
              <text
                x={point.labelX}
                y={point.labelY + (isTop ? -14 : 14)}
                textAnchor={textAnchor}
                dominantBaseline={isTop ? 'auto' : 'hanging'}
                fill={point.color}
                fontSize="11"
                fontWeight="600"
              >
                {point.score}
              </text>
            </g>
          );
        })}

        {/* Center score */}
        {showLabels && (
          <g>
            <circle
              cx={center}
              cy={center}
              r="22"
              fill="rgba(0,0,0,0.5)"
            />
            <text
              x={center}
              y={center}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={getScoreColor(overallScore)}
              fontSize="16"
              fontWeight="bold"
            >
              {overallScore}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

export default SnowflakeChart;
