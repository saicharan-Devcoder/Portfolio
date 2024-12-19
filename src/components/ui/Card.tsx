import React from 'react';
import { theme } from '../../styles/theme';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-slate-800 
      rounded-lg 
      overflow-hidden 
      shadow-lg 
      hover:shadow-sky-500/10 
      transition 
      p-6 
      border 
      border-slate-700
      ${className}
    `}>
      {children}
    </div>
  );
}