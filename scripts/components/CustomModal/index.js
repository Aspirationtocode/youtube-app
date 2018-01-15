import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Button, Image } from 'react-native';
import Modal from 'react-native-modal';
import { Video } from 'expo';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

import videoWrong from '../../../static/videos/video--wrong.mp4';
import videoRight from '../../../static/videos/video--right.mp4';

import answerRight from '../../../static/icons/answer-right.png';
import answerWrong from '../../../static/icons/answer-wrong.png';

export default class CustomModal extends Component {
	state = {
		isModalVisible: false,
		isRightAnswer: false,
	};
	componentWillReceiveProps = nextProps => {
		const { isOpen } = nextProps;
		isOpen && this.showModal();
		!isOpen && this.hideModal();
	};

	showModal = isRightAnswer => {
		this.setState({ isModalVisible: true });
	};

	hideModal = isRightAnswer => this.setState({ isModalVisible: false });

	render() {
		const { isRightAnswer } = this.props;
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
					{/* <Image source={answerBgWrong} resizeMode="stretch" /> */}
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
							+5
						</Animatable.Text>
						<Button title="Close" onPress={this.hideModal} />
					</View>
				</Modal>
			</View>
		);
	}
}
