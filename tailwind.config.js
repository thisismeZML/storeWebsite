/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "460px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        PrimaryColor: "#08ac0a",
        SecondaryColor: "#198753",
        ThirdColor: "#011e2b",
      },
    },
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "2rem",
      },
    },
    fontFamily: {
      baseFont: "sans-serif",
    },
  },
  plugins: [],
};
