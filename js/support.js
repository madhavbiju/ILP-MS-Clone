// Defining URLs
const listUrl = "https://picsum.photos/list";
const imageUrl = "https://picsum.photos/seed/";
const textContentUrl = "https://jsonplaceholder.typicode.com/posts";
// Function to fetch a random post from the provided text content URL
const fetchRandomPost = async () => {
  const response = await fetch(textContentUrl);
  // Check if the network response is OK
  if (!response.ok) {
    throw new Error("Network response was not OK");
  }
  const data = await response.json();
  // Generate a random index to select a random post
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
};
// Function to fetch data from different URLs and update the UI
const fetchData = async () => {
  try {
    const [imageListResponse, copilotPost] = await Promise.all([
      fetch(listUrl),
      fetchRandomPost(),
    ]);

    if (!imageListResponse.ok) {
      throw new Error("Network response was not OK");
    }

    const imageList = await imageListResponse.json();

    // Copilot section
    const copilotContainer = document.querySelector(".copilot-container");
    const copilotImage = copilotContainer.querySelector(".copilot-image img");
    const copilotDetails = document.querySelector(".copilot-details");
    // Update copilot section with a random image and details from a random post
    const randomIndex = Math.floor(Math.random() * imageList.length);
    copilotImage.src = `${imageUrl}${imageList[randomIndex].id}/400/600`;
    copilotDetails.querySelector("h1").textContent = copilotPost.title;
    copilotDetails.querySelector("p").textContent = copilotPost.body;
    const copilotLink = copilotDetails.querySelector(".copilot-link");
    copilotLink.textContent = "EXPLORE WHAT'S POSSIBLE >";

    // Explore section
    const exploreContainer = document.querySelector(".explore-container");
    // Create four Explore section items
    for (let i = 0; i < 4; i++) {
      const exploreminicontainer = document.createElement("div");
      exploreminicontainer.classList.add("explore-minicontainer");

      const exploreitems = document.createElement("div");
      exploreitems.classList.add("explore-items");

      const exploreimages = document.createElement("img");
      const randomIndexNumber1 = Math.floor(Math.random() * imageList.length);
      // Create an image element and set its source
      exploreimages.setAttribute(
        "src",
        `${imageUrl}${imageList[randomIndexNumber1].id}/400/600`
      );
      exploreimages.classList.add("explore-images");
      exploreitems.appendChild(exploreimages);

      const exploredetails = document.createElement("div");
      exploredetails.classList.add("explore-details");
      // Fetch a random post for Explore section
      const explorePost = await fetchRandomPost();

      const exploreheading = document.createElement("h2");
      exploreheading.textContent = explorePost.title;
      exploredetails.appendChild(exploreheading);

      const exploreparagraph = document.createElement("p");
      exploreparagraph.textContent = explorePost.body;
      exploredetails.appendChild(exploreparagraph);

      const exploreLink = document.createElement("h4");
      exploreLink.textContent = "GET THE DETAILS >";
      exploreLink.classList.add("explore-link");
      exploredetails.appendChild(exploreLink);

      exploreitems.appendChild(exploredetails);
      exploreminicontainer.appendChild(exploreitems);
      exploreContainer.appendChild(exploreminicontainer);
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
};
// Call the fetchData function to initiate data fetching and UI update
fetchData();
