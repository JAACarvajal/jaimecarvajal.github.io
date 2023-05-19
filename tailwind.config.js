/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'sans': ['Titillium Web', 'sans-serif']
      },
      colors: {
        'dark-gray': '#323232',
        'theme-color': '#ffc339'
      }
    },
  },
  plugins: [],
}

