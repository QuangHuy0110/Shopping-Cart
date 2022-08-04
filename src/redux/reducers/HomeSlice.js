import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loadingHome: false,
    dataProducts: [],
    errorHome: null,
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        startGetAllProducts(state, action) {
            state.loadingHome = action.payload;
        },
        getAllProductsSuccess(state, action){
            state.dataProducts = action.payload;
            state.errorHome = null;
        },
        getAllProductsFailure(state, action){
            state.dataProducts = [];
            state.errorHome = action.payload;
        }
    }
});
export const actionHome = homeSlice.actions;
export default homeSlice.reducer;