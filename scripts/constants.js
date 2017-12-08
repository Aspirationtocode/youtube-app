// export const START_FETCH_TODOS = 'START_FETCH_TODOS';

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
