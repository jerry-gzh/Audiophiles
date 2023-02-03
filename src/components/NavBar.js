import React, { useContext }  from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import CartContext from "../context/cartContext";
import './scss/NavBar.scss';
import logo from "../resources/logo.png";
import logo_s from "../resources/logo_s.png";
import userLogo from "../resources/userLogo.png";
import { BiCart } from 'react-icons/bi';



export default function NavBar() {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;
  const index = cart.length;
  

  return(
    <div className="Nav-Bar">
      <div className="nav-lg">
        <Link to="/Home"><img src={logo} alt="Home"/></Link>
      </div>
      <div className="nav-s">
        <Link to="/Home"><img src={logo_s} alt="Home"/></Link>
      </div>
      <ul className="NB-center">
        <li className="shop">
          <Link to="Audiophile/">Shop</Link>
        </li>
        <li className="nav-lg">
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="nav-lg">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="NB-rigth" > 
        <li>
          <Link to="/login"><img src={userLogo} alt="Login"/></Link>
        </li>|
        <li>
          <Link to="/shopingCart"><BiCart/></Link>
        </li>
        <li id="index-li">
          {index ? <div id="index">{index}</div> : <div>  </div>}
        </li>
      </ul>
    </div>
  )
};

