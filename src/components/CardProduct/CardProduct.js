import React from "react";
import "./CardProduct.css";


export default (props) => (
    <div className="card-product">
        <img className="card-product__icon" src={props.image} alt="Product" />
        <h3 className="card-product__title">{props.name}</h3>
        <p className="card-product__text">R$ {props.price}</p>
    </div>
);