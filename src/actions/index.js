export const SET_STACK='SET_STACK';
export const LOAD_STACKS='LOAD_STACKS';
export function setStack(stack){
	
	return {
	type:SET_STACK,
	payload:stack
};
}

export function loadStack(list){
	
	return {
	type:LOAD_STACKS,
	payload:list
};
}
