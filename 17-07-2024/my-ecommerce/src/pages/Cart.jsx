import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    let updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cart.map((product, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
          >
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            {product.images && product.images.length > 0 ? (
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg mb-2">
                No image available
              </div>
            )}
            <p className="text-lg font-semibold text-gray-800 mb-2">{product.price} €</p>
            <button
              onClick={() => removeFromCart(index)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 hover:scale-105 transition-transform duration-300"
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
