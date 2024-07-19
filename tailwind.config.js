/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./scripts/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily : {
        'yekan-bold' : "yekan-bold",
        'yekan-medium' : "yekan-medium",
        'yekan-thin' : "yekan-thin"
      },
     
    
    },
  },
  
    plugins: [
      function ({ addVariant }) {
          addVariant('child', '& > *');
          addVariant('child-hover', '& > *:hover');
      }
  ],
  
}

