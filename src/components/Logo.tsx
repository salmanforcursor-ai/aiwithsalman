interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function Logo({ className = '', size = 36, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Elegant Professional SJ Badge Logo */}
      <div className="relative flex items-center justify-center flex-shrink-0">
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e5a9e" />
              <stop offset="100%" stopColor="#0f3a66" />
            </linearGradient>
            <filter id="insetShadow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.5"/>
            </filter>
          </defs>
          
          {/* Main Background Circle */}
          <circle cx="20" cy="20" r="20" fill="url(#logoGradient)"/>
          
          {/* Ornate Border - Top Arc */}
          <path d="M 8 18 Q 6 15 5 12" stroke="white" strokeWidth="1" fill="none" opacity="0.6"/>
          <path d="M 35 18 Q 37 15 38 12" stroke="white" strokeWidth="1" fill="none" opacity="0.6"/>
          
          {/* Corner Ornaments - Top Left */}
          <circle cx="7" cy="10" r="1.2" fill="white" opacity="0.8"/>
          <circle cx="10" cy="8" r="0.8" fill="white" opacity="0.6"/>
          <path d="M 7 10 L 10 8" stroke="white" strokeWidth="0.5" opacity="0.5"/>
          
          {/* Corner Ornaments - Top Right */}
          <circle cx="33" cy="10" r="1.2" fill="white" opacity="0.8"/>
          <circle cx="30" cy="8" r="0.8" fill="white" opacity="0.6"/>
          <path d="M 33 10 L 30 8" stroke="white" strokeWidth="0.5" opacity="0.5"/>
          
          {/* Corner Ornaments - Bottom Left */}
          <circle cx="7" cy="30" r="1.2" fill="white" opacity="0.8"/>
          <circle cx="10" cy="32" r="0.8" fill="white" opacity="0.6"/>
          <path d="M 7 30 L 10 32" stroke="white" strokeWidth="0.5" opacity="0.5"/>
          
          {/* Corner Ornaments - Bottom Right */}
          <circle cx="33" cy="30" r="1.2" fill="white" opacity="0.8"/>
          <circle cx="30" cy="32" r="0.8" fill="white" opacity="0.6"/>
          <path d="M 33 30 L 30 32" stroke="white" strokeWidth="0.5" opacity="0.5"/>
          
          {/* Decorative Border Lines */}
          <line x1="6" y1="20" x2="6" y2="20" stroke="white" strokeWidth="0.6" opacity="0.5"/>
          <line x1="34" y1="20" x2="34" y2="20" stroke="white" strokeWidth="0.6" opacity="0.5"/>
          
          {/* Center Badge Frame */}
          <rect x="11" y="12" width="18" height="16" rx="2" fill="none" stroke="white" strokeWidth="0.8" opacity="0.7"/>
          
          {/* Inner Decorative Line */}
          <rect x="12.5" y="13.5" width="15" height="13" rx="1.5" fill="none" stroke="white" strokeWidth="0.4" opacity="0.4"/>
          
          {/* Letter S - Serif style */}
          <text x="14" y="23" fontFamily="Georgia, serif" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">
            S
          </text>
          
          {/* Letter J - Serif style */}
          <text x="26" y="23" fontFamily="Georgia, serif" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">
            J
          </text>
          
          {/* Small decorative elements above letters */}
          <circle cx="14" cy="11" r="0.6" fill="white" opacity="0.6"/>
          <circle cx="26" cy="11" r="0.6" fill="white" opacity="0.6"/>
          
          {/* Subtle horizontal line separator */}
          <line x1="12" y1="26" x2="28" y2="26" stroke="white" strokeWidth="0.5" opacity="0.4"/>
        </svg>
      </div>
      
      {showText && (
        <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent hidden sm:inline">
          Salman Iqbal
        </span>
      )}
    </div>
  );
}

