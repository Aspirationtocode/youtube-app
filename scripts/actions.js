import {
	START_FETCH_CURRENT_USER_DATA,
	FINISH_FETCH_CURRENT_USER_DATA,
	ERROR_FETCH_CURRENT_USER_DATA,
	SET_CURRENT_THEME_ID,
	SET_CURRENT_QUESTION_ID,
	SET_GAME_STATUS,
	RESET_GAME_STATUS,
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

export const setCurrentThemeId = themeId => ({
	type: SET_CURRENT_THEME_ID,
	payload: themeId,
});

export const setCurrentQuestionId = questionId => ({
	type: SET_CURRENT_QUESTION_ID,
	payload: questionId,
});

export const setGameStatus = (isRightAnswer, points) => ({
	type: SET_GAME_STATUS,
	payload: {
		isRightAnswer,
		points,
	},
});

export const resetGameStatus = () => ({
	type: RESET_GAME_STATUS,
});
