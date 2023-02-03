import { createContext, useEffect, useState } from "react";
import { allProducts } from "../services/getProducts";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    allProducts(setProducts);
  }, []);
  
  return(
    <ItemContext.Provider value={{products}}>
      { children }
    </ItemContext.Provider>
  )
}