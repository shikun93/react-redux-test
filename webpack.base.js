var path = require('path');

module.exports = {
	entry:{
		app:'./src/router/router.js'
	},
	output:{
		filename:'js/[name].js',
		path:path.resolve(__dirname,'./dist'),
		chunkFilename:'js/[name],js',
		publicPath:'./'
	},
	resolve:{
		extensions:['.js','.jsx','.json'],
		alias:{
			'@':path.join(__dirname,'src')
		}
	},
	module: {
	    rules: [
	      {
	        test: /\.(js|jsx)$/,
	        use: 'babel-loader',
	        exclude:'/node_modules/',
	        include: [path.join(__dirname,'src')]
	      },  
	      {
	        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	        loader: 'url-loader',
	        options: {
	          limit: 10000,
	          name: 'img/[name].[ext]'
	        }
	      },
	      {
	        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
	        loader: 'url-loader',
	        options: {
	          limit: 10000,
	          name: 'media/[name].[ext]'
	        }
	      },
	      {
	        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
	        loader: 'url-loader',
	        options: {
	          limit: 10000,
	          name: 'fonts/[name].[ext]'
	        }
	      }
	    ]
  	},
}