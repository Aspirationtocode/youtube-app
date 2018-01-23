import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	answersContainer: {
		$answersContainer: '80%',
		width: '$answersContainer',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	questionText: {
		color: '#fff',
		backgroundColor: 'transparent',
		fontSize: 26,
		marginBottom: 40,
	},
	hintText: {
		color: '#fff',
		backgroundColor: 'transparent',
		fontSize: 20,
		marginBottom: 40,
	},
	popupContainer: {
		padding: 30,
		flex: 1,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
});
