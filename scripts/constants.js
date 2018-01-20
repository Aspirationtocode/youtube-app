export const START_FETCH_CURRENT_USER_DATA = 'START_FETCH_CURRENT_USER_DATA';
export const FINISH_FETCH_CURRENT_USER_DATA = 'FINISH_FETCH_CURRENT_USER_DATA';
export const ERROR_FETCH_CURRENT_USER_DATA = 'ERROR_FETCH_CURRENT_USER_DATA';
export const SET_CURRENT_THEME = 'SET_CURRENT_THEME';
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';

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
