import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#home" className="text-2xl font-bold text-slate-100">Gampa Saicharan</a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-300 hover:text-black-400 transition">About</a>
            <a href="#experience" className="text-slate-300 hover:text-black-400 transition">Experience</a>
            <a href="#projects" className="text-slate-300 hover:text-black-400 transition">Projects</a>
            <a href="#contributions" className="text-slate-300 hover:text-black-400 transition">Contributions</a>
            <a href="#skills" className="text-slate-300 hover:text-black-400 transition">Skills</a>
            <a href="#contact" className="text-slate-300 hover:text-black-400 transition">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/saicharan-Devcoder" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-slate-300 hover:text-black-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/gampa-saicharan/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-slate-300 hover:text-black-400 transition" />
            </a>
            <a href="mailto:saicharangofficical@gmail.com">
              <Mail className="h-5 w-5 text-slate-300 hover:text-black-400 transition" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}