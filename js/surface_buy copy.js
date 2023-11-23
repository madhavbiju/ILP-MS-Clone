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

