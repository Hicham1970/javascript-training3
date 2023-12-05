/*-- l' Accessor get: Accessor : Person ou
 chose qui accede à quelqu'un ou quelque chose.
Object.defineProperty(obj, "Accessor", {
  get : function () {this.counter = 0;}
});


le mutator set: modifications 
Object.defineProperty(obj, "mutator", {
  set : function (value) {this.counter += value;}
});
---*/

// Define an object
const obj = {counter : 0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
console.log(obj.counter); 


