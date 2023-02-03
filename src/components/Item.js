import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import { CartContext } from '../context/cartContext';
import { ItemContext } from '../context/itemContext';
import ItemCount from './ItemCount.jsx';
import './scss/Item.scss';

export function Item() {
  const params = useParams();
  const {products} = useContext(ItemContext);
  const id = ((params.id).slice(1)-1);
  const cartContext = useContext(CartContext);
  const {addToCart} = cartContext;
  //console.log(addToCart);

  const onAdd = (qty)=>{
    addToCart((products[id]), qty)
  } 

  return (
    <div>
      {products != null ? (
        <div className='container-item'>
          <div className='container-img'>
            <img id='img-item' src={(products[id]).Img_link} />
          </div>
          <div className='info-item'>
            <h1>{(products[id]).Model}</h1>
            <h3>{(products[id]).Brand}</h3>
            <h2>Technical specifications</h2>
            <li> Type: {(products[id]).Type}</li>
            <li> Impedance: {(products[id]).Impedance}Ω</li>
            <li> Response: {(products[id]).Response}</li>
            <h4> {"$ " + new Intl.NumberFormat('en-US').format((products[id]).Price) + " MXN" }</h4>
            <ItemCount initial={1} onAdd={onAdd}/>
          </div>
        </div>
      ) : (
        "No hay productos"
      )}
    </div>
  )
}