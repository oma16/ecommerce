/** @type {import('tailwindcss').Config} */
module.exports = {
    // darkMode: ["class"],
    // separator: '_'
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      
      
      
    ],
    theme: {
      // container: {
      //   center: true,
      //   padding: '2rem',
      //   screens: {
      //     '2xl': '1400px',
      //   },
      // },
      extend: {
        
        colors: {
          black: 'hsl(0, 0%, 0%)',
          white: 'hsl(0, 0%, 100%)',
          orange: {
            50: 'hsl(26, 100%, 55%)',
            100: 'hsl(25, 100%, 94%)',
            
          },
          blue: {
            50: 'hsl(223, 64%, 98%)',
            100: 'hsl(220, 14%, 75%)',
            200: 'hsl(219, 9%, 45%)',
            300: 'hsl(220, 13%, 13%)',
            
          },
          
        },
        
        fontFamily: {
            Kumbh: ['Kumbh Sans'],
        },
        // keyframes: {
        //   'accordion-down': {
        //     from: { height: 0 },
        //     to: { height: 'var(--radix-accordion-content-height)' },
        //   },
        //   'accordion-up': {
        //     from: { height: 'var(--radix-accordion-content-height)' },
        //     to: { height: 0 },
        //   },
        // },
        
      },
    },
    // plugins: [require('tailwindcss-animate'), require('daisyui')],
    // daisyui: {
    //   themes: ['light', 'dark', 'cupcake'],
    // },
    plugins: [require("daisyui")],
  }
  