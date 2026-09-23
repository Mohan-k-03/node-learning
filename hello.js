console.log("Hello Mohan");

console.log(global);

setTimeout(() => {
  console.log("hello");
  clearInterval(clear);
}, 5000);

const clear = setInterval(() => {
  console.log("super");
}, 1000);


console.log(__dirname);
console.log(__filename)




