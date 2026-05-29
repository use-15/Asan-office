/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'asan-blue': '#0078d4',
        'asan-green': '#107c10',
        'asan-orange': '#d83b01',
        'asan-red': '#c43e1c',
      },
    },
  },
  plugins: [],
}
