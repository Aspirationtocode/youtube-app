import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default ({ points }) => {
	const currentStatus = points > 0 ? 'верно' : 'неверно';
	if (Math.abs(points) !== 0) {
		return (
			<View
				style={[
					styles.positiveContainer,
					points < 0 && styles.negativeContainer,
				]}
			>
				<Text style={styles.text}>{`${Math.abs(
					points,
				)} ${currentStatus}`}</Text>
			</View>
		);
	}
	return null;
};
