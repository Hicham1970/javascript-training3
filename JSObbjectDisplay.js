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
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2090
}
                     
const myArray = Object.values(car);  
console.log(myArray); // [ 'Toyota', 'Corolla', 2090, [Function: NoiseMade] ]

const myString = JSON.stringify(car); 
console.log(myString); 
