import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	$borderRadius: 10,
	$padding: 10,
	container: {
		borderRadius: '$borderRadius',
		shadowColor: 'rgba(0, 0, 0, .16)',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 1,
		shadowRadius: 6,
		width: '80%',
		position: 'absolute',
		bottom: 50,
		height: 160,
		flex: 1,
		backgroundColor: 'transparent',
	},
	infoPanelContainer: {
		borderRadius: '$borderRadius',
		shadowColor: 'rgba(0, 0, 0, .16)',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 1,
		shadowRadius: 6,
		padding: '$padding',
		flex: 1,
		width: '100%',
		zIndex: 10,
		backgroundColor: 'transparent',
	},
	bg: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		borderRadius: '$borderRadius',
	},
});
