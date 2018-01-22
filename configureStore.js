import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import allReducers from './scripts/reducers/';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export default () => {
	const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
	const persistor = persistStore(store);
	return { store, persistor };
};
