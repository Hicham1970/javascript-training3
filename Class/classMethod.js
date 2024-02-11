/**
 * Create a Class method named "age", 
 * that returns the Car age:
 */

class car{
    constructor(name, year) {
        this.name = name; 
        this.year=year; 
    }
    age() {
        // date= new Date() // will not work case the variable is not initialized (strict Mode)
        const date = new Date(); 
        return date.getFullYear() - this.year; 
    }
}
const myCar = new car("Toyota", 2018);  
console.log(`The ${myCar.name} is ${myCar.age()} years old`); 

//? You can send parameters to Class methods:

class trucks{
    constructor(type, year) { 
        this.type = type;
        this.year = year;
    }
    age(x) {
        return x - this.year
        }
}

let date = new Date(); 
let year = date.getFullYear();

const myTruck = new trucks("Volvo", 2012); 
console.log(`The ${myTruck.type} have ${myTruck.age(year)} years old`)


//! Class Clock:
class Clock { 
    constructor(hours, minutes, seconds) { 
        this.hours = hours; 
        this.minutes = minutes;
        this.seconds = seconds;
    }
    displayTime() { 
        console.log(`It's currently ${this.hours}:${this.minutes}:${this.seconds}`)
    }
}
const clock = new Clock(5, 30, 45);
clock.displayTime();