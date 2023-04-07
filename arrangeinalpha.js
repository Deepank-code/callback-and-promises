let books = [
  {
    title: "the great",
    author: "f.scot",
    year: 1990,
  },
  {
    title: "to kill",
    author: "hopper",
    year: 1990,
  },
  {
    title: "the mustang",
    author: "deepank",
    year: 1990,
  },
  {
    title: "alchemist",
    author: "f.scot",
    year: 1969,
  },
  {
    title: "pride of lion",
    author: "charu",
    year: 1980,
  },
];
function logtitle(titles) {
  console.log(titles.sort());
}
const arrange = function (obj, callback) {
  let titles = obj.map((book) => {
    return book.title;
  });

  callback(titles);
};
arrange(books, logtitle);
