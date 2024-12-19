import React from 'react';
import { Section } from '../ui/Section';
import { MetricCard } from './MetricCard';
import { metricsData } from './metricsData';

export default function Metrics() {
  return (
    <Section className="bg-slate-900/50 backdrop-blur-sm">
      <h2 className="text-4xl font-bold text-center text-slate-100 mb-16">
        Our Outcomes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {metricsData.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </Section>
  );
}