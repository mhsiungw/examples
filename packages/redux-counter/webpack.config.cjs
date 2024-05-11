const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['./index.js'],
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'js/bundle.js'
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist')
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-function-bind'],
					}
				},
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
			inject: true,
			minify: true,
		}),
	]
}