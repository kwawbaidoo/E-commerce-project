/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customgray:'#F5F5F5',
        customred: '#DB4444',
        custometimecolor: '#E07575',
        starColor: '#FFAD33',
        textgray: '#7D8184',
        customgreen: '#00FF66',
        customyellow:'#EEFF61',
        forestgreen: '#184A48',
        customblack: '#0D0D0D',
        customblur: '#D9D9D9',
        customseablue: '#CBE4E8',
        teambg: '#e2e1e1',
      },
      fontFamily:{
        poppins:['Poppins'],
        inter: ['inter'],
      }
    },
  },
  plugins: [
    
  ],
}

