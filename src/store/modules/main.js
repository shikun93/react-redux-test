import { CHANGE_HEIGHT,GETMENU,GETNEXTMENU } from "../actions";

function main(state = {height:"0px",menu:[],childMenu:[]},action) {
	switch (action.type) {
	case CHANGE_HEIGHT:
		return Object.assign({},state,{
			height:action.height-162+"px"
		});
	case GETMENU:
		return Object.assign({},state,{
			menu:action.data
		});
	case GETNEXTMENU:
		return Object.assign({},state,{
			childMenu:action.nextMenu
		});
	default:
		return state;
	}
}

export {main};