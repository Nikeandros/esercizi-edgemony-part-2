import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300">
              <div className="flex items-center">
                <img src={item.images[0]} alt={item.title} className="w-16 h-16 object-cover rounded-lg mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">{item.price} $</p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 text-center border rounded-lg"
                  min="1"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faTrash} /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
