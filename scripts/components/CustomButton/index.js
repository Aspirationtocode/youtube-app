import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class CustomButton extends Component {
  state = {
    canPress: true,
  };
  handlePress = () => {
    this.setState(
      {
        canPress: false,
      },
      () => {
        setTimeout(() => {
          this.setState({
            canPress: true,
          });
        }, 1000);
      },
    );
    if (this.state.canPress) {
      this.props.handlePress();
    }
  };
  render() {
    const { props } = this;
    const { containerStyle, textStyle } = props;
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={!containerStyle ? styles.buttonStyle : containerStyle}
        onPress={this.handlePress}
      >
        <Text style={!textStyle ? styles.text : textStyle}>{props.text}</Text>
      </TouchableOpacity>
    );
  }
}
