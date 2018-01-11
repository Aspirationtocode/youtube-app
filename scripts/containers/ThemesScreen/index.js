import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import { makeNavigationOptions } from '../../constants';
import { setCurrentTheme } from '../../actions';

import GoElement from '../../components/GoElement';
import InfoPanel from '../../components/InfoPanel';
import LayoutContainer from '../../components/LayoutContainer';

class ThemesScreen extends Component {
	static navigationOptions = makeNavigationOptions({ title: 'Выбор тем' });
	handleThemePress = theme => {
		const { navigate } = this.props.navigation;
		const { dispatch } = this.props;
		dispatch(setCurrentTheme(theme));
		navigate('Questions', { themeTitle: theme.themeTitle });
	};
	renderThemeElements = () => {
		const { currentUser } = this.props;
		const errorRender = (
			<View>
				<Text>Такого игрока нет в базе!</Text>
			</View>
		);
		const fetchingRender = (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator size="large" color="#00ff00" />
			</View>
		);

		if (currentUser.error) {
			return errorRender;
		}

		if (currentUser.fetching) {
			return fetchingRender;
		}

		const fetchedRender = currentUser.data.themes.map(theme => (
			<GoElement
				text={theme.themeTitle}
				key={theme._id}
				handleGoElementPress={() => {
					this.handleThemePress(theme);
				}}
			/>
		));

		return fetchedRender;
	};

	render() {
		const { data } = this.props.currentUser;
		return (
			<LayoutContainer>
				<View style={styles.themesContainer}>{this.renderThemeElements()}</View>
				{data && <InfoPanel />}
			</LayoutContainer>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
});

export default connect(mapStateToProps)(ThemesScreen);
