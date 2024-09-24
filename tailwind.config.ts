import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundMain: "var(--background)",
        foregroundMain: "var(--foreground)",

        border: "var(--border)",

        highlight: {
          verdinho: "var(--verdinho-300)",
          primary: "var(--primary)",
        },

        sidebar: {
          DEFAULT: "var(--azul-800)",
          foreground: "var(--text-white)",
        },

        textSimples: {
          200: "var(--text-simples-200)",
          400: "var(--text-simples-400)",
        },

        input: "var(--input)",
        ring: "var(--ring)",

        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundSecondary: "var(--backgroundSecondary)",
        foregroundSecondary: "var(--foregroundSecondary)",

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },

        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive))",
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
        accentNeutral: {
          DEFAULT: "var(--accentNeutral)",
          foreground: "var(--accent-foregroundNeutral)",
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        frameComponents: {
          from: { opacity: "0.1" },
          to: { opacity: "1" },
        },
      },
      animation: {
        frameComponents: "frameComponents 0.4s ease-out",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
