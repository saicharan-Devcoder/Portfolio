import React from 'react';
import { Card } from '../ui/Card';
import { fluid } from '../../styles/fluid';

interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export function ExperienceCard({ company, role, period, responsibilities, technologies }: ExperienceProps) {
  return (
    <Card className="space-y-6">
      <div>
        <h3 className={`${fluid.text.xl} font-semibold text-slate-100`}>{company}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
          <p className="text-slate-200 font-medium">{role}</p>
          <span className="hidden sm:block text-slate-400">•</span>
          <p className="text-slate-400">{period}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <ul className="space-y-3 list-disc list-inside">
          {responsibilities.map((item, i) => (
            <li key={i} className="text-slate-300 leading-relaxed">{item}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="bg-black-900/30 text-slate-200 text-sm px-3 py-1 rounded-full border border-black-800/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}