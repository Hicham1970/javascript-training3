const person = {
  name: "Mike",
  age: 25,
  occupation: "teacher",
};
Object.defineProperty(person, "occupation", { value: "doctor" });
Object.defineProperty(person, "occupation", { enumerable: true });

// Create object with an existing object as prototype
// Object.create()

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)
console.log(Object.getOwnPropertyDescriptor(person, occupation));

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Returns enumerable properties as an array
Object.keys(object)


console.log(person);
