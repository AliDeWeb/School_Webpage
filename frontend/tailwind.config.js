/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*/*/*.tsx", "./src/*/*/*/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
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
