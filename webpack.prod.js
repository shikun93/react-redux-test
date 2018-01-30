var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.base.js');
var merge = require('webpack-merge');
var CompressionPlugin = require('compression-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackConfig,{
	devtool:'false',
	 module:{
	 	rules:[
			{
				test:/\.less$/,
				use:ExtractTextPlugin.extract({
					fallback:'style-loader',
					use:[
						{
							loader:'css-loader',
							// options:{
							// 	modules:true
							// }
						},
						{loader:'less-loader'},
						{loader:'postcss-loader'}
					]
				}),	
			}
	 	]
	 },
	plugins:[
		new webpack.DefinePlugin({
			'process.env':{
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new UglifyJsPlugin({
			uglifyOptions:{
				ie8:true,
				warnings:false,
				parallel: true,
				sourceMap: true
			}
		}),
		new OptimizeCSSPlugin({
            cssProcessorOptions: { 
                safe: true, 
                map: { inline: false } 
            }
        }),
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor',
			minChunks:function(module,count){
				return module.resoure&&(/\.js/.test(module.resoure))&&module.resource.indexOf(
            	path.join(__dirname, '../node_modules')) === 0;
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:'mainifest',
			chunks:['vendor']
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:'app',
			children: true,
			async:true,
			minChunks:function(module,count){
				return module.resoure&&(/\.js/.test(module.resoure))&&count === 3;
			}
		}),
		new CompressionPlugin({
			test:/\.(js|css)$/,
			asset:'[path].gz[query]',
			algorithm:'gzip',
			threshold:'10240',
			minRatio:0.8
		}),
		new CopyWebpackPlugin([{
			from:path.join(__dirname,'static'),
			to: 'static',
            ignore: ['.*']
		}]),
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			showErrors:true,
			inject:true,
			favicon:'',
			minify:{
				caseSensititve:false, //大小写是否敏感
				removeComments:true, //去除注释
				removeEmptyAttributes:true, //去除空属性
				collapseWhitespace:true //去除空格
			}
		}),
		new ExtractTextPlugin({
			filename:'css/[name][hash:7].css',
			allChunks:true
		}),
	]
})