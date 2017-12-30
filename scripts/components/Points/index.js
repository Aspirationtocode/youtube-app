import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default class Points extends Component {
  render() {
    const { points } = this.props;
    const currentStatus = points > 0 ? "верно" : "неверно";
    return (
      <View
        style={[
          styles.positiveContainer,
          points < 0 && styles.negativeContainer
        ]}
      >
        <Text style={styles.text}>{`${Math.abs(
          points
        )} ${currentStatus}`}</Text>
      </View>
    );
  }
}
