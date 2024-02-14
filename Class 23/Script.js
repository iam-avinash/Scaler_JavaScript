// // function fxn() {
// //   let d = 50;
// //   console.log(d);
// // }

// // fxn();
// // let a = 10;
// // console.log(a);
// // let b = 20;
// // console.log(b);
// // setTimeout(function () {
// //   console.log("hello");
// // }, 2000);
// // function fxn(cb) {
// //   console.log("I am HDF");
// //   cb();
// // }

// // function cb() {
// //   console.log("I am Call Back");
// // }

// // fxn(cb);

// console.log("1");

// setTimeout(function () {
//   console.log("2");
// }, 5000);

// setTimeout(() => {
//   console.log(4);
// }, 0);

// console.log("3");

let fs = require("fs");
const { isPromise } = require("util/types");
// console.log(fs);

fs.readFile("f1.txt", function cb(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log("Data of file 1 " + data);
  }
});

fs.readFile("f2.txt", function cb2(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log("Data of file 2 " + data);
  }
});
