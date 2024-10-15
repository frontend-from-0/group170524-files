const entireHtml = document.documentElement.outerHTML;

const bodyHtml = document.body.innerHTML;

const heaidng = document.getElementById("heading");
heading.textContent = "This is new Heading to our Page";

const containerElements = document.getElementsByClassName("container");
console.log(containerElements);
for (let i = 0; i < containerElements.length; i++) {
  console.log(containerElements[i].classList.value);
  containerElements[i].classList.remove("test");
}

const paragraphElements = document.getElementsByTagName("p");
console.log(paragraphElements);
for (let i = 0; i < paragraphElements.length; i++) {
  paragraphElements[i].style.fontSize = "12px";
  // Using classes to style elements in JS is better than using inline styles (' paragraphElements[i].style.fontSize = "12px";)
  paragraphElements[i].classList.add("text-bold");
}
// Selected a collection of p elements
// Loop through the collection
// Change font-size of each elements to 12px

const element = document.querySelector(".row");
console.log(element.textContent);
element.classList.add("color-red")

const anchorTagElement = document.querySelector(".row > a");
anchorTagElement.classList.add("color-red");
