// let obj = { name: "alex", age: 29 };
// console.log(obj);

function Car(name, colour) {
  this.name = name;
  this.colour = colour;
}
Car.prototype.carDetails = function () {
  console.log(`its a ${this.name} and of colour ${this.colour}`);
};

let car1 = new Car("BMW", "RED");
console.log(car1);
car1.carDetails();

let car2 = new Car("AUDI", "Black");
console.log(car2);

function electricCar(name, colour, batteryType) {
  Car.call(name, colour);
  this.batteryType = batteryType;
}
electricCar.prototype = Object.create(Car.prototype);

let electricCar1 = new electricCar("tesla", "blue", "Hydrogen");
console.log(electricCar1);
electricCar1.carDetails();
