import { call, put, takeLatest } from 'redux-saga/effects'
import {actionCart} from '../reducers/CartSlice'
import {ADD_PRODUCT_TO_CART} from './actionSaga'
import {ApiServices} from '../services/ApiService'
import {push} from '@lagunovsky/redux-react-router'
function* cartSaga({id, qty}){
    try{
        yield put(actionCart.startAddProductCart(true))
        const detailPd = yield call(ApiServices.getDetailProductById, id)
        console.log(detailPd);
        if(detailPd !== null && !detailPd.hasOwnProperty('status')){
            // co data tra ve
            yield put(actionCart.addProductCartSuccess({data: detailPd, qty: qty}))
            // chuyen trang ve page cart
            yield put(push('/cart'))
        }
        else{
            // khong co data tra  ve
            yield put(actionCart.addProductCartFailure({
                cod:404,
                message:'not found product',
            }))
        }
    }
    catch(err){
        yield put(actionCart.addProductCartFailure({
            cod:500,
            message:'not found product',
        }))
    }
    finally{
        yield put(actionCart.startAddProductCart(false))
    }
}

export function* watchCartSaga(){
    yield takeLatest(ADD_PRODUCT_TO_CART, cartSaga)
}