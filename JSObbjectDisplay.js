// // Display a javascript Object/
//  const person = {
//    name: "John",
//    age: 30,
//      city: "New York",
//      country: "USA",
//      fullName: function () {
//        console.log(person.name + "" + person.age);
//    }
// };

// let txt = "";
// for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//         txt += `${key}: ${person[key]}\n`;
//     }
// }
// console.log(txt);

// console.log(`Mr.${person.name} aged of ${person.age} years is living quietly in ${person.city} with his big family`);

// Accessing the properties of an object in JavaScript
// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2090
// }

// const myString = JSON.stringify(car);
// console.log(myString);

// const myArray = Object.values(car);
// console.log(myArray); // [ 'Toyota', 'Corolla', 2090, [Function: NoiseMade] ]


// const person = {
//   name: "John",
//   today: new Date(),
// };

// const myStr = JSON.stringify(person);
// console.log(myStr); // {"name":"John","today":"2023-12-04T15:52:02.908Z"}

//
//Stringify Functions
// JSON.stringify will not stringify functions:
// const person = {
//   name: "John",
//   age: function () {return 30;}
// };

// person.age = person.age.toString();
// let myString = JSON.stringify(person);
// console.log(myString);
// // {"name":"John","age":"function () {return 30;}"}


// Stringify an Array:
// It is also possible to stringify JavaScript arrays:

// const arr = ["John", "Peter", "Sally", "Jane"];

// let myString = JSON.stringify(arr);
// console.log(myString) ; // ["John","Peter","Sally","Jane"]