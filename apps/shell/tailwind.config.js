/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../word/src/**/*.{js,ts,jsx,tsx}",
    "../sheet/src/**/*.{js,ts,jsx,tsx}",
    "../slide/src/**/*.{js,ts,jsx,tsx}",
    "../pdf/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'asan-blue': '#0078d4',
        'asan-green': '#107c10',
        'asan-orange': '#d83b01',
        'asan-red': '#c43e1c',
      }
    },
  },
  plugins: [],
}
