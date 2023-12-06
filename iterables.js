// Iterable objects are objects that can be iterated over with for..of.
// Technically, iterables must implement the Symbol.iterator method.
// Iteration over a string:
// let txt = ""
// for (const x of "W3Schools") {
// //   txt+= x + " ";
// // }
// // console.log(txt);

// // iteration over an Array:
// let txt = ""
// for (const x of [1, 2, 3, 4, 5]) {
//    txt+= x + " ";
//  }
// console.log(txt);

/*----
JavaScript Iterators
The iterator protocol defines how to produce a sequence of values from an object.

An object becomes an iterator when it implements a next() method.
The next() method must return an object with two properties:
value (the next value)
done (true or false)
value	The value returned by the iterator
(Can be omitted if done is true)
done	true if the iterator has completed
false if the iterator has produced a new value---*/
// // Home Made Iterable
// function myNumbers() {
//   let n = 0;
//   return {
//     next: function() {
//       n += 10;
//       return {value:n, done:false};
//     }
//   };
// }

// // Create Iterable
// const n = myNumbers();
// console.log(n.next()); // Returns { value: 10, done: false }
// console.log(n.next()); // Returns { value: 10, done: false }
// console.log(n.next()); // Returns { value: 10, done: false }
// console.log(n.next()); // Returns { value: 10, done: false }
// console.log(n.next()); // Returns { value: 10, done: false }
// console.log(n.next()); // Returns { value: 10, done: false }
// console.log(n.next()); // Returns { value: 10, done: false };

/*----The problem with the Home made iterable is 
that it does not support the for..in loop statement
So we use the Symbol.iterator function that return the next() function
here the best way to do that  ----*/

// Create an Object
// myNumbers = {};

// // Make it Iterable
// myNumbers[Symbol.iterator] = function() {
//   let n = 0;
//   done = false;
//   return {
//     next() {
//       n += 10;
//       if (n == 180) {done = true}
//       return {value:n, done:done};
//     }
//   };
// }

//  Now you can use for..of:
// Method 1:The Symbol.iterator method is called automatically by for..of.

// let dx = ""
// for (let num of myNumbers) {
//     dx += num + "\n";
// }
// console.log(dx);

// // Method 2 :we can do it  Manually.
// // Create an Iterator
// let iterator = myNumbers[Symbol.iterator]();
// let text = ""
// while (true) {
//     const result = iterator.next();
//     if (result.done) break;
//     text += result.value +"<br>";
// }
// console.log(iterator); // function next()
// console.log(text); 
