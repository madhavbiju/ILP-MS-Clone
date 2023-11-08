const request = fetch(
  "https://dummyjson.com/products?limit=4&select=title,description,thumbnail,brand"
);

request
  .then((response) => response.json())
  .then((data) => {
    const productsArray = data.products;
    const contentContainer = document.querySelector(".content-container");
    let isBigContainer = true;

    productsArray.forEach((product, index) => {
      const brand = product.brand;
      const title = product.title;
      const desc = product.description;
      const imageUrl = product.thumbnail;

      const productContainer = document.createElement("div");
      productContainer.classList.add(
        isBigContainer ? "bcontainer" : "scontainer"
      );

      const imageContainer = document.createElement("div");
      imageContainer.classList.add(
        isBigContainer ? "bcontainer-bg" : "scontainer-left"
      );
      const image = document.createElement("img");
      image.src = imageUrl;
      imageContainer.appendChild(image);

      const textContainer = document.createElement("div");
      textContainer.classList.add(
        isBigContainer ? "bcontainer-fg" : "scontainer-right"
      );
      const brandElement = document.createElement("div");
      brandElement.textContent = `Brand: ${brand}`;
      const titleElement = document.createElement("div");
      titleElement.textContent = `Title: ${title}`;
      const descElement = document.createElement("div");
      descElement.textContent = `Description: ${desc}`;
      textContainer.appendChild(brandElement);
      textContainer.appendChild(titleElement);
      textContainer.appendChild(descElement);

      productContainer.appendChild(imageContainer);
      productContainer.appendChild(textContainer);
      contentContainer.appendChild(productContainer);

      isBigContainer = !isBigContainer;
    });
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
