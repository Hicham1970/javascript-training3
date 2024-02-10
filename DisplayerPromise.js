function myDisplay(somethingToDisplay) {
  console.log(somethingToDisplay);
}

let myPromise = new Promise((accept, reject) => {
  let x = 6;
  //producing code:
  if (x === 0) {
    accept("I am accepted");
  } else {
    reject("je suis rejected");
  }
});

//Consuming the code:
myPromise.then(
  (value) => {
    myDisplay(value);
  },
(error)=> {
    myDisplay(error);
  }
);
/**-------------------------------------- */
// Example Using Callback:
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  console.log(value);
}
// After 3 minutes the message "I love you will be displayed"

// Example with a Promise concept:

let myProm = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You Islam !!"); }, 6000);
});

myProm.then(function(value) {
  console.log(value);
});
