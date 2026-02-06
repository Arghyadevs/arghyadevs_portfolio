/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Soulful Palette: Richer, softer darks
        'deep-void': '#020617',   // Slate 950: A very deep, rich dark (Main BG)
        'soft-night': '#0f172a',  // Slate 900: Slightly lighter (Cards/Sections)
        'hollow': '#1e293b',      // Slate 800: Borders/Inputs
        
        // Accents: Ethereal and glowing (not harsh)
        'soul-purple': '#a855f7', // Purple-500
        'soul-blue': '#3b82f6',   // Blue-500
        
        // Text: Soft whites, never pure white
        'mist': '#f1f5f9',        // Slate 100: Primary text
        'dim': '#94a3b8',         // Slate 400: Secondary text
      },
      animation: { 
        'spin-slow': 'spin 6s linear infinite',
        'float': 'float 6s ease-in-out infinite', // Adds a gentle floating effect
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, rgba(2, 6, 23, 0) 50%)',
      }
    },
  },
  plugins: [],
}
