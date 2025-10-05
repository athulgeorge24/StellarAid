/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#0a0e27',
          800: '#1a1f3a',
          700: '#252d4f',
        },
        neon: {
          cyan: '#00fff9',
          magenta: '#ff00ff',
          lime: '#b4ff39',
          blue: '#00d4ff',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.5', filter: 'brightness(1)' },
          '100%': { opacity: '1', filter: 'brightness(1.2)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
