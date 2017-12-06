import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import Points from '../Points/';

export default class UserInfo extends Component {
	render() {
		return (
			<View>
				<View style={styles.leftInfoContainer}>
					<View>
						<Text style={styles.userName}>Костя Павлов</Text>
					</View>

					<View style={styles.pointsContainer}>
						<Points points={-3} />
						<Points points={7} />
					</View>
				</View>
			</View>
		);
	}
}
