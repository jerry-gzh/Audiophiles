import React from 'react';
import { Link } from 'react-router-dom';
import './scss/Card.scss';

export function Card({Brand, Model, Img, id}) {
  
  return (
    <div className='card ' >
      <Link to= {`/item/:${id}`} >
        <button>
          <img src={Img} alt='' className='card-img-top'/>
          <div className='card-body'>
            <h4 className='card-title'>{Model}</h4>
            <p className='card-text text-secondary'>{Brand}</p>
          </div>
        </button>
      </Link>
    </div>
  )
}
