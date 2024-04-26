/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scale: {
          "0%": {
            scale: "20%",
          },
          "20%": {
            scale: "60%",
          },
          "40%": {
            scale: "80%",
          },
          "60%": {
            scale: "90%",
          },
          "80%": {
            scale: "110%",
          },
          "100%": {
            scale: "100%",
          },
        },
      },
      animation: {
        "scale-in": "scale 2s infinite",
      },
    },
  },
  plugins: [],
};
