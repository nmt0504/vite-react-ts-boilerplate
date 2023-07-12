/** @type {import('tailwindcss').Config} */

export default {
  prefix: 'tw-',
  content: {
    files: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {},
      screens: {
        "-2xl": { max: "1600px" },
        // => @media { max-width: 1600px }
        "-xl": { max: "1400px" },
        // => @media { max-width: 1400px }
        "-lg": { max: "1023px" },
        // => @media { max-width: 1023px }
        "-md": { max: "767px" },
        // => @media { max-width: 767px }
        "-sm": { max: "639px" },
        // => @media { max-width: 639px }
        "-xs": { max: "480px" },
        // => @media { max-width: 480px }
      },
    },
  },
  plugins: [],
}
