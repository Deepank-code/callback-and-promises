const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));
try {
  fetch("https://jsonplaceholder.typicode.com/posts/123456789")
    .then((res) => {
      res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("this code is generation some error" + error);
    });
} catch (error) {
  console.log(error);
}
