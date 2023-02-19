/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryColor": "#f87171",
        "secondaryColor": "#fef2f2"
      },
      height: {
        "sidebarHeight": "calc(100vh - 4rem)"
      }
    },
  },
  plugins: [],
  important: true
}
