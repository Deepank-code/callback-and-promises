const ageInDays = function (obj, callback) {
  let { fname, lname, age } = obj;
  let fullName = `${fname} ${lname}`;
  let ageindays = age * 365;
  return callback(fullName, ageindays);
};

const logResult = (fullName, ageindays) => {
  console.log(
    `The Person's full name is ${fullName},and their age in days is ${ageindays} `
  );
};

let output = ageInDays(
  { fname: "deepank", lname: "joshi", age: 23 },
  logResult
);

// console.log(output);
