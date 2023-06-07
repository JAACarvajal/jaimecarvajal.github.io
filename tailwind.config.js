/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        'dark-theme': '#1B0044',
        'purple': '#892CDC',
        'dark-gray': '#323232',
        'light-gray': '#F5F5F5',
        'theme-color': '#ffc339',
        'theme-color-2': 'rgb(168,85,247)',
        'dark-mode-black': '#000000',
        'dark-mode-layer-1': '#161618',
        'dark-mode-layer-2': '#1d1e29',
        'dark-mode-layer-3': '#212124',
        'dark-mode-text-1': '#ffffff',
        'dark-mode-text-2': '#818181',
        'dark-mode-border': '#292a36'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

