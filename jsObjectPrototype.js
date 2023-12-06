// JS Object Constructor:
// here how to create a Constructor and how to use it in minimum:
// function Person(firstName, secondName, age, country) {
//     this.firstName = firstName;
//     this.secondName = secondName;
//     this.age = age;
//     this.country = country;
//     this.nationality = "Moroccan";
// }
 
// const father = new Person("Hicham", "Garoum", 53, "Morocco");
// console.log(father);


// console.log(`The nationality of my father is ${father.nationality}`);
/*---Prototype Inheritance
All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.

Adding Properties and Methods to Objects
Sometimes you want to add new properties (or methods) to all existing objects of a given type.

Sometimes you want to add new properties (or methods) to an object constructor.

Using the prototype Property
The JavaScript prototype property allows you to add new properties to object constructors:---*/

function Person(firstName, secondName, age, country) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.age = age;
  this.country = country;
}

// Person.prototype.nationality = "Tunisian";
// const person1 = new Person('John', 'Doe', 20, 'USA');
// console.log(person1);
// We add a new property to the constructor Person.

Person.prototype.name = function () {
    return `The complete name is : ${this.firstName} ${this.secondName}`;
} 
const person1 = new Person('John', 'Doe', 20, 'USA');
console.log(person1.name());
