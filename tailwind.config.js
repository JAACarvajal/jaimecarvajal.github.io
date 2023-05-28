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
        'mb': '360px',
        // => @media (min-width: 360px) { ... }

        'tb': '640px',
        // => @media (min-width: 640px) { ... }
  
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
        'light-gray': '#F5F5F5',
        'theme-color': '#ffc339',
        'theme-color-2': 'rgb(168,85,247)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

