import React, { Component } from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './styles';

import CustomButton from '../../components/CustomButton';

import { makeNavigationOptions } from '../../constants';

export default class QuestionScreen extends Component {
  static navigationOptions = makeNavigationOptions({ title: 'Вопрос 1' });
  question = 'Мама, мама, что я буду делать?';
  render() {
    return (
      <LinearGradient
        colors={['#F83600', '#FE8C00']}
        start={[0.5, 0]}
        end={[0, 0.5]}
        style={styles.gradient}
      >
        <Text style={styles.questionText}>{this.question}</Text>
        <CustomButton text="Сгенерировать" />
      </LinearGradient>
    );
  }
}
