/** Getters and Setters
Classes also allows you to use getters and setters.
It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.
To add getters and setters in the class, use the get and set keywords.
Create a getter and a setter for the "carName" property:
 */

class Car {
  constructor(brand) {
    this._carBrand = brand;
  }
  get cname() {
    return this._carBrand;
  }
  set cname(newCarName) {
    this._carBrand = newCarName;
  }
}

// Testing our code:
const myCar = new Car("Ford");
// console.log(myCar.cname); // Ford
//To use a setter, use the same syntax as when you set a property value, without parentheses:
// changing  the name
myCar.cname = "Tesla";
console.log(`My new Car's name is ${myCar.cname}`); // Tesla</s>

/**
 * Note: even if the getter is a method, you do not use parentheses when you want to get the property value.
 */

class Animal {
  constructor(status, horns, tails) {
    this._animalStatus = status;
    this._numberOfHorns = horns;
    this._tailType = tails;
  }
  get animalInfo() {
    return `This ${this._animalStatus} has ${this._numberOfHorns}  horn(s) and has ${this._tailType} as tail `;
  }
  set animalInfo(info) {
    this._animalStatus = info;
  }
}

const rabbit = new Animal("herbivore", 0, "Long tail");
// console.log(rabbit.animalInfo);

rabbit.animalInfo = ("Carnivore");
console.log(rabbit.animalInfo);
