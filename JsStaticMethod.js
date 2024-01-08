class Car {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return "Hello World";
  }
}

const myCar = new Car();
// Car.hello(); // Error, because it is a static method and should be called on an instance of the class not the class itself.
console.log(myCar.hello()); // Hello World

//! it's for that we add static to the  method, so it can be called on the class not an instance of a class

class Animal {
  constructor(spec, speed) {
    this._spec = spec;
    this._speed = speed;
  }
  static run(speed) {
    console.log(`Je vole avec une vitesse de ${speed} km/h`);
  }
  static whatSpecies(animal) {
    return `This animal belong to the ${animal._spec}`; 
  }
}

const amphibian = new Animal("Amphibian", 11); 
console.log(Animal.whatSpecies(amphibian)); 


const hawk = new Animal("Dan", 89);
/**
 * we can call the static method by the class parent and not by the child instance! */
Animal.run(100); //Je vole avec une vitesse de 100 km/h
// hawk.run(78); // TypeError: hawk.run is not a function
console.log(hawk._spec); // Dan
console.log(hawk._speed); // 89

/**
 * If you want to use the myCar object inside the static method, you can send it as a parameter:
 */

class Plant {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static growOlder(plant) {
    return (
      "this plant is called " +
      plant.name +
      " and have " +
      plant.age +
      " years old"
    );
  }
}

const tree = new Plant("Orange", 23);
console.log(Plant.growOlder(tree));
