"use strict";
// main.ts
Object.defineProperty(exports, "__esModule", { value: true });
var apiURL = "https://dummyjson.com/products";
fetch(apiURL)
    .then(function (response) {
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error("Failed to fetch data");
    }
})
    .then(function (data) {
    var products = data.products;
    products.slice(0, 8).forEach(function (product) {
        var mainContainer = document.querySelector(".container");
        var subdiv = document.createElement("div");
        var image = document.createElement("img");
        image.src = product.thumbnail;
        var subtxt = document.createElement("h3");
        subtxt.innerHTML = product.title;
        subdiv.appendChild(image);
        subdiv.appendChild(subtxt);
        mainContainer.appendChild(subdiv);
    });
})
    .catch(function (error) {
    console.error(error.message);
});
