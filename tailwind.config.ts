import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },

    extend: {
      colors: {
        "brand-color": "#97EDAA",
        "dark-10": "#0B0B0B",
        "dark-20": "#101010",
        "dark-30": "#1F1F1F",
        "dark-40": "#FFFFFF",
        "dark-50": "#22c55e",
      },
    },
  },
  plugins: [],
};
export default config;
