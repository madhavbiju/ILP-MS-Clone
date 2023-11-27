import { Data,Product } from "../types/surface_support";
const apiURL: string = "https://mocki.io/v1/81027dee-fbf7-422f-8463-4dc647e0e5ff";

// Fetch data from the API
fetch(apiURL)
  .then((response: Response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json() as Promise<Data>;
  })
  .then((data: { products: { thumbnail: string; title: string }[] }) => {
    const products = data.products.slice(0, 7); // Limit to 7 images
    const container = document.getElementById("dynamicDivsContainer") as HTMLDivElement;
    let row = document.createElement("div") as HTMLDivElement;
    row.classList.add("row1");

    products.forEach((product, index) => {
      const imageContainer = createImageContainer(
        product.thumbnail,
        product.title
      );
      row.appendChild(imageContainer);

      // If 4 images have been added or it's the last image, create a new row
      if ((index + 1) % 4 === 0 || index === products.length - 1) {
        container.appendChild(row);

        // Create a new row for the next set of images
        if (index !== products.length - 1) {
          row = document.createElement("div") as HTMLDivElement;
          row.classList.add("row1");
        }
      }
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

// Fetch data for mid container
const apiResponse: string = "https://mocki.io/v1/24258fb9-896e-4d27-b35b-e934e8b0055f";
fetch(apiResponse)
  .then((response: Response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json() as Promise<Data>;
  })
  .then((data: { products: { thumbnail: string; title: string }[] }) => {
    const products = data.products.slice(0, 7); // Limit to 7 images
    const container = document.getElementById("dynamicDivsContainerMid") as HTMLDivElement;
    let row = document.createElement("div") as HTMLDivElement;
    row.classList.add("row1");

    products.forEach((product, index) => {
      const imageContainer = createImageContainer(
        product.thumbnail,
        product.title
      );
      row.appendChild(imageContainer);

      // If 4 images have been added or it's the last image, create a new row
      if ((index + 1) % 4 === 0 || index === products.length - 1) {
        container.appendChild(row);

        // Create a new row for the next set of images
        if (index !== products.length - 1) {
          row = document.createElement("div") as HTMLDivElement;
          row.classList.add("row1");
        }
      }
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

// Function to create an image container
function createImageContainer(imageUrl: string, title: string): HTMLDivElement {
  const imageContainer = document.createElement("div") as HTMLDivElement;
  imageContainer.classList.add("image-container");

  const image = document.createElement("img") as HTMLImageElement;
  image.src = imageUrl;

  const titleElement = document.createElement("a") as HTMLAnchorElement;
  titleElement.textContent = title;
  titleElement.href = "#";

  imageContainer.appendChild(image);
  imageContainer.appendChild(titleElement);

  return imageContainer;
}

function performSearch(): void {
  // Get the search input value
  const searchInput = (document.getElementById('search-input') as HTMLInputElement).value;

  // Construct the search query URL
  const searchQuery = encodeURIComponent(searchInput);
  const searchURL = `https://support.microsoft.com/en-US/search/results?query=${searchQuery}&isEnrichedQuery=true`;

  // Redirect the user to the search page
  window.location.href = searchURL;
}
