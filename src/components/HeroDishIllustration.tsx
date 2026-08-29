import React from 'react';

export const HeroDishIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative w-full h-full bg-gradient-to-br from-[#FFF5E6] via-[#FFE8CC] to-[#FFD8A8] flex items-center justify-center overflow-hidden select-none ${className}`}>
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,0,0.4),transparent_70%)]"></div>
      
      {/* Background Stylized Pattern */}
      <div className="absolute inset-0 opacity-10 bg-checker-pattern"></div>

      {/* SVG Plate & Dish Scene */}
      <svg 
        viewBox="0 0 500 400" 
        className="w-full h-full max-h-[380px] drop-shadow-2xl"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Pan Metal Gradient */}
          <linearGradient id="panGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4A52" />
            <stop offset="50%" stopColor="#2A2A30" />
            <stop offset="100%" stopColor="#1A1A1E" />
          </linearGradient>
          
          <linearGradient id="panRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8E8E98" />
            <stop offset="100%" stopColor="#3E3E44" />
          </linearGradient>

          {/* Crispy Chicken Golden Gradient */}
          <linearGradient id="chickenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E67E22" />
            <stop offset="35%" stopColor="#D35400" />
            <stop offset="70%" stopColor="#C0392B" />
            <stop offset="100%" stopColor="#962D00" />
          </linearGradient>

          {/* Tartar Sauce Cream Gradient */}
          <linearGradient id="tartarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFF2D6" />
          </linearGradient>

          {/* Golden Fries Gradient */}
          <linearGradient id="friesGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD166" />
            <stop offset="50%" stopColor="#FFB800" />
            <stop offset="100%" stopColor="#F77F00" />
          </linearGradient>

          {/* Lemon Yellow Gradient */}
          <linearGradient id="lemonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF275" />
            <stop offset="100%" stopColor="#FFD000" />
          </linearGradient>
        </defs>

        {/* 1. Pan Handle */}
        <path d="M 90 100 L 160 170 L 140 190 L 70 120 Z" fill="url(#panRim)" />
        <rect x="50" y="80" width="50" height="20" rx="10" transform="rotate(45 50 80)" fill="#1E1E24" />

        {/* 2. Serving Skillet Pan Base */}
        <ellipse cx="270" cy="230" rx="190" ry="130" fill="url(#panRim)" />
        <ellipse cx="270" cy="225" rx="180" ry="120" fill="url(#panGrad)" />
        <ellipse cx="270" cy="222" rx="170" ry="110" fill="#18181C" />

        {/* 3. Golden Crinkle French Fries Cluster */}
        <g id="fries-cluster">
          {/* Fries background layer */}
          <rect x="290" y="160" width="22" height="90" rx="6" transform="rotate(25 290 160)" fill="url(#friesGrad)" stroke="#B87700" strokeWidth="1.5" />
          <rect x="320" y="150" width="20" height="95" rx="6" transform="rotate(40 320 150)" fill="url(#friesGrad)" stroke="#B87700" strokeWidth="1.5" />
          <rect x="340" y="170" width="20" height="85" rx="6" transform="rotate(15 340 170)" fill="url(#friesGrad)" stroke="#B87700" strokeWidth="1.5" />
          <rect x="360" y="165" width="22" height="90" rx="6" transform="rotate(50 360 165)" fill="url(#friesGrad)" stroke="#B87700" strokeWidth="1.5" />
          <rect x="310" y="180" width="20" height="80" rx="6" transform="rotate(30 310 180)" fill="url(#friesGrad)" stroke="#B87700" strokeWidth="1.5" />
          <rect x="375" y="190" width="18" height="75" rx="6" transform="rotate(65 375 190)" fill="url(#friesGrad)" stroke="#B87700" strokeWidth="1.5" />
          <rect x="330" y="200" width="22" height="70" rx="6" transform="rotate(35 330 200)" fill="url(#friesGrad)" stroke="#B87700" strokeWidth="1.5" />
        </g>

        {/* 4. Giant Crispy Chicken Steak Fillet */}
        <g id="crispy-chicken">
          {/* Chicken Base Silhouette */}
          <path 
            d="M 130 240 C 120 180 180 140 240 150 C 290 160 320 200 300 260 C 280 300 180 320 140 280 Z" 
            fill="url(#chickenGrad)" 
            stroke="#872300"
            strokeWidth="3"
            filter="drop-shadow(0px 8px 12px rgba(0,0,0,0.5))"
          />

          {/* Crispy Texture Panko Crunch Dabs */}
          <circle cx="160" cy="200" r="8" fill="#F39C12" opacity="0.8" />
          <circle cx="190" cy="180" r="10" fill="#F1C40F" opacity="0.8" />
          <circle cx="230" cy="170" r="12" fill="#E67E22" opacity="0.8" />
          <circle cx="260" cy="190" r="9" fill="#F39C12" opacity="0.8" />
          <circle cx="280" cy="220" r="11" fill="#F1C40F" opacity="0.8" />
          <circle cx="250" cy="250" r="13" fill="#D35400" opacity="0.8" />
          <circle cx="210" cy="270" r="10" fill="#E67E22" opacity="0.8" />
          <circle cx="160" cy="260" r="9" fill="#F1C40F" opacity="0.8" />

          {/* 5. Creamy Tartar Sauce Melt Drizzle over Chicken */}
          <path 
            d="M 170 190 Q 210 170 230 195 T 270 210 Q 280 230 250 240 Q 220 250 190 235 Q 160 220 170 190 Z" 
            fill="url(#tartarGrad)" 
            filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.15))"
          />
          <path 
            d="M 180 205 Q 210 190 240 210 Q 220 230 195 220 Z" 
            fill="#FFFFFF" 
          />

          {/* Fresh Parsley Herb Flakes on Tartar Sauce */}
          <circle cx="185" cy="200" r="2.5" fill="#27AE60" />
          <circle cx="205" cy="190" r="3" fill="#2ECC71" />
          <circle cx="220" cy="205" r="2.5" fill="#1E8449" />
          <circle cx="235" cy="200" r="2" fill="#27AE60" />
          <circle cx="250" cy="215" r="3" fill="#2ECC71" />
          <circle cx="230" cy="230" r="2.5" fill="#1E8449" />
          <circle cx="200" cy="220" r="3" fill="#27AE60" />
        </g>

        {/* 6. Tartar Sauce Dipping Cup (Ramekin) */}
        <g id="tartar-cup" transform="translate(240, 110)">
          <ellipse cx="60" cy="40" rx="36" ry="24" fill="#D8D8DF" />
          <ellipse cx="60" cy="38" rx="34" ry="22" fill="#FFFFFF" stroke="#BDC3C7" strokeWidth="2" />
          <ellipse cx="60" cy="38" rx="30" ry="18" fill="url(#tartarGrad)" />
          {/* Parsley on dip */}
          <circle cx="55" cy="36" r="2" fill="#27AE60" />
          <circle cx="65" cy="35" r="2.5" fill="#2ECC71" />
          <circle cx="60" cy="41" r="2" fill="#1E8449" />
        </g>

        {/* 7. Juicy Lemon Wedge Slice */}
        <g id="lemon-wedge" transform="translate(110, 260) rotate(-20)">
          {/* Lemon rind */}
          <path d="M 10 30 Q 35 5 65 20 Q 50 55 10 30 Z" fill="#F1C40F" stroke="#F39C12" strokeWidth="2" />
          {/* Lemon pulp */}
          <path d="M 16 28 Q 36 12 58 24 Q 46 48 16 28 Z" fill="url(#lemonGrad)" />
          {/* Lemon segments */}
          <path d="M 22 27 L 42 22 L 35 38 Z" fill="#FFF9A6" opacity="0.7" />
          <path d="M 43 23 L 52 26 L 44 33 Z" fill="#FFF9A6" opacity="0.7" />
        </g>

        {/* Steam Wisps (Hot & Juicy) */}
        <path d="M 200 130 Q 210 100 200 80" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        <path d="M 240 120 Q 250 90 240 70" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
        <path d="M 280 130 Q 270 100 280 80" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />

        {/* Sparkle Stars */}
        <g transform="translate(380, 100) scale(0.8)">
          <path d="M10 0 L13 7 L20 10 L13 13 L10 20 L7 13 L0 10 L7 7 Z" fill="#FFB800" />
        </g>
        <g transform="translate(100, 170) scale(0.7)">
          <path d="M10 0 L13 7 L20 10 L13 13 L10 20 L7 13 L0 10 L7 7 Z" fill="#FFB800" />
        </g>
      </svg>

    </div>
  );
};
