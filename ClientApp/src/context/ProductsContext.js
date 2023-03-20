/* just to keep in mind  for later. here are the api values that can be usedd for further coding usage in other components.
  [{"id":1,"sku":"AWMGSJ","name":"Grunge Skater Jeans","description":"new arrival","price":68,"isAvailable":true,"categoryId":1,"unit":"Pcs","manufacturer":"ABC","brand":"EABC","sellingPrice":240.5,"purchaseCost":230.5,"tax":3.5,"stocksOnHand":20,"reOrderLevel":5}
 */

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, [products]);

  const addProduct = (newProduct) => {
    axios
      .post("https://localhost:5001/api/products", newProduct)
      .then((response) => {
        setProducts([...products, response.data]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
