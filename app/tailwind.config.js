/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        black: '#171717',
        white: {
          DEFAULT: '#ffffff',
          purple: '#F3F3F7',
        },
        gray: {
          DEFAULT: '#D8DDE2',
          dark: '#797E82',
          light: '#EEEEF4',
        },
        purple: {
          DEFAULT: '#5F00D9',
          light: '#eeeef4',
        },
      },
      boxShadow: {
        card: '0px 4px 25px 0px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
