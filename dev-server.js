var opn = require('opn');
var path = require('path');
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.dev.js");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware');
var proxy = require('http-proxy-middleware');

var app = express();

var compiler = webpack(config);

//为了修改html文件也能实现热加载，使用webpack插件来监听html源文件改变事件
compiler.plugin('compilation',function(compilation){
   compilation.plugin('html-webpack-plugin-alter-asset-tags', function (htmlPluginData, cb) {
       // 发布事件
      htmlPluginData.head.push({
      	tagName:'script',
      	closeTag:true,
      	attributes:{type:'text/javascript',src:'static/vendors.dll.js'}
      });
      cb(null,htmlPluginData);
   })
})
var devMiddleware = webpackDevMiddleware(compiler,{
    publicPatch:"./",
    quiet:true
});
app.use(devMiddleware);
app.use(webpackHotMiddleware(compiler));

var staticPath = path.posix.join('/static');
app.use(staticPath, express.static('./static'));

const apiProxy = proxy('/**/**',{ target: 'https://api.sjyprt.com',changeOrigin: true });//将服务器代理到localhost:8080端口上[本地服务器为localhost:3000]
app.use(apiProxy);

devMiddleware.waitUntilValid(()=>{
	opn("http://localhost:6060/#/"); //,{app:"C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"}
})

app.listen(6060,function(){
    console.log('Listening at http://localhost:6060');
});