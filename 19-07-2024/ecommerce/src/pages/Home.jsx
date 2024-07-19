import React, { useEffect, useState, useContext } from 'react';
import { fetchProducts } from '../api/products';
import Modal from '../components/Modal';
import { CartContext } from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };
    getProducts();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="transform transition duration-300 hover:scale-105 cursor-pointer" onClick={() => openModal(product)}>
            <div className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={product.images[0]} alt={product.title} className="w-full h-64 object-cover mb-2 rounded-t-lg" />
              <h2 className="text-lg font-semibold text-gray-900">{product.title}</h2>
              <p className="text-gray-500">{product.price} $</p>
              <button onClick={(e) => { e.stopPropagation(); addToCart(product); }} className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
                <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onClose={closeModal} product={selectedProduct} addToCart={addToCart} />
    </div>
  );
};

export default Home;
