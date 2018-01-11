import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import GestureRecognizer from 'react-native-swipe-gestures';

import styles from './styles';

import LayoutContainer from '../../components/LayoutContainer';
import Dice from '../../components/Dice';

import { makeNavigationOptions } from '../../constants';

class QuestionScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		const { questionIndex, currentThemeTitle } = navigation.state.params;
		return makeNavigationOptions({
			title: `Вопрос ${questionIndex + 1} по теме: ${currentThemeTitle}`,
		});
	};
	state = {
		letAnimateDice: false,
	};
	onSwipeRight = () => {
		this.setState({
			letAnimateDice: true,
		});
	};
	render() {
		const { currentQuestion } = this.props;
		const { state } = this;
		return (
			<GestureRecognizer
				style={{ flex: 1 }}
				onSwipeRight={gestureState => this.onSwipeRight(gestureState)}
			>
				<LayoutContainer>
					<Text style={styles.questionText}>{currentQuestion.title}</Text>
					<Text style={styles.hintText}>
						Смахни вправо для вращения игрального кубика
					</Text>
					<View style={styles.rollZone}>
						<Dice letAnimateDice={state.letAnimateDice} />
					</View>
				</LayoutContainer>
			</GestureRecognizer>
		);
	}
}

const mapStateToProps = state => ({
	currentQuestion: state.currentQuestion,
});

export default connect(mapStateToProps)(QuestionScreen);
