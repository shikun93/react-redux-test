import { LOADING,CANCEL } from "../actions";

function login(state = {error:""},action) {
	switch (action.type) {
	case LOADING:
		return Object.assign({},state,{
			error:action.error
		});
	case CANCEL:
		return Object.assign({},state,{
			[action.val]:""
		});
	default:
		return state;
	}
}

export {login};