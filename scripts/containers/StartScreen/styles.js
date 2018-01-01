import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    shadowColor: 'rgba(0, 0, 0, .16)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 6,
    backgroundColor: 'transparent',
  },
  navigationHeader: {
    backgroundColor: 'deepskyblue',
    borderWidth: 1,
    borderBottomColor: 'white',
  },
});
