// main.ts

import { Data,Product } from "../types/surface_buy";

const apiURL: string = "https://mocki.io/v1/f5f64504-a40b-4b05-9f06-73f1ad046272";

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
      subdiv.classList.add("brand-div");

      const image = document.createElement("img") as HTMLImageElement;
      image.src = product.thumbnail;

      const subtxt = document.createElement("h3")as HTMLElement;
      subtxt.innerHTML = product.title;


      const anchor = document.createElement("a") as HTMLAnchorElement;
      anchor.href = product.redirect;
      anchor.classList.add("buy");
      anchor.textContent="Buy Online"
      console.log(product.redirect);

      subdiv.appendChild(image);
      subdiv.appendChild(subtxt);
      subdiv.appendChild(anchor);
      mainContainer.appendChild(subdiv);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
