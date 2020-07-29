const spinner2 = function(delay) {
  let animationArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
  let counter = 0;
  for (let iteration of animationArr) {
    counter += delay;
    setTimeout(() => {
      process.stdout.write(iteration);
    }, counter);
  }
};

spinner2(200);