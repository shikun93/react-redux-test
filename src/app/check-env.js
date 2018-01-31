if(process.env.NODE_ENV=="production"){
	exports.urlhttp ="http://api.sjyprt.com";
	exports.urlhttps ="https://api.sjyprt.com";  
}else{
	exports.urlhttp ="";
	exports.urlhttps =""; 
}

