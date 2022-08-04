import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import { createRouterReducer } from '@lagunovsky/redux-react-router'
import storage from 'redux-persist/lib/storage'
import homeReducer from './HomeSlice';
import cartReducer from './CartSlice'
import detailReducer from './DetailSlice'
import {browserHistory} from '../history'

const configCartPersistReducer = {
    key: 'cartPersistReducer',
    storage: storage,
    whitelist: ['dataCarts']
}

const rootReducer = combineReducers({
    home: homeReducer, 
    cart: persistReducer(configCartPersistReducer,cartReducer),
    router: createRouterReducer(browserHistory), 
    detail: detailReducer
});
export default rootReducer;