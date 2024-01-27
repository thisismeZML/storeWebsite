/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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
        sm:"2rem"
      }
    }
  },
  plugins: [],
};
