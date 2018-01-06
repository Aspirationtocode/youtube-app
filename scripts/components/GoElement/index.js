import React from 'react';

import styles from './styles';

import CustomButton from '../CustomButton/';

export default ({ text, handleGoElementPress, specificStyle }) => (
	<CustomButton
		text={text}
		containerStyle={[styles.goElement, specificStyle]}
		textStyle={styles.goElementText}
		handlePress={handleGoElementPress}
	/>
);
