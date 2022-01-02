module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        openSans: "'Open Sans', sans-serif",
      },
      color:{
        "primary":"#22c55e",
        "secondary":"#f97316",
      }
    },
  },
  plugins: [],
};
