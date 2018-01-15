import React from 'react';
import { View, Image } from 'react-native';

import bgImage from '../../../static/images/info-panel-bg.jpg';

import styles from './styles';

import UserInfo from '../UserInfo';

export default () => (
	<View style={styles.container}>
		<View style={styles.infoPanelContainer}>
			<UserInfo />
		</View>
		<Image source={bgImage} resizeMode="cover" style={styles.bg} />
	</View>
);
