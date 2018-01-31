import axios from "axios";
import qs from "qs";
import {urlhttp,urlhttps} from "../app/check-env";
import mes from "../components/message";

//公用
export const CANCEL = "CANCEL";

export function cancel(val){
	return {type:CANCEL,val};
}
//login
export const LOADING = "LOADING";

export function loading(val,cb){
	delete val.remember;
	return () => {
		axios.post(urlhttps+"/admin.login/login",qs.stringify(val)).then(function(res){
			let data = res.data;
			if(!data.error){
				sessionStorage.setItem("token",data.data.admin_token);
				cb();
			}else{
				mes(data.error);
			}
		});
	};
}

//main
export const CHANGE_HEIGHT = "CHANGE_HEIGHT";
export const GETMENU = "GETMENU";

export function mainHeight(height){
	return {type:CHANGE_HEIGHT,height};
}
export function mainGetMenu(admin_token){
	return (dispatch) => {
		axios.post(urlhttp+"/admin.admin/public_getMenu",qs.stringify({admin_token})).then(function(res){
			let data = res.data;
			if(!data.error){
				dispatch({type:GETMENU,data:data.data.menu_list});
			}else{
				mes(data.error);
			}
		});
	};
}

