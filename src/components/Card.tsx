import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClass = hover
    ? 'hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out'
    : '';

  return (
    <div
      className={`bg-white rounded-xl shadow-md border border-slate-100 p-6 sm:p-8 ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}
