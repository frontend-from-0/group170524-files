const params = new URLSearchParams(window.location.search);

const postId = params.get('id');

console.log(params, postId);


// TODO
// Make API request to fetch the post with the given ID (Get request)
// Prefill the form in update-post.html with the post title and body


// When a user submits the form, validate the form data
// If form data is not valid, show error messages
// If form data is valid, make an API request to update the post (PUT request)
