import { Dimensions } from 'react-native';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

const cubeWidth = 100;

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
			transform: [{ translateX: 0 }, { translateY: 0 }],
		},
		1: {
			transform: [
				{ translateX: DEVICE_WIDTH / 2 - cubeWidth },
				{ translateY: -DEVICE_HEIGHT / 2 + cubeWidth },
			],
		},
	},
};
