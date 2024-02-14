// Js is synchronus single thread laungage
// Memory allocation happens first and then execution is happens
var n = 10;
// function Sum(num1, num2) {
//   let num = num1 + num2;
//   return num;
// }
// Arrow Function
Sum = (num1, num2) => {
  let num = num1 + num2;
  return num;
};
var c = Sum(10, 20);

console.log(c);

var d = Sum(n, 44);
console.log(d);
