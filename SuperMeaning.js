/** Super = is a keyword used in classes to call the constructor or access the properties and methods of a parent (superclass)
 * this = this object
 * super = this parent
 */

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  Move(speed) {
    console.log(`${this.name} is moving at a speed of ${speed} km/h.`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
  run() {
    console.log(`${this.name} can run`);
    super.Move(this.runSpeed)   ;
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  swim() {
    console.log(`${this.name} can swim`);
    super.Move(this.swimSpeed);
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
  fly() {
    console.log(`${this.name} can fly`);
    super.Move(this.flySpeed);
  }
}

const rabbit = new Rabbit("Benny", 12, 22);
const fish = new Fish("leo", 2, 28);
const hawk = new Hawk("Shah", 6, 80);

console.log(rabbit.name);
console.log(fish.age);
console.log(hawk.flySpeed);

//**! the 3 child class have in common name and age as properties, so to not repeat our selfs we have to put them in the superclass constructor, that helps in code visibility and reusability */
/**
 * Any property that the child share in common is controlled by the superclass constructor and we can use them by the keyword super
 */

/**
 * The second use of super is that he can expend the method from the parent ?? creating the Move method in the parent class and also create a method which can extend this Move() method run() swim() and fly()
 */

rabbit.run(); // Output: This Benny can run
fish.swim(); // Output: This Benny can run
hawk.fly(); // Output: This Benny can run

/**we are going to extend the method move() to the child class by using the keyword super which represent the parent , and super.move() means the method Move () of the parent can be reused by the class child as well */
