import React from 'react';
import { Section } from './ui/Section';
import { fluid } from '../styles/fluid';

export default function About() {
  return (
    <Section id="about" title="About Me" className="bg-white">
      <div className={`grid md:grid-cols-2 gap-[${fluid.spacing.lg}] items-center`}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
            alt="Profile"
            className="rounded-lg shadow-lg w-full h-[clamp(300px,50vh,400px)] object-cover"
          />
        </div>
        <div className={`space-y-[${fluid.spacing.base}]`}>
          {[
            "I'm a passionate Software Development Engineer with 5 years of experience in building web applications. My journey in tech started when I built my first website at the age of 15, and I've been hooked ever since.",
            "I specialize in JavaScript/TypeScript, React, Node.js, and modern web technologies. I'm passionate about creating intuitive user experiences and writing clean, efficient code.",
            "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts."
          ].map((text, index) => (
            <p key={index} className={`${fluid.text.base} text-gray-600`}>{text}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}