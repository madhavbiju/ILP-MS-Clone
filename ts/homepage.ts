// BEGINNING OF SLIDESHOW

let slideIndex: number = 0;
showSlides();

function showSlides(): void {
  let i: number;
  let slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    (slides[i] as HTMLElement).style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  (slides[slideIndex - 1] as HTMLElement).style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
// ENDING OF SLIDESHOW
// BEGINNING OF API CALL FOR PRODUCTS

async function gadgets(): Promise<void> {
  try {
    const response: Response = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos"
    );
    const data: any = await response.json();
    const productsArray: Array<any> = data.photos;
    console.log(productsArray);
    const container: HTMLElement | null = document.querySelector(".products");
    if (container) {
      const divItem: HTMLDivElement = document.createElement("div");
      divItem.className = "products-items";
      console.log(data[0]);
      for (let i: number = 0; i < 4; i++) {
        const products: HTMLDivElement = document.createElement("div");
        products.className = "products-items-list";
        const productImage: HTMLImageElement = document.createElement("img");
        productImage.src = productsArray[i].url;
        const productTitle: HTMLHeadingElement = document.createElement("h1");
        productTitle.textContent = productsArray[i].title;
        const productInfo: HTMLParagraphElement = document.createElement("p");
        productInfo.textContent = productsArray[i].description;
        const productLink: HTMLAnchorElement = document.createElement("a");
        productLink.textContent = "Learn More >";

        products.appendChild(productImage);
        products.appendChild(productTitle);
        products.appendChild(productInfo);
        products.appendChild(productLink);
        divItem.appendChild(products);
      }
      if (container) {
        container.appendChild(divItem);
      }
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

gadgets();
// END OF API CALL FOR PRODUCTS
