import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import GestureRecognizer from 'react-native-swipe-gestures';
import shuffle from 'shuffle-array';
import PopupDialog, {
	FadeAnimation,
	DialogTitle,
} from 'react-native-popup-dialog';
import { PacmanIndicator } from 'react-native-indicators';
import socket from '../../initSocketIo';

const fadeAnimation = new FadeAnimation({
	toValue: 0,
});

import styles from './styles';

import LayoutContainer from '../../components/LayoutContainer';
import CustomModal from '../../components/CustomModal';
import CustomButton from '../../components/CustomButton';
import Dice from '../../components/Dice';

import {
	makeNavigationOptions,
	getCurrentThemesAndQuestions,
} from '../../constants';
import { getRandomArbitrary } from './helpers';
import { setGameStatus } from '../../actions';

class QuestionScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		const { questionIndex, currentThemeTitle } = navigation.state.params;
		return makeNavigationOptions(
			{
				title: `Вопрос ${questionIndex + 1} по теме: ${currentThemeTitle}`,
			},
			true,
		);
	};

	state = {
		letAnimateDice: false,
		isAnswersVisible: false,
		answerModalOpen: false,
		isRightAnswer: null,
	};

	onSwipeRight = () => {
		this.setState({
			letAnimateDice: true,
		});
	};

	randomNumber = getRandomArbitrary(1, 1);
	points = null;
	currentAnswers = null;
	enableAnswers = () => {
		this.setState({
			isAnswersVisible: true,
		});
	};

	showPopup = () => {
		const { currentUser } = this.props;
		const { currentQuestionId, currentThemeId } = currentUser;
		const { currentQuestion } = getCurrentThemesAndQuestions(
			currentUser,
			currentThemeId,
			currentQuestionId,
		);
		socket.emit('get-confirmation', currentQuestion);
		socket.on('set-confirmation-client', isRightAnswer => {
			this.setGameStatus(isRightAnswer);
		});
		this.popupDialog.show();
	};

	setGameStatus = isRightAnswer => {
		const { dispatch } = this.props;
		this.points = this.randomNumber === 1 ? 7 : this.randomNumber;
		this.setState(
			{
				answerModalOpen: false,
			},
			() => {
				this.setState({
					answerModalOpen: true,
					isRightAnswer,
				});
			},
		);
		dispatch(setGameStatus(isRightAnswer, this.points));
	};

	handleAnswerPress = (answer, rightAnswer) => {
		const { dispatch } = this.props;
		const isRightAnswer = answer === rightAnswer;
		this.setGameStatus(isRightAnswer);
	};

	renderAnswers = () => {
		const { currentUser } = this.props;
		const { currentQuestionId, currentThemeId } = currentUser;
		const { currentQuestion } = getCurrentThemesAndQuestions(
			currentUser,
			currentThemeId,
			currentQuestionId,
		);

		const { answers } = currentQuestion;
		const rightAnswer = answers[0];
		const notRightAnswers = answers.slice(1, this.randomNumber);
		if (!this.currentAnswers) {
			this.currentAnswers = shuffle([...notRightAnswers, rightAnswer], {
				copy: true,
			});
		}
		if (this.randomNumber > 1) {
			return this.currentAnswers.map((answer, answerIndex) => (
				<CustomButton
					type="regular"
					text={answer}
					key={`${answer}${answerIndex}`}
					handlePress={() => {
						this.handleAnswerPress(answer, rightAnswer);
					}}
					specificStyle={{ marginHorizontal: 20 }}
				/>
			));
		}
		return null;
	};

	render() {
		const { currentUser } = this.props;
		const { currentQuestionId, currentThemeId } = currentUser;
		const { currentTheme, currentQuestion } = getCurrentThemesAndQuestions(
			currentUser,
			currentThemeId,
			currentQuestionId,
		);
		const { state, props } = this;
		return (
			<GestureRecognizer
				style={{ flex: 1 }}
				onSwipeRight={gestureState =>
					!state.letAnimateDice && this.onSwipeRight(gestureState)
				}
			>
				<LayoutContainer>
					<Text style={styles.questionText}>{currentQuestion.title}</Text>
					<Text style={styles.hintText}>
						Смахни вправо для вращения игрального кубика
					</Text>
					<Dice
						showPopup={this.showPopup}
						randomNumber={this.randomNumber}
						letAnimateDice={state.letAnimateDice}
						enableAnswers={this.enableAnswers}
					/>
					<View style={styles.answersContainer}>
						{state.isAnswersVisible && this.renderAnswers()}
					</View>
					<CustomModal
						isOpen={state.answerModalOpen}
						isRightAnswer={state.isRightAnswer}
						currentThemeTitle={currentTheme.themeTitle}
						navigation={props.navigation}
						points={this.points}
					/>
					<PopupDialog
						dialogTitle={
							<DialogTitle
								haveTitleBar={false}
								titleTextStyle={{ fontSize: 22, textAlign: 'center' }}
								titleStyle={{ backgroundColor: 'transparent', marginTop: 20 }}
								title="Ожидайте подтверждение ведущего..."
							/>
						}
						ref={popupDialog => {
							this.popupDialog = popupDialog;
						}}
						dialogAnimation={fadeAnimation}
						dismissOnTouchOutside={false}
						dismissOnHardwareBackPress={false}
						dialogStyle={{
							width: 300,
							borderRadius: 150,
						}}
					>
						<View style={styles.popupContainer}>
							<PacmanIndicator color="#a55de4" count={8} size={120} />
						</View>
					</PopupDialog>
				</LayoutContainer>
			</GestureRecognizer>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
});

export default connect(mapStateToProps)(QuestionScreen);
