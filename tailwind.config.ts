import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-syne)", ...fontFamily.sans],
        mono: ["var(--font-dm-mono)", ...fontFamily.mono],
        serif: ["var(--font-instrument-serif)", ...fontFamily.serif],
        display: ["var(--font-kanit)", ...fontFamily.sans],
      },
      colors: {
        // Portfolio dark theme tokens — mirrors CSS custom properties
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Custom palette — neutral dark grey theme
        bg: {
          DEFAULT: "#0C0C0C",
          2: "#111111",
          3: "#161616",
        },
        surface: {
          DEFAULT: "#1C1C1C",
          2: "#222222",
        },
        border: {
          DEFAULT: "#2A2A2A",
          2: "#363636",
        },
        accent: {
          DEFAULT: "#E8E8E8",
          2: "#BBBBBB",
          dim: "#2A2A2A",
        },
        ink: {
          DEFAULT: "#E8E8E8",
          2: "#999999",
          3: "#555555",
        },

        // shadcn compat
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.33%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blink: "blink 1s step-end infinite",
        pulse: "pulse 2s infinite",
        "fade-up": "fade-up 0.7s ease forwards",
        "slide-in": "slide-in 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 30s linear infinite",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, #646973 0%, #BBCCD7 100%)",
        "contact-btn":
          "linear-gradient(123deg, #1a1a1a 7%, #3a3a3a 37%, #2a2a2a 72%, #444444 100%)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
        "grid-pattern":
          "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
      },
      boxShadow: {
        "contact-btn":
          "0px 4px 4px rgba(255,255,255,0.08), 4px 4px 12px #333333 inset",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
