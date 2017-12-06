import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import NotebookPhoto from "./notebook.jpg";
import "./SectionOffer.css";


var products = [
    {
        name: "Notebook Acer A515-51G-58VH Intel Core I5 8GB",
        price: 2999.99,
        image: NotebookPhoto
    },
    {
        name: "Notebook Acer A515-51G-58VH Intel Core I5 8GB",
        price: 2999.99,
        image: NotebookPhoto
    },
    {
        name: "Notebook Acer A515-51G-58VH Intel Core I5 8GB",
        price: 2999.99,
        image: NotebookPhoto
    },
    {
        name: "Notebook Acer A515-51G-58VH Intel Core I5 8GB",
        price: 2999.99,
        image: NotebookPhoto
    }
];

function cards() {
    var components =  [];

    for (var i = 0; i < products.length; i++) {
        components.push(<CardProduct name={products[i].name} price={products[i].price} image={products[i].image} />);
    }

    return components;
}

export default () => (
    <section className="offer">
        <h1>Ofertas</h1>
        <div className="offer__cards">
            {cards()}
        </div>
    </section>
);