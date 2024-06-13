/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      opacity: {
        '67': '.67', // Personaliza el valor de opacidad según tus necesidades
      },
      colors: {
        btnBg: {
          light: '#01579B',
          dark: '#13446B',
          oceanBlue: '#01579B',
          sapphireBlue: '#4481EB',
        },
        headerBg:{
          orangeHeader: '#FFA726',
        },
        sidebarBg:{
          darkBlue: '#0D3657'
        },
        primaryBlue: '#4481EB',
        orangeBtn: '#E44D15',
        marineBlue: '#13446B'
      },
     
    },
    
    animation: {
      "fade-in": "fade-in 1.5s ease-in",
    }
    // animation: {
    //   "fade-in": "fade-in 1.5s ease-in",
    // }
  },
  plugins: [],
}

