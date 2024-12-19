import React from 'react';
import { Code2, Server, Database, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Redux', 'HTML/CSS']
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL']
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'SQL']
  },
  {
    title: 'Design',
    icon: Palette,
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg">
              <category.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}