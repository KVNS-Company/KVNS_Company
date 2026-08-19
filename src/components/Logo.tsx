import React from 'react';

const LOGO_URL = 'https://file.garden/aHpR4b_Q5gZVMOAA/logo.png';

interface LogoProps {
  variant?: 'full' | 'symbol' | 'monogram';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  light = true
}) => {
  const sizeMap = {
    sm: { img: 'h-8 w-auto', text: 'text-base', sub: 'text-[9px]', gap: 'gap-2.5' },
    md: { img: 'h-10 w-auto', text: 'text-lg sm:text-xl', sub: 'text-[10px]', gap: 'gap-3' },
    lg: { img: 'h-12 w-auto', text: 'text-xl sm:text-2xl', sub: 'text-xs', gap: 'gap-3.5' },
    xl: { img: 'h-16 w-auto', text: 'text-2xl sm:text-3xl', sub: 'text-sm', gap: 'gap-4' }
  };

  const dim = sizeMap[size];

  const ImageElement = (
    <div className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105" id="kvns-official-logo-container">
      <img
        src={LOGO_URL}
        alt="KVNS Company Logo"
        referrerPolicy="no-referrer"
        className={`${dim.img} object-contain max-w-[180px] filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]`}
        loading="eager"
      />
    </div>
  );

  if (variant === 'symbol' || variant === 'monogram') {
    return (
      <div className={`inline-flex items-center ${className}`} id="kvns-symbol-only">
        {ImageElement}
      </div>
    );
  }

  return (
    <div className={`group inline-flex items-center ${dim.gap} ${className}`} id="kvns-brand-full">
      {ImageElement}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1.5 sm:gap-2">
          <span
            className={`font-serif tracking-widest uppercase font-semibold ${dim.text} ${
              light ? 'text-[#F5F5F4]' : 'text-[#0A0A0A]'
            }`}
          >
            KVNS
          </span>
          <span className={`font-sans font-normal tracking-[0.2em] text-[#C5B358] ${dim.sub} uppercase`}>
            COMPANY
          </span>
        </div>
        <span className="text-[9px] font-mono tracking-[0.2em] text-[#F5F5F4]/50 uppercase">
          Virudhunagar · EST. 1997
        </span>
      </div>
    </div>
  );
};


