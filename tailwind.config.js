/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Inter var, sans-serif"],
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
      backgroundImage: {
        "home-background": "url('/bookshelf.jpg')",
      },
    },
  },
  plugins: [],
};
