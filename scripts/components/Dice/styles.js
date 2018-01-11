import EStyleSheet from 'react-native-extended-stylesheet';

const diceWidth = 100;
const dotWidth = 20;
const pc = 4.5;
const sidePadding = diceWidth / pc - dotWidth / 2;
const centerPadding = diceWidth / 2 - dotWidth / 2;

export default EStyleSheet.create({
	container: {
		width: diceWidth,
		height: diceWidth,
		backgroundColor: '#fff',
		borderRadius: diceWidth / 5,
		borderColor: '#333',
		position: 'relative',
	},
	outerContainer: {
		width: diceWidth,
		height: diceWidth,
		backgroundColor: '#fff',
		borderRadius: diceWidth / 5,
		borderColor: '#333',
		position: 'relative',
	},
	dot: {
		width: dotWidth,
		height: dotWidth,
		backgroundColor: '#333',
		borderRadius: dotWidth / 2,
		position: 'absolute',
	},
	dotNotVisible: {
		width: dotWidth,
		height: dotWidth,
		backgroundColor: 'rgba(0, 0, 0, .1)',
		borderRadius: dotWidth / 2,
		position: 'absolute',
	},
	'dot--center': {
		top: centerPadding,
		left: centerPadding,
	},
	'dot--top-left': {
		top: sidePadding,
		left: sidePadding,
	},
	'dot--top-right': {
		top: sidePadding,
		right: sidePadding,
	},
	'dot--top-center': {
		top: sidePadding,
		left: centerPadding,
	},
	'dot--bottom-center': {
		bottom: sidePadding,
		left: centerPadding,
	},
	'dot--bottom-left': {
		bottom: sidePadding,
		left: sidePadding,
	},
	'dot--bottom-right': {
		bottom: sidePadding,
		right: sidePadding,
	},
	'dot--left-center': {
		top: centerPadding,
		left: sidePadding,
	},
	'dot--right-center': {
		top: centerPadding,
		right: sidePadding,
	},
});
