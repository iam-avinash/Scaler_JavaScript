// Q Write a Constructor Function for person having name and age property

function Person(fName, age) {
  (this.name = fName), (this.age = age);
}

let obj = new Person("Aman", "no idea");
console.log(obj);
