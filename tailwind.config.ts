import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#faf8f5",
        "canvas-soft": "#f4f1ec",
        "canvas-raised": "#ffffff",
        line: "rgba(32, 32, 32, 0.08)",
        ink: "#1a1a1a",
        muted: "#6b6560",
        "muted-dark": "#9b9590",
        route: "#1f8a5c",
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
        glow: "0 0 80px rgba(234, 40, 4, 0.12)",
        "flame-glow": "0 18px 80px rgba(234, 40, 4, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
