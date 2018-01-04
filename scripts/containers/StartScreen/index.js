import React, { Component } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo";
import { connect } from "react-redux";

import KeyboardSpacer from "react-native-keyboard-spacer";

import { changeCurrentUserName } from "../../actions";
import CustomTextInput from "../../components/CustomTextInput/";
import CustomButton from "../../components/CustomButton/";

import styles from "./styles";

import { makeNavigationOptions } from "../../constants";

class StartScreen extends Component {
  static navigationOptions = makeNavigationOptions({ title: "Вход" });
  state = {
    currentUserName: null
  };
  handleSignIn = () => {
    const { navigate } = this.props.navigation;
    const { currentUserName } = this.state;
    const { dispatch } = this.props;
    if (currentUserName && currentUserName.trim().length >= 3) {
      dispatch(changeCurrentUserName(currentUserName));
      navigate("Themes");
    }
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

const mapStateToProps = state => ({ currentUserName: state.currentUserName });

export default connect(mapStateToProps)(StartScreen);
