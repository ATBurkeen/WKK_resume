/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00F6FF',
        'secondary': '#FF00B8',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(0, 246, 255, 0.5), 0 0 30px rgba(255, 0, 184, 0.3)',
      }
    },
  },
  plugins: [],
}
