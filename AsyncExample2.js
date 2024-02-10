function myDisplay(someThing) {
  console.log("someThing");
}

async function myFunction() {
  return "Hello";
}

myFunction().then(
  function (value) {
    myDisplay(value);
  },
  function (error) {
    myDisplay(error);
  }
);
