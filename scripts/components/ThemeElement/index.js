import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

import CustomButton from "../CustomButton/";

export default class ThemeElement extends Component {
  render() {
    const { theme, handleThemePress } = this.props;
    return (
      <CustomButton
        text={theme}
        containerStyle={styles.themeElement}
        textStyle={styles.themeElementText}
        handlePress={handleThemePress}
      />
    );
  }
}
