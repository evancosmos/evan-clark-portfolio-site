import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        popin: "slidein 20s infinite",
        gentleping: "gentleping 10s cubic-bezier(0, 0, 0.2, 1) infinite"
      },
      keyframes: {
        gentleping: {
          "0%": {
            opacity: "0.6",
          },
          "60%": {
            opacity: "0",
          },
          "100%": {
            transform: "scale(1.2)",
            opacity: "0",
          },
        },

        slidein: {
          "0%": {
            transform: "translateX(-300px)",
          },
          "20%": {
            transform: "translateX(-100px)",
          },
          "70%": {
            transform: "translateX(0px)",
          },
          "100%": {
            transform: "translateX(-300px)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
