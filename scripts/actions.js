import {
	START_FETCH_CURRENT_USER_DATA,
	FINISH_FETCH_CURRENT_USER_DATA,
	ERROR_FETCH_CURRENT_USER_DATA,
	SET_CURRENT_THEME,
	SET_CURRENT_QUESTION,
} from './constants';
import db from './db';

export const fetchCurrentUserData = (dispatch, currentUserName) => async () => {
	dispatch({ type: START_FETCH_CURRENT_USER_DATA });
	try {
		const response = await db.fetchUser(currentUserName);
		const currentUserData = response.data;
		dispatch({
			type: FINISH_FETCH_CURRENT_USER_DATA,
			payload: currentUserData,
		});
	} catch (err) {
		dispatch({
			type: ERROR_FETCH_CURRENT_USER_DATA,
			payload: err,
		});
	}
};

export const setCurrentTheme = theme => {
	return { type: SET_CURRENT_THEME, payload: theme };
};

export const setCurrentQuestion = question => {
	return { type: SET_CURRENT_QUESTION, payload: question };
};
