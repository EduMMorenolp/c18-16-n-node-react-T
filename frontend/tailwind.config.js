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
        },
        headerBg:{
          orangeHeader: '#FFA726',
        },
        sidebarBg:{
          orangeSidebar: '#0D3657'
        },
        orangeBtn: '#E44D15',
      }
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

