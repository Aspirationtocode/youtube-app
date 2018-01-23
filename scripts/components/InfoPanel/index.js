import React from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';

import bgImage from '../../../static/images/info-panel-bg.jpg';

import styles from './styles';

import UserInfo from '../UserInfo';

const InfoPanel = props => {
	const { routes } = props.nav;
	const currentScreen = routes[routes.length - 1].routeName;
	if (currentScreen === 'Themes' || currentScreen === 'Questions') {
		return (
			<View style={styles.container}>
				<View style={styles.infoPanelContainer}>
					<UserInfo />
				</View>
				<Image source={bgImage} resizeMode="cover" style={styles.bg} />
			</View>
		);
	}
	return null;
};

const mapStateToProps = state => ({
	nav: state.nav,
});

export default connect(mapStateToProps)(InfoPanel);
