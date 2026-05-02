/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#c5a47e',
        slate: {
          50: '#f8fafc',
          400: '#94a3b8',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        indigo: {
          500: '#6366f1',
          600: '#4f46e5',
        },
        teal: {
          400: '#2dd4bf',
        },
        purple: {
          500: '#a855f7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
