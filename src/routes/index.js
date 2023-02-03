import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import NavBar from "../components/NavBar";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { ShopingCart } from "../components/ShopingCart";
import { Item } from "../components/Item";
import { Shop } from "../components/Shop";
import { AboutUs } from "../components/AboutUs";
import { Contact } from "../components/Contact";
import './index.scss';

export default function AllRoutes() {
  return (
    <div>
      <NavBar/>
      <div className="wrap-routes">
      
        <Routes >
          <Route path="/home" element={<Home/>} />
          <Route path="Audiophile/" element={<Shop/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path='/shopingCart' element={ <ProtectedRoute> <ShopingCart/> </ProtectedRoute> }/>
          <Route path="/item/:id" element={<Item/>} />
        </Routes>
      
      </div>
    </div>
  )
}
