import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	cardContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: 60,
		paddingVertical: 20,
	},
	questionText: {
		color: '#fff',
		backgroundColor: 'transparent',
		fontSize: 26,
		marginBottom: 40,
	},
	rollZone: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		paddingBottom: 100,
	},
	hintText: {
		color: '#fff',
		backgroundColor: 'transparent',
		fontSize: 20,
	},
});
