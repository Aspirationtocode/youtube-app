import React, { Component } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo";
import { connect } from "react-redux";

import styles from "./styles";

import { makeNavigationOptions } from "../../constants";

import GoElement from "../../components/GoElement";
import InfoPanel from "../../components/InfoPanel";

class ThemesScreen extends Component {
  static navigationOptions = makeNavigationOptions({ title: "Выбор тем" });
  handleThemePress = () => {
    const { navigate } = this.props.navigation;
    navigate("Questions");
  };
  renderThemeElements = () => {
    const { currentUser } = this.props;
    if (currentUser.fetched) {
      return currentUser.data.themes.map(theme => (
        <GoElement
          text={theme.themeTitle}
          key={theme._id}
          handleGoElementPress={this.handleThemePress}
        />
      ));
    } else {
      return <Text>Не загрузилосzь, блин</Text>;
    }
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

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(ThemesScreen);
