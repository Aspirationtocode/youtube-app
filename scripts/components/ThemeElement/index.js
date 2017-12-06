import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class ThemeElement extends Component {
	render() {
		const { theme } = this.props;
		return (
			<TouchableOpacity style={styles.themeElement}>
				<Text style={styles.themeElementText}>{theme}</Text>
			</TouchableOpacity>
		);
	}
}
