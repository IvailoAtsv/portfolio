
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1clamp: "clamp(1rem, 6vw, 24rem)",
        h2clamp: "clamp(1rem, 5vw, 24rem)",
      },
      colors:{
        background:'#232323',
        lightBg:'#656565',
        gray:'#989898',
        lightGray:'#fefefe',
        lightPurple:'#7951A8',
        purple:'#b06bf3',
        imgBg:'rgba(255,255,255,0.2)' 
      },
      animation:{
        bounce:'bounce 2s linear infinite',
        bounce2:'bounce 1.5s linear infinite',
        bounce3:'bounce 2.5s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
