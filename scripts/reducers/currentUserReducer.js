import {
	START_FETCH_CURRENT_USER_DATA,
	FINISH_FETCH_CURRENT_USER_DATA,
	ERROR_FETCH_CURRENT_USER_DATA,
	SET_CURRENT_THEME_ID,
	SET_CURRENT_QUESTION_ID,
	SET_GAME_STATUS,
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
			return {
				...state,
				fetching: true,
				fetched: false,
				error: null,
			};
		}

		case FINISH_FETCH_CURRENT_USER_DATA: {
			return {
				...state,
				fetching: false,
				fetched: true,
				error: null,
				data: action.payload,
			};
		}

		case ERROR_FETCH_CURRENT_USER_DATA: {
			return {
				...state,
				fetching: false,
				fetched: false,
				data: null,
				error: action.payload,
			};
		}

		case SET_CURRENT_THEME_ID: {
			return {
				...state,
				currentThemeId: action.payload,
			};
		}

		case SET_CURRENT_QUESTION_ID: {
			return {
				...state,
				currentQuestionId: action.payload,
			};
		}

		case SET_GAME_STATUS: {
			const { isRightAnswer } = action.payload;
			const { currentQuestionId, currentThemeId } = state;
			const newThemes = state.data.themes.map(theme => {
				if (theme._id === currentThemeId) {
					return {
						...theme,
						questions: theme.questions.map(question => {
							if (question._id === currentQuestionId) {
								return {
									...question,
									answerStatus: isRightAnswer,
								};
							}
							return question;
						}),
					};
				}
				return theme;
			});
			return {
				...state,
				data: {
					...state.data,
					themes: newThemes,
				},
			};
		}

		default: {
			return state;
		}
	}
};

export default currentUserReducer;
