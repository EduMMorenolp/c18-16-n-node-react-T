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

