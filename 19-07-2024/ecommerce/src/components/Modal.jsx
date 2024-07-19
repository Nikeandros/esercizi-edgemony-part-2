import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ show, onClose, product, addToCart }) => {
  if (!show || !product) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md mx-auto">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <img src={product.images[0]} alt={product.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-semibold text-gray-900 mb-4">{product.price} $</p>
        <button onClick={() => { addToCart(product); onClose(); }} className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 mb-2">
          <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
        </button>
        <Link to={`/product/${product.id}`} className="w-full block text-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Modal;
