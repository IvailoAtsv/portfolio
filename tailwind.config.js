
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1clamp: "clamp(2.5rem, 5.2vw, 6rem)",
        h2clamp: "clamp(2rem, 4.5vw, 5rem)",
        h3clamp: "clamp(1.5rem, 3vw, 3rem)",
        labelClamp:"clamp(1.3rem, 1.8vw, 2.3rem)",
        iconClamp: "clamp(4em, 10vw, 13rem)",
      },
      height:{
        dvh:'85lvh'
      },
      colors: {
        background: '#00001C',
        lightBg: '#656565',
        gray: '#eee',
        lightGray: '#fefefe',
        lightPurple: '#d6b4fc',
        purple: '#b06bf3',
        purpleGrad:'linear-gradient(90deg, #b06bf3, #4169E1)',
        darkPurple:'#4c1e72',
        imgBg: 'rgba(255,255,255,0.2)'
      },
      animation: {
        pulse2: 'pulse 2s linear 500',
        bounce2: 'bounce 1.5s linear infinite',
        bounce3: 'bounce 2.5s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
