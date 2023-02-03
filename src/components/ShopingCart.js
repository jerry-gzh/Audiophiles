//import { useNavigate } from "react-router-dom"; // No es necesario si se usa el ProtectedRoute
import React, { useContext, useEffect } from "react";
import { useAuth } from "../context/authContext";
import CartContext from "../context/cartContext";
import CartItem from "./CartItem";
import './scss/ShopingCart.scss'

export function ShopingCart() {

  const {user, logout, loading} = useAuth()
  const cartContext = useContext(CartContext);
  const { cart, deleteCartById, deleteCart, total, getTotal } = cartContext;

  const handleLogout = async() => { await logout() }
  useEffect(() => { getTotal() }, []) //Se requiere useEffect ya que la función cambia un estado

  if (loading) return <h1>Loading...</h1>

  return (<div >
    <div className="user-band">
      <h1> Welcome {user.email}</h1>
      <button onClick={handleLogout}>LogOut</button>
    </div>

    <section className="list-cart-container">
      {cart.length ? (
          <div>
            {cart.map( product => {
              return(<CartItem key={product.id}
                    item={product} 
                    deleteCartById={deleteCartById}
                  />
                );
              })
            }
          
            <h1 id="cart-total">
              {"TOTAL: $ " + new Intl.NumberFormat('en-US').format(total)}  
            </h1>  
            <div className="cart-finish">
              <button 
                className="btn btn-dark"
                id="cart-clear"
                onClick={deleteCart}
              >Discard</button>
              <button 
                className="btn btn-dark"
                id="cart-finish"
                
              >Finish</button>
            </div>
          </div>
        ) : (<p>Your cart is empty 😐</p>)
      }
    </section>
  </div>);
}

export default ShopingCart;