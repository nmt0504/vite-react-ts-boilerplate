// /** @type {import('postcss-load-config').Config} */
const tailwindcss = require('tailwindcss');

const config = {
  // plugins: {
  //   tailwindcss: import('./tailwind.config.js'),
  //   autoprefixer: {},
  // },
  plugins: [
    tailwindcss('./tailwind.config.js'), 
    require('autoprefixer'),
  ]
};

module.exports = config;
