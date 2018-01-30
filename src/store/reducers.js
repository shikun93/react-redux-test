import { combineReducers } from "redux";
import { CHANGE_VALUE } from "./actions";

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

const todoApp = combineReducers({
  login
});

export default todoApp;