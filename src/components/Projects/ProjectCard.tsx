import React from 'react';
import { ExternalLink } from 'lucide-react';
import { fluid } from '../../styles/fluid';

interface ProjectCardProps {
  title: string;
  description: string[];
  technologies: string[];
  link: string;
}

export function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-sky-500/10 transition p-8 border border-slate-700">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <h3 className={`${fluid.text.xl} font-semibold text-slate-100`}>{title}</h3>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-sky-400 transition p-2 hover:bg-slate-700/50 rounded-full"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
        
        <div className="space-y-3">
          {description.map((text, i) => (
            <p key={i} className="text-slate-300 leading-relaxed">{text}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="bg-sky-900/30 text-sky-200 text-sm px-3 py-1 rounded-full border border-sky-800/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}