import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import navReducer from './navReducer';

const allReducers = combineReducers({
	currentUser: currentUserReducer,
	nav: navReducer,
});

export default allReducers;
