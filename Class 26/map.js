let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let square = arr.map(function (ele) {
//   return ele * ele * ele * ele * ele * ele;
// });

// console.log(square);

Array.prototype.myMap = function (callback) {
  let resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray[i] = callback(this[i]);
  }
  return resultArray;
};

let square = arr.myMap(function (ele) {
  return ele * ele;
});
console.log(square);
