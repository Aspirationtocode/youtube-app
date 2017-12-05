import EStyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const STATUSBAR_HEIGHT = getStatusBarHeight();

export default EStyleSheet.create({
	gradient: {
		marginTop: STATUSBAR_HEIGHT,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
