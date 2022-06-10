module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        caladea: ["Caladea", "serif"],
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#cf0086",
          secondary: "#ffe5f6",
          accent: "#f7ff93",
          neutral: "#6b6969",
          "base-100": "#ffffff",
          info: "#98A8DD",
          success: "#12a317",
          warning: "#DF7E07",
          error: "#ed0c0c",
        },
      },
      // {
      //   dark: {
      //     primary: "#f7ff93",
      //     secondary: "#cf0086",
      //     accent: "#ffffff",
      //     neutral: "#F3F4F6",
      //     "base-100": "#222222",
      //     info: "#98A8DD",
      //     success: "#D9F99D",
      //     warning: "#F59E0B",
      //     error: "#ed0c0c",
      //   },
      // },
    ],
  },
  plugins: [require("daisyui")],
};
