// function car(name, colour) {
//   this.name = name;
//   this.colour = colour;
// }

// car.prototype.getDeatils; = function () {
//         console.log();
// }

// let anyCar = new car("BMW", "Blue");
// console.log(anyCar);

let obj = {
  name: "Tharun",
  age: "No idea",
  sayHello: function (batch1, batch2, batch3) {
    (this.batch1 = batch1), (this.batch2 = batch2), (this.batch3 = batch3);
    console.log("Value of this function", this);
  },
};
obj.sayHello();

let obj1 = {
  name: "Avinash",
  age: "No idea",
};
let arBatch = ["march Batch", "May Batch", "June Batch"];
obj.sayHello.call(obj1, "March", "June", "Nov");

obj.sayHello.apply(obj1, arBatch);

let newFunc = obj.sayHello.bind(obj1);
newFunc();
