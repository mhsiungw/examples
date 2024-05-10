const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer')
module.exports = {
  plugins: [
    'postcss-preset-env',
		autoprefixer,
    tailwindcss('./tailwind.config.cjs')
  ],
};