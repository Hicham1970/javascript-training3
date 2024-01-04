/**
Inheritance= allows a new class to inherit properties and methods from an existing class (Parent ⇒ Child).
To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class:
Example: Create a class named "Model" which will inherit the methods from the "Car" class:
 */

//? Create first the parent class: Animal
class Animal {
  alive = true; // an animal property

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

//* Now let's create the child Rabbit Fish and Hawk class which inherit all the properties and methods of their parent Animal*/

class Rabbit extends Animal {
  name = "rabbit";
  run() {
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animal {
  name = "fish";
  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}

class Hawk extends Animal {
  name = "hawk";
  fly() {
    console.log(`This ${this.name} is flying`);
  }
}

/**Then let's create class from this child class*/

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

//! let's reach the rabbit properties and methods inherited :
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();

// ? we can even change the property alive of the rabbit, he was killed by the hawk ;)

// rabbit.alive = false;
// console.log(rabbit.alive);

// hawk demo:
console.log(hawk.alive);
hawk.eat();
hawk.sleep();

// each child class Rabbit Fish and Hawk can have it's own method run() swim() and fly(),

rabbit.run();
fish.swim();
hawk.fly();
