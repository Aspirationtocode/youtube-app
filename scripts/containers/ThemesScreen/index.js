import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import Prompt from 'rn-prompt';
import { connect } from 'react-redux';

import styles from './styles';

import { makeNavigationOptions, EXIT_PASSWORD } from '../../constants';
import { setCurrentThemeId } from '../../actions';

import CustomButton from '../../components/CustomButton';
import InfoPanel from '../../components/InfoPanel';
import LayoutContainer from '../../components/LayoutContainer';

class ThemesScreen extends Component {
	static navigationOptions = makeNavigationOptions(
		{
			title: 'Выбор тем',
		},
		true,
	);
	state = {
		promptVisible: false,
	};
	closePrompt() {
		this.setState({
			promptVisible: false,
		});
	}
	openPrompt() {
		this.setState({
			promptVisible: true,
		});
	}
	handleThemePress = theme => {
		const { navigate } = this.props.navigation;
		const { dispatch } = this.props;
		dispatch(setCurrentThemeId(theme._id));
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
			<CustomButton
				type="regular"
				text={theme.themeTitle}
				key={theme._id}
				handlePress={() => {
					this.handleThemePress(theme);
				}}
			/>
		));

		return fetchedRender;
	};

	render() {
		const { data } = this.props.currentUser;
		return (
			<LayoutContainer customStyles={{ zIndex: 100 }}>
				<View style={styles.themesContainer}>{this.renderThemeElements()}</View>
				{/* {data && <InfoPanel />} */}
				<Prompt
					title="Выход"
					placeholder="Введите пароль..."
					defaultValue=""
					submitText="Выйти"
					cancelText="Закрыть"
					visible={this.state.promptVisible}
					onCancel={() => this.closePrompt()}
					onSubmit={value => {
						if (value === EXIT_PASSWORD) {
							this.closePrompt();
							const { navigate } = this.props.navigation;
							navigate('Main');
						}
						this.closePrompt();
					}}
				/>
				<View style={styles.exitButton}>
					<Button
						title="Выйти"
						color="#fff"
						onPress={() => this.openPrompt()}
					/>
				</View>
			</LayoutContainer>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser,
});

export default connect(mapStateToProps)(ThemesScreen);
