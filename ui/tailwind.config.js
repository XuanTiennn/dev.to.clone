/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ["13px", "20px"],
      xl: ["30px"],
      text14:["14px"]
    },
    extend: {
      gridTemplateColumns: {
        "custom-grid": "240px 2fr 1fr",
      },
      colors: {
        "f5-main": "#f5f5f5",
        "color-main": "#74B1F4",
      },
      container: {
        center: true,
      },
      screens: {
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
