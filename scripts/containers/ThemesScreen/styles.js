import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	themesContainer: {
		$themesContainerWidth: '80%',
		width: '$themesContainerWidth',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	exitButton: {
		backgroundColor: 'transparent',
		position: 'absolute',
		bottom: 0,
		right: 0,
		zIndex: 1000,
	},
});
