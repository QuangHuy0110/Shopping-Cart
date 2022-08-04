// cho nay dinh nghia type va action dispatch vao saga

export const REQUEST_GET_PRODUCTS = 'REQUEST_GET_PRODUCTS'
export const requestGetProducts = () => ({
    type: REQUEST_GET_PRODUCTS
})
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const addProductToCart = (id, qty =1) =>({
    type: ADD_PRODUCT_TO_CART,
    id,
    qty
})
export const REQUEST_GET_DETAIL_PRODUCT = 'REQUEST_GET_DETAIL_PRODUCT'
export const getdetailProduct = (id) => ({
    type: REQUEST_GET_DETAIL_PRODUCT,
    id
})