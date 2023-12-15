/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'light': '#fdfdfd',
        'dark': '#353a5a',
        'green': '#10B582',
        'orange': '#FA9F42'
      }
    },
  },
  plugins: [],
} 