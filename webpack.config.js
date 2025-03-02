const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	devtool: 'source-map',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	performance: {
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Legacy Sim',
			favicon: 'favicon.ico',
		}),
	],
};
