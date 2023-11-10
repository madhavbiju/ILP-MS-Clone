const apiURL = "https://dummyjson.com/products";
fetch(apiURL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    // if (data.status === "success") {
    const products = data.products;
    products.slice(0, 8).forEach((product) => {
      //   console.log(product.thumbnail);
      var mainContainer = document.querySelector(`.container`);
      //   var container = document.getElementsByClassName(column2);
      var subdiv = document.createElement("div");

      //   row.classList.add("row1");
      //   const productImage = product.thumbnail;
      var image = document.createElement("img");
      image.src = product.thumbnail;
      var subtxt = document.createElement("h3");
      subtxt.innerHTML = product.title;

      subdiv.appendChild(image);
      subdiv.appendChild(subtxt);
      mainContainer.appendChild(subdiv);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

async function asyncFunc() {
  try {
    // USING TRY CATCH
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const productsArray = data.products;
    console.log(productsArray);

    var container = document.querySelector(".dropdown-content"); // Assuming 'sectionMain' is the container you mentioned
    var divItem = document.createElement("div");
    divItem.className = "row";
    for (let i = 0, j = 3; i < 18, j < 21; i += 3, j += 3) {
      var productDetails = document.createElement("div");
      productDetails.className = "column";
      var productDetailsItem = document.createElement("h3");
      productDetailsItem.textContent = productsArray[i].category;
      productDetails.appendChild(productDetailsItem);
      productsArray.slice(i, j).forEach((products) => {
        var productLink = document.createElement("a");
        productLink.href = "#";
        productLink.textContent = products.title;

        productDetails.appendChild(productLink);
        divItem.appendChild(productDetails);
        container.appendChild(divItem);
      });
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

asyncFunc();
// // END OF API CALL FOR NAVIGATION BAR
