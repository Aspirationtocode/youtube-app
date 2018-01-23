import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import CustomButton from '../../components/CustomButton';
import InfoPanel from '../../components/InfoPanel';
import LayoutContainer from '../../components/LayoutContainer';

import {
	makeNavigationOptions,
	getCurrentThemesAndQuestions,
} from '../../constants';
import { setCurrentQuestionId } from '../../actions';

const questions = [
	'Вопрос 1',
	'Вопрос 2',
	'Вопрос 3',
	'Вопрос 4',
	'Вопрос 5',
	'Вопрос 6',
];

class QuestionsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		const { themeTitle } = navigation.state.params;
		return makeNavigationOptions({
			title: `Тема: ${themeTitle}`,
		});
	};

	handleQuestionPress = questionIndex => {
		const { navigate } = this.props.navigation;
		const { dispatch, currentUser } = this.props;
		const { currentThemeId } = currentUser;
		const { currentTheme } = getCurrentThemesAndQuestions(
			currentUser,
			currentThemeId,
		);
		const selectedQuestion = currentTheme.questions[questionIndex];
		dispatch(setCurrentQuestionId(selectedQuestion._id));
		navigate('Question', {
			questionIndex,
			currentThemeTitle: currentTheme.themeTitle,
		});
	};
	renderQuestionElements = () =>
		questions.map((question, questionIndex) => {
			const { currentUser } = this.props;
			const { currentThemeId } = currentUser;
			const { currentTheme } = getCurrentThemesAndQuestions(
				currentUser,
				currentThemeId,
			);
			const { answerStatus } = currentTheme.questions[questionIndex];
			const isAnswered = answerStatus === false || answerStatus === true;
			const questionType = isAnswered ? 'answered' : 'regular';
			return (
				<CustomButton
					type={questionType}
					text={question}
					key={question}
					handlePress={() => {
						if (!isAnswered) {
							this.handleQuestionPress(questionIndex);
						}
					}}
				/>
			);
		});

	render() {
		return (
			<LayoutContainer customStyles={{ zIndex: 100 }}>
				<View style={styles.questionsContainer}>
					{this.renderQuestionElements()}
				</View>
			</LayoutContainer>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
});

export default connect(mapStateToProps)(QuestionsScreen);
