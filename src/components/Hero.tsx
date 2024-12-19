import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Container } from './ui/Container';
import { fluid } from '../styles/fluid';
import { theme } from '../styles/theme';

export default function Hero() {
  return (
    <section id="home" className={`min-h-[100svh] flex items-center justify-center bg-gradient-to-br ${theme.colors.background.gradient}`}>
      <Container className={`py-[${fluid.spacing.xl}] text-center`}>
        <h1 className={`${fluid.text['3xl']} font-bold text-slate-100 mb-[${fluid.spacing.base}]`}>
          Hi, I'm Gampa Saicharan
        </h1>
        <p className={`${fluid.text.xl} text-slate-300 mb-[${fluid.spacing.lg}] max-w-3xl mx-auto`}>
          Software Development Engineer specializing in building exceptional digital experiences.
          I love creating elegant solutions to complex problems.
        </p>
        <div className={`flex flex-col sm:flex-row justify-center gap-[${fluid.spacing.base}]`}>
          <a href="#projects" 
             className={`${fluid.text.base} bg-black-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-black-600 transition`}>
            View My Work
          </a>
          <a href="#contact"
             className={`${fluid.text.base} border-2 border-black-500 text-slate-200 px-8 py-3 rounded-md font-semibold hover:bg-black-500/10 transition`}>
            Get in Touch
          </a>
        </div>
        <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-slate-400" />
        </a>
      </Container>
    </section>
  );
}