import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { createStore, applyMiddleware } from 'redux';

import EStyleSheet from 'react-native-extended-stylesheet';

import AppContainer from './scripts/containers/AppContainer';
import allReducers from './scripts/reducers';

EStyleSheet.build({
  $mainColor: '#E6FF06',
  $mainDarkColor: '#5E3C14',
});

const store = createStore(allReducers, applyMiddleware(thunk, logger));

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
