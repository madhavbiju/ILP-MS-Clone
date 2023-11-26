"use strict";
// import { Data,Product } from "../types/surface";
// const apiURL = "https://mocki.io/v1/c227a5f1-333a-4c41-ac9e-9384a4bbd37a";
// fetch(apiURL)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Failed to fetch data");
//     }
//   })
//   .then((data) => {
//     // if (data.status === "success") {
//     const products = data.products;
//     products.slice(0, 2).forEach((product) => {
//       console.log(product.thumbnail);
//       var container = document.querySelector(`.column2`);
//       //   var container = document.getElementsByClassName(column2);
//       var row = document.createElement("div");
//       row.classList.add("row1");
//       //   const productImage = product.thumbnail;
//       var image = document.createElement("img");
//       image.src = product.thumbnail;
//       var anchor1 = document.createElement("a");
//       anchor1.classList.add("row-anchor");
//       anchor1.href = "#";
//       anchor1.textContent = product.title;
//       row.appendChild(image);
//       row.appendChild(anchor1);
//       container.appendChild(row);
//     });
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });
Object.defineProperty(exports, "__esModule", { value: true });
var apiURL = "https://mocki.io/v1/c227a5f1-333a-4c41-ac9e-9384a4bbd37a";
// Fetch and render first 2 products in the 'column2' container
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
    var products = data.products.slice(0, 2);
    products.forEach(function (product) {
        var container = document.querySelector(".column2");
        if (container) {
            var row = document.createElement("div");
            row.classList.add("row1");
            var image = document.createElement("img");
            image.src = product.thumbnail;
            var anchor = document.createElement("a");
            anchor.classList.add("row-anchor");
            anchor.href = "#";
            anchor.textContent = product.title;
            row.appendChild(image);
            row.appendChild(anchor);
            container.appendChild(row);
        }
    });
})
    .catch(function (error) {
    console.error(error.message);
});
// Fetch and render first 4 products in the 'laptop-column1' container
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
    var products = data.products.slice(0, 4);
    products.forEach(function (product) {
        var container = document.querySelector(".laptop-column1");
        if (container) {
            var laprow = document.createElement("div");
            laprow.classList.add("lap1");
            var lapimage = document.createElement("img");
            lapimage.src = product.thumbnail;
            var anchor = document.createElement("a");
            anchor.classList.add("laptop-link");
            anchor.href = "#";
            anchor.textContent = product.title;
            laprow.appendChild(lapimage);
            laprow.appendChild(anchor);
            container.appendChild(laprow);
        }
    });
})
    .catch(function (error) {
    console.error(error.message);
});
