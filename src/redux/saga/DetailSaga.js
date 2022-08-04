import { call, put, takeEvery } from 'redux-saga/effects'
import {actionDetail} from '../reducers/DetailSlice'
import {REQUEST_GET_DETAIL_PRODUCT} from './actionSaga'
import {ApiServices} from '../services/ApiService'

function* detailPdSaga ({id}){
    try {
        yield put(actionDetail.startGetLoadingDetail(true));
        const dataDetail =  yield call(ApiServices.getDetailProductById, id)
        console.log(dataDetail);
        if(dataDetail !== null && !dataDetail.hasOwnProperty('status')){ 
            // lay dc du lieu theo id sp
            yield put(actionDetail.getDetailProductSuccess(dataDetail))
        }
        else{
            // khong lay dc
            yield put(actionDetail.getDetailProductFail({
                code: 404,
                message:'not found product'
            }))
        }
    } catch (err) {
        yield put(actionDetail.getDetailProductFail({
            code: 500,
            message:err
        }))
    }
    finally{
        yield put(actionDetail.startGetLoadingDetail(false));
    }
}

// watcher
export function* watchDetailSaga(){
    yield takeEvery(REQUEST_GET_DETAIL_PRODUCT, detailPdSaga)
}