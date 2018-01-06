import {
	START_FETCH_CURRENT_USER_DATA,
	FINISH_FETCH_CURRENT_USER_DATA,
	ERROR_FETCH_CURRENT_USER_DATA,
} from '../constants';

const initialState = {
	fetched: false,
	fetching: false,
	data: null,
	error: null,
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
		default: {
			return state;
		}
	}
};

export default currentUserReducer;
