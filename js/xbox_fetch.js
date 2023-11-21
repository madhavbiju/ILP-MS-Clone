const request = fetch("https://api.imgflip.com/get_memes");

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
const randomInteger = Math.floor(Math.random() * 70);

// Function which fills up the first Section
function fillContainer1(data) {
  const productsArray = data.data.memes;
  console.log(productsArray.length);
  const contentContainer = document.querySelector(".content-container");
  let isBigContainer = true;
  productsArray
    .slice(randomInteger, randomInteger + 4)
    .forEach((product, index) => {
      const title = product.name;
      const desc = "Meme Id: " + product.id;
      const imageUrl = product.url;
      // Check whether the next Div to come is big or not
      const productContainer = document.createElement("div");
      productContainer.classList.add(
        isBigContainer ? "bigContainer" : "smallContainer"
      );
      const imageContainer = document.createElement("div");
      imageContainer.classList.add(
        isBigContainer ? "bigContainer-bg" : "smallContainer-left"
      );
      const image = document.createElement("img");
      image.src = imageUrl;
      imageContainer.appendChild(image);
      const textContainer = document.createElement("div");
      textContainer.classList.add(
        isBigContainer ? "bigContainer-fg" : "smallContainer-right"
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

// Function which fills up the second Section
function fillContainer2(data) {
  const productsArray = data.data.memes;
  const contentContainer = document.querySelector(".content-container2");
  let isBigContainer = changeBoolean2();
  let index = 0;
  productsArray
    .slice(randomInteger + 4, randomInteger + 9)
    .forEach((product, index) => {
      const title = product.name;
      const desc = "Meme Id: " + product.id;
      const imageUrl = product.url;
      let isWideContainer = changeBoolean2(index); // Call function which returns the type (small/wide) of div to be made
      const productContainer = document.createElement("div");
      productContainer.classList.add(
        isWideContainer ? "wideContainer" : "smallContainer"
      );
      const imageContainer = document.createElement("div");
      imageContainer.classList.add(
        isWideContainer ? "wideContainer-bg" : "smallContainer-left"
      );
      const image = document.createElement("img");
      image.src = imageUrl;
      imageContainer.appendChild(image);
      const textContainer = document.createElement("div");
      textContainer.classList.add(
        isWideContainer ? "wideContainer-fg" : "smallContainer-right"
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

// Function which fills up the third Section
function fillContainer3(data) {
  const productsArray = data.data.memes;
  const contentContainer = document.querySelector(".content-container3");
  let index = 0;
  productsArray
    .slice(randomInteger + 9, randomInteger + 13)
    .forEach((product, index) => {
      const title = product.name;
      const desc = "Meme Id: " + product.id;
      const imageUrl = product.url;
      let isBigContainer = changeBoolean3(index); // Call function which returns the type (small/big) of div to be made
      const productContainer = document.createElement("div");
      productContainer.classList.add(
        isBigContainer ? "bigContainer" : "smallContainer"
      );
      const imageContainer = document.createElement("div");
      imageContainer.classList.add(
        isBigContainer ? "bigContainer-bg" : "smallContainer-left"
      );
      const image = document.createElement("img");
      image.src = imageUrl;
      imageContainer.appendChild(image);
      const textContainer = document.createElement("div");
      textContainer.classList.add(
        isBigContainer ? "bigContainer-fg" : "smallContainer-right"
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
