import { createContext, useState, useContext, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import { toast } from 'react-toastify';
import axios from 'axios';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };

    getProducts();
  }, []);

  const addProduct = async (newProduct) => {
    try {
      const response = await axios.post('https://fakestoreapi.com/products', newProduct);
      setProducts([...products, response.data]);
      toast.success('Product added successfully');
    } catch (error) {
      toast.error('Failed to add product');
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      const response = await axios.put(`https://fakestoreapi.com/products/${id}`, updatedProduct);
      setProducts(products.map(product => product.id === id ? response.data : product));
      toast.success('Product updated successfully');
    } catch (error) {
      toast.error('Failed to update product');
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
      toast.success('Product deleted successfully');
    } catch (error) {
      toast.error('Failed to delete product');
    }
  };

  const toggleFavorite = (id) => {
    setFavorites(prevState => {
      if (prevState.includes(id)) {
        return prevState.filter(favId => favId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, favorites, setFavorites, addProduct, updateProduct, deleteProduct, toggleFavorite }}>
      {children}
    </ProductContext.Provider>
  );
};
