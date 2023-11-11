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

// async function gadgets() {
//   try {
//     // USING TRY CATCH
//     const response = await fetch("https://api.escuelajs.co/api/v1/products");
//     const data = await response.json();
//     var container = document.querySelector(".products");
//     var divItem = document.createElement("div");
//     divItem.className = "products-items";
//     for (let i = 0; i < 4; i++) {
//       var products = document.createElement("div");
//       products.className = "products-items-list";
//       var productImage = document.createElement("img");
//       productImage = data[i].images[0];
//       var productTitle = document.createElement("h1");
//       productTitle = data[i].title;
//       var productInfo = document.createElement("p");
//       productInfo = data[i].description;
//       var productLink = document.createElement("a");
//       productLink = "Learn More >";
//       divItem.appendChild(products);
//       divItem.appendChild(productImage);
//       divItem.appendChild(productTitle);
//       divItem.appendChild(productInfo);
//       divItem.appendChild(productLink);
//     }
//     container.appendChild(divItem);
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//   }
// }

// gadgets();
// END OF API CALL FOR PRODUCTS
