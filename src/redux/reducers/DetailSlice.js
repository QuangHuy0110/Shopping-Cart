import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loadingDetail: null,
    detailPd: {},
    errorDetail: null
}

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        startGetLoadingDetail(state, action){
            state.loadingDetail = action.payload
        },
        getDetailProductSuccess(state, action){
            state.detailPd = action.payload
            state.errorDetail = null
        },
        getDetailProductFail(state, action){
            state.detailPd = {}
            state.errorDetail = action.payload
        }
    }
})
export const actionDetail = detailSlice.actions;
export default detailSlice.reducer