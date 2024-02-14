// let bmwCar = {
//   name: "BMW",
//   color: "Red",
//   topSpeed: "300km/h",
// };

function car(name_of_car, color_of_car, topSpeed_car) {
  this.name = name_of_car;
  this.color = color_of_car;
  this.topSpeed = topSpeed_car;
}
let bmwCar = new car("BMW", "Red", "400km/h");
console.log(bmwCar);

let tataCar = new car("TATA", "Black", "150km/h");
console.log(tataCar);
