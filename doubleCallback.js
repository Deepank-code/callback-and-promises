let arr = [2, 45, 2, 45, 63];

const double = function (numArray, callback) {
  let newArray = numArray.map((num) => {
    return callback(num);
  });

  return newArray;
};

const callback = (num) => {
  return num * 2;
};
const doubledArray = double(arr, callback);
console.log(doubledArray);
