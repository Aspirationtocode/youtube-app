import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import currentThemeReducer from './currentThemeReducer';
import currentQuestionReducer from './currentQuestionReducer';

const allReducers = combineReducers({
	currentUser: currentUserReducer,
	currentTheme: currentThemeReducer,
	currentQuestion: currentQuestionReducer,
});

export default allReducers;
