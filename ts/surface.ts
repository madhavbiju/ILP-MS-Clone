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
//     products.slice(0, 4).forEach((product) => {
//       console.log(product.thumbnail);
//       var lapcontainer = document.querySelector(`.laptop-column1`);
//       //   var container = document.getElementsByClassName(column2);
//       var laprow = document.createElement("div");
//       laprow.classList.add("lap1");
//       //   const productImage = product.thumbnail;
//       var lapimage = document.createElement("img");
//       lapimage.src = product.thumbnail;
//       var anchor = document.createElement("a");
//       anchor.classList.add("laptop-link");
//       anchor.href = "#";
//       anchor.textContent = product.title;
//       laprow.appendChild(lapimage);
//       laprow.appendChild(anchor);
//       lapcontainer.appendChild(laprow);
//     });
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

import { Data, Product } from "../types/surface";

const apiURL = "https://mocki.io/v1/c227a5f1-333a-4c41-ac9e-9384a4bbd37a";

// Fetch and render first 2 products in the 'column2' container
fetch(apiURL)
  .then((response) => {
    if (response.ok) {
      return response.json() as Promise<Data>;
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    const products = data.products.slice(0, 2);
    products.forEach((product) => {
      const container = document.querySelector(".column2");
      if (container) {
        const row = document.createElement("div");
        row.classList.add("row1");

        const image = document.createElement("img");
        image.src = product.thumbnail;

        const anchor = document.createElement("a");
        anchor.classList.add("row-anchor");
        anchor.href = "#";
        anchor.textContent = product.title;

        row.appendChild(image);
        row.appendChild(anchor);
        container.appendChild(row);
      }
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

// Fetch and render first 4 products in the 'laptop-column1' container
fetch(apiURL)
  .then((response) => {
    if (response.ok) {
      return response.json() as Promise<Data>;
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    const products = data.products.slice(0, 4);
    products.forEach((product) => {
      const container = document.querySelector(".laptop-column1");
      if (container) {
        const laprow = document.createElement("div");
        laprow.classList.add("lap1");

        const lapimage = document.createElement("img");
        lapimage.src = product.thumbnail;

        const anchor = document.createElement("a");
        anchor.classList.add("laptop-link");
        anchor.href = "#";
        anchor.textContent = product.title;

        laprow.appendChild(lapimage);
        laprow.appendChild(anchor);
        container.appendChild(laprow);
      }
    });
  })
  .catch((error) => {
    console.error(error.message);
  });


