// // ECMAScript 5 (2009) added a lot of new Object Methods to JavaScript.
// //Managing Objects:

// // Create object with an existing object as prototype
// Object.create()

// // Adding or changing an object property
// Object.defineProperty(object, property, descriptor)

// // Adding or changing object properties
// Object.defineProperties(object, descriptors)

// // Accessing Properties
// Object.getOwnPropertyDescriptor(object, property)

// // Returns all properties as an array
// Object.getOwnPropertyNames(object)

// // Accessing the prototype
// Object.getPrototypeOf(object)

// // Returns enumerable properties as an array
// Object.keys(object)

// // Protecting Objects:
// // Prevents adding properties to an object
// Object.preventExtensions(object)

// // Returns true if properties can be added to an object
// Object.isExtensible(object)

// // Prevents changes of object properties (not values)
// Object.seal(object)

// // Returns true if object is sealed
// Object.isSealed(object)

// // Prevents any changes to an object
// Object.freeze(object)

// // Returns true if object is frozen
// Object.isFrozen(object)

// Examples:

const person = {
    name: 'John',
    age: 30,
    language :"English"
}

// Change a property:
Object.defineProperty(person, "language", { value: "No" });
console.log(person.language); // Output: No


// Changing Meta Data
// ES5 allows the following property meta data to be changed:
/**
 * writable : true/ false      // Property value can/ or not be changed
enumerable : true/ false    // Property can/ or not be enumerated
configurable : true/ false  // Property can/ or not be reconfigured
 */

//ES5 allows getters and setters to be changed:
//// Defining a getter
// get: function() { return language }
// // Defining a setter
// set: function(value) { language = value }