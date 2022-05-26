module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#176F6B",

          "secondary": "#FFC000",

          "accent": "#FFEDD5",

          "neutral": "#F3F4F6",

          "base-100": "#FAF7F5",

          "info": "#eeb644",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
