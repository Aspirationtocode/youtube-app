import {
	START_FETCH_CURRENT_USER_DATA,
	FINISH_FETCH_CURRENT_USER_DATA,
	ERROR_FETCH_CURRENT_USER_DATA,
	SET_CURRENT_THEME_ID,
	SET_CURRENT_QUESTION_ID,
} from '../constants';

const initialState = {
	fetched: false,
	fetching: false,
	data: null,
	error: null,
	currentThemeId: null,
	currentQuestionId: null,
};

const currentUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCH_CURRENT_USER_DATA: {
			const newCurrentUser = Object.assign({}, state, {
				fetching: true,
				fetched: false,
				error: null,
			});
			return newCurrentUser;
		}
		case FINISH_FETCH_CURRENT_USER_DATA: {
			const newCurrentUser = Object.assign({}, state, {
				fetching: false,
				fetched: true,
				error: null,
				data: action.payload,
			});
			return newCurrentUser;
		}
		case ERROR_FETCH_CURRENT_USER_DATA: {
			const newCurrentUser = Object.assign({}, state, {
				fetching: false,
				fetched: false,
				data: null,
				error: action.payload,
			});
			return newCurrentUser;
		}
		case SET_CURRENT_THEME_ID: {
			const newCurrentUser = Object.assign({}, state, {
				currentThemeId: action.payload,
			});
			return newCurrentUser;
		}
		case SET_CURRENT_QUESTION_ID: {
			const newCurrentUser = Object.assign({}, state, {
				currentQuestionId: action.payload,
			});
			return newCurrentUser;
		}
		default: {
			return state;
		}
	}
};

export default currentUserReducer;
