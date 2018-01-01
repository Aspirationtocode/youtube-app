import EStyleSheet from 'react-native-extended-stylesheet';

import { gradient } from '../../styleConstants';

export default EStyleSheet.create({
  gradient,
  questionsContainer: {
    $questionsContainerWidth: '80%',
    width: '$questionsContainerWidth',
    alignItems: 'center',
  },
  questionsSpecificContainer1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  questionsSpecificContainer2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '65%',
  },
  questionsSpecificContainer3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '30%',
  },
});
