const url = "https://dummyjson.com/products";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json();
  })
  .then((data) => {
    //Fetching images ,headings,paragraphs for copilot section
    const copilotContainer = document.querySelector(".copilot-container");
    const copilotdetails = document.querySelector(".copilot-details");
    // Generate a random index to select a different image each time
    const randomIndex = Math.floor(Math.random() * 10);

    const copilotImages = document.createElement("img");
    copilotImages.setAttribute("src", data.products[randomIndex].thumbnail);
    copilotImages.classList.add("img");
    copilotContainer.appendChild(copilotImages);

    const copilotheading = document.createElement("h1");
    copilotheading.textContent = data.products[randomIndex].title;
    copilotheading.classList.add("h1");
    copilotdetails.appendChild(copilotheading);

    const copilotparagraph = document.createElement("p");
    copilotparagraph.textContent = data.products[randomIndex].description;
    copilotparagraph.classList.add("p");
    copilotdetails.appendChild(copilotparagraph);
    //Fetching images ,headings,paragraphs for explore section

    const exploreContainer = document.querySelector(".explore-container");
    for (let i = 0; i <= 3; i++) {
      const randomIndexNumber = Math.floor(Math.random() * 6);
      const exploreminicontainer = document.createElement("div");
      exploreminicontainer.classList.add("explore-minicontainer");
      const exploreitems = document.createElement("div");
      exploreitems.classList.add("explore-items");
      const exploreimages = document.createElement("img");
      exploreimages.setAttribute(
        "src",
        data.products[randomIndexNumber].thumbnail
      );
      exploreimages.classList.add("explore-images");
      exploreitems.appendChild(exploreimages);
      const exploredetails = document.createElement("div");
      exploredetails.classList.add("explore-details");
      const exploreheading = document.createElement("h2");
      exploreheading.textContent = data.products[randomIndexNumber].title;
      exploredetails.appendChild(exploreheading);
      const exploreparagraph = document.createElement("p");
      exploreparagraph.textContent = data.products[randomIndexNumber].brand;
      exploredetails.appendChild(exploreparagraph);
      exploreitems.appendChild(exploredetails);
      exploreminicontainer.appendChild(exploreitems);
      exploreContainer.appendChild(exploreminicontainer);
    }
  })
  .catch((error) => {
    console.error("Fetch error:", error.message);
  });
