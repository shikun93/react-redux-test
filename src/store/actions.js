export const CHANGE_VALUE = "CHANGE_VALUE";
export const CHANGE_HEIGHT = "CHANGE_HEIGHT";

export function changeValue(val){
	return {type:CHANGE_VALUE,val};
}

export function changeHeight(val){
	return {type:CHANGE_HEIGHT,val};
}