import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import * as Animatable from 'react-native-animatable';

import { addNavigationHelpers } from 'react-navigation';

import EStyleSheet from 'react-native-extended-stylesheet';

import AppNavigator from './scripts/AppNavigator';

import globalAnimations from './globalAnimations';

import configureStore from './configureStore';

let { store, persistor } = configureStore();

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
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AppWithNavigationState />
				</PersistGate>
			</Provider>
		);
	}
}

export default Root;
