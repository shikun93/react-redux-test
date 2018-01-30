var ora = require('ora');
var rm = require("rimraf");
var path = require('path');
var chalk = require('chalk');
var webpack = require("webpack");
var config = require("./webpack.prod.js");

var spinner = ora('building for production...');
spinner.start();

rm(path.join('dist'),err =>{
	if(err) throw err;
	webpack(config,function(err, stats){
		spinner.stop();
		if (err) throw err;
		 console.log(chalk.cyan('  Build complete.\n'))
	});
})