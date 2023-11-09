const pexelsApiKey = "WMNynpV8PSJVZhHrDiErkhOjr0bBPS0EBVCLBEpO7aGuBJHsntnVSjKX";
const pexelsApiUrl = "https://api.pexels.com/v1/curated?per_page=3"; // You can adjust the query parameters as needed.
const quotableApiUrl = "https://api.quotable.io/quotes?limit=3";

let imageUrls = []; // Store photo URLs in an array
let quoteSlides = []; // Store quotes in an array

// Fetch data from the Pexels API and create image slides
const fetchPexelsData = async () => {
  try {
    const response = await fetch(pexelsApiUrl, {
      method: "GET",
      headers: {
        Authorization: pexelsApiKey,
      },
    });
    const data = await response.json();
    data.photos.forEach((photo) => {
      imageUrls.push(photo.src.large); // Store the photo URL in the array
    });
  } catch (error) {
    console.error("Error fetching data from Pexels API:", error);
  }
};

// Fetch data from the Quotable API
const fetchQuotableData = async () => {
  try {
    const response = await fetch(quotableApiUrl);
    const data = await response.json();
    data.results.forEach((quote) => {
      quoteSlides.push(quote.content); // Store the quote in the array
    });
  } catch (error) {
    console.error("Error fetching data from Quotable API:", error);
  }
};

// Use async/await to fetch data from both APIs
const fetchData = async () => {
  await fetchPexelsData();
  await fetchQuotableData();

  // Now you can access imageUrls and quoteSlides arrays
  console.log("Image URLs:", imageUrls);
  console.log("Quote Slides:", quoteSlides);
  const slideshow = document.querySelector(".slideshow");
  for (let i = 0; i < imageUrls.length; i++) {
    const slidesContainer = document.createElement("div");
    slidesContainer.classList.add("slides-container");
    const quoteSlide = document.createElement("div");
    quoteSlide.classList.add("overlay");

    const img = document.createElement("img");
    img.classList.add("slides");
    const overlay = document.createElement("p");
    overlay.classList.add("overlay-content");
    overlay.textContent = quoteSlides[i];
    img.src = imageUrls[i];
    console.log(img.src);

    quoteSlide.appendChild(overlay);
    slidesContainer.appendChild(img);
    slidesContainer.appendChild(quoteSlide);
    slideshow.appendChild(slidesContainer);
  }
  carousel();
};

// Call the function to start fetching data
fetchData();
