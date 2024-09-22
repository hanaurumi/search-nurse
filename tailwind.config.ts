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
        pastelPink: "#d46976",
        pastelBlue: "#0ea5e9",
        blue: "#AACAFFF",
      },
    },
  },
  variants: {
    extend: {
      textColor:['hover'],
    },
  },
  plugins: [],
};
export default config;
