import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

import CustomButton from "../CustomButton/";

export default class QuestionElement extends Component {
  render() {
    const { question, handleThemePress } = this.props;
    return (
      <CustomButton
        text={question}
        containerStyle={styles.questionElement}
        textStyle={styles.questionElementText}
        handlePress={handleThemePress}
      />
    );
  }
}
