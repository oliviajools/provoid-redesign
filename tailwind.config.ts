import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        foreground: "#0a0a0a",
        primary: {
          DEFAULT: "#0a0a0a",
          light: "#1a1a1a",
          accent: "#3DB8DE",
        },
        surface: "#fafafa",
        surface2: "#f5f5f5",
        text: {
          primary: "#0a0a0a",
          secondary: "#2a2a2a",
          muted: "#666666",
        },
        border: "#e5e5e5",
        border2: "#d4d4d4",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        mono: ["monospace"],
      },
      fontSize: {
        "editorial-xs": ["0.7rem", { lineHeight: "1", letterSpacing: "0.1em" }],
        "editorial-sm": ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.08em" }],
        "editorial-base": ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
      },
      spacing: {
        "section": "8rem",
        "section-mobile": "4rem",
      },
      borderRadius: {
        "editorial": "0.125rem",
        "card": "0.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
