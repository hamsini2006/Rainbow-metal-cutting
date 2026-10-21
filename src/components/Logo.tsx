import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-11",
  variant = 'auto',
  showSubtitle = true
}) => {
  const isDarkVariant = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Industrial Emblem: Concentric Rainbow Arcs intersecting Circular Saw Blade */}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 flex-shrink-0 drop-shadow-sm"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="rainbowGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9C7715" />
            <stop offset="45%" stopColor="#E6D28A" />
            <stop offset="70%" stopColor="#C9A227" />
            <stop offset="100%" stopColor="#9C7715" />
          </linearGradient>
          <linearGradient id="sawBladeSteel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#292E33" />
            <stop offset="100%" stopColor="#17191C" />
          </linearGradient>
        </defs>

        {/* Outer Circular Rim */}
        <circle cx="24" cy="24" r="22" stroke="url(#rainbowGoldGrad)" strokeWidth="1.5" strokeDasharray="3 2" />

        {/* Industrial Dark Core Plate */}
        <circle cx="24" cy="24" r="18" fill="url(#sawBladeSteel)" />

        {/* Concentric Rainbow Arcs symbolizing Rainbow Metal Cutting */}
        <path
          d="M12 28 A12 12 0 0 1 36 28"
          stroke="url(#rainbowGoldGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M16 28 A8 8 0 0 1 32 28"
          stroke="#E6D28A"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeOpacity="0.9"
        />
        <path
          d="M20 28 A4 4 0 0 1 28 28"
          stroke="#9C7715"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Precision Vertical Cut Line / Laser Alignment */}
        <line x1="24" y1="10" x2="24" y2="38" stroke="#FAF9F6" strokeWidth="1.5" strokeDasharray="2 2" strokeOpacity="0.8" />

        {/* Central Precision Arbor Point */}
        <circle cx="24" cy="28" r="2.5" fill="#FAF9F6" />
        <circle cx="24" cy="28" r="1.2" fill="#17191C" />
      </svg>

      {/* Typography Unit */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span className={`font-heading font-black text-xl tracking-tight uppercase ${isDarkVariant ? 'text-white' : 'text-charcoal'}`}>
            RAINBOW
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-pulse" />
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-[0.22em] text-gold-dark">
            <span>METAL CUTTING</span>
            <span className="text-text-muted font-normal text-[8px]">•</span>
            <span className="text-text-muted font-medium text-[9px] tracking-normal">Coimbatore</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
