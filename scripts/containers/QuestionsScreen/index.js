import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import GoElement from '../../components/GoElement';
import InfoPanel from '../../components/InfoPanel';
import LayoutContainer from '../../components/LayoutContainer';

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
	static navigationOptions = ({ navigation }) => {
		const { themeTitle } = navigation.state.params;
		return makeNavigationOptions({
			title: `Тема: ${themeTitle}`,
		});
	};

	handleQuestionPress = questionIndex => {
		const { props } = this;
		const { currentTheme, dispatch } = props;
		const { navigate } = props.navigation;
		const selectedQuestion = currentTheme.questions[questionIndex];
		dispatch(setCurrentQuestion(selectedQuestion));
		navigate('Question', {
			questionIndex,
			currentThemeTitle: currentTheme.themeTitle,
		});
	};
	renderQuestionElements = () => questions.map((question, questionIndex) => (
		<GoElement
			text={question}
			key={question}
			specificStyle={{ minWidth: 240 }}
			handleGoElementPress={() => {
				this.handleQuestionPress(questionIndex);
			}}
		/>
	));

	render() {
		return (
			<LayoutContainer>
				<View style={styles.questionsContainer}>
					{this.renderQuestionElements()}
				</View>
				<InfoPanel />
			</LayoutContainer>
		);
	}
}

const mapStateToProps = state => ({
	currentTheme: state.currentTheme,
	currentUser: state.currentUser,
});

export default connect(mapStateToProps)(QuestionsScreen);
