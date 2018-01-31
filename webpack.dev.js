var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.base.js');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

webpackConfig.entry.app = ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(webpackConfig.entry.app);

module.exports = merge(webpackConfig,{
	devtool:'#cheap-module-eval-source-map',
	 module:{
	 	rules:[
			{
				test:/\.(js|jsx)$/,
				loader:'eslint-loader',
				enforce:'pre',
				include:[path.join(__dirname,'src')],
				exclude:[path.join(__dirname,'src/app/check-env')],
				options:{
					formatter:require('eslint-friendly-formatter')
				}
			},
			{
				test:/\.less$/,
				use:[
					{loader:'style-loader'},
					{loader:'css-loader'},
					{loader:'less-loader'},
					{loader:'postcss-loader'}
				]
			}
	 	]
	 },
	plugins:[
		new webpack.DefinePlugin({
			'process.env':{
				NODE_ENV: JSON.stringify('development')
			}
		}),
		new webpack.DllReferencePlugin({
          	context: __dirname,
          	manifest: require('./vendors-manifest.json')
       	}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:true,
			favicon:''
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.ProvidePlugin({
		  _: 'lodash'
		}),
		new FriendlyErrorsWebpackPlugin()
	]
})