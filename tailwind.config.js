/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080C14',
        surface: '#0E1420',
        elevated: '#141C2E',
        border: '#1E2A40',
        primary: '#2563EB',
        accent: '#10B981',
        text: '#F1F5F9',
        muted: '#94A3B8',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(37,99,235,0.25), 0 16px 40px rgba(19,39,76,0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter Tight', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
