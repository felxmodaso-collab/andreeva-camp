import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bone:     "#F4EFE6",
        boneSoft: "#EAE2D2",
        ink:      "#0C0C0E",
        charcoal: "#1A1A1D",
        graphite: "#2B2B30",
        ash:      "#74747A",
        ashLight: "#9B9BA1",
        line:     "#DFD7C7",
        blood:    "#C42420",
        bloodDark:"#9D1B19",
        bloodLight:"#EA5B5B",
        stone:    "#2B3A38",
        river:    "#5A8B89",
        riverLight:"#86B0AD",
        sun:      "#E8B247",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Impact", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        kilo: ["clamp(3.5rem, 12vw, 11rem)", { lineHeight: "0.88", letterSpacing: "-0.03em" }],
        mega: ["clamp(3rem, 7vw, 7rem)",     { lineHeight: "0.92", letterSpacing: "-0.025em" }],
        hero: ["clamp(2.25rem, 5vw, 5rem)",  { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        h1:   ["clamp(1.85rem, 3.5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        h2:   ["clamp(1.4rem, 2.4vw, 2.25rem)", { lineHeight: "1.18", letterSpacing: "-0.01em" }],
        h3:   ["clamp(1.15rem, 1.4vw, 1.5rem)", { lineHeight: "1.25", letterSpacing: "-0.005em" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small:["0.875rem", { lineHeight: "1.55" }],
        eyebrow:["0.75rem", { lineHeight: "1.2", letterSpacing: "0.18em" }],
      },
      maxWidth: { container: "1280px", narrow: "920px", text: "640px" },
      spacing: {
        section: "clamp(4rem, 10vw, 8rem)",
        sectionSm: "clamp(2.5rem, 6vw, 4.5rem)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(12,12,14,.04), 0 4px 16px rgba(12,12,14,.06)",
        soft: "0 10px 40px -10px rgba(12,12,14,.15)",
        deep: "0 24px 60px -20px rgba(12,12,14,.45)",
        glow: "0 0 0 1px rgba(196,36,32,.15), 0 8px 32px -8px rgba(196,36,32,.35)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "fade-up": "fadeUp .7s cubic-bezier(.22,.61,.36,1) both",
        "ken-burns": "kenBurns 18s ease-in-out infinite alternate",
        breathe: "breathe 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        fadeUp:  { from: { opacity: "0", transform: "translateY(28px)" }, to: { opacity: "1", transform: "none" } },
        kenBurns:{ "0%": { transform: "scale(1)" }, "100%": { transform: "scale(1.08)" } },
        breathe: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.55" } },
      },
    },
  },
  plugins: [],
};

export default config;
