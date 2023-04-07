function manipulateString(Originalstring, callback) {
  let manuplitatedStr = Originalstring.toUpperCase();
  return callback(manuplitatedStr);
}

const logString = (str) => {
  console.log("The manipulated string is:" + str);
};

const example = manipulateString("this is my string", logString);
