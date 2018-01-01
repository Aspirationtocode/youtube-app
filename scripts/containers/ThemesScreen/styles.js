import EStyleSheet from 'react-native-extended-stylesheet';

import { gradient } from '../../styleConstants';

export default EStyleSheet.create({
  gradient,
  themesContainer: {
    $themesContainerWidth: '80%',
    width: '$themesContainerWidth',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
