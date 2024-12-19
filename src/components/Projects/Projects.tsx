import React from 'react';
import { Section } from '../ui/Section';
import { ProjectCard } from './ProjectCard';
import { projectsData } from './projectsData';

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" className="bg-slate-900/50 backdrop-blur-sm">
      <div className="grid gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
}