import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import allReducers from './scripts/reducers/';

const persistConfig = {
	key: 'root',
	storage: storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export default () => {
	let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
	let persistor = persistStore(store);
	return { store, persistor };
};
