import React from 'react';

const AnimatedLogo = ({
  name = 'ARGHYADIP',
  subtitle = 'Full Stack Developer',
}) => {
  const letters = name.split('');
  const CHAR_STAGGER = 0.06;
  const CHAR_DUR = 0.5;
  const NAME_START = 1.7;
  const nameEnd = NAME_START + (letters.length - 1) * CHAR_STAGGER + CHAR_DUR;
  const subtitleStart = (nameEnd + 0.15).toFixed(2);
  const shimmerStart = (nameEnd + 0.3).toFixed(2);
  const subtitleChars = subtitle.length || 1;
  const typeDuration = Math.max(subtitleChars * 0.05, 0.3).toFixed(2);

  return (
    <div className="relative flex flex-col items-center justify-center gap-4">
      <style>{`
        @keyframes al-rotate { to { transform: rotate(360deg); } }
        @keyframes al-ring-fade { to { opacity: 0.5; } }
        @keyframes al-ping {
          0% { transform: scale(0.6); opacity: 0.7; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes al-draw { to { stroke-dashoffset: 0; } }
        @keyframes al-flash {
          0% { opacity: 0; }
          35% { opacity: 0.5; }
          100% { opacity: 0; }
        }
        @keyframes al-spark-in {
          0% { opacity: 0; transform: scale(0.3); }
          60% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes al-glow-pulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        @keyframes al-char-in {
          0% { opacity: 0; transform: translateY(14px) scale(0.85); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes al-shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes al-type {
          to { width: ${subtitleChars}ch; }
        }
        @keyframes al-caret {
          0%, 100% { border-color: transparent; }
          50% { border-color: #67e8f9; }
        }

        .al-ring {
          opacity: 0;
          transform-origin: 50px 50px;
          animation:
            al-ring-fade 0.6s ease-out 0.1s forwards,
            al-rotate 14s linear infinite;
        }
        .al-ping {
          opacity: 0;
          transform-origin: 50px 50px;
          animation: al-ping 1.1s cubic-bezier(0,.6,.4,1) forwards;
        }
        .al-shield {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: al-draw 1.3s cubic-bezier(.65,0,.35,1) 0.1s forwards;
        }
        .al-letter {
          stroke-dasharray: 210;
          stroke-dashoffset: 210;
          animation: al-draw 1.05s cubic-bezier(.65,0,.35,1) 0.45s forwards;
        }
        .al-flash {
          opacity: 0;
          animation: al-flash 0.45s ease-out 1.4s forwards;
        }
        .al-spark {
          opacity: 0;
          transform-origin: 50px 50px;
          animation:
            al-spark-in 0.5s ease-out 1.45s forwards,
            al-glow-pulse 2.2s ease-in-out 1.95s infinite;
        }
        .al-char {
          display: inline-block;
          opacity: 0;
          animation: al-char-in 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        .al-name-wrap {
          background-image: linear-gradient(90deg, #00ffd5, #0ea5e9, #3b82f6, #00ffd5);
          background-size: 220% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: al-shimmer 6s linear ${shimmerStart}s infinite;
        }
        .al-subtitle-text {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          vertical-align: bottom;
          width: 0;
          border-right: 2px solid #67e8f9;
          animation:
            al-type ${typeDuration}s steps(${subtitleChars}) ${subtitleStart}s forwards,
            al-caret 0.8s step-end ${subtitleStart}s infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .al-ring {
            animation: none !important;
            opacity: 0.5 !important;
          }
          .al-ping,
          .al-flash {
            animation: none !important;
            opacity: 0 !important;
          }
          .al-shield,
          .al-letter {
            animation: none !important;
            stroke-dashoffset: 0 !important;
          }
          .al-spark {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .al-char {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .al-name-wrap {
            animation: none !important;
            background-position: 0% 0 !important;
          }
          .al-subtitle-text {
            animation: none !important;
            width: ${subtitleChars}ch !important;
            border-right: none !important;
          }
        }
      `}</style>

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
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Slow-rotating HUD ring, keeps the mark feeling alive */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="url(#al-gradient)"
          strokeWidth="0.6"
          strokeDasharray="2 5"
          fill="none"
          className="al-ring"
        />

        {/* Entry ripple burst */}
        <circle cx="50" cy="50" r="30" stroke="url(#al-gradient)" strokeWidth="1.5" fill="none" className="al-ping" style={{ animationDelay: '0s' }} />
        <circle cx="50" cy="50" r="30" stroke="url(#al-gradient)" strokeWidth="1.5" fill="none" className="al-ping" style={{ animationDelay: '0.25s' }} />

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

        {/* Impact flash right as the letter finishes drawing */}
        <circle cx="50" cy="50" r="38" fill="#ecfeff" className="al-flash" />

        {/* Inner spark of 'A' */}
        <path d="M50 45 L46 56 L54 56 Z" fill="#00ffd5" filter="url(#al-glow-filter)" className="al-spark" />
      </svg>

      <div className="flex flex-col items-center">
        <div
          className="al-name-wrap text-2xl sm:text-3xl font-bold drop-shadow-md"
          style={{ letterSpacing: '0.2em' }}
          aria-label={name}
        >
          {letters.map((ch, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="al-char"
              style={{ animationDelay: `${(NAME_START + i * CHAR_STAGGER).toFixed(2)}s` }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </div>

        <div
          role="status"
          className="mt-2 font-mono text-xs sm:text-sm tracking-widest"
          style={{ color: '#a5f3fc' }}
        >
          <span className="al-subtitle-text">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
