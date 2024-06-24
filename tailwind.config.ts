import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      },
      dropShadow: {
        lightBlue: "0 0 150px rgba(0, 174, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
