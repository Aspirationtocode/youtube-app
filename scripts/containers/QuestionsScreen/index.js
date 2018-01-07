import React, { Component } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';

import styles from './styles';

import GoElement from '../../components/GoElement';
import InfoPanel from '../../components/InfoPanel';

import { makeNavigationOptions } from '../../constants';
import { setCurrentQuestion } from '../../actions';

const questions = [
	'Вопрос 1',
	'Вопрос 2',
	'Вопрос 3',
	'Вопрос 4',
	'Вопрос 5',
	'Вопрос 6',
];

class QuestionsScreen extends Component {
	static navigationOptions = makeNavigationOptions({
		title: `Выбор вопроса`,
	});
	handleQuestionPress = questionIndex => {
		const { props } = this;
		const { currentTheme, dispatch } = props;
		const { navigate } = props.navigation;
		const selectedQuestion = currentTheme.questions[questionIndex];
		dispatch(setCurrentQuestion(selectedQuestion));
		navigate('Question');
	};
	renderQuestionElements = () => {
		return questions.map((question, questionIndex) => {
			return (
				<GoElement
					text={question}
					key={question}
					specificStyle={{ minWidth: 240 }}
					handleGoElementPress={() => {
						this.handleQuestionPress(questionIndex);
					}}
				/>
			);
		});
	};

	render() {
		return (
			<LinearGradient
				colors={['#F83600', '#FE8C00']}
				start={[0.5, 0]}
				end={[0, 0.5]}
				style={styles.gradient}
			>
				<View style={styles.questionsContainer}>
					{this.renderQuestionElements()}
				</View>
				<InfoPanel />
			</LinearGradient>
		);
	}
}

const mapStateToProps = state => ({
	currentTheme: state.currentTheme,
	currentUser: state.currentUser,
});

export default connect(mapStateToProps)(QuestionsScreen);
