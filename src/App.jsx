import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>

        <footer className="py-12 px-4 md:px-8 border-t border-white/5 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white tracking-tight">
                Fake<span className="text-primary-500">Store</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm">
              &copy; 2026 FakeStore Dashboard. Created for Assessment.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-primary-400">Privacy</a>
              <a href="#" className="hover:text-primary-400">Terms</a>
              <a href="#" className="hover:text-primary-400">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
