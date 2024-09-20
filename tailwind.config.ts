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
        backgroundMain: "hsl(var(--background))",
        foregroundMain: "hsl(var(--foreground))",
        text_highlight: "var(--color-text)",
        border: "hsl(var(--border))",
        sidebar: {
          bgSidebar: "#03363D"
        }
      },
      keyframes: {
        frameComponents: {
          "from": { opacity: "0.1" },
          "to": { opacity: "1" },
        },
      },
      animation: {
        frameComponents: "frameComponents 0.4s ease-out",
      },
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
