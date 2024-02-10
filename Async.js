/**Async make the Promise easier to understand
 * async makes a function return a Promise
 * await makes a function wait for a Promise
 */

function executePromise() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        resolve(json);
      });
  });
}

// this is identic to this async function:

async function executePromise() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      resolve(json);
    });
}

/**
 * With the async All what is inside the async function became a new promise
 */

// whit more "order in the sentence":

async function CallPromise() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let json = await response.json();
  return json;
}

/**
 * we can not use await out side a async function
 * the word async is given to a function that will returns a promise 
 * the word await is used before any function that return a promise 
 */

async function CallApi() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let json = await response.json();
  console.log("Done!!");
  return json;
}

console.log("Before calling the function");
CallApi();
console.log("After calling the function");
/**the output
 * Before calling the function
 * After calling the function
 * Done!!
 */

/**--------------------------------------------------------- */

// function getData() {
//     return new Promise((res, rej) => {
//         let users = ["Hicham"];
//         if (users.length > 0) {
//             res("User (s) Found");
//         } else {
//             rej("No User Found");
//         }
//     });
// }

// getData().then(
//     (resolveValue) => console.log(resolveValue),
//     (rejectValue) => console.log("Rejected" + rejectValue)
//   );

// function getData() {
//   let users = [];
//   if (users.length > 0) {
//     return Promise.resolve("User (s) Found");
//   } else {
//     return Promise.reject("User (s) not  Found");
//   }
// }

// getData().then(
//   (resolveValue) => console.log("Accepted" + " " + resolveValue),
//   (rejectValue) => console.log("Rejected" + " " + rejectValue)
// );

// here we start using the async keyword

async function getData() {
  let users = [];
  if (users.length > 0) {
    return ("User (s) Found");
  } else {
    throw new Error("User (s) not  Found");
  }
}

getData().then(
  (resolveValue) => console.log("Accepted" + " " + resolveValue),
  (rejectValue) => console.log("Rejected" + " " + rejectValue)
);

