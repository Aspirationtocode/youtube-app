import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	pointsContainer: {
		flexDirection: 'row',
	},
	userName: {
		fontSize: 28,
		color: '$mainDarkColor',
	},
	leftInfoContainer: {
		padding: 10,
		justifyContent: 'space-between',
		height: '100%',
	},
});
