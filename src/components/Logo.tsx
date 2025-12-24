interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function Logo({ className = '', size = 36, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Modern Geometric AI Logo */}
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
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer Ring */}
          <circle cx="20" cy="20" r="19" fill="none" stroke="url(#logoGradient)" strokeWidth="0.8" opacity="0.3"/>
          
          {/* Background Gradient Circle */}
          <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" opacity="0.95"/>
          
          {/* Central Diamond Shape - represents AI core */}
          <g filter="url(#glow)">
            <path
              d="M 20 8 L 28 16 L 20 24 L 12 16 Z"
              fill="white"
              opacity="0.95"
            />
          </g>
          
          {/* Top Triangle - innovation */}
          <polygon
            points="20,6 23,13 17,13"
            fill="white"
            opacity="0.8"
          />
          
          {/* Left Triangle - logic */}
          <polygon
            points="8,20 13,23 13,17"
            fill="white"
            opacity="0.7"
          />
          
          {/* Right Triangle - creativity */}
          <polygon
            points="32,20 27,23 27,17"
            fill="white"
            opacity="0.7"
          />
          
          {/* Bottom Triangle - precision */}
          <polygon
            points="20,34 23,27 17,27"
            fill="white"
            opacity="0.8"
          />
          
          {/* Inner Connection Lines - neural network inspired */}
          <line x1="20" y1="16" x2="13" y2="20" stroke="white" strokeWidth="0.6" opacity="0.6"/>
          <line x1="20" y1="16" x2="27" y2="20" stroke="white" strokeWidth="0.6" opacity="0.6"/>
          <line x1="13" y1="20" x2="20" y2="24" stroke="white" strokeWidth="0.6" opacity="0.6"/>
          <line x1="27" y1="20" x2="20" y2="24" stroke="white" strokeWidth="0.6" opacity="0.6"/>
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

