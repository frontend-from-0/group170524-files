// 1. Convert the function below into asyncrounous function using async/await and try/catch syntax.
// async function fetchPosts () {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     if (!response.ok) {
//       throw new Error(`Failed to fetch posts. Status: ${response.status}`);
//     }
//     const posts = await response.json();
//     console.log(response, posts);
//   }
//   catch(error) {
//     console.error(error);
//   }
// };

// fetchPosts();

// 2. Convert the function below into asyncrounous function using async/await and try/catch syntax.
// const fetchData = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve('Data fetched successfully!');
// 		}, 2000);
// 	});
// };

// (async () => {
//   try {
//     const result = await fetchData();
//     console.log(result);
//   }
//   catch(error) {
//     console.error(error);
//   }
// })();

// 3. Convert the function below into asyncrounous function using async/await and try/catch syntax.
// const fetchUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) {
//       throw new Error(`Failed to fetch users. Status: ${response.status}`);
//     }
//     const users = await response.json();
//     console.log(typeof users, Array.isArray(users));
//     return users;
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// };

// (async () => {
//   try {
//     const users = await fetchUsers();
//     console.log(typeof users, Array.isArray(users));
//     console.log('Total users:', users.length);
//   }
//   catch(error) {
//   console.error(error);
//   }
// })();

// 4. Convert the function below into asyncrounous function using async/await and try/catch syntax.
// const fetchUserData = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const user = await response.json();
//     return user;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };

// fetchUserData()
//   .then(user => console.log('User data:', user))
//   .catch(error => console.error('Error:', error));

// 5. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const getPostsAndComments = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch post with id ${id}. Status: ${response.status}`);
    }
    const post = await response.json();
    const commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
    if (!commentsResponse.ok) {
      throw new Error(`Failed to fetch comment for the post with id ${id}. Status: ${response.status}`);
    }  
    const comments = await commentsResponse.json();
    console.log(comments);
    console.log(post);
  } catch (error) {
    console.error(error);
  }
};

// const getPostsAndComments = async (id) => {
//   try {

//     const [postResponse, commentsResponse] = await Promise.all([fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     ), fetch(
//       `https://jsonplaceholder.typicode.com/comments?postId=${id}`
//     )]);

//     if (!postResponse.ok) {
//       throw new Error(`Failed to fetch post with id ${id}. Status: ${response.status}`);
//     }
//     if (!commentsResponse.ok) {
//       throw new Error(`Failed to fetch comment for the post with id ${id}. Status: ${response.status}`);
//     }  
  
//     const [post, comments] = await Promise.all([postResponse.json(), commentsResponse.json()]);

//     console.log(comments);
//     console.log(post);
//   } catch (error) {
//     console.error(error);
//   }
// };

// 6.Convert the function below into asyncrounous function using async/await and try/catch syntax.

// const fetchWithTimeout = (url, timeout) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fetch(url)
//         .then(response => resolve(response.json()))
//         .catch(error => reject(error));
//     }, timeout);
//   });
// };

// fetchWithTimeout('https://jsonplaceholder.typicode.com/posts', 2000)
//   .then(posts => console.log(posts))
//   .catch(error => console.error(error));
