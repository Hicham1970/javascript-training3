/**
 * Waiting for a Timeout
When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:
 */

//? run this script , wait 3 second and you will receive a console.log of "Hello world"
//!Remember when you pass a function as an argument to forget the parenthesis.

setTimeout(myFunction, 3000); 

function myFunction() {
    console.log("Hello World"); 
}

// Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:

setTimeout(function () { myFunc("I love you Nouhaila"); }, 4000);

function myFunc(value) {
    console.log(value); 
}
