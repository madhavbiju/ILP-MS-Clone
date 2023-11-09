
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
