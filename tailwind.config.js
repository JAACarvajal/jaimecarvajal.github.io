/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend:
    {
      screens: {
        'tb': '639px',
        // => @media (min-width: 640639pxpx) { ... }
  
        'lp': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'pc': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        'sans': ['Titillium Web', 'sans-serif']
      },
      colors: {
        'dark-gray': '#323232',
        'theme-color': '#ffc339'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

