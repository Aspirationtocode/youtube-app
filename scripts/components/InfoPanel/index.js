import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import UserInfo from '../UserInfo';

export default () => (
  <View style={styles.infoPanelContainer}>
    <UserInfo />
  </View>
);
