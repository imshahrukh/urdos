module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlack: "#070c2a",
        neonLight: "#9efae9",
        blueDark: "#4d50ff",
        pinkDark: "#ab228a",
        primaryColor: "#ab228a",
      },
      height: {
        "1/7": "7%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "93%",
      },
    },
  },

  plugins: [require("kutty")],
};
