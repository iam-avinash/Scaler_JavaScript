// function firstName() {
//   console.log("Yashwant");
// }
function lastName() {
  console.log("Kumar");
}

function printAge() {
  console.log(24);
}

// firstName();
// lastName();

var fxnExpression = function () {
  console.log("i am function Expression");
};

fxnExpression();

function firstName(fxn, dxn) {
  console.log("Rahul");
  fxn();
  dxn();
}
firstName(lastName, printAge);
