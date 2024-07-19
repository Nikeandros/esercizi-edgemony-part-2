import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { CartProvider, CartContext } from './contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <header className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold hover:text-gray-200">E-Commerce</Link>
              <nav>
                <Link to="/" className="px-4 hover:text-gray-200">Home</Link>
                <CartContext.Consumer>
                  {({ cart }) => (
                    <Link to="/cart" className="px-4 hover:text-gray-200">
                      <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
                    </Link>
                  )}
                </CartContext.Consumer>
              </nav>
            </div>
          </header>
          <main className="flex-grow bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <footer className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4">
            <div className="container mx-auto text-center">
              &copy; 2024 E-Commerce. All rights reserved.
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
