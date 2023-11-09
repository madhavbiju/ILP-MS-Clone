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
