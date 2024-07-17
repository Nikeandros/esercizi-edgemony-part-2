import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link to="/" className="text-white text-lg hover:text-gray-300 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/cart" className="text-white text-lg hover:text-gray-300 transition-colors duration-300">Cart</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
