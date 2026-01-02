import { describe, it, expect, vi } from 'vitest';
import reducer, { setSearch, setCategory, setSort, fetchProducts } from './productSlice';
import { productApi } from '../../services/api';

// Mock the API service
vi.mock('../../services/api', () => ({
    productApi: {
        getAllProducts: vi.fn(),
    },
    default: {}
}));

describe('productSlice reducer', () => {
    const initialState = {
        items: [
            { id: 1, title: 'Test Product', price: 10, category: 'electronics' },
            { id: 2, title: 'Fancy Bag', price: 20, category: 'fashion' }
        ],
        filteredItems: [
            { id: 1, title: 'Test Product', price: 10, category: 'electronics' },
            { id: 2, title: 'Fancy Bag', price: 20, category: 'fashion' }
        ],
        categories: [],
        status: 'idle',
        error: null,
        filters: {
            category: 'all',
            search: '',
            sort: 'default',
        },
    };

    it('should handle setSearch', () => {
        const actual = reducer(initialState, setSearch('Test'));
        expect(actual.filters.search).toEqual('Test');
        expect(actual.filteredItems).toHaveLength(1);
        expect(actual.filteredItems[0].title).toEqual('Test Product');
    });

    it('should handle setCategory', () => {
        const actual = reducer(initialState, setCategory('fashion'));
        expect(actual.filters.category).toEqual('fashion');
        expect(actual.filteredItems).toHaveLength(1);
        expect(actual.filteredItems[0].category).toEqual('fashion');
    });

    it('should handle setSort price-high-low', () => {
        const actual = reducer(initialState, setSort('price-high-low'));
        expect(actual.filters.sort).toEqual('price-high-low');
        expect(actual.filteredItems[0].price).toEqual(20);
        expect(actual.filteredItems[1].price).toEqual(10);
    });

    it('should update status when fetchProducts is pending', () => {
        const newState = reducer(initialState, { type: fetchProducts.pending.type });
        expect(newState.status).toEqual('loading');
    });

    it('should update items when fetchProducts is fulfilled', () => {
        const products = [{ id: 1, title: 'New Product', price: 50 }];
        const newState = reducer(initialState, {
            type: fetchProducts.fulfilled.type,
            payload: products
        });
        expect(newState.status).toEqual('succeeded');
        expect(newState.items).toEqual(products);
    });
});
