let fs = require("fs");

let f1Promise = fs.promises.readFile("f1.txt");
let f2Promise = fs.promises.readFile("f2.txt");
let f3Promise = fs.promises.readFile("f3.txt");

f1Promise.then(function (data) {
  console.log(data + "");
});

f2Promise.then(function (data) {
  console.log(data + "");
});

f3Promise.then(function (data) {
  console.log(data + "");
});

// Read File Serialy

let fs = require("fs");

let f1Promise = fs.promises.readFile("f1.txt");

f1Promise
  .then(function (data) {
    console.log(data + "");
    return fs.promises.readFile("f2.txt");
  })
  .then(function (data) {
    console.log(data + "");
    return fs.promises.readFile("f3.txt");
  })
  .then(function (data) {
    console.log(data + "");
  });
