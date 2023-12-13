/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white': '#fffffff',
        'black': '#00000',
        'light': '#fdfdfd',
        'green': '#10B582',
        'orange': '#FA9F42'
      }
    },
  },
  plugins: [],
} 