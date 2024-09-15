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
        pastelPink: "#E76C97",
        pastelBlue: "#C1E3EB",
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
