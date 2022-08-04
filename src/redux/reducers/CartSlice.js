import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    loadingCart: false,
    dataCarts: [],
    errorCarts: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        startAddProductCart(state, action){
            state.loadingCart = action.payload
        },
        changeQuantity(state, action){
            const{id, quantity} = action.payload || {id: 0, quantity: 0}
            // cap nhat lai so luong mua cua san pham co id gui len
            const quantityItems = state.dataCarts.map(item => {
                return item.id === id ? {...item,qty: quantity} : item
            })
            if(quantityItems !== undefined){
                state.dataCarts = quantityItems
                state.errorCarts = null
            }
        },
        removeItemCart(state, action){
            const idItem = action.payload
            // xoa bo san pham co id trong gio hang gui len
            // giu lai cac san pham ko trung id gui len
            const removeItems = state.dataCarts.filter(item =>item.id !== idItem)
            if(removeItems !== undefined){
                state.dataCarts = removeItems
                state.errorCarts = null
            }
        },
        addProductCartSuccess(state, action){
            const infoPd = action.payload.data // lay thong tin chi tiet PD
            const idPd = infoPd['id'] || 0 // id cua san phan
            const qtyPd = action.payload.qty || 1
            // kiem tra san phan them vao gio hang da ton tai trong gio hang truoc do hay chua
            // gio hang :state.dataCarts
            const findPd =state.dataCarts.find(item => item.id === idPd);
            if(findPd === undefined) {
                // khong ton tai
                // them san pham vao gio hang 
                // bo sung them so luong mua vao du lieu gio hang 
                infoPd.qty = qtyPd
                state.dataCarts.push(infoPd)
            }else{
                // co ton tai
                // cap nhat lai so luong san pham
                // khong cap nhat lai du lieu trong gio hang
                findPd.qty += 1
            }
            state.errorCarts = null
        },
        addProductCartFailure(state, action){
            state.errorCarts =action.payload
        }
    }
})

export const actionCart = cartSlice.actions
export default cartSlice.reducer