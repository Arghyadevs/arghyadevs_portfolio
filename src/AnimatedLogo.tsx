import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Modern, sleek geometric 'A' logo */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 h-32 sm:w-48 sm:h-48 animate-logo-draw"
      >
        {/* Outer Hexagon / Shield */}
        <polygon 
          points="50,5 95,25 95,75 50,95 5,75 5,25" 
          stroke="url(#gradientMain)" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="shield-path"
        />
        
        {/* The 'A' lettermark */}
        <path
          d="M50 20 L25 80 L38 80 L44 64 L56 64 L62 80 L75 80 Z"
          stroke="url(#gradientMain)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="a-path"
        />
        
        {/* Inner triangle of 'A' */}
        <path
          d="M50 45 L46 56 L54 56 Z"
          fill="#00ffd5"
          className="a-inner-path animate-pulse"
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="gradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffd5" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Animated Text */}
      <div className="mt-4 text-2xl sm:text-3xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd5] via-[#0ea5e9] to-[#3b82f6] animate-text-reveal drop-shadow-md">
        ARGHYADIP
      </div>
      <div className="mt-1 text-xs sm:text-sm text-cyan-200/60 font-mono tracking-widest animate-text-reveal-delayed">
        PORTFOLIO INITIALIZING...
      </div>
    </div>
  );
};

export default AnimatedLogo;
