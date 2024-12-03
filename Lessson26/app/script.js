const ACCESS_KEY = "*************REMOVED*****************";
const fetchDataButton = document.getElementById("fetchDataButton");

fetchDataButton.addEventListener("click", () => {
  document.getElementById("image-container").innerText = "";

  fetch(`https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&count=10`)
    .then((response) => {
      console.log('Response:', response);
      if (!response.ok) {
        throw new Error("Network response was not ok", response.status);
      }
      // Always add return keyword when using multiline arrow functions!
      return response.json();
    })
    .then((images) => {
      images.map(image => {
        const imageElement = createImageElement(image.urls.small, image.alt_description);
        document.getElementById("image-container").appendChild(imageElement);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function createImageElement(url, altText) {
  const imageElement = document.createElement("img");
  imageElement.src = url;
  imageElement.alt = altText;
  imageElement.classList.add("image");
  return imageElement;
}

// axios library that simplifies making API requests
