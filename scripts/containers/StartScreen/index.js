import React, { Component } from "react";
import { View, TextInput, Text, Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { LinearGradient } from "expo";

import KeyboardSpacer from "react-native-keyboard-spacer";

import CustomTextInput from "../../components/CustomTextInput/";
import CustomButton from "../../components/CustomButton/";

import styles from "./styles";

import { makeNavigationOptions } from "../../constants";

export default class StartScreen extends Component {
  static navigationOptions = makeNavigationOptions({ title: "Вход" });
  state = {
    currentUserName: null
  };
  handleSignIn = () => {
    const { navigate } = this.props.navigation;
    navigate("Themes");
  };
  handleCurrentUserNameChange = name => {
    this.setState({
      currentUserName: name
    });
  };
  render() {
    const { state } = this;
    return (
      <LinearGradient
        colors={["#F83600", "#FE8C00"]}
        start={[0.5, 0]}
        end={[0, 0.5]}
        style={styles.gradient}
      >
        <View style={styles.inputContainer}>
          <CustomTextInput
            placeholder="Ваше имя"
            value={state.currentUserName}
            handleCurrentUserNameChange={this.handleCurrentUserNameChange}
          />
          <CustomButton handlePress={this.handleSignIn} text="ИГРАТЬ" />
        </View>
        <KeyboardSpacer topSpacing={-300} />
      </LinearGradient>
    );
  }
}
