import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import currentThemeReducer from './currentThemeReducer';
import currentQuestionReducer from './currentQuestionReducer';
import navReducer from './navReducer';

const allReducers = combineReducers({
	currentUser: currentUserReducer,
	currentTheme: currentThemeReducer,
	currentQuestion: currentQuestionReducer,
	nav: navReducer,
});

export default allReducers;
