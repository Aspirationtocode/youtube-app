import React, { Component } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './styles';

import GoElement from '../../components/GoElement';
import InfoPanel from '../../components/InfoPanel';

import { makeNavigationOptions } from '../../constants';

const questions = [
  'Вопрос 1',
  'Вопрос 2',
  'Вопрос 3',
  'Вопрос 4',
  'Вопрос 5',
  'Вопрос 6',
];

export default class QuestionsScreen extends Component {
  static navigationOptions = makeNavigationOptions({ title: 'Выбор вопроса' });
  handleQuestionPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Question');
  };
  renderQuestionElements = (startIndex, endIndex) =>
    questions
      .slice(startIndex, endIndex)
      .map(question => (
        <GoElement
          text={question}
          key={question}
          specificStyle={{ minWidth: 240 }}
          handleGoElementPress={this.handleQuestionPress}
        />
      ));
  render() {
    return (
      <LinearGradient
        colors={['#F83600', '#FE8C00']}
        start={[0.5, 0]}
        end={[0, 0.5]}
        style={styles.gradient}
      >
        <View style={styles.questionsContainer}>
          <View style={styles.questionsSpecificContainer1}>
            {this.renderQuestionElements(0, 3)}
          </View>
          <View style={styles.questionsSpecificContainer2}>
            {this.renderQuestionElements(3, 5)}
          </View>
          <View style={styles.questionsSpecificContainer3}>
            {this.renderQuestionElements(5, 6)}
          </View>
        </View>
        <InfoPanel />
      </LinearGradient>
    );
  }
}
