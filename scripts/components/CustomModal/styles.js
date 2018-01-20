import EStyleSheet from 'react-native-extended-stylesheet';
import Dimensions from '../../Dimensions';

export default EStyleSheet.create({
	$modalWrongColor: '$modalAnswerWrongColor',
	$modalRightColor: '$modalAnswerRightColor',
	modalWrapper: {
		flex: 1,
	},
	modal: { margin: 0 },
	modalContainer: {
		flex: 1,
	},
	bg: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		opacity: 0.3,
	},
	overlayRight: {
		backgroundColor: 'rgb(0, 255, 0)',
	},
	overlayWrong: {
		backgroundColor: 'rgb(255, 0, 0)',
	},
	answerImage: {
		position: 'absolute',
		top: 30,
		right: 30,
		height: 200,
		width: 200,
		zIndex: 100,
		opacity: 0.8,
	},
	statusText: {
		color: '#fff',
		fontSize: 45,
		position: 'absolute',
		bottom: Dimensions.DEVICE_HEIGHT / 2,
		right: 30,
		opacity: 0,
	},
});
