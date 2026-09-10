interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  caption?: string;
}

function CircularProgress({
  value,
  size = 64,
  strokeWidth = 5,
  caption
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);

  return (
    <div className="flex flex-col items-center gap-2.5 shrink-0 self-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90 absolute inset-0">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#2A2A2A"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#31A0F5"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-700"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#31A0F5] font-mono text-[13px] font-semibold">
            {value}%
          </span>
        </div>
      </div>
      {caption && (
        <span className="text-[#B2B2B2]/70 text-[12px] tracking-widest uppercase">
          {caption}
        </span>
      )}
    </div>
  );
}

export default CircularProgress;
