/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'circuit-bg': '#1a1a2e',
        'circuit-grid': '#16213e',
        'circuit-line': '#0f3460',
        'component-fill': '#e94560',
        'component-stroke': '#ff6b6b',
        'wire': '#4ecca3',
        'selected': '#ffd93d',
      },
    },
  },
  plugins: [],
}
