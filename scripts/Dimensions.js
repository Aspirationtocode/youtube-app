import { Dimensions } from 'react-native';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('screen');

export default {
	DEVICE_WIDTH: Math.max(DEVICE_WIDTH, DEVICE_HEIGHT),
	DEVICE_HEIGHT: Math.min(DEVICE_WIDTH, DEVICE_HEIGHT),
};
