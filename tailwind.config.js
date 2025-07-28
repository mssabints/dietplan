/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        orange: {
          200: '#fed7aa',
          500: '#f97316',
          600: '#ea580c',
          800: '#c2410c',
          900: '#9a3412',
        },
        gray: {
          200: '#e5e7eb',
          600: '#4b5563',
          800: '#1f2937',
        },
        green: {
          600: '#16a34a',
        },
        yellow: {
          600: '#ca8a04',
        },
        red: {
          600: '#dc2626',
        },
        blue: {
          600: '#2563eb',
        },
        brown: {
          600: '#8b4513',
        },
      },
    },
  },
  plugins: [],
}