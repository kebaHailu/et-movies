/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      other_screen: { min: "340px", max: "1200px" },
    },
  },
  plugins: [],
};
