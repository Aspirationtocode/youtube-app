import AppNavigator from '../AppNavigator';

const initialState = AppNavigator.router.getStateForAction(
	AppNavigator.router.getActionForPathAndParams('Main'),
);

const recentlyVisitedRoutes = new Set();

const navigatedRecently = false;

const navReducer = (state = initialState, action) => {
	if (action.type === 'Navigation/BACK') {
		if (navigatedRecently) {
			return state;
		}
		navigatedRecently = true;
		setTimeout(() => {
			navigatedRecently = false;
		}, 400);
	}
	return AppNavigator.router.getStateForAction(action, state);
};

export default navReducer;
