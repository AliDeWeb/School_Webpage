/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*/*/*.{tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dana: "dana",
        danaBold: "danaBold",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
