import EStyleSheet from 'react-native-extended-stylesheet';

import { gradient } from '../../styleConstants';

export default EStyleSheet.create({
	gradient,
	questionsContainer: {
		$questionsContainerWidth: '80%',
		width: '$questionsContainerWidth',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
});
