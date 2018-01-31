import { CHANGE_HEIGHT,GETMENU } from "../actions";

function main(state = {height:"0px"},action) {
	switch (action.type) {
	case CHANGE_HEIGHT:
		return Object.assign({},state,{
			height:action.height-162+"px"
		});
	case GETMENU:
		return Object.assign({},state,{
			menu:action.data
		});
	default:
		return state;
	}
}

export {main};