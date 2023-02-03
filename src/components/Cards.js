import React, { useContext } from "react";
import { Card } from "./Card";
import { ItemContext } from "../context/itemContext";

import './scss/cards.css';

const Cards = () => {

  const {products} = useContext(ItemContext)

  return (
    <>
      {products != null ? (
        <div className="container d-flex justify-content-center align-items-center h-100 ">
          <div className="row">
            {products.map(({id, Model, Brand, Img_link }) => (
              <div className="col-md-4" key={id}>
                <Card Model={Model} Brand={Brand} Img={Img_link} id={id}/>
              </div>
            ))}
          </div>
        </div>
      ) : (
        "No hay productos 😥"
      )}
    </>
  );
};

export default Cards;
