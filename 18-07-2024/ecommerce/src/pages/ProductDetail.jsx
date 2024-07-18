import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api/products';
import { CartContext } from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      const products = await fetchProducts();
      const product = products.find(p => p.id.toString() === id);
      setProduct(product);
    };
    getProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.images[0]} alt={product.title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mb-6">{product.price} $</p>
          <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
