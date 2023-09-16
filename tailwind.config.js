/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#101828',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

