const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));

async function fetchingResult() {
  let to_do = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let post_detail = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let to_do_data = await to_do.json();
  let post_detail_data = await post_detail.json();
  let data = {
    todo: to_do_data,
    post_detail: post_detail_data,
  };
  return data;
}

fetchingResult().then((data) => {
  console.log(data);
});
