import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './redux/rootReducer';

const persistedReducers = persistReducer(
    {
        key: 'starwars:root',
        storage: storage
    },
    rootReducer
);

export const store = createStore(persistedReducers, applyMiddleware(thunk));
export const persist = persistStore(store);
