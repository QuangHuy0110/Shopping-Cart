import {call, all} from 'redux-saga/effects'
import { watchHomeSaga } from './HomeSaga'
import { watchCartSaga } from './CartSaga'
import { watchDetailSaga } from './DetailSaga'

export default function* rootSaga(){
    yield all([
        call(watchHomeSaga),
        call(watchCartSaga),
        call(watchDetailSaga)
    ])
}