import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Akkurat: ["var(--font-akkurat)"],
        AkkuratBold: ["var(--font-akkurat-bold)"],
        ChronicleDisplay: ["var(--font-chronicle-display)"],
      },
      colors: {
        primary: {
          1: "var(--color-white)",
          2: "var(--color-black)",
          3: "var(--color-light-grey)",
          4: "var(--color-dark-grey)",
          5: "var(--color-text-gray)",
        },
        secondary: {
          1: "var(--color-border-grey)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
