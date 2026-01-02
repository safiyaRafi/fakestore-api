import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchCategories, selectAllProducts, selectProductStatus } from '../store/slices/productSlice';
import ProductCard from '../components/common/ProductCard';
import FilterBar from '../components/product/FilterBar';
import Loader from '../components/common/Loader';
import { Package } from 'lucide-react';

const ProductListing = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const status = useSelector(selectProductStatus);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
            dispatch(fetchCategories());
        }
    }, [status, dispatch]);

    if (status === 'loading') return <Loader />;

    if (status === 'failed') {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
                <p className="text-rose-500 font-bold text-xl">Something went wrong!</p>
                <button
                    onClick={() => dispatch(fetchProducts())}
                    className="mt-4 bg-primary-500 text-white px-6 py-2 rounded-xl"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
            <header className="mb-10">
                <h1 className="text-4xl font-bold text-white mb-2">Our Collection</h1>
                <p className="text-slate-400">Discover quality products at amazing prices</p>
            </header>

            <FilterBar />

            {products.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                    <Package size={64} strokeWidth={1} className="mb-4" />
                    <h3 className="text-xl font-medium">No products found</h3>
                    <p>Try adjusting your search or filters</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductListing;
