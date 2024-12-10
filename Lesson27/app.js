/* 
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method

Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response. 
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/

const URL = "https://jsonplaceholder.typicode.com/posts";

const fetchButton = document.getElementById("fetch-button");
fetchButton.addEventListener("click", getPosts);

function getPosts() {
  const postsContainer = document.getElementById("posts-container");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      console.log(posts);

      posts.map((post) => {
        console.log(post);
        const listItem = document.createElement("li");
        const headerOfItem = document.createElement("h2");
        const paragraphOfItem = document.createElement("p");
        headerOfItem.textContent= post.title;
        paragraphOfItem.textContent=post.body;
        listItem.classList.add("post");
        headerOfItem.classList.add("post-title");
        paragraphOfItem.classList.add("post-body");

        const buttons = document.createElement('div');
        buttons.classList.add('buttons-container');

        // Add update button
        const updateButton = document.createElement('a');
        updateButton.textContent = 'Update post';
        updateButton.classList.add('button', 'button--success');
        updateButton.href = `./update-post.html?id=${post.id}`;
        
        // Add delete button

        buttons.appendChild(updateButton);

        listItem.appendChild(headerOfItem);
        listItem.appendChild(paragraphOfItem);
        listItem.appendChild(buttons);
        
        postsContainer.appendChild(listItem);
      });
    });
}

function deletePost() {
  // Make an API request to delete the post with the given ID (DELETE request)
}
