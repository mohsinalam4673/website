import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chassis: "var(--chassis)",
        panel: "var(--panel)",
        recess: "var(--recess)",
        ink: {
          DEFAULT: "var(--ink)",
          muted: "var(--ink-muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          ink: "var(--accent-ink)",
        },
        edge: {
          shadow: "var(--edge-shadow)",
          light: "var(--edge-light)",
          deep: "var(--edge-deep)",
        },
        "dark-chassis": "var(--dark-chassis)",
        "dark-slate": "var(--dark-slate)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        "2xl": "30px",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        floating: "var(--shadow-floating)",
        pressed: "var(--shadow-pressed)",
        recessed: "var(--shadow-recessed)",
        sharp: "var(--shadow-sharp)",
        glow: "var(--shadow-glow)",
      },
      transitionTimingFunction: {
        mechanical: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      maxWidth: {
        container: "72rem",
        prose: "65ch",
      },
      keyframes: {
        sweep: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "drawer-in": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        sweep: "sweep 4s linear infinite",
        "drawer-in": "drawer-in 200ms ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
