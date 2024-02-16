// document.getElementById("counter-el").innerHTML = 5;
// document.getElementById("counter-el").style.color = "red";

// Initialize the counter
// Listen for the clicks on the increments-btn, by inserting the onclick attribute
// Increment the counter when the increments-btn is clicked
// Change the counter-el in the HTML to reflect the new count

let countEl = document.getElementById("counter-el");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
  countEl.style.color = "red";
}

// create a function save(), that is logging out the count when it's called:
// Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
function save() {
  // create a variable that contain both the count and a "-"
  let countStr = count + "  - ";
  //Render the variable in the saveEl using innerText, making sur that the existing content of the paragraph is not deleted (==> +=)
  saveEl.textContent += countStr;
  // returning the count to zero
    countEl.textContent = 0
    count = 0;
}
save();

//By using the textContent instead of innerText , we can add a space between the count and the "-" .
