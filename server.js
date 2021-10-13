// const url = require("url");
// let fs = require("fs");
// let urls = "https://codepen.io/pen/?editors=0012";
// //modules are it can be build in methods which makes a complex or abstract
// const q = url.parse(urls);
// console.log(q.hostname);
// let data = "hello";
// fs.writeFile("message.txt", data, (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

// fs.readFile("./message.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

 const checkEquality = (x, y) => {
  if (x === y) {
    return true;
  } else {
    return false;
  }
};

module.exports={checkEquality}