import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClass = hover
    ? 'hover:shadow-xl hover:scale-105 transition-all duration-300'
    : '';

  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-8 ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}
