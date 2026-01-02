import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSort, selectCategories, selectFilters } from '../../store/slices/productSlice';
import { SlidersHorizontal } from 'lucide-react';

const FilterBar = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    const { category, sort } = useSelector(selectFilters);

    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 p-4 glass rounded-2xl">
            <div className="flex items-center gap-2 text-slate-400 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                <SlidersHorizontal size={18} className="shrink-0" />
                <button
                    onClick={() => dispatch(setCategory('all'))}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${category === 'all'
                            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                >
                    All Products
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => dispatch(setCategory(cat))}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all capitalize whitespace-nowrap ${category === cat
                                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-3 shrink-0">
                <span className="text-sm text-slate-400">Sort by:</span>
                <select
                    value={sort}
                    onChange={(e) => dispatch(setSort(e.target.value))}
                    className="bg-slate-800 border border-slate-700 text-white text-sm rounded-xl px-4 py-2 focus:outline-none focus:border-primary-500 transition-all cursor-pointer"
                >
                    <option value="default">Default</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default FilterBar;
