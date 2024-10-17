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
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundSecondary: "var(--backgroundSecondary)",
        foregroundSecondary: "var(--foregroundSecondary)",
        green: {
          default: "var(--color-green-default)",
          dark: "var(--color-green-dark)",
          light: "var(--color-green-light)"
        },
        blue: "var(--color-blue)",
        yellow: "var(--color-yellow)",
        teal: "var(--color-teal)",
        red: "var(--color-red)",
        cyan: "var(--color-cyan)",
        border: {
          100: "var(--border-100)",
          200: "var(--border-200)",
        },

        highlight: {
          verdinho: "var(--verdinho-300)",
          azul: "var(--azul-highlight)",
          primary: "var(--primary)"
        },
        sidebar: {
          DEFAULT: "var(--azul-800)",
          foreground: "var(--text-white)"
        },
        textSimples: {
          "200": "var(--text-simples-200)",
          "300": "var(--text-simples-300)",
          "400": "var(--text-simples-400)",
          white: "var(--text-white)"
        },
        input: "var(--input)",
        ring: "var(--ring)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)"
        },
        destructive: {
          DEFAULT: "var(--destructive))",
          foreground: "var(--destructive-foreground)"
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)"
        },
        accentNeutral: {
          DEFAULT: "var(--accentNeutral)",
          foreground: "var(--accent-foregroundNeutral)"
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)"
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        frameComponents: {
          from: {
            opacity: "0.1"
          },
          to: {
            opacity: "1"
          }
        },
        "accordion-down": {
          from: {
            height: "0"
          },
          to: {
            height: "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: {
            height: "0"
          }
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      },
      animation: {
        frameComponents: "frameComponents 0.4s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0s ease-out"
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
export default config;
