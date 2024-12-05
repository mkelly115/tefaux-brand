import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk'
import { rootReducer } from './root-reducer'
import { createSagaMiddleware } from 'redux-saga'
// import { rootSaga } from './root-saga'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],

}
// const sagaMiddleware = createSagaMiddleware();

const presistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [
    process.env.NODE_ENV === 'development' && logger,
    thunk
].filter(Boolean);

const composedEnchancer = (process.env.NODE_ENV === 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnchancers = composedEnchancer(applyMiddleware(...middleWares))

export const store = createStore(presistedReducer,
    undefined,
    composedEnchancers
);

// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
