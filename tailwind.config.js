/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'class',

    content: ["./src/**/*.{html,js}"],
    theme:
    {
    

        extend:{
            
        },

        
    },

    plugins: [
        require('tailwindcss-dark-mode')()
      ],
      // To enable dark mode for all classes:
      variants: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd',],
      
    
}


