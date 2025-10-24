// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },
      colors: {
        ink: { DEFAULT: "#0b1020", 900: "#0b1020", 800: "#0e1530", 700: "#11183d" },
        neon: { 100: "#d7e3ff", 300: "#94b0ff", 500: "#4c6fff", 700: "#2041ff" },
      },
      boxShadow: {
        soft:
          "0 1px 0 rgba(255,255,255,0.02) inset, 0 0 0 1px rgba(255,255,255,0.06) inset, 0 10px 40px rgba(0,102,255,0.15)",
      },
      backgroundImage: {
        nebula:
          "radial-gradient(1000px 600px at 80% 10%, rgba(76,111,255,0.25), transparent 70%), radial-gradient(800px 500px at 20% 40%, rgba(70,0,255,0.20), transparent 60%), radial-gradient(600px 400px at 50% 90%, rgba(0,200,255,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};
