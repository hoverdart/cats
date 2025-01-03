import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(slider|popover).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui()],
  safelist: [
    "columns-3xs",
    "columns-2xs",
    "columns-xs",
    "columns-sm",
    "columns-md",
    "columns-lg",
    "columns-xl",
    "columns-2xl",
    "columns-3xl",
    "columns-4xl",
    "gap-2",
    // Add all required column classes up to "columns-13"
  ],
};
export default config;
