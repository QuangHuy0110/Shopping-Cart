import React from 'react'
import RouteApp from './routes/index'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ReduxRouter } from '@lagunovsky/redux-react-router'
import configStore from './redux/configStore'
import {browserHistory} from './redux/history'
import './index.css'

const {store, persistor} = configStore()
const ShoppingApp = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ReduxRouter
                    history={browserHistory}
                    store={store}
                    children={<RouteApp/>}>
                </ReduxRouter>
            </PersistGate>   
        </Provider>
    )
}
export default React.memo(ShoppingApp)