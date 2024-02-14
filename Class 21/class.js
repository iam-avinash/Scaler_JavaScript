class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  // Prototype Method
  greet() {
    console.log(`Hello my name is ${this.name},How are you?`);
  }
  // Static method
  static details() {
    console.log("This is class describe name, age and greeting for a person");
  }
}
Person.details();

class Student extends Person {
  constructor(name, age, batch) {
    super(name, age);
    this.batch = batch;
  }
}

class Teacher extends Student {
  constructor(name, age, batch, classStrength) {
    super(name, age, batch);
    this.classStrength = classStrength;
  }
}

const person1 = new Person("Avinash", "27");
console.log(person1);

const person2 = new Person("Rahul", "25");
console.log(person2);

let students1 = new Student("Rahul", "25", "Morning");
console.log(students1);

let Teacher1 = new Teacher("XYZ", "22", "No Idea", "400");
console.log(Teacher1);

person2.greet();
Teacher1.greet();
