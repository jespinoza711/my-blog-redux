var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let devFlagPlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
	devtool: 'inline-sourcemap',
	entry: [
		'.app/src/js/index.js'
	],
	output: {
		path: path.join(__dirname, 'app/build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(ROOT_PATH, 'app/build'),
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlwebpackPlugin({
			title: 'Coding World Blog'
		}),
		devFlagPlugin
	],
	module: {
		loaders: [
			{ test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
		]
	},
};