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

function calculate(radiusArr, logic) {
  let result = [];
  for (let i = 0; i < radiusArr.length; i++) {
    result.push(logic(radiusArr[i]));
    // console.log(radiusArr[i]);
  }
  return result;
}

let finalDiameter = calculate(radiusOfCircles, diameter);
console.log("Final Diameter of the " + finalDiameter);

let finalArea = calculate(radiusOfCircles, area);
console.log("Final Area of the " + finalArea);

let finalCircumference = calculate(radiusOfCircles, circumference);
console.log("Final circumference of the " + finalCircumference);
