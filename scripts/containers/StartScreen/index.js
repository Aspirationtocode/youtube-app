import React, { Component } from 'react';
import { View, TextInput, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';

import KeyboardSpacer from 'react-native-keyboard-spacer';

import CustomTextInput from '../../components/CustomTextInput/';

import styles from './styles';

export default class StartScreen extends Component {
	static navigationOptions = { header: null };
	render() {
		const { navigate } = this.props.navigation;
		return (
			<LinearGradient
				colors={['#F83600', '#FE8C00']}
				start={[0.5, 0]}
				end={[0, 0.5]}
				style={styles.gradient}
			>
				<CustomTextInput placeholder="Ваше имя" />

				<KeyboardSpacer />
			</LinearGradient>
		);
	}
}
