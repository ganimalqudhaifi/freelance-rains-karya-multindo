import type { Config } from "tailwindcss";

export default {
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
        primary: {
          DEFAULT: "var(--primary)",
          "100": "var(--primary-100)",
          "200": "var(--primary-200)",
          "600": "var(--primary-600)",
          "700": "var(--primary-700)",
          "800": "var(--primary-800)",
          "900": "var(--primary-900)",
          dark: "var(--primary-dark)",
        },
        neutral: {
          DEFAULT: "var(--neutral)",
          "400": "var(--neutral-400)",
          dark: "var(--neutral-dark)",
          light: "var(--neutral-light)"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
