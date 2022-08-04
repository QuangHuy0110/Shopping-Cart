import { call, put, takeEvery } from 'redux-saga/effects'
import {actionHome} from '../reducers/HomeSlice'
import {REQUEST_GET_PRODUCTS} from './actionSaga'
import {ApiServices} from '../services/ApiService'

// worker
function* homeSaga(){
    try{
        yield put(actionHome.startGetAllProducts(true));
        const products = yield call(ApiServices.getAllDataProducts)
        if(products.length > 0){
            // co data
            yield put(actionHome.getAllProductsSuccess(products));
        }else{
            // khong co data
            yield put(actionHome.getAllProductsFailure({
                message: 'Product not found',
                cod: 404
            }))
        }
    }
    catch(err){
        yield put(actionHome.getAllProductsFailure({
            message: err,
            cod: 500
        }))
    }
    finally{
        yield put(actionHome.startGetAllProducts(false))
    }
}
// watcher saga
export function* watchHomeSaga(){
    yield takeEvery(REQUEST_GET_PRODUCTS,homeSaga)
}