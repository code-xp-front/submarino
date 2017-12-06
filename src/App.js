import React from "react";
import SectionProduct from "./components/SectionProduct/SectionProduct";
import NotebookPhoto from "./notebook.jpg";
import "./App.css";


var products = [
    {
        name: "Notebook Acer A515-51G-58VH Intel Core I5 8GB",
        price: 2999.99,
        image: NotebookPhoto,
        offer: true
    },
    {
        name: "Notebook Acer A515-51G-58VH Intel Core I5 8GB",
        price: 2999.99,
        image: NotebookPhoto,
        offer: true
    },
    {
        name: "Notebook Acer A515-51G-58VH Intel Core I5 8GB",
        price: 2999.99,
        image: NotebookPhoto,
        offer: true
    },
    {
        name: "Notebook Acer A515-51G-58VH Intel Core I5 8GB",
        price: 2999.99,
        image: NotebookPhoto,
        offer: true
    },
    {
        name: "Notebook Acer A515-51G-58VH Intel Core I5 8GB",
        price: 2999.99,
        image: NotebookPhoto,
        bestSeller: true
    },
    {
        name: "Notebook Acer A515-51G-58VH Intel Core I5 8GB",
        price: 2999.99,
        image: NotebookPhoto,
        bestSeller: true
    },
    {
        name: "Notebook Acer A515-51G-58VH Intel Core I5 8GB",
        price: 2999.99,
        image: NotebookPhoto,
        bestSeller: true
    },
    {
        name: "Notebook Acer A515-51G-58VH Intel Core I5 8GB",
        price: 2999.99,
        image: NotebookPhoto,
        bestSeller: true
    },
];


function bestSeller() {
    var filtered = [];

    for (var indice = 0; indice < products.length; indice++) {
        if (products[indice].bestSeller) {
            filtered.push(products[indice]);
        }
    }

    return filtered;
}


function offer() {
    var filtered = [];

    for (var indice = 0; indice < products.length; indice++) {
        if (products[indice].offer) {
            filtered.push(products[indice]);
        }
    }

    return filtered;
}

export default () => (
    <div className="app">
        <SectionProduct title="Ofertas" products={offer()} />
        <SectionProduct title="Mais vendidos" products={bestSeller()} />
    </div>
)