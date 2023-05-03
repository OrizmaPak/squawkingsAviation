/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        B612regular: ['B612regular', 'sans-serif'],
        B612italic: ['B612italic', 'sans-serif'],
        B612bold: ['B612bold', 'sans-serif'],
        B612bolditalic: ['B612bolditalic', 'sans-serif'],
        KanitBold: ['KanitBold', 'sans-serif'],
        KanitExtraBold: ['KanitExtraBold', 'sans-serif'],
        RussoOne: ['RussoOne', 'sans-serif'],
      },
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}