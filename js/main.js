// Function to fetch images from an API
async function fetchImages() {
    try {
      const response = await fetch('https://dummyjson.com/products'); // Replace with the actual image API endpoint
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }
  
  // Function to create dynamic divs with fetched images
  async function createDynamicDivs() {
    const container = document.getElementById('divContainer');
    const images = await fetchImages();
  
    if (images) {
      images.forEach(image => {
        const div = document.createElement('div');
        div.classList.add('dynamicDiv');
        div.style.backgroundImage = `url(${image.imageUrl})`; // Assuming the API returns an 'imageUrl' property
  
        // You can add additional styles or content to the created divs
        // For example:
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.backgroundSize = 'cover';
        div.style.margin = '10px';
        // Additional styles as needed
  
        container.appendChild(div);
      });
    }
  }
  
  // Call the function to create dynamic divs with images
  createDynamicDivs();
  