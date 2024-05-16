const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const { plugin } = require('postcss')
module.exports = {
	plugins: [
		'postcss-preset-env',
		autoprefixer,
		tailwindcss('./tailwind.config.cjs')
	]
}