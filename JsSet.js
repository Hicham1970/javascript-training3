// The new Set() Method
// Pass an Array to the new Set() constructor:
// Create a Set from an Array
// const letters = new Set(["a","b","c"]);
// // console.log(letters.size);


// // Create a Set and add literal values:
// // const letters = new Set();

// // letters.add("a");
// // letters.add("b");
// // letters.add("c");
// // letters.add("d");
// // console.log(letters);

// //output: Set(4) { 'a', 'b', 'c', 'd' }

// //Create a Set and add variables:
// // Create Variables
// const a = "a";
// const b = "b";
// const c = "c";

// // Create a Set
// const letters = new Set();

// // Add Variables to the Set
// letters.add(a);
// letters.add(b);
// letters.add(c);
// letters.add("d");
// letters.add("e");
// letters.add("e");
// letters.add("e");
// console.log(letters);
// // if you add equal items, only the first one will be accepted.

// the foreach() method:

// Create a Set
// const letters = new Set(["a","b","c"]);

// // List all entries
// let text = "";
// letters.forEach (function(value) {
//   text += value;
// })
// console.log(text);
// output: abc

// console.log(letters.values());
// [Set Iterator] { 'a', 'b', 'c' }
// Now you can use the Iterator object to access the elements:
// // Create an Iterator
// const myIterator = letters.values();

// // List all Values
// let txt = "";
// for (const entry of myIterator) {
//   txt += entry;
// }
// console.log(txt); //abc


// letters.add("d");
// letters.add("e");
// letters.add("F");
// letters.add("f");
// letters.add("f");
// letters.add("f");
// console.log(letters);


// // The keys() Method
// const cars = new Set(["Volvo", "Mercedes", "Ford"]);
// let myKeys = cars.keys();
// console.log(myKeys);

// let sq = "";
// for (const key of myKeys) {
//     sq += key.concat("09") + "\n";
// }
// console.log(sq);
/**
 * ! entries() Method:
 ** A Set has no keys.
 *! entries() returns [value,value] pairs instead of [key,value] pairs.
 *!This makes Sets compatible with Maps:
 */

// Create a Set
const letters = new Set(["a","b","c"]);
// Create an Iterator
const myIterator = letters.entries();

// List all Entries
let text = "";
for (const entry of myIterator) {
  text += entry + "\n" ;
}
console.log(text); 
console.log(typeof (letters)); 
console.log(letters instanceof Set);  // Returns true
/**  output: 
a, a;
b, b;
c, c;
*/
