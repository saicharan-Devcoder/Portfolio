import React from 'react';

interface CircularMetricProps {
  value: string;
  label: string;
  color?: string;
}

export function CircularMetric({ value, label, color = '#f97316' }: CircularMetricProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40 mb-4">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeDasharray="439.6"
            strokeDashoffset="0"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        {/* Value */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold" style={{ color }}>
            {value}
          </span>
        </div>
      </div>
      <h3 className="text-lg font-medium text-slate-200 text-center max-w-[200px]">
        {label}
      </h3>
    </div>
  );
}