/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {

"primary": "#37d67c",
        


"secondary": "#22bf1c",
        


"accent": "#186575",
        


"neutral": "#282631",
        


"base-100": "#E8EBF2",
        


"info": "#1644E9",
        


"success": "#72EE9F",
        


"warning": "#FBC628",
        


"error": "#F2766E",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}
