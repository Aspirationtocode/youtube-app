import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Points extends Component {
	render() {
		const { points } = this.props;
		return (
			<View
				style={points > 0 ? styles.positiveContainer : styles.negativeContainer}
			>
				<Text style={styles.text}>{Math.abs(points)}</Text>
			</View>
		);
	}
}
