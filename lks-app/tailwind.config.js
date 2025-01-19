/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      blue: '#22d3ee',
      gray: "#e2e8f0",
      slate: "#f8fafc"
    },

    fontFamily: {
      Inter: 'Inter',
      Roboto: 'Roboto'
    },
    extend: {},
  },
  plugins: [],
}

