import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b0f17",
        surface: "#111827",
        panel: "rgba(255, 255, 255, 0.08)",
        accent: "#7dd3fc",
        accentStrong: "#38bdf8"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(125, 211, 252, 0.2), 0 20px 80px rgba(56, 189, 248, 0.14)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;