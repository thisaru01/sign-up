/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kulim: ['"Kulim Park"', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

