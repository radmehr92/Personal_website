/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "IrBold": "Irsans Bold",
        "IrRegular": "Irsans Regular",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

