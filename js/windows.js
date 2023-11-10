function myButton() {
    location.replace("https://www.microsoft.com/en-in/windows/get-windows-11")
  }
  function myButtonCopilot() {
    location.replace("https://www.microsoft.com/en-in/windows/copilot-ai-features")
  }
  function exploreButton(){
    location.replace("https://www.microsoft.com/en-in/windows/sync-across-your-devices")
  }
  function helpMeChoose(){
    location.replace("https://www.microsoft.com/en-in/windows/sync-across-your-devices")
  }

// const url = "https://dummyjson.com/products";
// fetch(url)
//   .then((response) => {
//     let i = 0;
//     if (!response.ok) {
//       throw new Error("Network response was not OK");
//     }
//     return response.json();
//   })
//   //   .then(data => {
//   //     for (let i = 0; i <= 0; i++) {
//   //     const titleContent = document.querySelector('.container--b1');
//   //     const titleImage = document.createElement('img');
//   //     titleImage.setAttribute('src',data.products[i].images[0]);
//   //     titleImage.classList.add('img');
//   //     titleContent.appendChild(titleImage);
//   //     }

//   // }
//   //   )
//   //   .catch(error => {
//   //     console.error('Fetch error:', error.message);
//   //   });
//   .then((data) => {
//     const copilotContainer = document.querySelector(".image-container-b1");
//     // const copilotdetails = document.querySelector(".copilot-details");
//     // Generate a random index to select a different image each time
//     for(let i=0;i<3;i++){
     
//     const randomIndex = Math.floor(Math.random() * data.products.length);

//     const copilotImages = document.createElement("img");
//     copilotImages.setAttribute("src", data.products[randomIndex].thumbnail); // Assuming images is an array
//     copilotImages.classList.add("img");
//     copilotContainer.appendChild(copilotImages);}
//   })
//   .catch((error) => {
//     console.error("Fetch error:", error.message);
//   });
