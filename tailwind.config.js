/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor:{
        navcolor: "#5d5f79",
        contenttwotext: "#c5c6ce",
        orange:"#e9ab53",
        textred:"#f15e50",
        navyblue:"#00001a"
      },
      backgroundColor:{
        buttonred:"#f15e50",
        orange:"#e9ab53",
        navyblue:"#00001a"
      },
      letterSpacing:{
        widest1: '.3em',
      }
    },
  },
  plugins: [],
}