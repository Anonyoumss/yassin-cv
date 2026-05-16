/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00D9FF',
          lime: '#39FF14',
          yellow: '#FFFF00',
          purple: '#A020F0',
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 217, 255, 0.6)',
        'neon-lime': '0 0 20px rgba(57, 255, 20, 0.6)',
        'neon-yellow': '0 0 20px rgba(255, 255, 0, 0.6)',
      }
    }
  },
  plugins: [],
}
