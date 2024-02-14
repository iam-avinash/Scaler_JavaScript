let arr = [1, 2, 3, 4, 5, 6];

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i + arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

sumOfArray(arr);

let arr = [1, 2, 3, 4, 5];
let totalSum = arr.reduce(function (acc, num) {
  acc = acc + num;
  return acc;
}, 0);
console.log(totalSum);
