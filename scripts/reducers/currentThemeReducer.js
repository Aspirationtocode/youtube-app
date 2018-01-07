import { SET_CURRENT_THEME } from '../constants';

const initialState = null;

const currentThemeReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_THEME: {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};

export default currentThemeReducer;
