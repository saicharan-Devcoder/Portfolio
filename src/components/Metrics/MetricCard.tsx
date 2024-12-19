import React from 'react';
import { Card } from '../ui/Card';

interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <Card className="text-center p-6 hover:border-sky-500/50 transition-colors">
      <div className="space-y-2">
        <div className="text-4xl font-bold text-sky-400">{value}</div>
        <div className="text-lg font-medium text-slate-200">{label}</div>
      </div>
    </Card>
  );
}