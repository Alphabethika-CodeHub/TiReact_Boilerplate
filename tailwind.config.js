const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "elegant-black": "#131312",
      "elegant-soft-black": "#232b2b",
      "soft-black": "#0e1111",
    },
    screens: {
      'sm2': '411px',
      // => @media (min-width: 411px) { ... }

      'md2': '768px',
      // => @media (min-width: 768px) { ... }
    },
    extend: {},
  },
  plugins: [],
});