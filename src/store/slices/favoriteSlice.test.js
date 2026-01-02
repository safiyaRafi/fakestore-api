import { describe, it, expect, beforeEach, vi } from 'vitest';
import reducer, { toggleFavorite, removeFavorite } from './favoriteSlice';

describe('favoriteSlice reducer', () => {
    const initialState = {
        favorites: [],
    };

    const product = { id: 1, title: 'Test' };

    beforeEach(() => {
        vi.stubGlobal('localStorage', {
            getItem: vi.fn(),
            setItem: vi.fn(),
        });
    });

    it('should handle toggleFavorite (add)', () => {
        const actual = reducer(initialState, toggleFavorite(product));
        expect(actual.favorites).toHaveLength(1);
        expect(actual.favorites[0].id).toEqual(1);
    });

    it('should handle toggleFavorite (remove)', () => {
        const stateWithFav = { favorites: [product] };
        const actual = reducer(stateWithFav, toggleFavorite(product));
        expect(actual.favorites).toHaveLength(0);
    });

    it('should handle removeFavorite', () => {
        const stateWithFav = { favorites: [product] };
        const actual = reducer(stateWithFav, removeFavorite(1));
        expect(actual.favorites).toHaveLength(0);
    });
});
