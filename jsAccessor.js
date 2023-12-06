// JS Accessors:Getter & Setter
// JavaScript Getter (The get Keyword)
// This example uses a lang property to get the value of the language property.
// Getters and setters allow you to get and set object properties via methods
//This example uses a lang property to get the value of the language property:
// Create an object:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   get lang() {
//     return this.language;
//   },
// };

// // Display data from the object using a getter:
// console.log(person.lang);
// // output : en

// JavaScript Setter (The set Keyword)
// This example uses a lang property to set the value of the language property.

// const cars = {
//   brand: "Ford",
//   model: "Nb23",
//   year: 1985,
//   color: "",
//   set colorationSet(col) {
//     this.color = col;
//   },
// };

// cars.color = "red";
// console.log(cars.color);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "",
//   set lang(lang) {
//     this.language = lang;
//   },
// };

// // Set an object property using a setter:
// person.lang = "Arabic";

// // Display data from the object:
// console.log(person.language) ;

// // Difference between Functions and Setter?
// // Example 1:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// // Display data from the object using a method:
// console.log(person.fullName());

// Example 1:
const person = {
  firstName: "John",
  lastName: "Doe",
  country: "France",
  get count() {
    return this.country.toUpperCase();
  },
};

// // Display data from the object using a method:
// console.log(person);

// example 2:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "",
//   set lang(lang) {
//     this.language = lang.toUpperCase();
//   },
// };

// // Set an object property using a setter:
// person.lang = "en";

// // Display data from the object:
// console.log(person) ;

/*-----
Why Using Getters and Setters?
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes


Object.defineProperty()
The Object.defineProperty() method can also be used to add Getters and Setters:----*/

// creating object:

// const myObject = {
//   score: 0,
// };

// Object.defineProperty(myObject, "reset", {
//   get: function ()  {
//     this.score = 10;
//   },
// });
// Object.defineProperty(myObject, "increment", {
//   get: function ()  {
//     this.score++;
//   },
// });

// Object.defineProperty(myObject, "decrement", {
//   get: function() {
//     this.score--;
//   },
// });

// Object.defineProperty(myObject, "add", {
//     set: function (value) {
//         this.score += value;
//     }
// })
// Object.defineProperty(myObject, "reduce", {
//   set: function (value) {
//     this.score -= value;
//   },
// });

// console.log("Score before resetting: ", myObject.score);
// myObject.reset;
// console.log("Score after resetting: ", myObject.score);
// console.log("Score before adding: ", myObject.score);
// myObject.add = 5;
// console.log("Score after adding: ", myObject.score);
// console.log("Score before reducing: ", myObject.score);
// myObject.reduce = -2;
// console.log("Score after reducing: ", myObject.score);
// myObject.increment;
// console.log("Score after incrementing: ", myObject.score);
// console.log("Score before decrementing: ", myObject.score);
// myObject.decrement;
// console.log("Score after decrementing: ", myObject.score);

// /*----Score before resetting:  0
// Score after resetting:  10
// Score before adding:  10
// Score after adding:  15
// Score before reducing:  15
// Score after reducing:  17
// Score after incrementing:  18
// Score before decrementing:  18
// Score after decrementing:  17
// -----*/
