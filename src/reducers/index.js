import {combineReducers} from 'redux';
import {stackReducers,loadStackReducers} from './stackReducers';

export default combineReducers({
	stackReducers,
	loadStackReducers
});
