/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'dark':'#111827',
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#34d399',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
      },
      screens:{
        xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "940px",
      lg: "1200px",
      xl: "1700px",
      }
    },
  },
  plugins: [],
}

