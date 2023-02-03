import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children}) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    let modelTotal = cart.map(cart => cart.Price * cart.qty );
    let subTotal = 0;
    if (modelTotal.length > 0){
      subTotal = modelTotal.reduce((a, b) => a + b)
    } 
    setTotal(subTotal)
  }

  const addToCart = (item, qty) => {
    if (cart.some((el) => el.id === item.id)) { //some, comprueba si un elemento "iterado" cumple con la condición
      let index = cart.findIndex((el) => el.id === item.id);//findIndex, devuelve el indice del 1er elemento que cumple la condición
      let product = cart[index];
      product.qty = product.qty + qty;

      const newCart = [...cart];
      newCart.splice(index, 1, product);//splice, elimina la cantidad inicial del item y lo remplaza por la nueva
  
      setCart([...newCart]);
    } else {
      let product = { ...item, qty };//Caract del item + qty seleccionada
      setCart([...cart, product]);
    }
  };

  const deleteCartById = (id) => {
    const newCart = [...cart];
    let index = newCart.findIndex((el) => el.id === id);

    newCart.splice(index, 1);// Se utiliza splice pero no se remplaza con nada. 

    setCart([...newCart]);
  };

  const deleteCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        deleteCartById,
        deleteCart,
        getTotal,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext; //Con esto se exportó pero no sé por que 😐

