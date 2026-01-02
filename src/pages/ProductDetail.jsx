import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, isFavorite } from '../store/slices/favoriteSlice';
import { productApi } from '../services/api';
import Loader from '../components/common/Loader';
import { Heart, Star, ArrowLeft, ShoppingCart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const favorited = useSelector((state) => product ? isFavorite(state, product.id) : false);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await productApi.getProductById(id);
                setProduct(response.data);
            } catch (err) {
                setError('Failed to load product details');
            } finally {
                setLoading(false);
            }
        };
        getProduct();
    }, [id]);

    if (loading) return <Loader />;
    if (error || !product) return <div className="pt-24 text-center text-rose-500">{error || 'Product not found'}</div>;

    return (
        <div className="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors mb-8 group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Gallery
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-900/50 rounded-3xl p-8 border border-white/5">
                <div className="glass bg-white p-12 rounded-2xl flex items-center justify-center min-h-[400px]">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="max-w-full max-h-[500px] object-contain"
                    />
                </div>

                <div className="flex flex-col">
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium uppercase tracking-wider mb-4">
                            {product.category}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 line-clamp-2">
                            {product.title}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-1 text-amber-400 bg-amber-400/10 px-3 py-1 rounded-lg">
                                <Star size={18} fill="currentColor" />
                                <span className="font-bold">{product.rating?.rate}</span>
                            </div>
                            <span className="text-slate-400">based on {product.rating?.count} reviews</span>
                        </div>

                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        <div className="text-4xl font-bold text-white mb-10">
                            ${product.price}
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-2xl border border-white/5">
                                <Truck className="text-primary-500" size={24} />
                                <div>
                                    <p className="text-white text-sm font-bold">Free Delivery</p>
                                    <p className="text-xs text-slate-500">Fast shipping</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-2xl border border-white/5">
                                <ShieldCheck className="text-green-500" size={24} />
                                <div>
                                    <p className="text-white text-sm font-bold">Secure Payment</p>
                                    <p className="text-xs text-slate-500">100% guarantee</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex-1 flex items-center justify-center gap-3 bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-primary-500/25 active:scale-95">
                                <ShoppingCart size={24} />
                                Add to Cart
                            </button>
                            <button
                                onClick={() => dispatch(toggleFavorite(product))}
                                className={`p-4 rounded-2xl transition-all border ${favorited
                                        ? 'bg-rose-500 border-rose-500 text-white shadow-lg shadow-rose-500/25'
                                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-rose-500 hover:border-rose-500'
                                    }`}
                            >
                                <Heart size={24} fill={favorited ? 'currentColor' : 'none'} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
