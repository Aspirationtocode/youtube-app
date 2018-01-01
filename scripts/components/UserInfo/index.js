import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import Points from '../Points/';

export default () => (
  <View style={styles.container}>
    <View style={styles.leftInfoContainer}>
      <View>
        <Text style={styles.userName}>Костя Павлов</Text>
      </View>
      <View style={styles.pointsContainer}>
        <Points points={-3} />
        <Points points={7} />
      </View>
    </View>
    <View style={styles.photoWrapper}>
      <Image
        style={styles.photo}
        source={{
          uri: 'https://surprizbox.ru/images/otzyvy/kostya.jpg',
        }}
      />
    </View>
  </View>
);
