import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	goElement: {
		$themeElementWidth: '30%',
		width: '$themeElementWidth',
		height: 60,
		backgroundColor: '$mainColor',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		shadowColor: 'rgba(0, 0, 0, .16)',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 1,
		shadowRadius: 6,
		marginBottom: 40,
		borderColor: '#E6bb0F',
		borderWidth: 3,
	},
	goElementText: {
		backgroundColor: 'transparent',
		fontSize: 23,
		color: '$mainDarkColor',
	},
});
