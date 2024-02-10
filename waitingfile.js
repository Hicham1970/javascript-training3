// Waiting for a file
// Example using Callback:

function myDisplay(somethingToDisplay) {
  console.log(somethingToDisplay);
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "promesses.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(req.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplay);


// Todo: revoir ce script in future 