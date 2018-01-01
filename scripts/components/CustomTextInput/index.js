import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class CustomTextInput extends Component {
  handleTextChange = (value) => {
    const { props } = this;
    props.handleCurrentUserNameChange(value);
  };
  handleClearInputText = () => {
    const { props } = this;
    props.handleCurrentUserNameChange(null);
  };

  render() {
    const { placeholder, value } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#8D8B8B"
          onChangeText={this.handleTextChange}
          value={value}
        />
        <Icon
          name="times-circle"
          size={30}
          color="#8E8E93"
          style={styles.icon}
          onPress={this.handleClearInputText}
        />
      </View>
    );
  }
}
