/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[class*="app-dark"]'],
  content : [
    './templates/base.html.twig',
    './assets/**/*.{vue,js,ts,jsx,tsx}'
  ],
  plugins: [
    require('tailwindcss-primeui')
  ],
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  variants: {},
  theme: {
    screens: {
      sm   : '576px',
      md   : '768px',
      lg   : '992px',
      xl   : '1200px',
      '2xl': '1920px'
    },
    extend: {},
  }
};
