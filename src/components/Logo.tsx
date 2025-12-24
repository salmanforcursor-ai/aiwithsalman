interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function Logo({ className = '', size = 36, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* SJ Logo Circle */}
      <div className="relative flex items-center justify-center flex-shrink-0">
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          {/* Background Circle */}
          <circle cx="20" cy="20" r="20" fill="url(#logoGradient)" />
          {/* S Letter - Clear and visible */}
          <path
            d="M13 19C13 15.5 15.5 13 19 13C21.5 13 23 14.5 23 16.5C23 18 21.5 19.5 19.5 19.5H17.5C16.5 19.5 16 20 16 21C16 22 16.5 22.5 17.5 22.5H19.5C21.5 22.5 23 24 23 26C23 27.5 21.5 29 19 29C15.5 29 13 26.5 13 23"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* J Letter - Clear and visible */}
          <path
            d="M27 14V26C27 29 24.5 31.5 21 31.5C17.5 31.5 15 29 15 26"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M23 26C23 27.5 22 28.5 21 28.5C20 28.5 19 27.5 19 26"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
      {showText && (
        <span className="text-xl sm:text-2xl font-bold text-slate-900 hidden sm:inline">
          Salman Iqbal
        </span>
      )}
    </div>
  );
}

