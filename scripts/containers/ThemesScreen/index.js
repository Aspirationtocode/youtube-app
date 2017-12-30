import React, { Component } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo";

import styles from "./styles";

import { makeNavigationOptions } from "../../constants";

import ThemeElement from "../../components/ThemeElement";
import InfoPanel from "../../components/InfoPanel";

const themes = [
  "История💙",
  "Политика",
  "География",
  "Музыка",
  "Литература💙",
  "Математика",
  "Физика",
  "Химия",
  "Искусство💙",
  "ТВ",
  "Youtube",
  "Сказки"
];

export default class ThemesScreen extends Component {
  static navigationOptions = makeNavigationOptions({ title: "Выбор тем" });
  renderThemeElements = () => {
    return themes.map(theme => {
      return (
        <ThemeElement
          theme={theme}
          key={theme}
          handleThemePress={this.handleThemePress}
        />
      );
    });
  };
  handleThemePress = () => {
    const { navigate } = this.props.navigation;
    navigate("Questions");
  };
  render() {
    return (
      <LinearGradient
        colors={["#F83600", "#FE8C00"]}
        start={[0.5, 0]}
        end={[0, 0.5]}
        style={styles.gradient}
      >
        <View style={styles.themesContainer}>{this.renderThemeElements()}</View>
        <InfoPanel />
      </LinearGradient>
    );
  }
}
