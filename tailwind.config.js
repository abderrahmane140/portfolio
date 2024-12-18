/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        colors :{
          'lightGreen':'#64ffda',
          'bluer':'rgba(255,255, 255, 0.1)',
          'light-navy':'#0a192f'
        },
      }
    },
  },
  plugins: [],
}