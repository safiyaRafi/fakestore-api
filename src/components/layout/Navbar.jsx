import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, selectFilters } from '../../store/slices/productSlice';
import { selectFavorites } from '../../store/slices/favoriteSlice';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const favorites = useSelector(selectFavorites);
    const filters = useSelector(selectFilters);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Sync internal search state with global state if changed elsewhere
    useEffect(() => {
        setSearchValue(filters.search);
    }, [filters.search]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(setSearch(searchValue));
            if (searchValue && window.location.pathname !== '/') {
                navigate('/');
            }
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchValue, dispatch, navigate]);

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-dark py-3 shadow-lg' : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-primary-500 p-2 rounded-xl group-hover:rotate-12 transition-transform">
                            <ShoppingBag className="text-white" size={24} />
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">
                            Fake<span className="text-primary-500">Store</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                value={searchValue}
                                onChange={handleSearchChange}
                                placeholder="Search products..."
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-2 pl-10 pr-4 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/favorites" className="relative p-2 text-slate-300 hover:text-rose-500 transition-colors">
                            <Heart size={24} />
                            {favorites.length > 0 && (
                                <span className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                                    {favorites.length}
                                </span>
                            )}
                        </Link>

                        <button className="md:hidden p-2 text-slate-300">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
