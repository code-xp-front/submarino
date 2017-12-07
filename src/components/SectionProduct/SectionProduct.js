import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./SectionProduct.css";


function cards(products) {
    var components =  [];

    for (var i = 0; i < products.length; i++) {
        components.push(<CardProduct name={products[i].name} price={products[i].price} image={products[i].image} />);
    }

    return components;
}

export default (props) => (
    <section className="section-product">
        <h1>{props.title}</h1>
        <div className="section-product__cards">
            {cards(props.products)}
        </div>
    </section>
);