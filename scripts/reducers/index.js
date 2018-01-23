import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import gameStatusReducer from './gameStatusReducer';
import navReducer from './navReducer';

const allReducers = combineReducers({
	currentUser: currentUserReducer,
	nav: navReducer,
	gameStatus: gameStatusReducer,
});

export default allReducers;
