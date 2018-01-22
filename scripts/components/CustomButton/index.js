import React, { Component } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { throttle } from './helpers';

import bgImage from '../../../static/images/info-panel-bg.jpg';

const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(
	TouchableOpacity,
);

export default class CustomButton extends Component {
	types = {
		regular: styles.regularStyle,
		answered: styles.answeredStyle,
		inModal: styles.inModalStyle,
	};

	render() {
		const { props } = this;
		const { textStyle, specificStyle, type, iconName, isImageBg } = props;
		return (
			<AnimatableTouchableOpacity
				activeOpacity={0.6}
				style={[this.types[type], specificStyle]}
				onPress={throttle(props.handlePress, 400)}
			>
				<Text style={[styles.text, textStyle]}>{props.text}</Text>
				{iconName && (
					<Icon
						name={iconName}
						size={30}
						color="#8E8E93"
						style={styles.icon}
						onPress={this.handleClearInputText}
					/>
				)}
				{isImageBg && (
					<Image source={bgImage} resizeMode="cover" style={styles.bg} />
				)}
			</AnimatableTouchableOpacity>
		);
	}
}
