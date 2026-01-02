import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import favoriteReducer from './slices/favoriteSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        favorites: favoriteReducer,
    },
});

export default store;
