/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: "General Sans",
      },
      colors: {
        primary: "#003366",
        accent: "#00BFFF",
        neutral: "#F2F2F2",
        cta: "#FFA500",
      },
    },
  },
  plugins: [],
};
