import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  bgColor?: 'white' | 'light';
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  bgColor = 'white',
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-slate-50',
  };

  return (
    <section
      id={id}
      className={`${bgClasses[bgColor]} py-12 sm:py-16 md:py-20 px-4 sm:px-6 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {title && (
          <div className="mb-8 sm:mb-12 md:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
