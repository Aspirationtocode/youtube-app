import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	gradient: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	themesContainer: {
		$themesContainerWidth: '80%',
		width: '$themesContainerWidth',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
});
