/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "custom-grid": "240px 2fr 1fr",
      },
      colors: {
        "f5-main": "#f5f5f5",
        "color-main": "#74B1F4",
        "gray-main": "rgba(0, 0, 0, 0.035)",
        "purple-custom": "#EBECFC",
      },
      container: {
        center: true,
      },
      screens: {
        // "xs": "320px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1280px",
        // // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
