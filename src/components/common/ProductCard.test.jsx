import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { renderWithProviders } from '../../test/utils';

describe('ProductCard Component', () => {
    const product = {
        id: 1,
        title: 'Test Product',
        price: 99.99,
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/test.jpg',
        rating: { rate: 4.5, count: 10 }
    };

    it('renders product title and price', () => {
        renderWithProviders(<ProductCard product={product} />);

        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('$99.99')).toBeInTheDocument();
    });

    it('renders product image with correct alt text', () => {
        renderWithProviders(<ProductCard product={product} />);
        const img = screen.getByAltText('Test Product');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', product.image);
    });
});
