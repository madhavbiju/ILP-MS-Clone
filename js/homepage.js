// BEGINNING OF SLIDESHOW

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
// ENDING OF SLIDESHOW
// BEGINNING OF API CALL FOR PRODUCTS

async function gadgets() {
  try {
    // USING TRY CATCH
    const response = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos"
    );
    const data = await response.json();
    const productsArray = data.photos;
    console.log(productsArray);
    var container = document.querySelector(".products");
    var divItem = document.createElement("div");
    divItem.className = "products-items";
    console.log(data[0]);
    for (let i = 0; i < 4; i++) {
      var products = document.createElement("div");
      products.className = "products-items-list";
      var productImage = document.createElement("img");
      productImage.src = productsArray[i].url;
      var productTitle = document.createElement("h1");
      productTitle.textContent = productsArray[i].title;
      var productInfo = document.createElement("p");
      productInfo.textContent = productsArray[i].description;
      var productLink = document.createElement("a");
      productLink.textContent = "Learn More >";

      products.appendChild(productImage);
      products.appendChild(productTitle);
      products.appendChild(productInfo);
      products.appendChild(productLink);
      divItem.appendChild(products);
    }
    container.appendChild(divItem);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

gadgets();
// END OF API CALL FOR PRODUCTS
