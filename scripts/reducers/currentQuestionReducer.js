import { SET_CURRENT_QUESTION } from '../constants';

const initialState = null;

const currentQuestionReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_QUESTION: {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};

export default currentQuestionReducer;
