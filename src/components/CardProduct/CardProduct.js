import React from "react";
import "./CardProduct.css";


export default (props) => (
    <div className="card-product">
        <img className="card-product__image" src={props.image.src} alt={props.image.alt} />
        <h3 className="card-product__name">{props.name}</h3>
        <p className="card-product__price">R$ {props.price}</p>
    </div>
);