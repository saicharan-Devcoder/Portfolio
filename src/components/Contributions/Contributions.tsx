import React from 'react';
import { Section } from '../ui/Section';
import { ContributionCard } from './ContributionCard';
import { contributionsData } from './contributionsData';

export default function Contributions() {
  return (
    <Section id="contributions" title="Open Source Contributions" className="bg-slate-900/50 backdrop-blur-sm">
      <div className="grid gap-8">
        {contributionsData.map((contribution, index) => (
          <ContributionCard key={index} {...contribution} />
        ))}
      </div>
    </Section>
  );
}