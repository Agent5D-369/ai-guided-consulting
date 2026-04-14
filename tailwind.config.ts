import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#06070b",
          900: "#0b1020",
          800: "#11182d"
        },
        electric: {
          300: "#67d7ff",
          400: "#37bdf8",
          500: "#1492ff"
        },
        amberglass: "#e8b36b"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px rgba(4, 8, 20, 0.55)",
        card: "0 14px 40px rgba(5, 9, 24, 0.45)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(20,146,255,0.18), transparent 36%), radial-gradient(circle at top right, rgba(103,215,255,0.12), transparent 28%), radial-gradient(circle at bottom, rgba(232,179,107,0.10), transparent 32%)"
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"]
      },
      maxWidth: {
        copy: "70ch"
      }
    }
  },
  plugins: []
};

export default config;
