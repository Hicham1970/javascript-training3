/**
 * How to Create a Map
You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()
 */
// // Create a Map
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);
// console.log(fruits);
// // Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }

/**
 * 
Map.set()
You can add elements to a Map with the set() method:
 */
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// console.log(fruits);
//! The set() method can also be used to change existing Map values:*/
// fruits.set("apples", 100);
// console.log(fruits.get("apples"));
// console.log(fruits.size);
// fruits.delete("apples");
// console.log(fruits.has("apples"));

// console.log(typeof(fruits))
// console.log(fruits instanceof Map);

// console.log(fruits);

/**
* * Map.forEach()
* ! The forEach() method invokes a callback for each key/value pair in a Map:
 */

// // List all entries
// let text = "";
// fruits.forEach (function(value, key) {
//   text += key + ' = ' + value + "\n";
// })


// // console.log(text);

// /**
//  * Map.entries() Method:
//  * 
//  */

// // List all entries
// let tet = "";
// for (const x of fruits.entries()) {
//   tet += x + "\n";
// }
// console.log(tet);


// /*
// Map.keys() Method:The keys() method returns an iterator object with the keys in a Map:*/

// // List all keys
// let text = "";
// for (const x of fruits.keys()) {
//   text += x + "\n";
// }

// console.log("the keys in the Map" +"\n" + text); 
