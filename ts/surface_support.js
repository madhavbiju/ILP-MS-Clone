"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiURL = "https://mocki.io/v1/81027dee-fbf7-422f-8463-4dc647e0e5ff";
// Fetch data from the API
fetch(apiURL)
    .then(function (response) {
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
})
    .then(function (data) {
    var products = data.products.slice(0, 7); // Limit to 7 images
    var container = document.getElementById("dynamicDivsContainer");
    var row = document.createElement("div");
    row.classList.add("row1");
    products.forEach(function (product, index) {
        var imageContainer = createImageContainer(product.thumbnail, product.title);
        row.appendChild(imageContainer);
        // If 4 images have been added or it's the last image, create a new row
        if ((index + 1) % 4 === 0 || index === products.length - 1) {
            container.appendChild(row);
            // Create a new row for the next set of images
            if (index !== products.length - 1) {
                row = document.createElement("div");
                row.classList.add("row1");
            }
        }
    });
})
    .catch(function (error) {
    console.error(error.message);
});
// Fetch data for mid container
var apiResponse = "https://mocki.io/v1/24258fb9-896e-4d27-b35b-e934e8b0055f";
fetch(apiResponse)
    .then(function (response) {
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
})
    .then(function (data) {
    var products = data.products.slice(0, 7); // Limit to 7 images
    var container = document.getElementById("dynamicDivsContainerMid");
    var row = document.createElement("div");
    row.classList.add("row1");
    products.forEach(function (product, index) {
        var imageContainer = createImageContainer(product.thumbnail, product.title);
        row.appendChild(imageContainer);
        // If 4 images have been added or it's the last image, create a new row
        if ((index + 1) % 4 === 0 || index === products.length - 1) {
            container.appendChild(row);
            // Create a new row for the next set of images
            if (index !== products.length - 1) {
                row = document.createElement("div");
                row.classList.add("row1");
            }
        }
    });
})
    .catch(function (error) {
    console.error(error.message);
});
// Function to create an image container
function createImageContainer(imageUrl, title) {
    var imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    var image = document.createElement("img");
    image.src = imageUrl;
    var titleElement = document.createElement("a");
    titleElement.textContent = title;
    titleElement.href = "#";
    imageContainer.appendChild(image);
    imageContainer.appendChild(titleElement);
    return imageContainer;
}
function performSearch() {
    // Get the search input value
    var searchInput = document.getElementById('search-input').value;
    // Construct the search query URL
    var searchQuery = encodeURIComponent(searchInput);
    var searchURL = "https://support.microsoft.com/en-US/search/results?query=".concat(searchQuery, "&isEnrichedQuery=true");
    // Redirect the user to the search page
    window.location.href = searchURL;
}
