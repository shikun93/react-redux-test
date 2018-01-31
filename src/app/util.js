export const routerTrigger = function(t,url){
	return function(){
		t.props.history.push(url);
	};
};
