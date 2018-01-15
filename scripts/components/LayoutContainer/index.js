import React from 'react';
import { LinearGradient } from 'expo';

import styles from './styles';

export default props => {
	const { customStyles } = props;
	return (
		<LinearGradient
			colors={['#a55de4', '#ba2fd2']}
			start={[0.5, 0]}
			end={[0, 0.5]}
			style={[styles.gradient, customStyles]}
		>
			{props.children}
		</LinearGradient>
	);
};
