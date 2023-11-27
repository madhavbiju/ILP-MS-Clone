"use strict";
// main.ts
Object.defineProperty(exports, "__esModule", { value: true });
var apiURL = "https://mocki.io/v1/f5f64504-a40b-4b05-9f06-73f1ad046272";
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
        subdiv.classList.add("brand-div");
        var image = document.createElement("img");
        image.src = product.thumbnail;
        var subtxt = document.createElement("h3");
        subtxt.innerHTML = product.title;
        var anchor = document.createElement("a");
        anchor.href = "#";
        anchor.classList.add("buy");
        anchor.textContent = "Buy Online";
        // console.log(product.redirect);
        subdiv.appendChild(image);
        subdiv.appendChild(subtxt);
        subdiv.appendChild(anchor);
        mainContainer.appendChild(subdiv);
    });
})
    .catch(function (error) {
    console.error(error.message);
});
