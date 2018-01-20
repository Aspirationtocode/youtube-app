import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as Animatable from 'react-native-animatable';

import { addNavigationHelpers } from 'react-navigation';

import { createStore, applyMiddleware } from 'redux';

import EStyleSheet from 'react-native-extended-stylesheet';

import AppNavigator from './scripts/AppNavigator';

import allReducers from './scripts/reducers';

import globalAnimations from './globalAnimations';

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

const store = createStore(allReducers, applyMiddleware(thunk, logger));

class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}

export default Root;
