/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'oswald': ['Oswald', 'sans-serif']
    },
    backgroundImage: {
      'night': "url('./assets/night.jpeg')",
    },
    gradientColorStops: {
      'purple': '#AB83A1',
      'red': '#E9656E',
    },
  },
  plugins: [],
}

