const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Red: "#C92127",
        Black: "#0B0A0A",
        White: "#FAFAFA",
      },
      fontFamily: {
        Neuropal: ["var(--neuropal)"],
        ClashDisplay: ["var(--clashdisplay)"],
      },
      screens: {
        xs: "0px", // Custom xs screen starting from 0px
        sm: "640px", // Default sm screen starts from 640px in Tailwind
        md: "768px", // Default md screen starts from 768px in Tailwind
        lg: "1024px", // Default lg screen starts from 1024px in Tailwind
        xl: "1280px", // Default xl screen starts from 1280px in Tailwind
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(97.5deg, #3BAEEB -7.64%, #D5C664 103.16%)",
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-gradient": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
          color: "transparent",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
