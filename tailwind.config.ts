import type { Config } from "tailwindcss";

/**
 * RÊVERIE — Design System
 * -------------------------------------------------------------
 * A dreamy, cinematic token set derived from the uploaded films:
 * a deep twilight teal-blue canvas, luminous golden light, sky azure
 * and coral bloom accents, over warm cloud-cream text.
 *
 * Colours are stored as space-separated RGB channels in globals.css so
 * every utility can opt into an alpha value: `bg-gold/10`, `text-foreground/70`.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1792px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // Core surfaces — deep twilight teal
        background: "rgb(var(--background) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        elevated: "rgb(var(--elevated) / <alpha-value>)",

        // Text — warm cloud cream
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        subtle: "rgb(var(--subtle) / <alpha-value>)",

        // Luminous golden light (primary accent)
        gold: {
          DEFAULT: "rgb(var(--gold) / <alpha-value>)",
          light: "rgb(var(--gold-light) / <alpha-value>)",
          deep: "rgb(var(--gold-deep) / <alpha-value>)",
        },
        // Sky azure (secondary accent)
        sky: {
          DEFAULT: "rgb(var(--sky) / <alpha-value>)",
          light: "rgb(var(--sky-light) / <alpha-value>)",
          deep: "rgb(var(--sky-deep) / <alpha-value>)",
        },
        // Coral wildflower bloom (tertiary pop)
        bloom: "rgb(var(--bloom) / <alpha-value>)",

        // Semantic
        border: "rgb(var(--border) / <alpha-value>)",
        ring: "rgb(var(--gold) / <alpha-value>)",
        destructive: "rgb(var(--destructive) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 8vw + 1rem, 10rem)", { lineHeight: "0.94", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(3rem, 6vw + 1rem, 7.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5vw + 0.5rem, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(2rem, 4vw + 0.5rem, 3.75rem)", { lineHeight: "1.06", letterSpacing: "-0.012em" }],
        "display-sm": ["clamp(1.75rem, 3vw + 0.5rem, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        overline: ["0.75rem", { lineHeight: "1", letterSpacing: "0.3em" }],
        eyebrow: ["0.8125rem", { lineHeight: "1.2", letterSpacing: "0.24em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.28em",
        widest3: "0.42em",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        section: "clamp(5rem, 12vh, 11rem)",
        "section-sm": "clamp(3.5rem, 8vh, 7rem)",
      },
      maxWidth: {
        prose: "68ch",
        container: "1440px",
        content: "1200px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        glass: "inset 0 1px 0 0 rgb(255 255 255 / 0.08), 0 8px 40px -12px rgb(0 0 0 / 0.5)",
        "glass-lg": "inset 0 1px 0 0 rgb(255 255 255 / 0.1), 0 24px 80px -24px rgb(0 0 0 / 0.6)",
        elevated: "0 30px 90px -30px rgb(0 0 0 / 0.65)",
        "glow-gold": "0 0 0 1px rgb(var(--gold) / 0.22), 0 12px 48px -12px rgb(var(--gold) / 0.5)",
        "glow-gold-lg": "0 0 0 1px rgb(var(--gold) / 0.28), 0 20px 80px -14px rgb(var(--gold) / 0.6)",
        "glow-sky": "0 0 0 1px rgb(var(--sky) / 0.25), 0 16px 60px -14px rgb(var(--sky) / 0.5)",
        "glow-soft": "0 0 60px -12px rgb(var(--gold) / 0.4)",
      },
      backdropBlur: {
        xs: "2px",
        "2xl": "40px",
        "3xl": "64px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold":
          "linear-gradient(135deg, rgb(var(--gold-light)) 0%, rgb(var(--gold)) 45%, rgb(var(--gold-deep)) 100%)",
        "gradient-aurora":
          "linear-gradient(120deg, rgb(var(--sky)) 0%, rgb(var(--gold)) 55%, rgb(var(--bloom)) 100%)",
        "gradient-sheen":
          "linear-gradient(105deg, transparent 20%, rgb(255 255 255 / 0.16) 45%, rgb(255 255 255 / 0.02) 55%, transparent 80%)",
        "hero-vignette":
          "radial-gradient(120% 120% at 50% 0%, transparent 30%, rgb(var(--background) / 0.4) 68%, rgb(var(--background)) 100%)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
        "expo-out": "cubic-bezier(0.19, 1, 0.22, 1)",
        "expo-in-out": "cubic-bezier(0.87, 0, 0.13, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
        1200: "1200ms",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "33%": { transform: "translateY(-16px) translateX(9px)" },
          "66%": { transform: "translateY(12px) translateX(-7px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(200%)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.85)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        "gold-pulse": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(-6%, 0, 0) rotate(0deg)", opacity: "0.55" },
          "50%": { transform: "translate3d(6%, -4%, 0) rotate(8deg)", opacity: "0.85" },
        },
        "scroll-hint": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "60%": { opacity: "1" },
          "100%": { transform: "translateY(12px)", opacity: "0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 14s ease-in-out infinite",
        shimmer: "shimmer 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
        "gold-pulse": "gold-pulse 4s ease-in-out infinite",
        aurora: "aurora 18s ease-in-out infinite",
        "scroll-hint": "scroll-hint 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "spin-slow": "spin-slow 22s linear infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
