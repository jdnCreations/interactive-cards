/** @type {import('tailwindcss')",",.Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      startGradient: "hsl(249, 99%, 64%)",
      endGradient: "hsl(278, 94%, 30%)",
      // gradient: "hsl(249, 99%, 64%)", to hsl(278, 94%, 30%)
      primaryRed: "hsl(0, 100%, 66%)",

      neutralWhite: "hsl(0, 0%, 100%)",
      neutralLightGrayishViolet: "hsl(270, 3%, 87%)",
      neutralDarkGrayishViolet: "hsl(279, 6%, 55%)",
      neutralVeryDarkViolet: "hsl(278, 68%, 11%)",
    },
    extend: {},
  },
  plugins: [],
}

