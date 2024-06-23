/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      padding: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)"
      }
    }
  },
  plugins: [
    // plugin(function ({ addUtilities }) {
    //   console.log("Adding custom utilities");
    //   const newUtilities = {
    //     ".safe-top": {
    //       paddingTop: "constant(safe-area-inset-top)",
    //       paddingTop: "env(safe-area-inset-top)"
    //     }
    //   };
    //   addUtilities(newUtilities);
    // })
  ]
};
