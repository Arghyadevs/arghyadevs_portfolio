import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center group cursor-default p-8">
      {/* Main SVG Container */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-36 h-36 sm:w-52 sm:h-52 drop-shadow-[0_0_15px_rgba(0,255,213,0.3)] transition-transform duration-700 group-hover:scale-105"
      >
        {/* Gradients and Glow Effects */}
        <defs>
          <linearGradient id="gradientPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffd5" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          
          <linearGradient id="gradientSecondary" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#00ffd5" />
          </linearGradient>

          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Abstract Ring (Fragmented & Spinning) */}
        <path
          d="M60 5 L108 32 L108 88 L60 115 L12 88 L12 32 Z"
          stroke="url(#gradientPrimary)"
          strokeWidth="1.5"
          strokeDasharray="15 10"
          strokeLinecap="round"
          className="origin-center animate-[spin_20s_linear_infinite]"
          opacity="0.5"
        />

        {/* Inner Shield (Pulsing Glow) */}
        <path
          d="M60 15 L98 37 L98 83 L60 105 L22 83 L22 37 Z"
          stroke="url(#gradientSecondary)"
          strokeWidth="2"
          strokeLinejoin="round"
          className="origin-center animate-[pulse_4s_ease-in-out_infinite]"
          filter="url(#neon-glow)"
        />

        {/* Futuristic Stylized 'A' */}
        {/* Left Wing */}
        <path
          d="M60 30 L35 82 L46 82 L60 55"
          stroke="url(#gradientPrimary)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Right Wing */}
        <path
          d="M60 30 L85 82 L74 82 L60 55"
          stroke="url(#gradientPrimary)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Floating Tech Crossbar */}
        <path
          d="M41 68 L79 68"
          stroke="#00ffd5"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-[pulse_2s_ease-in-out_infinite]"
          filter="url(#neon-glow)"
        />

        {/* Central Power Core */}
        <circle cx="60" cy="46" r="3.5" fill="#0ea5e9" filter="url(#neon-glow)" />
      </svg>
      
      {/* Animated Text Section */}
      <div className="mt-8 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd5] via-[#0ea5e9] to-[#8b5cf6] drop-shadow-[0_0_12px_rgba(14,165,233,0.4)] hover:drop-shadow-[0_0_20px_rgba(0,255,213,0.6)] transition-all duration-500">
          ARGHYADIP
        </h1>
        
        {/* Decorative Subtitle */}
        <div className="flex items-center gap-3 mt-4">
          <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#00ffd5]/70"></span>
          <div className="relative">
            <span className="absolute -inset-1 bg-[#0ea5e9]/20 blur-md rounded-full"></span>
            <p className="text-xs sm:text-sm text-cyan-300 font-mono tracking-[0.3em] uppercase relative animate-pulse">
              FULL STACK DEVELOPER
            </p>
          </div>
          <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#00ffd5]/70"></span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
