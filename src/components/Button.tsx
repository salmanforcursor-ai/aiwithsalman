import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
}: ButtonProps) {
  const baseStyles =
    'px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg active:scale-95',
    secondary:
      'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 active:scale-95',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
