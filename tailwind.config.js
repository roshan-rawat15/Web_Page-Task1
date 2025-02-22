/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        charcol: "#233E62", // ✅ Corrected colon here
      },
    },
  },
  plugins: [],
};
