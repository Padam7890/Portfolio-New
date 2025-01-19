import { Inter } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base_white: "var(--base_white)",
        base_black: "var(--base_black)",
        accent_color: "var(--accent_color)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
