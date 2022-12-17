const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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