/**
 * Sometimes you would like to have better control over when to execute a function.
Suppose you want to do a calculation, and then display the result.
You could call a calculator function (myCalculation), save the result, and then call another function (myDisplay) to display the result:
 */

function myDisplay(some) {
  console.log("this is my some :  " + some);
}

function myCalculation(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// console.log(myCalculation(5, 7)); // this will call the second function and
// log to the console the result of adding 5 and 7</s>
// myCalculation(2, 3);
var x = myCalculation(2, 3);
myDisplay(x);

// Or, you could call a calculator function (myCalculation), and let the calculator function call the display function (myDisplay):

function myDis(some) {
  console.log("This is the some : " + some);
}

function myCalc(num1, num2) {
  let sum = num1 + num2;
  myDis(sum);
}

console.log(myCalc(200, 122));

/**
 *! The problem with the first example above, is that you have to call two functions to display the result.
 *? The problem with the second example, is that you cannot prevent the calculator function from displaying the result.
 * ToDo Now it is time to bring in a callback.
 * Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished:
 */

function myDisplaced(some) {
  console.log("This is the display of the result : " + some);
}

function myCalculator(num1, num2, myCallback) {
  let result = num1 + num2;
  myCallback(result);
}

myCalculator(20, 2, myDisplaced); // This is the display of the result : 4
//In the example above, myDisplaced is  called a callback function.
// It is passed to myCalculator() as an argument.
//? the function myDisplaced is a callback function for the function myCalculator.
//!When you pass a function as an argument, remember not to use parenthesis.