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

/* setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700); */