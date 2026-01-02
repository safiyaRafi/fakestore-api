import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productApi } from '../../services/api';

export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await productApi.getAllProducts();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch products');
        }
    }
);

export const fetchCategories = createAsyncThunk(
    'products/fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await productApi.getCategories();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch categories');
        }
    }
);

const initialState = {
    items: [],
    filteredItems: [],
    categories: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    filters: {
        category: 'all',
        search: '',
        sort: 'default', // 'default' | 'price-low-high' | 'price-high-low'
    },
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.filters.search = action.payload;
            state.filteredItems = applyFilters(state);
        },
        setCategory: (state, action) => {
            state.filters.category = action.payload;
            state.filteredItems = applyFilters(state);
        },
        setSort: (state, action) => {
            state.filters.sort = action.payload;
            state.filteredItems = applyFilters(state);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.filteredItems = applyFilters({ ...state, items: action.payload });
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            });
    },
});

const applyFilters = (state) => {
    let result = [...state.items];

    // Search filter
    if (state.filters.search) {
        result = result.filter(item =>
            item.title.toLowerCase().includes(state.filters.search.toLowerCase())
        );
    }

    // Category filter
    if (state.filters.category !== 'all') {
        result = result.filter(item => item.category === state.filters.category);
    }

    // Sort
    if (state.filters.sort === 'price-low-high') {
        result.sort((a, b) => a.price - b.price);
    } else if (state.filters.sort === 'price-high-low') {
        result.sort((a, b) => b.price - a.price);
    }

    return result;
};

export const { setSearch, setCategory, setSort } = productSlice.actions;

export const selectAllProducts = (state) => state.products.filteredItems;
export const selectProductStatus = (state) => state.products.status;
export const selectCategories = (state) => state.products.categories;
export const selectFilters = (state) => state.products.filters;

export default productSlice.reducer;
