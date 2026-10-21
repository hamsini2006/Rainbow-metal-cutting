/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#E6D28A',      // Champagne gold
          DEFAULT: '#C9A227',    // Primary metallic gold
          dark: '#9C7715',       // Deep gold
        },
        charcoal: {
          light: '#292E33',     // Dark steel
          DEFAULT: '#17191C',   // Charcoal
          card: '#1F2327',      // Slightly lighter charcoal for dark cards
        },
        surface: {
          warm: '#FAF9F6',      // Warm white (60-70% background)
          white: '#FFFFFF',     // Pure white
          card: '#FFFFFF',
        },
        text: {
          primary: '#30343A',   // Main text
          muted: '#73777D',     // Muted text
          inverse: '#FAF9F6',   // Inverted text on dark backgrounds
        },
        border: {
          light: '#E7E2D7',     // Neutral warm border
          gold: '#C9A227',      // Gold accent border
          dark: '#383E45',      // Dark mode border
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 1px 3px 0 rgba(201, 162, 39, 0.15)',
        'gold-md': '0 4px 16px -2px rgba(201, 162, 39, 0.20)',
        'gold-lg': '0 10px 25px -3px rgba(201, 162, 39, 0.25)',
        'card-soft': '0 2px 12px 0 rgba(23, 25, 28, 0.05)',
        'card-elevated': '0 8px 30px -4px rgba(23, 25, 28, 0.08)',
      },
    },
  },
  plugins: [],
}
