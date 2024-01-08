/**
 * Waiting for a Timeout
When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:
 */

//? run this script , wait 3 second and you will receive a console.log of "Hello world"
//!Remember when you pass a function as an argument to forget the parenthesis.

// setTimeout(myFunction, 3000); 

function myFunction() {
    console.log("Hello World"); 
}

// Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:

// setTimeout(function () { myFunc("I love you Nouhaila"); }, 4000);

function myFunc(value) {
    console.log(value); 
}

/**------------------------------------------------------------------------- */

// setTimeout(logHello, 3000); // not working here

const logHello = () => {
    console.log("Salutation");
}
// works if we call setTimeout after the function

// setTimeout(logHello, 3000);

/**---------------- */
console.log("1"); 
setTimeout(() => {
    console.log("2");
}, 0); 

console.log("3"); 
/**------------------------ */

const names = ["Dan", "Sam", "Ham", "Han", "Gol"]; 
// we can use the build in method forEach():
// names.forEach((name) => console.log(name));

// Or we can Create our own forEach function by using the callback functions:
// that is also true for the other array methods.
const myForEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) { 
        const element = arr[i]
        cb(element);
    }
}

myForEach(names, (name) => console.log(name + ' is awesome!')); 