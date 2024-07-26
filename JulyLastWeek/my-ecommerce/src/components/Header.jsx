import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-700 p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center">
        <Link to="/" className="text-2xl font-extrabold hover:text-blue-300 transition">My E-commerce</Link>
        <nav
        className="flex-1 flex justify-center space-x-4">
          <Link to="/" className="mx-4 hover:text-blue-300 transition">Home</Link>
          <Link to="/admin" className="mx-4 hover:text-blue-300 transition">Admin</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
