let a = 10;

console.log(a);

hello();

function hello() {
  console.log("hello World");
}

let helloWorld = function () {
  console.log("Hello world from Function expression");
};

helloWorld();

let arr = [1, 2, 3, 4, 5];

// function fxn(arr) {
//   arr.push(6);
//   return arr;
// }
// let result = fxn(arr);
// console.log(arr);
// console.log(result);

function anfxn(arr) {
  arr.push(7);
  return arr;
}

let anotherResult = anfxn(arr);
console.log(arr);
console.log(anotherResult);

let text;

function showMessage(text) {
  if (text === undefined) {
    alert("error!");
  } else {
    alert("hello the text is = " + text);
  }
}

showMessage(text);
