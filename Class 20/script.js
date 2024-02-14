// Non Strcit mode

// // console.log(this);
// // function fxn() {
// //   console.log(this);
// // }

// // fxn();

// let obj = {
//   name: "Stark",
//   age: "No Idea",
//   Sayhello: function () {
//     console.log(this);
//   },
// };

// console.log(obj);global
// console.log(obj.Sayhello);
// obj.Sayhello();

// let Sayhello1 = obj.Sayhello;
// Sayhello1();

// strict mode

"use strict";

console.log(this);
function fxn() {
  function gxn() {
    console.log(this);
  }
  gxn();
}
fxn();

let obj = {
  name: "Rahul",
  age: "No idea",
  sayHi: function () {
    console.log(this);
  },
};
obj.sayHi();

const sayhi1 = obj.sayHi;
sayhi1();
console.log(sayhi1);
