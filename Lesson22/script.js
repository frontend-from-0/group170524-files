window.addEventListener("load", function () {
  let currentImage = 0;
  const imageList = document.querySelectorAll(".carousel-container img");

  document
    .getElementById("prev-btn")
    .addEventListener("click", () => handlePrevClick());

  document
    .getElementById("next-btn")
    .addEventListener("click", () => handleNextClick());

  function handleNextClick() {
    for (let i = 0; i < imageList.length; i++) {
      imageList[i].classList.remove("active");
    }
    if (currentImage === imageList.length - 1) {
      currentImage = 0;
    } else {
      currentImage++;
    }

    imageList[currentImage].classList.add("active");
  }

  function handlePrevClick() {
    console.log("Prev button clicked");
  }


  const carouselIntervalId = setInterval(handleNextClick, 3000);

  // Example of clearing interval. Will not work as the moment since we haven't added a stopButton element yet.
  // stopButton.addEventListener("click", () => {
  //   clearInterval(carouselIntervalId);
  // });
});
