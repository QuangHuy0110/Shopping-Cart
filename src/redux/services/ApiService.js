import axios from 'axios';

const getAllDataProducts = async () => {
    const urlApi = `https://fakestoreapi.com/products`;
    const response = await axios.get(urlApi);
    const result = response.status === 200 ? response.data : [];
    return result;
}

const getDetailProductById = async (id) => {
    const urlApi = `https://fakestoreapi.com/products/${id}`;
    
    const response = await axios.get(urlApi);
    const result = response.status === 200 ? response.data : {};
    return result;
}
export const ApiServices = {
    getAllDataProducts,
    getDetailProductById
}