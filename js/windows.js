function myButton() {
  location.replace("https://www.microsoft.com/en-in/windows/get-windows-11");
}
function myButtonCopilot() {
  location.replace(
    "https://www.microsoft.com/en-in/windows/copilot-ai-features"
  );
}
function exploreButton() {
  location.replace(
    "https://www.microsoft.com/en-in/windows/sync-across-your-devices"
  );
}
function helpMeChoose() {
  location.replace(
    "https://www.microsoft.com/en-in/windows/sync-across-your-devices"
  );
}
const request = fetch(
  "https://dummyjson.com/products?limit=8&select=title,description,thumbnail,brand"
);

request
  .then((response) => response.json())
  .then((data) => {
    const productsArray = data.products;
    console.log(data.products);
    const contentContainer = document.querySelector(".image-container-b");

    productsArray.slice(0, 3).forEach((product) => {
      const desc = product.description;
      const imageUrl = product.thumbnail;
      const imagecontainerb1 = document.createElement("div");
      imagecontainerb1.classList.add("image-container-b1");
      const descElement = document.createElement("p");
      descElement.textContent = `${desc}`;
      const aElement = document.createElement("a");
      aElement.textContent = "See what's New >";
      aElement.href = "#";

      const image = document.createElement("img");
      image.classList.add("img-b");
      image.src = imageUrl;
      imagecontainerb1.appendChild(image);
      imagecontainerb1.appendChild(descElement);
      imagecontainerb1.appendChild(aElement);
      contentContainer.appendChild(imagecontainerb1);
    });

    //---------

    const containeri = document.querySelector(".container--i");

    productsArray.slice(5, 8).forEach((product) => {
      const desc = product.description;
      const imageUrl = product.thumbnail;
      const imagecontaineri= document.createElement("div");
      imagecontaineri.classList.add("image-container-i");
      const descElement = document.createElement("p");
      descElement.textContent = `${desc}`;
      const aElement = document.createElement("a");
      aElement.textContent = "Explore Windows app >";
      aElement.href = "#";

      const image = document.createElement("img");
      image.classList.add("img-i");
      image.src = imageUrl;
      imagecontaineri.appendChild(image);
      imagecontaineri.appendChild(descElement);
      imagecontaineri.appendChild(aElement);
      containeri.appendChild(imagecontaineri);


     
    

    });
    //--------------

   
      // const product = data.products[8]; // Select the first product
      // const contentContainerc = document.querySelector(".container--c");

      // const titleElement = document.createElement("div");
      // titleElement.classList.add("title");
      // titleElement.textContent = `${product.title}`;

      // const imagecontainerc = document.createElement("div");
      // imagecontainerc.classList.add("image-container-c");
      
      // const image = document.createElement("img");
      // image.classList.add("img-c");
      // image.src = product.thumbnail;

      // const descriptionContainer = document.createElement("div");
      // descriptionContainer.classList.add("description-container");

      // const gradientLine = document.createElement("div");
      // gradientLine.classList.add("gradient-line");

      // const descElement = document.createElement("p");
      // descElement.classList.add("description");
      // descElement.textContent = `${product.description}`;

      // const learnMoreButton = document.createElement("button");
      // learnMoreButton.classList.add("learn-more-button");
      // learnMoreButton.textContent = "Learn More";

      // imagecontainerc.appendChild(image);
      // descriptionContainer.appendChild(gradientLine);
      // descriptionContainer.appendChild(titleElement);
      // descriptionContainer.appendChild(descElement);
      // descriptionContainer.appendChild(learnMoreButton);
      // contentContainerc.appendChild(imagecontainerc);
      // contentContainerc.appendChild(descriptionContainer);
    
  })

  
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });



 
