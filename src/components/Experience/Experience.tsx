import React from 'react';
import { Section } from '../ui/Section';
import { ExperienceCard } from './ExperienceCard';
import { experienceData } from './experienceData';

export default function Experience() {
  return (
    <Section id="experience" title="Experienceships" className="bg-slate-900/50 backdrop-blur-sm">
      <div className="grid gap-8">
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </Section>
  );
}