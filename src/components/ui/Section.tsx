import React from 'react';
import { Container } from './Container';
import { theme } from '../../styles/theme';

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <Container>
        {title && (
          <h2 className="text-3xl font-bold text-slate-100 mb-12">
            {title}
          </h2>
        )}
        {children}
      </Container>
    </section>
  );
}