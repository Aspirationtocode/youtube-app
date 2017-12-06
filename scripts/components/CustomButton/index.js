import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class CustomButton extends Component {
	render() {
		const { props } = this;
		return (
			<TouchableOpacity style={styles.buttonStyle} onPress={props.handleSignIn}>
				<Text style={styles.text}>ИГРАТЬ</Text>
			</TouchableOpacity>
		);
	}
}
