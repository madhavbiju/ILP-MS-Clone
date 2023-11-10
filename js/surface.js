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
    products.slice(0, 2).forEach((product) => {
      console.log(product.thumbnail);
      var container = document.querySelector(`.column2`);
      //   var container = document.getElementsByClassName(column2);
      var row = document.createElement("div");
      row.classList.add("row1");
      //   const productImage = product.thumbnail;
      var image = document.createElement("img");
      image.src = product.thumbnail;
      row.appendChild(image);
      container.appendChild(row);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

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
    products.slice(0, 4).forEach((product) => {
      console.log(product.thumbnail);
      var lapcontainer = document.querySelector(`.laptop-column1`);
      //   var container = document.getElementsByClassName(column2);
      var laprow = document.createElement("div");
      laprow.classList.add("lap1");
      //   const productImage = product.thumbnail;
      var lapimage = document.createElement("img");
      lapimage.src = product.thumbnail;
      laprow.appendChild(lapimage);
      lapcontainer.appendChild(laprow);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

//FETCH APIs for Navigation bar
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
// END OF API CALL FOR NAVIGATION BAR
