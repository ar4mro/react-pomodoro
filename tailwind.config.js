module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        major: ["Major Mono Display", "monospace"],
      },
      colors: {
        "sky-yellow": "#f7fca0",
        "sky-yellow-100": "#878b32",
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ["hover"],
    },
  },
  plugins: [],
};
