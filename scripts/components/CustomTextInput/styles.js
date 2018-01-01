import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $inputHeight: 60,
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    maxWidth: 400,
  },
  input: {
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 26,
    flex: 1,
    marginBottom: 20,
    height: '$inputHeight',
  },
  icon: {
    position: 'absolute',
    top: '$inputHeight * 0.25',
    right: '$inputHeight * 0.25',
    backgroundColor: 'transparent',
  },
});
