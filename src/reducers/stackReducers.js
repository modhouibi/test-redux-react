import {SET_STACK,LOAD_STACKS} from '../actions';

export function stackReducers(state={},action){
	
	
	switch(action.type){
		
		case SET_STACK:
		return action.payload;

	}
	return state;
}

export function loadStackReducers(state=[],action){
	
		switch(action.type){
		
		case LOAD_STACKS:
		return action.payload;

	}
	return state;
}
