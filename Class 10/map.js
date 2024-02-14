let radiusOfCircles = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function diameter(radius) {
  return 2 * radius;
}
function area(radius) {
  return Math.PI * radius * radius;
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

// function calculate(radiusArr, logic) {
//   let result = [];
//   for (let i = 0; i < radiusArr.length; i++) {
//     result.push(logic(radiusArr[i]));
//     // console.log(radiusArr[i]);
//   }
//   return result;
// }

let diameterOfCircle = radiusOfCircles.map(diameter);

console.log("Final Diameter of the " + diameterOfCircle);

//You are given a transaction array treat the transaction amount in rupees, and convert those amounts into dollars and conversion rate is also provided to us.

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 80;

function convert(amount) {
  return amount / inrtToUsd;
}

let convertedAmount = transactions.map(convert);
console.log(convertedAmount);
