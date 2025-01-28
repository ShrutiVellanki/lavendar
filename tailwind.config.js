/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,stories.tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavenderMoon: {
          base: "var(--lavenderMoon-base)",
          surface: "var(--lavenderMoon-surface)",
          overlay: "var(--lavenderMoon-overlay)",
          muted: "var(--lavenderMoon-muted)",
          subtle: "var(--lavenderMoon-subtle)",
          text: "var(--lavenderMoon-text)",
          love: "var(--lavenderMoon-love)",
          gold: "var(--lavenderMoon-gold)",
          rose: "var(--lavenderMoon-rose)",
          pine: "var(--lavenderMoon-pine)",
          foam: "var(--lavenderMoon-foam)",
          iris: "var(--lavenderMoon-iris)",
          highlightLow: "var(--lavenderMoon-highlightLow)",
          highlightMed: "var(--lavenderMoon-highlightMed)",
          highlightHigh: "var(--lavenderMoon-highlightHigh)",
        },
        lavenderDawn: {
          base: "var(--lavenderDawn-base)",
          surface: "var(--lavenderDawn-surface)",
          overlay: "var(--lavenderDawn-overlay)",
          muted: "var(--lavenderDawn-muted)",
          subtle: "var(--lavenderDawn-subtle)",
          text: "var(--lavenderDawn-text)",
          love: "var(--lavenderDawn-love)",
          gold: "var(--lavenderDawn-gold)",
          rose: "var(--lavenderDawn-rose)",
          pine: "var(--lavenderDawn-pine)",
          foam: "var(--lavenderDawn-foam)",
          iris: "var(--lavenderDawn-iris)",
          highlightLow: "var(--lavenderDawn-highlightLow)",
          highlightMed: "var(--lavenderDawn-highlightMed)",
          highlightHigh: "var(--lavenderDawn-highlightHigh)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addBase }) {
      addBase({
        ":root": {
          "--lavenderMoon-base": "#575279",
          "--lavenderMoon-surface": "#635F8E",
          "--lavenderMoon-overlay": "#6E6A86",
          "--lavenderMoon-muted": "#9893A5",
          "--lavenderMoon-subtle": "#908CAA",
          "--lavenderMoon-text": "#FAF4ED",
          "--lavenderMoon-love": "#EB6F92",
          "--lavenderMoon-gold": "#F6C177",
          "--lavenderMoon-rose": "#EBBCBA",
          "--lavenderMoon-pine": "#56B6C2",
          "--lavenderMoon-foam": "#9CCFD8",
          "--lavenderMoon-iris": "#C4A7E7",
          "--lavenderMoon-highlightLow": "#6E6A86",
          "--lavenderMoon-highlightMed": "#817F96",
          "--lavenderMoon-highlightHigh": "#9693A5",
          "--lavenderDawn-base": "#FAF4ED",
          "--lavenderDawn-surface": "#FFFAF3",
          "--lavenderDawn-overlay": "#F2E9E1",
          "--lavenderDawn-muted": "#797593",
          "--lavenderDawn-subtle": "#655E7E",
          "--lavenderDawn-text": "#4A4458",
          "--lavenderDawn-love": "#B4637A",
          "--lavenderDawn-gold": "#EA9D34",
          "--lavenderDawn-rose": "#D7827E",
          "--lavenderDawn-pine": "#286983",
          "--lavenderDawn-foam": "#56949F",
          "--lavenderDawn-iris": "#575279",
          "--lavenderDawn-highlightLow": "#F4EDE8",
          "--lavenderDawn-highlightMed": "#DFDAD9",
          "--lavenderDawn-highlightHigh": "#CECACD",
          "--border": "var(--lavenderMoon-base)",
          "--input": "var(--lavenderMoon-surface)",
          "--ring": "var(--lavenderMoon-overlay)",
          "--background": "var(--lavenderMoon-surface)",
          "--foreground": "var(--lavenderMoon-text)",
          "--primary": "var(--lavenderMoon-love)",
          "--primary-foreground": "var(--lavenderMoon-text)",
          "--secondary": "var(--lavenderDawn-surface)",
          "--secondary-foreground": "var(--lavenderDawn-text)",
          "--destructive": "var(--lavenderMoon-rose)",
          "--destructive-foreground": "var(--lavenderDawn-base)",
          "--muted": "var(--lavenderMoon-muted)",
          "--muted-foreground": "var(--lavenderMoon-subtle)",
          "--accent": "var(--lavenderMoon-gold)",
          "--accent-foreground": "var(--lavenderMoon-text)",
          "--popover": "var(--lavenderDawn-overlay)",
          "--popover-foreground": "var(--lavenderDawn-text)",
          "--card": "var(--lavenderDawn-base)",
          "--card-foreground": "var(--lavenderDawn-text)",
          "--radius-lg": "8px",
          "--radius-md": "6px",
          "--radius-sm": "4px",
        },
      });
    },
  ],
};