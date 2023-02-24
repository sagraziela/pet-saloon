/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
      xxl: 32
    },

    colors: {
      black: '#000',
      white: '#fff',
      blue: '#155264',
      yellow: '#FFCA3C',
      transparent: 'transparent',

      orange: {
        300: '#FF9B3D',
        600: '#FF6F3B',
      }
    },

    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    }
  },
  plugins: [],
}
