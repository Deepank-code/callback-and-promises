const greetingPromise = (name) => {
  return new Promise(function exe(resolve, reject) {
    resolve(name);
  });
};

const i = greetingPromise("deepank");
i.then((value) => {
  console.log("hello," + value + "!");
});
