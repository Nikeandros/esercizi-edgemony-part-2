import React from 'react';
import { useProducts } from '../context/ProductContext';
import ProductForm from '../components/ProductForm';

const Admin = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();

  const handleAddProduct = (product) => {
    addProduct(product);
  };

  const handleUpdateProduct = (id, updatedProduct) => {
    updateProduct(id, updatedProduct);
  };

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <ProductForm onSubmit={handleAddProduct} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={() => handleUpdateProduct(product.id, product)} className="mt-2 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">Update</button>
            <button onClick={() => handleDeleteProduct(product.id)} className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
