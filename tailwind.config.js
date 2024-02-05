import tailwindScrollbar from 'tailwind-scrollbar';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      colors: {
        'brand-color':'#256EB5',
        primary: '#1DA1F2',
        secondary: '#14171A',
        light_blue_bg:'#FAFBFD',
        'todo_bg': '#ED7F41',
        'inprogress_bg': '#EAB700',
        'completed_bg': '#2CBB6E',
        'text-blue':'#256EB5',
        'text-gray':' #424750',
        'light-orange':'#EB9357',
        'scrollbar': '#256EB5',
        'top-circle-orange':'#FEAF79',
        'bottom-circle-orange':'#EB9357',


        
        
        // Add more color variables here
      },
      fontFamily:{
        'sans': ['Poppins'],

      }
    },
  },
  plugins: [
    tailwindScrollbar,
  ],
  variants: {
    extend: {
      // Add scrollbar as a new variant
      scrollbar: ['rounded']
    }
  },
}