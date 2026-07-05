import React from 'react';

const AnimatedLogo = ({
  name = 'ARGHYADIP',
  subtitle = 'FULL STACK DEVELOPER',
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4">
      <style>{`
        @keyframes al-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes al-spark-in {
          0% { opacity: 0; transform: scale(0.3); }
          60% { opacity: 1; transform: scale(1.15); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes al-glow {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        @keyframes al-fade-up {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .al-shield {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: al-draw 1.3s cubic-bezier(.65,0,.35,1) 0.1s forwards;
        }
        .al-letter {
          stroke-dasharray: 210;
          stroke-dashoffset: 210;
          animation: al-draw 1s cubic-bezier(.65,0,.35,1) 0.5s forwards;
        }
        .al-spark {
          opacity: 0;
          transform-origin: 50px 50px;
          animation:
            al-spark-in 0.5s ease-out 1.3s forwards,
            al-glow 2.2s ease-in-out 1.8s infinite;
        }
        .al-name {
          opacity: 0;
          animation: al-fade-up 0.6s ease-out 1.5s forwards;
        }
        .al-subtitle {
          opacity: 0;
          animation: al-fade-up 0.6s ease-out 1.8s forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .al-shield,
          .al-letter,
          .al-spark,
          .al-name,
          .al-subtitle {
            animation: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Geometric 'A' lettermark in a hexagon shield, drawn on with real stroke animation */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-32 h-32 sm:w-48 sm:h-48 overflow-visible"
      >
        <defs>
          <linearGradient id="al-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffd5" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <filter id="al-glow-filter" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Hexagon / Shield */}
        <polygon
          points="50,5 95,25 95,75 50,95 5,75 5,25"
          stroke="url(#al-gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="al-shield"
        />

        {/* The 'A' lettermark */}
        <path
          d="M50 20 L25 80 L38 80 L44 64 L56 64 L62 80 L75 80 Z"
          stroke="url(#al-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#al-glow-filter)"
          className="al-letter"
        />

        {/* Inner spark of 'A' */}
        <path d="M50 45 L46 56 L54 56 Z" fill="#00ffd5" className="al-spark" />
      </svg>

      {/* Animated Text */}
      <div className="flex flex-col items-center">
        <div
          className="al-name text-2xl sm:text-3xl font-bold text-transparent bg-clip-text drop-shadow-md"
          style={{
            backgroundImage: 'linear-gradient(90deg, #00ffd5, #0ea5e9, #3b82f6)',
            letterSpacing: '0.2em',
          }}
        >
          {name}
        </div>

        <div
          role="status"
          className="al-subtitle mt-1 font-mono text-xs sm:text-sm tracking-widest"
          style={{ color: '#a5f3fc', opacity: 0.7 }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
