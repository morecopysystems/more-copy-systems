import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "hsl(var(--ink))",
          900: "hsl(var(--ink-900))",
          800: "hsl(var(--ink-800))",
          700: "hsl(var(--ink-700))",
        },
        paper: {
          DEFAULT: "hsl(var(--paper))",
          muted: "hsl(var(--paper-muted))",
          dim: "hsl(var(--paper-dim))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          soft: "hsl(var(--accent-soft))",
        },
        hairline: "hsl(var(--hairline))",
        surface: "hsl(var(--surface))",
        background: "hsl(var(--ink))",
        foreground: "hsl(var(--paper))",
        border: "hsl(var(--hairline))",
        muted: {
          DEFAULT: "hsl(var(--ink-800))",
          foreground: "hsl(var(--paper-muted))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // fluid display scale
        "display-xl": ["clamp(3.25rem, 11vw, 11rem)", { lineHeight: "0.88", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(2.75rem, 7.5vw, 7rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "display-md": ["clamp(2rem, 4.5vw, 4rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-sm": ["clamp(1.5rem, 2.6vw, 2.25rem)", { lineHeight: "1.06", letterSpacing: "-0.025em" }],
        label: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      borderRadius: {
        lg: "1.25rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      maxWidth: {
        shell: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
        swift: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(-50%,0,0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.08)" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 42s) linear infinite",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        drift: "drift 18s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
