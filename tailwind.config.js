/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#191724",
          moon: "#232136",
          dawn: "#faf4ed"
        },
        surface: {
          DEFAULT: "#1f1d2e",
          moon: "#2a273f",
          dawn: "#fffaf3"
        },
        overlay: {
          DEFAULT: "#26233a",
          moon: "#393552",
          dawn: "#f2e9e1"
        },
        muted: {
          DEFAULT: "#6e6a86",
          moon: "#6e6a86",
          dawn: "#9893a5"
        },
        subtle: {
          DEFAULT: "#908caa",
          moon: "#908caa",
          dawn: "#797593"
        },
        text: {
          DEFAULT: "#e0def4",
          moon: "#e0def4",
          dawn: "#575279"
        },
        love: {
          DEFAULT: "#eb6f92",
          moon: "#eb6f92",
          dawn: "#b4637a"
        },
        gold: {
          DEFAULT: "#f6c177",
          moon: "#f6c177",
          dawn: "#ea9d34"
        },
        rose: {
          DEFAULT: "#ebbcba",
          moon: "#ea9a97",
          dawn: "#d7827e"
        },
        pine: {
          DEFAULT: "#31748f",
          moon: "#3e8fb0",
          dawn: "#286983"
        },
        foam: {
          DEFAULT: "#9ccfd8",
          moon: "#9ccfd8",
          dawn: "#56949f"
        },
        iris: {
          DEFAULT: "#c4a7e7",
          moon: "#c4a7e7",
          dawn: "#907aa9"
        },
        "hl-low": {
          DEFAULT: "#21202e",
          moon: "#2a283e",
          dawn: "#f4ede8"
        },
        "hl-med": {
          DEFAULT: "#403d52",
          moon: "#44415a",
          dawn: "#dfdad9"
        },
        "hl-high": {
          DEFAULT: "#524f67",
          moon: "#56526e",
          dawn: "#cecacd"
        }
      }
    },
  },
  plugins: [],
}
