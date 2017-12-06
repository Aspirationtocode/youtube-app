import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import UserInfo from '../UserInfo';

export default class InfoPanel extends Component {
	render() {
		return (
			<View style={styles.infoPanelContainer}>
				<UserInfo />
			</View>
		);
	}
}
