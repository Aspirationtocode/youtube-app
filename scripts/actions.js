import {
	START_FETCH_CURRENT_USER_DATA,
	FINISH_FETCH_CURRENT_USER_DATA,
	ERROR_FETCH_CURRENT_USER_DATA,
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
