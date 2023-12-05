/*---
Object Types (Blueprints) (Classes)
The examples from the previous chapters are limited. They only create single objects.

Sometimes we need a "blueprint" for creating many objects of the same "type".

The way to create an "object type", is to use an object constructor function.

In the example above, function Person() is an object constructor function.

Objects of the same type are created by calling the constructor function with the new keyword:
---*/
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;

//   this.name = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }

// to add a Method to the constructor we do this way not like below:

function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  };
}

let myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green", myMother.changeName);
// const mySon = new Person("Sam", "Doe", 18, "green", mySon.changeName);
// const myDotter = new Person("Moly", "Doe", 28, "blue", myDotter.changeName);

myFather.changeName("Donald");
console.log(myFather);

// console.log(myMother);
// console.log(mySon);
// console.log(myDotter);
/*---
When you call the constructor function using the new operator, it creates a new empty object and assigns that as the value of `this`.
We can also add methods to our blueprint using prototype:   
---*/

// myFather.nationality = "English";
// myFather.name = function () {
//   return this.firstName + " " + this.lastName;
// };

// console.log(myFather.name());
// JS Build in function constructors:

// Built-in JavaScript Constructors
// JavaScript has built-in constructors for native objects:

new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object