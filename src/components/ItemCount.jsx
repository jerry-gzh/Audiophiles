import React from 'react';
import { useState } from 'react';
import './scss/Item.scss';


const ItemCount = ({ initial, onAdd }) => {
  //hook de estado
  const [qty, setQty] = useState(initial);
  const [ setshowButton] = useState(false);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className='btn btn-dark'
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span className="count">{qty}</span>
        <button
          className='btn btn-dark'
          onClick={() => addProduct(+1)}
          //disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className='btn btn-dark'
        id='cart-add'
        onClick={() => {onAdd(qty); setshowButton(true)}}
        //disabled={stock === 0 ? true : null}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemCount;
