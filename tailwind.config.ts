import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        deepPulse: "deepPulse 1s infinite",
      },
      keyframes: {
        deepPulse: {
          "0%, 100%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        blue: {
          primary: "#00AEFF",
        },
        gray: {
          light: "#AEAEAE",
          dark: "#555555",
          darker: "#1F1F1F",
        },
        close: "#f85757",
        minimize: "#e6c122",
        alter: "#4fc12f",
      },
      dropShadow: {
        lightBlue: "0 0 150px rgba(0, 174, 255, 0.3)",
      },
      gridTemplateRows: {
        bentobox: "250px 250px",
      },
      screens: {
        xs: { raw: "(max-width: 500px)" },
      },
    },
  },
  plugins: [],
};
export default config;
