const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));
async function fetching() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await res.json();
  console.log(data);
}
fetching();
