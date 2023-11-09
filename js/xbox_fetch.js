const request = fetch(
  "https://dummyjson.com/products?limit=13&select=title,description,thumbnail,brand"
);

request
  .then((response) => response.json())
  .then((data) => {
    fillContainer1(data); // Call the function to fill up the first section
    fillContainer2(data); // Call the function to fill up the second section
    fillContainer3(data); // Call the function to fill up the third section
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });

function fillContainer1(data) {
  const productsArray = data.products;
  const contentContainer = document.querySelector(".content-container");
  let isBigContainer = true;

  productsArray.slice(0, 4).forEach((product, index) => {
    const brand = product.brand;
    const title = product.title;
    const desc = product.description;
    const imageUrl = product.thumbnail;
    // Check whether the next Div to come is big or not
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
    const titleElement = document.createElement("h2");
    titleElement.textContent = `${title}`;
    const descElement = document.createElement("p");
    descElement.textContent = `${desc}`;
    const aElement = document.createElement("a");
    aElement.textContent = "Get it Now >";
    aElement.href = "#";
    textContainer.appendChild(titleElement);
    textContainer.appendChild(descElement);
    textContainer.appendChild(aElement);
    productContainer.appendChild(imageContainer);
    productContainer.appendChild(textContainer);
    contentContainer.appendChild(productContainer);
    isBigContainer = !isBigContainer; // Alternate between small and big div
  });
}

function fillContainer2(data) {
  const productsArray = data.products;
  const contentContainer = document.querySelector(".content-container2");
  let isBigContainer = changeBoolean2();
  let index = 0;
  productsArray.slice(4, 9).forEach((product, index) => {
    const brand = product.brand;
    const title = product.title;
    const desc = product.description;
    const imageUrl = product.thumbnail;
    let isBigContainer = changeBoolean2(index); // Call function which returns the type (small/wide) of div to be made
    const productContainer = document.createElement("div");
    productContainer.classList.add(
      isBigContainer ? "wcontainer" : "scontainer"
    );

    const imageContainer = document.createElement("div");
    imageContainer.classList.add(
      isBigContainer ? "wcontainer-bg" : "scontainer-left"
    );
    const image = document.createElement("img");
    image.src = imageUrl;
    imageContainer.appendChild(image);

    const textContainer = document.createElement("div");
    textContainer.classList.add(
      isBigContainer ? "wcontainer-fg" : "scontainer-right"
    );
    const titleElement = document.createElement("h2");
    titleElement.textContent = `${title}`;
    const descElement = document.createElement("p");
    descElement.textContent = `${desc}`;
    const aElement = document.createElement("a");
    aElement.textContent = "Get it Now >";
    aElement.href = "#";
    textContainer.appendChild(titleElement);
    textContainer.appendChild(descElement);
    textContainer.appendChild(aElement);
    productContainer.appendChild(imageContainer);
    productContainer.appendChild(textContainer);
    contentContainer.appendChild(productContainer);
  });
}

function fillContainer3(data) {
  const productsArray = data.products;
  const contentContainer = document.querySelector(".content-container3");
  let index = 0;
  productsArray.slice(9, 13).forEach((product, index) => {
    const brand = product.brand;
    const title = product.title;
    const desc = product.description;
    const imageUrl = product.thumbnail;
    let isBigContainer = changeBoolean3(index); // Call function which returns the type (small/big) of div to be made
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
    const titleElement = document.createElement("h2");
    titleElement.textContent = `${title}`;
    const descElement = document.createElement("p");
    descElement.textContent = `${desc}`;
    const aElement = document.createElement("a");
    aElement.textContent = "Get it Now >";
    aElement.href = "#";
    textContainer.appendChild(titleElement);
    textContainer.appendChild(descElement);
    textContainer.appendChild(aElement);
    productContainer.appendChild(imageContainer);
    productContainer.appendChild(textContainer);
    contentContainer.appendChild(productContainer);
  });
}

// Functions which return the div size type

function changeBoolean2(index) {
  let boolArray = [false, false, true, false, false];
  let result = boolArray[index];
  index = index + 1;
  return result;
}

function changeBoolean3(index) {
  let boolArray = [false, true, true, false];
  let result = boolArray[index];
  index = index + 1;
  return result;
}
