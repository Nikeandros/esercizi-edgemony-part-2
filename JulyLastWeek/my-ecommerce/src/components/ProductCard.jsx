import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, toggleFavorite, isFavorite }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
    <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-white">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p>${product.price}</p>
        </div>
      </Link>
      <button onClick={() => toggleFavorite(product.id)} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default ProductCard;
