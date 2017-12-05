import React, { Component } from 'react';
import { View, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class CustomTextInput extends Component {
	render() {
		const { placeholder } = this.props;
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder={placeholder}
					placeholderTextColor="#8D8B8B"
				/>
				<Icon
					name="times-circle"
					size={30}
					color="#8E8E93"
					style={styles.icon}
				/>
			</View>
		);
	}
}
