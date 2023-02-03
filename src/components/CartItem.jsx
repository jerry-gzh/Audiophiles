import React from 'react';
//import {faTimes} from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import './styles/CartItem.css';

const CartItem = ({ item, deleteCartById }) => {
    return (
        <article className="cart-item-card">
            <div className="cart-item__delete" onClick={()=>deleteCartById(item.id)}>
                {/* <FontAwesomeIcon icon={faTimes} color={'#1d1d1d'} size={'1x'}/> */}
            </div>
            <div className="cart-item-img">
                <img src={item.Img_link}/>
            </div>
            <div className="cart-item-info">
                <h2 className="cart-item-qty">{item.qty}</h2>
                <h2 className="cart-item-name">{item.Model} by {item.Brand}</h2>
                <h2 className="cart-item-subtotal">
                    {"$ " + new Intl.NumberFormat('en-US').format((item.qty * item.Price))}
                </h2>
            </div>
        </article>
    )
}

export default CartItem
