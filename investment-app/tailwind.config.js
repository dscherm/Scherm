/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0f',
          surface: '#12121a',
          card: '#1a1a25',
          border: '#2a2a3a',
          hover: '#252535'
        },
        accent: {
          green: '#22c55e',
          red: '#ef4444',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          orange: '#f59e0b',
          cyan: '#06b6d4'
        },
        score: {
          excellent: '#22c55e',
          good: '#84cc16',
          fair: '#f59e0b',
          poor: '#ef4444'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
