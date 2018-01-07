export const START_FETCH_CURRENT_USER_DATA = 'START_FETCH_CURRENT_USER_DATA';
export const FINISH_FETCH_CURRENT_USER_DATA = 'FINISH_FETCH_CURRENT_USER_DATA';
export const ERROR_FETCH_CURRENT_USER_DATA = 'ERROR_FETCH_CURRENT_USER_DATA';
export const SET_CURRENT_THEME = 'SET_CURRENT_THEME';
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';

export const makeNavigationOptions = specificStyles => {
	const baseStyles = {
		headerTintColor: '#F83600',
		headerStyle: {
			backgroundColor: '#fff',
			borderBottomColor: 'transparent',
			shadowColor: 'rgba(0, 0, 0, .16)',
			shadowOffset: { width: 0, height: 3 },
			shadowOpacity: 1,
			shadowRadius: 6,
		},
	};
	return Object.assign({}, baseStyles, specificStyles);
};
