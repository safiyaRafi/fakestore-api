import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] w-full">
            <div className="relative w-20 h-20">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-500/20 rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-primary-500 rounded-full animate-spin"></div>
            </div>
            <p className="mt-4 text-slate-400 font-medium animate-pulse">Loading amazing products...</p>
        </div>
    );
};

export default Loader;
