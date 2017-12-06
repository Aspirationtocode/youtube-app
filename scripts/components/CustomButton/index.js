import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class CustomButton extends Component {
	state = {
		canPress: true,
	};
	render() {
		const { props } = this;
		return (
			<TouchableOpacity
				style={styles.buttonStyle}
				onPress={() => {
					this.setState(
						{
							canPress: false,
						},
						() => {
							setTimeout(() => {
								this.setState({
									canPress: true,
								});
							}, 1000);
						}
					);
					if (this.state.canPress) {
						props.handleSignIn();
					}
				}}
			>
				<Text style={styles.text}>ИГРАТЬ</Text>
			</TouchableOpacity>
		);
	}
}
