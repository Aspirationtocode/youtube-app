import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(
	TouchableOpacity,
);

export default class CustomButton extends Component {
	state = {
		canPress: true,
	};
	handlePress = () => {
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
			},
		);
		if (this.state.canPress) {
			this.props.handlePress();
		}
	};

	render() {
		const { props } = this;
		const { textStyle, specificStyle } = props;
		return (
			<AnimatableTouchableOpacity
				activeOpacity={0.6}
				style={[styles.buttonStyle, specificStyle]}
				onPress={this.handlePress}
			>
				<Text style={!textStyle ? styles.text : textStyle}>{props.text}</Text>
			</AnimatableTouchableOpacity>
		);
	}
}
