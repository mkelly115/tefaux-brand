import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './root-reducer'



// const loggerMiddleware = (store) => (next) => (action) => {
//     if(!action.type) {
//         return next(action);
//     }

//     console.log('type: ', action.type)
//     console.log('payload: ', action.payload)
//     console.log('currentState: ', store.getState())

//     next(action);

//     console.log*('next state: ', store.getState())
// }

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const presistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [logger]

const composedEnchancers = compose(applyMiddleware(...middleWares))

export const store = createStore(presistedReducer, undefined, composedEnchancers)

export const persistor = persistStore(store);

