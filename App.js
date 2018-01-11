import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as Animatable from 'react-native-animatable';

import { createStore, applyMiddleware } from 'redux';

import EStyleSheet from 'react-native-extended-stylesheet';

import AppContainer from './scripts/containers/AppContainer';
import allReducers from './scripts/reducers';

import globalAnimations from './globalAnimations';

EStyleSheet.build({
	$mainColor: '#E6FF06',
	$mainDarkColor: '#5E3C14',
});

Animatable.initializeRegistryWithDefinitions(globalAnimations);

const store = createStore(allReducers, applyMiddleware(thunk, logger));

export default () => (
	<Provider store={store}>
		<AppContainer />
	</Provider>
);
