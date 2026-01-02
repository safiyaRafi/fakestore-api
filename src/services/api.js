import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
    baseURL: BASE_URL,
});

export const productApi = {
    getAllProducts: () => api.get('/products'),
    getProductById: (id) => api.get(`/products/${id}`),
    getCategories: () => api.get('/products/categories'),
    getProductsByCategory: (category) => api.get(`/products/category/${category}`),
};

export default api;
