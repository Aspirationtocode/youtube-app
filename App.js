import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware, compose } from 'redux';

import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import AppContainer from './scripts/containers/AppContainer';
import allReducers from './scripts/reducers';

EStyleSheet.build({
	$mainColor: '#E6FF06',
	$mainDarkColor: '#5E3C14',
});

let store = createStore(allReducers, applyMiddleware(thunk));

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppContainer />
			</Provider>
		);
	}
}

export default App;
