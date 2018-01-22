import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import KeyboardSpacer from 'react-native-keyboard-spacer';

import { fetchCurrentUserData } from '../../actions';
import CustomTextInput from '../../components/CustomTextInput/';
import CustomButton from '../../components/CustomButton/';
import LayoutContainer from '../../components/LayoutContainer/';

import styles from './styles';

import { makeNavigationOptions } from '../../constants';

class StartScreen extends Component {
	static navigationOptions = makeNavigationOptions({ title: 'Вход' }, true);
	state = {
		currentUserName: 'Виталий Покашеварим',
	};
	handleSignIn = () => {
		const { navigate } = this.props.navigation;
		const { currentUserName } = this.state;
		const { dispatch } = this.props;
		if (currentUserName && currentUserName.trim().length >= 3) {
			dispatch(fetchCurrentUserData(dispatch, currentUserName.trim()));
			navigate('Themes');
		}
	};
	handleCurrentUserNameChange = name => {
		this.setState({
			currentUserName: name,
		});
	};
	render() {
		const { state } = this;

		return (
			<LayoutContainer
				customStyles={{ justifyContent: 'center', paddingBottom: 60 }}
			>
				<View style={styles.inputContainer}>
					<CustomTextInput
						placeholder="Ваше имя"
						value={state.currentUserName}
						handleCurrentUserNameChange={this.handleCurrentUserNameChange}
					/>
					<CustomButton
						type="regular"
						handlePress={this.handleSignIn}
						text="ИГРАТЬ"
					/>
				</View>
				<KeyboardSpacer topSpacing={-300} />
			</LayoutContainer>
		);
	}
}

const mapStateToProps = state => ({ currentUserName: state.currentUserName });

export default connect(mapStateToProps)(StartScreen);
