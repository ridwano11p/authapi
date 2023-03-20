// Import React and axios
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create a context object
const ProductsContext = createContext();

// Create a custom provider component
const ProductsProvider = ({ children }) => {
  // Define the state for products
  const [products, setProducts] = useState([]);

  // Define the API URL
  const apiUrl = "https://localhost:5001/api/products";

  // Define a function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get(apiUrl);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Define a function to add a product to the API
  const addProduct = async (product) => {
    try {
      const response = await axios.post(apiUrl, product);
      setProducts([...products, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  // Define a function to update a product in the API
  const updateProduct = async (id, product) => {
    try {
      const response = await axios.put(`${apiUrl}/${id}`, product);
      setProducts(
        products.map((p) => (p.id === id ? { ...p, ...response.data } : p))
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Define a function to delete a product from the API
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setProducts(products.filter((p) => p.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // Use useEffect hook to fetch products on initial render
  useEffect(() => {
    fetchProducts();
  }, []);

  // Return the provider component with the context value
  return (
    <ProductsContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// Export the context and provider components
export { ProductsContext, ProductsProvider };
