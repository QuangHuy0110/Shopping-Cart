import {configureStore} from '@reduxjs/toolkit'
import { createRouterMiddleware } from '@lagunovsky/redux-react-router'
import logger from 'redux-logger'
import rootSaga from './saga/index'
import { 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import rootReducer from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import {browserHistory} from './history'

const sagaMiddleware = createSagaMiddleware()
const routerMiddleware = createRouterMiddleware(browserHistory)
const myConfigureStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware  =>getDefaultMiddleware({
            thunks: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              }
        }).concat(routerMiddleware,sagaMiddleware,logger)
    })
    sagaMiddleware.run(rootSaga)
    const persistor = persistStore(store)
    return {store, persistor}
}
export default myConfigureStore  