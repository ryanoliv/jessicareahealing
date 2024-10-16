import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fffbf5",
        primaryLight: "#FFFEFC",
        secondary: "#383737",
        secondaryLight: "#545353",
        tertiary: "#ac883e",
        accent: "#eadac1",
      },
      fontFamily: {
        futura: ["Futura", "sans-serif"],
        "brandon-grotesque": ["Brandon Grotesque", "sans-serif"],
      },
      fontSize: {
        xxs: "0.75rem",
        xs: "0.875rem",
        base: "1rem",
        md: "1.125rem",
        lg: "1.25rem",
        xl: "1.5rem",
        xxl: "1.8125rem",
        xxxl: "2.25rem",
        xxxxl: "2.75rem",
      },
      spacing: {
        marginB: "1.45rem",
        marginBx2: "2.9rem",
      },
      backgroundImage: {
        "hero-image": "url('/images/mobile/hero-image-m.jpg')",
        "hero-gradient":
          "linear-gradient(rgba(181,142,65,0.35),rgba(0,0,0,0.6))",
      },
    },
  },
  plugins: [],
};
export default config;
