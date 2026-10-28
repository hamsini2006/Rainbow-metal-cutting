import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = 'auto',
  showSubtitle = true
}) => {
  const isDarkVariant = variant === 'dark';
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {!imgError ? (
        <div className="flex items-center gap-3">
          {/* Official Brochure Logo Badge */}
          <div className="relative overflow-hidden rounded-lg border border-gold/40 shadow-sm bg-black p-0.5 hover:border-gold transition-colors">
            <img
              src="/images/rainbow-logo.png"
              alt="Rainbow Metal Cutting"
              className="h-11 sm:h-12 w-auto object-contain rounded"
              onError={() => setImgError(true)}
            />
          </div>

          {/* Subtitle location badge (clean, non-duplicative) */}
          {showSubtitle && (
            <div className="hidden sm:flex flex-col justify-center border-l border-border-light pl-2.5">
              <span className="text-[10px] font-heading uppercase tracking-widest font-bold text-gold-dark">
                Coimbatore
              </span>
              <span className="text-[9px] text-text-muted font-medium">
                Tamil Nadu, India
              </span>
            </div>
          )}
        </div>
      ) : (
        /* Fallback SVG Emblem if image is unavailable */
        <div className="flex items-center gap-3">
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
            <circle cx="24" cy="24" r="22" stroke="url(#rainbowGoldGrad)" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="24" cy="24" r="18" fill="url(#sawBladeSteel)" />
            <path d="M12 28 A12 12 0 0 1 36 28" stroke="url(#rainbowGoldGrad)" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M16 28 A8 8 0 0 1 32 28" stroke="#E6D28A" strokeWidth="2.4" strokeLinecap="round" strokeOpacity="0.9" />
            <path d="M20 28 A4 4 0 0 1 28 28" stroke="#9C7715" strokeWidth="2" strokeLinecap="round" />
            <line x1="24" y1="10" x2="24" y2="38" stroke="#FAF9F6" strokeWidth="1.5" strokeDasharray="2 2" strokeOpacity="0.8" />
            <circle cx="24" cy="28" r="2.5" fill="#FAF9F6" />
            <circle cx="24" cy="28" r="1.2" fill="#17191C" />
          </svg>

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
      )}
    </div>
  );
};

export default Logo;
