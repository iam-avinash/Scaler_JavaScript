//We are given an array, which has the radius of different circles, we need to find the area, circumference and diameter for all the radiuses.

let radiusOfCircles = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function diameterOfCircle(radiusArr) {
  let result = [];
  for (let i = 0; i < radiusArr.length; i++) {
    result.push(radiusArr[i] * 2);
  }
  return result;
}

let finalDiameter = diameterOfCircle(radiusOfCircles);
console.log("Diameter of The given Radius are " + finalDiameter);

function circumferenceofCircle(radiusArr) {
  let result = [];
  for (let i = 0; i < radiusArr.length; i++) {
    result.push(2 * Math.PI * radiusArr[i]);
  }
  return result;
}

let finalCircumference = circumferenceofCircle(radiusOfCircles);
console.log("circumference of The given Radius are " + finalCircumference);

function areaofCircle(radiusArr) {
  let result = [];
  for (let i = 0; i < radiusArr.length; i++) {
    result.push(Math.PI * radiusArr[i] * radiusArr[i]);
  }
  return result;
}

let finalArea = areaofCircle(radiusOfCircles);
console.log("Area of The given Radius are " + finalArea);
