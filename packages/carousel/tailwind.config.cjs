/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        squishy: {
          "50%": {
            transform: "scale(2, 0.5)",
          },
        },
      },
      animation: {
        squishy: "squishy 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
