import React, { Component } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo";

import styles from "./styles";

import GoElement from "../../components/GoElement";
import InfoPanel from "../../components/InfoPanel";

import { makeNavigationOptions } from "../../constants";

export default class QuestionScreen extends Component {
  static navigationOptions = makeNavigationOptions({ title: "Вопрос 1" });
  question = "Мама, мама, что я буду делать?";
  render() {
    return (
      <LinearGradient
        colors={["#F83600", "#FE8C00"]}
        start={[0.5, 0]}
        end={[0, 0.5]}
        style={styles.gradient}
      >
        <Text>{this.question}</Text>
      </LinearGradient>
    );
  }
}
