/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        display: ["Dancing Script", "cursive"],
        body: ["Roboto Mono", "monospace"],
      },
    },
  },
};
