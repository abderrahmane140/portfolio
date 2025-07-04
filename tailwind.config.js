/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'bluer':'rgba(255,255, 255, 0.1)',
        'light-navy':'#0a192f',
        'dark-bg':'#020c1b',
        'lightwhite':'#E2E8F0',
        'lavender': '#7a57db',
        'midnight': '#06091f',
      },
      fontFamily: {
        source: ["'Source Code Pro'", "monospace"],
      },
    },
  },
  plugins: [],
}