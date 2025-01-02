/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["-apple-system-ui-serif", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        hover: "var(--hover)",
        button: "var(--button)",
        background: "var(--foreground-rgb)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        jump: {
          "0%": { transform: "translateY(0%)" },
          "25%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(-20%)" },
          "60%": { transform: "translateY(-10%)" },
          "70%": { transform: "translateY(-5%)" },
          "80%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear 2",
        jump: "jump 0.5s ease-in 2",
      },
    },
  },
  plugins: [],
};
