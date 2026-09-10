/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"]
      },
      // Type scale, shifted up from Tailwind's defaults. The small end carries
      // most of the site's content, so it gains the most (xs 12→14, sm 14→16);
      // headings taper off to +2px. Line-heights are paired with each size —
      // JetBrains Mono needs more leading than a proportional face.
      fontSize: {
        xs: ["0.875rem", "1.25rem"], // 14px / 20px
        sm: ["1rem", "1.5rem"], // 16px / 24px
        base: ["1.125rem", "1.75rem"], // 18px / 28px
        lg: ["1.25rem", "1.75rem"], // 20px / 28px
        xl: ["1.375rem", "1.875rem"], // 22px / 30px
        "2xl": ["1.625rem", "2.125rem"], // 26px / 34px
        "3xl": ["2rem", "2.375rem"], // 32px / 38px
        "4xl": ["2.375rem", "2.625rem"], // 38px / 42px
        "5xl": ["3.125rem", "1.1"] // 50px
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "fade-in": "fade-in 0.4s ease-out both"
      }
    }
  },
  plugins: []
};
