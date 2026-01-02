import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavorites, removeFavorite } from '../store/slices/favoriteSlice';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const favorites = useSelector(selectFavorites);
    const dispatch = useDispatch();

    return (
        <div className="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
            <header className="mb-10 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-bold text-white mb-2">My Wishlist</h1>
                    <p className="text-slate-400">Keep track of items you love</p>
                </div>
                <div className="bg-primary-500/10 text-primary-400 px-4 py-2 rounded-xl text-sm font-bold">
                    {favorites.length} items
                </div>
            </header>

            {favorites.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 bg-slate-900/30 rounded-3xl border border-dashed border-slate-800">
                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                        <ShoppingBag size={40} className="text-slate-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Your wishlist is empty</h3>
                    <p className="text-slate-400 mb-8 max-w-xs text-center">
                        Looks like you haven't added any items to your wishlist yet.
                    </p>
                    <Link
                        to="/"
                        className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-2xl font-bold transition-all"
                    >
                        Explore Products
                        <ArrowRight size={20} />
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favorites.map((product) => (
                        <div key={product.id} className="glass-dark rounded-2xl p-4 flex gap-4 group">
                            <Link to={`/product/${product.id}`} className="w-24 h-24 bg-white rounded-xl p-2 shrink-0 overflow-hidden">
                                <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                            </Link>

                            <div className="flex flex-col flex-1 min-w-0">
                                <Link to={`/product/${product.id}`} className="text-white font-bold mb-1 truncate group-hover:text-primary-400 transition-colors">
                                    {product.title}
                                </Link>
                                <div className="text-primary-400 font-bold mb-auto">${product.price}</div>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500 capitalize">{product.category}</span>
                                    <button
                                        onClick={() => dispatch(removeFavorite(product.id))}
                                        className="p-2 text-slate-500 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
