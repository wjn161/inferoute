import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0d0f0f",
        "canvas-soft": "#151817",
        "canvas-raised": "#1c201f",
        line: "#303836",
        ink: "#f5f7f5",
        muted: "#a8b2ad",
        "muted-dark": "#717b76",
        route: "#00d992",
        flame: "#ea2804",
        mint: "#c8f6f9",
        periwinkle: "#bdbbff",
        amber: "#ffb83e",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(0, 217, 146, 0.16)",
        "flame-glow": "0 18px 80px rgba(234, 40, 4, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
