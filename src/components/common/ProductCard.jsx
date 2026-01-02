import React from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, isFavorite } from '../../store/slices/favoriteSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const favorited = useSelector((state) => isFavorite(state, product.id));

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(toggleFavorite(product));
    };

    return (
        <div className="group relative glass-dark rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-1">
            <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-square overflow-hidden bg-white p-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <button
                        onClick={handleFavoriteClick}
                        className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${favorited
                                ? 'bg-rose-500 text-white'
                                : 'bg-white/80 text-slate-400 hover:text-rose-500'
                            } shadow-lg backdrop-blur-sm`}
                    >
                        <Heart size={20} fill={favorited ? 'currentColor' : 'none'} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-slate-900/80 to-transparent">
                        <span className="text-xs font-bold text-white uppercase tracking-wider bg-primary-500 px-2 py-1 rounded">
                            {product.category}
                        </span>
                    </div>
                </div>

                <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-slate-100 font-semibold line-clamp-1 group-hover:text-primary-400 transition-colors">
                            {product.title}
                        </h3>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center text-amber-400">
                            <Star size={14} fill="currentColor" />
                            <span className="text-sm font-medium ml-1">{product.rating?.rate}</span>
                        </div>
                        <span className="text-xs text-slate-500">({product.rating?.count} reviews)</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-white">${product.price}</span>
                        <button className="flex items-center gap-2 bg-slate-800 hover:bg-primary-600 text-white text-sm px-4 py-2 rounded-xl transition-colors">
                            <ShoppingCart size={16} />
                            Add
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
