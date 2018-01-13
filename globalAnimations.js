import Dimensions from './scripts/Dimensions';

const { DEVICE_WIDTH, DEVICE_HEIGHT } = Dimensions;

const diceWidth = 100;

export default {
	cubeAnimation: {
		0: {
			transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
		},
		0.5: {
			transform: [{ translateX: 1200 }, { rotate: '1600deg' }],
		},
		1: {
			transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
		},
	},
	cubeTranslation: {
		0: {
			right: DEVICE_WIDTH / 2 - diceWidth / 2,
			top: DEVICE_HEIGHT / 2 - diceWidth / 2,
		},
		1: {
			right: 15,
			top: 15,
		},
	},
};
