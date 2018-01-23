import { SET_GAME_STATUS, RESET_GAME_STATUS } from '../constants';

const initialState = {
	points: 0,
	rightAnswers: 0,
	wrongAnswers: 0,
};

const gameStatusReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_GAME_STATUS: {
			const { isRightAnswer, points } = action.payload;
			return {
				points: isRightAnswer ? state.points + points : state.points,
				rightAnswers: isRightAnswer
					? state.rightAnswers + 1
					: state.rightAnswers,
				wrongAnswers: !isRightAnswer
					? state.wrongAnswers + 1
					: state.wrongAnswers,
			};
		}
		case RESET_GAME_STATUS: {
			return initialState;
		}

		default: {
			return state;
		}
	}
};

export default gameStatusReducer;
