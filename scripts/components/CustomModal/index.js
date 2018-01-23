import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import Modal from 'react-native-modal';
import { Video } from 'expo';
import { NavigationActions } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import CustomButton from '../CustomButton/';

import videoWrong from '../../../static/videos/video--wrong.mp4';
import videoRight from '../../../static/videos/video--right.mp4';

import answerRight from '../../../static/icons/answer-right.png';
import answerWrong from '../../../static/icons/answer-wrong.png';

import { findElementInArrayById } from '../../constants';

class CustomModal extends Component {
	state = {
		isModalVisible: false,
	};

	componentWillReceiveProps = nextProps => {
		const { isOpen } = nextProps;
		if (isOpen) {
			this.showModal();
		}
	};

	showModal = () => {
		this.setState({ isModalVisible: true });
	};

	hideModal = () => this.setState({ isModalVisible: false });

	goToScreen = screen => {
		this.hideModal();
		const { currentUser } = this.props;
		const { currentThemeId, data } = currentUser;
		const currentTheme = findElementInArrayById(currentThemeId, data.themes);
		const { themeTitle } = currentTheme;
		const navigationConfig = {
			Themes: {
				index: 1,
				actions: [
					NavigationActions.navigate({ routeName: 'Main' }),
					NavigationActions.navigate({ routeName: 'Themes' }),
				],
			},
			Questions: {
				index: 2,
				actions: [
					NavigationActions.navigate({ routeName: 'Main' }),
					NavigationActions.navigate({ routeName: 'Themes' }),
					NavigationActions.navigate({
						routeName: 'Questions',
						params: { themeTitle },
					}),
				],
			},
		};

		const resetAction = NavigationActions.reset(navigationConfig[screen]);
		this.props.navigation.dispatch(resetAction);
	};
	render() {
		const { isRightAnswer, currentThemeTitle, points } = this.props;
		return (
			<View style={styles.modalWrapper}>
				<Modal
					isVisible={this.state.isModalVisible}
					animationIn="fadeIn"
					animationOut="fadeOut"
					backdropOpacity={1}
					style={styles.modal}
					backdropColor="#000"
				>
					<Image
						resizeMode="cover"
						style={styles.answerImage}
						source={isRightAnswer ? answerRight : answerWrong}
					/>
					<Video
						source={isRightAnswer ? videoRight : videoWrong}
						volume={1.0}
						isMuted={false}
						resizeMode="cover"
						shouldPlay
						style={styles.bg}
						onReadyForDisplay={() => {
							setTimeout(() => {
								this.statusText.statusTextTranslation(1000);
							}, 500);
						}}
					/>

					<View
						style={[
							styles.overlay,
							isRightAnswer ? styles.overlayRight : styles.overlayWrong,
						]}
					/>

					<View style={styles.modalContainer}>
						<Animatable.Text
							ref={component => {
								this.statusText = component;
							}}
							style={styles.statusText}
						>
							{isRightAnswer ? `+${points}` : ''}
						</Animatable.Text>
						<CustomButton
							handlePress={() => {
								this.goToScreen('Themes');
							}}
							type="inModal"
							isImageBg
							text="Вернуться к темам"
							iconName="angle-left"
							textStyle={{ color: '#000' }}
							specificStyle={{
								bottom: 30,
								left: 30,
								flexDirection: 'row-reverse',
							}}
						/>
						<CustomButton
							handlePress={() => {
								this.goToScreen('Questions');
							}}
							type="inModal"
							isImageBg
							text={`Вернуться к вопросам темы: \n${currentThemeTitle}`}
							iconName="angle-right"
							textStyle={{ color: '#000', textAlign: 'center' }}
							specificStyle={{
								bottom: 30,
								right: 30,
								flexDirection: 'row',
							}}
						/>
					</View>
				</Modal>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
});

export default connect(mapStateToProps)(CustomModal);
