
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback that Keeps only positive numbers
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
console.log(posNumbers);

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}

/**In the example above, (x) => x >= 0 is a callback function.
It is passed to removeNeg() as an argument.*/