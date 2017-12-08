import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';

const allReducers = combineReducers({
	currentUser: currentUserReducer,
});

export default allReducers;
