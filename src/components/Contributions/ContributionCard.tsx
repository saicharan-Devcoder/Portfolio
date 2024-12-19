import React from 'react';
import { Card } from '../ui/Card';
import { fluid } from '../../styles/fluid';

interface ContributionProps {
  title: string;
  description: string[];
  impact: string[];
}

export function ContributionCard({ title, description, impact }: ContributionProps) {
  return (
    <Card className="space-y-6">
      <h3 className={`${fluid.text.xl} font-semibold text-slate-100`}>{title}</h3>
      
      <div className="space-y-4">
        <div className="space-y-3">
          {description.map((text, i) => (
            <p key={i} className="text-slate-300 leading-relaxed">{text}</p>
          ))}
        </div>

        <div className="space-y-2">
          <h4 className="text-slate-300 font-medium">Impact:</h4>
          <div className="flex flex-wrap gap-2">
            {impact.map((item, i) => (
              <span 
                key={i} 
                className="bg-white/10 backdrop-blur-sm
                         text-white px-4 py-1.5 rounded-full 
                         border border-white/20
                         shadow-sm hover:shadow-white/5 
                         transition-all duration-300
                         text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}