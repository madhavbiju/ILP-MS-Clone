// main.ts

import { Data,Product } from "../types/surface_buy";

const apiURL: string = "https://dummyjson.com/products";

fetch(apiURL)
  .then((response) => {
    if (response.ok) {
      return response.json() as Promise<Data>;
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data: Data) => {
    const products: Product[] = data.products;
    products.slice(0, 8).forEach((product: Product) => {
      const mainContainer = document.querySelector(`.container`) as HTMLElement;
      const subdiv = document.createElement("div");

      const image = document.createElement("img") as HTMLImageElement;
      image.src = product.thumbnail;

      const subtxt = document.createElement("h3")as HTMLElement;
      subtxt.innerHTML = product.title;

      subdiv.appendChild(image);
      subdiv.appendChild(subtxt);
      mainContainer.appendChild(subdiv);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
