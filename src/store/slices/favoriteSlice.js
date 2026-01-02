import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const product = action.payload;
            const index = state.favorites.findIndex(item => item.id === product.id);

            if (index >= 0) {
                state.favorites.splice(index, 1);
            } else {
                state.favorites.push(product);
            }

            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(item => item.id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
    },
});

export const { toggleFavorite, removeFavorite } = favoriteSlice.actions;

export const selectFavorites = (state) => state.favorites.favorites;
export const isFavorite = (state, productId) =>
    state.favorites.favorites.some(item => item.id === productId);

export default favoriteSlice.reducer;
