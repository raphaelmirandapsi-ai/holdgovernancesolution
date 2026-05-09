import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071018",
        graphite: "#111827",
        hold: {
          gold: "#C8A45D",
          bronze: "#8B6F43",
          slate: "#172231",
          mist: "#EAF0F6",
          pearl: "#F7F3EA",
        },
      },
      boxShadow: {
        glow: "0 0 80px rgba(200, 164, 93, 0.22)",
        card: "0 24px 60px rgba(7, 16, 24, 0.16)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Georgia", "Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
