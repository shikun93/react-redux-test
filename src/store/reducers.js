import { combineReducers } from "redux";
import {login} from "./modules/login";
import {main} from "./modules/main";

const todoApp = combineReducers({
	login,
	main
});

export default todoApp;