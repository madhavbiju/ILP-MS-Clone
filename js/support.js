const listUrl = "https://picsum.photos/list";
const imageUrl = "https://picsum.photos/seed/";
fetch(listUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json();
  })
  .then((data) => {
    //Fetching images, headings, paragraphs for copilot section
    const copilotContainer = document.querySelector(".copilot-container");
    const copilotImage = copilotContainer.querySelector(".copilot-image img");
    const copilotDetails = document.querySelector(".copilot-details");

    const randomIndex = Math.floor(Math.random() * data.length);

    copilotImage.src = `${imageUrl}${data[randomIndex].id}/400/600`;

    const copilotHeading = copilotDetails.querySelector("h1");
    copilotHeading.textContent = data[randomIndex].author;

    const copilotParagraph = copilotDetails.querySelector("p");
    copilotParagraph.textContent = data[randomIndex].author;

    const copilotLink = copilotDetails.querySelector(".copilot-link");
    copilotLink.textContent = "View on Picsum";
    copilotLink.href = `https://picsum.photos/id/${data[randomIndex].id}/full`;

    const exploreContainer = document.querySelector(".explore-container");
    for (let i = 0; i <= 3; i += 2) {
      const randomIndexNumber1 = Math.floor(Math.random() * data.length);
      const randomIndexNumber2 = Math.floor(Math.random() * data.length);

      const rowContainer = document.createElement("div");
      rowContainer.classList.add("row-container");

      const exploreminicontainer1 = document.createElement("div");
      exploreminicontainer1.classList.add("explore-minicontainer");

      const exploreitems1 = document.createElement("div");
      exploreitems1.classList.add("explore-items");

      const exploreimages1 = document.createElement("img");
      exploreimages1.setAttribute(
        "src",
        `${imageUrl}${data[randomIndexNumber1].id}/400/600`
      );
      exploreimages1.classList.add("explore-images");
      exploreitems1.appendChild(exploreimages1);

      const exploredetails1 = document.createElement("div");
      exploredetails1.classList.add("explore-details");

      const exploreheading1 = document.createElement("h2");
      exploreheading1.textContent = data[randomIndexNumber2].author;
      exploredetails1.appendChild(exploreheading1);

      const exploreparagraph1 = document.createElement("p");
      exploreparagraph1.textContent = data[randomIndexNumber1].author;
      exploredetails1.appendChild(exploreparagraph1);

      exploreitems1.appendChild(exploredetails1);
      exploreminicontainer1.appendChild(exploreitems1);

      const exploreminicontainer2 = document.createElement("div");
      exploreminicontainer2.classList.add("explore-minicontainer");

      const exploreitems2 = document.createElement("div");
      exploreitems2.classList.add("explore-items");

      const exploreimages2 = document.createElement("img");
      exploreimages2.setAttribute(
        "src",
        `${imageUrl}${data[randomIndexNumber2].id}/400/600`
      );
      exploreimages2.classList.add("explore-images");
      exploreitems2.appendChild(exploreimages2);

      const exploredetails2 = document.createElement("div");
      exploredetails2.classList.add("explore-details");

      const exploreheading2 = document.createElement("h2");
      exploreheading2.textContent = data[randomIndex].author;
      exploredetails2.appendChild(exploreheading2);

      const exploreparagraph2 = document.createElement("p");
      exploreparagraph2.textContent = data[randomIndexNumber2].author;
      exploredetails2.appendChild(exploreparagraph2);

      exploreitems2.appendChild(exploredetails2);
      exploreminicontainer2.appendChild(exploreitems2);

      rowContainer.appendChild(exploreminicontainer1);
      rowContainer.appendChild(exploreminicontainer2);

      exploreContainer.appendChild(rowContainer);
    }
  })
  .catch((error) => {
    console.error("Fetch error:", error.message);
  });
