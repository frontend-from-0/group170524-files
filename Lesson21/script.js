document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const todoInputElement = document.getElementById("todoInput");
    console.log(todoInputElement.value);

    const toDoListItemElement = document.createElement("li"); // Node
    toDoListItemElement.textContent = todoInputElement.value;

    

    const toDoListElement = document.getElementById("toDoList");
    toDoListElement.appendChild(toDoListItemElement);

    toDoListElement.addEventListener(
      'click',
      function() {
        toDoListElement.classList.toggle('completed');
      }
    );
  });
