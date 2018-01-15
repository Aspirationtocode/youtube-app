import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import GestureRecognizer from 'react-native-swipe-gestures';
import shuffle from 'shuffle-array';

import styles from './styles';

import LayoutContainer from '../../components/LayoutContainer';
import CustomModal from '../../components/CustomModal';
import CustomButton from '../../components/CustomButton';
import Dice from '../../components/Dice';

import { makeNavigationOptions } from '../../constants';
import { getRandomArbitrary } from './helpers';

class QuestionScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		const { questionIndex, currentThemeTitle } = navigation.state.params;
		return makeNavigationOptions({
			title: `Вопрос ${questionIndex + 1} по теме: ${currentThemeTitle}`,
		});
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

	randomNumber = getRandomArbitrary(1, 6);
	currentAnswers = null;
	enableAnswers = () => {
		this.setState({
			isAnswersVisible: true,
		});
	};

	openAlert = () => {
		Alert.alert(
			'Alert Title',
			'',
			[{ text: 'OK', onPress: () => console.log('OK Pressed') }],
			{ cancelable: false },
		);
	};

	handleAnswerPress = (answer, rightAnswer) => {
		const { currentQuestion } = this.props;
		const isRightAnswer = answer === rightAnswer;
		this.setState({
			answerModalOpen: true,
			isRightAnswer,
		});
	};

	renderAnswers = () => {
		const { currentQuestion } = this.props;
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
		const { currentQuestion } = this.props;
		const { state } = this;
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
						openAlert={this.openAlert}
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
					/>
				</LayoutContainer>
			</GestureRecognizer>
		);
	}
}

const mapStateToProps = state => ({
	currentQuestion: state.currentQuestion,
});

export default connect(mapStateToProps)(QuestionScreen);
