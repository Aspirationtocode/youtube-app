import EStyleSheet from 'react-native-extended-stylesheet';

import { gradient } from '../../styleConstants';

export default EStyleSheet.create({
	gradient: Object.assign({}, gradient, {
		alignItems: 'flex-start',
		padding: 30,
		paddingTop: 100,
	}),
	diceRollZone: {
		flex: 1,
		width: '100%',
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	questionText: { color: '#fff', backgroundColor: 'transparent', fontSize: 24 },
});
