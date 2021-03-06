import React, { Component } from 'react';
import { ScreenOrientation } from 'expo';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import * as Animatable from 'react-native-animatable';

import { addNavigationHelpers } from 'react-navigation';

import EStyleSheet from 'react-native-extended-stylesheet';

import AppNavigator from './scripts/AppNavigator';
import socket from './scripts/initSocketIo';
import InfoPanel from './scripts/components/InfoPanel';

import globalAnimations from './globalAnimations';

import configureStore from './configureStore';

const { store, persistor } = configureStore();

EStyleSheet.build({
	$mainColor: '#E6FF06',
	$mainDarkColor: '#5E3C14',
	$modalAnswerRightColor: 'green',
	$modalAnswerWrongColor: 'red',
});

Animatable.initializeRegistryWithDefinitions(globalAnimations);

class App extends Component {
	render() {
		return (
			<AppNavigator
				navigation={addNavigationHelpers({
					dispatch: this.props.dispatch,
					state: this.props.nav,
				})}
			/>
		);
	}
}

const mapStateToProps = state => ({
	nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

class Root extends Component {
	componentDidMount() {
		ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
	}
	componentWillUnmount() {
		ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
	}
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AppWithNavigationState />
					<InfoPanel />
				</PersistGate>
			</Provider>
		);
	}
}

export default Root;
