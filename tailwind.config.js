/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        insta: {
          blue: '#405DE6',
          purple: '#5851DB',
          deepPurple: '#833AB4',
          magenta: '#C13584',
          pink: '#E1306C',
          red: '#FD1D1D',
          orange: '#F56040',
          yellowOrange: '#F77737',
          yellow: '#FCAF45',
          lightYellow: '#FFDC80',
        },
        'insta-gradient': 'linear-gradient(90deg, #405DE6 0%, #5851DB 20%, #833AB4 40%, #C13584 60%, #E1306C 80%, #FD1D1D 100%)',
      },
    },
  },
  plugins: [],
};
