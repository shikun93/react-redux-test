import { combineReducers } from "redux";
import { CHANGE_VALUE,CHANGE_HEIGHT } from "./actions";

function login(state = {value:1},action) {
	switch (action.type) {
	case CHANGE_VALUE:
		return Object.assign({},state,{
			val:action.val
		});
	default:
		return state;
	}
}

function main(state = {height:"0px"},action){
	switch (action.type) {
		case CHANGE_HEIGHT:
			return Object.assign({},state,{
				height:action.val+"px"
			});
		default:
			return state;
	}
}

const todoApp = combineReducers({
	login,
	main
});

export default todoApp;