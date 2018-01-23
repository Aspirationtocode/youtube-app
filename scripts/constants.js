export const START_FETCH_CURRENT_USER_DATA = 'START_FETCH_CURRENT_USER_DATA';
export const FINISH_FETCH_CURRENT_USER_DATA = 'FINISH_FETCH_CURRENT_USER_DATA';
export const ERROR_FETCH_CURRENT_USER_DATA = 'ERROR_FETCH_CURRENT_USER_DATA';
export const SET_CURRENT_THEME_ID = 'SET_CURRENT_THEME_ID';
export const SET_CURRENT_QUESTION_ID = 'SET_CURRENT_QUESTION_ID';
export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const RESET_GAME_STATUS = 'RESET_GAME_STATUS';

export const makeNavigationOptions = (specificStyles, disableBackNav) => {
	const baseStyles = {
		headerTintColor: '#a55de4',
		headerStyle: {
			backgroundColor: '#fff',
			borderBottomColor: 'transparent',
			shadowColor: 'rgba(0, 0, 0, .16)',
			shadowOffset: { width: 0, height: 3 },
			shadowOpacity: 1,
			shadowRadius: 6,
		},
	};
	const disableBackNavParams = {
		headerLeft: null,
		gesturesEnabled: false,
	};
	return Object.assign(
		{},
		baseStyles,
		specificStyles,
		disableBackNav ? disableBackNavParams : {},
	);
};

export const EXIT_PASSWORD = '132435';

export const findElementInArrayById = (id, array) =>
	array.find(el => el._id === id);

export const getCurrentThemesAndQuestions = (
	currentUser,
	themeId,
	questionId,
) => {
	const currentTheme = findElementInArrayById(themeId, currentUser.data.themes);

	const currentQuestion = findElementInArrayById(
		questionId,
		currentTheme.questions,
	);

	return {
		currentTheme,
		currentQuestion,
	};
};

const countQuestions = currentUser => {
	let questionsCount = 0;
	currentUser.data.themes.forEach(theme => {
		questionsCount += theme.questions.length;
	});
	return questionsCount;
};

export const getCompletePercent = (currentUser, answeredCount) => {
	const questionCount = countQuestions(currentUser);
	return answeredCount / questionCount * 100;
};
