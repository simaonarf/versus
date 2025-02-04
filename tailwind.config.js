/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
    './**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #000 -25%, #F70 74.6%)',
        'custom-gradient2': 'linear-gradient(90deg, #000 -25%, #F70 74.6%)',
      },
    },
  },
  plugins: [],
}

