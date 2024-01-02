// javascript Class syntax:

// class ClassName {
//   constructor() { ... }
// }
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

/**
 * The example above creates a class named "Car".
The class has two initial properties: "name" and "year".
A JavaScript class is not an object.
It is a template for JavaScript objects.
 */
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(`myCar1.name: ${myCar1.name}, myCar2.year: ${myCar2.year}`);
