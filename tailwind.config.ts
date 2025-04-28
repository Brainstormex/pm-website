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
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "var(--foreground)",
        indigo: "var(--indigo)",
        orange: "var(--orange)",
        description: "var(--description)",  
        border: "var(--border)",
        borderGray: "var(--border-gray)",
        lightOrange: "var(--light-orange)",
        newsletterBackground: "var(--newsletterBackground)",
        inkBlack: "rgb(var(--ink-black) / <alpha-value>)",
        inactiveGray: "var(--inactive-gray)",
        primaryBlack:"var(--primaryBlack)"
      },
      fontFamily: {
        custom: ["var(--font-custom)", "sans-serif"],
        sans: ["var(--font-custom)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        fraunces:['var(--font-fraunces)',"sans-serif"]
      },
      borderWidth: {
        "0.5": "0.5px",
      },
    },
  },
  plugins: [],
} satisfies Config;
